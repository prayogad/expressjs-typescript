import { number, z, ZodType } from "zod";

export class AddressValidation {

     static readonly CREATE: ZodType = z.object({
          contactId: z.number().positive(),
          street: z.string().min(1).max(255).optional(),
          city: z.string().min(1).max(100).optional(),
          province: z.string().min(1).max(100).optional(),
          country: z.string().min(1).max(100),
          postal_code: z.string().min(1).max(100),
     });

     static readonly GET: ZodType = z.object({
          contactId: z.number().positive(),
          id: z.number().positive(),
     });

     static readonly UPDATE: ZodType = z.object({
          id: z.number().positive(),
          contactId: z.number().positive(),
          street: z.string().min(1).max(255).optional(),
          city: z.string().min(1).max(100).optional(),
          province: z.string().min(1).max(100).optional(),
          country: z.string().min(1).max(100),
          postal_code: z.string().min(1).max(100),
     });

     static readonly REMOVE: ZodType = z.object({
          contactId: z.number().positive(),
          id: z.number().positive(),
     });
}