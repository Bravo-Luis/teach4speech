import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: '${{VITE_API_KEY}}',
  authDomain: '${{VITE_AUTH_DOMAIN}}',
  projectId: '${{VITE_PROJECT_ID}}',
  storageBucket: '${{VITE_STORAGE_BUCKET}}',
  messagingSenderId: '${{VITE_MESSAGING_SENDER_ID}}',
  appId: '${{VITE_APP_ID}}',
  measurementId: '${{VITE_MEASUREMENT_ID}}'
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;
