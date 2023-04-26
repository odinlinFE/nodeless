// - The server (nodejs), where Tauri cannot be reached, because the current context is inside of nodejs.
// - The client (webview), where it is possible to interact with the Tauri rust backend.
export function isClientSide() {
  return typeof window !== 'undefined'
}
