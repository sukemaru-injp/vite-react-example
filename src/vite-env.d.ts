/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_FASTIFY_APP_API_PATH: string
  // その他の環境変数...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
