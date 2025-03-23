/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '/genedai.me',
  assetPrefix: '/genedai.me/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig; 