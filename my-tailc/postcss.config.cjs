module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // cssnano 按需加到插件列表末尾
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
