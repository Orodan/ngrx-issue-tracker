import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/app/store';
import { Issue } from 'src/app/store/issue/issue.state';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  issues$!: Observable<Issue[]>;

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.issues$ = this.store.select(state =>
      Object.values(state.issue.entities)
    );
  }

}
