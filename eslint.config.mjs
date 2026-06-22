import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import eslintConfigPrettier from "eslint-config-prettier";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tailwind from "eslint-plugin-tailwindcss";

const __dirname = dirname(fileURLToPath(import.meta.url));

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      ".cache/**",
      "public/**",
      "**/*.esm.js",
    ],
  },
  ...nextCoreWebVitals,
  ...tailwind.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    settings: {
      tailwindcss: {
        callees: ["cn"],
        // Absolute path required: tailwind-api-utils resolves the tailwindcss
        // package relative to this config file's directory.
        config: resolve(__dirname, "tailwind.config.js"),
      },
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];

export default eslintConfig;
