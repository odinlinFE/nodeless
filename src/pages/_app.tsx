import { Fragment } from 'react'

import { MetaWidget } from '@/components/open-graph/meta-widget'
// 如果您不打算在您的项目中编写任何自定义 CSS，最快的方法是直接在 pages/_app.js 中导入 Tailwind。
// import 'tailwindcss/tailwind.css'
import '@/assets/styles/tailwind/index.scss'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// 页面page组件增加getLayout静态方法
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // 自定义layout布局
  getLayout?: (page: ReactElement) => ReactNode
  // 自定义meta相关变量
  meta?: Record<string, string>
}

// 扩展AppProps类型
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

/**
 * @uri [Per-Page Layouts](https://nextjs.org/docs/basic-features/layouts)
 * @usage 在page中挂载不同layout的方法:
 * `const Page: NextPageWithLayout = () => (`custom ReactElement of page`);
 *  Page.getLayout = 包裹着layout布局的getLayout方法;
 *  export default Page;`
 */
export default function RootApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)
  const { title, description } = Component.meta ?? {}

  return (
    <Fragment>
      {/* 自定义head，存在变量，在export模式下会直接编译到ssg中 */}
      <MetaWidget pathname={router.pathname} title={title} description={description} />

      {/* 携带layout的page页面 */}
      {getLayout(<Component {...pageProps} />)}
    </Fragment>
  )
}
