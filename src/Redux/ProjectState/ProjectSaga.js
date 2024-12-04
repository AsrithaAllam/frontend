import { call, put, takeLatest } from "@redux-saga/core/effects";
import ProjectService from "../../Services/RestApiManager/ProjectManager/ProjectService";
import { responseProjectAction, errorProjectAction, PROJECT_ACTION,responseProjectsListAction,errorProjectsListAction, 
  responseEditProject, errorEditProject, responseProjectById, errorProjectById} from "./ProjectActionCreator"

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
  export function* editProjectRequest (action){
    try{
      const response = yield call (ProjectService.shared.editProjectRequest,action.data);
      yield put(responseEditProject(response));
    }
    catch (error) {
      yield put(errorEditProject(error));
    }
  }

  export function* projectByIdRequest(action) {
    try {
      const response = yield call(ProjectService.shared.projectByIdRequest, action.data);
      yield put(responseProjectById(response));
    } catch (error) {
      yield put(errorProjectById(error));
    }
  }
  export function* projectWatcherSaga() {
    yield takeLatest(PROJECT_ACTION.REQUEST, projectRequest);
    yield takeLatest(PROJECT_ACTION.REQUEST_PROJECTS_LIST, projectsListRequest);
    yield takeLatest(PROJECT_ACTION.REQUEST_EDIT_PROJECT,editProjectRequest);
    yield takeLatest(PROJECT_ACTION.REQUEST_PROJECT_BY_ID, projectByIdRequest);
  }