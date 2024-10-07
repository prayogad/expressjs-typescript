import { Contact } from "@prisma/client";

export type ContactResponse = {
    id: number;
    first_name: string;
    last_name?: string | null
    email: string;
    phone: string
}

export type CreateContactRequest = {
    first_name: string;
    last_name?: string
    email: string;
    phone: string
}

export type UpdateContactRequest = {
    id: number;
    first_name: string;
    last_name?: string
    email: string;
    phone: string
};

export type SearchContactRequest = {
    name?: string;
    phone?: string;
    email?: string;
    page: number;
    size: number;
}


export function toContactResponse(contact: Contact): ContactResponse {
    return {
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name, // 'last_name' in Prisma is of type 'string | null', but adding '?' in type, converts it to 'string | undefined' when sent
        email: contact.email,
        phone: contact.phone
    }
}