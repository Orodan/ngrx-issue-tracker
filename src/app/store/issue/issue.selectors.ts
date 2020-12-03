import { createSelector } from '@ngrx/store';

import { RootState } from '..';
import { Filter, Issue } from '../issue/issue.state';

export const selectFeature = (state: RootState) => state.issue;

export const selectEntities = createSelector(
  selectFeature,
  ({ entities }) => entities
);

export const selectAll = createSelector(
  selectEntities,
  entities => Object.values(entities)
);

export const selectFilter = createSelector(
  selectFeature,
  ({ filter }) => filter
);

export const selectFiltered = createSelector(
  selectAll,
  selectFilter,
  (issues: Issue[], { text }: Filter) => {
    if (!text) { return issues; }

    const lowercasedFilterText = text.toLocaleLowerCase();

    return issues.filter(({ title, description }) =>
      title.toLowerCase().includes(lowercasedFilterText) ||
      description.toLowerCase().includes(lowercasedFilterText)
    );
  }
);

