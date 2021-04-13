import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy{
  userName: string ="";
  isLoggedIn: boolean = false;
  private _authSub : Subscription;

  constructor(private _authService: AuthService) 
  {
    //console.log(_authService);

  } 
  ngOnInit(): void{
   this._authSub= this._authService.authSubjectObservable.subscribe((data:boolean) =>{
      console.log(data);
      this.isLoggedIn=data;
    });
  }

  

  onInput():void{
    console.log(this.userName);
    //this.userName =ev.target.value;
  }
  login(): void{
    //this.isLoggedIn =true;

    //console.log(this.isLoggedIn);
    this._authService.broadcastAuthValue(true);
  }

  logout(): void{
    this.userName="";
    this._authService.broadcastAuthValue(false);

    //this.isLoggedIn =false;

  }

  ngOnDestroy():void{
    this._authSub.unsubscribe();
  }

}
