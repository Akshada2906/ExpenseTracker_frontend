import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  date: any;
  dateInput: any
  amount: any;
  amountInput: any;
  category: string;
  categoryInput: string;
  payment: string;
  paymentInput: string;

  constructor() { }

  ngOnInit(): void {
  }
  onclick() {
    console.log("Click")
    if (this.date && this.amount) {
      const obj = {
        date: this.date, amount: this.amount, category: this.category, payment: this.payment
      };
      console.log(obj);
    }



  }


}
