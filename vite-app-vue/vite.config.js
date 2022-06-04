import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

const SRC = 'src';
const DIST = 'dist';
const root = resolve(__dirname, SRC);
const outDir = resolve(__dirname, DIST);
const MODE_MAP = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

// https://vitejs.dev/config/
export default defineConfig(({ _, mode }) => {
  return {
    root,
    server: {
      open: true,
    },
    resolve:{
      alias: {
        '@' : resolve(__dirname, `./${SRC}/`),
        '@fonts' : resolve(__dirname, `./${SRC}/fonts/`),
        '@image' : resolve(__dirname, `./${SRC}/image/`),
        '@script' : resolve(__dirname, `./${SRC}/script/`),
        '@style' : resolve(__dirname, `./${SRC}/style/`),
      },
    },
    build: {
      outDir,
      emptyOutDir: true,
      target: 'es6',
      cssTarget: 'chrome80',
      minify: 'terser',
      sourcemap: MODE_MAP.PRODUCTION === mode,
    },
    plugins: [
      vue(),
      eslintPlugin(),
    ],
  };
});