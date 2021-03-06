# Request Dashboard

요청사항을 보고 필터링할 수 있는 대시보드입니다.

https://user-images.githubusercontent.com/37020415/143236346-5ccf8dfd-bb09-465f-9fc4-bcb60c8e0106.mov

## 기능

- json-sever로 받아온 의뢰서를 가공 방법, 재료, 진행 상태로 필터링하여 보여줍니다.
- 화면 너비가 375px 이하로 작아지면, 그에 대응하여 화면이 레이아웃이 변경됩니다.

## 실행법

프로젝트를 클론하여 해당 디렉토리로 이동합니다.

```sh
git clone https://github.com/sounmind/request-dashboard.git
cd request-dashboard
```

데이터 요청을 위한 json 서버를 실행합니다.
```
cd json-server
npm install
npm start
```

대시보드를 위한 프로젝트를 실행합니다.
```
cd ..
npm install
npm start
```

## 배운 점
 - 데이터를 가져오고, 필터링하는 로직을 재사용하고 분리하기 위해 다양한 커스텀 훅을 만들었는데, 그 과정이 재밌고 보람찼습니다.
 - 특히 필터링 기능을 구현할 때 직접 유틸함수를 만들기 보다 lodash의 intersection 메서드를 사용했습니다. 이에 겹치는 요소가 하나 이상이면 필터링 된 배열에 요소를 추가하는 로직으로 비교적 쉽게 구현할 수 있습니다.

## 어려웠던 점
- 처음으로 material-ui 라이브러리를 사용해봤는데, 단순이 코드만 복사해서 사용할 수 있는 게 아니라 그 코드 내부의 흐름을 어느정도 이해하고 있어야 했고, 거기서 시간을 꽤 소모했습니다.

## 감사의 말씀
- 디자인에 프로젝트의 스펙이 상세하게 설명되어 있어, 혼란 없이 화면과 기능을 구현할 수 있었습니다. 이런 좋은 기회를 주셔서 감사합니다!



