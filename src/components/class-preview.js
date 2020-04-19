import React from 'react'

import { Button, ListGroup, ListGroupItem, Media } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './class-preview.module.css'


function alertClicked() {
  alert('You clicked the third ListGroupItem');
}


function danceclassDate(danceClass1){
  const groupClassHTML = 
  <div className={styles.previewEventblock}>
  <div className={styles.previewDay}>{danceClass1.date}</div>
<div className={styles.previewMonth}>{danceClass1.month}</div>
<div className={styles.previewTime}>{danceClass1.time} 
<div className={styles.previewParis}>PARIS TIME</div>
</div></div>

  const privateClassHTML = 
  
  <div className={styles.previewEventblock}>
 
<div className={styles.previewAnyTime}>ANY TIME</div>

</div>


  switch (danceClass1.type) {
    case true:      return groupClassHTML
    case false:     return privateClassHTML
    }
}



export default ({ danceClass }) => (
  <div className={styles.preview}>



    <ListGroup.Item action onClick={alertClicked}>
    <div className="d-flex w-100 justify-content-between">
      
      <div className={`mb-1 ${styles.preview}`}>
        


     <div className={styles.previewTitle}>{danceClass.name}</div>
         
     <div className={styles.previewPrice}>{danceClass.duration} <span className={styles.grayDot}>•</span> €{danceClass.price}</div>

 <div className={`mb-1 card-text ${styles.previewDescription}`}>{danceClass.description.childMarkdownRemark.rawMarkdownBody}</div>
  
  
</div>



{danceclassDate(danceClass)}







    </div>
 


    </ListGroup.Item>
 <div className={styles.previewPostpad}> </div>



  </div>
)
