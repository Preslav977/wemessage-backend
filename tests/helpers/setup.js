const resetDB = require("../helpers/reset-db");
const { beforeEach } = require("vitest");

beforeEach(async () => {
  await resetDB();
});
