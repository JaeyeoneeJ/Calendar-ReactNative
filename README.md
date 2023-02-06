# Calendar-ReactNative

react native를 공부하며 만든 첫 프로젝트 입니다. 캘린더 라이브러리 없이 구현하는 것을 목표로 합니다.

## 1. 구동 사진
<img width="auto" alt="working" src="https://user-images.githubusercontent.com/77138259/216341597-daf41925-dd9d-4de2-b677-9abe92453ecc.gif">

## 2. 컴포넌트 구조
<img width="auto" alt="components" src="https://user-images.githubusercontent.com/77138259/216342005-df81f3ae-db03-41bb-a44b-daead99eb928.png">


### `1) navigation`

BottomTabNavigator로 스크린을 분리하여 나누었으며, expo/vector-icons로 아이콘을 불러와 사용하였습니다.

### `2) screens`

4가지 스크린(Home, Calendar, Library, MyPage)을 만들었습니다.

### `3) Calendar`

주요 기능인 캘린더는 Header와 Body로 나누었습니다.<br>
Header: 캘린더의 주요 기능 중, 월과 년도(ex: February 2023), 월을 이동할 수 있는 버튼을 생성하여 전월과 후월로 이동할 수 있게 합니다.<br>
Body: 맨 윗줄에는 요일을 일요일부터 토요일까지 표기하였으며, 아래 각 월별 날짜를 배열로 불러와 flex-wrap으로 7개씩 나누어주었습니다.<br>
이전월과 다음월의 일부 날짜는 연한 회색으로 표기하였습니다.<br>
오늘의 날짜는 Bold로 표기하고, 사용자가 선택한 날짜는 파란 원으로 표기하였습니다.<br>
