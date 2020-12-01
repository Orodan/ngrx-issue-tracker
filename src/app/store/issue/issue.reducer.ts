import { createReducer, on } from '@ngrx/store';
import produce from 'immer';

import { submit } from './issue.actions';

import { initialState } from './issue.state';

export const issueReducer = createReducer(
  initialState,
  on(submit, (state, { issue }) =>
    produce(state, draft => {
      draft.entities[issue.id] = {
        ...issue,
        resolved: false,
      }
    })
  )
);
