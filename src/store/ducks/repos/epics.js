import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as reposActions from './actions';
import { getUserRepos } from '../../../services/ApiService';

const reposEpic = action$ => action$.pipe(
  filter(action => action.type === typeActions.REPOS_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {
    const { user } = action.payload;
    const res = await getUserRepos(user);
    const repos = res.data;
    if (repos) {
      return reposActions.reposSuccess(repos);
    }
    return reposActions.reposFail();
  }),
);

export default reposEpic;
