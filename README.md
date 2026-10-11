# 🎴 Guess the Numbers (online 2-player)

Static site (no build step). Players join from separate devices using a 4-letter code.
Realtime sync uses Firebase Firestore (free Spark plan is enough).

## 1. Firebase setup (once)
1. Go to https://console.firebase.google.com → **Add project**.
2. **Build → Firestore Database → Create database** (production mode, any region).
3. **Firestore → Rules** → paste the contents of `firestore.rules` → **Publish**.
4. **Project settings (gear) → Your apps → Web (</>)** → register an app → copy the `firebaseConfig` values.
5. Paste them into `config.js`.

## 2. Deploy to GitHub + Vercel
```bash
git init && git add . && git commit -m "Guess the Numbers"
git branch -M main
git remote add origin https://github.com/<you>/guess-the-numbers.git
git push -u origin main
```
Then at https://vercel.com/new import the repo. Framework Preset: **Other**. No build command, no output directory. Click **Deploy**.

(The Firebase web config is not a secret, so committing `config.js` is fine.)

## How to play
Host picks level + rounds → Create game → shares the code. Friend opens the site → Join.
Arrange numbers (20s) → Rock-Paper-Scissors → alternate guesses (15s each). 🟢 right number & spot, 🟡 right number wrong spot. Tie → tie-breaker round.

Levels: Easy 4 · Medium 6 · Hard 8 · Pro 9 (digits 0–9, no repeats).

## Notes
- Refreshing mid-round loses your hidden numbers; start a new game.
- Rules are open for the `g` collection only. Old rooms can be deleted from the Firebase console (or add a TTL policy on a field).
