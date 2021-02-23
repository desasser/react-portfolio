import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import myPic from '../../assets/me.jpg';
import './style.css';
import IconSet from '../IconSet';
// import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: "#ffbd45"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src={myPic} className="sidebar-image" />
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <ListItem>
          <ListItemText primary='Daniel' className="sidebar-name" />
        </ListItem>
      </Link>
      <List className="sidebar-list">
        {['Home', 'Projects', 'Contact'].map((text, index) => (
          <Link key={text} to={"/" + text} style={{ textDecoration: 'none' }} >
            <ListItem button >
              <ListItemText primary={text} className="sidebar-text" />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className="sidebar-position">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="sidebar-button">Explore</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} classes={{ paper: classes.paper }}>
            {list(anchor)}
            <div className="sidebar-footer">
              <IconSet />
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}