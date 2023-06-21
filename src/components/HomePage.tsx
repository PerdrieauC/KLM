import React, { useState, useEffect  } from 'react';
import { Button, Typography, Box, Divider, Paper, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { MuiFileInput } from 'mui-file-input'
import '.././css/HomePage.css';
import jsonData from '.././Data/Cuisine.json';

const HomePage: React.FC = () => {
  useEffect(() => {
    console.log(jsonData);
  }, []);
   
  const [showForm, setShowForm] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleOptionSelect = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleFileChange = (newValue: File | null) => {
      setSelectedFile(newValue);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile) {
      // Vérification de la taille autorisée du fichier (par exemple, 5 Mo)
      const maxFileSize = 5 * 1024 * 1024; // 5 Mo
      if (selectedFile.size > maxFileSize) {
        alert('La taille du fichier dépasse la limite autorisée.');
        return;
      }

      // Effectuer l'upload du fichier et rediriger vers une autre page en cas de succès
      // (vous devez implémenter la logique d'upload et de redirection)
      uploadFile(selectedFile);
    }
  };

  const uploadFile = async (file: File) => {
    try {
      // Votre URL d'upload
      const uploadUrl = './Data';
  
      // Créer un objet FormData pour envoyer le fichier
      const formData = new FormData();
      formData.append('file', file);
  
      // Effectuer la requête POST pour uploader le fichier
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // Rediriger vers une autre page avec un message de succès
        window.location.href = '/success';
      } else {
        // Récupérer le message d'erreur depuis la réponse
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Une erreur s\'est produite lors du téléchargement du fichier.';
        // Afficher une alerte avec le détail de l'erreur
        alert(errorMessage);
      }
    } catch (error) {
      // Afficher une alerte en cas d'erreur lors de la requête d'upload
      alert('Une erreur s\'est produite lors de la requête d\'upload : ' + error);
    }
  };
  

  return (
    <div className="home-page">
        <Box className="box"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,
                },
            }}
        >
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Bienvenue sur notre application !
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                Choisissez une option
            </Typography>
            <Divider />
            <br/>
            <Grid container spacing={6} justifyContent="center">
                <Grid item>
                    <Paper elevation={3} sx={{ padding: '10px' }}>
                        <Button startIcon={<UploadFileIcon />} variant="text" onClick={handleOptionSelect} size="large" className="button_home" fullWidth>
                            Charger une BD
                        </Button>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} sx={{ padding: '10px' }}>
                        <Button startIcon={<AddIcon />} variant="text" size="large" className="button_home" fullWidth>
                            Créer une BD
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            {showForm && (
                <form onSubmit={handleFormSubmit}>
                    <br/>
                    <MuiFileInput value={selectedFile} onChange={handleFileChange} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <Button variant="contained" onClick={handleCancel} color="error">
                          Annuler
                      </Button>
                      <Button variant="contained" type="submit">
                          Valider
                      </Button>
                    </Box>
                </form>
            )}
        </Box>
    </div>    
  );
};

export default HomePage;
