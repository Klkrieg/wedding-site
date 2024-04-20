/**
 * Each record will have a family "code"
 * When memeber enters code into OTP input it will return a list of invited guests in that party
 * The Guest will have a check box for "is going" and a text field for dietary restrictions
 * If the family code is reused, it will repopulate with the information filled out 
 * 
 */

import { GlobalContext } from "@/contexts/global-content"
import { useContext, useEffect } from "react"

export type Props = {
    familyCode: string,
}

export const RSVPForm = ({familyCode}: Props) => {
    const context = useContext(GlobalContext)
    
    useEffect(()=>{
        context.getPartyDetails();
    })

    return (
        <div>
            test
        </div>
    )
}