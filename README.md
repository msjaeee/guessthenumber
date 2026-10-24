# 🎮 Game Arcade — Guess the Numbers (online 2-player)

Static site + one tiny serverless function (`api/config.js`). No build step.
Realtime sync uses Firebase Firestore (free Spark plan is enough).

## 1. Firebase (once)
1. console.firebase.google.com -> Add project.
2. Build -> **Firestore Database** -> Create database (production mode).
3. Firestore -> **Rules** -> paste `firestore.rules` -> Publish.
4. Project settings -> Your apps -> Web app (`</>`) -> copy the `firebaseConfig` values.

## 2. GitHub
Upload all files in this folder to a repo. (There is no config file with keys in it.)

## 3. Vercel
1. vercel.com/new -> import the repo. Framework Preset: **Other**. No build command / output directory.
2. Before or after deploying: **Project -> Settings -> Environment Variables**, add these 6 (see `.env.example`):
   `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`
   (Tick Production, Preview and Development.)
3. **Redeploy** (Deployments -> ... -> Redeploy). Env vars only apply to new deployments.

## Notes
- A Firebase web config is not a true secret: browsers always receive it at runtime. Env vars just keep it out of GitHub. Your real protection is the Firestore rules, and optionally restricting the API key by website in Google Cloud Console (APIs & Services -> Credentials).
- Refreshing mid-round loses your hidden numbers; start a new game.
- To add a game: add an entry to `GAMES` in `index.html` and write its screens.

## Power-ups
Each round every player gets 2 random power-ups (reveal a digit / reveal a position / rule out digits). One can be used per turn, on your own turn; the opponent's device answers it so hidden numbers are never sent.
