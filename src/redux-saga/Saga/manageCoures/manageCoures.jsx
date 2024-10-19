import { GET_COURES_ERROR, GET_COURES_SUCCESS } from "../../Producet/Action/Action";
import { getCoures } from "../../Producet/Api/Api";
import { call, put } from "redux-saga/effects";

export function* manageCoures(action) {
    try {
      const res = yield call(getCoures, action);
      const data = res.data;
      
      const status = res.status;
      if (status === 200) {
        yield put({ type: GET_COURES_SUCCESS, data });
      } else {
        yield put({ type: GET_COURES_ERROR, data });
      }
    } catch(e){
      yield put({ type: GET_COURES_ERROR,e});
    }
  }