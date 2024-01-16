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
        let song = e.target.song.value
        let fields = {
            "Guest" : name,
            "Address" : address,
            "Song" : song
        }

        context.handleAirtableFormSubmit(fields);
    }

    return (
        <div className={styles['form-wrapper']} >
            <div className={styles.header}>
                <h2 className={styles.title}>Where can we send your invitation?</h2>
            </div>
            {context.formError && <h3>Something went wrong. :( \nPlease try again, or reach out to us directly!</h3>}
            {context.formSubmitted && !context.formError ? 
                (
                    <div className={styles.wrapper}>
                        <h3>Looks like you've already given us your info!</h3>
                        <h3>Want to add another entry?</h3>
                        <Button onClick={context.handleFormReset} variant="outlined" color="secondary">Reset</Button>
                    </div>
                )
            : 
                (
                    <form action='' className={styles.form} onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit(e);
                    }}>
                        <TextField id="name" label="your name" variant="standard" required color="secondary"/>
                        <TextField id="address" label="address" variant="standard" required color="primary" />
                        <TextField id="song" label="a song that makes you think of us" color="secondary" variant="standard" placeholder={`"Song" - Artist`}/>
                        <Button variant="outlined" type="submit" >submit</Button>
                    </form>
                )
            }
        </div>
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