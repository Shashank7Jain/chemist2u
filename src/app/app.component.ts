import { Component, OnInit } from '@angular/core';
//imports
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chemist2u';
  //initialisation
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {}

  //created the form and added validations
  //This form contains 3 fields: name, email and message with submit button
  form: FormGroup = this.formBuilder.group({
    name: [, { validators: [Validators.required], updateOn: 'change' }],
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    text: [, { validators: [Validators.required], updateOn: 'change' }],
  });
  //form data is received here
  submitForm() {
    console.log(this.form.value);
    this.form.reset();
  }
}
