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
import styled, { css } from 'styled-components';
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

  const StyledIconSet = styled(IconSet)`
  color:pink;
  font-size:3em;
  position:relative !important;
  bottom: 200px;
  left: 40px;
  `;

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
      <List className="sidebar-list">
        {['Home', 'Projects', 'Contact'].map((text, index) => (
          <Link to={"/" + text } style={{ textDecoration: 'none' }} >
            <ListItem button key={text}>
              <ListItemText primary={text} className="sidebar-text" />
            </ListItem>
          </Link>
        ))}
        {/* <StyledIconSet /> */}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="sidebar-open">Explore</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} classes={{paper: classes.paper}}>
            {list(anchor)}
          <StyledIconSet />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}