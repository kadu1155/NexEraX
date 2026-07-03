import { app } from "./app.js";
import { config } from "./config.js";
import { connectDb } from "./db.js";
import { initScheduler } from "./utils/scheduler.js";

await connectDb();
initScheduler();

app.listen(config.port, () => {
  console.log(`NexEra API running on port ${config.port}`);
});
