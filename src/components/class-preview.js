import React, {Fragment} from 'react'

import { Button, ListGroup, ListGroupItem, Media } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './class-preview.module.css'


import { IconContext } from "react-icons";
import { WiTime1, WiTime2, WiTime3,WiTime4, WiTime5, WiTime6, WiTime7, WiTime8, WiTime9, WiTime10, WiTime11,WiTime12 } from 'react-icons/wi'

import {IoMdTime} from 'react-icons/io'

import {FaRegCalendarAlt} from 'react-icons/fa'


//you can use this to run a function on this display, like i did with returning a group class vs private class date 
//{danceclassDate(danceClass)}


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


function timeIcon(time){

    var icon1 = 'WiTime'
 var time1 =  time.charAt(0)



    const result = '<' + icon1 + time1 + ' />'
    //this is just a test
 


    const timeIcon = 
         <Fragment>
        { result }
      </Fragment>  


    //return timeIcon


    const createMarkup = htmlString => ({ __html: htmlString });

    return (
      <div>
        Please click this link: <div dangerouslySetInnerHTML={createMarkup(timeIcon)} />
      </div>
    )


//return timeIcon
  }



export default ({ danceClass }) => (
  <div className={styles.preview}>



    <ListGroup.Item action onClick={alertClicked} className={styles.listItemRef}>
    <div className="d-flex w-100 justify-content-between">
      
      <div className={`mb-1 ${styles.preview}`}>
        


     <div className={styles.previewTitle}>{danceClass.name}</div>
         
     <div className={styles.previewDateBlock}>
   
   <FaRegCalendarAlt className={styles.timeIconed}/>

         
         {danceClass.date} {danceClass.month} 
     
         <span className={styles.grayDot}> • </span> 
     
     
    
     {danceClass.time} <span className={styles.grayDot}> • </span> Paris time </div>

  
  
</div>

<div className={styles.previewEventblock}><div className={styles.previewDuration}>
{danceClass.duration}</div> <div className={styles.previewPrice}> €{danceClass.price}</div>
</div>








    </div>
 
    <div className={`mb-1 card-text ${styles.previewDescription}`}>{danceClass.description.childMarkdownRemark.rawMarkdownBody}</div>


    <form action="/.netlify/functions/create-checkout" method="post">
          <label for="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value="1"
            min="1"
            max="10"
          />
          <input type="hidden" name="sku" value="DEMO001" />
          <button type="submit">Buy Now</button>
        </form>



    </ListGroup.Item>
 <div className={styles.previewPostpad}> </div>



  </div>
)
