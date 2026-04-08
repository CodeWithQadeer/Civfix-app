import { z } from "zod";

export const complaintSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(150, "Title too long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  category: z.enum(["Road", "Garbage", "Electricity", "Water", "Other"]),
  lat: z.string().min(1, "Please select a location on the map"),
  lng: z.string().min(1, "Please select a location on the map"),
});
