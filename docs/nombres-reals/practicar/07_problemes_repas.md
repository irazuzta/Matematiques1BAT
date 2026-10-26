# Problemes de repàs i aplicacions

Exercicis 101–112. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 101

*(repàs)* Simplifica combinant potències i arrels: $\sqrt{2^6}\cdot 2^{-1}$.

??? note "Mostra la solució"

    Escrivim l'arrel com a potència d'exponent fraccionari, $\sqrt{2^6}=2^{6/2}=2^3$, i després multipliquem potències de la mateixa base sumant exponents:

    $$
    \sqrt{2^6}\cdot 2^{-1}=2^3\cdot 2^{-1}=2^{3-1}=2^2=4.
    $$

    **Resposta:** $4$

### Exercici 102

*(repàs)* Calcula, en notació científica: $\left(2\cdot10^3\right)^2 \cdot \left(5\cdot10^{-2}\right)$.

??? note "Mostra la solució"

    Elevem al quadrat el primer factor (potència d'un producte i potència d'una potència):

    $$
    \left(2\cdot10^3\right)^2=2^2\cdot10^{6}=4\cdot10^6.
    $$

    Multipliquem ara els coeficients per una banda i les potències de $10$ per l'altra:

    $$
    4\cdot10^6\cdot5\cdot10^{-2}=(4\cdot5)\cdot10^{6-2}=20\cdot10^4.
    $$

    Com que $20$ no està entre $1$ i $10$, no és notació científica encara: escrivim $20=2\cdot10$ i sumem els exponents.

    $$
    20\cdot10^4=2\cdot10\cdot10^4=2\cdot10^5.
    $$

    **Resposta:** $2\cdot10^5$

### Exercici 103

*(repàs)* Simplifica $\sqrt{\dfrac{4\cdot10^{-2}}{9}}$ i expressa el resultat com una fracció.

??? note "Mostra la solució"

    L'arrel d'un quocient és el quocient d'arrels, i la d'un producte, el producte d'arrels:

    $$
    \sqrt{\frac{4\cdot10^{-2}}{9}}=\frac{\sqrt4\cdot\sqrt{10^{-2}}}{\sqrt9}.
    $$

    Com que $\sqrt4=2$, $\sqrt9=3$ i $\sqrt{10^{-2}}=10^{-1}=\dfrac1{10}$, ens queda

    $$
    \frac{2\cdot\frac1{10}}{3}=\frac{2}{10\cdot3}=\frac{2}{30}=\frac1{15}.
    $$

    Ho comprovem: $\left(\dfrac1{15}\right)^2=\dfrac1{225}$ i $\dfrac{4\cdot10^{-2}}{9}=\dfrac{0{,}04}{9}=\dfrac{4}{900}=\dfrac1{225}$.

    **Resposta:** $\dfrac1{15}$

### Exercici 104

*(repàs)* Troba l'interval solució de $|x-3|<\sqrt{16}$.

??? note "Mostra la solució"

    Primer calculem l'arrel: $\sqrt{16}=4$. La desigualtat és $|x-3|<4$, és a dir, els nombres que són a distància menor que $4$ del punt $3$. Aplicant $|x-a|<r \Leftrightarrow a-r<x<a+r$ amb $a=3$ i $r=4$:

    $$
    3-4<x<3+4 \quad\Leftrightarrow\quad -1<x<7.
    $$

    Els extrems no hi pertanyen (la desigualtat és estricta), per tant l'interval és obert.

    **Resposta:** $x\in(-1,7)$

### Exercici 105

*(repàs)* Calcula l'error relatiu, en tant per cent, de l'aproximació $\sqrt2 \approx 1{,}414$ (arrodoneix a $3$ xifres decimals).

??? note "Mostra la solució"

    El valor exacte és $x=\sqrt2=1{,}41421356\ldots$ i l'aproximació és $x'=1{,}414$. L'error absolut és

    $$
    E_a=|x-x'|=|1{,}41421356\ldots-1{,}414|=0{,}00021356\ldots\approx 0{,}000214.
    $$

    L'error relatiu és el quocient entre l'error absolut i el valor absolut del valor exacte:

    $$
    E_r=\frac{E_a}{|x|}=\frac{0{,}00021356}{1{,}41421356}\approx 0{,}000151.
    $$

    Multipliquem per $100$ per passar-ho a tant per cent: $E_r\approx 0{,}0151\%$, que arrodonit a $3$ xifres decimals és $0{,}015\%$. L'aproximació és molt bona: l'error és d'unes $15$ parts de cada $100\,000$, és a dir, una part entre uns $6\,600$.

    **Resposta:** $E_r\approx 0{,}015\%$

### Exercici 106

*(repàs · aplicat)* Una població de bacteris es multiplica per $2$ cada hora, segons $N\left(t\right)=N_0\cdot 2^t$, amb $N_0=500$.

- **a)** Quants bacteris hi ha al cap de $5$ hores?
- **b)** Quantes hores calen perquè la població arribi a $64\,000$ bacteris?

??? note "Mostra la solució"

    **a)** Substituïm $t=5$ a $N(t)=500\cdot2^t$:

    $$
    N(5)=500\cdot2^5=500\cdot32=16\,000.
    $$

    **Resposta:** al cap de $5$ hores hi ha $16\,000$ bacteris.

    **b)** Volem $N(t)=64\,000$, així que plantegem l'equació

    $$
    500\cdot2^t=64\,000.
    $$

    Dividim per $500$ per aïllar la potència:

    $$
    2^t=\frac{64\,000}{500}=128.
    $$

    Com que $128=2^7$, tenim $2^t=2^7$ i, per tant, $t=7$. Amb logaritmes arribaríem al mateix resultat: $t=\log_2128=7$. Comprovació: $500\cdot2^7=500\cdot128=64\,000$.

    **Resposta:** calen $7$ hores.

### Exercici 107

*(repàs · aplicat)* Un dipòsit cúbic té un volum de $V=125\,\text{m}^3$.

- **a)** Calcula, sense calculadora, l'aresta del cub ($V=a^3 \Rightarrow a=\sqrt[3]{V}$).
- **b)** Si es vol doblar el volum, quina hauria de ser la nova aresta $a'$? Deixa-la com a radical simplificat.

??? note "Mostra la solució"

    **a)** L'aresta és l'arrel cúbica del volum. Com que $125=5^3$,

    $$
    a=\sqrt[3]{125}=\sqrt[3]{5^3}=5.
    $$

    **Resposta:** l'aresta mesura $5\,\text{m}$.

    **b)** El volum doblat és $V'=2\cdot125=250\,\text{m}^3$, i la nova aresta és

    $$
    a'=\sqrt[3]{250}.
    $$

    Per simplificar el radical descomponem el radicand: $250=125\cdot2=5^3\cdot2$. Extraiem de l'arrel el factor que és un cub perfecte:

    $$
    a'=\sqrt[3]{5^3\cdot2}=5\sqrt[3]{2}.
    $$

    Interpretació: com que $\sqrt[3]{2}\approx1{,}26$, l'aresta només augmenta un $26\%$ (de $5$ a uns $6{,}30\,\text{m}$) per doblar el volum, no el doble.

    **Resposta:** la nova aresta és $a'=5\sqrt[3]{2}\,\text{m}\approx 6{,}30\,\text{m}$.

### Exercici 108

*(repàs · aplicat)* La intensitat sonora $\beta$ (en decibels) es calcula com $\beta=10\log\left(\dfrac{I}{I_0}\right)$, amb $I_0=10^{-12}\,\text{W/m}^2$ el llindar d'audició. Calcula la intensitat sonora, en decibels, d'un so amb $I=10^{-4}\,\text{W/m}^2$.

??? note "Mostra la solució"

    Substituïm les dades a la fórmula. Primer calculem el quocient de potències de $10$ (restant exponents):

    $$
    \frac{I}{I_0}=\frac{10^{-4}}{10^{-12}}=10^{-4-(-12)}=10^{8}.
    $$

    Ara el logaritme decimal (base $10$) d'una potència de $10$ és l'exponent, ja que $\log10^8=8$:

    $$
    \beta=10\log\left(10^{8}\right)=10\cdot8=80.
    $$

    Interpretació: el so és $10^8$ vegades més intens que el llindar d'audició, i això correspon a $80$ decibels.

    **Resposta:** $\beta=80\,\text{dB}$.

### Exercici 109

*(repàs global)* Simplifica pas a pas fins a obtenir un únic nombre:

$$\dfrac{\sqrt{50}-\sqrt{8}}{\sqrt2} + \log_2 16 - |{-3}|$$

??? note "Mostra la solució"

    Tractem cada terme per separat. Per a la fracció, extraiem factors dels radicands: $50=2\cdot5^2$ i $8=2^3$, així que

    $$
    \sqrt{50}=5\sqrt2,\qquad \sqrt8=\sqrt{2^2\cdot2}=2\sqrt2.
    $$

    El numerador queda $5\sqrt2-2\sqrt2=3\sqrt2$ (radicals semblants), i dividim per $\sqrt2$:

    $$
    \frac{\sqrt{50}-\sqrt{8}}{\sqrt2}=\frac{3\sqrt2}{\sqrt2}=3.
    $$

    Pel que fa al logaritme, com que $2^4=16$, tenim $\log_216=4$. I el valor absolut és $|{-3}|=3$. Ho ajuntem tot:

    $$
    3+4-3=4.
    $$

    **Resposta:** $4$

### Exercici 110

*(repàs global)* Considera $A=\dfrac{3^2\cdot\sqrt4}{3}$ i $B=\log_2\left(\dfrac{32}{4}\right)$.

- **a)** Calcula el valor numèric de $A$ i de $B$.
- **b)** Troba l'interval solució de $|x-A|<B$.

??? note "Mostra la solució"

    **a)** Per a $A$: $3^2=9$ i $\sqrt4=2$, per tant

    $$
    A=\frac{9\cdot2}{3}=\frac{18}{3}=6.
    $$

    Per a $B$: $\dfrac{32}{4}=8$ i $2^3=8$, així que

    $$
    B=\log_2 8=3.
    $$

    **Resposta:** $A=6$ i $B=3$.

    **b)** La desigualtat és $|x-6|<3$: els punts a distància menor que $3$ del $6$. Com que $|x-a|<r \Leftrightarrow a-r<x<a+r$,

    $$
    6-3<x<6+3\quad\Leftrightarrow\quad 3<x<9.
    $$

    **Resposta:** $x\in(3,9)$

### Exercici 111

Digues si cada afirmació és certa o falsa. Si és falsa, dona un contraexemple:

- **a)** $\sqrt{a^2}=a$ per a tot $a\in\mathbb{R}$.
- **b)** $|a+b|=|a|+|b|$ per a tot $a,b\in\mathbb{R}$.
- **c)** $\log\left(x+y\right)=\log x+\log y$ per a tot $x,y>0$.
- **d)** $\sqrt[3]{a}$ existeix per a tot $a\in\mathbb{R}$.
- **e)** Si $|x|<3$, aleshores $x<3$.
- **f)** $\left(a+b\right)^2=a^2+b^2$ per a tot $a,b\in\mathbb{R}$.

??? note "Mostra la solució"

    Per refutar una afirmació "per a tot" n'hi ha prou amb un sol cas on falli (un contraexemple). Per acceptar-la, cal justificar-la en general.

    **a)** És falsa. Si $a=-2$, llavors $\sqrt{a^2}=\sqrt{4}=2\neq-2=a$. Una arrel quadrada mai és negativa; el que és cert en general és $\sqrt{a^2}=|a|$.

    **Resposta:** Falsa (contraexemple: $a=-2$, $\sqrt{(-2)^2}=2\neq-2$).

    **b)** És falsa. Si $a=1$ i $b=-1$, llavors $|a+b|=|0|=0$, però $|a|+|b|=1+1=2$. En general només es compleix la desigualtat $|a+b|\leq|a|+|b|$, i la igualtat quan $a$ i $b$ tenen el mateix signe.

    **Resposta:** Falsa (contraexemple: $a=1$, $b=-1$, $0\neq2$).

    **c)** És falsa. Si $x=y=1$, llavors $\log(x+y)=\log2\approx0{,}301$, mentre que $\log x+\log y=\log1+\log1=0+0=0$. La propietat correcta és que el logaritme d'un **producte** és la suma de logaritmes: $\log(xy)=\log x+\log y$.

    **Resposta:** Falsa (contraexemple: $x=y=1$, $\log2\neq0$).

    **d)** És certa. L'arrel cúbica té índex senar, i per a un índex senar l'equació $x^3=a$ té exactament una solució real per a qualsevol $a$, positiu, negatiu o zero. Per exemple, $\sqrt[3]{-8}=-2$ perquè $(-2)^3=-8$.

    **Resposta:** Certa (l'índex és senar; p. ex. $\sqrt[3]{-8}=-2$).

    **e)** És certa. Per la propietat del valor absolut, $|x|<3 \Leftrightarrow -3<x<3$, i en particular $x<3$. (El recíproc no és cert: $x=-10$ compleix $x<3$ però no $|x|<3$.)

    **Resposta:** Certa ($|x|<3 \Leftrightarrow -3<x<3$, que implica $x<3$).

    **f)** És falsa. Si $a=b=1$, llavors $(a+b)^2=2^2=4$, però $a^2+b^2=1+1=2$. L'identitat notable correcta és $(a+b)^2=a^2+2ab+b^2$; el terme $2ab$ només s'anul·la si $a=0$ o $b=0$.

    **Resposta:** Falsa (contraexemple: $a=b=1$, $4\neq2$).

### Exercici 112

*(aplicat)* El període d'oscil·lació $T$ d'un pèndol simple de longitud $L$ ve donat per

$$T=2\pi\sqrt{\dfrac{L}{g}},$$

on $g$ és l'acceleració de la gravetat (constant). Demostra que, per aconseguir que el període es dupliqui, cal multiplicar la longitud del pèndol per $4$.

??? note "Mostra la solució"

    Sigui $L_1$ la longitud inicial, amb període $T_1=2\pi\sqrt{\dfrac{L_1}{g}}$, i $L_2$ la nova longitud, amb període $T_2=2\pi\sqrt{\dfrac{L_2}{g}}$. Volem que el període es dupliqui, és a dir $T_2=2T_1$:

    $$
    2\pi\sqrt{\frac{L_2}{g}}=2\cdot2\pi\sqrt{\frac{L_1}{g}}.
    $$

    Simplifiquem el factor comú $2\pi$ (que no és zero) i obtenim

    $$
    \sqrt{\frac{L_2}{g}}=2\sqrt{\frac{L_1}{g}}.
    $$

    Per treure les arrels, elevem al quadrat els dos membres (són positius, per tant no s'introdueixen solucions falses):

    $$
    \frac{L_2}{g}=4\cdot\frac{L_1}{g}.
    $$

    Multipliquem per $g$ (constant i no nul·la):

    $$
    L_2=4L_1.
    $$

    Comprovació en sentit contrari: si $L_2=4L_1$, llavors $T_2=2\pi\sqrt{\dfrac{4L_1}{g}}=2\pi\cdot\sqrt4\cdot\sqrt{\dfrac{L_1}{g}}=2\cdot\left(2\pi\sqrt{\dfrac{L_1}{g}}\right)=2T_1$.

    **Resposta:** per duplicar el període cal multiplicar la longitud per $4$ ($L_2=4L_1$), independentment del valor de $g$.
