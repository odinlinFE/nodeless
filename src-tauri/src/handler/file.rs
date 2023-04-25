use serde::{Deserialize, Serialize};
use serde_json;
use std::fs;
use std::io;
use std::path::Path;
use tauri;

use crate::utils::fs_meta;

/**
 * 使用 #[tauri::command] 宏将其标记为 invoke_handler
 * tauri::Result 是一个 Result 类型的别名，它的 Err 类型是 tauri::Error
 *
 */
#[tauri::command]
pub fn dir_api(dir: String) -> tauri::Result<String> {
  let mut result = String::new();

  let entries = fs::read_dir(Path::new(&dir))?;

  for entry in entries {
    match read_dir_entry(entry) {
      Some(dir_row) => {
        result.push_str(&format!("{}\n", dir_row));
      }
      None => {}
    }
  }

  Ok(result)
}

/**
 * 文件目录信息的结构体
 * 增加了 序列化/反序列化/Debug 的 trait
 */
#[derive(Serialize, Deserialize, Debug)]
struct DirColumns {
  permissions: String,
  file_type: String,
  owner: String,
  size: String,
  modified_time: String,
  filename: String,
}

/**
 * 业务逻辑: 根据路径读取目录下的文件及文件夹信息
 */
fn read_dir_entry(entry: io::Result<fs::DirEntry>) -> Option<String> {
  let mut dir_row = DirColumns {
    permissions: String::new(),
    file_type: String::new(),
    owner: String::new(),
    size: String::new(),
    modified_time: String::new(),
    filename: String::new(),
  };

  let entry = match entry {
    Ok(entry) => entry,
    Err(_) => return None,
  };
  let metadata = match entry.metadata() {
    Ok(metadata) => metadata,
    Err(_) => return None,
  };

  // 表示文件名的字符串
  dir_row.filename = match entry.file_name().into_string() {
    Ok(name) => name,
    Err(_) => return None,
  };

  let meta = fs_meta::MetadataWrap::new(metadata);
  // 表示文件权限的字符串
  dir_row.permissions = meta.get_permissions();

  // 表示文件类型的字符串
  dir_row.file_type = meta.get_file_type();

  // 表示文件所有者的字符串
  dir_row.owner = meta.get_owner();

  // 表示文件大小的字符串
  dir_row.size = meta.get_size();

  // 表示文件修改时间的字符串
  dir_row.modified_time = meta.get_modified_time();

  let dir_row_str = match serde_json::to_string(&dir_row) {
    Ok(str) => str,
    Err(_) => return None,
  };

  Some(dir_row_str)
}
