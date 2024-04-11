// "use client"
import { useMemo } from "react";
import { RE_DIGIT } from "@/constants/constants";

import styles from "../styles/OtpInput.module.css";


export type Props = {
    value: string,
    valueLength: number,
    onChange: (value: string) => void
}

export default function OtpInput({ value, valueLength, onChange }: Props) {
  const valueItems = useMemo(()=>{
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      RE_DIGIT.test(char) 
        ? items.push(char)
        : items.push('')
    }

    return items;
  }, [value, valueLength])
  
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number)=>{
    const targetValue = e.target.value;

    if (!RE_DIGIT.test(targetValue)) return;

    const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
    console.log(newValue);
  }

  return (
      <div className={styles.otpGroup}>
        {valueItems.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            className={styles.otpCell}
            value={digit}
            onChange={(e) => onInputChange(e, idx)}
          />
        ))}
      </div>
    );
  }