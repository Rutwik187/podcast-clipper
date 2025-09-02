import { inngest } from "~/ingest/client";

export const processVideo = inngest.createFunction(
  { id: "process-video" },
  { event: "process-video-events" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.s3_key}!` };
  },
);
