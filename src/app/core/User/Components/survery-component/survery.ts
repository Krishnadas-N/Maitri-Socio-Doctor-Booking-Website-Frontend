export const surveyJson = {
  "title": " Discover Your Mental Health Status",
  "description": " Take our quick survey to understand your mental well-being and find personalized support. Your answers are confidential and will guide us in recommending the right care for you. Let's start improving your mental health today",
  "logo": "https://res.cloudinary.com/dpjkuvq1r/image/upload/v1713504711/Maitri-Project/pjk1dkhxnelixo9vtoiv.jpg",
  "logoWidth": "auto",
  "logoHeight": "40px",
  "logoFit": "cover",
  "focusFirstQuestionAutomatic": false,
    startSurveyText: "Start Accessment",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "sleepQuality",
            title: "How would you rate your sleep quality over the past month?",
            choices: [
              "Very Poor",
              "Poor",
              "Average",
              "Good",
              "Very Good"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "mood",
            title: "How often have you felt down, depressed, or hopeless in the last two weeks?",
            choices: [
              "Not at all",
              "Several days",
              "More than half the days",
              "Nearly every day"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "anxietyLevel",
            title: "How often have you felt anxious or on edge in the last two weeks?",
            choices: [
              "Not at all",
              "Several days",
              "More than half the days",
              "Nearly every day"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "dailyFunctioning",
            title: "How often have your mental health symptoms interfered with your daily activities (work, social life, home responsibilities)?",
            choices: [
              "Not at all",
              "Several days",
              "More than half the days",
              "Nearly every day"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "pastTreatment",
            title: "Have you received mental health treatment in the past?",
            choices: [
              "Yes",
              "No"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "treatmentPreference",
            title: "What type of treatment are you most interested in?",
            choices: [
              "Medication",
              "Talk Therapy",
              "Combination of both",
              "Not sure"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "crisis",
            title: "Are you currently experiencing a mental health crisis (e.g., suicidal thoughts, self-harm)?",
            choices: [
              "Yes",
              "No"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "supportSystem",
            title: "Do you have a reliable support system (friends, family, etc.) to help you cope with stress?",
            choices: [
              "Yes",
              "No",
              "Not sure"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "physicalSymptoms",
            title: "How often do you experience physical symptoms such as headaches, stomachaches, or muscle tension due to stress or anxiety?",
            choices: [
              "Not at all",
              "Several days",
              "More than half the days",
              "Nearly every day"
            ]
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "substanceUse",
            title: "Do you use substances (alcohol, drugs) to cope with your mental health symptoms?",
            choices: [
              "Never",
              "Occasionally",
              "Frequently",
              "Daily"
            ]
          }
        ]
      }
    ],
    completedHtml: `
    <div class="waiting-message">
      <p>Thank you for completing the assessment. We are currently processing your responses to find the best matching categories for your mental health needs. Please wait a moment...</p>
      <div class="loading-spinner">
        <i class="fa fa-spinner fa-spin"></i> Loading...
      </div>
    </div>`,
  };