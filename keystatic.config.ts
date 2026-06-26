import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: '个人主页管理后台',
    },
  },
  collections: {
    blogs: collection({
      label: '📝 博客文章',
      slugField: 'title',
      path: 'src/content/blogs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: '标题',
            description: '文章标题（同时作为 URL 的一部分）',
            validation: { isRequired: true },
          },
        }),
        description: fields.text({
          label: '摘要',
          multiline: true,
          validation: { isRequired: true },
        }),
        pubDate: fields.date({
          label: '发布日期',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: '作者',
        }),
        tags: fields.array(
          fields.text({ label: '标签值' }),
          {
            label: '标签',
            itemLabel: (props) => props.fields.value.value || '未命名标签',
          }
        ),
        draft: fields.checkbox({
          label: '存为草稿（草稿不在博客列表显示）',
          defaultValue: false,
        }),
        image: fields.object(
          {
            url: fields.image({
              label: '封面图片文件',
              directory: 'src/assets/images',
              publicPath: '../../assets/images/',
            }),
            alt: fields.text({ label: '图片描述（alt 文本）' }),
          },
          {
            label: '封面图片（可选）',
          }
        ),
        content: fields.document({
          label: '文章内容',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images',
            publicPath: '../../assets/images/',
          },
        }),
      },
    }),

    services: collection({
      label: '🛠️ 服务中心',
      slugField: 'name',
      path: 'src/content/services/*',
      schema: {
        name: fields.slug({
          name: {
            label: '服务名称',
            validation: { isRequired: true },
          },
        }),
        description: fields.text({
          label: '服务描述',
          multiline: true,
          validation: { isRequired: true },
        }),
        url: fields.url({
          label: '访问地址',
          validation: { isRequired: true },
        }),
        icon: fields.text({
          label: '图标名称',
          defaultValue: 'globe',
          description: '可填：globe / server / code / tool / music / video / message / star',
        }),
        category: fields.select({
          label: '分类',
          options: [
            { label: '⚡ 生产力', value: 'productivity' },
            { label: '🛠️ 工具', value: 'tools' },
            { label: '💻 开发', value: 'dev' },
            { label: '🎬 媒体', value: 'media' },
            { label: '💬 社交', value: 'social' },
            { label: '📦 其他', value: 'other' },
          ],
          defaultValue: 'other',
        }),
        status: fields.select({
          label: '当前状态',
          options: [
            { label: '✅ 运行中', value: 'active' },
            { label: '🔧 维护中', value: 'maintenance' },
            { label: '🔴 已下线', value: 'offline' },
          ],
          defaultValue: 'active',
        }),
        featured: fields.checkbox({
          label: '置顶精选（显示在精选服务区块）',
          defaultValue: false,
        }),
        tags: fields.array(
          fields.text({ label: '标签值' }),
          {
            label: '标签',
            itemLabel: (props) => props.fields.value.value || '未命名标签',
          }
        ),
        order: fields.integer({
          label: '排序权重（数字越小越靠前，默认 99）',
          defaultValue: 99,
          validation: { isRequired: false, min: 0, max: 9999 },
        }),
      },
    }),
  },
});
