# Maitri Socio Mental Health Booking - Frontend

Welcome to the frontend repository of the Maitri Socio Mental Health Booking project. This project is built using Angular and aims to provide a user-friendly interface for booking mental health consultations.

## Login Credentials

For testing purposes, use the following credentials to log into different sections of the application:

### User Login
- **Email**: `testuser@email.com`
- **Password**: `Testuser@123`
- **Login Path**: `/login`

### Doctor Login
- **Email**: `rakeshKumar@email.com`
- **Password**: `Rakeshkumar@123`
- **Login Path**: `/doctor/login`

### Admin Login
- **Email**: `krishnadas@email.com`
- **Password**: `Krishnadas@123`
- **Login Path**: `/admin/login`

---

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
- Yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Krishnadas-N/Maitri-Socio-Doctor-Booking-Website-Frontend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd maitri-frontend
    ```

3. Install dependencies using Yarn:
    ```sh
    yarn install
    ```

4. Create a `.env` file in the root folder and add your environment variables:
    ```env
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
    GOOGLE_OAUTH_CLIENT_ID=your_google_oauth_client_id
    API_BASE_URL=your_api_base_url
    ZEGO_APP_ID=your_zego_app_id
    ZEGO_SERVER_ID=your_zego_server_id
    SOCKET_SERVICE_URL=your_socket_service_url
    USER_SERVICE_API_URL=your_user_service_api_url
    DOCTOR_SERVICE_API_URL=your_doctor_service_api_url
    ADMIN_SERVICE_API_URL=your_admin_service_api_url
    FEED_SERVICE_API_URL=your_feed_service_api_url
    OTP_SERVICE_API_URL=your_otp_service_api_url
    CHAT_SERVICE_API_URL=your_chat_service_api_url
    SPECIALIZATION_SERVICE_API_URL=your_specialization_service_api_url
    STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    COMPANY_LOGO_URL=your_company_logo_url
    ```

5. Run the application:
    ```sh
    yarn start
    ```

6. Open your browser and navigate to `http://localhost:4200`.

### Configuration

The frontend requires environment variables to connect to the backend services. The backend of this project is built using Node.js, Express, and TypeScript. You can find the frontend repository [here](https://github.com/Krishnadas-N/Maitri-Socio-Doctor-Booking-Website-Backend-.git).
