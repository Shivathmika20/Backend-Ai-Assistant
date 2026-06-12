# Voice-to-Drive AI Assistant

A voice-powered AI assistant that transcribes your calls, structures the content using AI, and saves it as a formatted Google Doc , then notifies you via SMS.

## Tech Stack

| Layer | Tool |
|---|---|
| Backend | Node.js + Express + TypeScript |
| Calling | Twilio |
| Transcription | AssemblyAI |
| AI Processing | Groq (Llama 3) |
| Storage | Google Docs + Drive API |
| Tunneling | ngrok (development) |

## Features

- 🎙️ Voice transcription using AssemblyAI
- 🤖 AI-powered content structuring with Groq
- 📄 Automatic Google Docs generation
- 📱 SMS notifications via Twilio
- 🔗 Webhook-based call handling
- ⚡ Built with TypeScript and Express

---

## Flow
User calls Twilio number

↓

Voice recorded & transcribed (AssemblyAI)

↓

AI structures the content (Groq - Llama 3)

↓

Saved as Google Doc in your Drive

↓

SMS notification sent with doc link


## Project Structure

```text
src/
│
├── controllers/
│   └── twilioController.ts      # Orchestrates the complete workflow
│
├── services/
│   ├── assemblyService.ts       # Voice transcription
│   ├── groqService.ts           # AI content structuring
│   ├── gdriveService.ts         # Google Docs creation
│   └── twilioService.ts         # SMS notifications
│
├── routes/
│   └── twilio-route.ts          # API routes
│
├── config/
│   ├── var.ts                   # Environment variables
│   └── getToken.ts              # Google OAuth token generation
│
└── index.ts                     # Express server entry point
```

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/Shivathmika20/Backend-Ai-Assistant.git
cd Backend-Ai-Assistant
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Fill in all values in `.env` — see `.env.example` for reference.

### 3. Set up Google OAuth

- Create a Google Cloud project
- Enable Google Drive API + Google Docs API
- Create OAuth 2.0 credentials (Desktop App)
- Run the token script to get your refresh token:

```bash
npx ts-node src/config/getToken.ts
```

### 4. Set up Twilio

- Create a Twilio account
- Get a phone number
- Set webhook URL to: `https://your-ngrok-url/api/twilio/answer`

### 5. Run the server

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

### 6. Start ngrok

```bash
ngrok http 3000
```

Update your Twilio webhook with the new ngrok URL.

---

## API Routes

| Method | Route | Description |
|---|---|---|
| POST | /api/twilio/answer | Handles incoming call, starts recording |
| POST | /api/twilio/callback | Receives recording, triggers pipeline |

## Environment Variables

See `.env.example` for all required variables.

--- 

## 🚀 Roadmap

- [ ] v2 — Google OAuth for multi-user support
- [ ] v2 — Indian Twilio number for local calling
- [ ] v2 — Frontend dashboard (Next.js)
- [ ] v2 — Database layer (Supabase)
- [ ] v2 — Real-time transcription

--- 

## 👩‍💻 Built by

[Shivathmika](https://github.com/Shivathmika20)
