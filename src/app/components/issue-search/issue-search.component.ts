import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { setFilter } from 'src/app/store/issue/issue.actions';

@Component({
  selector: 'app-issue-search',
  templateUrl: './issue-search.component.html',
  styleUrls: ['./issue-search.component.scss']
})
export class IssueSearchComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      issueFilter: this.fb.control('')
    });

    this.form.get('issueFilter')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(text => {
        this.store.dispatch(setFilter({ text }));
      });
  }

  submit(): void {
    const text = this.form.get('issueFilter')?.value as string;

    this.store.dispatch(setFilter({ text }));
  }

}
