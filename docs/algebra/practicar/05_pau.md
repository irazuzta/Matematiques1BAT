# Exercicis inspirats en les PAU

Exercicis 36–48. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

> Aquests exercicis estan inspirats en proves PAU (Selectivitat) dels darrers anys (2022–2026). És important tenir en compte que, als exàmens originals, aquests càlculs formen part d'un problema més ampli —normalment de càlcul, matrius o geometria, propis de 2n de Batxillerat— i aquí n'aïllem només el fragment o procediment algebraic (factorització, equacions, fraccions algebraiques...) que té relació directa amb aquest tema.

### Exercici 36

*(PAU 2024)* Factoritza completament $x^3-4x^2+4x$ i troba'n totes les arrels.

??? note "Mostra la solució"

    No hi ha terme independent, així que traiem $x$ com a factor comú:

    $$x^3-4x^2+4x = x\,(x^2-4x+4)$$

    El factor de grau $2$ és una identitat notable, $x^2-4x+4=(x-2)^2$. També ho veiem amb la fórmula de segon grau: $\Delta=16-16=0$, de manera que només hi ha l'arrel doble $x=2$.

    $$x^3-4x^2+4x = x\,(x-2)^2$$

    Igualem cada factor a zero: $x=0$ i $x-2=0$, és a dir, $x=2$, que apareix dues vegades (arrel doble).

    **Resposta:** $x(x-2)^2$; arrels $x=0$ i $x=2$ (doble).

### Exercici 37

*(PAU 2026)* Factoritza completament $2x^3-8x$ i troba'n totes les arrels.

??? note "Mostra la solució"

    Treiem factor comú $2x$ (el $2$ divideix tots dos coeficients i falta el terme independent):

    $$2x^3-8x = 2x\,(x^2-4)$$

    El parèntesi és una diferència de quadrats, $x^2-4=(x-2)(x+2)$:

    $$2x^3-8x = 2x\,(x-2)(x+2)$$

    Les arrels surten d'igualar a zero cada factor que conté $x$: $x=0$, $x=2$ i $x=-2$.

    **Resposta:** $2x(x-2)(x+2)$; arrels $x=-2,\ 0,\ 2$.

### Exercici 38

*(PAU 2022)* Factoritza el denominador i indica el domini de $f(x)=\dfrac{9}{x^2+x-2}$.

??? note "Mostra la solució"

    Resolem $x^2+x-2=0$ amb la fórmula de segon grau:

    $$x=\frac{-1\pm\sqrt{1+8}}{2}=\frac{-1\pm3}{2}$$

    Això dona $x=1$ i $x=-2$. Per tant:

    $$x^2+x-2=(x-1)(x+2)$$

    Comprovació: $(x-1)(x+2)=x^2+2x-x-2=x^2+x-2$.

    Una fracció només es pot calcular si el denominador no s'anul·la. El denominador val zero exactament en $x=1$ i $x=-2$, així que cal excloure aquests dos valors. El numerador és constant i no afegeix cap restricció.

    **Resposta:** $x^2+x-2=(x-1)(x+2)$; $\text{Dom} f=\mathbb{R}\setminus\{-2,1\}$.

### Exercici 39

*(PAU 2023)* Resol per factorització l'equació $4x^2-10x-6=0$.

??? note "Mostra la solució"

    Tots els coeficients són parells, així que traiem el factor comú $2$:

    $$2\,(2x^2-5x-3)=0 \;\Rightarrow\; 2x^2-5x-3=0$$

    Factoritzem el polinomi de grau $2$ amb la fórmula de segon grau:

    $$x=\frac{5\pm\sqrt{25+24}}{4}=\frac{5\pm7}{4}$$

    Així, $x=\dfrac{12}{4}=3$ i $x=\dfrac{-2}{4}=-\dfrac12$. Com que el coeficient principal és $2$, la factorització és:

    $$4x^2-10x-6=2\,(x-3)\left(x+\tfrac12\right)=2\,(x-3)(2x+1)$$

    Comprovació: $(x-3)(2x+1)=2x^2+x-6x-3=2x^2-5x-3$, i multiplicat per $2$ obtenim $4x^2-10x-6$.

    Un producte és zero si ho és algun dels factors:

    $$2(x-3)(2x+1)=0 \;\Rightarrow\; x=3 \quad\text{o}\quad 2x+1=0\;\Rightarrow\; x=-\frac12$$

    **Resposta:** $2(x-3)(2x+1)=0$; $x=3$ i $x=-\dfrac12$.

### Exercici 40

*(PAU 2024)* Factoritza completament i resol $x^3-7x^2+6x=0$.

??? note "Mostra la solució"

    Falta el terme independent, així que traiem $x$ com a factor comú:

    $$x^3-7x^2+6x = x\,(x^2-7x+6)$$

    Factoritzem $x^2-7x+6$ amb la fórmula de segon grau:

    $$x=\frac{7\pm\sqrt{49-24}}{2}=\frac{7\pm5}{2}$$

    Això dona $x=6$ i $x=1$. Per tant:

    $$x^3-7x^2+6x = x\,(x-1)(x-6)$$

    Comprovació: $(x-1)(x-6)=x^2-7x+6$.

    L'equació $x(x-1)(x-6)=0$ té com a solucions les arrels de cada factor: $x=0$, $x=1$ i $x=6$.

    **Resposta:** $x(x-1)(x-6)=0$; $x=0,\ 1,\ 6$.

### Exercici 41

*(PAU 2022, guiat)* Comprova, factoritzant, que $x^3-3a^2x+2a^3=(x-a)^2(x+2a)$.

??? note "Mostra la solució"

    Considerem el membre esquerre com un polinomi en $x$, amb $a$ com a paràmetre. Els seus coeficients són $1$, $0$, $-3a^2$ i $2a^3$.

    Provem $x=a$ com a arrel. Substituint-hi: $a^3-3a^3+2a^3=0$, així que és arrel. Fem Ruffini amb $a$:

    | | $1$ | $0$ | $-3a^2$ | $2a^3$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $a$ | | $a$ | $a^2$ | $-2a^3$ |
    | | $\mathbf{1}$ | $\mathbf{a}$ | $\mathbf{-2a^2}$ | $\boxed{0}$ |

    Per tant:

    $$x^3-3a^2x+2a^3=(x-a)(x^2+ax-2a^2)$$

    Ara factoritzem el quocient $x^2+ax-2a^2$, que torna a tenir $x=a$ com a arrel: $a^2+a\cdot a-2a^2=0$. Com que el producte de les dues arrels és $-2a^2$, l'altra arrel és $-2a$, i així $x^2+ax-2a^2=(x-a)(x+2a)$.

    Comprovació: $(x-a)(x+2a)=x^2+2ax-ax-2a^2=x^2+ax-2a^2$.

    Ajuntant els dos factors iguals:

    $$x^3-3a^2x+2a^3=(x-a)(x-a)(x+2a)=(x-a)^2(x+2a)$$

    Que és el que volíem comprovar. (Es pot verificar també desenvolupant: $(x^2-2ax+a^2)(x+2a)=x^3+2ax^2-2ax^2-4a^2x+a^2x+2a^3=x^3-3a^2x+2a^3$.)

    **Resposta:** $x^3-3a^2x+2a^3=(x-a)^2(x+2a)$, amb $x=a$ arrel doble i $x=-2a$ arrel simple.

### Exercici 42

*(PAU 2025)* Resol:

- **a)** $x^3+1=0$ (dona només la solució real)
- **b)** si $a^3=8$, troba el valor real de $a$

??? note "Mostra la solució"

    **a)** El polinomi $x^3+1$ no té factor comú; el terme independent és $1$, així que els candidats a arrel són $\pm1$. Provem $x=-1$: $(-1)^3+1=0$, per tant és arrel. Fem Ruffini (els coeficients són $1$, $0$, $0$, $1$):

    | | $1$ | $0$ | $0$ | $1$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $-1$ | | $-1$ | $1$ | $-1$ |
    | | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{1}$ | $\boxed{0}$ |

    Per tant, $x^3+1=(x+1)(x^2-x+1)$. El factor de grau $2$ té $\Delta=1-4=-3<0$: no té arrels reals. L'única solució real surt de $x+1=0$.

    **Resposta:** $x=-1$

    **b)** Passem tot a un costat: $a^3-8=0$. Els divisors de $8$ són $\pm1,\pm2,\pm4,\pm8$, i $a=2$ és arrel perquè $2^3-8=0$. Fem Ruffini:

    | | $1$ | $0$ | $0$ | $-8$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $2$ | | $2$ | $4$ | $8$ |
    | | $\textbf{1}$ | $\textbf{2}$ | $\textbf{4}$ | $\boxed{0}$ |

    Així, $a^3-8=(a-2)(a^2+2a+4)$. El factor de grau $2$ té $\Delta=4-16=-12<0$, per tant no aporta cap altra solució real. (També es veu directament que $\sqrt[3]{8}=2$.)

    **Resposta:** $a=2$

### Exercici 43

*(PAU 2025)* Factoritza completament $4p^3-5p^4$ i troba'n totes les arrels.

??? note "Mostra la solució"

    Els dos termes tenen $p^3$ en comú, així que el traiem com a factor comú:

    $$4p^3-5p^4 = p^3\,(4-5p)$$

    El factor $4-5p$ ja és de grau $1$, així que la factorització és completa. Si volem el factor en la forma $p-r$, escrivim $4-5p=-5\left(p-\tfrac45\right)$.

    Les arrels surten de $p^3=0$, que dona $p=0$ (arrel triple), i de $4-5p=0$, que dona $p=\dfrac45$.

    **Resposta:** $p^3(4-5p)$; arrels $p=0$ (triple) i $p=\dfrac45$.

### Exercici 44

*(PAU 2025)* Donada $f(x)=\dfrac{x^2-2x}{x-1}$:

- **a)** Factoritza el numerador i troba els punts de tall amb l'eix $X$.
- **b)** Comprova si existeix cap valor de $x$ que compleixi $x^2-2x+2=(x-1)^2$.

??? note "Mostra la solució"

    **a)** Treiem factor comú $x$ al numerador:

    $$x^2-2x=x\,(x-2)$$

    Els punts de tall amb l'eix $X$ són els que compleixen $f(x)=0$. Una fracció val zero quan el numerador val zero i el denominador no:

    $$x(x-2)=0 \;\Rightarrow\; x=0 \ \text{ o }\ x=2$$

    Cap dels dos valors anul·la el denominador ($x-1\neq0$), així que tots dos pertanyen al domini de $f$ i els punts de tall són $(0,0)$ i $(2,0)$.

    **Resposta:** $x^2-2x=x(x-2)$; talls amb l'eix $X$ en $x=0$ i $x=2$, és a dir, $(0,0)$ i $(2,0)$.

    **b)** Desenvolupem el membre dret amb la identitat notable $(x-1)^2=x^2-2x+1$ i igualem:

    $$x^2-2x+2=x^2-2x+1$$

    Restant $x^2-2x$ als dos membres ens queda $2=1$, que és fals per a qualsevol valor de $x$. Per tant, l'equació no té solució.

    **Resposta:** no existeix cap valor de $x$ (l'equació es redueix a $2=1$).

### Exercici 45

*(PAU 2024)* Resol l'equació $3x^2+2x+2=x^2+2x+4$ (passa-ho tot a un costat i factoritza).

??? note "Mostra la solució"

    Passem tots els termes al membre esquerre:

    $$3x^2+2x+2-x^2-2x-4=0 \;\Rightarrow\; 2x^2-2=0$$

    Els termes en $x$ s'han cancel·lat. Treiem factor comú $2$ i apliquem la diferència de quadrats:

    $$2\,(x^2-1)=2\,(x-1)(x+1)=0$$

    Igualant a zero els factors que contenen $x$: $x=1$ i $x=-1$.

    Comprovació: per a $x=1$, $3+2+2=7$ i $1+2+4=7$; per a $x=-1$, $3-2+2=3$ i $1-2+4=3$.

    **Resposta:** $2x^2-2=0$; $x=1$ i $x=-1$.

### Exercici 46

*(PAU 2024)* Resol per factorització $x^2-2x-15=0$.

??? note "Mostra la solució"

    Busquem les arrels del polinomi amb la fórmula de segon grau:

    $$x=\frac{2\pm\sqrt{4+60}}{2}=\frac{2\pm8}{2}$$

    Això dona $x=5$ i $x=-3$, per tant:

    $$x^2-2x-15=(x-5)(x+3)$$

    Comprovació: $(x-5)(x+3)=x^2+3x-5x-15=x^2-2x-15$.

    L'equació queda $(x-5)(x+3)=0$, i les solucions són els valors que anul·len cada factor.

    **Resposta:** $(x-5)(x+3)=0$; $x=5$ i $x=-3$.

### Exercici 47

*(PAU 2025)* Troba els valors del paràmetre que anul·len cada expressió, factoritzant-la:

- **a)** $p^2-1$
- **b)** $\lambda^2+3\lambda-10$

??? note "Mostra la solució"

    **a)** És una diferència de quadrats: $p^2-1=(p-1)(p+1)$. S'anul·la quan algun dels factors és zero, és a dir, per $p=1$ o $p=-1$.

    **Resposta:** $p^2-1=(p-1)(p+1)$; $p=1$ i $p=-1$.

    **b)** Busquem les arrels amb la fórmula de segon grau:

    $$\lambda=\frac{-3\pm\sqrt{9+40}}{2}=\frac{-3\pm7}{2}$$

    Així, $\lambda=\dfrac{4}{2}=2$ i $\lambda=\dfrac{-10}{2}=-5$. La factorització és:

    $$\lambda^2+3\lambda-10=(\lambda-2)(\lambda+5)$$

    Comprovació: $(\lambda-2)(\lambda+5)=\lambda^2+5\lambda-2\lambda-10=\lambda^2+3\lambda-10$.

    **Resposta:** $(\lambda-2)(\lambda+5)$; $\lambda=2$ i $\lambda=-5$.

### Exercici 48

*(PAU 2026)* Troba els valors de $m$ que anul·len $m^2-4m+3$, factoritzant-lo.

??? note "Mostra la solució"

    Resolem $m^2-4m+3=0$ amb la fórmula de segon grau:

    $$m=\frac{4\pm\sqrt{16-12}}{2}=\frac{4\pm2}{2}$$

    Això dona $m=3$ i $m=1$, per tant:

    $$m^2-4m+3=(m-1)(m-3)$$

    Comprovació: $(m-1)(m-3)=m^2-3m-m+3=m^2-4m+3$. L'expressió s'anul·la quan ho fa algun dels dos factors.

    **Resposta:** $(m-1)(m-3)=0$; $m=1$ i $m=3$.
