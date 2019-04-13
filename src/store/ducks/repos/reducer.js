import * as typeActions from './typeActions';

const reposInitial = {
  repos: [],
  load: false,
  error: false,
};

const reposReducer = (state = reposInitial, action) => {
  switch (action.type) {
    case typeActions.REPOS_REQUEST:
      return { ...state, load: true };
    case typeActions.REPOS_SUCCESS:
      return {
        ...state, repos: action.payload.repos, load: false, error: false,
      };
    case typeActions.REPOS_FAIL:
      return {
        ...state, repos: [], load: false, error: true,
      };

    default:
      return state;
  }
}; // Fim do reducers

export default reposReducer;
