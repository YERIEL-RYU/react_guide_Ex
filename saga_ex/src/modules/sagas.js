import { REQUEST_FETCH, succeededFetch, failedFetch } from './request'
import { call, put, takeEvery } from 'redux-saga/effects'

const requsetFetch = () => {
    console.log('Fetch Data')

    return fetch('https://jsonplaceholder.typicodde.com/users')
        .then(response=> response.json())
}

function* fetchData() {
    try{
        const payload = yield call(requsetFetch);
        console.log('payload', payload)
        yield put(succeededFetch(payload))
    }catch(e) {
        console.log("fail fetch")
        yield put(failedFetch(e.message))
    }
}

//제너레이터 함수로 정의한 mySaga 안의 yield가 지정된 행에서 어떤 처리가 수행 된다.
//redux-saga가 제공하는 메서드 takeEvery 메서드에 제 1인수로 발생 시점이 되는 Actions의 타입을 전달
//제 2인수에는 fetchData를 지정
//★컴포넌트에서 발생 시점이 되는 Actions가 발행되면 이에 반응하여 두번째 인수가 자동으로 실행 되는 구조
function* mySaga() {
    yield takeEvery(REQUEST_FETCH, fetchData)
}

export default mySaga