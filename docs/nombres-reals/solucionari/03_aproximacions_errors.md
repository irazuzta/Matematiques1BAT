# Solucionari — Aproximacions i errors

Resolució pas a pas dels exercicis 25–33 de [Exercicis i problemes](../exercicis.md).
Teoria: [Aproximacions i errors](../04_aproximacions_errors.md)

### Exercici 25

> **Enunciat.** Sigui $e=2{,}718281828\ldots$ el nombre d'Euler. Trunca'l i arrodoneix-lo a $2$ i a $4$ xifres decimals.

??? note "Mostra la solució"

    **A 2 decimals.** Les dues primeres xifres decimals són $7$ i $1$. Truncar és eliminar-ne la resta:

    $$2{,}718281828\ldots \;\to\; 2{,}71$$

    Per arrodonir ens fixem en la tercera xifra decimal, que és un $8$. Com que és $5$ o més, sumem una unitat a l'última xifra que conservem ($1 \to 2$).

    Resultat a 2 decimals: truncament $2{,}71$ i arrodoniment $2{,}72$.

    **A 4 decimals.** Les quatre primeres xifres decimals són $7182$, i la cinquena és un $8$. Truncant, deixem $2{,}7182$. Arrodonint, com que $8\geq 5$, pugem l'última xifra ($2\to 3$).

    **Resposta:** a $2$ decimals, truncament $2{,}71$ i arrodoniment $2{,}72$; a $4$ decimals, truncament $2{,}7182$ i arrodoniment $2{,}7183$.

### Exercici 26

> **Enunciat.** Indica el nombre de xifres significatives de: a) $0{,}0072$ · b) $308{,}40$ · c) $1{,}0500$ · d) $6000$ (suposa que ve de mesurar amb precisió de milers)

??? note "Mostra la solució"

    Comptem les xifres des de la primera diferent de zero. Els zeros inicials només col·loquen la coma, però els zeros finals després de la coma sí que aporten informació.

    **a)** Els zeros inicials no compten; queden $7$ i $2$.

    **Resposta:** $2$ xifres significatives.

    **b)** Comencem pel $3$ i comptem totes les xifres: $3,\,0,\,8,\,4,\,0$. El zero del mig és entre xifres no nul·les, i l'últim zero també és significatiu perquè indica que hem mesurat fins a les centèsimes.

    **Resposta:** $5$ xifres significatives.

    **c)** Comencem per l'$1$: $1,\,0,\,5,\,0,\,0$. Els dos zeros finals són significatius pel mateix motiu que abans.

    **Resposta:** $5$ xifres significatives.

    **d)** Com que la precisió és de milers, només la xifra $6$ aporta informació; els tres zeros només serveixen per situar el valor (el nombre és $6$ milers).

    **Resposta:** $1$ xifra significativa.

### Exercici 27

> **Enunciat.** El valor exacte d'una magnitud és $x=12{,}763$ i s'aproxima per $x'=12{,}8$. Calcula l'error absolut i l'error relatiu (en tant per cent, arrodonit a $2$ xifres decimals).

??? note "Mostra la solució"

    Apliquem la definició d'error absolut:

    $$E_a = |x - x'| = |12{,}763 - 12{,}8| = 0{,}037$$

    L'error relatiu és el quocient entre l'error absolut i el valor absolut del valor exacte:

    $$E_r = \frac{E_a}{|x|} = \frac{0{,}037}{12{,}763} = 0{,}00289\ldots$$

    Multipliquem per $100$ per passar-ho a tant per cent: $0{,}289\ldots\%$, que arrodonit a dues xifres decimals (la tercera és un $9$, i pugem) és $0{,}29\%$.

    **Resposta:** $E_a = 0{,}037$ i $E_r \approx 0{,}29\%$.

### Exercici 28

> **Enunciat.** Un topògraf mesura la longitud d'un pont i obté $x'=248\,\text{m}$, mentre que el valor exacte és $x=250\,\text{m}$. a) Calcula l'error absolut. · b) Calcula l'error relatiu en tant per cent.

??? note "Mostra la solució"

    **a)** Restem els dos valors i en prenem el valor absolut:

    $$E_a = |250 - 248| = 2\,\text{m}$$

    **Resposta:** $E_a = 2\,\text{m}$

    **b)** Dividim l'error absolut pel valor exacte (les unitats se simplifiquen):

    $$E_r = \frac{2}{250} = 0{,}008 \;\Rightarrow\; 0{,}008\cdot 100 = 0{,}8\%$$

    **Resposta:** $E_r = 0{,}8\%$

### Exercici 29

> **Enunciat.** *(aplicat)* Es mesuren dues longituds amb el mateix error absolut d'$1\,\text{cm}$: la llargada d'un llapis ($15\,\text{cm}$) i la d'un camp de futbol ($100\,\text{m}$). Calcula l'error relatiu en cada cas i comenta quina mesura és relativament més precisa.

??? note "Mostra la solució"

    Per poder dividir, cal que l'error absolut i la longitud estiguin en les mateixes unitats. Passem el camp a centímetres: $100\,\text{m} = 10\,000\,\text{cm}$.

    Llapis:

    $$E_r = \frac{1}{15} = 0{,}0666\ldots \;\Rightarrow\; 6{,}67\%$$

    Camp de futbol:

    $$E_r = \frac{1}{10\,000} = 0{,}0001 \;\Rightarrow\; 0{,}01\%$$

    Amb el mateix error absolut, l'error relatiu del llapis és unes $667$ vegades més gran que el del camp. Un centímetre d'error és molt important en un llapis i gairebé insignificant en un camp de futbol.

    **Resposta:** llapis $E_r\approx 6{,}67\%$ i camp $E_r = 0{,}01\%$; la mesura del camp de futbol és relativament més precisa.

### Exercici 30

> **Enunciat.** Un nombre s'ha arrodonit a les centèsimes i s'ha obtingut $x'=7{,}42$. Entre quins valors es pot trobar el valor exacte $x$? Expressa la resposta en forma d'interval i vigila quins extrems s'inclouen i quins no.

??? note "Mostra la solució"

    En arrodonir a les centèsimes ($n=2$), l'error absolut no supera $0{,}5\cdot 10^{-2} = 0{,}005$. Per tant:

    $$|x - 7{,}42| \leq 0{,}005 \;\Leftrightarrow\; 7{,}415 \leq x \leq 7{,}425$$

    Ara hem de vigilar els extrems, comprovant a quin valor arrodoneixen.

    - $x = 7{,}415$: la xifra de les mil·lèsimes és un $5$, per tant l'arrodoniment puja l'última xifra i dona $7{,}42$. Aquest extrem **s'inclou**.
    - $x = 7{,}425$: la xifra de les mil·lèsimes és un $5$, i llavors l'arrodoniment dona $7{,}43$, no $7{,}42$. Aquest extrem **no s'inclou**.

    L'interval queda semiobert, tancat per l'esquerra i obert per la dreta. L'error absolut màxim, $0{,}005$, només s'assoleix per l'extrem inferior.

    **Resposta:** $x \in [7{,}415,\ 7{,}425)$

### Exercici 31

> **Enunciat.** Cada valor següent s'ha obtingut per arrodoniment. Dona una fita de l'error absolut i una fita de l'error relatiu (en tant per cent, amb dues xifres decimals): a) $x'=3{,}25$ (a les centèsimes) · b) $x'=48{,}6$ (a les dècimes) · c) $x'=1200$ (a les desenes) · d) $x'=0{,}038$ (a les mil·lèsimes)

??? note "Mostra la solució"

    En arrodonir, l'error absolut no supera mitja unitat de l'última xifra conservada. Per a la fita de l'error relatiu, com que no coneixem el valor exacte $x$, dividim per l'aproximació $x'$, que n'és molt propera:

    $$E_r \leq \frac{\text{fita de } E_a}{|x'|}$$

    **a)** L'última xifra són les centèsimes, així que $E_a \leq 0{,}5\cdot 10^{-2} = 0{,}005$. Llavors

    $$E_r \leq \frac{0{,}005}{3{,}25} = 0{,}001538\ldots \;\Rightarrow\; 0{,}15\%$$

    **Resposta:** $E_a \leq 0{,}005$ i $E_r \lesssim 0{,}15\%$

    **b)** L'última xifra són les dècimes: $E_a \leq 0{,}05$. Llavors

    $$E_r \leq \frac{0{,}05}{48{,}6} = 0{,}001028\ldots \;\Rightarrow\; 0{,}10\%$$

    **Resposta:** $E_a \leq 0{,}05$ i $E_r \lesssim 0{,}10\%$

    **c)** L'última xifra conservada són les desenes, és a dir, una unitat de $10$; la meitat és $5$. Llavors $E_a \leq 5$ i

    $$E_r \leq \frac{5}{1200} = 0{,}004166\ldots \;\Rightarrow\; 0{,}42\%$$

    **Resposta:** $E_a \leq 5$ i $E_r \lesssim 0{,}42\%$

    **d)** L'última xifra són les mil·lèsimes: $E_a \leq 0{,}5\cdot 10^{-3} = 0{,}0005$. Llavors

    $$E_r \leq \frac{0{,}0005}{0{,}038} = 0{,}013157\ldots \;\Rightarrow\; 1{,}32\%$$

    **Resposta:** $E_a \leq 0{,}0005$ i $E_r \lesssim 1{,}32\%$

    Fixa't que, amb la mateixa precisió absoluta, com més petit és el valor, més gran és l'error relatiu: per això el cas d) és el menys precís en termes relatius.

### Exercici 32

> **Enunciat.** Volem aproximar $\pi=3{,}14159265\ldots$ per arrodoniment, de manera que l'error relatiu sigui inferior al $0{,}01\%$. Quantes xifres decimals cal conservar com a mínim? Justifica-ho amb la fita de l'error i comprova després què passa si en conserves una menys.

??? note "Mostra la solució"

    Primer passem el percentatge a decimal: $0{,}01\% = 0{,}0001 = 10^{-4}$.

    Si arrodonim a $n$ xifres decimals, l'error absolut compleix $E_a \leq 0{,}5\cdot 10^{-n}$, i per tant

    $$E_r = \frac{E_a}{\pi} \leq \frac{0{,}5\cdot 10^{-n}}{\pi}$$

    Volem que aquesta fita sigui menor que $10^{-4}$. Anem provant valors de $n$.

    Per a $n=3$:

    $$\frac{0{,}5\cdot 10^{-3}}{\pi} = 0{,}000159\ldots = 0{,}0159\ldots\%$$

    Aquesta fita és més gran que $0{,}01\%$, així que $n=3$ no ens ho garanteix.

    Per a $n=4$:

    $$\frac{0{,}5\cdot 10^{-4}}{\pi} = 0{,}0000159\ldots = 0{,}00159\ldots\%$$

    Ara la fita és inferior a $0{,}01\%$, així que amb $4$ decimals el compliment queda garantit. Per a $n$ més gran, la fita encara és més petita.

    Comprovem què passa amb una xifra menys, amb els valors reals. Amb $3$ decimals, $\pi \approx 3{,}142$ (la quarta xifra és un $5$, i pugem):

    $$E_a = |\pi - 3{,}142| = 0{,}000407\ldots \qquad E_r = \frac{0{,}000407\ldots}{\pi} = 0{,}0001291\ldots \;\Rightarrow\; 0{,}0129\%$$

    Aquest error relatiu és superior a $0{,}01\%$, així que no serveix. En canvi, amb $4$ decimals, $\pi\approx 3{,}1416$:

    $$E_a = |\pi - 3{,}1416| = 0{,}0000073\ldots \qquad E_r = \frac{0{,}0000073\ldots}{\pi} \approx 0{,}00028\%$$

    que és molt inferior al $0{,}01\%$.

    **Resposta:** cal conservar com a mínim $4$ xifres decimals ($\pi\approx 3{,}1416$); amb $3$ decimals l'error relatiu és $\approx 0{,}0129\% > 0{,}01\%$.

### Exercici 33

> **Enunciat.** *(aplicat)* La velocitat de la llum és $c=299\,792\,458\,\text{m/s}$, que sovint s'aproxima per $c'=300\,000\,000\,\text{m/s}$. Calcula l'error relatiu comès, en tant per cent (arrodoneix a $2$ xifres decimals). *(Enllaça amb la notació científica que ve tot seguit.)*

??? note "Mostra la solució"

    Calculem primer l'error absolut:

    $$E_a = |c - c'| = |299\,792\,458 - 300\,000\,000| = 207\,542\,\text{m/s}$$

    Dividim pel valor exacte:

    $$E_r = \frac{207\,542}{299\,792\,458} = 0{,}000692\ldots$$

    En tant per cent és $0{,}0692\ldots\%$, que arrodonit a dues xifres decimals (la tercera és un $9$, i pugem) dona $0{,}07\%$.

    Un error absolut de més de $200\,000\,\text{m/s}$ sembla enorme, però en relació amb la mida de la velocitat de la llum és molt petit.

    **Resposta:** $E_r \approx 0{,}07\%$
