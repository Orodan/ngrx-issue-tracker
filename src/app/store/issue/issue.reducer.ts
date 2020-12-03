import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import { setFilter, submit } from './issue.actions';

import { initialState, IssueState } from './issue.state';

const reducer = createReducer(
  initialState,
  on(submit, (state, { issue }) =>
    produce(state, draft => {
      draft.entities[issue.id] = {
        ...issue,
        resolved: false,
      };
    })
  ),
  on(setFilter, (state, { text }) =>
    produce(state, draft => {
      draft.filter.text = text;
    })
  ),
);

export const issueReducer = (state: IssueState | undefined, action: Action): IssueState => {
  try {
    return reducer(state, action);
  } catch (err) {
    console.error(err);

    return state || initialState;
  }
};
