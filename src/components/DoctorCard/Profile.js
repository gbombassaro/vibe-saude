import {Box} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import React from 'react';

const styles = () => ({
  image: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: '#9e9e9e',
  },
});

const ProfileImage = ({classes, marginSize}) => {
  return (
    <Box mr={marginSize}>
      <div className={classes.image} />
    </Box>
  );
};

export default withStyles(styles)(ProfileImage);