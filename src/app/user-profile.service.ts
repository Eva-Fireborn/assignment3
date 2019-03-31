import { Injectable } from '@angular/core';
import { UserEducation } from './user-education';
import { UserEmployment } from './user-employment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userEducation: UserEducation [] = [];
  private userEmployment: UserEmployment [] = [];
  constructor() { }

  getDataEducation(): UserEducation [] {
    return this.userEducation;
  }
  setDataEducation(experience) {
    this.userEducation.push(experience);
  }

  getDataEmployment(): UserEmployment [] {
    return this.userEmployment;
  }
  setDataEmployment(experience) {
    this.userEmployment.push(experience);
  }
}
