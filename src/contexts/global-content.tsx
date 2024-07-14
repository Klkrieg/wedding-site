"use client";
import { createContext, useEffect, useState } from "react";
import {
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material/styles";
import axios from "axios";
import { CampingUpdateFields, RecordUpdateFields } from "@/constants/types";
import { addCamper, getDetails, updateDetails } from "../../utils/airtable";

const theme = createTheme({
    palette: {
        primary: {
            main: "#883808",
            light: "#babf62",
            dark: "#0F3D1F",
        },
        secondary: {
            main: "#3d6cbc",
        },
    },
    typography: {
        fontFamily: "Courier Prime,",
    },
});

export let responseTheme = responsiveFontSizes(theme);

type ContextType = {
    [prop: string]: any;
};

type AirtableRecordType = {
    Guest: string;
    Address: string;
};

export const GlobalContext = createContext<ContextType>({
    formSubmitted: false,
});

export const GlobalContextProvider: React.FC<ContextType> = ({ children }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const [guestDataUpdated, setGuestDataUpdated] = useState(false);
    const [guestData, setGuestData] = useState([]);
    // const [currentFamilyCode, setCurrentFamilyCode] = useState("");
    const storageKey = "formSubmitted";

    useEffect(() => {
        let isSubmitted = localStorage.getItem(storageKey);

        // populate the favorites if there are any in local storage
        if (isSubmitted === "true") {
            setFormSubmitted(true);
            localStorage.setItem(storageKey, JSON.stringify(true));
        } else {
            setFormSubmitted(false);
        }

        getGuestDetails();
    }, [guestDataUpdated]);

    const handleAirtableFormSubmit = async (fields: AirtableRecordType) => {
        const apiUrl = process.env.NEXT_PUBLIC_GUEST_TABLE_URL as string;
        setFormSubmitted(true);
        const data = {
            fields: fields,
        };

        const headers = {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY as string}`,
            "Content-Type": "application/json",
        };

        let result = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem(storageKey, JSON.stringify(true));
            })
            .catch((error) => {
                console.log(error);
                setFormError(true);
            });
    };

    const handleFormReset = () => {
        setFormSubmitted(false);
        localStorage.setItem(storageKey, JSON.stringify(false));
    };

    const getGuestDetails = async () => {
        let result = await getDetails();
        setGuestData(result);
    };

    const updateGuestDetails = async (data: RecordUpdateFields) => {
        let result = await updateDetails(data);
    };

    return (
        <GlobalContext.Provider
            value={{
                formSubmitted,
                handleAirtableFormSubmit,
                handleFormReset,
                getGuestDetails,
                guestDataUpdated,
                setGuestDataUpdated,
                guestData,
                updateGuestDetails,
                // currentFamilyCode,
                // setCurrentFamilyCode,
            }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </GlobalContext.Provider>
    );
};
