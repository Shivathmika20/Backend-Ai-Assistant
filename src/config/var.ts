import dotenv from "dotenv";
dotenv.config();

export const config = {
    // Server
    PORT: process.env.PORT || 3000,

    // Twilio
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || "",
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || "",
    TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER || "",
    MY_PHONE_NUMBER: process.env.MY_PHONE_NUMBER || "",

    // AssemblyAI
    ASSEMBLYAI_API_KEY: process.env.ASSEMBLYAI_API_KEY || "",

    // Groq
    GROQ_API_KEY: process.env.GROQ_API_KEY || "",

    // Google
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL || "",
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY || "",
    GOOGLE_DRIVE_FOLDER_ID: process.env.GOOGLE_DRIVE_FOLDER_ID || "",
}
