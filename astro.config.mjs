import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  publicDir: 'public',
  adapter: cloudflare(),
});


// export default defineConfig({
//   integrations: [mdx(), sitemap()],
//   publicDir: 'public',
//   adapter: cloudflare({
//     platformProxy: {
//       enabled: true,
//     },
//   }),
// });