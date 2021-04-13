import { Component } from '@angular/core';
import { User } from '../user.model';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent  {
  message: string;

users:User[]=
[
  {name:'Mohamed',age:34 ,job:"student"},
  {name:'ali',age:30 ,job:"engineer"},
  {name:'marwa',age:40 ,job:"student"},
  {name:'Mohamed',age:15 },

  {name:'Mohamed',age:20 ,job:"developer"}


];

receiveMessage(msg)
{
  this.message=msg;
}
  

}
