'use client'
import { createContext, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#883808',
            light: '#babf62',
            dark: '#0F3D1F'
        },
        secondary: {
            main: '#3d6cbc',
        }
    },
    typography : {
        fontFamily : "Courier Prime,"
    }
});

type ContextType = {
	[prop: string]: any;
};

type AirtableRecordType = {
    "Guest": string,
    "Address": string
}

export const GlobalContext = createContext<ContextType>({
    formSubmitted : false
});

export const GlobalContextProvider: React.FC<ContextType> = ({children}) => {
    const [formSubmitted, setFormSubmitted] = useState(false); 
    const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const storageKey = "formSubmitted";

    useEffect(() => {
		let isSubmitted = localStorage.getItem(storageKey);

		// populate the favorites if there are any in local storage
		if (isSubmitted === "true") {
			setFormSubmitted(true);
            localStorage.setItem(storageKey, JSON.stringify(true))
		} else {
            setFormSubmitted(false);
        }
	}, []);

    const handleAirtableFormSubmit = async (fields: AirtableRecordType) => {
        const apiUrl = process.env.NEXT_PUBLIC_GUEST_TABLE_URL as string;
        setFormSubmitted(true);
        const data = {
            fields: fields
        }

        const headers = {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY as string}`,
            'Content-Type': 'application/json',
        }
        
        let result = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem(storageKey, JSON.stringify(true));
            })
            .catch(error => {
                console.log(error);
                setFormError(true);
            });
    }

    const handleFormReset = () => {
        setFormSubmitted(false);
        localStorage.setItem(storageKey, JSON.stringify(false));
    }

    const getPartyDetails = async (data: number = 13456) => {
        const FIELDS = ['name', 'family_code', 'diet', 'rsvp']

        const fieldsParam = FIELDS.join(',');
        const apiUrl = process.env.NEXT_PUBLIC_AIRTABLEURL as string;

        const headers = {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY as string}`,
        }

        let result = await fetch(apiUrl, {
                method: 'GET',
                headers: headers,
            })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
                setFormError(true);
            });

            return result;
    }

    return (
        <GlobalContext.Provider
            value={{
                formSubmitted,
                handleAirtableFormSubmit,
                handleFormReset,
                getPartyDetails
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}