// export const environment = {
//     production: false,
//     firebaseConfig : {
//       apiKey: "AIzaSyDtkbHtoAwdxv4MnhZSjUt3gAEiECePuHw",
//       authDomain: "maitri-booking-website.firebaseapp.com",
//       projectId: "maitri-booking-website",
//       storageBucket: "maitri-booking-website.appspot.com",
//       messagingSenderId: "623885757895",
//       appId: "1:623885757895:web:3ef8b35161f2da4237fde2",
//       measurementId: "G-LVW18V2DYG"
//     },
//     Google_Client_Id:'447977348117-hdalhj00m1mv9el3av0b9ehcvo1t595i.apps.googleusercontent.com',
//     apiEndPoint:"https://api.development.example.com",
//     PUBLIC_ZEGO_APP_ID:1031135706,
//     PUBLIC_ZEGO_SERVER_ID:'4b4d367cf4050f6fa37c7b6b6403f85d',
//     SOCKET_URL:'http://localhost:3000',
//     UserServiceUrl:'http://localhost:3000/api/users',
//     DoctorServiceUrl:'http://localhost:3000/api/doctors',
//     AdminServiceUrl:'http://localhost:3000/api/admin',
//     FeedService:'http://localhost:3000/api/posts',
//     OtpService:'http://localhost:3000/api/otp',
//     ChatService:'http://localhost:3000/api/chat',
//     SpeciailizationService:'http://localhost:3000/api/spec',
//     Stripe_Publishable_key:'pk_test_51PFDPqSBr7Bwm0HDO6kjkkRtPxr0IuXHLjN9ZRUjbJf471m9Oa5G5kLOYTgQR16tgZAYzF4AGQ401FGkrEMVoZ2m00pDS9Tb8d',
//     STRIPE_SECRET_KEY : 'sk_test_51PFDPqSBr7Bwm0HDOyykYe1oYZRiLpRWjkb3Y4bwd25IXxKxwtfoTz82idF3IGjvtOCoQfyz0Wv6wUepPyIz7s5x00SiNJIQzA',
//     Logo_Url:'https://res.cloudinary.com/dpjkuvq1r/image/upload/v1713504711/Maitri-Project/pjk1dkhxnelixo9vtoiv.jpg'
//   };
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
    projectId: process.env['FIREBASE_PROJECT_ID'],
    storageBucket: process.env['FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'],
    appId: process.env['FIREBASE_APP_ID'],
    measurementId: process.env['FIREBASE_MEASUREMENT_ID']
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
