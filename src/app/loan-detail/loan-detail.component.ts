import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoanService } from '../loan.service';
@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {
  @Input() loan: Loan;
  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoanByID(id)
      .subscribe(loan => this.loan = loan);
  }

  goBack(): void {
  this.location.back();
}

}
