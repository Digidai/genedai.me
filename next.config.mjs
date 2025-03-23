/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // 为了静态导出
  },
  trailingSlash: true, // 为了更好的 SEO
}

export default nextConfig; 