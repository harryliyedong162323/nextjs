/** @type {import('next').NextConfig} */
const path = require('path')



const nextConfig = {
  reactStrictMode: false,

  env:{
    LOCATION:'en-GB',
    DOMAIN:'https://wildmoor.workbyus.cn/',
    POSTGRES_URL:'postgres://default:1ctZazxLmN6U@ep-rough-shape-04457397-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb',
  },


  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https', // 协议，例如 https 或 http
        hostname: 'bpic.51yuansu.com', // 主机名
        port: '', // 端口号，如果没有则留空字符串
        pathname: '/pic3/cover/01/20/78/59058720af449_610.jpg', // 路径名
      },
      {
        protocol: 'https', // 协议，例如 https 或 http
        hostname: 'images.ctfassets.net', // 主机名
        // port: '', // 端口号，如果没有则留空字符串
        // pathname: '', // 路径名
      },
      {
        protocol: 'https', // 协议，例如 https 或 http
        hostname: 'yumen-ali.oss-cn-beijing.aliyuncs.com', // 主机名
        port: '', // 端口号，如果没有则留空字符串
        // pathname: '', // 路径名
      },
    ],
  },
};

module.exports = nextConfig;
