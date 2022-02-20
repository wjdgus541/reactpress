# reactpress
---

[reactpress 사이트](https://wjdgus541.github.io/reactpress/)

---

## Vuepress 따라하기

[Vuepress](https://vuepress.vuejs.org/)


TIL을 기록할 블로그를 찾아보다 Vuepress라는 '정적 사이트 생성기'에대해 알게 되었다.

지금 내가 알고 있는 지식들로 충분히 만들 수 있을 것 같아서 같은 디자인과 기능을 react로 구현해보기로 했다.

---

### 만들어야 하는 기능!

[O] - 사이드바

[O] - 네비게이션바

[O] - 메인페이지

[O] - 마크다운 -> html 변경, 렌더링

[O] - 마크다운 검색 기능

[O] - 라우터(메인,홈)

[O] - 라우터(마크다운)

[O] - 다크모드

[O] - 반응형(PC모드)

---


### 사용(공부)한 라이브러리


- react-router-dom
- recoil
- styled-components
- react-responsive (반응형 웹)
- react-switch (다크모드 온오프 스위치)
- react-icons
- react-markdown (마크다운 렌더링 라이브러리)
- remark-gfm (마크다운을 좀..더.. 꾸며주는 추가 기능?)
- framer-motion (애니메이션 라이브러리)


---

### 난관

- 마크다운 페이지의 스크롤바가 나오지를 않는다.(해결)
  - MdConverter에 overflow:auto를 주고 해당 컴포넌트를 감싸고 있는 Sidebar.js의 ContetsBox 컴포넌트에 height:100vh를 주었다.
- 아이콘 호버시 애니메이션이 나오도록 하고 싶은데 방법을 모르겠다. framer-motion에 whileHover 속성이 있기는 한데 그걸로는 해결이 안된다; 내가 사용 방법을 못찾는걸지도.
- 검색창에서 포커스가 빠졌을 때(blur) 검색 미리보기 창이 사라지고 검색 내용도 사라지도록 하고 싶었는데 blur()를 추가하니 미리보기 창 클릭하는것마저 블러처리가 되버렸다. 검색이 안된다는 소리. 일단은 blur 이벤트를 주석처리해놓았다.


---


### 후기


- CSS 사용
  - 레이아웃을 잡을때. 스타일을 큰 박스에 줘야할지 작은 박스에 줘야할지 모르겠다.
    (가운데 정렬시. 바깥 박스에 flex로 정렬할지, 아니면 안쪽 컴포넌트에 margin: auto를 줄지)
  - styled-components 가 아니라 일반 css로 사용하는 편이 좋을 것 같기도 하다.
  - props 사용이 필요한 컴포넌트들만 styled-components로 쓰면 되지 않을까?..
- 애니메이션
  - 더 어렵다. 연습이 많이 필요하다.
- 마크다운 렌더링
  - react-markdown라는 라이브러리를 사용하면 마크다운을 HTML로 이쁘게 렌더링할 수 있다고는 하나 폴더에서 원하는 파일을 읽어오는 부분이 쉽지 않았다. 이틀간 스택 오버플로를 뒤져서 해결했다.
- 라우터
  - 리액트 라우터를 쓰는게 쉬운 것 같으면서도 헷갈렸다. 반복적으로 사용하면서 익히는 수밖에 없을 것 같다.
