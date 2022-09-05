import { call, put, takeEvery } from 'redux-saga/effects'
const apiURL = "https://jsonplaceholder.typicode.com/users";

function getApi() {
    debugger
    return fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).catch(error => { throw error });
}

function* fetchUsers(action) {
    debugger
    try {
        const users = yield call(getApi);
        console.log("GET_UERS_SUCESS=====")
        yield put({ type: 'GET_UERS_SUCESS', users: users });
    } catch (e) {
        yield put({ type: 'GET_UERS_FAILED', message: e.message });
    }
}
function* userSaga(){
    debugger
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}
export default userSaga;