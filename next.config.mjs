/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '/genedai.me',
  assetPrefix: '/genedai.me/',
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig; 