### ✔ 문제 요약

### 1. **문제 상황**

- 매칭 성사 화면에서 의도한 **배경 그라디언트**와 **로띠(Lottie) 애니메이션 강조 그라디언트**가 정상적으로 표시되지 않는 문제가 발생했다.
- 기존에는 해당 그라디언트가 정상적으로 렌더링되고 있었으나, **API 연동 작업**과 **리베이스 과정**, 그리고 **전체 레이아웃 구조 수정**을 반복하면서 예상치 못하게 레이아웃이 깨지고, 그라디언트가 전혀 보이지 않는 상황이 발생했다.
- 초기 설계 단계에서 **`position: fixed`를 가급적 사용하지 않으려고 했던 선택**이 이번 문제에 영향을 준 것으로 보인다. 그라디언트를 fixed로 처리하지 않고 상대적인 레이아웃에서 구현하려다 보니, **상위 컨테이너의 overflow, z-index, transform 속성** 등의 영향을 받으면서 의도치 않게 가려지는 현상이 발생했을 가능성이 높았다.
- 특히 **리베이스 후 코드 충돌을 해결하면서 일부 스타일 로직이 누락되거나 덮어씌워졌을 가능성**도 존재했다. 기존에 잘 보이던 그라디언트가 사라진 시점이 명확하지 않아 원인을 추적하는 데 시간이 소요되었다.
- QA 과정에서 Lottie 애니메이션의 강조 영역이 정상적으로 표현되지 않아, 화면의 **강조 포인트가 사라지고 시각적 완성도가 떨어지는 문제**가 드러나면서 해당 이슈가 중요하게 부각되었다.

### ✔ 원인 분석

- 기존 구조에서는 배경 그라디언트와 로띠 강조 그라디언트를**absolute**로 포지셔닝하여,`.matching-success-background`, `.matching-lottie-gradient` 클래스를 통해 배치했다.
- 하지만,**Header**가 상위 Layout 컴포넌트에서 먼저 렌더링되고, 배경 그라디언트가 포함된 MatchingSuccessView는 그 아래 DOM 계층에 위치해 있었다.
- 이때, 아무리 z-index를 높게 주어도 **부모 stacking context**의 영향으로 Header보다 위로 올라오지 않았다.
- **z-index와 position 속성은 DOM 계층 구조의 맥락(=stacking context) 안에서만 동작한다.**
- 부모 요소가 낮은 z-index를 가지거나 stacking context를 새로 만들면, 자식이 아무리 z-index를 높여도**부모의 stacking context를 벗어나지 못하였다.**
- 특히, Header가 상위에 있고, 배경 그라디언트가 상대적으로 하위 DOM에 있으면 z-index만 높여서는 절대 위로 올라오지 않는다.

### ✔ 해결 방법

### **absolute → fixed**

- **absolute** 대신 **fixed** 포지셔닝을 사용하여 해결했다.
- `position: fixed`는 DOM 계층과 무관하게**뷰포트 기준**으로 배치되므로, stacking context의 영향을 받지 않았다.
- 배경 그라디언트와 로띠 강조 그라디언트를 fixed로 선언하여,**Header보다 아래, 주요 콘텐츠보다 뒤**에 자연스럽게 깔리도록 설계하였다.

### **Foreground와 Background의 명확한 분리**

- **텍스트, Lottie 애니메이션 등 주요 콘텐츠**는
z-10 이상으로 두어 foreground 계층에서 명확하게 표현하였다.
- **배경 그라디언트**는 z-0 이하로 두어
background 계층에서 자연스럽게 깔리도록 조정하였다.

### **Layout 및 Route 구조는 그대로**

- 전체 Layout 및 Route 구조는 그대로 두고, **MatchingSuccessView 내부에서만 포지셔닝을 수정**하여 영향 범위를 최소화했다.
- 이 접근법 덕분에 **다른 페이지나 컴포넌트에 미치는 부작용 없이 문제를 해결**할 수 있었다.

### 실제 CSS 예시 (custom-utilities.css)

```css
.matching-success-background {
  @apply absolute left-1/2 w-[30rem] h-[30rem] blur-3xl rounded-full z-[var(--z-negative-5)];
  top: calc(50% + 10px);
  transform: translate(-50%, -50%);
  background: radial-gradient(67.17% 67.17% at 33.26% 84.78%, #9be88a 5%, #bcf3ff 88.05%);
}

.matching-lottie-gradient {
  @apply absolute left-1/2 top-1/2 w-[18rem] h-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full z-[var(--z-negative-1)];
  background: radial-gradient(
    74.24% 74.24% at 50.22% 50.22%,
    rgba(255, 255, 255, 0) 46.82%,
    #ffffff 72.4%
  );
}
```

### 실제 적용 예시 (MatchingSuccessView)

```tsx
<div className="fixed top-[17rem] left-0 w-full h-full z-0">
  <div className="matching-success-background" />
  <div className="matching-lottie-gradient" />
  <div className="z-[var(--z-card-profile-4)] h-[16rem] w-[16rem] flex-row-center">
    <Lottie src={LOTTIE_PATH.SUCCESS} loop className="w-[16rem]" />
  </div>
</div>
```

- 기존 absolute → fixed로 변경
- z-index는 0 이하로 설정하여 Header보다 뒤에, 주요 콘텐츠보다 아래에 위치

### ✔ 회고 및 개선 방향

- **z-index 문제는 단순히 값의 크기로 해결되지 않는다.** Stacking context에 대한 명확한 이해가 없으면 레이아웃 문제를 해결하기 어렵다는 점을 다시 깨달았다.
- `position: fixed`는 **DOM 구조에 구애받지 않고 원하는 레이어링을 구현할 수 있는 강력한 도구**임을 체감했다.
- 이번 경험으로 인해 **레이아웃을 건드리지 않고, 컴포넌트 단에서 포지셔닝 전략을 유연하게 바꾸는 접근법**이 훨씬 효율적일 수 있다는 것을 배웠다.