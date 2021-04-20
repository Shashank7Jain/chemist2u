import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('check for rendering', () => {
    const compiled = fixture.debugElement.nativeElement;
    const img = compiled.querySelector('img');
    const email = compiled.querySelector('input[type="email"]');
    const name = compiled.querySelector('input[type="text"]');
    const message = compiled.querySelector('textarea');
    const button = compiled.querySelector('button');

    expect(img).toBeTruthy();
    expect(email).toBeTruthy();
    expect(name).toBeTruthy();
    expect(message).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('validity of form', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const form = fixture.componentInstance.form;

    expect(form.valid).toBeFalsy();
  });
  it('input values check ', () => {
    const name = component.form.controls.name;
    const email = component.form.controls.email;
    const text = component.form.controls.text;

    expect(name.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(text.valid).toBeFalsy();

    email.setValue('asdfsdf@gmail.com');
    expect(email.valid).toBeTruthy();

    email.setValue('asdfsdf');
    expect(email.valid).toBeFalsy();

    name.setValue('');
    expect(name.valid).toBeFalsy();
  });

  it('should test if submit button is disabled', () => {
    component.form.controls.name.setValue('');
    component.form.controls.email.setValue('');
    component.form.controls.text.setValue('');
    fixture.detectChanges();
    expect(el.querySelector('button').disabled).toBeTruthy();
  });

  it('should test if submit button is disabled when the form is invalid -- Wrong format of email', () => {
    component.form.controls.name.setValue('abc');
    component.form.controls.text.setValue('abc');
    component.form.controls.email.setValue('abc@123');
    fixture.detectChanges();
    expect(el.querySelector('button').disabled).toBeTruthy;
  });
  it('should test if submit button is enabled when the form is valid', () => {
    component.form.controls.name.setValue('abc@abc.com');
    component.form.controls.text.setValue('abc@abc.com');
    component.form.controls.email.setValue('abc@123');
    fixture.detectChanges();
    expect(el.querySelector('button').disabled).toBeFalsy;
  });
  it('should test if submitForm method has been called', () => {
    fixture.detectChanges();
    spyOn(component, 'submitForm');
    el.querySelector('button').click();
    expect(component.submitForm).toHaveBeenCalledTimes(0);
  });
  it('should test if form is true', () => {
    fixture.detectChanges();
    component.submitForm();
    expect(component.form).toBeTruthy;
  });
});
