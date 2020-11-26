import React from 'react'
//리액트 렌더링에 관한 서버 사이드용 객체를 읽어 드리는데 가장 큰 차이점
import ReactDOMServer from 'react-dom/server'
//Node.js로 서버를 구축하기 위한 프레임워크로  express를 이용함
import express from 'express'
//HTML 페이지 용도의 Html 컴포넌트
import Html from './Html'
import App from './App'

//Express를 이용해서 애플리케이션 준비
const app = express()

//bundle.js가 포함된 public 디렉터리를 정적 파일로 제공해 둠
app.use('/', express.static('public'))

app.get('./sample', (req, res)=>{
    //서버사이드렌더링 로직을 만드는 곳
    //renderToNodeStream은 서버에서만 사용 할 수 있는 메서드로
    //전달된 리액트 컴포넌트를 HTML로 렌더링함
    ReactDOMServer.renderToNodeStream(
        <Html>
            <App />
        </Html>
    ).pipe(res);
});

app.listen(3000, () => {
    console.log('listening on port 3000...')
})