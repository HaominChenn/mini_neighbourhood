import React, {useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import appIcon from './images/appIcon.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js';

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
 
  //a dispatch hook
  const dispatch = useDispatch();
  useEffect(() => {
    //callback function
     dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h3' align='center'>
          Mini Neighborhood
        </Typography>
        <img
          className={classes.image}
          src={appIcon}
          alt='icon'
          width='60'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
          className={classes.mainContainer}
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
