import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup, MinLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  userNameControl: AbstractControl;
  firstNameControl: AbstractControl;
  lastNameControl: AbstractControl;
  cityNameControl: AbstractControl;
  aboutUserControl = new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]);
  userLanguageControl = new FormControl('', [Validators.required]);
  
  isLanguageInList:boolean = false;
  languages: string [] = ['Java', 'JavaScript', 'COBOL', 'C', 'C++', 'C#', 'HTML', 'CSS', 'Brainfuck', 'TypeScript', 'Ruby', 'Python', 'PHP', 'Pascal', 'Perl' ];
  userLanguages: string [] = [];
  userLanguagesCheck: boolean = false;
  addLanguageToUserLanguages() {
    let language = this.userLanguageControl.value;
    let allreadyInList = this.userLanguages.find(function(langInList){
      return langInList === language
    });
    if (!allreadyInList && language !== ''){
      this.userLanguages.push(language)
      this.userLanguagesCheck = true;
      this.isLanguageInList = false;
    } else {
      this.isLanguageInList = true;
    }
  }

    userNameGroup: FormGroup = new FormGroup({
		userNameControl: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
    firstNameControl: new FormControl('', [Validators.required]),
    lastNameControl: new FormControl('', [Validators.required]),
    cityNameControl: new FormControl('', [Validators.required]) 
		},
		{ validators: [this.sameNameValidator] }
  );
  

  constructor() {  }

  ngOnInit() {
    this.userNameControl = this.userNameGroup.controls['userNameControl'];
    this.firstNameControl = this.userNameGroup.controls['firstNameControl'];
    this.lastNameControl = this.userNameGroup.controls['lastNameControl'];
    this.cityNameControl = this.userNameGroup.controls['cityNameControl'];
  }

  sameNameValidator(group: FormGroup){
    let userName = group.get('userNameControl').value.toUpperCase();
    let firstName = group.get('firstNameControl').value.toUpperCase();
    let lastName = group.get('lastNameControl').value.toUpperCase();
    if (userName === firstName){
      return {sameName: true}
    } else if (userName === lastName){
      return {sameName: true}
    } else if (userName === firstName+lastName){
      return {sameName: true}
    } else {
      return null
    }
  }

}
