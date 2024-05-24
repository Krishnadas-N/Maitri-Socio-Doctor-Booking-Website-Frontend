import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel } from "survey-creator-core";
import { Model } from "survey-core";
import { surveyJson } from './survery';
import { MatDialogRef } from '@angular/material/dialog';
import { SurveyModule } from "survey-angular-ui";
// import "survey-core/defaultV2.min.css";
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  standalone:true,
  imports:[SurveyModule,CommonModule]
})
export class SurveyComponent implements OnInit {
  creator!: SurveyCreatorModel;
  title = 'SurveyJS for Angular - Quiz';
  surveyModel!: Model;
  recommendedCategories!: string[];
  npsScore!: number;
  loading = false;
  constructor(
    private dialogRef: MatDialogRef<SurveyComponent>,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.creator = new SurveyCreatorModel({ showLogicTab: false });
    const survey = new Model(surveyJson);
    // survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
  });
    this.surveyModel = survey;
    this.surveyModel.onComplete.add(this.sendDataToServer.bind(this));
    // Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }

  closeSurvey(){
    this.dialogRef.close()
  }
  sendDataToServer(sender: Model) {
    const surveyData = sender.data;
    this.loading = true;
    this.userService.submitSurvey(surveyData).subscribe({
      next: (response) => {
        console.log("responses from surevry",response)
        this.recommendedCategories = response.data.recommendedCategories;
        this.npsScore = response.data.npsScore;
        this.loading = false;
        this.surveyModel.completedHtml = this.getCompletionMessage(this.npsScore, this.recommendedCategories);
      },
      error: (err) => {
        console.error('An error occurred while submitting the survey data', err);
        this.loading = false;
      }
    });
  }
  getCompletionMessage(npsScore: number, categories: string[]): string {
    let baseMessage = '';

    if (npsScore <= 6) {
      baseMessage = `
        <div class="feedback-message feedback-message-poor">
          <p>Thank you for completing the assessment!</p>
          <p>Your well-being is important to us, and we appreciate your input.</p>
          <p>If you're experiencing difficulties, our team is here to help you find the support you need. Please consider reaching out to us so that we can assist you further.</p>
        </div>`;
    } else if (npsScore === 6 || npsScore === 7) {
      baseMessage = `
        <div class="feedback-message feedback-message-average">
          <p>Thank you for completing the assessment!</p>
          <p>Your feedback is valuable in our mission to provide the best care possible.</p>
          <p>If you require assistance, don't hesitate to contact us. We're committed to improving and ensuring you receive the support you deserve.</p>
        </div>`;
    } else if (npsScore >= 8) {
      baseMessage = `
        <div class="feedback-message feedback-message-good">
          <p>Thank you for completing the assessment!</p>
          <p>We're delighted to hear that you're satisfied with our services.</p>
          <p>If you ever need additional support or guidance, please feel free to reach out. Your well-being is our top priority, and we're here to help in any way we can.</p>
        </div>`;
    }

    if (categories.length > 0) {
      baseMessage += `
        <div class="recommended-categories">
          <p>Based on your responses, we recommend the following categories of specialists for you to consult:</p>
          <ul>`;
      categories.forEach(category => {
        baseMessage += `<li class="recommended-category">${category}</li>`;
      });
      baseMessage += `</ul></div>`;
    }

    return baseMessage;
  }



}
