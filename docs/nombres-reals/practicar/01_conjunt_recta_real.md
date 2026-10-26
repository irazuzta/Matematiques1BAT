# El conjunt dels nombres reals i la recta real

Exercicis 1–5. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 1

Classifica cada nombre indicant a quins conjunts pertany ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}\setminus\mathbb{Q}$; un nombre pot pertànyer a més d'un):

| | |
|:--|:--|
| **a)** $-7$ | **b)** $\dfrac{3}{4}$ |
| **c)** $\sqrt{16}$ | **d)** $\sqrt{5}$ |
| **e)** $0$ | **f)** $2{,}5$ |
| **g)** $-\dfrac{9}{3}$ | **h)** $\pi$ |

??? note "Mostra la solució"

    Recordem que $\mathbb{N}=\{0,1,2,3,\dots\}$ (el $0$ hi és inclòs) i que $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. Per tant, un nombre natural és també enter i racional, i un enter és també racional. Només ens cal decidir, per a cada nombre, quin és el conjunt més petit al qual pertany.

    **a)** $-7$ és un enter negatiu: no és natural. Com que $-7=\dfrac{-7}{1}$, també és racional.

    **Resposta:** $-7\in\mathbb{Z}$ i $-7\in\mathbb{Q}$ (però $-7\notin\mathbb{N}$).

    **b)** $\dfrac{3}{4}$ ja està escrit com a fracció d'enters, i no és un enter perquè $3$ no és múltiple de $4$ ($\dfrac{3}{4}=0{,}75$).

    **Resposta:** $\dfrac{3}{4}\in\mathbb{Q}$ (no és enter ni natural).

    **c)** Calculem l'arrel: $\sqrt{16}=4$, perquè $4^2=16$. Així doncs, és un nombre natural, i per tant també enter i racional.

    **Resposta:** $\sqrt{16}=4\in\mathbb{N}$, $\mathbb{Z}$ i $\mathbb{Q}$.

    **d)** $5$ no és un quadrat perfecte ($2^2=4$ i $3^2=9$), de manera que $\sqrt{5}=2{,}2360\dots$ té infinites xifres decimals sense cap període: no es pot escriure com a fracció.

    **Resposta:** $\sqrt{5}\in\mathbb{R}\setminus\mathbb{Q}$ (irracional).

    **e)** El $0$ és natural (segons el conjunt $\mathbb{N}$ que fem servir als apunts), i per tant també enter i racional ($0=\dfrac{0}{1}$).

    **Resposta:** $0\in\mathbb{N}$, $\mathbb{Z}$ i $\mathbb{Q}$.

    **f)** El decimal $2{,}5$ és exacte, de manera que es pot escriure com a fracció:

    $$
    2{,}5=\frac{25}{10}=\frac{5}{2}
    $$

    No és un enter, perquè té part decimal diferent de zero.

    **Resposta:** $2{,}5\in\mathbb{Q}$ (no és enter).

    **g)** Simplifiquem abans de classificar: $-\dfrac{9}{3}=-3$. És un enter negatiu, per tant no és natural, però sí enter i racional.

    **Resposta:** $-\dfrac{9}{3}=-3\in\mathbb{Z}$ i $\mathbb{Q}$ (no és natural).

    **h)** $\pi=3{,}141592\dots$ té infinites xifres decimals sense període, i no es pot escriure com a fracció d'enters.

    **Resposta:** $\pi\in\mathbb{R}\setminus\mathbb{Q}$ (irracional).

### Exercici 2

Digues si cada afirmació és certa o falsa, i justifica-ho breument:

- **a)** $\mathbb{N}\subset\mathbb{Z}$
- **b)** $\sqrt{2}\in\mathbb{Q}$
- **c)** Tot nombre enter és racional.
- **d)** $0{,}\overline{6}$ és irracional.

??? note "Mostra la solució"

    **a)** Tots els naturals ($0,1,2,\dots$) apareixen a la llista dels enters ($\dots,-1,0,1,2,\dots$): afegir els oposats als naturals ens dona $\mathbb{Z}$, de manera que $\mathbb{N}$ queda contingut dins de $\mathbb{Z}$.

    **Resposta:** Certa.

    **b)** $\sqrt{2}=1{,}41421\dots$ té infinites xifres decimals no periòdiques, per tant no es pot escriure com a fracció d'enters. És irracional, de manera que $\sqrt{2}\notin\mathbb{Q}$.

    **Resposta:** Falsa, $\sqrt{2}\in\mathbb{R}\setminus\mathbb{Q}$.

    **c)** Si $z$ és un enter, el podem escriure com a fracció amb denominador $1$:

    $$
    z=\frac{z}{1}, \qquad z,1\in\mathbb{Z},\ 1\neq0
    $$

    Això compleix la definició de nombre racional.

    **Resposta:** Certa ($\mathbb{Z}\subset\mathbb{Q}$).

    **d)** Un decimal periòdic és racional. Ho comprovem passant $0{,}\overline{6}$ a fracció: si $x=0{,}666\dots$, multipliquem per $10$ i restem per eliminar la part decimal:

    $$
    \begin{aligned}
    10x &= 6{,}666\dots\\
    x &= 0{,}666\dots\\
    \hline
    9x &= 6 \;\Rightarrow\; x=\frac{6}{9}=\frac{2}{3}
    \end{aligned}
    $$

    Així doncs, $0{,}\overline{6}=\dfrac{2}{3}$ és racional, no irracional.

    **Resposta:** Falsa, $0{,}\overline{6}=\dfrac{2}{3}\in\mathbb{Q}$.

### Exercici 3

Ordena de més petit a més gran: $-3$, $\dfrac{7}{2}$, $-1{,}5$, $4$, $0$.

??? note "Mostra la solució"

    Passem la fracció a decimal perquè tots els nombres tinguin la mateixa forma: $\dfrac{7}{2}=3{,}5$. Ara tenim $-3$, $3{,}5$, $-1{,}5$, $4$ i $0$.

    Sobre la recta real, com més a l'esquerra és un nombre, més petit és. Primer van els negatius: entre $-3$ i $-1{,}5$, el més petit és $-3$ (perquè $-1{,}5-(-3)=1{,}5>0$). Després el $0$, i finalment els positius $3{,}5<4$.

    $$
    -3 < -1{,}5 < 0 < \frac{7}{2} < 4
    $$

    **Resposta:** $-3,\ -1{,}5,\ 0,\ \dfrac{7}{2},\ 4$

### Exercici 4

Sense calculadora, decideix quin nombre és més gran, $\dfrac{2}{3}$ o $0{,}68$ passant-los primer tots a decimal i després tots a fracció.

??? note "Mostra la solució"

    **Passant-los a decimal.** Fem la divisió $2:3$ i obtenim un decimal periòdic pur:

    $$
    \frac{2}{3}=0{,}666\dots=0{,}\overline{6}
    $$

    Comparem xifra a xifra amb $0{,}68$: la part entera és la mateixa, les dècimes també ($6$), però a les centèsimes tenim $6$ davant de $8$. Per tant $0{,}666\dots<0{,}68$.

    **Passant-los a fracció.** El decimal exacte $0{,}68$ es converteix en fracció i se simplifica:

    $$
    0{,}68=\frac{68}{100}=\frac{17}{25}
    $$

    Reduïm a denominador comú, $\operatorname{mcm}(3,25)=75$:

    $$
    \frac{2}{3}=\frac{2\cdot25}{75}=\frac{50}{75}, \qquad \frac{17}{25}=\frac{17\cdot3}{75}=\frac{51}{75}
    $$

    Com que $50<51$, tenim $\dfrac{2}{3}<\dfrac{17}{25}$. També ho podem veure amb la definició d'ordre: $\dfrac{2}{3}-0{,}68=\dfrac{50}{75}-\dfrac{51}{75}=-\dfrac{1}{75}<0$.

    Els dos mètodes donen el mateix resultat.

    **Resposta:** el més gran és $0{,}68$, ja que $\dfrac{2}{3}<0{,}68$.

### Exercici 5

Situa aproximadament sobre una recta real els nombres $-2$, $1{,}5$, $\pi$ i $-\sqrt{2}$ (n'hi ha prou amb dues xifres decimals d'aproximació).

??? note "Mostra la solució"

    Comencem escrivint cada nombre en forma decimal. El $-2$ i l'$1{,}5$ ja ho són, i per als irracionals fem servir dues xifres decimals:

    | Nombre | $-2$ | $-\sqrt{2}$ | $1{,}5$ | $\pi$ |
    |:--:|:--:|:--:|:--:|:--:|
    | Valor aproximat | $-2$ | $-1{,}41$ | $1{,}5$ | $3{,}14$ |

    Ara fixem el $0$ i l'$1$ (amb l'$1$ a la dreta del $0$) per marcar l'escala i situem els enters. Cada nombre queda entre els enters que l'envolten:

    - $-2$ coincideix amb l'enter $-2$.
    - $-\sqrt{2}\approx-1{,}41$ és a l'esquerra del $-1$ i a la dreta del $-2$ (una mica més a prop del $-1$ que del $-2$).
    - $1{,}5$ és just a mig camí entre l'$1$ i el $2$.
    - $\pi\approx3{,}14$ és una mica a la dreta del $3$.

    Quedaria així (els punts marcats són els quatre nombres):

    <div markdown="0" style="margin:1em 0">
    <svg viewBox="0 0 632 110" role="img" aria-label="Recta real amb els nombres -2, -arrel de 2, 1,5 i pi" style="max-width:640px;width:100%;height:auto;color:inherit" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="60" x2="622" y2="60" stroke="currentColor" stroke-width="1.6"/>
    <polygon points="622,60 612,55 612,65" fill="currentColor"/>
    <line x1="40" y1="54" x2="40" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="40" y="84" text-anchor="middle" font-size="14" fill="currentColor">−3</text>
    <line x1="120" y1="54" x2="120" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="120" y="84" text-anchor="middle" font-size="14" fill="currentColor">−2</text>
    <line x1="200" y1="54" x2="200" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="200" y="84" text-anchor="middle" font-size="14" fill="currentColor">−1</text>
    <line x1="280" y1="54" x2="280" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="280" y="84" text-anchor="middle" font-size="14" fill="currentColor">0</text>
    <line x1="360" y1="54" x2="360" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="360" y="84" text-anchor="middle" font-size="14" fill="currentColor">1</text>
    <line x1="440" y1="54" x2="440" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="440" y="84" text-anchor="middle" font-size="14" fill="currentColor">2</text>
    <line x1="520" y1="54" x2="520" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="520" y="84" text-anchor="middle" font-size="14" fill="currentColor">3</text>
    <line x1="600" y1="54" x2="600" y2="66" stroke="currentColor" stroke-width="1.4"/>
    <text x="600" y="84" text-anchor="middle" font-size="14" fill="currentColor">4</text>
    <circle cx="120.0" cy="60" r="5.5" fill="currentColor"/>
    <text x="120.0" y="40" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">−2</text>
    <circle cx="166.9" cy="60" r="5.5" fill="currentColor"/>
    <text x="166.9" y="40" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">−√2</text>
    <circle cx="400.0" cy="60" r="5.5" fill="currentColor"/>
    <text x="400.0" y="40" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">1,5</text>
    <circle cx="531.3" cy="60" r="5.5" fill="currentColor"/>
    <text x="531.3" y="40" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">π</text>
    </svg>
    </div>

    L'ordre sobre la recta, de més a l'esquerra a més a la dreta, és:

    $$
    -2<-\sqrt{2}<1{,}5<\pi
    $$

    **Resposta:** $-2<-\sqrt{2}\approx-1{,}41<1{,}5<\pi\approx3{,}14$
