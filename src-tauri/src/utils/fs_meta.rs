use chrono::{DateTime, Local};
use std::fs;
use std::os::unix::prelude::{MetadataExt, PermissionsExt};

/**
 * 对fs::Metadata的包装
 */
pub struct MetadataWrap(fs::Metadata);

impl MetadataWrap {
  /**
   * 创建一个新的MetadataWrap
   */
  pub fn new(metadata: fs::Metadata) -> Self {
    return Self(metadata);
  }

  /**
   * 获取文件类型
   */
  pub fn get_file_type(&self) -> String {
    let metadata = &self.0;

    let file_type = if metadata.is_file() {
      "File".to_string()
    } else if metadata.is_dir() {
      "Directory".to_string()
    } else if metadata.is_symlink() {
      "Symlink".to_string()
    } else {
      "Unknown".to_string()
    };

    return file_type;
  }

  /**
   * 获取文件权限
   * `-rw-r--r--` => 文件类型和访问权限，由十个字符组成。第一个字符表示文件类型（- 表示普通文件，d 表示目录，l 表示符号链接等）。接下来的九个字符分为三组，每组三个字符，分别代表所有者、所有组和其他用户对该文件的读、写、执行权限。
   */
  pub fn get_permissions(&self) -> String {
    let metadata = &self.0;

    let permissions = format!("{:02o}", metadata.permissions().mode() & 0o7777);

    return permissions;
  }

  /**
   * 获取文件所有者
   */
  pub fn get_owner(&self) -> String {
    let metadata = &self.0;

    let owner = match metadata.uid().to_string() {
      uid if uid == "0" => "root".to_string(),
      uid => uid,
    };

    return owner;
  }

  /**
   * 获取文件大小
   */
  pub fn get_size(&self) -> String {
    let metadata = &self.0;
    let size = metadata.len();

    let size = if size < 1024 {
      format!("{} B", size)
    } else if size < 1024 * 1024 {
      format!("{:.1} KB", size as f64 / 1024.0)
    } else if size < 1024 * 1024 * 1024 {
      format!("{:.1} MB", size as f64 / 1024.0 / 1024.0)
    } else {
      format!("{:.1} GB", size as f64 / 1024.0 / 1024.0 / 1024.0)
    };

    return size;
  }

  /**
   * 获取文件修改时间
   */
  pub fn get_modified_time(&self) -> String {
    let metadata = &self.0;

    match metadata.modified() {
      Ok(time) => {
        return DateTime::<Local>::from(time)
          .format("%Y-%m-%d %H:%M:%S")
          .to_string();
      }
      Err(_) => return "".to_string(),
    };
  }
}
