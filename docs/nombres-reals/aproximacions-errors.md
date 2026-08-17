# Aproximacions i errors

Molts nombres reals —especialment els irracionals— tenen infinites xifres decimals no periòdiques, per la qual cosa és impossible escriure'ls o operar-hi de manera exacta. A la pràctica, doncs, treballem sempre amb **aproximacions**: valors amb un nombre finit de xifres decimals que s'acosten al valor exacte.

## Aproximació d'un nombre

Hi ha dues maneres bàsiques d'aproximar un nombre a un cert nombre de xifres decimals: el **truncament** i l'**arrodoniment**.

!!! abstract "Definició: truncament"
    Truncar un nombre a $n$ xifres decimals consisteix a eliminar totes les xifres decimals a partir de la posició $n+1$, sense modificar les que es conserven.

!!! abstract "Definició: arrodoniment"
    Arrodonir un nombre a $n$ xifres decimals consisteix a mirar la xifra que ocupa la posició $n+1$:

    - Si aquesta xifra és $5$ o més, s'incrementa en una unitat l'última xifra que es conserva.
    - Si és menor que $5$, l'última xifra que es conserva no varia.

!!! example "Truncament i arrodoniment de $\pi$"
    Considerem $\pi = 3{,}14159265\ldots$

    | Xifres decimals | Truncament | Arrodoniment |
    |---|---|---|
    | 2 | $3{,}14$ | $3{,}14$ |
    | 4 | $3{,}1415$ | $3{,}1416$ |

    A 4 decimals, la cinquena xifra decimal de $\pi$ és un $9$; per això l'arrodoniment incrementa l'última xifra ($5 \to 6$), mentre que el truncament simplement l'ignora.

!!! note "Xifres significatives"
    Les *xifres significatives* d'un nombre són totes les xifres que aporten informació sobre la seva precisió, comptant des de la primera xifra diferent de zero (per l'esquerra). Per exemple, $0{,}00530$ té tres xifres significatives ($5$, $3$ i $0$): els zeros inicials només posicionen la coma.

## Error absolut i error relatiu

Quan substituïm un valor exacte $x$ per una aproximació $x'$, cometem un **error**. Interessa poder mesurar quina és la magnitud d'aquest error.

!!! abstract "Definició: error absolut"
    Si $x$ és el valor exacte d'una magnitud i $x'$ n'és una aproximació, es defineix l'**error absolut** com

    $$E_a = |x - x'|$$

!!! example "Error absolut de l'aproximació de $\pi$"
    Aproximem $\pi \approx 3{,}14$. Aleshores

    $$E_a = |\pi - 3{,}14| = |3{,}14159\ldots - 3{,}14| = 0{,}00159\ldots$$

L'error absolut es mesura en les mateixes unitats que la magnitud original i, per si sol, no diu si l'aproximació és "bona" o "dolenta": un error absolut d'1 metre és irrellevant si mesurem la distància entre ciutats, però és enorme si mesurem el gruix d'un llibre. Per això s'introdueix l'**error relatiu**.

!!! abstract "Definició: error relatiu"
    Es defineix l'**error relatiu** com el quocient entre l'error absolut i el valor absolut del valor exacte:

    $$E_r = \frac{E_a}{|x|} = \frac{|x-x'|}{|x|}$$

    Sovint s'expressa en tant per cent, multiplicant el resultat per $100$.

!!! example "Comparació de dues aproximacions amb el mateix error absolut"
    Suposem que mesurem dues longituds amb un error absolut d'$1\,\text{m}$ en tots dos casos:

    - Distància entre dues ciutats: $x = 100\,\text{km} = 100\,000\,\text{m}$, amb $E_r = \frac{1}{100\,000} = 0{,}001\%$.
    - Llargada d'una taula: $x = 2\,\text{m}$, amb $E_r = \frac{1}{2} = 50\%$.

    Tot i tenir el mateix error absolut, la segona aproximació és molt pitjor: l'error relatiu mostra que una diferència d'1 metre és insignificant en una distància de 100 km, però inacceptable en la llargada d'una taula.

!!! note "Cota de l'error en un arrodoniment"
    Quan arrodonim un nombre a $n$ xifres decimals, l'error absolut comès és, com a màxim, mitja unitat de l'última xifra conservada. Per exemple, en arrodonir a les centèsimes ($n=2$), l'error absolut és sempre inferior a $0{,}005$.
