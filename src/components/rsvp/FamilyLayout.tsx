/**
 * Each record will have a family "code"
 * When memeber enters code into OTP input it will return a list of invited guests in that party
 * The Guest will have a check box for "is going" and a text field for dietary restrictions
 * If the family code is reused, it will repopulate with the information filled out
 *
 */

import { GlobalContext } from "@/contexts/global-content";
import { SetStateAction, useContext, useEffect, useState } from "react";

import { Record } from "@/constants/types";
import { Box, Button, Link, Typography } from "@mui/material";
import { GuestInfoForm } from "./GuestInfoForm";
import { getSingleGuest } from "../../../utils/airtable";

export type Props = {
    family: Record[];
};

export const FamilyLayout = ({ family }: Props) => {
    const context = useContext(GlobalContext);

    const [activeGuest, setActiveGuest] = useState<Record>();

    const handleGuestClick = async (e: { target: any }) => {
        let guest = await getSingleGuest(e.target.id);
        setActiveGuest(guest);
    };

    useEffect(() => {
        context.getGuestDetails();
    }, [activeGuest]);

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent={activeGuest ? "flex-start" : "flex-start"}
            flexDirection={"column"}
            gap={2}
        >
            {!activeGuest ? (
                family.map((detail) => (
                    <Button
                        key={detail.id}
                        id={detail.id}
                        color='secondary'
                        size='large'
                        variant='outlined'
                        onClick={handleGuestClick}
                    >
                        {detail.fields.guest}
                    </Button>
                ))
            ) : (
                <GuestInfoForm
                    guest={activeGuest}
                    postSubmit={setActiveGuest}
                />
            )}
            <Typography
                paragraph
                textAlign={"center"}
                maxWidth={400}
                paddingInline={4}
                marginBlockStart={6}
            >
                {
                    "you will be able to come back to this page in the future, \nshould you need to update any of your information"
                }
            </Typography>
        </Box>
    );
};
