import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FeedbackRoutingModule, ReactiveFormsModule],
  declarations: [AddFeedbackComponent],
})
export class FeedbackModule {}
