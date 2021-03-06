import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Id: any;
  password: any;
  returnUrl: string;
  response: any;
  error: any;
  constructor(private authservice: AuthService, private router: Router, private route: ActivatedRoute) {
    // get return url from route parameters or default to '/'
    if (this.authservice.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

  }
  loginUser(idinput: HTMLInputElement, passwordinput: HTMLInputElement) {
    this.Id = idinput.value, this.password = passwordinput.value;
    let error = document.getElementById('error');
    this.authservice.login(this.Id, this.password).pipe(first()).subscribe(res => {
      this.response = res.msg;
      this.router.navigate([this.returnUrl]);

    }, err => {
      this.error = err.error;
      error.classList.replace('d-none', 'd-block');
      error.innerHTML = this.error;

    }
    );

  }
}
