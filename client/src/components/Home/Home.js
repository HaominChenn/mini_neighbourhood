import React, {useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';
import useStyles from './styles.js';
import { GoogleLogin } from 'react-google-login';

const Home = () => {
    const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  //a dispatch hook
  const dispatch = useDispatch();
  useEffect(() => {
    //callback function
    dispatch(getPosts());
  }, [dispatch]);

  return (
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
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
