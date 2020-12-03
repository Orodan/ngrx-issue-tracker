import { createAction, props } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

import { Issue } from './issue.state';

export const submit = createAction(
  '[Issue] Submit',
  (issue: Issue) => ({
    issue: {
      ...issue,
      id: uuidv4()
    }
  })
);

export const setFilter = createAction(
  '[Issue] set filter',
  props<{ text: string }>()
);
