import React from 'react';
import PropTypes from 'prop-types';
import {Card} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    cursor: 'pointer',
    marginBottom: theme.spacing(1),
    '&:hover': {
      borderColor: 'rgba(0, 0, 0, 0.87)'
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const BookCard = ({classes, content, onClick}) => {
  const {name, date, patient, status} = content;
  console.log(`content`, content)
  return (
    <Card variant='outlined' className={classes.card} onClick={onClick}>
      <pre>{name}</pre>
      <pre>{date}</pre>
      <pre>{patient}</pre>
      <pre>{status}</pre>
    </Card>
  );
};

BookCard.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(BookCard);