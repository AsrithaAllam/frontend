import { call, put, takeLatest } from "@redux-saga/core/effects";
import ProjectService from "../../Services/RestApiManager/ProjectManager/ProjectService";
import { responseProjectAction, errorProjectAction, PROJECT_ACTION,responseProjectsListAction,errorProjectsListAction} from "./ProjectActionCreator"

export function* projectRequest(action) {
    try {
      const response = yield call(ProjectService.shared.projectRequest, action.data);
      yield put(responseProjectAction(response));
    } catch (error) {
      yield put(errorProjectAction(error));
    }
  }


  export function* projectsListRequest(action) {
    try {
      const response = yield call(ProjectService.shared.projectsListRequest, action.data);
      yield put(responseProjectsListAction(response));
    } catch (error) {
      yield put(errorProjectsListAction(error));
    }
  }

  export function* projectWatcherSaga() {
    yield takeLatest(PROJECT_ACTION.REQUEST, projectRequest);
    yield takeLatest(PROJECT_ACTION.REQUEST_PROJECTS_LIST, projectsListRequest)
  }