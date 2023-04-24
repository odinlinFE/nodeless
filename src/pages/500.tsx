import Error from 'next/error'

import type { NextPageWithLayout } from '@/pages/_app'

/**
 * @uri https://nextjs.org/docs/advanced-features/custom-error-page
 */
const CustomErrorBy500: NextPageWithLayout = () => {
  return (
    <>
      <Error statusCode={500} />
    </>
  )
}

// 指定layout组件
// CustomErrorBy500.getLayout = getLayout
CustomErrorBy500.meta = {
  title: '500',
}

export default CustomErrorBy500
