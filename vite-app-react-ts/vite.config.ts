import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import {
  resolve,
} from 'path';

const SRC = 'src';
const DIST = 'dist';
const MODE_MAP = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

// https://vitejs.dev/config/
export default defineConfig(({
  mode,
}) => {
  const isProduction = MODE_MAP.PRODUCTION === mode;
  return {
    resolve:{
      alias: {
        '@' : resolve(`./${SRC}/`),
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
          assetFileNames: ({
            name,
          }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/images/[name]-[hash][extname]';
            }
            
            if (/\.css$/.test(name ?? '')) {
              return 'assets/styles/[name]-[hash][extname]';   
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
      cssTarget: 'chrome90',
      minify: 'esbuild',
      sourcemap: !isProduction,
      emptyOutDir: isProduction,
      manifest: true,
      outDir: `./${DIST}`,
    },
    plugins: [
      react(),
      eslintPlugin(),
    ],
  };
});
