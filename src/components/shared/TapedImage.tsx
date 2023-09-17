import Image from "next/image";
import styles from "../styles/TapedImage.module.css";

type Props = {
    src: string
}

export const TapedImage = ({src}: Props) => {
    return (
        <div className={styles["taped-image"]}>
            <Image
                className={styles.first}
                src={"/tape-ginko.png"}
                width={80}
                height={20}
                alt=""
            />
            <Image 
                className={styles.img}
                src={src}
                alt={'Cedar Branch'}
                height={300} 
                width={200}
            />
            <Image
                className={styles.last}
                src={"/tape-ginko.png"}
                width={80}
                height={20}
                alt=""
            />
        </div>
    )
}