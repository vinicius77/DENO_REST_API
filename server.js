import app from "./app.js";
import { PORT, HOST } from "./config/config.js";

/** The server has its own separated module, responsible just to start the server  */
console.log(`Listening on ${HOST}:${PORT}`);
await app.listen(`${HOST}:${PORT}`);
