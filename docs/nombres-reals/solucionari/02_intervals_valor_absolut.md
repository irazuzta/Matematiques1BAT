# Solucionari — Intervals i valor absolut

Resolució pas a pas dels exercicis 6–24 de [Exercicis i problemes](../exercicis.md).
Teoria: [Intervals i valor absolut](../03_intervals_valor_absolut.md).

### Exercici 6

> **Enunciat.** Escriu en forma d'interval, classifica'l (obert, tancat, semiobert, semirecta) i representa'l sobre la recta real: a) Nombres reals més grans que $2$ i menors o iguals que $7$. · b) Nombres reals menors que $-1$. · c) Nombres reals més grans o iguals que $0$. · d) Nombres reals entre $-3$ i $3$, ambdós inclosos.

**a)** La condició és $2<x\leq 7$. El $2$ queda exclòs (desigualtat estricta) i el $7$ inclòs, així que l'interval és obert a l'esquerra i tancat a la dreta: un interval semiobert. Sobre la recta, marquem un punt buit en el $2$, un punt ple en el $7$ i pintem el tros que hi ha entre tots dos.

**Resposta:** $(2,7]$, semiobert.

**b)** La condició és $x<-1$. No hi ha cota per l'esquerra, de manera que és una semirecta. L'extrem $-1$ no hi pertany (punt buit) i pintem cap a l'esquerra.

**Resposta:** $(-\infty,-1)$, semirecta (oberta).

**c)** La condició és $x\geq 0$. Ara l'extrem $0$ sí que hi pertany (punt ple) i pintem cap a la dreta, sense límit.

**Resposta:** $[0,+\infty)$, semirecta (tancada).

**d)** «Entre $-3$ i $3$, ambdós inclosos» vol dir $-3\leq x\leq 3$. Els dos extrems hi són (punts plens) i pintem el segment que els uneix.

**Resposta:** $[-3,3]$, interval tancat.

### Exercici 7

> **Enunciat.** Per a cada interval, indica'n el tipus, escriu la desigualtat equivalent i representa'l sobre la recta real: a) $[-3,5)$ · b) $(2,+\infty)$ · c) $(-\infty,4]$ · d) $(0,1)$

Recordem que el claudàtor inclou l'extrem (punt ple) i el parèntesi l'exclou (punt buit).

**a)** Claudàtor a l'esquerra i parèntesi a la dreta: l'extrem $-3$ hi és i el $5$ no. És un interval semiobert (per la dreta) i la desigualtat és $-3\leq x<5$.

**Resposta:** semiobert; $-3\leq x<5$.

**b)** Només té extrem a l'esquerra i aquest queda exclòs: és una semirecta oberta, amb $x>2$. Es dibuixa amb un punt buit en el $2$ i una fletxa cap a la dreta.

**Resposta:** semirecta oberta; $x>2$.

**c)** Només té extrem a la dreta i aquest queda inclòs: és una semirecta tancada, amb $x\leq 4$. Es dibuixa amb un punt ple en el $4$ i una fletxa cap a l'esquerra.

**Resposta:** semirecta tancada; $x\leq 4$.

**d)** Tots dos extrems queden exclosos (punts buits en el $0$ i en l'$1$): interval obert, amb $0<x<1$.

**Resposta:** obert; $0<x<1$.

### Exercici 8

> **Enunciat.** Calcula: a) $|7|$ · b) $|-7|$ · c) $|0|$ · d) $|3-8|$ · e) $|8-3|$ · f) $-|-4|$

Si el nombre és positiu o zero, el valor absolut el deixa igual; si és negatiu, li canvia el signe.

**a)** $|7|=7$, perquè $7\geq 0$.

**Resposta:** $7$

**b)** $|-7|=-(-7)=7$.

**Resposta:** $7$

**c)** $|0|=0$.

**Resposta:** $0$

**d)** Primer calculem dins del valor absolut: $3-8=-5$, i per tant $|-5|=5$.

**Resposta:** $5$

**e)** Ara $8-3=5$ i $|5|=5$. Coincideix amb l'apartat anterior, perquè $3-8$ i $8-3$ són oposats.

**Resposta:** $5$

**f)** El signe menys de davant queda fora del valor absolut: primer $|-4|=4$ i després canviem el signe.

**Resposta:** $-4$

### Exercici 9

> **Enunciat.** Calcula la distància entre cada parell de punts: a) $a=2,\ b=9$ · b) $a=-5,\ b=-1$ · c) $a=4,\ b=-3$ · d) $a=6,\ b=-2$

Fem servir $d(a,b)=|b-a|$.

**a)** $d(2,9)=|9-2|=|7|=7$.

**Resposta:** $7$

**b)** $d(-5,-1)=|-1-(-5)|=|-1+5|=|4|=4$.

**Resposta:** $4$

**c)** $d(4,-3)=|-3-4|=|-7|=7$.

**Resposta:** $7$

**d)** $d(6,-2)=|-2-6|=|-8|=8$.

**Resposta:** $8$

### Exercici 10

> **Enunciat.** Troba l'interval $(e_1,e_2)$ format pels punts que estan a una distància menor que $r$ del punt $a$: a) $a=5,\ r=3$ · b) $a=-2,\ r=4$ · c) $a=0,\ r=1{,}5$

Demanem $d(x,a)=|x-a|<r$, que equival a $a-r<x<a+r$. Per tant, els extrems són $e_1=a-r$ i $e_2=a+r$, i com que la desigualtat és estricta l'interval és obert.

**a)** $|x-5|<3 \Leftrightarrow 5-3<x<5+3 \Leftrightarrow 2<x<8$.

**Resposta:** $(2,8)$

**b)** $|x+2|<4 \Leftrightarrow -2-4<x<-2+4 \Leftrightarrow -6<x<2$.

**Resposta:** $(-6,2)$

**c)** $|x|<1{,}5 \Leftrightarrow 0-1{,}5<x<0+1{,}5 \Leftrightarrow -1{,}5<x<1{,}5$.

**Resposta:** $(-1{,}5,\ 1{,}5)$

### Exercici 11

> **Enunciat.** Resol i escriu la solució com a interval o, quan calgui, com a unió d'intervals. Recorda que $d(x,a)=|x-a|$, de manera que les dues notacions són equivalents: a) $|x-3|<5$ · b) $d(x,-2)<4$ · c) $|x-1|\leq 6$ · d) $d(x,-5)<2$ · e) $|x-2|>3$ · f) $d(x,-1)\geq 4$ · g) $d(x,4)>1$ · h) $|x+3|\geq 2$

Als quatre primers apartats els punts són a prop del centre: $|x-a|<r \Leftrightarrow a-r<x<a+r$ (i igual amb $\leq$, però amb extrems inclosos). Als quatre últims són lluny del centre: $|x-a|>r \Leftrightarrow x<a-r$ o $x>a+r$, i la solució és el complementari d'un interval.

**a)** Aquí $a=3$ i $r=5$:

$$|x-3|<5 \Leftrightarrow 3-5<x<3+5 \Leftrightarrow -2<x<8$$

**Resposta:** $(-2,8)$

**b)** Escrit com a valor absolut, és $|x-(-2)|=|x+2|<4$:

$$-2-4<x<-2+4 \Leftrightarrow -6<x<2$$

**Resposta:** $(-6,2)$

**c)** Ara la desigualtat no és estricta, així que els extrems s'inclouen:

$$|x-1|\leq 6 \Leftrightarrow 1-6\leq x\leq 1+6 \Leftrightarrow -5\leq x\leq 7$$

**Resposta:** $[-5,7]$

**d)** És $|x+5|<2$:

$$-5-2<x<-5+2 \Leftrightarrow -7<x<-3$$

**Resposta:** $(-7,-3)$

**e)** Ara volem els punts a distància més gran que $3$ del $2$:

$$|x-2|>3 \Leftrightarrow x<2-3 \ \text{ o } \ x>2+3 \Leftrightarrow x<-1 \ \text{ o } \ x>5$$

Els extrems $-1$ i $5$ són a distància exactament $3$, per tant no compleixen la desigualtat estricta i queden fora.

**Resposta:** $(-\infty,-1)\cup(5,+\infty)$

**f)** És $|x+1|\geq 4$. Ara la desigualtat no és estricta, així que els extrems es mantenen:

$$x\leq -1-4 \ \text{ o } \ x\geq -1+4 \Leftrightarrow x\leq -5 \ \text{ o } \ x\geq 3$$

**Resposta:** $(-\infty,-5]\cup[3,+\infty)$

**g)** Volem $|x-4|>1$, amb desigualtat estricta:

$$x<4-1 \ \text{ o } \ x>4+1 \Leftrightarrow x<3 \ \text{ o } \ x>5$$

**Resposta:** $(-\infty,3)\cup(5,+\infty)$

**h)** Escrivim $|x+3|\geq 2$ com a $|x-(-3)|\geq 2$:

$$x\leq -3-2 \ \text{ o } \ x\geq -3+2 \Leftrightarrow x\leq -5 \ \text{ o } \ x\geq -1$$

**Resposta:** $(-\infty,-5]\cup[-1,+\infty)$

### Exercici 12

> **Enunciat.** Troba $a$ i $r$ tals que l'interval solució de $|x-a|<r$ (o $\leq$, segons el cas) sigui: a) $(1,9)$ · b) $(-4,4)$ · c) $[-3,11]$

L'interval solució de $|x-a|<r$ és $(a-r,\,a+r)$. Per tant, $a$ és el **punt mitjà** de l'interval i $r$ és la **meitat de la longitud**:

$$a=\frac{e_1+e_2}{2} \qquad\qquad r=\frac{e_2-e_1}{2}$$

**a)** $a=\dfrac{1+9}{2}=5$ i $r=\dfrac{9-1}{2}=4$. Comprovem: $(5-4,\,5+4)=(1,9)$.

**Resposta:** $|x-5|<4$, és a dir, $a=5$ i $r=4$.

**b)** $a=\dfrac{-4+4}{2}=0$ i $r=\dfrac{4-(-4)}{2}=4$. Comprovem: $(0-4,\,0+4)=(-4,4)$.

**Resposta:** $|x|<4$, és a dir, $a=0$ i $r=4$.

**c)** L'interval és tancat, així que la condició és $|x-a|\leq r$. Tenim $a=\dfrac{-3+11}{2}=4$ i $r=\dfrac{11-(-3)}{2}=7$. Comprovem: $[4-7,\,4+7]=[-3,11]$.

**Resposta:** $|x-4|\leq 7$, és a dir, $a=4$ i $r=7$.

### Exercici 13

> **Enunciat.** Resol $|2x-6|<10$. *(Indicació: pots treure factor comú $2$ dins el valor absolut abans d'aïllar.)*

Traiem factor comú $2$ dins del valor absolut: $|2x-6|=|2(x-3)|=2\,|x-3|$. Llavors

$$2\,|x-3|<10 \Leftrightarrow |x-3|<5$$

Ja tenim la forma $|x-a|<r$, amb $a=3$ i $r=5$:

$$3-5<x<3+5 \Leftrightarrow -2<x<8$$

Comprovem amb un valor de dins, $x=0$: $|-6|=6<10$, correcte. I amb l'extrem $x=8$: $|10|=10$, que no és menor que $10$, per això l'extrem queda exclòs.

**Resposta:** $(-2,8)$

### Exercici 14

> **Enunciat.** Resol $|3x+9|\leq 21$.

Traiem factor comú $3$: $|3x+9|=3\,|x+3|$. Així

$$3\,|x+3|\leq 21 \Leftrightarrow |x+3|\leq 7$$

És $|x-(-3)|\leq 7$, de centre $-3$ i radi $7$:

$$-3-7\leq x\leq -3+7 \Leftrightarrow -10\leq x\leq 4$$

Comprovem els extrems: $x=-10$ dona $|-21|=21$ i $x=4$ dona $|21|=21$, que compleixen $\leq 21$; per això són inclosos.

**Resposta:** $[-10,4]$

### Exercici 15

> **Enunciat.** Resol les inequacions lineals següents (sense valor absolut) i expressa la solució com a interval: a) $3x-4>11$ · b) $-2x+7\leq 1$ · c) $5x-3<7$ · d) $-4x-1\geq 11$

Aïllem la $x$ com en una equació, però recordem girar la desigualtat quan multipliquem o dividim per un nombre negatiu.

**a)**

$$3x>11+4 \Rightarrow 3x>15 \Rightarrow x>\frac{15}{3}=5$$

**Resposta:** $(5,+\infty)$

**b)**

$$-2x\leq 1-7 \Rightarrow -2x\leq -6$$

Dividim per $-2$ (negatiu), de manera que la desigualtat gira:

$$x\geq \frac{-6}{-2}=3$$

**Resposta:** $[3,+\infty)$

**c)**

$$5x<7+3 \Rightarrow 5x<10 \Rightarrow x<\frac{10}{5}=2$$

**Resposta:** $(-\infty,2)$

**d)**

$$-4x\geq 11+1 \Rightarrow -4x\geq 12$$

Dividim per $-4$ (negatiu) i girem la desigualtat:

$$x\leq \frac{12}{-4}=-3$$

**Resposta:** $(-\infty,-3]$

### Exercici 16

> **Enunciat.** Resol: a) $\dfrac{x}{2}-3>1$ · b) $2(x-1)\leq 3x+4$ · c) $\dfrac{2x-1}{3}\geq 5$

**a)** Passem el $3$ a l'altre costat i després multipliquem per $2$ (positiu, la desigualtat no gira):

$$\frac{x}{2}>1+3=4 \Rightarrow x>8$$

**Resposta:** $(8,+\infty)$

**b)** Desfem el parèntesi i passem les $x$ a un costat:

$$2x-2\leq 3x+4 \Rightarrow 2x-3x\leq 4+2 \Rightarrow -x\leq 6$$

Multipliquem per $-1$ (negatiu), de manera que la desigualtat gira: $x\geq -6$.

Comprovem amb $x=-6$: $2(-7)=-14$ i $3(-6)+4=-14$, i $-14\leq -14$ és cert, per això el $-6$ hi és inclòs.

**Resposta:** $[-6,+\infty)$

**c)** Multipliquem per $3$ (positiu) i aïllem la $x$:

$$2x-1\geq 15 \Rightarrow 2x\geq 16 \Rightarrow x\geq 8$$

**Resposta:** $[8,+\infty)$

### Exercici 17

> **Enunciat.** *(aplicat)* La temperatura $T$ (en °C) d'una sala es manté dins un marge de $\pm 1{,}5$ °C respecte al valor de consigna de $21$ °C. Escriu aquesta condició amb un valor absolut i troba l'interval de temperatures possibles.

La diferència entre la temperatura real i la de consigna ha de ser, com a màxim, $1{,}5$ °C en qualsevol sentit, és a dir, $T$ és a una distància de $21$ que és com a molt $1{,}5$:

$$|T-21|\leq 1{,}5$$

Com que el marge inclou els extrems ($\pm 1{,}5$ és permès):

$$21-1{,}5\leq T\leq 21+1{,}5 \Leftrightarrow 19{,}5\leq T\leq 22{,}5$$

**Resposta:** $|T-21|\leq 1{,}5$, és a dir, $T\in[19{,}5,\ 22{,}5]$ °C.

### Exercici 18

> **Enunciat.** *(aplicat)* Una peça mecànica ha de tenir una longitud de $50\,\text{mm}$ amb una tolerància màxima de $0{,}2\,\text{mm}$. a) Escriu la condició amb valor absolut que ha de complir la longitud $\ell$. · b) Troba l'interval de longituds acceptades.

**a)** La longitud no pot allunyar-se de $50$ mm més de $0{,}2$ mm, ni per excés ni per defecte. Com que «tolerància màxima» permet arribar a $0{,}2$:

**Resposta:** $|\ell-50|\leq 0{,}2$

**b)** Resolem la desigualtat de l'apartat anterior:

$$50-0{,}2\leq \ell\leq 50+0{,}2 \Leftrightarrow 49{,}8\leq \ell\leq 50{,}2$$

**Resposta:** $\ell\in[49{,}8,\ 50{,}2]$ mm.

### Exercici 19

> **Enunciat.** *(aplicat)* Dos vaixells naveguen per una mateixa ruta rectilínia; les seves posicions respecte a un far són $p_1=12\,\text{km}$ i $p_2=-5\,\text{km}$ (negatiu si són a l'altre costat del far). a) Calcula la distància entre els dos vaixells. · b) Una boia està ancorada a la posició $p=3\,\text{km}$. Un tercer vaixell s'ha de mantenir a una distància màxima de $8\,\text{km}$ de la boia: escriu la condició amb valor absolut i troba l'interval de posicions on es pot trobar.

**a)** Estan a costats oposats del far, així que la distància és:

$$d(p_1,p_2)=|-5-12|=|-17|=17$$

**Resposta:** $17$ km.

**b)** Sigui $x$ la posició del tercer vaixell. Ha d'estar a una distància de la boia $p=3$ que sigui com a màxim $8$:

$$|x-3|\leq 8 \Leftrightarrow 3-8\leq x\leq 3+8 \Leftrightarrow -5\leq x\leq 11$$

**Resposta:** $|x-3|\leq 8$, és a dir, $x\in[-5,\ 11]$ km.

### Exercici 20

> **Enunciat.** *(aplicat)* En una carretera recta, el punt quilomètric $0$ marca l'entrada d'un poble i una antena de telefonia està situada al punt $p=7\,\text{km}$. La normativa obliga que qualsevol habitatge estigui a **més** de $2\,\text{km}$ de l'antena. (Considerem la carretera com una recta il·limitada.) a) Escriu amb un valor absolut la condició que ha de complir la posició $x$ d'un habitatge. · b) Troba el conjunt de posicions permeses i expressa'l com a unió d'intervals. · c) Un habitatge construït al punt quilomètric $8{,}5$ compleix la normativa?

**a)** La distància de l'habitatge a l'antena és $|x-7|$ i ha de ser més gran que $2$ (desigualtat estricta).

**Resposta:** $|x-7|>2$

**b)** Les posicions permeses són les que queden lluny de l'antena:

$$|x-7|>2 \Leftrightarrow x<7-2 \ \text{ o } \ x>7+2 \Leftrightarrow x<5 \ \text{ o } \ x>9$$

Els punts $5$ i $9$ són a distància exactament $2$, i la normativa demana «més de» $2$, de manera que no estan permesos.

**Resposta:** $(-\infty,5)\cup(9,+\infty)$

**c)** Calculem la distància a l'antena: $|8{,}5-7|=1{,}5$, que no és més gran que $2$. Ho confirmem amb el conjunt de l'apartat anterior: $8{,}5$ no és ni menor que $5$ ni major que $9$.

**Resposta:** No, perquè $d(8{,}5,\,7)=1{,}5\leq 2$.

### Exercici 21

> **Enunciat.** Troba tots els $x\in\mathbb{R}$ que compleixen alhora $|x-4|<6$ i $x>1$. Expressa la solució com a interval (intersecció).

Resolem primer el valor absolut:

$$|x-4|<6 \Leftrightarrow 4-6<x<4+6 \Leftrightarrow -2<x<10$$

Per tant, la primera condició dona $(-2,10)$ i la segona, $(1,+\infty)$. Han de complir-se alhora, així que busquem la intersecció: els $x$ que són més grans que $1$ i, a la vegada, menors que $10$ (el $-2$ ja no importa, perquè si $x>1$ també és $x>-2$):

$$(-2,10)\cap(1,+\infty)=(1,10)$$

Els dos extrems queden oberts, perquè cap de les dues condicions no els admet.

**Resposta:** $(1,10)$

### Exercici 22

> **Enunciat.** Escriu com un sol interval el conjunt de nombres reals que compleixen $-3\leq x<5$ o bé $4<x\leq 9$ (unió). Simplifica el resultat.

Volem la unió $[-3,5)\cup(4,9]$. Els dos intervals es solapen, perquè tots els punts entre $4$ i $5$ pertanyen als dos, de manera que no hi ha cap forat entre ells i la unió és un sol interval.

L'extrem esquerre és $-3$, que s'inclou perquè pertany al primer interval. L'extrem dret és $9$, que s'inclou perquè pertany al segon. Fixem-nos que el $5$ no ens preocupa: pertany al segon interval ($4<5\leq 9$).

**Resposta:** $[-3,9]$

### Exercici 23

> **Enunciat.** Donats els conjunts $A$ i $B$, calcula $A\cap B$ i $A\cup B$, i expressa el resultat com a interval (o unió d'intervals) sempre que es pugui: a) $A=[-2,5)$, $B=(1,8]$ · b) $A=(-\infty,3]$, $B=(0,+\infty)$ · c) $A=[-4,-1]$, $B=[2,6]$ · d) $A=(-3,4)$, $B=[0,+\infty)$

La intersecció conté els punts que són alhora a $A$ i a $B$; la unió, els que són a algun dels dos. Ens ajuda ordenar els extrems sobre la recta i, per a cada extrem, comprovar si l'admeten els dos conjunts (intersecció) o algun dels dos (unió).

**a)** $A=[-2,5)$ i $B=(1,8]$. Es solapen entre $1$ i $5$.

- Intersecció: comença on comença $B$ (el $1$ no hi és, perquè $B$ és obert) i acaba on acaba $A$ (el $5$ no hi és, perquè $A$ és obert).
- Unió: comença on comença $A$ (el $-2$ hi és) i acaba on acaba $B$ (el $8$ hi és), sense forats.

**Resposta:** $A\cap B=(1,5)$ i $A\cup B=[-2,8]$.

**b)** $A=(-\infty,3]$ i $B=(0,+\infty)$.

- Intersecció: els $x$ que són alhora $\leq 3$ i $>0$, és a dir, $0<x\leq 3$. El $0$ no hi és ($B$ és obert) i el $3$ sí (pertany a $A$ i a $B$).
- Unió: $A$ cobreix fins al $3$ i $B$ cobreix des del $0$ en endavant. Com que es solapen, entre tots dos cobreixen tota la recta.

**Resposta:** $A\cap B=(0,3]$ i $A\cup B=\mathbb{R}$.

**c)** $A=[-4,-1]$ i $B=[2,6]$. Tots els punts de $A$ són menors o iguals que $-1$ i tots els de $B$ són majors o iguals que $2$, així que no tenen cap punt en comú. Entre $-1$ i $2$ hi ha un buit que no és a cap dels dos conjunts, per la qual cosa la unió no és un sol interval.

**Resposta:** $A\cap B=\varnothing$ i $A\cup B=[-4,-1]\cup[2,6]$ (no es pot escriure com un sol interval).

**d)** $A=(-3,4)$ i $B=[0,+\infty)$. Es solapen des del $0$ fins al $4$.

- Intersecció: comença al $0$, que s'inclou perquè pertany a $B$ i també a $A$ (ja que $-3<0<4$); acaba al $4$, que no hi és, perquè $A$ és obert.
- Unió: comença al $-3$ (excloent-lo, com $A$) i no acaba mai, perquè $B$ arriba fins a $+\infty$.

**Resposta:** $A\cap B=[0,4)$ i $A\cup B=(-3,+\infty)$.

### Exercici 24

> **Enunciat.** Troba el conjunt de nombres reals que compleixen alhora les dues condicions $|x-1|<4$ i $|x+2|>1$. Resol cada inequació per separat i després interseca les dues solucions.

Resolem la primera inequació, amb centre $1$ i radi $4$:

$$|x-1|<4 \Leftrightarrow 1-4<x<1+4 \Leftrightarrow -3<x<5$$

La solució és $(-3,5)$.

Per a la segona, escrivim $|x+2|=|x-(-2)|$, de centre $-2$ i radi $1$, i volem els punts que hi són **lluny**:

$$|x+2|>1 \Leftrightarrow x<-2-1 \ \text{ o } \ x>-2+1 \Leftrightarrow x<-3 \ \text{ o } \ x>-1$$

La solució és $(-\infty,-3)\cup(-1,+\infty)$.

Ara intersequem. Del tros $(-\infty,-3)$ no en queda res dins de $(-3,5)$ (a més, el $-3$ no pertany a cap dels dos conjunts). I del tros $(-1,+\infty)$ només ens quedem amb la part menor que $5$:

$$(-3,5)\cap\Big((-\infty,-3)\cup(-1,+\infty)\Big)=\varnothing\cup(-1,5)=(-1,5)$$

Comprovem amb un valor: $x=0$ compleix $|0-1|=1<4$ i $|0+2|=2>1$; en canvi, $x=-2$ no serveix, perquè $|-2+2|=0$ no és major que $1$. L'extrem $x=-1$ tampoc, perquè $|-1+2|=1$ no és major que $1$.

**Resposta:** $(-1,5)$
