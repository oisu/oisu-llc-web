import { defineConfig } from 'astro/config';

// 静的な HTML を出す。public/ の中（/apps/gyoseishoshi/ など）はそのまま配る
export default defineConfig({
  site: 'https://oisu.jp',
});
