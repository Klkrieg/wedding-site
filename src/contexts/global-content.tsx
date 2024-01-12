'use client'
import { createContext, useEffect, useState } from "react";

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
    const storageKey = "formSubmitted";

    useEffect(() => {
		let isSubmitted = localStorage.getItem(storageKey);
        console.log(isSubmitted);
		// populate the favorites if there are any in local storage
		if (isSubmitted) {
			setFormSubmitted(true);
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
                console.log('Record created successfully:', data);
                localStorage.setItem(storageKey, JSON.stringify(formSubmitted));
            })
            .catch(error => {
                console.error('Error creating record:', error);
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
            {children}
        </GlobalContext.Provider>
    )
}