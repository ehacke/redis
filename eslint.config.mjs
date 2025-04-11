import sortKeysFix from 'eslint-plugin-sort-keys-fix';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';
import stdConfig from '@ehacke/eslint-config';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default tseslint.config([
  {
    plugins: {
      'sort-keys-fix': sortKeysFix,
    },

    rules: {
      'no-underscore-dangle': 'off',
      'sort-keys-fix/sort-keys-fix': 'error',
    },
  },
  {
    ignores: ['eslint.config.mjs'],
  },
  tseslint.configs.recommended,
  {
    plugins: {
      '@ehacke/eslint-config': stdConfig,
    },
  },
]);
