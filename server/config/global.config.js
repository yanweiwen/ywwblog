const isPro = process.env.NODE_ENV === 'production'

module.exports = {
    mongodb: {
        host: '127.0.0.1',
        database: 'essay',
        port: 27017
    },
    app: {
        domain: isPro ? 'http://www.yanweiwen.top' : 'http://127.0.0.1:3025',
        siteName: 'yanweiwen',
    },
    admin: {
        user: 'admin',
        pass: 'yww5212.',
        email: 'yww5212@gmail.com',
    },
    jwt: {
        expiresIn: 365 * 86400,
        secret: 'essay',
    },
    seo: {
        title: 'Essay-简约而不简单的博客系统',
        keywords: '前端技术分享,JavaScript,nodeJS,vue',
        description: 'Essay，基于JavaScript构建的前后端同构博客系统，遵循简约而不简单的设计哲学，让每个人都可以方便的记录自己的生活，记录自己的人生',
    },
    email: {
        host: 'yanweiwen.top',
        user: '327365736@qq.com',
        pass: '',
    },
    github: {
        id: '',
        secret: '',
        scope: 'user',
    },
    pm2: {
        host: '139.199.174.108',
        repo: 'https://github.com/yanweiwen/ywwblog.git',
        path: '/opt/ywwblog',
    },
}
