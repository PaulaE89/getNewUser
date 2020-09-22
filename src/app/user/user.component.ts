import { Component, OnInit } from '@angular/core';

//services

import {UserManagerService} from './services/user-manager.service'

//models
import {IUserResponse, IUser,IUserpicture} from './models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name:string;
  email: string;
  phone:string;
  picture: string;

  

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {

    //this is call one time. 

    this.getRandomUser();


  }


  getRandomUser(){

    this.userManagerService.getRandomName().subscribe((response: IUserResponse)=>{

      const {results}=response; // desctructuring 
      const [data]=results;//desctructuring (array)
      const {name,email, phone, picture}:IUser=data; //destructuring
      this.name=`${name.first} ${name.last}`; //template literal
      this.email=email;
      this.phone=phone;
      this.picture=picture.large;
      console.log(data);
      console.log(name,email, phone, picture);

     
    })
  }

}
