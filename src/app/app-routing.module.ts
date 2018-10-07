import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent }      from './loan-list/loan-list.component';
import { LoanDetailComponent }      from './loan-detail/loan-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/loans', pathMatch: 'full' },
  { path: 'loans', component: LoanListComponent },
  { path: 'loan/:id', component: LoanDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }
