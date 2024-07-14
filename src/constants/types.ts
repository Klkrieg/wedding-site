export type GuestType = {
    id: string;
    name: string;
    has_rsvp: boolean;
    diet: string;
};

export interface Record {
    id: string;
    createdTime: string;
    fields: RecordFields;
}
export interface RecordFields {
    guest: string;
    family_code: number;
    diet: string;
    rsvp: string;
    plus_one: boolean;
    plus_one_diet?: string;
    plus_one_name?: string;
}

export interface RecordUpdateFields {
    id: string;
    diet: string;
    rsvp: string;
    plus_one_diet?: string;
    plus_one_name?: string;
}
