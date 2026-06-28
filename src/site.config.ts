import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type Services = {
    title?: string;
    description?: string;
    showStatusIndicator?: boolean;
    password?: string;  // 留空则无需密码，设置后首页服务区需要密码才可见
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    services?: Services;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',  // TODO: 替换为你的域名
    title: 'breeze 的个人空间',
    description: 'breeze 的个人网站 — 博客、项目与创意的聚合地',
    image: {
        src: '/space-ahead-preview.jpeg',
        alt: '个人主页预览'
    },
    headerNavLinks: [
        {
            text: '首页',
            href: withBase('/')
        },
        {
            text: '博客',
            href: withBase('/blog')
        },
        {
            text: '服务中心',
            href: withBase('/services')
        },
        {
            text: '标签',
            href: withBase('/tags')
        },
        {
            text: '关于',
            href: withBase('/about')
        },
        {
            text: '联系',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: '关于',
            href: withBase('/about')
        },
        {
            text: '服务中心',
            href: withBase('/services')
        },
        {
            text: '联系',
            href: withBase('/contact')
        },
        {
            text: 'RSS',
            href: withBase('/rss.xml')
        },
        {
            text: 'Sitemap',
            href: withBase('/sitemap-index.xml')
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/'  // TODO: 替换为你的 GitHub
        }
    ],
    hero: {
        eyebrowText: 'breeze 的空间',
        title: '你好，我是 breeze 👋',
        text: "欢迎来到我的个人空间，这里汇聚了我的博客文章、项目作品和创意探索。",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: '探索中'
        },
        actions: [
            {
                text: '阅读博客',
                href: withBase('/blog')
            },
            {
                text: '查看项目',
                href: withBase('/project')
            }
        ]
    },
    about: {
        title: '关于我',
        text: '开发者，专注于 Web 技术与创意实现。',
    },
    services: {
        title: '服务中心',
        description: '我自部署的工具与服务集合，点击卡片即可跳转访问。',
        showStatusIndicator: true,
        password: '0481',  // TODO: 修改为你的密码，留空则不需要密码
    },
    contactInfo: {
        title: '联系我',
        text: "有任何问题或想法，欢迎通过以下方式联系我：",
        email: {
            text: "发送邮件，我会尽快回复。",
            href: "mailto:example@example.com",  // TODO: 替换为你的邮箱
            email: "example@example.com"
        },
        socialProfiles: [
            {
                text: "GitHub",
                href: "https://github.com/"  // TODO: 替换为你的 GitHub
            }
        ]
    },
    subscribe: {
        title: '订阅更新',
        text: '获取最新文章和服务动态。',
        formUrl: '#'
    },
    blog: {
        description: "记录技术探索、项目心得与生活感悟。"
    },
    postsPerPage: 6,
    recentPostLimit: 3
};

export default siteConfig;
