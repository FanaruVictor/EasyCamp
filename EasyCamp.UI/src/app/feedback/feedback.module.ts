import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [AddFeedbackComponent],
})
export class FeedbackModule {}
