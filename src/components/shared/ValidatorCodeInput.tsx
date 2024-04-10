// "use client"
import { TextField } from "@mui/material";
import styles from "../styles/ValidatorCodeInput.module.css";
import { useRef, useState } from "react"
import { position } from "@cloudinary/url-gen/qualifiers/timeline";

const CODE_DIGITS = Array(5).fill(0)

export const ValidatorCodeInput = () => {
    const [focused, setFocused] = useState(false)
    const [code, setCode] = useState([]);

    const ref = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log(ref)
        ref?.current?.focus();
    };

    const toDigitInput = (_value: number, idx: number) => {
        const emptyInputChar = ' ';
        const digit = code[idx] || emptyInputChar;
    
        return (
            <div className={styles.cell} key={idx}>
                <p>{digit}</p>
            </div>
        );
    }

    return (
        <div className={styles.validator}>
            <div className={styles.code} onClick={handleClick}>
                {CODE_DIGITS.map(toDigitInput)}
            </div>
            <TextField className={styles.hidden} value={code} onChange={(e) => console.log(e.target)} ref={ref} id="code" label="" variant="standard" required color="primary" />
        </div>
    )
}