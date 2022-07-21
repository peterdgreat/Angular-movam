import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { UserDetails } from 'src/app/types/user-details';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userDetails?: UserDetails[];
  constructor(private userDetailService: UserDetailsService) {}

  ngOnInit(): void {
    if (this.userDetailService.getUserDetails()) {
      this.userDetails = this.userDetailService.getUserDetails();
    }
  }
}
