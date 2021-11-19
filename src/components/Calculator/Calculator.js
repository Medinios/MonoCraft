import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from './Calculator.module.scss'
import WeaponsList from './WeaponsList/WeaponsList';
import Button from '@mui/material/Button';
import { ApplicationContext } from '../../store';
import ChunkPrices from './ChunkPrices/ChunkPrices';

const Calculator = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const WEAPONS_DATA = [{"id":1, "name":"G3A3","bars":{"copper":5,"iron":17, "steel":12, "silver":11}},
    {"id":2, "name":"BT MP9","bars":{"copper":2,"iron":15, "steel":5, "silver":7, "gold":7, "titanium":2, "wood":2}} ,
    {"id":3, "name":"Honey Badger","bars":{"copper":14,"iron":15, "steel":11, "silver":2, "gold":11}} ,
    {"id":4, "name":"SCAR-H","bars":{"copper":16,"iron":16, "steel":8, "silver":2}} ,
    {"id":5, "name":"M249","bars":{"copper":14,"iron":16, "steel":8, "silver":2, "gold":13, "titanium":1}} ,
    {"id":6, "name":"Mosin Nagant","bars":{"copper":8, "iron":14, "steel":20, "silver":22, "gold":2, "willow":3}} ,
    {"id":7, "name":"M14","bars":{"iron":14, "steel":17, "silver":20, "gold":8, "titanium":5, "willow":3}} ,
    {"id":8, "name":"M3 Super 90","bars":{"iron":16, "steel":7, "silver":10, "gold":8, "maple":3}} ,
    {"id":9, "name":"M4 Carbine","bars":{"copper":15,"iron":16, "steel":10, "silver":10, "gold":11, "titanium":1}} ,
    {"id":10, "name":"IMI Galil","bars":{"copper":5,"iron":19, "steel":9, "silver":10, "titanium":1}} ,
    {"id":11, "name":"ACR-E","bars":{"copper":17,"iron":18, "steel":12, "gold":10, "titanium":2}} ,
    {"id":12, "name":"CK Gas Granade","bars":{"copper":10,"iron":10, "steel":7, "gold":10, "titanium":2}} ,
    {"id":13, "name":"KSG-12 Shotgun","bars":{"iron":18, "steel":15, "silver":10, "gold":8, "titanium":5, "maple":3}} ,
    {"id":14, "name":"Aug A3","bars":{"copper":17,"iron":16, "steel":14, "silver":10, "gold":13, "titanium":4}} ,
    {"id":15, "name":"XM8","bars":{"copper":11,"iron":11, "steel":14, "silver":22, "gold":13, "titanium":7}}];
    

    const { state, dispatch } = useContext(ApplicationContext);
    const [weaponsList, setWeaponList] = React.useState([]);

    const [amount, setAmount] = React.useState(0);
    const [weaponData, setWeaponData] = React.useState();

    const setAmountHandler = (event) => {
        setAmount(event.target.value);
      };

    const setWeaponHandler = (event) => {
        const weapon = WEAPONS_DATA.filter((x) => x.id == event.target.value);
        setWeaponData(weapon);
    };

    const addWeaponToCartHandler = () => {
        debugger
        dispatch({type: 'add_weapon', payload: {amount: amount , data:weaponData}});
        // setWeaponList([...weaponsList, {amount: amount , data:weaponData}]);
    }

    return (
        <div>
            <div className={classes.calculatorBlock}>
            <FormControl className={classes.selectForm}>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={amount}
                label="Amount"
                onChange={setAmountHandler}
            >
                {numbers.map((number) => {
                    return <MenuItem value={number}>{number}</MenuItem>  
                })}
            </Select>
            </FormControl>
            <FormControl className={classes.selectForm}>
            <InputLabel id="demo-simple-select-label">Weapon</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={weaponData}
                label="Weapon"
                onChange={setWeaponHandler}
            >
                 {WEAPONS_DATA.map((weapon) => {
                    return <MenuItem value={weapon.id}>{weapon.name}</MenuItem>  
                })}
            </Select>
            </FormControl>
            <Button variant="outlined" onClick={addWeaponToCartHandler}>Add To Basket</Button>
            </div>
            <div><small><b>Hint:</b> Choose your weapon and the amount and add to basket</small></div>
            <ChunkPrices></ChunkPrices>
        { state.weapons.length > 0 && <div className="weaponsList">
            <WeaponsList></WeaponsList>
        </div>}
        </div>
        
    );
}

export default Calculator;