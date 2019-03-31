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
  userLanguage: string;
  incorrectLanguage: boolean = false;
  languages: string [] = ['Java', 'JavaScript', 'COBOL', 'C', 'C++', 'C#', 'HTML', 'CSS', 'Brainfuck', 'TypeScript', 'Ruby', 'Python', 'PHP', 'Pascal', 'Perl' ];
  userLanguages: string [] = [];
  addLanguageToUserLanguages() {
    this.incorrectLanguage=false;
    if (this.userLanguage){
      this.userLanguages.push(this.userLanguage)
    } else {
      this.incorrectLanguage=true;
    }
    this.userLanguage = '';
  }
  userNameGroup: FormGroup = new FormGroup({
		userNameControl: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
    firstNameControl: new FormControl('', [Validators.required]),
    lastNameControl: new FormControl('', [Validators.required]),
    cityNameControl: new FormControl('', [Validators.required]) 
		},
		{ validators: [] }
  );
  

  constructor() { }

  ngOnInit() {
    this.userNameControl = this.userNameGroup.controls['userNameControl'];
    this.firstNameControl = this.userNameGroup.controls['firstNameControl'];
    this.lastNameControl = this.userNameGroup.controls['lastNameControl'];
    this.cityNameControl = this.userNameGroup.controls['cityNameControl'];
  }

}
