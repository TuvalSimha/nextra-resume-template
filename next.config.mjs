import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

export default withNextra({
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
})