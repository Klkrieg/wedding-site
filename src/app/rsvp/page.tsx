"use client"
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import styles from './page.module.css'
import { ValidatorCodeInput } from '@/components/shared/ValidatorCodeInput';

export default function RSVP(){
    const [foundRecord, setFoundRecord] = useState(false);

    return (
        <main className={styles.main}>
            <h1>rsvp!</h1>
            {
                !foundRecord 
                ? (
                    <form className={styles.form} action="" method="get">
                        <label htmlFor="key">please enter the 5 digit code on your invitation</label>
                        <ValidatorCodeInput />
                        <Button type="submit" variant='outlined'>get my deets</Button>
                    </form>
                ) : (
                    <p>info</p>
                )
            }
        </main>
    )
}