import { combineEpics } from 'redux-observable';
import reposEpic from './repos/epics';

const epics = [
  reposEpic,
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
