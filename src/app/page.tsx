import Image from 'next/image';
import styles from './page.module.css';
import { Poem } from '@/components/shared/Poem';
import { TapedImage } from '@/components/shared/TapedImage';
import { AirtableForm } from '@/components/shared/AirtableForm';

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
            src="https://res.cloudinary.com/dcnk7dp9q/video/upload/f_auto/v1694899241/heheourfaces_fomeht.mp4">
          </video>
        </div>
        <div className={styles.introText}>
          <h1 className={styles.title}>april + karson</h1>
          <div className={styles.savethedate}>
            <h2 className={styles["introText--title"]}>Save the Date!</h2>
            <h4 className={styles["introText--date"]}>10.12.2024</h4>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.introImg}>
          <TapedImage src={"https://res.cloudinary.com/dcnk7dp9q/image/upload/v1694920179/IMG_0107_dip5yx.jpg"}/>
        </div>
        <div className={styles.spotifyWrapper}>
          <h2 className={styles.spotifyWrapper__title}>Add to our Playlist of Love</h2>
          <p className={styles.spotifyWrapper__description}>Have some songs that make you think about...?</p>
          <iframe 
            src="https://open.spotify.com/embed/playlist/6enWYDETPPn9NATys7KhuK?utm_source=generator" 
            width="100%" 
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>
        </div>
        <div className={styles["airtable-form"]}>
          <AirtableForm/>
        </div>
        <div className={styles.poemCont}>
          <Poem/>
        </div>
      </div>
    </main>
  )
}
