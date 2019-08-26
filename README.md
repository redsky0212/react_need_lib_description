# React 필요 library
---------------------------------

## React ( npm i react ) (https://ko.reactjs.org/docs/react-api.html)
* React는 리액트를 사용하여 애플리케이션을 만들때 View쪽을 만들기 위한 라이브러리.
## ReactDom ( npm i react-dom ) (https://ko.reactjs.org/docs/react-dom.html)
* ReactDOM은 만들어진 UI를 실제 브라우져에 렌더링 할 때 사용하는 라이브러리.
## react-router-dom ( npm i react-router-dom ) (https://reacttraining.com/react-router/web/example/basic) (https://velopert.com/3417)
* SPA app에서 화면전환 할 수 있는 라이브러리
#### **BrowserRouter** 를 이용하여 HTML5의 history API를 이용하여 새로고침 하지 않고 화면전환 가능하게 한다.
```
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
export default Root;
```
#### 라우트 이동 (Link)
* a태그를 이용하지 않고 Link를 이용하여 이동할 메뉴링크를 코딩한다.(a태그로 하면 화면 새로고침 됨.)
```
import {Link} from 'react-router-dom';
<Link to="/">홈</Link>
```

#### 라우트 이동 및 추가기능 (NavLink)
* NavLink 로 activeStyle, activeClassName설정을 해서 url이 일치 했을때 적용할 스타일을 설정할 수 있다.
  - let activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };
  - &lt;NavLink exact to="/" activeStyle={activeStyle}&gt;홈&lt;/NavLink&gt;

## create-react-app으로 프로젝트 설치시
* 설치방법
  - npx create-react-app 프로젝트명 
  - npx가 실행되지 않는다면 (npm i -g create-react-app) 설치 후 ( create-react-app 프로젝트명 ) 과 같이 실행한다.
* public/**manifest.json** 관련
  - 앱에 대한 정보를 담고있는 json파일 입니다.
  - 항목별 설명
    - short_name: 사용자 홈 화면에서 아이콘 이름으로 사용
    - name: 웹앱 설치 배너에 사용
    - icons: 홈 화면에 추가할때 사용할 이미지
    - start_url: 웹앱 실행시 시작되는 URL 주소
    - display: 디스플레이 유형(fullscreen, standalone, browser 중 설정)
    - theme_color: 상단 툴바의 색상
    - background_color: 스플래시 화면 배경 색상
    - orientation: 특정 방향을 강제로 지정(landscape, portrait 중 설정)
* src/**serviceWorker.js** 관련
  - 브라우저의 백그라운드에서 실행되는 자바스크립트 워커 이다. 웹에서도 네이티브처럼 오프라인 상테에서도 사용가능하고, 푸시알림 기능도 사용할 수 있는데, 이런기능을 할 수 있도록 도와주는 것.

--------------------------------------------------------
아래부터는 내용 정리를 해야 함
--------------------------------------------------------
## redux 상태관리 (npm install --save  redux react-redux)
* redux: redux모듈
* react-redux: 리덕스를 사용하기 위한 유용한 도구들이 들어가 있음.
* 상태관리를 위한 액션, 리듀서를 하나의 파일로 만들어 작성하는 방법인 Ducks패턴 에 관련해 스터디 필요.

## redux-actions
## redux-pender
## npm install --save-dev @babel/core babel-loader @babel/preset-env
* 설치 후 .babelrc 파일 생성 후 아래내용 추가
```
{
 "presets": [
  "@babel/preset-env"
 ]
}
```
## babel-polyfill
## axios

## 참조 URL
* Redux관련 설명 (https://lunit.gitbook.io/redux-in-korean/)
* velopert님의 리덕스 사용 (https://velog.io/@velopert/Redux-3-%EB%A6%AC%EB%8D%95%EC%8A%A4%EB%A5%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-nvjltahf5e)
* velopert님의 미들웨어 관련 (https://velopert.com/3401)
* velog 리액트 Hooks 완벽정복 (https://velog.io/@velopert/react-hooks)
* React로 블로그 만들기 (https://www.dnkdream.com/react-blog-11/)


## 기타 참조 URL
* github README파일 마크다운 설명 (https://gist.github.com/ihoneymon/652be052a0727ad59601)
* 매니페스트,서비스워커 관련 설명 (https://altenull.github.io/2018/03/09/%EC%9B%B9%EC%95%B1-%EB%A7%A4%EB%8B%88%ED%8E%98%EC%8A%A4%ED%8A%B8-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9B%8C%EC%BB%A4-Web-App-Manifest-Service-Worker/)
