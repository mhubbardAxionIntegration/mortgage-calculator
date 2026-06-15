import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

/** Hostinger substitutes $PORT in the start command: npm start -- -p $PORT */
function getPort() {
  if (process.env.PORT) return process.env.PORT;
  const p = process.argv.indexOf("-p");
  if (p !== -1 && process.argv[p + 1]) return process.argv[p + 1];
  const long = process.argv.indexOf("--port");
  if (long !== -1 && process.argv[long + 1]) return process.argv[long + 1];
  return "3000";
}

const port = getPort();

const child = spawn(
  process.execPath,
  [nextBin, "start", "-H", "0.0.0.0", "-p", port],
  { stdio: "inherit" },
);

child.on("exit", (code) => process.exit(code ?? 1));
