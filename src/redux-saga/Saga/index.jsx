import { all } from "redux-saga/effects"
import { rootCouressaga } from "./root/rootCoures";

export function* rootCoures () {
    yield all ([rootCouressaga()])
}