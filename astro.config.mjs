import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ddjproj.github.io',
  base: '/',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon({
      include: {
        'vscode-icons': ['*'],
        mdi: ['*'],
        fa: ['*'],
        carbon: ['*'],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeKatex],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: 'catppuccin-mocha',
        dark: 'catppuccin-latte',
      },
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['sharp'],
      },
    },
    plugins: [
      {
        name: 'preload-fonts',
        transformIndexHtml(html) {
          return {
            html,
            tags: [
              {
                tag: 'link',
                attrs: {
                  rel: 'preload',
                  href: '/fonts/JetBrainsMono-Regular.woff2',
                  as: 'font',
                  type: 'font/woff2',
                  crossorigin: 'anonymous',
                },
              },
              {
                tag: 'link',
                attrs: {
                  rel: 'preload',
                  href: '/fonts/JetBrainsMono-Bold.woff2',
                  as: 'font',
                  type: 'font/woff2',
                  crossorigin: 'anonymous',
                },
              },
            ],
          };
        },
      },
    ],
  },
});
