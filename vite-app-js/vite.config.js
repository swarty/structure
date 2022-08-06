import { resolve } from 'path';
import { defineConfig } from 'vite';
import htmlPlugin from 'vite-plugin-html-config'; // readme: https://github.com/ahwgs/vite-plugin-html-config
import handlebarsPlugin from 'vite-plugin-handlebars';
import eslintPlugin from 'vite-plugin-eslint';

const SRC = 'src';
const MODE_MAP = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

// https://vitejs.dev/config/
export default defineConfig(({ _, mode }) => {
  const isProduction = MODE_MAP.PRODUCTION === mode;
  return {
    server: {
      open: true,
    },
    resolve:{
      alias: {
        '@' : resolve(__dirname, `./${SRC}/`),
      },
    },
    base: isProduction
      ? '//swarty.github.io/some-folder/'
      : '',
    build: {
      rollupOptions: { 
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

            if (/\.(woff2?|eof|ttf|eot)$/.test(name ?? '')) {
              return 'assets/fonts/[name]-[hash][extname]';   
            }
   
            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      target: 'es6',
      assetsDir: 'src',
      cssTarget: 'chrome80',
      minify: 'esbuild',
      sourcemap: !isProduction,
      emptyOutDir: isProduction,
      manifest: true,
      outDir: './dist',
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
