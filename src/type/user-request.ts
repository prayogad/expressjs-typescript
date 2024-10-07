import { User } from "@prisma/client";
import { Request } from "express";

// This interface allows us to add a 'user' property to 'req.user'.
// By default, Express's Request object does not have a 'user' field, 
// so we extend the Request interface to include it.
export interface UserRequest extends Request {
    user?: User
}