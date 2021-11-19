import { React } from 'react';
import classes from './Header.module.scss'

const Header = () => { 
    return (
        <div className={classes.header}>
            <div className={classes.logo}><img src="../../logo.png"/></div>
            <div className={classes.slogan}>Smart Craft In Monolith</div>
            <div className={classes.description}>
                <img src="../../images/discord.svg"/> <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="3522Q6LWN3YKU" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>

    );
}

export default Header;