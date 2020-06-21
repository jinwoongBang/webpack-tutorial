[Advertisement Management System]
2020. 06. 21
1. 관련 링크
    - https://velog.io/@pop8682/%EB%B2%88%EC%97%AD-React-webpack-%EC%84%A4%EC%A0%95-%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0-%ED%95%B4%EB%B3%B4%EA%B8%B0
2. 프로젝트 초기 셋팅
    - @babel/core           : 리액트는 'ES6' 를 사용하므로 'ES5' 로 변경
    - @babel/preset-env     : 'ES6' -> 'ES5' & 브라우져 별 컴파일
    - @babel/preset-react   : 'jsx' -> 'javascript'
    - babel-loader          : 위 바벨 관련 설정을 통한 바벨 플러그인
    
    - webpack               : 모든 리액트 파일을 하나의 컴파일된 자바스크립트 파일로 만들기 위함
    - webpack-cli           : 'build' 스크립트를 통해 webpack 관련 커맨드라인을 사용하기 위함
    - webpack-dev-server    : 실시간 파일 로드
    - html-webpack-plugin   : webpack.config.js 에서 사용할 플러그인

    - clean-webpack-plugin
    - css-loader
    - html-loader
    
    - mini-css-extract-plugin
    - node-sas

    - sass-loader
    - style-loader

    - react
    - react-dom