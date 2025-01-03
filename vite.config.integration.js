const { defineConfig } = require("vitest/config");

export default defineConfig({
  test: {
    include: ["/tests/**/*.test.js"],
    threads: false,
  },
  resolve: {
    alias: {},
  },
});
