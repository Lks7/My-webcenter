# 服务中心使用指南

## 如何添加新服务

在 `src/content/services/` 目录下创建一个 `.md` 文件，文件名即为服务 ID（建议使用英文小写+连字符）。

### 文件格式

```markdown
---
name: "服务名称"
description: "服务的简短描述，会显示在卡片上（建议不超过60字）"
url: "https://your-service-url.com"
icon: "globe"           # 见下方图标列表
category: "tools"       # 见下方分类列表
status: "active"        # active | maintenance | offline
featured: false         # true = 显示在首页和精选区
tags: ["标签1", "标签2"] # 可选，最多显示3个
order: 10               # 排序权重，数字越小越靠前
---
```

### 可用图标（icon 字段）

| 值 | 图标 | 适合用于 |
|---|---|---|
| `globe` | 🌐 地球/网站 | 通用 |
| `database` | 🗄️ 数据库 | 数据存储服务 |
| `code` | 💻 代码 | 开发工具 |
| `book` | 📖 书本 | 笔记/知识库 |
| `tool` | 🔧 工具 | 通用工具 |
| `fire` | 🔥 火焰 | 独特/热门服务 |
| `monitor` | 🖥️ 监控 | 监控/仪表板 |
| `cloud` | ☁️ 云 | 云服务 |
| `message` | 💬 消息 | 通讯/聊天 |
| `link` | 🔗 链接 | 书签/导航 |

### 分类（category 字段）

| 值 | 中文标签 | 说明 |
|---|---|---|
| `productivity` | ⚡ 生产力 | 记账、笔记、任务管理 |
| `tools` | 🛠️ 工具 | 实用小工具 |
| `dev` | 💻 开发 | 开发相关服务 |
| `media` | 🎬 媒体 | 图片、视频、音乐 |
| `social` | 💬 社交 | 社交/展示相关 |
| `other` | 📦 其他 | 不属于上述分类 |

### 示例

```markdown
---
name: "Memory"
description: "个人记账与知识管理系统，支持分类记录、标签筛选"
url: "https://memory.example.com"
icon: "database"
category: "productivity"
status: "active"
featured: true
tags: ["记账", "知识库"]
order: 1
---
```

## 注意事项

- 修改服务文件后，开发服务器会自动热更新
- `status: "offline"` 的服务卡片会变灰并不可点击
- `featured: true` 的服务会同时出现在首页和服务中心精选区
- `url` 必须是完整 URL（含 `https://`）
