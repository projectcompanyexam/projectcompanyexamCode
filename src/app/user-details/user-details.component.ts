import { Component, OnInit } from '@angular/core';
import { Users } from '../model/user';
import { ActivatedRoute } from "@angular/router"; //dont forget this if your going to pass params here
import { Location } from "@angular/common";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user = new Users();

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.user.strName = this.route.snapshot.params.strName;
    this.user.strEmail = this.route.snapshot.params.strEmail;
    this.user.dtrDateSumbit = this.route.snapshot.params.dtrDateSumbit;
    this.user.strCountry = this.route.snapshot.params.strCountry;
    this.user.strAddress = this.route.snapshot.params.strAddress;
    //console.log(this.user.dtrDateSumbit);
  }

  goBack(): void{
    this.location.back();
  }

}
