import { invoke } from '@tauri-apps/api/tauri'

import type { InvokeArgs } from '@tauri-apps/api/tauri'

/**
 * @shell 运行自定义的 tauri 命令
 * @param args 自定义命令名.
 * @param options 可接受的参数.
 * @returns {Promise<Child>}
 * @example `invoke('greet', { name: 'World' })`
 * @example `invoke('dir_api', { path: '$HOME' })`
 */
export function invokeHandler<T>(cmd: InvokeCmd, args?: InvokeArgs): Promise<T> {
  return invoke<T>(cmd, args)
}
