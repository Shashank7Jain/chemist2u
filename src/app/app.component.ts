import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chemist2u';
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {}

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
  submitForm() {
    console.log('hi');
    console.log(this.form.value);
  }
}
