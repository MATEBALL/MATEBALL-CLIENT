### ✔ 문제 요약

**기존 useMatchCreate** 훅은 두 API(**`SINGLE_MATCH_RESULT`**, **`GROUP_MATCH_RESULT`**)와 Mock 데이터(**`mockMateSingle`**)를 모두 한 곳에서 다루면서, **`type`**이라는 Prop에 따라 분기 처리하도록 설계되어 있었다.

```tsx
const useMatchCreate = (matchId: number, type: 'single' | 'group' | null | undefined) => {
  // 그룹 결과 조회 요청
  const { data: mateGroup } = useSuspenseQuery<getGroupMatchResultResponse>(
    matchQueries.GROUP_MATCH_RESULT(matchId, type === 'group')
  );

  const getMatchData = (): MatchCardData | null => {
    if (type === 'single') { ... } // mock 데이터 반환
    if (!mateGroup) return null;
    return { ...mateGroup, type: 'group' }; // 그룹 API 응답 반환
  };

  return { matchData: getMatchData() };
};

```

- **문제 1: 타입에 따라 쿼리/데이터 분기가 동적으로 일어남.**
    
    **`type`**이 **`group`**일 때는 **`useSuspenseQuery`**로 그룹 매치 결과를 불러오고,
    
    **`type`**이 **`single`**일 때는 mock 데이터를 사용하도록 분기 처리됨.
    
- **문제 2: 두 쿼리 훅을 동시에 선언하고, 조건부로 반환.**
    
    훅 내부에 **`useSuspenseQuery`**가 한 번만 있을 것 같지만, **`type`**이 **`group`**이면 항상 **`useSuspenseQuery`**가 실행됨.
    
    **`type`**이 **`single`**이면 이 훅은 실행되지 않지만, 다른 컴포넌트에서의 사용이 명확하지 않음.
    
- **문제 3: mock 데이터와 API 데이터를 섞어 쓰고 있음.**
    
    **`single`** 타입 결과는 mock이고, **`group`** 타입 결과는 API 데이터에서 가져옴. 이는 미래에 API 전환 시 유지보수를 힘들게 함.
    
- **문제 4: 조건부 렌더링이 훅 내부에서 일어남.**
    
    이 구조는 React Hook 규칙상 무조건 훅은 **항상 같은 위치에서 호출되어야** 한다는 원칙을 어기게 됨.
    

### ✔ 원인 분석

- **2-1. useSuspenseQuery는 조건부로 호출할 수 없음**
    
    **`type`**에 따라 **`useSuspenseQuery`**를 바로바로 바꿔서 쓰면, 리액트는 훅 호출 순서를 기준으로 내부 상태를 관리하므로 **`type`**이 바뀌면 호출 순서가 꼬여 에러 발생!
    
- **2-2. enabled로 조건부 실행을 시도**
    
    **`useSuspenseQuery`**에서 **`enabled`** 옵션(**`GROUP_MATCH_RESULT(matchId, type === 'group')`**)을 줘도
    
    이는 단순히 쿼리 결과의 **`data`**와 **`isFetching`** 등을 제어할 뿐, 훅 자체가 **실행 자체를 억제하는 것은 아님**. 즉, **`type`**이 **`group`**이든 **`single`**이든 **훅은 항상 실행**됨.
    
- **2-3. API 호출이 불필요하게 발생**
    
    **`type`**이 **`single`**이더라도 그룹 매칭 결과 조회 API가 실행됨. 반대로, **`group`**인데도 **`single`**(mock) 데이터 처리 로직이 상관없이 있다는 구조적 혼동이 존재함.
    
- **2-4. 훅과 컴포넌트의 책임 분리 필요**
    
    **`useMatchCreate`**가 **API 호출**, **mock 데이터 반환**, **타입 판단**, **카드 데이터 변환**까지 한 번에 모두 담당하면, 유지 보수와 확장이 어렵고, 실제로 **훅 규칙 위반**으로 에러가 발생함.
    

### ✔ 해결 방법

**2-1. 훅과 컴포넌트 구조 분리**

- **SingleMatchCard**: 싱글 매칭 데이터만을 받아 표시하는 컴포넌트
- **GroupMatchCard**: 그룹 매칭 데이터만을 받아 표시하는 컴포넌트
- **MatchCardSection**: 타입(**`type`**)에 따라 Single/Group 컴포넌트를 조건부 렌더링

```tsx
// MatchCardSection.tsx
const MatchCardSection = ({ matchId, type }: MatchCardSectionProps) => {
  if (type === 'single') return <SingleMatchCard matchId={matchId} />;
  if (type === 'group') return <GroupMatchCard matchId={matchId} />;
  return null;
};
```

장점: 타입별로 훅(쿼리) 호출과 데이터 변환 로직이 명확히 분리되어 훅 규칙을 철저히 지킬 수 있음

**2-2. Mock -> API 전환이 자연스럽게 연결**

기존에는 **`single`**이면 무조건 mock을 쓰다가, 이제는 **SingleMatchCard 컴포넌트 단에서도 실제 API를 사용하도록** 설계만 조금만 바꾸면 쉽게 마이그레이션할 수 있음.

**2-3. 데이터 흐름의 일관성 확보**

- **SingleMatchCard**: **`useSuspenseQuery(matchQueries.SINGLE_MATCH_RESULT(matchId))`**
- **GroupMatchCard**: **`useSuspenseQuery(matchQueries.GROUP_MATCH_RESULT(matchId))`**

각 컴포넌트는 **자신의 타입에 맞는** 쿼리만 훅으로 호출함. 불필요한 API 호출, mock 데이터 처리 등을 걱정할 필요가 없음.

**2-4. React Hook 규칙 엄수**

훅 호출은 **컴포넌트 상단에서 무조건 동일한 순서로**. 조건부 렌더링은 컴포넌트 트리에서 JSX 레벨에서 처리.

→ **훅 내부에서 조건부 처리가 아니라, 트리(컴포넌트 레벨)에서 조건부로 렌더링**을 하게 되므로, 훅 규칙을 절대로 어기지 않음.

**2-5. Suspense로 데이터 로드 및 에러 처리 용이**

Suspense를 사용하여, **데이터가 준비된 후 렌더링**되므로 **`undefined`**로 인한 깜빡임, 스타일 이슈 등을 완전히 방지.

### ✔ 회고 및 개선 방향

컴포넌트 구조 개선을 통해 매칭 타입(싱글/그룹)별로 기존에 한곳에서 담당하던 복잡한 로직을, **각자의 역할에 맞게 분리**함으로써 여러 문제를 명확하게 해결할 수 있었다. 기존에는 타입 구분이 훅 내부에서 조건부로 처리되다 보니, 훅이 항상 같은 순서로 호출되어야 한다는 **React Hooks 규칙**을 어길 수밖에 없었고, 이로 인해 예기치 않은 버그와 디버깅의 어려움이 발생했다. 또한, API와 mock 데이터가 혼재되어 있어, 실제 서비스 연동 시 **불필요한 API 호출이 발생**하거나, 데이터 흐름이 불명확해지는 등, **유지보수성**과 **네트워크 성능** 모두에 악영향을 끼쳤다.

이를 해결하기 위해 **SingleMatchCard**, **GroupMatchCard** 컴포넌트로 각각 역할을 나누었고, 이 두 컴포넌트는 각자에게 맞는 API나 데이터만을 전담하도록 했다. 이제 **MatchCardSection**에서는 단순히 매칭 타입에 따라 해당 컴포넌트를 조건부로 렌더링만 하면 되므로, 컴포넌트 구조가 명확해지고, **훅이 동일한 위치에서 한 번만 호출**되도록 보장할 수 있다.

이 구조의 가장 큰 장점은 **API가 바뀌거나, mock에서 실제 API로 전환할 때 컴포넌트 하나만 수정하면 충분하다**는 점이다. 예를 들어, 싱글 매칭도 결국 API 데이터를 받아오는 구조로 전환하고 싶을 때, SingleMatchCard만 수정하면 되므로 **낮은 결합도와 높은 응집력**을 가진다. 또한, **불필요한 네트워크 요청이 근본적으로 차단**되어, 서비스의 네트워크 효율과 성능이 크게 개선된다.

**Suspense**를 활용해 데이터 페칭이 끝난 후에만 렌더링이 이루어지도록 보장함으로써, 페이지 전환 시 불완전한 데이터로 인한 깜빡임이나 스타일 이슈도 막을 수 있다. 데이터 흐름이 타입별로 명확하게 구분되어 있어, **디버깅과 추가 기능 개발이 훨씬 용이**해졌고, **훅의 규칙 위반** 문제도 절대 발생하지 않는다.

이처럼, **코드베이스가 복잡해질수록 컴포넌트와 훅의 역할을 분리**하는 것은 매우 중요하다. 훅 내부에서 조건부 처리하기보다는, **상위 컴포넌트에서 조건부 렌더링**을 하는 구조를 통해, 각각의 컴포넌트가 자신의 데이터와 API, UI에 대한 책임만을 가지도록 하는 것이 **유지보수성, 확장성, 그리고 안정성** 모두를 높이는 핵심적인 원칙임을 다시 한 번 깨달았다.