import React from 'react'
//import styles from './navigation.module.css'



import MenuButton from './menu-button'
import Menu from './menu'
import { Container, Col, Row } from 'react-bootstrap'
import {Link} from 'gatsby'
import styles from './menu-button.module.css'
import { IconContext } from "react-icons";
import { FiShoppingCart } from 'react-icons/fi'
import MenuContainer from './menu-container'






export default () => (
<Container className={styles.navigationBar} fluid>
<Row>
    <Col className={styles.navMenuContainer}>
    <MenuContainer />
</Col>

    <Col className={styles.navbarMenu} xs={6}>
<Link to="/">
<div className="sign">Paris <span className="flicker">M</span><span className="flicker">oves</span></div>
</Link>
</Col>
    
<Col className={styles.rightMenu}>
<Link to="/" className={styles.langLink} activeClassName={styles.activeLang}>EN</Link> 
<Link to="/blankslate/" className={styles.langLink} activeClassName={styles.activeLang}>FR</Link>
<IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
<span><Link to="#" className={styles.cartLink}><FiShoppingCart /></Link></span>
</IconContext.Provider>
</Col></Row>
</Container>
)
