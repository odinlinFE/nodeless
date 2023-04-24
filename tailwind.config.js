/**
 * @type {import('tailwindcss').Config}
 * @see https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 */
module.exports = {
  // 指定所有的 pages 和 components 文件，可在生产构建中对未使用的样式进行tree shaking。
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
