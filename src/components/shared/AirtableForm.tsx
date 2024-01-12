'use client'
import { GlobalContext } from "@/contexts/global-content";
import { useContext, useState } from "react"
export const AirtableForm = () => {
    const context = useContext(GlobalContext);
    const handleFormSubmit = (e: any) => {
        let name = e.target.name.value;
        let address = e.target.address.value;
        let fields = {
            "Guest" : name,
            "Address" : address
        }

        context.handleAirtableFormSubmit(fields);
    }

    return (
        <>
            {context.formSubmitted ? 
                (
                    <div>
                        <h3>Want to add another entry?</h3>
                        <button onClick={context.handleFormReset}>Reset</button>
                    </div>
                )
            : 
                (
                    <form action='' onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit(e);
                    }}>
                        <label>
                            Name:
                            <input type="text" id="name" placeholder="Brian Eno"/>
                        </label>
                        <label>
                            Address:
                            <input type="text" id="address"/>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                )
            }
        </>
        // <iframe 
        //     className="airtable-embed" 
        //     src="https://airtable.com/embed/appaC8SQQQvkK8clD/shrVzP2jz8RkcvZjc?backgroundColor=green" 
        //     frameBorder="0"
        //     width="100%" 
        //     height="533"
        //     >
        //     </iframe>
    )
}