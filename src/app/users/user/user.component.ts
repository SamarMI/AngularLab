import { Component, Input ,Output,EventEmitter, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {Subscription} from 'rxjs';
//import * as EventEmitter from 'node:events';
import{Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  implements OnInit{

  private _authSub : Subscription;
  constructor(private _authService: AuthService , private _router:Router){

  }  

  ngOnInit() :void{
    this._authSub=this._authService.authSubjectObservable.subscribe((data:boolean) =>{
      console.log(data);
      this.isLoggedIn=data;
    });
  }
  
  isLoggedIn: boolean;
  @Input() user;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage():void
  {
    this.messageEvent.emit(`You Have Clicked on ${this.user.name}.`);
    this._router.navigate(['/users'], {
      queryParams: {
        age: this.user.age,
        name: this.user.name
      },
      queryParamsHandling: 'merge'
    });
   
  }

  ngOnDestroy():void{
    this._authSub.unsubscribe();
  } 

}
