import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      "quotes": [0],
      "avoidEscape": 0,
      "allowTemplateLiterals": 0,
      "no-useless-escape": 0,
    },
  },
];

export default eslintConfig;
