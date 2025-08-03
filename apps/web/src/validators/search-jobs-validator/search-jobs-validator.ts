import * as z from "zod";

export const searchJobsValidator = z.object({
  title: z.string().optional(),
  location: z.string().optional(),
  fullTime: z.boolean().optional(),
});

export type SearchJobsSchema = z.infer<typeof searchJobsValidator>;
