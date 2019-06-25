import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {


  foobar : any;

  constructor() { }

  ngOnInit() {
  }


  test(event){

    if(event.target.value.length > 7) {
      console.log(event.target.value);
    }
  }

}
