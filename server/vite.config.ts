// Change the import to use your runtime specific build
import build from '@hono/vite-build/node'
import devServer from '@hono/vite-dev-server'

import { defineConfig } from 'vite'

const ENTRY = 'api/index.ts'

export default defineConfig(() => {
  return {
    plugins: [
      build({
        entry: ENTRY,
      }),
      devServer({
        entry: ENTRY,
      }),
    ],
  }
})
