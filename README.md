# 프리온보딩 인턴십 3주차 전역 변수 관리 과제

## 배포 사이트:

## 목차

- #### [프로젝트 요구사항 및 정보](#프로젝트-요구사항-및-정보)

- #### [프로젝트 폴더구조](#프로젝트-폴더구조)

- #### [주요 기능 목록](#주요-기능-목록)

---

### 프로젝트 요구사항 및 정보

#### 목표: 특정 깃헙 레파지토리(facebook)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

#### 참고 API: https://docs.github.com/en/rest

#### 사용 기술 스택

- node: v16.18.38
- react: v18.2.14

```
"dependencies": {
    ...
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-markdown": "^8.0.7", // markdown lib
    "react-redux": "^8.1.1",
    "react-router-dom": "^6.12.1",
    "react-scripts": "5.0.1",
    "react-syntax-highlighter": "^15.5.0", // markdown lib
    "redux": "^4.2.1",
    "rehype-raw": "^6.1.1", // markdown lib
    "remark-gfm": "^3.0.1", // markdown lib
    "styled-components": "^5.3.10",
    "typescript": "^4.9.5",
  },
```

#### 와이어 프레임 (이슈 리스트 페이지, 이슈 상세 페이지)

![와이어 프레임 이미지](/src/img/wire_frame.png)

#### 구현 필수 요구사항 체크리스트

##### 필수 요구 사항

- [x] 이슈 목록 및 상세 화면 기능 구현

- [x] 전역 상태관리 적용(redux)

- [x] 데이터 요청 중 로딩 표시

- [x] 에러 발생시 화면 표시

##### 이슈 목록 화면

- [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬

- [x] 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시

- [x] 다섯번째 셀마다 광고 이미지 출력 및 이동(광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동)

- [x] 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(무한스크롤)

##### 이슈 상세 화면

- [x] ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

##### 공통 헤더

- [x] 두 페이지(리스트, 상세 페이지)는 공통 헤더를 공유

- [x] 헤더에는 Organization Name / Repository Name이 표시

### 프로젝트 폴더 구조

```
.
├── App.tsx
├── Router.tsx
├── apis
│   ├── config.ts
│   └── githubAPI.ts
├── common
│   ├── hooks
│   │   ├── useInfiniteScroll.ts
│   │   └── useIssue.ts
│   └── layouts
│       ├── Header
│       │   ├── index.tsx
│       │   └── styled.ts
│       └── index.tsx
├── components
│   ├── Advertisement
│   │   ├── index.tsx
│   │   └── styled.ts
│   └── Issue
│       ├── index.tsx
│       └── styled.ts
├── img
│   └── wanted_logo.png
├── index.tsx
├── pages
│   ├── IssueDetail
│   │   ├── index.tsx
│   │   └── styled.ts
│   └── IssueList
│       ├── index.tsx
│       └── styled.ts
├── store
│   ├── actions
│   │   ├── issueListAction.ts
│   │   └── repoNameAction.ts
│   └── reducers
│       ├── index.ts
│       ├── issueListReducer.ts
│       └── repoNameReducer.ts
├── styles
│   └── globalStyles.ts
├── types
│   ├── declarations.d.ts
│   └── types.ts
└── utils
    ├── formatDate.ts
    ├── markdown.tsx
    └── shouldShowAdvertisement.ts
```

### 주요 기능 목록

### 무한스크롤 기능 구현

```tsx
// hooks/useInfiniteScroll.ts

import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const [page, setPage] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!initialLoad) {
            setPage((prevPageNumber) => prevPageNumber + 1);
          } else {
            setInitialLoad(false);
          }
        }
      });
    }, options);

    const target = document.querySelector('#bottom-boundary');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [initialLoad]);

  useEffect(() => {
    if (page > 1 || initialLoad) {
      callback();
    }
  }, [page, initialLoad]);

  return { page };
};

export default useInfiniteScroll;
```

- 브라우저의 Viewport와 지정한 요소(Element)의 교차점을 관찰하여, 요소가 Viewport에 포함되는지 관찰하는 API(IntersectionObserver)를 활용하여 무한스크롤을 구현함.

- 최초 렌더링시, 요소가 관찰되지 않았음에도 데이터 fetch가 동작하는 경우가 있어서 initialLoad, page 수에 조건을 걸어 요소가 관찰되는 경우에만 무한스크롤을 동작시키도록 적용함.

### react-redux 로 전역 상태 관리 적용

```
store
 ├── actions
 │   ├── issueListAction.ts
 │   └── repoNameAction.ts
 └── reducers
     ├── index.ts
     ├── issueListReducer.ts
     └── repoNameReducer.ts
```

- redux 의 메인 패턴인 ducks 패턴이 아닌 actions, reducers 파일을 분리하여 구성함. 이러한 패턴은 파일 수 증가로 인해 기능을 변경할 때 여러 곳을 수정해야 한다는 단점이 있지만 redux의 기능들을 모듈화가 아닌, 단일책임원칙(SRP)를 적용시켜 명확하게 기능들을 분산시키고 싶었기 때문에 적용함.

```tsx
// hooks/useIssue.ts

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIssues } from '../../apis/githubAPI';
import useInfiniteScroll from './useInfiniteScroll';
import { RootState } from '../../store/reducers';
import { setIssueList } from '../../store/actions/issueListAction';

export default function useIssue() {
  const dispatch = useDispatch();
  const issueList = useSelector(
    (state: RootState) => state.issueListReducer.issueList,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { page } = useInfiniteScroll(() => {
    setIsLoading(true);
    getIssues(page)
      .then((issues) => dispatch(setIssueList([...issueList, ...issues])))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return { issueList, isLoading, error };
}
```

- Issue 목록을 받아오는 custom hook 으로, useInfiniteScroll 의 반환값으로 page 를 파라미터로 받아 getIssues 함수의 반환값을 dispatch하여 저장하는 패턴으로 구현.
