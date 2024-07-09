import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  onclick() {
    console.log("Click");

    if (this.email && this.password) {
      this.loading = true;

      const user = {
        email: this.email,
        password: this.password
      };

      this.http.post('http://localhost:3000/users/login', user)
        .subscribe(
          response => {
            console.log('User logged in successfully', response);
          },
          error => {
            console.error('Error occurs', error);
          }
        );

      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/add-income']);
      }, 800);

      console.log(user);
    }
  }
}
