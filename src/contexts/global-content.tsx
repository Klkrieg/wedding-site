'use client'
import { createContext, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#A33407',
            light: '#D6F49D',
            dark: '#0F3D1F'
        },
        secondary: {
            main: '#096ab3',
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

    return (
        <GlobalContext.Provider
            value={{
                formSubmitted,
                handleAirtableFormSubmit,
                handleFormReset
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}