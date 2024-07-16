# Maitri Socio Mental Health Booking - Frontend

Welcome to the frontend repository of the Maitri Socio Mental Health Booking project. This project is built using Angular and aims to provide a user-friendly interface for booking mental health consultations.

## Features

- User Authentication and Authorization
- Video Consultations with Doctors
- Booking System with Available Slots
- Secure Payment Integration with Razorpay
- Admin Dashboard with Analytics
- Real-time Chat and Notifications

## Technologies Used

- Angular
- Tailwind CSS
- Angular NgRx for State Management
- RXJS
- Chart.js
- Survey.js
- ZegoCloud for Video Conferencing
- Socket.IO for Real-time Communication

## Getting Started

### Prerequisites

- Node.js
- Angular CLI

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/maitri-frontend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd maitri-frontend
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Run the application:
    ```sh
    ng serve
    ```

5. Open your browser and navigate to `http://localhost:4200`.

### Configuration

The frontend requires environment variables to connect to the backend services. Create a file named `environment.ts` in the `src/environments` folder and add the following configuration:
The backend of this project is built using Node.js, Express, and TypeScript. You can find the frontend repository [here](https://github.com/Krishnadas-N/Maitri-Socio-Doctor-Booking-Website-Backend-.git).

```typescript
export const environment = {
    production: false,
    firebaseConfig : {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    },
    Google_Client_Id:'',
    PUBLIC_ZEGO_APP_ID:,
    PUBLIC_ZEGO_SERVER_ID:'',
    SOCKET_URL:'http://localhost:3000',
    UserServiceUrl:'http://localhost:3000/api/users',
    DoctorServiceUrl:'http://localhost:3000/api/doctors',
    AdminServiceUrl:'http://localhost:3000/api/admin',
    FeedService:'http://localhost:3000/api/posts',
    OtpService:'http://localhost:3000/api/otp',
    ChatService:'http://localhost:3000/api/chat',
    SpeciailizationService:'http://localhost:3000/api/spec',
    Stripe_Publishable_key:'',
    STRIPE_SECRET_KEY : '',
    Logo_Url:'https://res.cloudinary.com/dpjkuvq1r/image/upload/v1713504711/Maitri-Project/pjk1dkhxnelixo9vtoiv.jpg'
  };

