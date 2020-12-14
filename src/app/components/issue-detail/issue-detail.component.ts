import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RootState } from 'src/app/store';
import { selectOne } from 'src/app/store/issue/issue.selectors';
import { Issue } from 'src/app/store/issue/issue.state';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  issue$!: Observable<Issue>;

  constructor(private route: ActivatedRoute, private store: Store<RootState>) {}

  ngOnInit(): void {
    this.issue$ = this.route.params.pipe(
      switchMap(params => this.store.select(selectOne, params.id))
    );
  }

}
