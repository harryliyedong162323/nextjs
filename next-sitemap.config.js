/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true, // 是否同时生成 robots.txt 文件
    // 其他配置选项...
};
