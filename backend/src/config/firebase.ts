import dotenv from "dotenv";
import * as admin from "firebase-admin";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  } as admin.ServiceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const firestore = admin.firestore();
export const auth = admin.auth();
