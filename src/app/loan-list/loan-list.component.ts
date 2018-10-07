import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  constructor(private loanService: LoanService) {

  }
  title = 'Loan List';
  loans : Loan[];

  ngOnInit() {
    this.getAllLoans();
  }

  getAllLoans(): void {
    this.loanService.getLoans().subscribe(loans => this.loans = loans);
  }


}
