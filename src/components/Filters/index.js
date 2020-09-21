import React, {useEffect, useState} from 'react';
import {Button, TextField, Grid, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {skills_list} from '../../actions/skills'
import {map} from 'lodash';

const styles = () => ({
  root: {
    width: '100%'
  }
});

const Filters = ({classes, onSearch}) => {

  const [skillsList, setSkills] = useState({});
  const [selectData, setSelectData] = useState("");
  const [inputData, setInputData] = useState(null);

  useEffect(() => skills_list().then(payload => setSkills(payload)).catch(e => console.error(e)), [])

  const handleClick = () => {
    onSearch({name: inputData, skills: selectData});
  }

  const handleInput = ({target}) => {
    setInputData(target.value);
  } 

  const handleSelect = ({target}) => {
    setSelectData(target.value);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField className={classes.root} onChange={handleInput} label='Pesquisar' variant='outlined' />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormControl variant="outlined" className={classes.root}>
          <InputLabel id="search-label">Pesquisar por área</InputLabel>
          <Select onChange={handleSelect} labelId="search-label" id="search-by-skill" label="Pesquisar por área">
            {map(skillsList, (item, key) => <MenuItem key={key} value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Button onClick={handleClick} color='primary' variant='contained'>Pesquisar</Button>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Filters);