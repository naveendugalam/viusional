/* eslint-disable no-unused-vars */
import { ClassNames } from '@emotion/react';
import {
    Divider, List, ListItemButton, ListItemIcon, ListItemText, Tooltip,
  } from '@mui/material';
  import { makeStyles } from '@mui/styles';
  import React from 'react';
  import { Link, useLocation } from 'react-router-dom';
//   import { useTranslation } from '../Components/LocalizationProvider';
  
  const MenuItem = ({
    title, link, icon, selected,
  }) => (
    <ListItemButton key={link} component={Link} to={link} selected={selected}>
      <ListItemText primary={title} />
    </ListItemButton>
  );
  
  const useStyles = makeStyles((theme) => ({
  
    bottomMenu: {
      backgroundColor: '#0a1723 !importent',
    },
  }));
  
  const MainMenu = () => {
    const location = useLocation();
    // const t = useTranslation();
  
    return (
      <>
        <List sx={{width: "200px", paddingTop: 0, position: "sticky", top: 0, left: 0, zIndex: "10000", backgroundColor: "#0a1723", color: "#fff", marginLeft: "-1px", borderRight: "3px solid #0a1723"}} >
        <div style={{backgroundImage: `url(${require("../Components/Assets/LogoImage2.png")})`, height: "23px", width: "74%", marginLeft: "24px",marginBottom: "13px", marginTop:"13px", backgroundSize: "contain"}} />
            <div className='bottomMenu'>
                <MenuItem
                    // title={t('sharedFiles')}
                    title="Home"
                    link="/home"
                    selected={location.pathname === '/home'}
                />
                <MenuItem
                    // title={t('sharedFiles')}
                    title="Files"
                    link="/files"
                    selected={location.pathname === '/files'}
                />
                <MenuItem
                    //   title={t('sharedIncidents')}
                    title="Incidents"
                    link="/incidents"
                    selected={location.pathname.startsWith('/incidents')}
                />
                <MenuItem
                    //   title={t('sharedMap')}
                    title="Map"
                    link="/Map"
                    selected={location.pathname.startsWith('/map')}
                />
            </div>
        </List>
      </>
    );
  };
  
  export default MainMenu;
  