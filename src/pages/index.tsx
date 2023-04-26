import { useCallback, useState } from 'react'

import { Switch } from '@/components'
import { isClientSide } from '@/utils/is'

import type { NextPageWithLayout } from '@/pages/_app'

const PageHometown: NextPageWithLayout = () => {
  const [enabled, setEnabled] = useState(false)

  const handleChange = useCallback(async (checked: boolean) => {
    const isClient = isClientSide()
    if (!isClient) {
      return
    }

    console.log(1)
  }, [])

  const handleRegisterCommand = useCallback(async () => {

  }, [])

  return (
    <main>
      <div className="2">
        <Switch onChange={handleChange}>
        </Switch>
        <button onClick={handleRegisterCommand}>命令</button>
      </div>
    </main>
  )
}

// 指定layout组件
// PageHometown.getLayout = getLayout
PageHometown.meta = {
  title: '首页',
}

export default PageHometown
