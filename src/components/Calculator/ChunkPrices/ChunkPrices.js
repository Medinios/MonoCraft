import React, { useContext } from 'react'
import classes from './ChunkPrices.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ApplicationContext } from '../../../store';
import FormControl, { useFormControl } from '@mui/material/FormControl';


const ChunkPrices = (props) => {
    const { state, dispatch } = useContext(ApplicationContext);

    const [localState, setState] = React.useState({
        copper: 0,
        silver: 0,
        iron: 0,
        steel: 0,
        titanium: 0,
        gold: 0
    });

    const changePricesHandler = () => {
        debugger
        dispatch({type:'change_prices', payload:localState});
    }
    
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
          ...localState,
          [evt.target.name]: value
        });
      }
    return (
        <div>
          <h3>Chunk Prices</h3>
          <div  className={classes.chunkBody}>
          <FormControl sx={{ width: '10ch' }}>
            <TextField id="standard-basic" name="copper" label="Copper" value={localState.copper} variant="outlined" onChange={handleChange}/>
          </FormControl>
          <FormControl sx={{ width: '10ch' }}>
            <TextField id="standard-basic" name="iron" label="Iron" value={localState.iron} variant="outlined" onChange={handleChange}/>
          </FormControl>
          <FormControl sx={{ width: '10ch' }}>
            <TextField id="standard-basic" name="steel" label="Steel" value={localState.steel} variant="outlined" onChange={handleChange}/>
          </FormControl>
          <FormControl sx={{ width: '10ch' }}>
            <TextField id="standard-basic" name="silver" label="Silver" value={localState.silver} variant="outlined" onChange={handleChange}/>
          </FormControl>
          <FormControl sx={{ width: '10ch' }}>
            <TextField id="standard-basic" name="gold" label="Gold" value={localState.gold} variant="outlined" onChange={handleChange}/>
          </FormControl>
          <FormControl sx={{ width: '10ch' }}>
            <TextField id="standard-basic" name="titanium" label="Titanium" value={localState.titanium} variant="outlined" onChange={handleChange}/>
          </FormControl>
          <Button variant="outlined" onClick={changePricesHandler}>Change Prices</Button>
          </div>
        </div>
    )
}

export default ChunkPrices