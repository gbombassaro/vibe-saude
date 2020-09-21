import {Button, TextField, Grid, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {map} from 'lodash';

import DoctorCard from './DoctorCard';
import {doctors_list} from '../actions/doctors'
import {skills_list} from '../actions/skills'

const styles = () => ({
  input: {
    width: '100%'
  }
});

const Home = ({classes}) => {

  const [data, setData] = useState({});
  const [skillsList, setSkills] = useState({});
  const [selectData, setSelectData] = useState("");
  const [inputData, setInputData] = useState(null);

  useEffect(() => {
    doctors_list()
      .then(payload => setData(payload))
      .catch(e => console.error(e));

    skills_list()
      .then(payload => setSkills(payload))
      .catch(e => console.error(e));
  }, [])

  const search = () => {
    doctors_list({name: inputData, skills: selectData})
      .then(payload => setData(payload))
      .catch(e => console.error(e))
  }

  const handleInput = ({target}) => {
    setInputData(target.value);
  } 

  const handleSelect = ({target}) => {
    setSelectData(target.value);
  }

  console.log(data);

  return (
    <React.Fragment>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={6}>
          <TextField className={classes.input} onChange={handleInput} label='Pesquisar' variant='outlined' />
          <Button color='primary' variant='contained' onClick={() => search()}>Buscar</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" className={classes.input}>
            <InputLabel id="search-label">Pesquisar por área</InputLabel>
            <Select onChange={handleSelect} labelId="search-label" id="search-by-skill" label="Pesquisar por área">
              {map(skillsList, (item, key) => <MenuItem key={key} value={item}>{item}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={6}>
          {map(data, (item, key) => <DoctorCard key={key} content={item} onClick={() => console.log(`click ${key}`)} />)}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default withStyles(styles)(Home);