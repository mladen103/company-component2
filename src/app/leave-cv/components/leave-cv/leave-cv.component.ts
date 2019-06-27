import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-cv',
  templateUrl: './leave-cv.component.html',
  styleUrls: ['./leave-cv.component.css']
})
export class LeaveCvComponent implements OnInit {

  constructor() { }

  leaveCvForm : FormGroup;

  ngOnInit() {

    this.leaveCvForm = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'gender' : new FormControl('male', Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'yearOfStudy' : new FormControl('0', Validators.required),
      'aboutMe' : new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.leaveCvForm);
    if(!this.leaveCvForm.invalid){
        alert("You have successfully sent cv! You will receive a reply via mail.");
    }
    else{
      alert("Data is invalid.");
    }
  }

}
