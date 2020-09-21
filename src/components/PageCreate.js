import React from 'react';
import {map} from 'lodash';

import {Select, MenuItem} from '@material-ui/core';

import BookCard from './BookCard';

import {books_create, books_list} from '../actions/books'
import {doctors_list} from '../actions/doctors'
import {patients_list} from '../actions/patients'
import {skills_list} from '../actions/skills'

const PageCreate = () => {
  
  const [selected_doctor, select_doctor] = React.useState("");
  const [selected_patient, select_patient] = React.useState("");

  const [items, set_items] = React.useState([]);
  const [doctors, set_doctors] = React.useState([]);
  const [patients, set_patient] = React.useState([]);
  const [skills, set_skills] = React.useState([]);

  React.useEffect(() => {
    books_list().then(payload => set_items(payload))
    doctors_list().then(payload => set_doctors(payload))
    patients_list().then(payload => set_patient(payload))
    skills_list().then(payload => set_skills(payload))
  }, [])
  
  const selectDoctor = ({target}) => select_doctor(target.value)
  const selectPatient = ({target}) => select_patient(target.value)

  const create_new_book = () => {
    let object = {"name": selected_doctor, "patient": selected_patient, "date": new Date(), status: 'Open'}
    books_create(object)
  }

  if(!items)
    return <pre>no-items</pre>

  return (
    <div style={{width: '100%', height: 100}}>
      
      <pre>Doctors {doctors.length}</pre>
      <pre>Patients {patients.length}</pre>
      <pre>Skills {skills.length}</pre>

      <Select onChange={selectDoctor} label="Doctor">
        <MenuItem value={selected_doctor}>Select Doctor</MenuItem>
        {map(doctors, (item, key) => 
          <MenuItem key={key} value={item.name}>{item.name}</MenuItem>)}
      </Select>

      <br /><br />

      <Select onChange={selectPatient} label="Patient">
        <MenuItem value={selected_patient}>Select Patient</MenuItem>
        {map(patients, (item, key) => 
          <MenuItem key={key} value={item.name}>{item.name}</MenuItem>)}
      </Select>

      <pre onClick={() => create_new_book()}>Agendar nova consulta</pre>
    </div>
  );
};

export default PageCreate;