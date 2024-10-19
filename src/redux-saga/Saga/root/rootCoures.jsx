import { takeLatest } from "redux-saga/effects";
import { GET_COURES_PROGRESS } from "../../Producet/Action/Action";
import { manageCoures } from "../manageCoures/manageCoures";

export function* rootCouressaga () {
    yield takeLatest (GET_COURES_PROGRESS,manageCoures)
}