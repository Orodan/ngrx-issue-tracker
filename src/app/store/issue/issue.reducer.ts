import { createReducer, on } from '@ngrx/store';
import { submit } from './issue.actions';

import { initialState } from './issue.state';

export const issueReducer = createReducer(
  initialState,
  on(submit, (state, { issue }) => ({
    ...state,
    entities: {
      ...state.entities,
      [issue.id]: {
        ...issue,
        resolved: false,
      }
    }
  }))
);
