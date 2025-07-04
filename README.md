# MATEBALL

### ⚾ 나와 딱 맞는 야구 직관 메이트를 매칭해주는 웹서비스

<br/>

## 👥 TEAM-MATEBALL Web Developers

| <img src="https://github.com/user-attachments/assets/ab5706ab-4290-4ba5-808b-6b2cbde62746" width="200" alt="프로필사진"> | <img src="https://github.com/user-attachments/assets/43450783-111d-4269-868a-c52b5e132598" width="200" alt="프로필사진">  | <img src="https://github.com/user-attachments/assets/d2ee2b33-270e-4f85-828d-f9d3d2b2b70e" width="200" alt="프로필사진"> |  <img src="https://github.com/user-attachments/assets/65a49262-4657-46bd-ad31-7eaaa000519a" width="200" alt="프로필사진">  |
| :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------:
|                            <div align = "center"><b>박희선</b></div>                            |                            <div align = "center"><b>김채은</b></div>                            |                            <div align = "center"><b>윤소은</b></div>                            |                             <div align = "center"><b>김예원</b></div>
|                            [@heesunee](https://github.com/heesunee)                            |                [@bongtta](https://github.com/bongtta)                                 |                       [@Dubabii](https://github.com/Dubabbi)                        |                        [@yeeewww](https://github.com/yeeewww)   | 

<br/>
<br/>

### 🛠 기술스택

| 역할                 | 종류                                                                                                                                                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                                                                                                                              |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                                                                                                                               |
| UI Documentation    | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) 
| Styling              | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-%231a202c?style=for-the-badge&logo=tailwind-css)                                                                                                                                                                                        |
| Data Fetching        | ![Tanstack Query](https://img.shields.io/badge/tanstackquery-FF4154.svg?style=for-the-badge&logo=tanstackquery&logoColor=white)   ![swagger-typescript-api](https://img.shields.io/badge/swagger--typescript--api-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)  |                                                                                                                                                                                                              |
| Formatting           | ![Biome](https://img.shields.io/badge/Biome-4B3263?style=for-the-badge&logo=eslint&logoColor=white)  |
| Package Manager      |  ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)             |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)                                                                                                                |
| Deployment           | ![CloudFlare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)                                                                                                                                                                                                                           |

## 📢 Git/GitHub 컨벤션

### Git 브랜치 전략 (GIit Flow)

1. **`main(=master)`** : 오직 배포를 위한 브랜치 → 특별한 상황이 아니라면 배포만 진행
2. **`develop`** : 작업한 내용을 취합하는 곳 (default branch)
3. **`feat(=feature)`** : 각 작업물을 분기해 새로 만들어 사용할 브랜치

<img width="2366" alt="git flow" src="https://github.com/user-attachments/assets/d4742974-031a-4073-b7e6-dcaa6286fbd5" />

### 커밋 네이밍 컨벤션

**Commit 메시지 종류 설명**

| 제목               | 내용                                                            |
| ------------------ | --------------------------------------------------------------- |
| `init`             | 초기 세팅 (초기 이후는 setting 사용)                            |
| `setting`          | 패키지 설치, 개발 설정                                          |
| `feat`             | 새로운 기능 추가 / 퍼블리싱                                     |
| `fix`              | 버그 수정                                                       |
| `style`            | CSS 등 사용자 UI 디자인 변경                                    |
| `api`              | API 연결 로직 작성                                              |
| `refactor`         | 프로덕션 코드 리팩토링 및 QA 반영                               |
| `chore`            | 빌드 테스트 업데이트, 패키지 매니저 설정 (프로덕션 코드 변경 X) |
| `deploy`           | 배포 작업                                                       |
| `comment`          | 필요한 주석 추가 및 변경                                        |
| `test`             | 테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 X)             |
| `rename`           | 파일 또는 폴더 이름 수정 및 이동 작업                           |
| `remove`           | 파일 삭제 작업만 수행                                           |
| `docs`             | 문서 수정                                                       |
| `!HOTFIX`          | 급하게 치명적인 버그 수정                                       |
| `!BREAKING CHANGE` | 커다란 API 변경                                                 |

## 📢 폴더 구조

1. **`shared/`** 아래 폴더는 전부 common(공통)의 의미로 생각한다.
2. **`pages/`** 아래 세부 폴더(components, constants 등등)가 각각 위치한다.

```
|-- 📁 .github
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src 
  |-- 📁 pages
	  |-- 📁 home
		  |-- 📄ex) Home.tsx
		  |-- 📁 components
		  |-- 📁 styles 등
  |-- 📁 shared
      |-- 📁 components
      |-- 📁 styles
      |-- 📁 constants
      |-- 📁 types 등 
|-- index.html 등 ETC
```

## 📢 네이밍 컨벤션

 <details> 
	 
 ### 1. 기본 (Default)

1. 컴포넌트 / class `PascalCase`
2. 폴더명 `소문자`
3. 파일 명 _(컴포넌트 제외)_ `kebab-case`
4. 변수, 함수 `carmelCase`
5. 파라미터 `carmelCase`
6. 상수 `BIG_SNAKE_CASE`

<br/>

### 2. 타입 (Type)

1. interface는 필수로 `PascalCase` 사용한다.
2. Props 타입 → `컴포넌트명+Props`
   - 예시
     ```jsx
     interface PostPageProps {
     		title: string | undefined;
     		setTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
     		tempContent: string;
     		editContent: string;
     		setEditorContent: (content: string) => void;
     		setContentWithoutTag: (content: string) => void;
     }

     const PostPage = (props: PostPageProps) => {
     		const {title, setTitle, tempContent, editContent, setEditorContent,
     		setContentWithoutTag
     		...
     }
     ```
3. 일반 타입 → **`… + Types`**
4. PropsTypes는 컴포넌트 파일 내 / 그 외 타입은 pages/…/types 폴더에 따로 분리

<br/>

### 3. 스타일 (Style)

1. ~~컴포넌트 Wrapper 네이밍 규칙 : `Wrapper` → (`Layout`)→ `Container` → `Box`~~ (미정)
2. semantic tag는 적극 활용한다.
   1. **`aria-label`**도 적극적 활용!
3. SVG 파일 사용시
   1. svgr로 컴포넌트화 후 사용하므로 svg이름을 그대로 변환하여 사용한다.

<br/>

### 4. 함수

1. 이벤트 핸들러 네이밍 **`handle + 기능 + 이벤트`**

   - 예시
     ```jsx
     const handleBtnClick = () => {};
     const handleTabChange = () => {};
     ```

   → props로 넘길 때 key값은 **`on + 이벤트`**

   - 예시
     ```jsx
     const BoxComponent = () => {
       return <memoComponent onClick={handleBtnClick} />;
     };
     ```

2. 유틸(utils) 함수 네이밍 **`동사(기능) + 명사(대상)`**
3. 값이 boolean일 경우는 **`is + 상태` (default)**

   - 예시
     ```tsx
     const [isLogined, setIsLogined] = useState(false);
     ```

   → 추가적으로 **`can / should / has`** 정도를 상황에 맞게 추가한다.

4. api 함수 **`HTTP 메서드 + 명사`**
   - 예시
     ```tsx
     const getList = () => {};
     const getMovie = () => {};
     ```
5. 네이밍 시 단수를 기본으로 사용하고 / 복수면 뒤에 List 키워드를 붙인다.

<br/>

### 5. 기타

1. assets (Icon이나 Img)의 경우 피그마 네이밍을 적극 활용한다.

2. URL, HTML 같은 범용적인 대문자 약어는 대문자 그대로 사용한다.
3. 변수/최대한 직관적으로 작성하여 네이밍을 보고도 무슨 데이터, 행위인지 바로 유추할 수 있도록 한다.
   - 주석이 필요한 경우에는 어떤 역할을 하는지 다른 사람이 이해할 수 있도록 작성한다.
   - 변수/함수 명은 20자 미만, 주석으로 변수 설명
4. 주석은 작성하려고 하는 대상 **바로 위**에 작성

<br/>
<br/>

 </details>


## 📢 코딩 (개발) 컨벤션

 <details> 
	 
### 변수

- var 금지.
- `const` → `let` 순서로 위부터 선언.
- 변수를 조합하여 문자열 생성시 “+ “ 금지. → 리터럴 사용(백틱 ```)
- 변수명 : 의미를 확실히 나타낼 수 있도록
  - 예시 : 배열에 Arr 보다는 변수s = fruits, userlists 등등
- 줄임말 쓰지말기. 이름이 길어지더라도 어떤 변수인지 정확하게
  - 예시 : Btn X → Button으로 사용
- map 사용시 변동되는 리스트라면 key값을 고유하게 잘 설정해주기 **`index 사용 금지`**
  - 서버에서 내려주는 id값 or uuid 사용
- **전역 변수**는 되도록 사용하지 않기

### 함수

- 화살표 함수. function 키워드 쓰지말기
- 중복함수는 utils 폴더에 모아서 재사용한다.
- 변수/함수 명은 20자 미만.
  - 최대한 네이밍에 의미를 담아서 작성하고 필요 시에 주석으로 설명 추가
- 필요하다면 early return 패턴을 적극적으로 활용
  - 예시
    ```jsx
    **// early return 패턴**
    function processUser(user) {
      if (!user || !user.isActive) return; // **조건이 맞지 않으면 일찍 반환**
      // 나머지 처리 코드...
    }
    ```

### 컴포넌트

- `rafce` → 고정
- 의미없는 div 또는 컴포넌트 최상단은 fragment 사용하기

```jsx
const InfoText = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>This our new page, we're glad you're are here!</p>
    </>
  );
};
```

- children이 불필요할 땐 selfClosing사용하기 `<Component/>`
- children 적극적으로 활용하기!

### 타입

- object → interface
- 단일 변수 → type alias
- 컴포넌트 인자에 대한 타입은 컴포넌트 상단에
- 그 외의 타입들은 types 폴더에
- api response 타입명은 OOOResponseTypes

### 메소드

- 배열 복사 시 → 스프레드 연산자(…) 사용

  - `const copys = […originals]`

- for 보단, `forEach`/`map`을 사용
- 구조 분해 할당을 적극 이용
  ```tsx
  interface userDataProps {
    userName: string;
    userBirth: string;
  }

  function checkIsUser({ userName, userBirth }: userDataProps) {}
  ```
- 불필요한 반복문 지양 : filter, array.include() 등
  - 조건부로 데이터를 확인하거나 뽑아야하는 로직을 사용할 때에는 `Map` 이나 `Object`처럼 `key`값을 이용해서 원소를 찾는 자료형을 이용하는것을 고려해보거나, 배열을 순회하지 않고 index로 바로 접근할 수 있는 방법이 없는지 고려.
 


### Style → X

[mozila 추천 css 순서 (참고)](https://www.notion.so/mozila-css-ae87c8e58b2149ab8f90c2110e537c31?pvs=21)

→ 추가 예정

### 기타

- button 태그에 **`type`**은 명시적으로 작성
- 비교 연산자는 **`===`**와 **`!==`**만을 사용
- axios 안에서 **`then/catch`** 대신 **`async/await`** 지향

    </details>


## 🤝 Team Ground Rules

### 팀 협업 규칙

1. 팀원들의 코드는 곧 나의 코드라 생각하기
2. 모르는건 적극적으로 질문하기
3. 예민해지는 상황이 와도 항상 웃기
4. 연락을 잘 보고, 빨리 답장하기
5. 비대면으로 회의를 진행할때는 카메라 켜기
6. 기록하면서 개발하기
7. 트러블슈팅 공유하기
