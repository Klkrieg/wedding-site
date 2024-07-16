import { Record, RecordUpdateFields } from "@/constants/types";
import {
    Box,
    Button,
    FormControlLabel,
    FormControl,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    FormLabel,
    FormGroup,
} from "@mui/material";
import { ChangeEvent, SetStateAction, useContext, useState } from "react";

import styles from "../styles/GuestInfo.module.css";
import { GlobalContext } from "@/contexts/global-content";

export type Props = {
    guest: Record;
    postSubmit: any;
};

export const GuestInfoForm = ({ guest, postSubmit }: Props) => {
    const context = useContext(GlobalContext);

    const [diet, setDiet] = useState(guest.fields.diet);
    const [rsvp, setRsvp] = useState(guest.fields.rsvp);
    const [plusOneDiet, setPlusOneDiet] = useState(
        guest.fields.plus_one_diet ? guest.fields.plus_one_diet : "",
    );
    const [plusOneName, setPlusOneName] = useState(
        guest.fields.plus_one_name ? guest.fields.plus_one_name : "",
    );
    const getsPlusOne = guest.fields.plus_one;

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        fieldToChange: string,
    ) => {
        switch (fieldToChange) {
            case "diet":
                setDiet(e.target.value);
                break;
            case "rsvp":
                setRsvp(e.target.value);
                break;
            case "plusOneDiet":
                setPlusOneDiet(e.target.value);
                break;
            case "plusOneName":
                setPlusOneName(e.target.value);
        }
    };

    const handleGuestUpdate = () => {
        const data = {
            id: guest.id,
            diet: diet,
            rsvp: rsvp,
            plus_one_name: plusOneName,
            plus_one_diet: plusOneDiet,
        };
        postSubmit();
        context.updateGuestDetails(data);
    };

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            justifySelf={"start"}
            gap={4}
        >
            <Typography variant='h5' component='h3'>
                {guest.fields.guest}
            </Typography>
            <form
                className={styles.formWrapper}
                action=''
                onSubmit={handleGuestUpdate}
            >
                <TextField
                    id='diet'
                    label='dietary restrictions'
                    variant='outlined'
                    required
                    color='primary'
                    onChange={(e) => handleInputChange(e, "diet")}
                    value={diet}
                />
                <FormControl>
                    <FormLabel id='rsvp-radio'>will you be coming?</FormLabel>
                    <RadioGroup
                        id='rsvp-radio'
                        value={rsvp}
                        onChange={(e) => handleInputChange(e, "rsvp")}
                    >
                        <FormControlLabel
                            value='yes'
                            control={<Radio />}
                            label='i will be there!'
                        />
                        <FormControlLabel
                            value='no'
                            control={<Radio />}
                            label='i will not be there :('
                        />
                        <FormControlLabel
                            value='tbd'
                            control={<Radio />}
                            label='undecided'
                        />
                    </RadioGroup>
                </FormControl>
                {getsPlusOne && (
                    <Box display='flex' flexDirection='column' gap={2}>
                        <Typography variant='h6' component='h4'>
                            plus one information
                        </Typography>
                        <TextField
                            id='plusOneName'
                            label='name'
                            variant='outlined'
                            color='secondary'
                            onChange={(e) =>
                                handleInputChange(e, "plusOneName")
                            }
                            value={plusOneName}
                        />
                        <TextField
                            id='plusOneDiet'
                            label='dietary restrictions'
                            variant='outlined'
                            color='secondary'
                            onChange={(e) =>
                                handleInputChange(e, "plusOneDiet")
                            }
                            value={plusOneDiet}
                        />
                    </Box>
                )}
                <Button
                    color='secondary'
                    size='large'
                    variant='contained'
                    type='submit'
                >
                    submit
                </Button>
            </form>
        </Box>
    );
};
