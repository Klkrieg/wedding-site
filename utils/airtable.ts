import { CampingUpdateFields, RecordUpdateFields } from "@/constants/types";
import axios from "axios";

let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY as string}`,
};

let apiUrl = process.env.NEXT_PUBLIC_GUEST_TABLE_URL as string;

export const getDetails = async () => {
    const FIELDS = ["guest", "family_code"];

    const fieldsParam = FIELDS.map((field) => `fields%5B%5D=${field}`).join(
        "&",
    );
    let url = apiUrl + `?${fieldsParam}`;

    const result = await axios
        .get(url, { headers })
        .then((response) => {
            const data = response.data.records;
            // console.log(data);
            return data;
            // setGuestData(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    return result;
};

export const getSingleGuest = async (id: string) => {
    let url = apiUrl + `/${id}`;
    console.log(url);

    const result = await axios
        .get(url, { headers })
        .then((response) => {
            const data = response.data;
            return data;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    return result;
};

export const updateDetails = async (updates: RecordUpdateFields) => {
    let url = apiUrl + `/${updates.id}`;

    const cleanUpdates = {
        fields: {
            diet: updates.diet,
            rsvp: updates.rsvp,
            plus_one_diet: updates.plus_one_diet,
            plus_one_name: updates.plus_one_name,
        },
    };

    const result = await axios
        .patch(url, cleanUpdates, { headers })
        .then((response) => {
            const data = response.status;
            return data;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
};
