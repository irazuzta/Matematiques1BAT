# Equacions de primer i segon grau

Exercicis 1–7. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 1

Resol les equacions de primer grau següents:

| | |
|:--|:--|
| **a)** $3(x-2)-2(x+1)=5-x$ | **b)** $\dfrac{x-1}{2}-\dfrac{x+3}{3}=1-\dfrac{x}{6}$ |
| **c)** $2(x+3)-x=x+6$ | **d)** $4x-2(2x-1)=3$ |

??? note "Mostra la solució"

    **a)** Traiem els parèntesis aplicant la propietat distributiva i agrupem les $x$ en un costat i els nombres a l'altre:

    $$
    \begin{aligned}
    3(x-2)-2(x+1)&=5-x\\
    3x-6-2x-2&=5-x\\
    x-8&=5-x\\
    x+x&=5+8\\
    2x&=13 \;\Rightarrow\; x=\frac{13}{2}
    \end{aligned}
    $$

    **Resposta:** $x=\dfrac{13}{2}$

    **b)** El denominador comú és $\text{m.c.m.}(2,3,6)=6$. Multipliquem els dos membres per $6$ per eliminar els denominadors:

    $$
    \begin{aligned}
    6\cdot\frac{x-1}{2}-6\cdot\frac{x+3}{3}&=6\cdot 1-6\cdot\frac{x}{6}\\
    3(x-1)-2(x+3)&=6-x\\
    3x-3-2x-6&=6-x\\
    x-9&=6-x\\
    2x&=15 \;\Rightarrow\; x=\frac{15}{2}
    \end{aligned}
    $$

    **Resposta:** $x=\dfrac{15}{2}$

    **c)** Traiem el parèntesi i simplifiquem:

    $$
    \begin{aligned}
    2(x+3)-x&=x+6\\
    2x+6-x&=x+6\\
    x+6&=x+6\\
    x-x&=6-6\\
    0&=0
    \end{aligned}
    $$

    Les $x$ han desaparegut i ens queda la igualtat $0=0$, que és certa sempre. Això vol dir que l'equació és una **identitat**: els dos membres són la mateixa expressió ($x+6$), de manera que es compleix per a qualsevol valor de $x$.

    **Resposta:** qualsevol nombre real és solució (és una identitat).

    **d)** Traiem el parèntesi (compte amb el signe menys davant):

    $$
    \begin{aligned}
    4x-2(2x-1)&=3\\
    4x-4x+2&=3\\
    2&=3
    \end{aligned}
    $$

    Les $x$ s'anul·len i arribem a la igualtat $2=3$, que és falsa. Com que no depèn de $x$, és falsa per a qualsevol valor: cap nombre compleix l'equació.

    **Resposta:** no té solució.

### Exercici 2

Resol aquestes equacions de segon grau incompletes sense aplicar la fórmula:

| | |
|:--|:--|
| **a)** $3x^2-27=0$ | **b)** $5x^2+20x=0$ |
| **c)** $2x^2+8=0$ | **d)** $x^2=7x$ |

??? note "Mostra la solució"

    **a)** No hi ha terme en $x$. Aïllem $x^2$ i fem l'arrel quadrada, sense oblidar el signe $\pm$:

    $$
    3x^2-27=0 \;\Rightarrow\; 3x^2=27 \;\Rightarrow\; x^2=9 \;\Rightarrow\; x=\pm\sqrt{9}=\pm 3
    $$

    **Resposta:** $x=3$, $x=-3$

    **b)** No hi ha terme independent. Traiem factor comú $5x$:

    $$
    5x^2+20x=0 \;\Rightarrow\; 5x(x+4)=0
    $$

    Un producte val zero si algun dels factors és zero:

    $$
    5x=0 \;\Rightarrow\; x=0, \qquad x+4=0 \;\Rightarrow\; x=-4
    $$

    **Resposta:** $x=0$, $x=-4$

    **c)** Aïllem $x^2$:

    $$
    2x^2+8=0 \;\Rightarrow\; 2x^2=-8 \;\Rightarrow\; x^2=-4
    $$

    El quadrat d'un nombre real no pot ser negatiu, per tant no hi ha cap $x$ real que ho compleixi.

    **Resposta:** no té solució.

    **d)** Passem-ho tot al primer membre i traiem factor comú $x$:

    $$
    x^2=7x \;\Rightarrow\; x^2-7x=0 \;\Rightarrow\; x(x-7)=0 \;\Rightarrow\; x=0 \;\text{ o }\; x=7
    $$

    Fixem-nos que **no podem dividir els dos membres per $x$**: si féssim $x^2=7x \Rightarrow x=7$, estaríem suposant que $x\neq 0$ i perdríem la solució $x=0$ (que sí que compleix l'equació: $0^2=7\cdot 0$).

    **Resposta:** $x=0$, $x=7$

### Exercici 3

Resol les equacions de segon grau següents i indica, a partir del discriminant, quantes solucions té cadascuna:

| | |
|:--|:--|
| **a)** $x^2-5x+6=0$ | **b)** $4x^2-12x+9=0$ |
| **c)** $x^2+x+1=0$ | **d)** $6x^2-x-2=0$ |

??? note "Mostra la solució"

    En tots els apartats calculem primer el discriminant $\Delta=b^2-4ac$, que ens diu quantes solucions hi ha, i després apliquem la fórmula $x=\dfrac{-b\pm\sqrt{\Delta}}{2a}$.

    **a)** Tenim $a=1$, $b=-5$, $c=6$:

    $$
    \Delta=(-5)^2-4\cdot1\cdot6=25-24=1>0
    $$

    Com que $\Delta>0$, hi ha dues solucions diferents:

    $$
    x=\frac{5\pm\sqrt{1}}{2}=\frac{5\pm1}{2} \;\Rightarrow\; x_1=\frac{6}{2}=3, \quad x_2=\frac{4}{2}=2
    $$

    **Resposta:** $\Delta=1$; dues solucions: $x=2$, $x=3$

    **b)** Tenim $a=4$, $b=-12$, $c=9$:

    $$
    \Delta=(-12)^2-4\cdot4\cdot9=144-144=0
    $$

    Com que $\Delta=0$, hi ha una única solució (doble):

    $$
    x=\frac{12\pm\sqrt{0}}{8}=\frac{12}{8}=\frac{3}{2}
    $$

    També ho podíem veure perquè $4x^2-12x+9=(2x-3)^2$.

    **Resposta:** $\Delta=0$; una solució doble: $x=\dfrac32$

    **c)** Tenim $a=1$, $b=1$, $c=1$:

    $$
    \Delta=1^2-4\cdot1\cdot1=1-4=-3<0
    $$

    Com que $\Delta<0$, hauríem de fer l'arrel quadrada d'un nombre negatiu, que no existeix en els reals: l'equació no té solució.

    **Resposta:** $\Delta=-3<0$; no té solució.

    **d)** Tenim $a=6$, $b=-1$, $c=-2$:

    $$
    \Delta=(-1)^2-4\cdot6\cdot(-2)=1+48=49>0
    $$

    Com que $\Delta>0$, hi ha dues solucions diferents:

    $$
    x=\frac{1\pm\sqrt{49}}{12}=\frac{1\pm7}{12} \;\Rightarrow\; x_1=\frac{8}{12}=\frac{2}{3}, \quad x_2=\frac{-6}{12}=-\frac{1}{2}
    $$

    **Resposta:** $\Delta=49$; dues solucions: $x=\dfrac23$, $x=-\dfrac12$

### Exercici 4

Resol, simplificant primer les expressions:

- **a)** $(x-3)^2+(x+1)^2=2(x^2-7)$
- **b)** $\dfrac{x(x+2)}{3}-\dfrac{x-1}{2}=\dfrac{x+5}{6}$
- **c)** $(2x-1)(x+3)-(x+2)^2=3$
- **d)** $0{,}5(x-1)^2-0{,}25(x+1)^2=4-x$

??? note "Mostra la solució"

    **a)** Desenvolupem els quadrats amb les identitats notables i simplifiquem:

    $$
    \begin{aligned}
    (x-3)^2+(x+1)^2&=2(x^2-7)\\
    x^2-6x+9+x^2+2x+1&=2x^2-14\\
    2x^2-4x+10&=2x^2-14
    \end{aligned}
    $$

    Els termes $2x^2$ apareixen a tots dos membres i s'anul·len, de manera que l'equació és, de fet, de primer grau:

    $$
    -4x+10=-14 \;\Rightarrow\; -4x=-24 \;\Rightarrow\; x=6
    $$

    **Resposta:** $x=6$

    **b)** El denominador comú és $6$. Multipliquem per $6$ els dos membres:

    $$
    \begin{aligned}
    2x(x+2)-3(x-1)&=x+5\\
    2x^2+4x-3x+3&=x+5\\
    2x^2+x+3-x-5&=0\\
    2x^2-2&=0
    \end{aligned}
    $$

    És una equació incompleta. Aïllem $x^2$:

    $$
    2x^2=2 \;\Rightarrow\; x^2=1 \;\Rightarrow\; x=\pm 1
    $$

    **Resposta:** $x=1$, $x=-1$

    **c)** Fem el producte i el quadrat i ho passem tot al primer membre:

    $$
    \begin{aligned}
    (2x-1)(x+3)-(x+2)^2&=3\\
    2x^2+6x-x-3-(x^2+4x+4)&=3\\
    2x^2+5x-3-x^2-4x-4&=3\\
    x^2+x-7-3&=0\\
    x^2+x-10&=0
    \end{aligned}
    $$

    Calculem el discriminant ($a=1$, $b=1$, $c=-10$):

    $$
    \Delta=1^2-4\cdot1\cdot(-10)=1+40=41>0
    $$

    Com que $41$ no és un quadrat perfecte, deixem les solucions amb l'arrel:

    $$
    x=\frac{-1\pm\sqrt{41}}{2}
    $$

    **Resposta:** $x=\dfrac{-1+\sqrt{41}}{2}$, $x=\dfrac{-1-\sqrt{41}}{2}$

    **d)** Per treure els decimals, observem que $0{,}5=\dfrac12$ i $0{,}25=\dfrac14$, i multipliquem tota l'equació per $4$:

    $$
    \begin{aligned}
    0{,}5(x-1)^2-0{,}25(x+1)^2&=4-x\\
    2(x-1)^2-(x+1)^2&=16-4x\\
    2(x^2-2x+1)-(x^2+2x+1)&=16-4x\\
    2x^2-4x+2-x^2-2x-1&=16-4x\\
    x^2-6x+1-16+4x&=0\\
    x^2-2x-15&=0
    \end{aligned}
    $$

    Calculem el discriminant ($a=1$, $b=-2$, $c=-15$):

    $$
    \Delta=(-2)^2-4\cdot1\cdot(-15)=4+60=64>0
    $$

    $$
    x=\frac{2\pm\sqrt{64}}{2}=\frac{2\pm8}{2} \;\Rightarrow\; x_1=\frac{10}{2}=5, \quad x_2=\frac{-6}{2}=-3
    $$

    **Resposta:** $x=5$, $x=-3$

### Exercici 5

Considera l'equació $x^2-6x+k=0$.

- **a)** Troba $k$ perquè tingui una solució doble i calcula-la.
- **b)** Troba $k$ perquè $x=2$ sigui solució i calcula l'altra solució.
- **c)** Per a quins valors de $k$ l'equació no té solució?

??? note "Mostra la solució"

    L'equació és $x^2-6x+k=0$, amb $a=1$, $b=-6$, $c=k$. El seu discriminant és

    $$
    \Delta=(-6)^2-4\cdot1\cdot k=36-4k.
    $$

    **a)** Hi ha una solució doble quan $\Delta=0$:

    $$
    36-4k=0 \;\Rightarrow\; 4k=36 \;\Rightarrow\; k=9
    $$

    Amb $k=9$ l'equació és $x^2-6x+9=0$, i la solució doble és

    $$
    x=\frac{6\pm\sqrt{0}}{2}=\frac{6}{2}=3.
    $$

    Ho podem comprovar perquè $x^2-6x+9=(x-3)^2$.

    **Resposta:** $k=9$; la solució doble és $x=3$

    **b)** Si $x=2$ és solució, quan substituïm $x=2$ a l'equació s'ha de complir la igualtat:

    $$
    2^2-6\cdot2+k=0 \;\Rightarrow\; 4-12+k=0 \;\Rightarrow\; k=8
    $$

    Amb $k=8$ l'equació és $x^2-6x+8=0$. La resolem: $\Delta=36-32=4$ i

    $$
    x=\frac{6\pm\sqrt{4}}{2}=\frac{6\pm2}{2} \;\Rightarrow\; x_1=4, \quad x_2=2.
    $$

    Retrobem $x=2$, i l'altra solució és $x=4$.

    **Resposta:** $k=8$; l'altra solució és $x=4$

    **c)** L'equació no té solució quan el discriminant és negatiu, ja que aleshores hauríem de fer l'arrel quadrada d'un nombre negatiu:

    $$
    \Delta<0 \;\Leftrightarrow\; 36-4k<0 \;\Leftrightarrow\; 36<4k \;\Leftrightarrow\; k>9
    $$

    **Resposta:** no té solució per a $k>9$

### Exercici 6

Escriu una equació de segon grau amb coeficients enters que tingui com a solucions:

- **a)** $x=3$ i $x=-5$.
- **b)** només $x=\dfrac23$ (solució doble).

??? note "Mostra la solució"

    Si una equació de segon grau té solucions $x_1$ i $x_2$, la podem escriure en forma factoritzada com $a(x-x_1)(x-x_2)=0$, amb $a\neq0$ qualsevol.

    **a)** Amb $x_1=3$ i $x_2=-5$ (i $a=1$):

    $$
    (x-3)(x+5)=0 \;\Rightarrow\; x^2+5x-3x-15=0 \;\Rightarrow\; x^2+2x-15=0
    $$

    Els coeficients ja són enters.

    **Resposta:** $x^2+2x-15=0$ (o qualsevol múltiple d'aquesta equació)

    **b)** Volem que $x=\dfrac23$ sigui l'única solució, és a dir, una solució doble: $x_1=x_2=\dfrac23$. Per tenir coeficients enters, en lloc de $\left(x-\dfrac23\right)^2$ prenem $a=9$, ja que $9\left(x-\dfrac23\right)^2=(3x-2)^2$:

    $$
    (3x-2)^2=0 \;\Rightarrow\; 9x^2-12x+4=0
    $$

    Ho comprovem amb el discriminant: $\Delta=(-12)^2-4\cdot9\cdot4=144-144=0$, i la solució doble és $x=\dfrac{12}{18}=\dfrac23$.

    **Resposta:** $9x^2-12x+4=0$ (o qualsevol múltiple d'aquesta equació)

### Exercici 7

Resol les equacions següents, on $a$ i $b$ són constants:

- **a)** $ax+b=bx+a$, amb $a\neq b$
- **b)** $x^2-(a+b)x+ab=0$
- **c)** $x^2-2ax+a^2-b^2=0$
- **d)** $ax^2-(a^2+1)x+a=0$, amb $a\neq0$

??? note "Mostra la solució"

    En aquestes equacions la incògnita és $x$; les lletres $a$ i $b$ són nombres fixos (constants) i les tractem igual que tractaríem un nombre concret.

    **a)** Passem els termes amb $x$ al primer membre i els termes sense $x$ al segon. Després traiem factor comú $x$:

    $$
    \begin{aligned}
    ax+b&=bx+a\\
    ax-bx&=a-b\\
    (a-b)\,x&=a-b
    \end{aligned}
    $$

    Ara volem dividir els dos membres per $a-b$. Això només es pot fer si $a-b\neq0$, i és justament per això que l'enunciat demana $a\neq b$:

    $$
    x=\frac{a-b}{a-b}=1.
    $$

    (Si fos $a=b$, l'equació quedaria $0\cdot x=0$, que es compleix per a qualsevol $x$.)

    **Resposta:** $x=1$

    **b)** És una equació de segon grau amb coeficients $1$, $-(a+b)$ i $ab$. Calculem el discriminant i el reconeixem com el quadrat d'una diferència:

    $$
    \Delta=(a+b)^2-4ab=a^2+2ab+b^2-4ab=a^2-2ab+b^2=(a-b)^2 .
    $$

    Apliquem la fórmula. Com que davant de l'arrel hi ha el signe $\pm$, podem escriure $\sqrt{(a-b)^2}$ com $a-b$ (el signe ja el tenim en compte amb el $\pm$):

    $$
    x=\frac{(a+b)\pm(a-b)}{2}\;\Rightarrow\;
    x_1=\frac{a+b+a-b}{2}=\frac{2a}{2}=a,\quad
    x_2=\frac{a+b-a+b}{2}=\frac{2b}{2}=b .
    $$

    També ho podíem veure factoritzant: dos nombres que sumen $a+b$ i multiplicats donen $ab$ són $a$ i $b$, per tant $x^2-(a+b)x+ab=(x-a)(x-b)$. Si $a=b$, les dues solucions coincideixen (solució doble).

    **Resposta:** $x=a$, $\;x=b$

    **c)** Els coeficients són $1$, $-2a$ i $a^2-b^2$. Calculem el discriminant:

    $$
    \Delta=(-2a)^2-4\cdot1\cdot(a^2-b^2)=4a^2-4a^2+4b^2=4b^2 .
    $$

    La seva arrel és $\sqrt{4b^2}=2|b|$, però com que a la fórmula hi ha el $\pm$, obtenim els mateixos dos valors amb $\pm2|b|$ que amb $\pm2b$. Per tant no cal escriure el valor absolut:

    $$
    x=\frac{2a\pm2b}{2}=a\pm b\;\Rightarrow\; x_1=a+b,\quad x_2=a-b .
    $$

    Comprovació ràpida: $(x-a-b)(x-a+b)=(x-a)^2-b^2=x^2-2ax+a^2-b^2$, que és el primer membre de l'equació. Si $b=0$, la solució és doble.

    **Resposta:** $x=a+b$, $\;x=a-b$

    **d)** Cal $a\neq0$ perquè $a$ és el coeficient de $x^2$: si fos $a=0$, l'equació seria de primer grau ($-x=0$) i, a més, no podríem dividir per $2a$ a la fórmula. Calculem el discriminant:

    $$
    \begin{aligned}
    \Delta&=(a^2+1)^2-4\cdot a\cdot a\\
    &=a^4+2a^2+1-4a^2\\
    &=a^4-2a^2+1\\
    &=(a^2-1)^2
    \end{aligned}
    $$

    Com abans, el $\pm$ ens permet substituir $\sqrt{(a^2-1)^2}$ per $a^2-1$:

    $$
    x=\frac{(a^2+1)\pm(a^2-1)}{2a}\;\Rightarrow\;
    x_1=\frac{2a^2}{2a}=a,\quad
    x_2=\frac{2}{2a}=\frac1a .
    $$

    Fixem-nos que la segona solució, $\dfrac1a$, també necessita $a\neq0$. Si $a=\pm1$, les dues solucions coincideixen (solució doble).

    **Resposta:** $x=a$, $\;x=\dfrac1a$
