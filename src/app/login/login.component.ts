import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  wrongCredentials = false;
  constructor(){}

  ngOnInit(): void {
    
  }

  login(){
    this.wrongCredentials = !this.wrongCredentials;
  }

}