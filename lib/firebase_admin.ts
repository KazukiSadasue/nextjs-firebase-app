import * as admin from 'firebase-admin'

if (admin.apps.length == 0) {
  // 多分コメントアウトしている情報は不要なので削除(vercelの環境変数に4KB超えを設定出来ないため)
  const privateKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY, 'base64').toString().replace(/\\n/g, '\n');
  const credential = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey,
    // type: process.env.FIREBASE_ACCOUNT_TYPE,
    // private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    // client_id: process.env.FIREBASE_CLIENT_ID,
    // auth_uri: process.env.FIREBASE_AUTH_URI,
    // token_uri: process.env.FIREBASE_TOKEN_URI,
    // auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    // client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  }

  admin.initializeApp({
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    credential: admin.credential.cert(credential),
  })
}