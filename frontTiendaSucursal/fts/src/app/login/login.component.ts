import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correct_user: string = "admininicial";
  correct_pass: string = "admin123456";

  user: string = "";
  pass: string = "";
  correct: number = -1;
  constructor(private router: Router){}
  comparar() {
    if (this.user === this.correct_user) {
      this.correct = 1;
      if (this.pass === this.correct_pass) {
        this.router.navigate(['/homepage']);
        } else {
        this.correct = 0;
      }
    } else {
      this.correct = 0;
    }

  }

  ngOnInit(): void {
  }

}
