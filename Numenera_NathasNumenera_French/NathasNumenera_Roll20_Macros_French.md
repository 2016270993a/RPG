# MACROS de NATHA pour NUMENERA sur ROLL20

**LISEZ MOI :**

Pour �tre utilis�es, ces macros n�cessitent  :
- les scripts API en fran�ais qui vont bien (NathasNumenera_Roll20_API_French.js) 
- la feuille de personnage adapt�e (NathasNumenera_Roll20_CharacterSheet_Layout_French.htm et NathasNumenera_Roll20_CharacterSheet_CSS.css)
- un pion s�lectionn� qui repr�sente un Personnage 
- la feuille de personnage doit avoir �t� remplie : au moins les Attributs courant et maximum, les atouts, l'�tat g�n�ral et de r�cup�ration, le bonus de r�cup�ration, le co�t de Vivacit� de l'Armure etc.

## +/-:Rob.
_Ajoute ou soustrait des points de Robustesse et v�rifie l'�tat g�n�ral, les marqueurs du pion etc._
```
!nathanum-attrib @{selected|token_id}|might|?{Robustesse +/-|0}
```

## +/-:Viv.
_Ajoute ou soustrait des points de Vivacit� et v�rifie l'�tat g�n�ral, les marqueurs du pion etc._
```
!nathanum-attrib @{selected|token_id}|speed|?{Vivacit� +/-|0}
```

## +/-:Men.
_Ajoute ou soustrait des points de Mental et v�rifie l'�tat g�n�ral, les marqueurs du pion etc._
```
!nathanum-attrib @{selected|token_id}|intellect|?{Mental +/-|0}
```

## Initiative
_Demande d'�ventuels : nombre d'Efforts de Vivacit�, bonus au jet, d�pense de Vivacit� suppl�mentaire (en plus de l'Effort, pour l'utilisation d'une capacit� sp�ciale par exemple). Cela diminuera la Vivacit� (si n�cessaire), v�rifie l'�tat g�n�ral, l'�tat du pion etc. Ensuite, lance 1d20 pour l'initiative, ajoute le pion au Turn Tracker, et affiche le r�sultat dans le Chat._

**ATTENTION :** 
- Ce n'est pas le jet d'initiatve standard de Numen�ra : cela ajoute l'effort au jet de D20, ainsi que le bonus, et ce r�sultat est envoy� au Turn Tracker (pour le pion s�lectionn�)
- Le but est de trier/comparer ce jet entre les PJs et les PNJs (Niveau*3)
- Ne fonctionne que pour les PJs. Pour les PNJs, ajoutez les au Turn Tracker manuellement ou via une macro simple (avec Niveau*3)
- Si utilis�e 2 fois pour un PJ sans vider le Turn Tracker, l'ajoute 2 fois ...
```
!nathanum-initroll @{selected|token_id}|?{Effort de Vivacit�|0}|?{Bonus au jet|0}|?{Co�t suppl�mentaire de Vivacit�|0}
```

## Jet:Robu.
_Jet de Robustesse, demandant les �ventuelles donn�es suivantes : Niveau/Difficult� (pas la Cible !), nombre d'efforts, bonus au jet et d�pense suppl�mentaire d'attribut (utilisation d'une capacit� sp�ciale par exemple). Cela diminuera l'attribut, v�rifiera l'�tat g�n�ral, l'�tat du pion etc. Le jet est calcul�, le succ�s ou l'�chec aussi, et s'affiche (avec un �ventuel effet suppl�mentaire) dans le chat._
```
!nathanum-numeneroll @{selected|token_id}|might|?{Difficult�|0}|?{Effort de Robustesse|0}|?{Bonus au jet|0}|?{Co�t suppl�mentaire|0}
```

## Jet:Viva.
_Jet de Vivacit�, demandant les �ventuelles donn�es suivantes : Niveau/Difficult� (pas la Cible !), nombre d'efforts, bonus au jet et d�pense suppl�mentaire d'attribut (utilisation d'une capacit� sp�ciale par exemple). Cela diminuera l'attribut, v�rifiera l'�tat g�n�ral, l'�tat du pion etc. Le jet est calcul�, le succ�s ou l'�chec aussi, et s'affiche (avec un �ventuel effet suppl�mentaire) dans le chat._
```
!nathanum-numeneroll @{selected|token_id}|speed|?{Difficult�|0}|?{Effort de Vivacit�|0}|?{Bonus au jet|0}|?{Co�t suppl�mentaire|0}
```

## Jet:Ment.
_Jet de Mental, demandant les �ventuelles donn�es suivantes : Niveau/Difficult� (pas la Cible !), nombre d'efforts, bonus au jet et d�pense suppl�mentaire d'attribut (utilisation d'une capacit� sp�ciale par exemple). Cela diminuera l'attribut, v�rifiera l'�tat g�n�ral, l'�tat du pion etc. Le jet est calcul�, le succ�s ou l'�chec aussi, et s'affiche (avec un �ventuel effet suppl�mentaire) dans le chat._
```
!nathanum-numeneroll @{selected|token_id}|intellect|?{Difficult�|0}|?{Effort de Mental|0}|?{Bonus au jet|0}|?{Co�t suppl�mentaire|0}
```

## R�cup.
_Jet de R�cup�ration. V�rifie si le personnage peut encore faire un jet de r�cup�ration, avancera l'�tat de r�cup�ration, jette 1d6 + le bonus de r�cup�ration et affiche le tout dans le chat._

**ATTENTION :** ne demande rien / pas de confirmation ...
```
!nathanum-recoveryroll @{selected|token_id}
```

## Repos
_Repos long. Je sugg�re que cette macro soit r�serv�e au MJ. Cela "reset" le personnage : tous les attributs � leur maximum (moins la r�duction de Vivacit� d�e � l'armure), remet � 0 les r�cup�rations et l'�tat g�n�ral etc._

**ATTENTION :** ne demande rien / pas de confirmation ...
```
!nathanum-restchar @{selected|token_id}
```
