import * as React from 'react';
import classes from './Weapon.module.scss';
import Chip from '@mui/material/Chip';

const Weapon = (props) => {
    const weaponKeys = Object.keys(props.weapon.data[0].bars); 
    return (
        <div className={classes.weapon}>
            <b>Name: </b> {props.weapon.data[0].name.charAt(0).toUpperCase() + props.weapon.data[0].name.slice(1)}
            <b>Amount: </b> {props.weapon.amount}
            <b>Recipe: </b> {weaponKeys.map((res)=> {
                return <div><Chip label={`${props.weapon.data[0].bars[res] * props.weapon.amount} ${res}`} variant="outlined"/></div>;
            })}
        </div>
    )
}

export default Weapon