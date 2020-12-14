import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';

import { IssuesComponent } from './components/issues/issues.component';

const routes: Routes = [
  { path: '', component: IssuesComponent },
  { path: 'issue/:id', component: IssueDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
