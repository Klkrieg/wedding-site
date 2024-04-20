"use client"
import { Button, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import styles from './page.module.css'
import OtpInput from '@/components/rsvp/OtpInput';
import { RSVPForm } from '@/components/rsvp/RSVPForm';
import { GlobalContext } from '@/contexts/global-content';

export default function RSVP(){
    const context = useContext(GlobalContext)
    const [foundRecord, setFoundRecord] = useState(true);

    const [otp, setOtp] = useState('');
    const onChange = (value: string) => setOtp(value);

    const handleSubmit = () => {}

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
                    <RSVPForm familyCode={otp}/>
                )
            }
        </main>
    )
}