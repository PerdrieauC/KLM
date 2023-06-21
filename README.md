# Présentation du projet

Le Knowledge Lifecycle Management (KLM) est une approche systématique pour la gestion des connaissances au sein d'une organisation. Il englobe la création, l'organisation, le partage, l'utilisation et la préservation des connaissances tout au long de leur cycle de vie![image](https://github.com/PerdrieauC/KLM/assets/85830004/faebc75d-9c1d-49b3-91dd-b2fddfc7a5e6)

## Etat du projet

Actuellement, la plateforme permet de visualiser le contenu du fichier json contenant les données liées à une filière metier. Pour tester, vu qu'aucun déploiement n'a été fait pour le moment faute de ressources, il faudra procéder comme suit :
### 1- Installer le projet en local soit en faisant un git clone soit en téléchargeant le projet directement
### 2- Ouvrir le projet, se placer à la racine et saisir : ### `npm install`
### 3- Une fois les dépendances installées grâce à la précédente commande, taper la commande : ### `npm start`
### 4- Ouvrir  [http://localhost:3000](http://localhost:3000) sur votre navigateur

## Comment changer de source de données :

### 1- Mettre votre fichier json dans le dossier src > Data
### 2- Remplacer la ligne 5 du fichier Components>Visualisation.tsx en mettant le bon nom de votre fichier

## Apercu de rendu
![image](https://github.com/PerdrieauC/KLM/assets/85830004/9382b14d-c61f-4601-ad32-7ddceebaa8c5)

## Travail restant : 
Faute de temps nous n'avons pas pu couvrir l'ensemble des fonctionnalités voulues. Pour une meilleure reprise du projet nous suggérons de procéder ainsi :

### 1- Développer l'onglet `Modification` en vue de permettre aux utilisateurs de modifier directement leur json dans l'application
### 2- Développer l'onglet `Manipulation` en vue de permettre à l'utilisateur d'exploiter les connaissances de manière effficace. Ex : le cas de l'affichage du vocabulaire sous forme de graphe
### 3- Mettre en place la gestion des profils utilisateurs


## Participants : 
### 1- Clément PERDRIEAU
### 2- Amiti MALSOR
### 3- Osée Brayan TCHAPPI
##
