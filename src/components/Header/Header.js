import { React } from 'react';
import classes from './Header.module.scss'

const Header = () => { 
    return (
        <div className={classes.header}>
            <div className={classes.logo}><img src="../../logo.png"/></div>
            <div className={classes.slogan}>Smart Craft In Monolith</div>
        </div>

    );
}

export default Header;