import {Box, Card, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Profile from './Profile';
import Tag from './Tag';

const styles = () => ({
  card: {
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'rgba(0, 0, 0, 0.87)'
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const DoctorCard = ({classes, content}) => {
  const {name, skills} = content;
  return (
    <Card variant='outlined' className={classes.card}>
      <Box p={2} className={classes.row}>
        <Profile marginSize={4} />
        <Box>
          <Typography variant='h4'>{name}</Typography>
          <Box mt={1} className={classes.row}>
            {map(skills, (item, key) => <Tag key={key}>{item}</Tag>)}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

DoctorCard.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired
};

export default withStyles(styles)(DoctorCard);