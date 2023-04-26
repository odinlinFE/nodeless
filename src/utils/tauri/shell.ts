import { Command } from '@tauri-apps/api/shell'

import type { Child, ChildProcess, SpawnOptions } from '@tauri-apps/api/shell'

/**
 * @shell `echo 'message'`
 * @param args Program arguments.
 * @param options Spawn options.
 * @returns {Promise<ChildProcess>}
 * @example `const [err, output] = await to(echoMessageShell('message'))`
 */
export function echoMessageShell(message: ShellArgs, options?: SpawnOptions): Promise<ChildProcess> {
  return new Command('echo', message, options).execute()
}

/**
 * @shell `git log -1`
 * @param args Program arguments.
 * @param options Spawn options.
 * @returns {Promise<ChildProcess>}
 * @example `const [err, output] = await to(gitLogShell(['log', '-q']))`
 */
export function gitLogShell(message: ShellArgs, options?: SpawnOptions): Promise<ChildProcess> {
  return new Command('git-log', message, options).execute()
}

/**
 * @shell `fnm/node/npm --version`
 * @param cli 命令名称.
 * @param options Spawn options.
 * @returns {Promise<ChildProcess>}
 * @example `const [err, output] = await to(getCliVersionShell('node'))`
 */
export function getCliVersionShell(cli: CliVersion, options?: SpawnOptions): Promise<ChildProcess> {
  return new Command(`${cli}-version`, undefined, options).execute()
}

/**
 * @shell `npm run dev`
 * @param args Program arguments.
 * @param options Spawn options.
 * @returns {Promise<Child>}
 * @example `const [err, output] = await to(npmRunShell('dev'))`
 */
export function npmRunShell(message: ShellArgs, options?: SpawnOptions): Promise<Child> {
  return new Command('npm-run', message, options).spawn()
}
