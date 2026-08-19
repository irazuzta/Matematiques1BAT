# Aproximacions i errors

Molts nombres reals —els irracionals— tenen infinites xifres decimals que no es repeteixen mai. Per tant, mai els podem escriure ni operar-hi de manera exacta. Altres cops, independentment de com siguin els nombres reals, treballem amb una precisió limitada i això ens porta a l'**aproximació** de valors.

## Aproximació d'un nombre

Per aproximar un nombre a un cert nombre de xifres decimals tenim dues estratègies bàsiques: el **truncament** i l'**arrodoniment**. Vegem en què consisteix cadascuna.

!!! abstract "Definició: truncament"
    Truncar un nombre a $n$ xifres decimals vol dir eliminar totes les xifres a partir de la posició $n+1$, sense tocar les que queden.

!!! abstract "Definició: arrodoniment"
    Arrodonir un nombre a $n$ xifres decimals vol dir fixar-se en la xifra que ocupa la posició $n+1$:

    - Si és $5$ o més, sumem una unitat a l'última xifra que conservem.
    - Si és menor que $5$, l'última xifra que conservem no canvia.

!!! example "Truncament i arrodoniment de $\pi$"
    Considerem $\pi = 3{,}14159265\ldots$

    | Xifres decimals | Truncament | Arrodoniment |
    |---|---|---|
    | 2 | $3{,}14$ | $3{,}14$ |
    | 4 | $3{,}1415$ | $3{,}1416$ |

    Fixa't que a 4 decimals la cinquena xifra de $\pi$ és un $9$: per això l'arrodoniment puja l'última xifra ($5 \to 6$), mentre que el truncament simplement la descarta.

!!! note "Xifres significatives"
    Les *xifres significatives* d'un nombre són totes les que aporten informació sobre la seva precisió, comptant des de la primera xifra diferent de zero. Per exemple, $0{,}00530$ en té tres ($5$, $3$ i $0$): els zeros inicials només col·loquen la coma.

## Error absolut i error relatiu

Quan canviem un valor exacte $x$ per una aproximació $x'$, cometem un **error**. I ens interessa poder mesurar-lo.

!!! abstract "Definició: error absolut"
    Si $x$ és el valor exacte d'una magnitud i $x'$ n'és una aproximació, l'**error absolut** és

    $$E_a = |x - x'|$$

!!! example "Error absolut de l'aproximació de $\pi$"
    Si aproximem $\pi \approx 3{,}14$:

    $$E_a = |\pi - 3{,}14| = |3{,}14159\ldots - 3{,}14| = 0{,}00159\ldots$$

L'error absolut es mesura en les mateixes unitats que la magnitud, però per si sol no ens diu si l'aproximació és bona o dolenta: un error d'1 metre és insignificant mesurant la distància entre ciutats, però enorme mesurant el gruix d'un llibre. Per això ens cal l'**error relatiu**.

!!! abstract "Definició: error relatiu"
    L'**error relatiu** és el quocient entre l'error absolut i el valor absolut del valor exacte:

    $$E_r = \frac{E_a}{|x|} = \frac{|x-x'|}{|x|}$$

    Sovint s'expressa en tant per cent, multiplicant per $100$.

!!! example "Comparació de dues aproximacions amb el mateix error absolut"
    Imaginem dues mesures, totes dues amb un error absolut d'$1\,\text{m}$:

    - Distància entre ciutats: $x = 100\,\text{km} = 100\,000\,\text{m}$, amb $E_r = \frac{1}{100\,000} = 0{,}001\%$.
    - Llargada d'una taula: $x = 2\,\text{m}$, amb $E_r = \frac{1}{2} = 50\%$.

    Mateix error absolut, però resultats ben diferents: l'error relatiu deixa clar que un metre és insignificant en 100 km, però inacceptable en la llargada d'una taula.

!!! note "Cota de l'error en un arrodoniment"
    En arrodonir a $n$ xifres decimals, l'error absolut mai supera mitja unitat de l'última xifra conservada. Per exemple, arrodonint a les centèsimes ($n=2$), l'error és sempre inferior a $0{,}005$.
