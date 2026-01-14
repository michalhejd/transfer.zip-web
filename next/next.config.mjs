import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // This helps Next.js 15 handle Tailwind 4 without PostCSS configs
  experimental: {
    optimizePackageImports: ['lucide-react'], 
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nbg1.your-objectstorage.com",
        pathname: "/**"
      }
    ]
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "frontmatter" }],
    ],
  }
})

export default withMDX(nextConfig)