## Tauri

- [引导您使用 React 框架 Next.js 创建您的第一款 Tauri 应用程序](https://tauri.app/zh-cn/v1/guides/getting-started/setup/next-js)

- [Next.js Documentation](https://nextjs.org/docs)

- [next examples repo](https://github.com/vercel/next.js/tree/canary/examples)

<br />

### 创建前端

> 由于 Tauri 仅能接受静态文件，因此将使用 Next.js 的 静态网站生成(SSG) 模式。<br />
> Experimental app/ directory - 您必须选择“否”，因为它还不支持 `next export` 命令。

```bash
# 交互式cli创建
$ pnpm create next-app --use-pnpm --typescript

# Or use template
$ npx create-next-app --example with-tailwindcss-emotion with-tailwindcss-emotion-app
$ git clone https://github.com/vercel/next.js.git next-official-repo --depth=1
```

<br />

### 创建 Rust 项目

```bash
# https://tauri.app/zh-cn/v1/guides/faq#node-or-cargo
## 安装 Tauri CLI (可以通过 node包管理器 或 cargo 安装)
$ cargo install tauri-cli
$ cargo tauri init
$ cargo tauri dev
$ cargo tauri build
## 将 Tauri CLI 编译为原生 node.js 插件，并通过 npm 分发它
$ pnpm add -D @tauri-apps/cli

# 使用 @tauri-apps/api 库来调用 rust 命令
$ pnpm add @tauri-apps/api
```

