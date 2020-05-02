import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../model/user';
import { Countries } from '../model/country';
import { DataService } from '../services/data.service';
import { RouterModule, Routes, Router } from "@angular/router"; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new Users();
  countriesArray: Countries[];

  form = new FormGroup({
    strName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    strEmail: new FormControl('', [Validators.required, Validators.email]),
    dtrDateSumbit: new FormControl('', Validators.required),
    strCountry: new FormControl('', Validators.required),
    strAddress: new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
  }

  
  //
  // selectedUsers: Users;
  // onSelect(user: Users): void { 
  //   this.selectedUsers = user; 
  //   this.router.navigate["/userdetails"];
  // } 

  getCountries(): void {
    this.dataService
        .fetchCountires()
        .subscribe(
          countriesArray => {
            this.countriesArray = countriesArray
          }
    )
  }

  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log("date " + this.form.value.dtrDateSumbit);
  }

}
