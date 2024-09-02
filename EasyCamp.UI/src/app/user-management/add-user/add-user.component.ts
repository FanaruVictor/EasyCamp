import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    role: new FormControl('', Validators.required),
  });


  roles = [
    {
      value: 1,
      viewValue: 'Explorator',
    },
    {
      value: 2,
      viewValue: 'Senior',
    },
    {
      value: 3,
      viewValue: 'Lider',
    },
    {
      value: 4,
      viewValue: 'Adult Volunteer',
    },
  ];

  onSubmit() {
    console.log(this.userForm.controls);
    //send request to backend
  }
}
