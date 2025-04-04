import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { generateAIInsights } from "@/actions/dashboard";
import { generateIndustryInsights } from "@/lib/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    generateIndustryInsights
  ],
});
