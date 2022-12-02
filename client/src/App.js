import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/test.jpg';
import bottom from './images/bottomImage.jpeg';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (<>
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h1" align="center">Memories</Typography>
      <img className={classes.image} src={memories} alt="icon"  width='100%' />
    </AppBar>
    <Container maxWidth="lg">
      
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} >
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid> */}
          </Grid>
          <Grid container spacing={0}>
          <Grid item xs={6} >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              
          </Grid>
          <Grid item xs={6} >
              {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
              <img className={classes.imageBottom} src={bottom} alt="icon"  width='100%' height='93%' />
              
          </Grid></Grid>
          
          

        </Container>
      </Grow>
    </Container>
    </>);
};

export default App;
