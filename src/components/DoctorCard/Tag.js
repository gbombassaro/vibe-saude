import {Box, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
  tags: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
    padding: theme.spacing(0.5, 1, 0.5, 1),
    marginRight: theme.spacing(1),
    width: 'max-content'
  }
});

const Tag = ({classes, children}) => {
  return (
    <Box className={classes.tags}>
      <Typography variant='subtitle2' color='secondary'>
        {children}
      </Typography>
    </Box>
  );
};

export default withStyles(styles)(Tag);