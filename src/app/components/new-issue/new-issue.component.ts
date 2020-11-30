import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { RootState } from 'src/app/store';
import { submit } from 'src/app/store/issue/issue.actions';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss']
})
export class NewIssueComponent implements OnInit {
  form!: FormGroup;

  get title(): AbstractControl | null {
    return this.form.get('title');
  }

  get description(): AbstractControl | null {
    return this.form.get('title');
  }

  constructor(private store: Store<RootState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['low', Validators.required],
    });
  }

  submit(): void {
    const issue = this.form.value;

    this.store.dispatch(submit(issue));
  }

}
