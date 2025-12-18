import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Sequelize, DataTypes } from "sequelize";

// Recreate __filename and __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

const env = process.env.NODE_ENV || "development";

// If you're using config.json (Sequelize CLI default)
import configJson from "../config/config.json" assert { type: "json" };
const config = configJson[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Load all model files dynamically (.js, .mjs, .cjs) except tests and this file
const modelFiles = fs.readdirSync(__dirname).filter((file) => {
  const ext = path.extname(file);
  return (
    !file.startsWith(".") &&
    file !== basename &&
    [".js", ".mjs", ".cjs"].includes(ext) &&
    !file.includes(".test.")
  );
});

// Dynamically import each model and register it
for (const file of modelFiles) {
  const moduleUrl = pathToFileURL(path.join(__dirname, file)).href;
  const mod = await import(moduleUrl);

  // Support both ESM default export and CJS module.exports
  const defineModel = mod.default ?? mod;

  // Each model file should export a function: (sequelize, DataTypes) => Model
  const model = defineModel(sequelize, DataTypes);
  db[model.name] = model;
}

// Run associations
Object.keys(db).forEach((modelName) => {
  if (typeof db[modelName].associate === "function") {
    db[modelName].associate(db);
  }
});

// Expose sequelize & Sequelize
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
