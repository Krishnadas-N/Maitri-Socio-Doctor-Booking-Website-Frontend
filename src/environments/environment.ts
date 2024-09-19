export const environment = {
    production: true,
    firebaseConfig: {
      apiKey: process.env['FIREBASE_API_KEY'];
      authDomain: process.env['FIREBASE_AUTH_DOMAIN'];
      projectId: process.env['FIREBASE_PROJECT_ID'];
      storageBucket: process.env['FIREBASE_STORAGE_BUCKET'];
      messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'];
      appId: process.env['FIREBASE_APP_ID'];
      measurementId: process.env['FIREBASE_MEASUREMENT_ID'];
    },
    Google_Client_Id: process.env['GOOGLE_OAUTH_CLIENT_ID'],
    apiEndPoint: process.env['API_BASE_URL'],
    PUBLIC_ZEGO_APP_ID: process.env['ZEGO_APP_ID'],
    PUBLIC_ZEGO_SERVER_ID: process.env['ZEGO_SERVER_ID'],
    SOCKET_URL: process.env['SOCKET_SERVICE_URL'],
    UserServiceUrl: process.env['USER_SERVICE_API_URL'],
    DoctorServiceUrl: process.env['DOCTOR_SERVICE_API_URL'],
    AdminServiceUrl: process.env['ADMIN_SERVICE_API_URL'],
    FeedService: process.env['FEED_SERVICE_API_URL'],
    OtpService: process.env['OTP_SERVICE_API_URL'],
    ChatService: process.env['CHAT_SERVICE_API_URL'],
    SpeciailizationService: process.env['SPECIALIZATION_SERVICE_API_URL'],
    Stripe_Publishable_key: process.env['STRIPE_PUBLISHABLE_KEY'],
    STRIPE_SECRET_KEY: process.env['STRIPE_SECRET_KEY'],
    Logo_Url: process.env['COMPANY_LOGO_URL']
  };
