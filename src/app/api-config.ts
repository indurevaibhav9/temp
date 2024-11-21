import { environment } from '../environments/environment';

export const API_CONFIG = {

  // Image Service
  IMAGE_URL: 'https://images.spreezy.in',
  
  // Auth Service Endpoints
  AUTH_LOGOUT: (userName: string) => `${environment.apiGateway}/auth/${userName}/logout`,
  GENERATE_OTP: `${environment.apiGateway}/auth/generate-otp`,
  RESEND_OTP: `${environment.apiGateway}/auth/resend-otp`,
  VERIFY_OTP: `${environment.apiGateway}/auth/verify-otp`,

  // Business Service Endpoints
  GET_BUSINESS_DETAILS: (username: string) =>
    `http://192.168.1.14:8761/user/profile/${username}`,
  GET_PROFILE_POSTS: (username: string) =>
    `http://192.168.1.3:8082/feed/business/profile/${username}`,
  GET_SAVED_POSTS: (username: string) =>
    `http://192.168.1.3:8082/feed/saved/${username}`,

  // Feedback Service Endpoints
  SAVE_FEEDBACK: 'http://localhost:8081/feedback/saveFeedback',

  // Search Service Endpoints
  SEARCH_BUSINESSES: (query: string) => `http://localhost:8762/user/search/${query}`,

  
};
