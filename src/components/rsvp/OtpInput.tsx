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
    let targetValue = e.target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') return;

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
    
    onChange(newValue);

    if(!isTargetValueDigit) return;

    const nextElement = e.target.nextElementSibling as HTMLInputElement || null;

    if (nextElement) nextElement.focus();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    const target = e.target as HTMLInputElement;

    if (e.key !== 'Backspace' || target.value !== '') return;

    const previousElement = target.previousElementSibling as HTMLInputElement || null;

    if (previousElement) previousElement.focus();
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
            onKeyDown={handleKeyDown}
            onChange={(e) => onInputChange(e, idx)}
          />
        ))}
      </div>
    );
  }