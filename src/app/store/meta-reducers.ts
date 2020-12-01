import { ActionReducer, createAction } from '@ngrx/store';

export const reset = createAction('Reset');

export const resettingMetaReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === reset.type) {
      return reducer(undefined, action);
    }

    return reducer(state, action);
  };
};
