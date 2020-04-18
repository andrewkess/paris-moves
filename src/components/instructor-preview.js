import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './instructor-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/instructors/${article.webUrl}`}>{article.name}</Link>
    </h3>
    <small>{article.bio.bio}</small>
  </div>
)
