import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="zh-CN">

        <Head />

        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>

      </Html>
    )
  }
}
