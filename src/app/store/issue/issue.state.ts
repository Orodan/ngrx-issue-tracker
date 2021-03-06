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
  selected: string[];
  filter: Filter;
}

export const initialState: IssueState = {
  entities: {
    0: {
      id: '0',
      title: 'Mon issue de test',
      description: 'La description de mon issue de test',
      priority: 'low',
      resolved: false,

    }
  },
  selected: [],
  filter: {
    text: '',
  },
};
