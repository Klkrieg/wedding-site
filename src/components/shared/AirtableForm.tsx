'use client'
import { GlobalContext } from "@/contexts/global-content";
import { useContext, useState } from "react"
import styles from '../styles/AirtableForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
                    <form className={styles.form} action='' onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit(e);
                    }}>
                        <TextField id="" label="Name" variant="standard" placeholder="Brian Eno"/>
                        <TextField id="address" label="Address" variant="standard" placeholder=""  />
                        <Button variant='contained' type="submit">Submit</Button>
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