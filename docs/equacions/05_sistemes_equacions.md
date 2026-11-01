# Sistemes d'equacions

## Equacions amb més d'una incògnita

Fins ara hem resolt equacions amb una sola incògnita, $x$. Però una equació pot tenir més d'una incògnita, com ara

$$x+y=5, \qquad x^2+y^2=25, \qquad xy=6.$$

!!! abstract "Definició: solució d'una equació amb diverses incògnites"
    Una **solució** d'una equació amb diverses incògnites és un conjunt de valors, **un per a cada incògnita**, que fan certa la igualtat.

    Quan les incògnites són $x$ i $y$, escrivim una solució com el parell $(x,y)$, amb el valor de $x$ primer i el de $y$ després.

!!! example "**Exemple:** l'equació $x+y=5$"
    El parell $(2,3)$ és solució, perquè $2+3=5$. També ho són $(0,5)$, $(-1,6)$ o $\left(\dfrac12,\dfrac92\right)$.

    De fet, triem el valor de $x$ que triem, n'hi ha prou de prendre $y=5-x$ per obtenir una solució. Per tant, l'equació té **infinites solucions**.

En general, una equació amb dues o més incògnites té infinites solucions. Hi ha excepcions: per exemple, $x^2+y^2=0$ només té la solució $(0,0)$, i $x^2+y^2=-1$ no en té cap, perquè una suma de quadrats no pot ser negativa.

## Sistemes d'equacions

!!! abstract "Definició: sistema d'equacions"
    Un **sistema d'equacions** és un conjunt d'equacions amb les mateixes incògnites, de les quals busquem les solucions comunes.

    Una **solució del sistema** és un conjunt de valors que és solució de **totes** les equacions alhora. **Resoldre** el sistema vol dir trobar totes les seves solucions o bé veure que no en té cap.

Per exemple, el parell $(4,3)$ és solució del sistema

$$
\begin{cases}
x-y=1\\
x^2+y^2=25
\end{cases}
$$

perquè compleix les dues equacions. Substituïm $x=4$ i $y=3$ a cada una:

$$
\begin{aligned}
\text{1a equació: }&4-3=1\\
\text{2a equació: }&4^2+3^2=16+9=25
\end{aligned}
$$

En canvi, el parell $(3,4)$ compleix la segona equació, però no la primera:

$$
\begin{aligned}
\text{1a equació: }&3-4=-1\neq 1\\
\text{2a equació: }&3^2+4^2=9+16=25
\end{aligned}
$$

Per tant, $(3,4)$ no és solució del sistema.

Ja coneixeu els **sistemes lineals**, en què totes les equacions són de primer grau, de dues equacions amb dues incògnites o de tres equacions amb tres incògnites. Ara treballarem amb **sistemes no lineals**: sistemes en què alguna de les equacions no és de primer grau.

!!! example "**Exemple:** sistemes no lineals"
    En aquests sistemes hi apareixen quadrats, productes d'incògnites, fraccions, arrels, potències o logaritmes:

    $$
    \begin{cases}
    x+y=7\\
    xy=12
    \end{cases}
    \qquad
    \begin{cases}
    y=x^2-4x+3\\
    y=x-1
    \end{cases}
    $$

    $$
    \begin{cases}
    x-y=1\\
    \sqrt{x+y}+y=7
    \end{cases}
    \qquad
    \begin{cases}
    \log x+\log y=2\\
    x-y=15
    \end{cases}
    $$

!!! note "Tantes equacions com incògnites"
    Treballarem amb sistemes que tenen **tantes equacions com incògnites**, sobretot de dues equacions amb dues incògnites.

    Una sola equació amb dues incògnites sol tenir infinites solucions. Quan n'hi afegim una segona, les solucions han de complir totes dues equacions alhora, i això en redueix molt el nombre: els sistemes que veurem tenen **un nombre finit de solucions** (una, dues, quatre...) o **cap**. Només hi ha infinites solucions en casos especials, per exemple quan una equació és equivalent a l'altra, com a $x+y=2$ i $2x+2y=4$ (la segona és la primera multiplicada per $2$). En aquests casos és com si només tinguéssim una equació, i per això torna a haver-hi infinites solucions.

## Mètodes de resolució

Els sistemes no lineals es resolen amb els mateixos mètodes que els lineals. Nosaltres farem servir la **substitució** i la **igualació**. La idea és sempre la mateixa: obtenir una **equació amb una sola incògnita**, que ja sabem resoldre.

!!! tip "Mètode de substitució"
    1. Aïllem una incògnita en una de les equacions (la que sigui més senzilla).
    2. Substituïm l'expressió obtinguda a l'altra equació, que queda amb una sola incògnita.
    3. Resolem aquesta equació.
    4. Per a cada valor trobat, calculem l'altra incògnita amb l'expressió del pas 1.

!!! tip "Mètode d'igualació"
    1. Aïllem la mateixa incògnita a les dues equacions.
    2. Igualem les dues expressions: obtenim una equació amb una sola incògnita.
    3. Resolem aquesta equació.
    4. Per a cada valor trobat, calculem l'altra incògnita amb qualsevol de les dues expressions.

!!! note "Parells de solucions i comprovació"
    - Cada valor d'una incògnita dona el seu valor de l'altra: les solucions s'escriuen per **parells** $(x,y)$, i no es poden barrejar els valors d'un parell amb els d'un altre.
    - Si en el procés elevem al quadrat, multipliquem per una expressió amb incògnites o fem servir logaritmes, poden aparèixer solucions falses. Cal **comprovar** les solucions al sistema original, igual que fèiem amb les equacions.

## Exemples

!!! example "**Exemple 1:** equació de segon grau (substitució)"
    Resolem el sistema

    $$
    \begin{cases}
    x-y=1\\
    x^2+y^2=25
    \end{cases}
    $$

    1. Aïllem $y$ a la primera equació: $y=x-1$.

    2. Substituïm a la segona equació i resolem:

        $$
        \begin{aligned}
        x^2+(x-1)^2&=25\\
        x^2+x^2-2x+1&=25\\
        2x^2-2x-24&=0\\
        x^2-x-12&=0
        \end{aligned}
        $$

        $$\begin{aligned}x&=\frac{1\pm\sqrt{1+48}}{2}=\frac{1\pm 7}{2}\\ &\Rightarrow\; x_1=4,\quad x_2=-3\end{aligned}$$

    3. Calculem $y=x-1$ per a cada valor:
        - $x_1=4 \;\Rightarrow\; y_1=3$
        - $x_2=-3 \;\Rightarrow\; y_2=-4$

    El sistema té dues solucions: $(4,3)$ i $(-3,-4)$.

!!! example "**Exemple 2:** una paràbola i una recta (igualació)"
    Resolem el sistema

    $$
    \begin{cases}
    y=x^2-4x+3\\
    y=x-1
    \end{cases}
    $$

    1. Les dues equacions ja tenen $y$ aïllada. Igualem les dues expressions:

        $$
        \begin{aligned}
        x^2-4x+3&=x-1\\
        x^2-5x+4&=0
        \end{aligned}
        $$

        $$\begin{aligned}x&=\frac{5\pm\sqrt{25-16}}{2}=\frac{5\pm 3}{2}\\ &\Rightarrow\; x_1=4,\quad x_2=1\end{aligned}$$

    2. Calculem $y=x-1$ per a cada valor:
        - $x_1=4 \;\Rightarrow\; y_1=3$
        - $x_2=1 \;\Rightarrow\; y_2=0$

    El sistema té dues solucions: $(4,3)$ i $(1,0)$.

    Gràficament, la primera equació és una paràbola i la segona una recta, i les solucions del sistema són els seus **punts de tall**, $(1,0)$ i $(4,3)$. Ho pots veure al [Laboratori d'equacions](laboratori.md) escrivint $x^2-4x+3$ i $x-1$ als dos membres: les abscisses dels punts de tall són les solucions de $x^2-4x+3=x-1$.

!!! example "**Exemple 3:** un producte d'incògnites i una biquadrada (substitució)"
    Resolem el sistema

    $$
    \begin{cases}
    x^2+y^2=13\\
    xy=6
    \end{cases}
    $$

    1. Aïllem $y$ a la segona equació: $y=\dfrac{6}{x}$. Podem dividir per $x$ perquè $x\neq 0$: si fos $x=0$, la segona equació diria $0=6$.

    2. Substituïm a la primera equació i multipliquem per $x^2$:

        $$
        \begin{aligned}
        x^2+\frac{36}{x^2}&=13\\
        x^4+36&=13x^2\\
        x^4-13x^2+36&=0
        \end{aligned}
        $$

        És una equació biquadrada. Amb el canvi $t=x^2$:

        $$\begin{aligned}t^2-13t+36=0 \;&\Rightarrow\; t=\frac{13\pm 5}{2}\\ &\Rightarrow\; t_1=9,\quad t_2=4\end{aligned}$$

        i, desfent el canvi, $x=\pm 3$ i $x=\pm 2$.

    3. Calculem $y=\dfrac{6}{x}$ per a cada valor:
        - $x=3 \Rightarrow y=2$, $\quad x=-3 \Rightarrow y=-2$
        - $x=2 \Rightarrow y=3$, $\quad x=-2 \Rightarrow y=-3$

    El sistema té quatre solucions: $(3,2)$, $(-3,-2)$, $(2,3)$ i $(-2,-3)$.

!!! example "**Exemple 4:** una equació irracional (substitució)"
    Resolem el sistema

    $$
    \begin{cases}
    x-y=1\\
    \sqrt{x+y}+y=7
    \end{cases}
    $$

    1. Aïllem $x$ a la primera equació: $x=y+1$.

    2. Substituïm a la segona equació. Aïllem l'arrel i elevem al quadrat:

        $$
        \begin{aligned}
        \sqrt{2y+1}+y&=7\\
        \sqrt{2y+1}&=7-y\\
        2y+1&=49-14y+y^2\\
        y^2-16y+48&=0
        \end{aligned}
        $$

        $$\begin{aligned}y&=\frac{16\pm\sqrt{256-192}}{2}=\frac{16\pm 8}{2}\\ &\Rightarrow\; y_1=12,\quad y_2=4\end{aligned}$$

    3. Calculem $x=y+1$: obtenim els parells $(13,12)$ i $(5,4)$.

    4. **Comprovació.** Hem elevat al quadrat, així que comprovem les dues candidates a la segona equació, $\sqrt{x+y}+y=7$ (la primera es compleix sempre, perquè hem calculat $x=y+1$):

        $$
        \begin{aligned}
        (13,12)\text{: }&\sqrt{13+12}+12=5+12=17\neq 7\\
        (5,4)\text{: }&\sqrt{5+4}+4=3+4=7
        \end{aligned}
        $$

        El parell $(13,12)$ és una solució falsa, que ha aparegut en elevar al quadrat. El parell $(5,4)$ sí que és solució.

    El sistema té una única solució: $(5,4)$.

!!! example "**Exemple 5:** equacions exponencials"
    Resolem el sistema

    $$
    \begin{cases}
    2^x\cdot 2^y=32\\
    3^x=3\cdot 3^y
    \end{cases}
    $$

    1. Transformem cada equació amb les propietats de les potències i la igualació de potències:

        $$
        \begin{aligned}
        2^x\cdot 2^y=2^{x+y}=2^5 &\;\Rightarrow\; x+y=5\\
        3^x=3^{1+y} &\;\Rightarrow\; x=1+y
        \end{aligned}
        $$

    2. Ens queda un sistema lineal. Substituïm $x=1+y$ a la primera equació:

        $$1+y+y=5 \;\Rightarrow\; 2y=4 \;\Rightarrow\; y=2$$

        i, per tant, $x=1+2=3$.

    El sistema té una única solució: $(3,2)$.

!!! example "**Exemple 6:** equacions logarítmiques (substitució)"
    Resolem el sistema

    $$
    \begin{cases}
    \log x+\log y=2\\
    x-y=15
    \end{cases}
    $$

    1. A la primera equació apliquem la propietat del producte i la definició de logaritme:

        $$\log(xy)=2 \;\Rightarrow\; xy=10^2=100$$

    2. Aïllem $x$ a la segona equació, $x=y+15$, i substituïm:

        $$
        \begin{aligned}
        (y+15)\,y&=100\\
        y^2+15y-100&=0
        \end{aligned}
        $$

        $$\begin{aligned}y&=\frac{-15\pm\sqrt{225+400}}{2}\\ &=\frac{-15\pm 25}{2}\\ &\Rightarrow\; y_1=5,\quad y_2=-20\end{aligned}$$

    3. Calculem $x=y+15$: obtenim els parells $(20,5)$ i $(-5,-20)$.

    4. **Comprovació.** Els arguments dels logaritmes han de ser positius. Substituïm cada parell a la primera equació, $\log x+\log y=2$:

        $$
        \begin{aligned}
        (20,5)\text{: }&\log 20+\log 5=\log 100=2\\
        (-5,-20)\text{: }&\log(-5)\ \text{no existeix}
        \end{aligned}
        $$

        El parell $(20,5)$ és solució (també compleix $20-5=15$). El parell $(-5,-20)$ no ho és.

    El sistema té una única solució: $(20,5)$.

## Taula resum

| Mètode | Com es fa | Quan és útil |
| --- | --- | --- |
| Substitució | S'aïlla una incògnita en una equació i se substitueix a l'altra | Quan una incògnita és fàcil d'aïllar (equacions de primer grau, $xy=k$...) |
| Igualació | S'aïlla la mateixa incògnita a les dues equacions i s'igualen | Quan la mateixa incògnita ja és aïllada, o és fàcil d'aïllar, a les dues equacions |
| En tots dos casos | S'obté una equació amb una incògnita; es calculen els parells $(x,y)$ | Cal comprovar les solucions si s'ha elevat al quadrat, s'ha multiplicat per una expressió amb incògnites o hi ha logaritmes |
