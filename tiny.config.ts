import { defineTinyConfig } from 'easy-tinypng-cli/utils'

export default defineTinyConfig({
  configs: [
    {
      targetDir: './assets/images',
    },
    {
      targetDir: './public',
    },
  ],
  APIKey: '换成自己的 API Key [https://tinypng.com/developers]',
})
