import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const reposRequest = user => action(typeActions.REPOS_REQUEST, { user });
export const reposSuccess = repos => action(typeActions.REPOS_SUCCESS, { repos });
export const reposFail = () => action(typeActions.REPOS_FAIL);
