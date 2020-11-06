import React from 'react'
import styles from './AboutGrid.module.css'

const AboutGrid = () => (
  <article className={styles.aboutGrid}>
    <div className={`${styles.item} ${styles.avo1}`}></div>
    <div className={styles.avo2}></div>
    <div className={styles.avo3}></div>

    <div className={`${styles.item} ${styles.purple}`}>
      <h3 className={styles.itemTitle}>Most avocados come from Mexico</h3>
      <p className={styles.itemParagraph}>
        While avocados are grown in California and Florida, the majority sold in
        grocery stores come from south central Mexico. The main reason for the
        abundance of “south of the border” avocados is that Mexico is blessed
        with a year-round growing climate. The avocado is believed to have
        originated in the state of Puebla, Mexico, as far back as 10,000 B.C
      </p>
    </div>
    <div className={`${styles.item} ${styles.purple}`}>
      <h3 className={styles.itemTitle}>The conquistadors were huge fans</h3>
      <p className={styles.itemParagraph}>
        Spanish explorers arriving in Mexico during the 16th century survived on
        avocados and were the first Europeans to consume them. As a result of
        the Spanish Conquest, avocados spread to South America and Central
        America.
      </p>
    </div>

    <div className={`${styles.item} ${styles.green}`}>
      <h3 className={styles.itemTitle}>“Avocado” wasn’t its original name</h3>
      <p className={styles.itemParagraph}>
        Irishman Sir Hans Sloane called it an avocado in 1696 in a
        Jamaican-plants catalog. He also dubbed the avocado tree the “alligator
        pear tree.”
      </p>
    </div>
    <div className={`${styles.item} ${styles.green}`}>
      <h3 className={styles.itemTitle}>It’s actually a fruit</h3>
      <p className={styles.itemParagraph}>
        Did you know that an avocado is a fruit? While definitely not sweet, it
        falls firmly in the fruit-not the vegetable-family. That’s because the
        avocado tree is part of the flowering-plant family Lauraceae.
      </p>
    </div>

    <div className={`${styles.item} ${styles.green}`}>
      <h3 className={styles.itemTitle}>
        There’s a secret trick to ripening them up quick
      </h3>
      <p className={styles.itemParagraph}>
        Need to ripen that avocado ASAP? Place it in a brown paper bag with a
        banana or two. The bananas will release ethylene gas, a natural plant
        hormone that aids in ripening fruit. On the other hand, check out this
        guide to learn how to store them for later.
      </p>
    </div>
    <div className={`${styles.item} ${styles.purple} ${styles.center}`}>
      <p className={styles.centerText}>they're delicious</p>
    </div>
  </article>
)

export default AboutGrid
