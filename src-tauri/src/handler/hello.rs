/**
 * @title 一个指令等于一个普通的 Rust 函数，只是还加上了 #[tauri::command] 宏来让其与您的 JavaScript 环境交互。
 * @desc pub 表示可以被外部访问
 */
#[tauri::command]
pub fn greet(name: &str) -> String {
  // println!("Hello, {}!", name);
  return format!("Hello, {}!", name);
}
