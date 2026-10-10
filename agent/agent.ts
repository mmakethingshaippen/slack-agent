import { createGroq } from "@ai-sdk/groq";
import { defineAgent } from "evo";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export default defineAgent({
  model: groq("openai/gpt-oss-20b"),
});
