import { useCallback, useState } from 'react'
import { Switch as HeadlessSwitch } from '@headlessui/react'
import classNames from 'classnames'

import type { FC, PropsWithChildren } from 'react'

interface IProps {
  onChange?: (checked: boolean) => void
}
const Switch: FC<PropsWithChildren<IProps>> = (props) => {
  const { onChange } = props

  const [enabled, setEnabled] = useState(false)

  /**
   * @title onChange的包装函数
   */
  const handleChangeWarp = useCallback((checked: boolean) => {
    setEnabled(checked)
    onChange?.(checked)
  }, [onChange])

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={handleChangeWarp}
      className={classNames(
        'relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
        {
          'bg-teal-900': enabled,
          'bg-teal-700': !enabled,
        },
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          'pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
          {
            'translate-x-9': enabled,
            'translate-x-0': !enabled,
          },
        )}
      />
    </HeadlessSwitch>
  )
}

export default Switch
