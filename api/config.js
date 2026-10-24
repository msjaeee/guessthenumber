// Serverless function: serves the Firebase web config from Vercel Environment Variables,
// so nothing sensitive-looking is committed to GitHub.
module.exports = (req, res) => {
  const e = process.env;
  const cfg = {
    apiKey: e.FIREBASE_API_KEY,
    authDomain: e.FIREBASE_AUTH_DOMAIN,
    projectId: e.FIREBASE_PROJECT_ID,
    storageBucket: e.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: e.FIREBASE_MESSAGING_SENDER_ID,
    appId: e.FIREBASE_APP_ID
  };
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send('window.FIREBASE_CONFIG=' + JSON.stringify(cfg) + ';');
};
