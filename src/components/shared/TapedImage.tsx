import Image from "next/image";
import styles from "../styles/TapedImage.module.css";

type Props = {
    src: string,
    variant: string,
    width: number,
    height: number
}

export const TapedImage = ({src, variant, width, height}: Props) => {

    let classes = [
        styles['taped-image'],
        styles[variant],
    ]
    return (
        <div className={classes.join(' ')}>
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
                height={height} 
                width={width}
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