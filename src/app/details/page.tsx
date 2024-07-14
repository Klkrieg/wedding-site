import { Box, Typography } from "@mui/material";
import { NavBar } from "@/components/nav/NavBar";
import Link from "next/link";
import { responseTheme } from "../../contexts/global-content";
import { TapedImage } from "@/components/shared/TapedImage";

export default function Details() {
    return (
        <>
            <Box component={"header"} paddingBlock={5} paddingInline={5}>
                <NavBar />
            </Box>
            <Box
                component={"main"}
                display={"grid"}
                maxWidth={990}
                paddingInline={3}
                columnGap={"50px"}
                rowGap={"40px"}
                marginInline={"auto"}
                gridAutoFlow={"dense"}
                gridTemplateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
            >
                <Box component={"section"} maxWidth={425}>
                    <Typography textAlign='left' variant='h3' component='h1'>
                        /the ceremony
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        the ceremony will be held under the canopy of two old
                        live oak trees on the eason&apos;s property.
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        give yourself extra time to park, walk down to the site,
                        and admire the home sharell and ronnie have created.
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        this property is another family member, it is only right
                        that we commit wholly to one another inher presence.
                    </Typography>
                </Box>
                <Box component={"section"} maxWidth={425}>
                    <Typography textAlign='left' variant='h3' component='h1'>
                        /the reception
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        fischer dance hall is where sarell and ronnie had their
                        wedding reception 31 years ago
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        grammy baked over 250 rolls, the hills picked
                        wildflowers, and the dalton sisters sang love songs on
                        the stage.
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        fischer dance hall was built in the 1800s and kept in
                        historical condition meaning it&apos;s a little rustic
                        and a lot charming
                    </Typography>
                </Box>
                <Box component={"section"} maxWidth={425}>
                    <Typography textAlign='left' variant='h3' component='h1'>
                        /dress code
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        casual / fun
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        be prepared to:
                        <br /> walk on a dirt patch
                        <br /> sit on a quilt
                        <br /> dance in an old barn
                        <br /> run around in the dark
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        october in texas can range from muggy and warm to muggy
                        and slightly less warm. the historic average high is
                        84&deg;f
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        prioritize comfort over fashion and feel free to be a
                        little silly with it :)
                    </Typography>
                </Box>
                <Box component={"section"} maxWidth={425}>
                    <Typography textAlign='left' variant='h3' component='h1'>
                        /the vibes
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        we want you to feel comfortable, loved and at home. we
                        want you to feel the tenderness of our vulnerable hearts
                        and the expansion of a whole hearted &quot;yes!&quot;
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        this is a homemade wedding who knows her roots. this is
                        a co-created experience made richer by every one showing
                        up joyful and curious.
                    </Typography>
                </Box>
                <Box component={"section"} maxWidth={425}>
                    <Typography textAlign='left' variant='h3' component='h1'>
                        /travel
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        if you can carpool to the ceremony and reception WE
                        RECOMMEND IT! there are no ubers in the area so find a
                        DD and help us out by limiting the number of cars. you
                        can leave extra cars at the HEB in dripping springs.
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        fill out{" "}
                        <Link href='https://docs.google.com/spreadsheets/d/1Dfb_mALUkZJeHT3fwFNEhovrc9U3YIkgG6mNnwEDFs0/edit?usp=sharing'>
                            this form
                        </Link>{" "}
                        if you want to camp on the eason&apos;s property. you
                        will be pulled into prep, share meals with us as we set
                        up, and get the serene hill country experience.
                    </Typography>
                    <Typography
                        textAlign='left'
                        component='p'
                        marginBlockEnd={2}
                    >
                        if you are looking for an airbnb or hotel, dripping
                        springs is sprawling so make sure you map your lodging
                        in relation to the venue
                    </Typography>
                </Box>
                <Box
                    component={"div"}
                    maxWidth={400}
                    marginInline={"auto"}
                    width={"100%"}
                >
                    <TapedImage
                        src={
                            // "https://res.cloudinary.com/dcnk7dp9q/image/upload/v1720986922/IMG_2399_beyuqq.heic"
                            "https://res.cloudinary.com/dcnk7dp9q/image/upload/ar_1:1,c_fill,g_auto,w_1000,f_jpg/v1720986922/IMG_2399_beyuqq.heic"
                        }
                        width={400}
                        height={400}
                        variant='left-right'
                    ></TapedImage>
                </Box>
            </Box>
        </>
    );
}
