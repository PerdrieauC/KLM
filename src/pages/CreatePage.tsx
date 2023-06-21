import React from 'react';
import { Typography } from '@mui/material';

const CreatePage: React.FC = () => {
  return (
    <div>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Page de création
      </Typography>
      <Typography variant="body1" align="center">
        Contenu de la page de création...
      </Typography>
    </div>
  );
};

export default CreatePage;