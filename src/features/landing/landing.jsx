import styles from "./landing.module.css"
import portal from "../../common/images/imagen8.png"
import rick from "../../common/images/rick.png"
import morty from "../../common/images/morty.png"
import summer from "../../common/images/summer.png"

import imagen9 from "../../common/images/imagen9.png"
import imagen10 from "../../common/images/imagen10.png"
import imagen11 from "../../common/images/imagen11.png"
import imagen12 from "../../common/images/imagen12.png"

export function Landing(){
    return(
        <div className={styles.hero}>
      <h1 className={styles.title}>
        WELCOME TO THE MULTIVERSE
      </h1>

      <div className={styles.scene}>
        <img src={portal} className={styles.portal} />

        <img src={rick} className={styles.rick} />
        <img src={morty} className={styles.morty} />
        <img src={summer} className={styles.summer} />
        <img src={imagen9} className={styles.imagen9} />
        <img src={imagen10} className={styles.imagen10} />
        <img src={imagen11} className={styles.imagen11} />
        <img src={imagen12} className={styles.imagen12} />
        {/* <img src={meeseeksImg} className={styles.meeseeks} /> */}
      </div>

      
    </div>
    )
}