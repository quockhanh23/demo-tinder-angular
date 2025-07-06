import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  checkLogin = true;
  checkRegister = false;

  constructor() { }

  ngOnInit(): void {
  }

  isLogin() {
    this.checkLogin = true;
    this.checkRegister = false;
  }

  isRegister() {
    this.checkLogin = false;
    this.checkRegister = true;
  }

}
