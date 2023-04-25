#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use app::handler::{file, hello};

/**
 * invoke_handler用于在 Rust 代码和 JavaScript 代码之间通信。
 */
fn main() {
  tauri::Builder::default()
    .invoke_handler(
      // 宏 => tauri::generate_handler! 用于生成 invoke_handler
      tauri::generate_handler![
        // 添加 Tauri 命令
        hello::greet,
        file::dir_api,
      ],
    )
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
