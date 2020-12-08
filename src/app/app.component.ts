import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from './store';
import { IssueStats, selectStats } from './store/issue/issue.selectors';
import { reset } from './store/meta-reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stats$!: Observable<IssueStats>;

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.stats$ = this.store.select(selectStats);
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
