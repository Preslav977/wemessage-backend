const { defineConfig } = require("vitest/config");

export default defineConfig({
  test: {
    include: ["tests/**/*.test.js", "!/tests"],
    threads: false,
    setupFiles: ["/tests/helpers/setup.js"],
  },
  resolve: {
    alias: {},
  },
});
