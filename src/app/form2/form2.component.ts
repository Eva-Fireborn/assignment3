import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { UserEducation } from '../user-education';
import { UserEmployment } from '../user-employment';
import { FormControl, Validators, AbstractControl, FormGroup, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  @Input() userLanguagesCheck: boolean;
  @Input() aboutUserControl: boolean;
  @Input() userNameGroup: boolean;   
  userProfileService: UserProfileService;
  userEducation: UserEducation [] = [];
  userEmployment: UserEmployment [] = [];
  userSchoolControl: AbstractControl;
  userStartControl: AbstractControl;
  userEndControl: AbstractControl;
  userCompanyControl: AbstractControl;
  userTitleControl: AbstractControl;
  userStartEmploymentControl: AbstractControl;
  userEndEmploymentControl: AbstractControl

  userEducationGroup: FormGroup = new FormGroup({
		userSchoolControl: new FormControl('', [Validators.required, Validators.minLength(2)]),
    userStartControl: new FormControl('', [Validators.required, Validators.min(1950), Validators.max(2019), Validators.pattern('[0-9 ]*')]),
    userEndControl: new FormControl('', [Validators.required, Validators.min(1950), Validators.max(2019), Validators.pattern('[0-9 ]*')]), 
		},
		{ validators: [] }
  );

  userEmploymentGroup: FormGroup = new FormGroup({
    userCompanyControl: new FormControl('', [Validators.required, Validators.minLength(2)]),
    userTitleControl: new FormControl('', [Validators.required, Validators.minLength(2)]),
    userStartEmploymentControl: new FormControl('', [Validators.required, Validators.min(1950), Validators.max(2019), Validators.pattern('[0-9 ]*')]),
    userEndEmploymentControl: new FormControl('', [Validators.required, Validators.min(1950), Validators.max(2019), Validators.pattern('[0-9 ]*')]), 
		},
		{ validators: [] }
  );

  constructor(userProfileService: UserProfileService) { 
    this.userProfileService= userProfileService;
  }
  userEducationCheck: boolean = false;
  addEducation(){
    let newEducation = {
      school: this.userSchoolControl.value,
      startYear: this.userStartControl.value,
      endYear: this.userEndControl.value
    }
    this.userEducationCheck = true;
    return this.userProfileService.setDataEducation(newEducation);
  }
  userEmploymentCheck: boolean = false;
  addEmployment(){
    let newEmployment = {
      company: this.userCompanyControl.value,
      workTitle: this.userTitleControl.value,
      startYear: this.userStartEmploymentControl.value,
      endYear: this.userEndEmploymentControl.value
    } 
    this.userEmploymentCheck = true;
    return this.userProfileService.setDataEmployment(newEmployment);
  }
  ngOnInit() {
    this.userEducation = this.userProfileService.getDataEducation();
    this.userEmployment = this.userProfileService.getDataEmployment();
    this.userSchoolControl = this.userEducationGroup.controls['userSchoolControl'];
    this.userStartControl = this.userEducationGroup.controls['userStartControl'];
    this.userEndControl = this.userEducationGroup.controls['userEndControl'];
    this.userCompanyControl = this.userEmploymentGroup.controls['userCompanyControl'];
    this.userTitleControl = this.userEmploymentGroup.controls['userTitleControl'];
    this.userStartEmploymentControl = this.userEmploymentGroup.controls['userStartEmploymentControl'];
    this.userEndEmploymentControl = this.userEmploymentGroup.controls['userEndEmploymentControl'];
  }

}
