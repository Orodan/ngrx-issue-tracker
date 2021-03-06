import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modules } from 'src/modules';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { IssuesComponent } from './components/issues/issues.component';
import { reducers } from './store';
import { resettingMetaReducer } from './store/meta-reducers';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueSearchComponent } from './components/issue-search/issue-search.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssuePriorityComponent } from './components/issue-priority/issue-priority.component';
@NgModule({
  declarations: [
    AppComponent,
    NewIssueComponent,
    IssuesComponent,
    IssueListComponent,
    IssueSearchComponent,
    IssueDetailComponent,
    IssuePriorityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers: [resettingMetaReducer] }),
    modules,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
