"use client";
import { Box, Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import OtpInput from "@/components/rsvp/OtpInput";
import { FamilyLayout } from "@/components/rsvp/FamilyLayout";
import { GlobalContext } from "@/contexts/global-content";

export default function RSVP() {
    const context = useContext(GlobalContext);
    const [foundRecord, setFoundRecord] = useState(false);
    const [family, setFamily] = useState([]);

    const [otp, setOtp] = useState("");
    const onChange = (value: string) => setOtp(value);

    const getRecordsByCode = () => {
        if (!otp) return;
        let foundRecords = context.guestData.filter(
            (record: any) => record.fields.family_code === otp,
        );
        if (foundRecords) {
            setFoundRecord(true);
            setFamily(foundRecords);
        }
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>rsvp!</h1>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                marginBlockStart={10}
            >
                {!foundRecord ? (
                    <form
                        className={styles.form}
                        action=''
                        method='get'
                        onSubmit={() => getRecordsByCode()}
                    >
                        <label htmlFor='key'>
                            please enter the 5 digit code on your invitation
                        </label>
                        <OtpInput
                            value={otp}
                            valueLength={5}
                            onChange={onChange}
                        />
                        <Button type='submit' variant='outlined'>
                            get my deets
                        </Button>
                    </form>
                ) : (
                    <FamilyLayout family={family} />
                )}
            </Box>
        </main>
    );
}
