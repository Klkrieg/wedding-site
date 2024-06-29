import Image from "next/image";
import styles from "./page.module.css";
import { Poem } from "@/components/shared/Poem";
import { TapedImage } from "@/components/shared/TapedImage";
import { AirtableForm } from "@/components/shared/AirtableForm";
import { Button, Typography } from "@mui/material";

export default function Home() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.videoCont}>
                    <video
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        src='https://res.cloudinary.com/dcnk7dp9q/video/upload/v1704675239/wedding_short_e6zi4l.mp4'
                    ></video>
                </div>
                <div className={styles.introText}>
                    <h1 className={styles.title}>april + karson</h1>
                    <div className={styles.savethedate}>
                        <h2 className={styles["introText--title"]}>
                            Save the Date!
                        </h2>
                        <h4 className={styles["introText--date"]}>
                            10.12.2024
                        </h4>
                        <h4 className={styles["introText--place"]}>
                            austin, tx
                        </h4>
                    </div>
                </div>
            </header>
            <div className={styles.content}>
                <div className={styles["content-top"]}>
                    <div className={styles["first-image"]}>
                        <TapedImage
                            src={
                                "https://res.cloudinary.com/dcnk7dp9q/image/upload/v1706677897/IMG_8042_nznrvy_hatxle.jpg"
                            }
                            width={1695}
                            height={2842}
                            variant='top'
                        />
                    </div>
                    <div className={styles.welcome}>
                        <Typography paragraph component='p' marginBlockEnd={6}>
                            {
                                "you have been woven into this love and we can't wait for the chance to cry and dance and stand in reverence with you, stepping into this new chapter of our lives surrounded by the people we love most."
                            }
                        </Typography>
                        <Button
                            variant='contained'
                            color='secondary'
                            href='/rsvp'
                            size='large'
                        >
                            rsvp here
                        </Button>
                    </div>
                    <div className={styles["second-image"]}>
                        <TapedImage
                            src={
                                "https://res.cloudinary.com/dcnk7dp9q/image/upload/v1706674627/IMG_2514_v1hj5v.jpg"
                            }
                            width={3024}
                            height={4032}
                            variant='left-right'
                        />
                    </div>
                    <div className={styles.formWrapper}>
                        <AirtableForm />
                    </div>
                </div>
                <div className={styles["content-bottom"]}>
                    <TapedImage
                        src={
                            "https://res.cloudinary.com/dcnk7dp9q/image/upload/v1706681049/Screenshot_2024-01-28_at_6.11.04_PM_kskyxj.png"
                        }
                        width={200}
                        height={300}
                        variant='none'
                    />
                    <TapedImage
                        src={
                            "https://res.cloudinary.com/dcnk7dp9q/image/upload/v1706681399/IMG_8503_yitmnk.jpg"
                        }
                        width={200}
                        height={300}
                        variant='top'
                    />
                    <TapedImage
                        src={
                            "https://res.cloudinary.com/dcnk7dp9q/image/upload/v1706681049/Screenshot_2024-01-28_at_6.09.18_PM_xg5yuo.png"
                        }
                        width={200}
                        height={300}
                        variant='bottom'
                    />
                    <TapedImage
                        src={
                            "https://res.cloudinary.com/dcnk7dp9q/image/upload/c_fill,w_800,h_1085/v1706683436/IMG_4230_oki85o.jpg"
                        }
                        width={200}
                        height={300}
                        variant='none'
                    />
                </div>
                <div className={styles.spotifyWrapper}>
                    <h2 className={styles.spotifyWrapper__title}>
                        our playlist of love
                    </h2>
                    <p className={styles.spotifyWrapper__description}>
                        we will be compiling all of the songs submitted through
                        the form above
                    </p>
                    <iframe
                        src='https://open.spotify.com/embed/playlist/6enWYDETPPn9NATys7KhuK?utm_source=generator'
                        width='100%'
                        height='352'
                        frameBorder='0'
                        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                        loading='lazy'
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
