**Note** : there's an english version of the very same sheet/macros/scripts, for those interested.
See [Numenera_NathasNumenera_English](https://github.com/Roll20/roll20-character-sheets/tree/master/Numenera_NathasNumenera_English).

Bas�e sur la feuille de personnage "Numenera" d�j� pr�sente sur Roll20 (merci aux auteurs originaux), cette version a une mise en page et des attributs diff�rents, et peut �tre utilis�e avec des scripts d'API et macros associ�es (voir ci-dessous).
Voir en fin de fichier pour les notes de versions.

# Utilisation basique : 

## Mettre en place la feuille de personnage
1. Dans la campagne Roll20 concern�e, cliquer sur _"Voir les d�tails"_
2. Cliquer sur _"Campaign Settings"_
3. Descendre dans la page de Settings jusqu'� voir _"Character Sheet Template"_
4. Dans la liste d�roulante, choisir _"Custom"_
5. Dans l'onglet _"HTML Layout"_, coller le contenu de _"NathasNumenera_Roll20_CharacterSheet_Layout_French.htm"_
6. Dans l'onglet _"CSS Styling"_, coller le contenu de _"NathasNumenera_Roll20_CharacterSheet_CSS.css"_
7. Descendre en bas de la page et cliquer sur _"Save Changes"_

## Cr�er un personnage
1. Cr�er un _"Character"_ dans le journal
2. Remplir le nom, et dans l'onglet _"Character Sheet"_, remplir � minima les 3 Attributs (Valeur et Max) : Robustesse, Vivacit� et Mental
3. Utiliser un pion (token)et : (voir la capture d'�cran _"NathasNumenera_setup_the_character_token.jpg"_)
  1. S'assurer que le pion repr�sente le personnage
  2. S�lectionner l'attribut _"might"_ pour la bar 1
  3. S�lectionner l'attribut _"speed"_ pour la bar 2
  4. S�lectionner l'attribut _"intellect"_ pour la bar
4. S�lectionner le pion
5. Modifier le personnage (_"Edit"_) et cliquer _"Use Selected token"_ dans _"Default Token"_
6. Cliquer _"Save Changes"_
8. R�p�ter les �tapes 1 � 6 pour les autres personnages.

# Utilisation avanc�e : 
1. Mettre en place le HTML et le CSS pour la feuille de personnage (cf. Utilisation basique)
2. Mettre en place les scripts API :
  1. Dans la page d'affichage du d�tail de la campagne concern�e, cliquer sur _"API Scripts"_
  2. S'il existe d�j� d'autres scripts que vous avez ajout�s, cliquer sur _"New Script"_
  3. Donner un nom au script dans _"Name"_ (par exemple : _"NathasNumenera"_)
  4. Dans la section noire de script, coller le contenu de _"NathasNumenera_Roll20_API_French.js"_
  5. Cliquer sur _"Save Script"_
3. D�marrer la campagne et cr�er les macros (voir le fichier _"NathasNumenera_Roll20_Macros_French.md"_)
4. Cr�er une personnage  et associer un pion (cf. Utilisation basique) 
5. **COMPLETER LA FEUILLE DE PERSONNAGE** (important) : en plus des Attributs (valeur et max), � minima renseigner les Atouts (m�me si �gaux � 0), le bonus de R�cup�ration, la r�duction de Vivacit� d�e � l'armure (m�me si �gale � 0), l'�tat de R�cuparation (cliquer sur "1 Action"), l'�tat g�n�ral (cliquer sur "Normal")
6. S�lectionner le pion et tester une macro. Si rien ne passe, tenter de d�sactiver/r�activer le script API et recommencer.
7. R�p�ter les �tapes 4 � 6 pour les autres personnages.

# Notes de version

## Version 2.01 (29/07/2014)
1. Mise � jour de **NathasNumenera_Roll20_CharacterSheet_Layout_French.htm** :
  1. Section "Avancement" plus d�taill�es, avec un attribut par avancement et par tiers.
  2. Vous pouvez supprimer des personnages existants les attributs xp-stats, xp-edge etc... qui ne seront plus utilis�s.
2. Refonte et traduction du "ReadMe.md"
3. Nouvelle capture d'�cran / feuille
4. Mise � jour de sheet.json pour int�grer la nouvelle capture d'�cran
5. Remplacement du fichier texte (.txt) des macros par un fichier markdown (.md) pour une meilleure lisibilit� sur Github ("NathasNumenera_Roll20_Macros_French.md")
