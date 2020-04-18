import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './instructor-preview.module.css'

export default ({ instructor }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={instructor.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/instructors/${instructor.webUrl}`}>{instructor.name}</Link>
    </h3>
    <small>{instructor.bio.bio}</small>
  </div>
)
