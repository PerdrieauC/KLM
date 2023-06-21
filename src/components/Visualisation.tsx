// Importez les classes nécessaires
import { FilliereMetier } from '.././Model/FilliereMetier/FilliereMetier';

// Importez le fichier JSON
import data from '.././Data/Cuisine.json';
import { DomaineCompetence } from '../Model/DomaineCompetence/DomaineCompetence';
import { VocabulaireMetier } from '../Model/Connaissances/VocabulaireMetier/VocabulaireMetier';
import { Terme } from "../Model/Connaissances/VocabulaireMetier/Terme";
import { Lien } from "../Model/Connaissances/VocabulaireMetier/Lien";
import { useState } from 'react';
import { Box, Button, Typography, Divider, Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Procedural } from '../Model/Connaissances/Procedural/Procedural';
import { Etape } from '../Model/Connaissances/Procedural/Etape';
import { Experimental } from '../Model/Connaissances/Experimental/Experimental';
import { ExpertiseMetier } from '../Model/Connaissances/ExpertiseMetier/ExpertiseMetier';
import { Regle } from '../Model/Connaissances/ExpertiseMetier/Regle';

const Visualisation: React.FC = () => {
    const filiereMetier: FilliereMetier = new FilliereMetier(
        data.filliereMetier.nom,
        data.filliereMetier.domaineMetier.map((domaine: any) => {
        // Vous pouvez ajouter d'autres classes ici pour les propriétés imbriquées, comme Vocabulaire, Procedural, ExpertiseMetier, Experimental
            return new DomaineCompetence(
                domaine.nom,
                new VocabulaireMetier(
                    domaine.Vocabulaire.map((terme: any) => {
                        return new Terme(
                            terme.id,
                            terme.nom,
                            terme.description,
                            terme.Lien.map((lien: any) => {
                                return new Lien(
                                    lien.terme,
                                    lien.type
                                );
                            })
                        );
                    }),
                ),
                domaine.Procedural.map((proc: any) => {
                    return new Procedural(
                        proc.nom,
                        proc.description,
                        proc.etape.map((step: any) => {
                            return new Etape(
                                step.numero,
                                step.description
                            );
                        })
                    );
                }),
                domaine.Experimental.map((exp: any) => {
                    return new Experimental(
                        exp.nom,
                        exp.description,
                        exp.type,
                    );
                }),
                domaine.ExpertiseMetier.map((exper: any) => {
                    return new ExpertiseMetier(
                        exper.nom,
                        exper.description,
                        exper.regles.map((rule: any) => {
                            return new Regle(
                                rule.nom,
                                rule.expression,
                                rule.type
                            );
                        })
                    );
                }),
            );
        })
    );

    const [expandedDom, setExpandedDom] = React.useState<string | false>(false);

    const handleDomChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedDom(isExpanded ? panel : false);
    };

    const [expandedCon, setExpandedCon] = React.useState<string | false>(false);

    const handleConChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedCon(isExpanded ? panel : false);
    };

    console.log(filiereMetier);

    return (
        <Box component="div" 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
            }}
        >
            <Typography variant="h4" component="h2" sx={{fontWeight: 'bold', margin: '30px 10px 10px'}}>
                Filière metier : {filiereMetier.nom}
            </Typography>
            {filiereMetier.domaine.map((domaine, index) => (
                <Accordion expanded={expandedDom === 'Domaine' + index} onChange={handleDomChange('Domaine' + index)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id={'Domaine' + index}
                    >
                        <Typography sx={{fontWeight: 'bold'}}>
                            Domaine : {domaine.nom}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Accordion expanded={expandedCon === 'Vocabulaire'} onChange={handleConChange('Vocabulaire')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="Vocabulaire"
                            >
                                <Typography sx={{ width: '15%', flexShrink: 0, fontWeight: 'bold' }}>
                                    {domaine.vocabulaire.nom}
                                </Typography>
                                <Typography>{domaine.vocabulaire.description}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {domaine.vocabulaire.nb_termes() > 0 && 
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {Object.entries(domaine.vocabulaire.termes).map(([cle, valeur]) => (
                                            <><ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={valeur.getNom()}
                                                    secondary={
                                                        <><React.Fragment>
                                                                {valeur.getDesc()}
                                                                <br />
                                                                Lien (s) :
                                                                {valeur.getLiens().length > 0 &&
                                                                    <ul>
                                                                        {valeur.getLiens().map((lien) => (
                                                                            <li>
                                                                                {lien.getType()} : 
                                                                                {(domaine.vocabulaire.getTerme(lien.getIdTerme())).getNom()} 
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                }
                                                            </React.Fragment></>
                                                            }
                                                            />
                                                </ListItem>
                                            <Divider variant="inset" component="li" /></>
                                        ))}
                                        
                                        
                                    </List>
                                }
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedCon === 'Procedures'} onChange={handleConChange('Procedures')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="Procedures"
                            >
                                <Typography sx={{ width: '15%', flexShrink: 0, fontWeight: 'bold' }}>
                                    Procédures
                                </Typography>
                                <Typography>Elles décrives les différentes connaissances procédurales du domaine</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {domaine.procedures.length > 0 && 
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {domaine.procedures.map((proc) => (
                                            <><ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={proc.nom}
                                                    secondary={
                                                        <><React.Fragment>
                                                                {proc.description}
                                                                <br />
                                                                Liste des étapes :
                                                                {proc.Etapes.length > 0 &&
                                                                    <ul>
                                                                        {proc.Etapes.map((etape) => (
                                                                            <li>
                                                                                {etape.numero} : 
                                                                                {etape.description} 
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                }
                                                            </React.Fragment></>
                                                            }
                                                            />
                                                </ListItem>
                                            <Divider variant="inset" component="li" /></>
                                        ))}
                                        
                                        
                                    </List>
                                }
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedCon === 'Experiences'} onChange={handleConChange('Experiences')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="Experiences"
                            >
                                <Typography sx={{ width: '15%', flexShrink: 0, fontWeight: 'bold' }}>
                                    Experiences
                                </Typography>
                                <Typography>Elles décrives les différentes connaissances expérimentales du domaine</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {domaine.experiences.length > 0 && 
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {domaine.experiences.map((exp) => (
                                            <><ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={exp.nom}
                                                    secondary={
                                                        <><React.Fragment>
                                                                {exp.description}
                                                                <br />
                                                                Type : {exp.type}
                                                            </React.Fragment></>
                                                            }
                                                            />
                                                </ListItem>
                                            <Divider variant="inset" component="li" /></>
                                        ))}
                                        
                                        
                                    </List>
                                }
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedCon === 'Expertises'} onChange={handleConChange('Expertises')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="Expertises"
                            >
                                <Typography sx={{ width: '15%', flexShrink: 0, fontWeight: 'bold' }}>
                                Expertises
                                </Typography>
                                <Typography>Elles décrives les différentes connaissances liées aux expertises du domaine</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {domaine.expertises.length > 0 && 
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {domaine.expertises.map((exp) => (
                                            <><ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={exp.nom}
                                                    secondary={
                                                        <><React.Fragment>
                                                                {exp.description}
                                                                <br />
                                                                Liste des règles :
                                                                {exp.regles.length > 0 &&
                                                                    <ul>
                                                                        {exp.regles.map((rule) => (
                                                                            <li>
                                                                                {rule.nom} ({rule.type}) : 
                                                                                {rule.expression} 
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                }
                                                            </React.Fragment></>
                                                            }
                                                            />
                                                </ListItem>
                                            <Divider variant="inset" component="li" /></>
                                        ))}
                                        
                                        
                                    </List>
                                }
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default Visualisation;