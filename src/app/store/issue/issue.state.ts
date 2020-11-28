export interface Issue {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  resolved: boolean;
}

export interface Issues {
  [id: string]: Issue;
}

export interface Filter {
  text: string;
}

export interface IssueState {
  entities: Issues;
  filter: Filter;
}

export const initialState: IssueState = {
  entities: {},
  filter: {
    text: '',
  },
};
