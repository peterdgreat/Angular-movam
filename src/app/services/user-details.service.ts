import { Injectable } from '@angular/core';
import { UserDetails } from '../types/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  userDetails?:UserDetails[]

  constructor() { }

  setUserDetails(userDetails:UserDetails[]){
    this.userDetails = userDetails
  }

  getUserDetails(){
    return this.userDetails
  }
}
