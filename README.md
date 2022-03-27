
<h1 align="center">hacker news API를 활용한 뉴스 앱</h1>
<div align="center" >
<img width="526" alt="스크린샷 2022-03-27 오후 11 44 01" src="https://user-images.githubusercontent.com/80494742/160286905-c3dc599e-9fd6-49ec-9396-a436358cd906.png">
</div>

<br>

## 📌 배포

[배포링크](https://hacker-news-pd.netlify.app)

<br>

## 📌 기술 스택

<div align="center" >
<img alt="webpack" src ="https://img.shields.io/badge/webpack-8DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=white"/><img alt="babel" src ="https://img.shields.io/badge/babel-F9DC3E.svg?&style=for-the-badge&logo=babel&logoColor=white"/><img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /><img alt="reactquery" src ="https://img.shields.io/badge/reactquery-FF4154.svg?&style=for-the-badge&logo=react-query&logoColor=white"/>
 </div>

<br>

## 📌 기능

- 페이지네이션
- url 파라미터에 따른 목록,상세 페이지의 api 패치
   - 목록 페이지에선 내림차순으로 게시물을 정렬했습니다.
- api 로딩시 스피너 렌더링

<br>

## 📌 고민

- api레이어의 분리  
   유지보수, 테스트, 확장성을 고려해 apis폴더를 생성했습니다.  
   api폴더에서는 단순히 api를 받아오기만 하고, 받아온 데이터를 조작해야 한다면 service폴더에서 조작했습니다.

- 외부 api를 받아오는 코드는 react query를 통해 처리  
   비동기 관련 코드를 줄일 수 있었습니다.  
    캐싱과 리패칭을 지원해줍니다. 윈도우 포커싱시 자동 리패칭 기능이 있습니다.

- 컴포넌트 분리  
   두번 이상 반복된 컴포넌트들은 components 폴더로 옮겼습니다.
   나누기 어려운 아주 작은 컴포넌트와, 컴포넌트가 합쳐진 컴포넌트는 성격이 다르다고 생각해 두 폴더로 나누었습니다.
   전체 컴포넌트를 옮기지 않은 이유는, 물리적인 거리가 멀어지면 유지보수가 어려워질것 같다고 생각했기 때문입니다.

- 받아온 api에 있는 html 문자열  
   react에서는 dangerouslySetInnerHTML을 사용해 innerHTML을 대체하고 있습니다.  
   이것 또한 보안 취약점이 존재해 dompurify 라이브러리를 통해 sanitize시켰습니다.

<br>

## 📌 로컬 환경 구동

- 프로젝트 클론

  ```bash
  git clone https://github.com/wook95/hacker-news.git
  ```

- 프로젝트 디렉토리 들어가기

  ```bash
  cd hacker-news
  ```

- 패키지 설치 및 프로젝트 시작

  ```bash
  yarn install && yarn start
  ```
<br>
