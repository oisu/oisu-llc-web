import { defineConfig } from 'astro/config';

// 静的な HTML を出す。public/ の中（/apps/gyoseishoshi/ など）はそのまま配る
export default defineConfig({
  site: 'https://oisu.jp',
  // おいすラボのページは /projects/oisulab/ に移した。前の URL からは移動先へ案内する
  redirects: {
    '/oisulab': '/projects/oisulab/',
  },
});
