/**
 * @type {import('next').NextConfig}
 * @uri [内置 Sass 支持](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)
 * @uri [`output: 'export'`](https://nextjs.org/docs/advanced-features/static-html-export)
 */
const nextConfig = {
  /* 静态导出 - 自 Next.js13.3 以来，`next export`命令已被弃用，取而代之的是`output: 'export'`配置 */
  output: 'export',
  /* 输出路径 */
  distDir: 'dist',
  cleanDistDir: true,
  compress: true,
  /* 删除console.*输出，开启后dev也会清除，建议仅build阶段打开 */
  compiler: {
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  /* next/dist/build/webpack/loaders/next-style-loader */
  // sassOptions: {},
  /* 禁用图像优化API(only server) */
  images: {
    unoptimized: true,
  },
  /* 构建期间忽略 eslint */
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* 严格模式 */
  reactStrictMode: false,
  /* add custom webpack configuration to your application */
  webpack: (config, { isServer, defaultLoaders }) => {
    const onlyClient = !isServer

    if (onlyClient) {
      // ...
    }

    return config
  },
}

module.exports = nextConfig
