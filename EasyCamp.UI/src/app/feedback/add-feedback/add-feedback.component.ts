import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrl: './add-feedback.component.scss'
})
export class AddFeedbackComponent {
  feedbackForm = new FormGroup({
    user: new FormControl('', Validators.required),
    feedback: new FormControl('', Validators.required)
  });

  users = [
      { id: 1, name: "Alice", role: "Cub" },
      { id: 2, name: "Bob", role: "Venture" },
      { id: 3, name: "Charlie", role: "Explorer" },
      { id: 4, name: "David", role: "Rover" },
      { id: 5, name: "Eve", role: "Leader" },
      { id: 6, name: "Frank", role: "Adult Volunteer" },
      { id: 7, name: "Grace", role: "Explorer" },
      { id: 8, name: "Hank", role: "Venture" },
      { id: 9, name: "Ivy", role: "Cub" },
      { id: 10, name: "Jack", role: "Rover" }
  ];

  onSubmit () {
    console.log(this.feedbackForm);
    //send feeback to backend
  }
}
