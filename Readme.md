# Drag And Drop

이 프로젝트는 Webpack 설정을 직접 구성하고, 주어진 요구사항에 따라 동작하는 드래그 앤 드롭 기능을 구현하는 과제입니다. `react-beautiful-dnd` 라이브러리를 사용하여, 지정된 드래그 제약 조건을 만족하는 애플리케이션을 만들어야 합니다. 제공되는 최소 기능의 초기 파일을 기반으로 시작하여 아래의 과제들을 수행해야 합니다.

## 작업 내용

### Webpack 적용

📄 `react-scripts`를 사용하지 않고, Webpack을 직접 설정하여 React 애플리케이션을 구성합니다.
✅ `webpack.common.js` 파일을 이용해 개발 환경과 배포 환경에서 공통으로 필요한 설정을 관리하고 있습니다.
✅ `webpack.dev.js`에서는 개발 환경을 위해 devServer를 사용하여 가상의 서버를 열어 개발을 진행하였으며,
✅ `webpack.prod.js`에서는 배포를 위한 빌드 설정을 적용하여 프로젝트를 빌드할 수 있도록 구성했습니다.

### 칼럼 확장

📄 기존의 한 칼럼에서 네 개의 칼럼으로 확장합니다.
✅ 기존의 한 칼럼에서 네 개의 칼럼으로 확장하였습니다. 또한 추가적인 확장은 할 수 있도록 하였습니다.

### 드래그 제약 조건 적용

📄 특정 규칙에 따라 아이템의 드래그를 제한합니다.
✅ 세번째 컬럼에 드래그, 짝수번째의 아이템을 같은 칼럼 다른 짝수 앞으로 드래그가 불가능하며 `border`에 변화를 주었습니다.

### 멀티 드래그 기능 구현

📄 여러 아이템을 동시에 선택하고 드래그하는 기능을 추가합니다.
✅ ctrl(command) 또는 shift를 누른 상태에서 아이템을 클릭하여 선택된 여러 아이템을 동시에 드래그하는 기능을 추가하였습니다. 이때 선택된 아이템은 `back-ground`에 변화를 주었습니다.

### 아이템 추가/제거

✅ 아이템을 추가/ 제거가 가능하도록 하였습니다.

## Getting Started

```
$ git clone https://https://github.com/RanungPark/drag_and_drop.git

$ npm install

$ npm run dev

# http://localhost:8080/ 접속
```

## 스크린샷

https://github.com/user-attachments/assets/bacf14c3-2410-493a-aedc-e294e9cf18a9