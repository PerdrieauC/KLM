import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';
import '.././css/Home.css';
import Visualisation from './Visualisation';

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="home-page">
        <Box className="box"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                
                '& > *': {
                m: 1,
                },
            }}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                KLM
              </Typography>
              <Typography variant="h5" component="h1">
                Bienvenue dans notre application
              </Typography>
            </Toolbar>
          </AppBar>
          <Tabs value={selectedTab} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Visualisation" sx={{fontSize: '16px'}} />
            <Tab label="Modifier" sx={{fontSize: '16px'}}/>
            <Tab label="Manipulation" sx={{fontSize: '16px'}}/>
          </Tabs>
          {selectedTab === 0 && <Visualisation />}
          {selectedTab === 1 && <ModifierComponent />}
          {selectedTab === 2 && <IAComponent />}
        </Box>
    </div>
  );
};

const ModifierComponent: React.FC = () => {
  return <div>Oups ! Contenu en cours de developpement </div>;
};

const IAComponent: React.FC = () => {
  return <div>Oups ! Contenu en cours de developpement </div>;
};

export default Home;
