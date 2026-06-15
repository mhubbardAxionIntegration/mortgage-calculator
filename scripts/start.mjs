import { spawn } from "node:child_process";

/** Hostinger (and most PaaS) inject PORT; default 3000 for local `npm start`. */
const port = process.env.PORT ?? "3000";

const child = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "start", "-H", "0.0.0.0", "-p", port],
  { stdio: "inherit", shell: false },
);

child.on("exit", (code) => process.exit(code ?? 1));
