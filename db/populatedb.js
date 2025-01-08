require("dotenv").config();

const { Client } = require("pg");

const SQL = `INSERT INTO "user" (first_name, last_name, username, password, confirm_password, bio, profile_picture, background_picture, role, online_presence) VALUES ('preslaw', 'cvetanow', 'preslaw', '$2a$10$IKiXFsDBDrPVAYZPYebzfuhBXYuekA7zCDnl9b3MroPKAmg4A1pA6', '$2a$10$IKiXFsDBDrPVAYZPYebzfuhBXYuekA7zCDnl9b3MroPKAmg4A1pA6',
'', '', '', 'USER', 'OFFLINE');


INSERT INTO "user" (first_name, last_name, username, password, confirm_password, bio, profile_picture, background_picture, role, online_presence) VALUES ('preslaw1', 'cvetanow1', 'preslaw1', '$2a$10$IKiXFsDBDrPVAYZPYebzfuhBXYuekA7zCDnl9b3MroPKAmg4A1pA6', '$2a$10$IKiXFsDBDrPVAYZPYebzfuhBXYuekA7zCDnl9b3MroPKAmg4A1pA6',
'', '', '', 'USER', 'OFFLINE');`;

async function main() {
  try {
    console.log("seeding...");
    const client = new Client({
      connectionString: process.env.TEST_DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch (err) {
    console.error("An error occurred when seeing", err);
    throw err;
  }
}

main();
