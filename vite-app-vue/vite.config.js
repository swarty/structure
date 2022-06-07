import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

const SRC = 'src';
const MODE_MAP = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

// https://vitejs.dev/config/
export default defineConfig(({ _, mode }) => {
  return {
    server: {
      open: true,
    },
    resolve:{
      alias: {
        '@' : resolve(__dirname, `./${SRC}/`),
      },
    },
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