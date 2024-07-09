import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  source: string = '';
  gratuity: number;
  providentfund: number;
  date: Date;
  provident: number;
  dateInput: Date;
  sourceInput: string = ''; 
  gratuityInput: number;
  salary: number;
  salaryInput: number;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onclickapp() {
    if (this.salary && this.source && this.gratuity && this.provident && this.date) {
      const obj={
        salary:this.salary, source:this.source, gratuity:this.gratuity, provident:this.provident, date:this.date
      };
      console.log(obj);
      
    }
  }

}
