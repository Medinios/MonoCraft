import Weapon from "./Weapon/Weapon";
import { Fragment, useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import classes from './WeaponsList.module.scss';

const WeaponsList = (props) => {
    const [bars , setTotalBars] = useState({});
    const [amount , setWeaponAmount] = useState(0);


    useEffect(() => {
        let total = bars;
        let sumOfWeapons = amount;
        if (!props.weapons || props.weapons.length == 0) return ;

        const weapon = props.weapons[props.weapons.length - 1];
        sumOfWeapons += weapon.amount;
        const weaponKeys = Object.keys(weapon.data[0].bars);
        weaponKeys.map((key) => {
            if(bars.hasOwnProperty(key)) {
                total[key] += weapon.data[0].bars[key];
            } else {
                total[key] = weapon.data[0].bars[key];
            }
        });
        setTotalBars(total);   
        setWeaponAmount(sumOfWeapons);
    }, [props.weapons]);


    return (
        <Fragment>
        <div className={classes.weapons}>
            <div className={classes.weaponsList}>
            <h2>Shopping List:</h2>
            {props.weapons.map((weapon) => {
                    return <Weapon weapon={weapon}></Weapon>
            })}
            </div>
            <div className={classes.total}>
            <h2>Total for your Order: </h2>
            <b>Total Weapons :</b> {amount}
            {bars && Object.keys(bars).map((bar) => {
                return <div><b>{bar.charAt(0).toUpperCase() + bar.slice(1)} : </b> {bars[bar]} ({bars[bar] * 1.5} chunks)</div>
            })}
            </div>
        </div>
        </Fragment>
    );
}

export default WeaponsList;