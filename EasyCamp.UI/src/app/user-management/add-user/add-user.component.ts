import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('', Validators.required),
  });

  roles = [
    {
      value: 1,
      viewValue: 'Cub',
    },
    {
      value: 2,
      viewValue: 'Venture',
    },
    {
      value: 3,
      viewValue: 'Explorer',
    },
    {
      value: 4,
      viewValue: 'Rover',
    },
    {
      value: 5,
      viewValue: 'Leader',
    },
    {
      value: 6,
      viewValue: 'Adult Volunteer',
    }
  ];

  onSubmit() {
    console.log(this.userForm.controls);
    //send request to backend
  }
}
