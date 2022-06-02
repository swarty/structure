import { resolve } from 'path';
import { defineConfig } from 'vite';
import htmlPlugin from 'vite-plugin-html-config'; // readme: https://github.com/ahwgs/vite-plugin-html-config
import handlebarsPlugin from 'vite-plugin-handlebars';
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
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          about: resolve(root, 'about.html'),
        },
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({name}) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                return 'assets/images/[name]-[hash][extname]';
            }
            
            if (/\.css$/.test(name ?? '')) {
                return 'assets/css/[name]-[hash][extname]';   
            }
   
            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      target: 'es6',
      cssTarget: 'chrome80',
      minify: 'terser',
      sourcemap: MODE_MAP.PRODUCTION === mode,
    },
    plugins: [
      htmlPlugin({
        headScripts: [], // some scripts to header,
        links: [], // some css links
        metas: [], // meta tags
        scripts: [] // body scripts
      }),
      handlebarsPlugin({
        partialDirectory: resolve(__dirname, `./${SRC}/template/`),
      }),
      eslintPlugin(),
    ],
  };
});
