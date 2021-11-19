import Weapon from "./Weapon/Weapon";
import { Fragment, useEffect, useState, useContext} from "react";
import classes from './WeaponsList.module.scss';
import { ApplicationContext } from '../../../store';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

const WeaponsList = (props) => {
    const { state, dispatch } = useContext(ApplicationContext);

    const clearListHandler = () => {
        dispatch({type: "clear_all_list", payload: null});
    }


    return (
        <Fragment>
        <div className={classes.weapons}>
            <div className={classes.weaponsList}>
            <h2 className={classes.shoppingListHeader}>Shopping List: 
                <Tooltip title="Clear List">
                    <span onClick={clearListHandler}>x</span>
                </Tooltip>
            </h2>
            {state.weapons.map((weapon) => {
                    return <Weapon weapon={weapon}></Weapon>
            })}
            </div>
            <div className={classes.total}>
            <h2>Total for your Order: </h2>
            <b>Total Weapons :</b> {state.amount}
            {state.bars && Object.keys(state.bars).map((bar) => {
                return <div><b>{bar.charAt(0).toUpperCase() + bar.slice(1)} : </b> {state.bars[bar]} ({state.bars[bar] * 1.5} chunks)</div>
            })}
            <b>Total Price:</b> <Chip label={`${state.totalPrice} $`} color="primary" />
            </div>
        </div>
        </Fragment>
    );
}

export default WeaponsList;