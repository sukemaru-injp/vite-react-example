/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_FASTIFY_APP_API_PATH: string
  readonly VITE_KTOR_APP_API_PATH: string
  readonly VITE_APP_FIREBASE_APIKEY: string
  readonly VITE_APP_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_APP_FIREBASE_PROJECT_ID: string
  readonly VITE_APP_FIREBASE_STORAGE_BUCKET: string
  readonly VITE_APP_FIREBASE_SENDER_ID: string
  readonly VITE_APP_FIREBASE_APP_ID: string
  readonly VITE_APP_FIREBASE_MEASUREMENT_ID: string
  // その他の環境変数...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
