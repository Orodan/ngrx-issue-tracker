import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modules } from 'src/modules';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { IssuesComponent } from './components/issues/issues.component';
import { reducers } from './store';
import { resettingMetaReducer } from './store/meta-reducers'
@NgModule({
  declarations: [
    AppComponent,
    NewIssueComponent,
    IssuesComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
