import React from 'react'
import styles from "./espantapajaros.module.css";

export const Espantapajaros = () => {
  return (
    
    <main className={styles.main}>
     <img src="./assets/images/Scarecrow.png" alt="Scarecrow" class="img-contaier"></img>
     <section className={styles.not_found_container}>
       <h1>I have bad news for you</h1>
       <p>The page you are looking for might be removed or is temporarily unavailable</p>
       <button>Back to homepage</button>
     </section>
   </main>
    
  )
}
