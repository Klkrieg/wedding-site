"use client"
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import styles from './page.module.css'
import OtpInput from '@/components/shared/OtpInput';

export default function RSVP(){
    const [foundRecord, setFoundRecord] = useState(false);

    const [otp, setOtp] = useState('');
    const onChange = (value: string) => setOtp(value);

    return (
        <main className={styles.main}>
            <h1>rsvp!</h1>
            {
                !foundRecord 
                ? (
                    <form className={styles.form} action="" method="get">
                        <label htmlFor="key">please enter the 5 digit code on your invitation</label>
                        <OtpInput value={otp} valueLength={5} onChange={onChange}/>
                        <Button type="submit" variant='outlined'>get my deets</Button>
                    </form>
                ) : (
                    <p>info</p>
                )
            }
        </main>
    )
}