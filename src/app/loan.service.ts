import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Loan } from './loan';
import { LOANS } from './mock-loan';
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  getLoans(): Observable<Loan[]> {
    return of(LOANS);
  }

  getLoanByID(id: number): Observable<Loan[]> {
    return of(LOANS.find(loan => loan.id === id));
  }

}
