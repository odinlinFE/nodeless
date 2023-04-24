import Error from 'next/error'

import type { NextPageWithLayout } from '@/pages/_app'

/**
 * @uri https://nextjs.org/docs/advanced-features/custom-error-page
 */
const CustomErrorBy404: NextPageWithLayout = () => {
  return (
    <>
      <Error statusCode={404} />
    </>
  )
}

// 指定layout组件
// CustomErrorBy404.getLayout = getLayout
CustomErrorBy404.meta = {
  title: '404',
}

export default CustomErrorBy404
