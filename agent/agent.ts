import { createGroq } from "@ai-sdk/groq";
import { defineAgent } from "eve";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export default defineAgent({
  model: groq("openai/gpt-oss-20b"),
});
