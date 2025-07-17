# 🧾 코딩 컨벤션

메잇볼 클라이언트 팀의 코드 품질과 협업 효율을 높이기 위한 코딩 컨벤션입니다.  
모든 팀원이 일관된 스타일로 코드를 작성할 수 있도록 아래 규칙을 준수해주세요.

---

## 🟡 변수

- `var` 사용 **금지**, `const` → `let` 순으로 선언
- 문자열 조합 시 `+` 대신 **템플릿 리터럴(``` ` ```) 사용**
- 변수명은 의미를 명확히 드러내도록 작성  
  - ✅ `users`, `fruits`  
  - ❌ `Arr`, `tmp`, `data1`
- 줄임말 지양: 의미가 길더라도 명확한 이름 사용  
  - ✅ `Button`  
  - ❌ `Btn`
- `map()` 사용 시, key는 반드시 고유한 값 사용  
  - ❌ `key={index}` → ❌  
  - ✅ `key={user.id}` 또는 `uuid`
- **전역 변수**는 지양 (가능하면 로컬 스코프 유지)

---

## 🔵 함수

- **function 키워드 금지**, **화살표 함수만 사용**
- 공통 함수는 `utils/` 폴더로 분리하여 재사용
- 변수/함수 이름은 **20자 미만**
  - 네이밍에 의미를 담고, 필요한 경우 주석으로 보완
- **Early Return 패턴 권장**

```tsx
// ✅ Early Return
const processUser = (user) => {
  if (!user || !user.isActive) return;
  // 이후 로직
};
````

---

## 🟢 컴포넌트

* 기본 템플릿은 `rafce` 사용 (React Arrow Function Component with Export)
* 불필요한 wrapper는 ❌ → **Fragment (`<>`) 사용 권장**

```tsx
const InfoText = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>This is our new page!</p>
    </>
  );
};
```

* children이 없는 컴포넌트는 self-closing (`<Component />`)
* children 적극 활용해 UI 유연하게 구성

---

## 🟠 타입 (TypeScript)

* `object` 타입은 **interface** 사용
* 단일 변수 타입은 **type alias**
* 컴포넌트 Props 타입은 **컴포넌트 상단에 정의**
* 그 외 타입은 `types/` 폴더에 분리
* API 응답 타입 네이밍: `OOOResponse` 형태

```ts
interface UserCardProps {
  userId: string;
  userName: string;
}
```

---

## 🔴 메소드

* 배열 복사는 **스프레드 연산자(...)** 사용

  ```ts
  const copy = [...originals];
  ```

* `for` 루프 대신 `map`, `forEach`, `filter` 사용

* 구조 분해 할당 적극 사용

```ts
const checkUser = ({ userName, userBirth }: UserDataProps) => {
  // ...
};
```

* 불필요한 반복문 지양

  * 조건 검색 시 `Map`, `Object`, 인덱스 접근 방식 고려

---

## ⚙ 기타

* `button` 태그에는 `type` 명시 (`type="button"` / `"submit"`)
* 비교 연산은 `===`, `!==`만 사용
* **axios는 async/await 패턴 사용**, then/catch 대신:

```ts
const fetchData = async () => {
  try {
    const res = await axios.get('/api/data');
  } catch (err) {
    console.error(err);
  }
};
```

---
<br/>

> 📌 컨벤션이 어긋난 경우 리뷰 시 코멘트 부탁드리며, **모두가 이해할 수 있는 코드 작성**을 우선합니다.

