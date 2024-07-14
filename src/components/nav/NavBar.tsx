import { Box } from "@mui/material";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";

export const NavBar = () => {
    return (
        <Box
            component={"nav"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
        >
            <Link href='/'>home</Link>
            <Link href='/details'>details</Link>
            <Link href='/rsvp'>rsvp</Link>
        </Box>
    );
};
