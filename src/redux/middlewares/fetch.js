import { actions } from '../Fetch';

const middleware = store => next => (action) => {
  const result = next(action);
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

  // if type has a *_REQUEST / *_SUCCESS / *_FAILURE actions
  if (matches) {
    const [, requestName, requestState] = matches;
    store.dispatch(actions.fetchRequest({ requestName, requestState }));
  }

  return result;
};

export default middleware;
