import React from 'react'
import styles from './Loading.module.css'

const Loading = () => (
  <div className={styles.avoLoading}>
    <img
      className={styles.avoLoadingImage}
      src="/images/avocado-kawai.png"
      alt="avocado kawai"
    />
  </div>
)

export default Loading
