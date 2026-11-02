# Exercicis inspirats en les PAU

Exercicis 61–75. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

> Aquests exercicis surten de les proves PAU de Matemàtiques de Catalunya (2021–2026). Als exàmens originals, aquests càlculs formen part d'un problema més ampli —de funcions, derivades, sistemes lineals, matrius o geometria, propis de 2n de Batxillerat— i aquí n'aïllem només l'equació o la inequació que cal resoldre. Quan hem adaptat l'enunciat, ho indiquem.

### Exercici 61

En discutir sistemes d'equacions lineals i matrius que depenen d'un paràmetre, cal saber quan s'anul·la un determinant. Resol les equacions següents:

| | |
|:--|:--|
| **a)** *(PAU 2021)* $-p^3+3p^2-2p=0$ | **b)** *(PAU 2023)* $9\lambda^3+9=0$ |
| **c)** *(PAU 2022)* $15a^2-60=0$ | **d)** *(PAU 2026)* $3k^2-9k-12=0$ |

??? note "Mostra la solució"

    **a)** Traiem factor comú $-p$ i resolem l'equació de segon grau que queda:

    $$
    \begin{aligned}
    -p^3+3p^2-2p&=0\\
    -p\,(p^2-3p+2)&=0
    \end{aligned}
    $$

    Un producte val zero quan algun dels factors val zero:

    - $-p=0 \;\Rightarrow\; p=0$
    - $p^2-3p+2=0 \;\Rightarrow\; p=\dfrac{3\pm\sqrt{9-8}}{2}=\dfrac{3\pm 1}{2} \;\Rightarrow\; p=1,\quad p=2$

    **Resposta:** $p=0$, $p=1$ i $p=2$

    **b)** Dividim per $9$ i aïllem el cub:

    $$
    \begin{aligned}
    9\lambda^3+9&=0\\
    \lambda^3&=-1\\
    \lambda&=\sqrt[3]{-1}=-1
    \end{aligned}
    $$

    L'arrel cúbica d'un nombre negatiu existeix i és negativa. (També podem factoritzar: $\lambda^3+1=(\lambda+1)(\lambda^2-\lambda+1)$, i el segon factor no té arrels reals perquè $\Delta=1-4<0$.)

    **Resposta:** $\lambda=-1$

    **c)** És una equació de segon grau incompleta:

    $$
    \begin{aligned}
    15a^2-60&=0\\
    a^2&=\frac{60}{15}=4\\
    a&=\pm 2
    \end{aligned}
    $$

    **Resposta:** $a=2$ i $a=-2$

    **d)** Dividim per $3$ i apliquem la fórmula:

    $$
    \begin{aligned}
    k^2-3k-4&=0\\
    k&=\frac{3\pm\sqrt{9+16}}{2}=\frac{3\pm 5}{2}\\
    &\Rightarrow\; k=4,\quad k=-1
    \end{aligned}
    $$

    **Resposta:** $k=-1$ i $k=4$

### Exercici 62

*(PAU 2022)* Resol les equacions següents, sabent que la incògnita és positiva:

- **a)** $\dfrac{a^4}{12}=108$ (condició d'àrea en un problema d'integrals).
- **b)** $x-\dfrac{400}{x^3}=0$ (costat oblic mínim d'un trapezi).

??? note "Mostra la solució"

    **a)** Aïllem la quarta potència:

    $$
    \begin{aligned}
    \frac{a^4}{12}&=108\\
    a^4&=1296\\
    a&=\pm\sqrt[4]{1296}=\pm 6
    \end{aligned}
    $$

    (En efecte, $6^4=36^2=1296$.) Com que $a$ és positiu, ens quedem amb $a=6$.

    **Resposta:** $a=6$

    **b)** Multipliquem els dos membres per $x^3$, que no és zero perquè $x>0$:

    $$
    \begin{aligned}
    x-\frac{400}{x^3}&=0\\
    x^4-400&=0\\
    x^4&=400
    \end{aligned}
    $$

    És una biquadrada sense terme en $x^2$. Amb el canvi $t=x^2$ queda $t^2=400$, és a dir, $t=\pm 20$. Com que $t=x^2$ no pot ser negatiu, descartem $t=-20$, i de $x^2=20$ obtenim $x=\pm\sqrt{20}$. Com que $x>0$:

    $$x=\sqrt{20}=2\sqrt5\approx 4{,}47$$

    **Resposta:** $x=2\sqrt5\approx 4{,}47$

### Exercici 63

*(PAU 2021)* En buscar el triangle d'àrea mínima apareix l'expressió $(a^2+4)(3a^2-4)$, amb $a>0$.

- **a)** Resol l'equació $(a^2+4)(3a^2-4)=0$ per a $a>0$.
- **b)** Per a quins valors de $a>0$ és $3a^2-4>0$?

??? note "Mostra la solució"

    **a)** Un producte val zero quan algun dels factors val zero:

    - $a^2+4=0 \;\Rightarrow\; a^2=-4$, que no té solució: un quadrat no pot ser negatiu.
    - $3a^2-4=0 \;\Rightarrow\; a^2=\dfrac43 \;\Rightarrow\; a=\pm\dfrac{2}{\sqrt3}$

    Com que $a>0$, ens quedem amb el valor positiu, i racionalitzem:

    $$a=\frac{2}{\sqrt3}=\frac{2\sqrt3}{3}\approx 1{,}15$$

    **Resposta:** $a=\dfrac{2\sqrt3}{3}$

    **b)** La paràbola $y=3a^2-4$ és oberta cap amunt ($\cup$) i talla l'eix a $a=\pm\dfrac{2\sqrt3}{3}$. És positiva **fora** de les arrels: $a<-\dfrac{2\sqrt3}{3}$ o $a>\dfrac{2\sqrt3}{3}$. Com que només ens interessen els valors positius:

    **Resposta:** $a>\dfrac{2\sqrt3}{3}$, és a dir, $a\in\left(\dfrac{2\sqrt3}{3},+\infty\right)$

### Exercici 64

Equacions amb una condició afegida:

- **a)** *(PAU 2022)* Resol l'equació $3a^2-12a+9=0$ sabent que $a>2$.
- **b)** *(PAU 2026)* Perquè una funció definida a trossos sigui contínua cal que es compleixin alhora $m^2+1=5$ i $(2+m)^2+1=1$. Troba el valor de $m$.

??? note "Mostra la solució"

    **a)** Dividim per $3$ i apliquem la fórmula:

    $$
    \begin{aligned}
    a^2-4a+3&=0\\
    a&=\frac{4\pm\sqrt{16-12}}{2}=\frac{4\pm 2}{2}\\
    &\Rightarrow\; a=3,\quad a=1
    \end{aligned}
    $$

    La condició $a>2$ descarta $a=1$.

    **Resposta:** $a=3$

    **b)** Resolem cada equació per separat i ens quedem amb les solucions comunes.

    Primera equació:

    $$m^2+1=5 \;\Rightarrow\; m^2=4 \;\Rightarrow\; m=\pm 2$$

    Segona equació:

    $$(2+m)^2+1=1 \;\Rightarrow\; (2+m)^2=0 \;\Rightarrow\; m=-2$$

    L'únic valor que compleix les dues equacions alhora és $m=-2$. (El valor $m=2$ compleix la primera, però no la segona: $(2+2)^2+1=17\neq 1$.)

    **Resposta:** $m=-2$

### Exercici 65

*(PAU 2026)* Una paràbola talla l'eix $OX$ en $x=0$ i en $x=5$, i el seu vèrtex és a una altura de $6{,}25$. Escriu-la de la forma $f(x)=a\,x(x-5)$ i troba el valor de $a$.

??? note "Mostra la solució"

    Una paràbola que talla l'eix $OX$ en $x=0$ i $x=5$ és de la forma $f(x)=a\,x(x-5)$. Per simetria, el vèrtex és al punt mitjà de les dues arrels:

    $$x_v=\frac{0+5}{2}=\frac52$$

    Imposem que l'altura del vèrtex sigui $6{,}25=\dfrac{25}{4}$:

    $$
    \begin{aligned}
    a\cdot\frac52\cdot\left(\frac52-5\right)&=\frac{25}{4}\\
    a\cdot\frac52\cdot\left(-\frac52\right)&=\frac{25}{4}\\
    -\frac{25}{4}\,a&=\frac{25}{4}\\
    a&=-1
    \end{aligned}
    $$

    Per tant, $f(x)=-x(x-5)=-x^2+5x$. Comprovem-ho: $f\left(\dfrac52\right)=-\dfrac{25}{4}+\dfrac{25}{2}=\dfrac{25}{4}=6{,}25$.

    **Resposta:** $a=-1$, és a dir, $f(x)=-x^2+5x$

### Exercici 66

*(PAU 2026)* Resol les equacions racionals següents:

- **a)** $-x^2+5x=8-\dfrac{8}{x+1}$ (punts de tall d'una paràbola i una hipèrbola).
- **b)** $-1+\dfrac{2}{2x-1}=0$ (punts crítics d'una funció).

??? note "Mostra la solució"

    **a)** El valor $x=-1$ anul·la un denominador, i per tant no pot ser solució. Multipliquem els dos membres per $x+1$:

    $$
    \begin{aligned}
    (x+1)(-x^2+5x)&=8(x+1)-8\\
    -x^3+5x^2-x^2+5x&=8x+8-8\\
    -x^3+4x^2+5x&=8x\\
    -x^3+4x^2-3x&=0
    \end{aligned}
    $$

    Traiem factor comú $-x$:

    $$-x\,(x^2-4x+3)=0$$

    - $-x=0 \;\Rightarrow\; x=0$
    - $x^2-4x+3=0 \;\Rightarrow\; x=\dfrac{4\pm\sqrt{16-12}}{2}=\dfrac{4\pm 2}{2} \;\Rightarrow\; x=1,\quad x=3$

    Cap dels tres valors anul·la el denominador. Comprovem-los a l'equació original:

    $$
    \begin{aligned}
    x=0&:\quad 0=8-\frac{8}{1}=0\\
    x=1&:\quad -1+5=4,\qquad 8-\frac82=4\\
    x=3&:\quad -9+15=6,\qquad 8-\frac84=6
    \end{aligned}
    $$

    **Resposta:** $x=0$, $x=1$ i $x=3$ (les gràfiques es tallen als punts $(0,0)$, $(1,4)$ i $(3,6)$)

    **b)** El valor $x=\dfrac12$ anul·la el denominador. Passem el $-1$ a l'altre membre i multipliquem per $2x-1$:

    $$
    \begin{aligned}
    \frac{2}{2x-1}&=1\\
    2&=2x-1\\
    x&=\frac32
    \end{aligned}
    $$

    Comprovem-ho: $-1+\dfrac{2}{3-1}=-1+1=0$.

    **Resposta:** $x=\dfrac32$

### Exercici 67

*(PAU 2023)* Un poble $A$ és a $12$ km d'un encreuament $O$, i un poble $B$ és a $9$ km de l'encreuament per una carretera perpendicular. Volem situar una torre $T$ entre $A$ i $O$, a $x$ km de $O$. En buscar el cablejat més barat cal resoldre l'equació $\sqrt{81+x^2}=2x$. Resol-la i comprova la solució.

??? note "Mostra la solució"

    Com que $x$ és una distància, $0\leq x\leq 12$. Elevem els dos membres al quadrat:

    $$
    \begin{aligned}
    \sqrt{81+x^2}&=2x\\
    81+x^2&=4x^2\\
    81&=3x^2\\
    x^2&=27\\
    x&=\pm\sqrt{27}=\pm 3\sqrt3
    \end{aligned}
    $$

    En elevar al quadrat poden aparèixer solucions falses. Comprovem-les a l'equació original:

    - $x=3\sqrt3$: el primer membre val $\sqrt{81+27}=\sqrt{108}=6\sqrt3$ i el segon, $2\cdot 3\sqrt3=6\sqrt3$. És solució.
    - $x=-3\sqrt3$: el segon membre és negatiu, $-6\sqrt3$, i una arrel quadrada no pot ser negativa. És una solució falsa (i, a més, no és una distància).

    **Resposta:** $x=3\sqrt3\approx 5{,}20$ km

### Exercici 68

*(PAU 2022, més difícil)* Un cable va del punt $A=(2,0,2)$ al punt $C=(0,0,h)$ i d'aquí al punt $B=(0,2,1)$. En buscar la longitud mínima apareix l'equació

$$\frac{h-2}{\sqrt{h^2-4h+8}}+\frac{h-1}{\sqrt{h^2-2h+5}}=0$$

Resol-la i comprova la solució.

??? note "Mostra la solució"

    Passem el segon terme a l'altre membre i multipliquem en creu:

    $$
    \begin{aligned}
    \frac{h-2}{\sqrt{h^2-4h+8}}&=-\frac{h-1}{\sqrt{h^2-2h+5}}\\
    (h-2)\sqrt{h^2-2h+5}&=-(h-1)\sqrt{h^2-4h+8}
    \end{aligned}
    $$

    Les arrels sempre són positives, de manera que els dos membres només poden ser iguals si $h-2$ i $h-1$ tenen signes contraris, és a dir, si $1<h<2$. Ho tindrem en compte en comprovar la solució.

    Elevem els dos membres al quadrat:

    $$(h-2)^2(h^2-2h+5)=(h-1)^2(h^2-4h+8)$$

    Desenvolupem cada membre:

    $$
    \begin{aligned}
    &(h^2-4h+4)(h^2-2h+5)\\
    &\quad=h^4-6h^3+17h^2-28h+20\\[6pt]
    &(h^2-2h+1)(h^2-4h+8)\\
    &\quad=h^4-6h^3+17h^2-20h+8
    \end{aligned}
    $$

    Els termes de grau $4$, $3$ i $2$ són iguals i s'anul·len. Ens queda una equació de primer grau:

    $$
    \begin{aligned}
    -28h+20&=-20h+8\\
    -8h&=-12\\
    h&=\frac32
    \end{aligned}
    $$

    Comprovem-ho a l'equació original. Com que $1<\dfrac32<2$, la condició de signes es compleix:

    $$
    \begin{aligned}
    \frac{-\frac12}{\sqrt{\frac94-6+8}}+\frac{\frac12}{\sqrt{\frac94-3+5}}
    &=\frac{-\frac12}{\sqrt{\frac{17}{4}}}+\frac{\frac12}{\sqrt{\frac{17}{4}}}=0
    \end{aligned}
    $$

    Per tant, $h=\dfrac32$ és solució. La longitud del cable és llavors $\sqrt{\dfrac{17}{4}}+\sqrt{\dfrac{17}{4}}=2\cdot\dfrac{\sqrt{17}}{2}=\sqrt{17}$.

    **Resposta:** $h=\dfrac32$ (i la longitud mínima del cable és $\sqrt{17}$)

### Exercici 69

Resol les equacions exponencials i logarítmiques següents:

- **a)** *(PAU 2021)* $e^{x-1}-1=0$. Per a quins valors de $x$ és $e^{x-1}-1>0$?
- **b)** *(PAU 2024)* $\dfrac{2(1-\ln x)}{x^2}=0$
- **c)** *(PAU 2024)* $e^{-2x}(1-2x)=0$
- **d)** *(PAU 2023)* $-3x+e^{2x-1}=-3x^2+e^{2x-1}$

??? note "Mostra la solució"

    **a)** Aïllem l'exponencial i igualem exponents:

    $$
    \begin{aligned}
    e^{x-1}&=1=e^0\\
    x-1&=0\\
    x&=1
    \end{aligned}
    $$

    Com que la funció exponencial de base $e>1$ és creixent, $e^{x-1}>1=e^0$ quan l'exponent és positiu, és a dir, quan $x-1>0$.

    **Resposta:** $x=1$; l'expressió és positiva per a $x>1$

    **b)** Una fracció val zero quan s'anul·la el numerador (el denominador $x^2$ no és zero, perquè el logaritme obliga que $x>0$):

    $$
    \begin{aligned}
    2(1-\ln x)&=0\\
    \ln x&=1\\
    x&=e^1=e
    \end{aligned}
    $$

    **Resposta:** $x=e$

    **c)** Un producte val zero quan algun factor val zero. Però $e^{-2x}>0$ per a qualsevol $x$: una exponencial mai val zero. Per tant:

    $$1-2x=0 \;\Rightarrow\; x=\frac12$$

    **Resposta:** $x=\dfrac12$

    **d)** El terme $e^{2x-1}$ apareix als dos membres i el podem restar:

    $$
    \begin{aligned}
    -3x&=-3x^2\\
    3x^2-3x&=0\\
    3x(x-1)&=0
    \end{aligned}
    $$

    **Resposta:** $x=0$ i $x=1$

### Exercici 70

Sistemes no lineals:

- **a)** *(PAU 2023)* Troba tots els parells $(a,b)$ que compleixen $\begin{cases}2ab=0\\ a^2+b^2=1\end{cases}$
- **b)** *(PAU 2025)* Quins valors de $a$ compleixen alhora $a^2+a=0$ i $a^2=1$?
- **c)** *(PAU 2025)* Les solucions d'un sistema lineal són $(x,y,z)=(\lambda+3,\ \lambda,\ \lambda-2)$, amb $\lambda\in\mathbb{R}$. Quines compleixen, a més, $xy=10$?

??? note "Mostra la solució"

    **a)** La primera equació diu que $a=0$ o $b=0$. Estudiem els dos casos amb la segona equació:

    - Si $a=0$: $b^2=1 \;\Rightarrow\; b=\pm 1$. Obtenim $(0,1)$ i $(0,-1)$.
    - Si $b=0$: $a^2=1 \;\Rightarrow\; a=\pm 1$. Obtenim $(1,0)$ i $(-1,0)$.

    **Resposta:** $(0,1)$, $(0,-1)$, $(1,0)$ i $(-1,0)$

    **b)** Resolem cada equació i ens quedem amb les solucions comunes:

    $$
    \begin{aligned}
    a^2+a=0 \;&\Rightarrow\; a(a+1)=0 \;\Rightarrow\; a=0,\ a=-1\\
    a^2=1 \;&\Rightarrow\; a=1,\ a=-1
    \end{aligned}
    $$

    L'única solució comuna és $a=-1$.

    **Resposta:** $a=-1$

    **c)** Substituïm $x=\lambda+3$ i $y=\lambda$ a la condició $xy=10$:

    $$
    \begin{aligned}
    (\lambda+3)\lambda&=10\\
    \lambda^2+3\lambda-10&=0\\
    \lambda&=\frac{-3\pm\sqrt{9+40}}{2}=\frac{-3\pm 7}{2}\\
    &\Rightarrow\; \lambda=2,\quad \lambda=-5
    \end{aligned}
    $$

    Calculem les solucions:

    - $\lambda=2$: $(x,y,z)=(5,2,0)$, i $xy=5\cdot 2=10$.
    - $\lambda=-5$: $(x,y,z)=(-2,-5,-7)$, i $xy=(-2)(-5)=10$.

    **Resposta:** $(5,2,0)$ i $(-2,-5,-7)$

### Exercici 71

Per estudiar on creix o decreix una funció cal saber on la seva derivada és positiva. Resol les inequacions següents:

| | |
|:--|:--|
| **a)** *(PAU 2021)* $3x^2-9>0$ | **b)** *(PAU 2022)* $-3x^2+12x>0$ |
| **c)** *(PAU 2025)* $-m^2-2m+3>0$ | **d)** *(PAU 2026)* $-5x^2+5>0$ |

??? note "Mostra la solució"

    **a)** La paràbola $y=3x^2-9$ és oberta cap amunt ($\cup$). Els punts de tall:

    $$3x^2-9=0 \;\Rightarrow\; x^2=3 \;\Rightarrow\; x=\pm\sqrt3$$

    Volem que sigui $>0$: **fora** de les arrels.

    **Resposta:** $\left(-\infty,-\sqrt3\right)\cup\left(\sqrt3,+\infty\right)$

    **b)** La paràbola $y=-3x^2+12x$ és oberta cap avall ($\cap$). Els punts de tall:

    $$
    \begin{aligned}
    -3x^2+12x=0 \;&\Rightarrow\; -3x(x-4)=0\\
    &\Rightarrow\; x=0,\quad x=4
    \end{aligned}
    $$

    Una paràbola $\cap$ és per sobre de l'eix **entre** les arrels.

    **Resposta:** $(0,4)$

    **c)** La paràbola $y=-m^2-2m+3$ és oberta cap avall ($\cap$). Els punts de tall:

    $$
    \begin{aligned}
    &-m^2-2m+3=0 \;\Rightarrow\; m^2+2m-3=0\\
    &m=\frac{-2\pm\sqrt{4+12}}{2}=\frac{-2\pm 4}{2}\\
    &\Rightarrow\; m=1,\quad m=-3
    \end{aligned}
    $$

    És positiva **entre** les arrels.

    **Resposta:** $(-3,1)$

    **d)** La paràbola $y=-5x^2+5$ és oberta cap avall ($\cap$). Els punts de tall:

    $$-5x^2+5=0 \;\Rightarrow\; x^2=1 \;\Rightarrow\; x=\pm 1$$

    És positiva **entre** les arrels.

    **Resposta:** $(-1,1)$

### Exercici 72

*(PAU 2023)* Considerem les paràboles $f(x)=-x^2+x+6$ i $g(x)=3x^2-9x$. Troba els punts de tall i l'interval on la gràfica de $f$ és per sobre de la de $g$.

??? note "Mostra la solució"

    Els punts de tall són les solucions de $f(x)=g(x)$. Ho passem tot a un membre:

    $$
    \begin{aligned}
    -x^2+x+6&=3x^2-9x\\
    0&=4x^2-10x-6\\
    0&=2x^2-5x-3
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{5\pm\sqrt{25+24}}{4}=\frac{5\pm 7}{4}\\
    &\Rightarrow\; x=3,\quad x=-\frac12
    \end{aligned}
    $$

    Els punts de tall són $(3,f(3))=(3,0)$ i $\left(-\dfrac12,f\left(-\dfrac12\right)\right)=\left(-\dfrac12,\dfrac{21}{4}\right)$.

    La gràfica de $f$ és per sobre de la de $g$ quan $f(x)>g(x)$, és a dir, quan

    $$2x^2-5x-3<0.$$

    La paràbola $y=2x^2-5x-3$ és $\cup$, i és negativa **entre** les arrels.

    **Resposta:** Es tallen a $x=-\dfrac12$ i $x=3$; $f$ és per sobre de $g$ a $\left(-\dfrac12,3\right)$

### Exercici 73

*(PAU 2022, adaptat)* Els catets d'un triangle rectangle sumen $10$ cm. Anomenem $x$ un dels catets.

- **a)** Quant han de fer els catets perquè la hipotenusa sigui $\sqrt{58}$ cm?
- **b)** Quins valors pot prendre $x$ perquè l'àrea sigui, com a mínim, de $12\ \text{cm}^2$?

??? note "Mostra la solució"

    Si un catet fa $x$ cm, l'altre fa $10-x$ cm, amb $0<x<10$.

    **a)** Pel teorema de Pitàgores:

    $$
    \begin{aligned}
    x^2+(10-x)^2&=58\\
    x^2+100-20x+x^2&=58\\
    2x^2-20x+42&=0\\
    x^2-10x+21&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{10\pm\sqrt{100-84}}{2}=\frac{10\pm 4}{2}\\
    &\Rightarrow\; x=7,\quad x=3
    \end{aligned}
    $$

    Les dues solucions donen el mateix triangle: si un catet fa $3$ cm, l'altre en fa $7$, i al revés. Comprovem-ho: $3^2+7^2=9+49=58$.

    **Resposta:** Els catets fan $3$ cm i $7$ cm

    **b)** L'àrea d'un triangle rectangle és la meitat del producte dels catets:

    $$
    \begin{aligned}
    \frac{x(10-x)}{2}&\geq 12\\
    10x-x^2&\geq 24\\
    0&\geq x^2-10x+24
    \end{aligned}
    $$

    És a dir, $x^2-10x+24\leq 0$. La paràbola és $\cup$ i els punts de tall són:

    $$
    \begin{aligned}
    x&=\frac{10\pm\sqrt{100-96}}{2}=\frac{10\pm 2}{2}\\
    &\Rightarrow\; x=4,\quad x=6
    \end{aligned}
    $$

    Volem que sigui $\leq 0$: **entre** les arrels, incloses. L'interval $[4,6]$ està dins de $(0,10)$.

    **Resposta:** $4\leq x\leq 6$

### Exercici 74

*(PAU 2023, adaptat)* Una peça metàl·lica té forma de trapezi isòsceles: la base petita fa $x$ mm, la gran fa $3x$ mm i els costats oblics fan $10$ mm.

- **a)** Comprova que l'altura és $h=\sqrt{100-x^2}$ i que l'àrea és $A(x)=2x\sqrt{100-x^2}$.
- **b)** Per a quins valors de $x$ l'àrea és de $96\ \text{mm}^2$?

??? note "Mostra la solució"

    **a)** La base gran sobresurt $3x-x=2x$ respecte de la petita, és a dir, $x$ per cada costat. Cada costat oblic és la hipotenusa d'un triangle rectangle de catets $x$ i $h$:

    $$x^2+h^2=10^2 \;\Rightarrow\; h=\sqrt{100-x^2}$$

    L'àrea del trapezi és la semisuma de les bases per l'altura:

    $$A(x)=\frac{x+3x}{2}\cdot h=2x\sqrt{100-x^2}$$

    **b)** Igualem l'àrea a $96$ i dividim per $2$:

    $$x\sqrt{100-x^2}=48$$

    Elevem al quadrat (els dos membres són positius, perquè $x>0$):

    $$
    \begin{aligned}
    x^2(100-x^2)&=2304\\
    100x^2-x^4&=2304\\
    x^4-100x^2+2304&=0
    \end{aligned}
    $$

    És una equació biquadrada. Amb el canvi $t=x^2$:

    $$
    \begin{aligned}
    t^2-100t+2304&=0\\
    t&=\frac{100\pm\sqrt{10000-9216}}{2}\\
    &=\frac{100\pm 28}{2}\\
    &\Rightarrow\; t=64,\quad t=36
    \end{aligned}
    $$

    Desfem el canvi i ens quedem amb les solucions positives: $x^2=64\Rightarrow x=8$ i $x^2=36\Rightarrow x=6$. Comprovem-les:

    $$
    \begin{aligned}
    x=6&:\quad 2\cdot 6\cdot\sqrt{100-36}=12\cdot 8=96\\
    x=8&:\quad 2\cdot 8\cdot\sqrt{100-64}=16\cdot 6=96
    \end{aligned}
    $$

    **Resposta:** $x=6$ mm o $x=8$ mm

### Exercici 75

*(PAU 2026)* D'una planxa de cartró de $80\times 50$ cm fem una caixa amb tapa d'altura $x$ cm. La caixa fa $40-x$ cm de llarg i $50-2x$ cm d'ample, i el seu volum és $V(x)=2x^3-130x^2+2000x$.

- **a)** Quins valors pot prendre $x$ perquè la caixa tingui sentit?
- **b)** El volum màxim s'obté en una de les solucions de l'equació $6x^2-260x+2000=0$. Resol-la i digues quina té sentit.

??? note "Mostra la solució"

    **a)** Les tres dimensions de la caixa han de ser positives:

    $$
    \begin{cases}
    x>0\\
    40-x>0 \;\Rightarrow\; x<40\\
    50-2x>0 \;\Rightarrow\; x<25
    \end{cases}
    $$

    Les tres condicions alhora es compleixen per a $0<x<25$.

    **Resposta:** $0<x<25$

    **b)** Dividim per $2$ i apliquem la fórmula:

    $$
    \begin{aligned}
    3x^2-130x+1000&=0\\
    x&=\frac{130\pm\sqrt{16900-12000}}{6}\\
    &=\frac{130\pm 70}{6}\\
    &\Rightarrow\; x=\frac{100}{3},\quad x=10
    \end{aligned}
    $$

    La solució $x=\dfrac{100}{3}\approx 33{,}3$ no compleix $0<x<25$: l'amplada seria $50-2\cdot\dfrac{100}{3}<0$. Només té sentit $x=10$, que dona una caixa de $30\times 30\times 10$ cm i un volum de $9000\ \text{cm}^3$.

    **Resposta:** $x=10$ cm (la solució $x=\dfrac{100}{3}$ no té sentit)
