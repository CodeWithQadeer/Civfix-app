import { z } from "zod";

export const createComplaintSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(150),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.enum(["Road", "Garbage", "Electricity", "Water", "Other"]).default("Other"),
  imageUrl: z.string().url().optional().or(z.literal("")),
  lat: z.number({ invalid_type_error: "Latitude must be a number" }),
  lng: z.number({ invalid_type_error: "Longitude must be a number" }),
});

export const updateComplaintSchema = z.object({
  status: z.enum(["Pending", "In Progress", "Resolved"]).optional(),
  adminComment: z.string().max(500).optional(),
});
