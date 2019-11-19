import { Dispatch, Commit } from 'vuex';


export interface ActionContext<S> {
  dispatch: Dispatch;
  commit: Commit;
  state: S;
  getters: any;
  rootState: any;
  rootGetters: any;
}
