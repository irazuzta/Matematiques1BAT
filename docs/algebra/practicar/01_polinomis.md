# Polinomis

Exercicis 1–10. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 1

Per a cada polinomi, indica'n el grau, el coeficient principal i el terme independent:

| | |
|:--|:--|
| **a)** $3x^4-2x^3+x-7$ | **b)** $-5x^3+4x^2-1$ |
| **c)** $x^5-3x^2$ | **d)** $8$ |

??? note "Mostra la solució"

    El **grau** és l'exponent més gran de $x$, el **coeficient principal** és el coeficient d'aquest terme i el **terme independent** és el terme sense $x$ (si no n'hi ha, val $0$).

    **a)** L'exponent més gran és $4$, amb coeficient $3$. El terme sense $x$ és $-7$.

    **Resposta:** grau $4$, coeficient principal $3$, terme independent $-7$.

    **b)** L'exponent més gran és $3$, amb coeficient $-5$. El terme sense $x$ és $-1$.

    **Resposta:** grau $3$, coeficient principal $-5$, terme independent $-1$.

    **c)** L'exponent més gran és $5$, i $x^5=1\cdot x^5$ té coeficient $1$. No hi ha terme sense $x$, així que els termes que falten valen $0$ i el terme independent és $0$.

    **Resposta:** grau $5$, coeficient principal $1$, terme independent $0$.

    **d)** El polinomi $8=8x^0$ és una constant: no té cap $x$, per tant el seu grau és $0$. L'únic terme és alhora el principal i l'independent.

    **Resposta:** grau $0$, coeficient principal $8$, terme independent $8$.

### Exercici 2

Avalua cada polinomi en el valor indicat i digues si es tracta d'una arrel:

- **a)** $p(x)=x^3-4x+3$ en $x=1$
- **b)** $p(x)=x^3-4x+3$ en $x=2$
- **c)** $q(x)=2x^2-5x-3$ en $x=3$
- **d)** $q(x)=2x^2-5x-3$ en $x=-1$

??? note "Mostra la solució"

    Substituïm $x$ pel valor indicat. Un valor $a$ és arrel quan $p(a)=0$.

    **a)**

    $$p(1)=1^3-4\cdot 1+3=1-4+3=0$$

    Com que $p(1)=0$, $x=1$ és arrel.

    **Resposta:** $p(1)=0$, és arrel.

    **b)**

    $$p(2)=2^3-4\cdot 2+3=8-8+3=3$$

    Com que $p(2)\neq 0$, $x=2$ no és arrel.

    **Resposta:** $p(2)=3$, no és arrel.

    **c)**

    $$q(3)=2\cdot 3^2-5\cdot 3-3=18-15-3=0$$

    **Resposta:** $q(3)=0$, és arrel.

    **d)** Compte amb els signes en elevar al quadrat un nombre negatiu: $(-1)^2=1$.

    $$q(-1)=2\cdot(-1)^2-5\cdot(-1)-3=2+5-3=4$$

    **Resposta:** $q(-1)=4$, no és arrel.

### Exercici 3

Donats $p(x)=2x^3-x^2+4x-1$ i $q(x)=-x^3+3x^2-2x+5$, calcula $p(x)+q(x)$ i $p(x)-q(x)$.

??? note "Mostra la solució"

    **Suma.** Agrupem els termes del mateix grau:

    $$
    \begin{aligned}
    p(x)+q(x) &= (2x^3-x^3)+(-x^2+3x^2)+(4x-2x)+(-1+5) \\
    &= x^3+2x^2+2x+4
    \end{aligned}
    $$

    **Resposta:** $p(x)+q(x)=x^3+2x^2+2x+4$

    **Resta.** El signe $-$ afecta tots els termes de $q(x)$, així que primer en canviem el signe:

    $$
    \begin{aligned}
    p(x)-q(x) &= (2x^3-x^2+4x-1)-(-x^3+3x^2-2x+5) \\
    &= 2x^3-x^2+4x-1+x^3-3x^2+2x-5 \\
    &= (2x^3+x^3)+(-x^2-3x^2)+(4x+2x)+(-1-5) \\
    &= 3x^3-4x^2+6x-6
    \end{aligned}
    $$

    **Resposta:** $p(x)-q(x)=3x^3-4x^2+6x-6$

### Exercici 4

Desenvolupa:

| | |
|:--|:--|
| **a)** $(2x-1)(x^2+3x-2)$ | **b)** $(x+3)^2$ |
| **c)** $(x-2)(x+2)$ |  |

??? note "Mostra la solució"

    **a)** Multipliquem cada terme del primer factor per cada terme del segon (propietat distributiva) i després agrupem termes semblants:

    $$
    \begin{aligned}
    (2x-1)(x^2+3x-2) &= 2x\cdot x^2+2x\cdot 3x+2x\cdot(-2)-x^2-3x+2 \\
    &= 2x^3+6x^2-4x-x^2-3x+2 \\
    &= 2x^3+5x^2-7x+2
    \end{aligned}
    $$

    **Resposta:** $2x^3+5x^2-7x+2$

    **b)** És el quadrat d'una suma, $(a+b)^2=a^2+2ab+b^2$, amb $a=x$ i $b=3$:

    $$(x+3)^2=x^2+2\cdot x\cdot 3+3^2=x^2+6x+9$$

    **Resposta:** $x^2+6x+9$

    **c)** És una suma per diferència, $(a+b)(a-b)=a^2-b^2$, amb $a=x$ i $b=2$:

    $$(x-2)(x+2)=x^2-2^2=x^2-4$$

    **Resposta:** $x^2-4$

### Exercici 5

Divideix i indica el quocient i el residu:

- **a)** $(2x^3-3x^2+4x-5):(x^2-1)$
- **b)** $(x^4-1):(x^2+1)$

??? note "Mostra la solució"

    **a)** El divisor $x^2-1$ té grau $2$, així que el residu tindrà grau $1$ com a màxim. Dividim el terme de grau més alt del dividend pel del divisor: $2x^3:x^2=2x$. Multipliquem el divisor per $2x$ i ho restem del dividend:

    $$
    \begin{aligned}
    (2x^3-3x^2+4x-5)-2x(x^2-1) &= 2x^3-3x^2+4x-5-2x^3+2x \\
    &= -3x^2+6x-5
    \end{aligned}
    $$

    El grau encara és $2$, així que seguim: $-3x^2:x^2=-3$. Multipliquem el divisor per $-3$ i ho restem:

    $$
    \begin{aligned}
    (-3x^2+6x-5)-(-3)(x^2-1) &= -3x^2+6x-5+3x^2-3 \\
    &= 6x-8
    \end{aligned}
    $$

    Ara el grau del residu (1) és inferior al del divisor (2), i parem. Comprovem que $D=d\cdot q+r$:

    $$
    \begin{aligned}
    (x^2-1)(2x-3)+6x-8 &= 2x^3-3x^2-2x+3+6x-8 \\
    &= 2x^3-3x^2+4x-5
    \end{aligned}
    $$

    **Resposta:** quocient $q(x)=2x-3$ i residu $r(x)=6x-8$.

    **b)** Escrivim el dividend amb els termes que falten: $x^4+0x^3+0x^2+0x-1$. Dividim $x^4:x^2=x^2$ i restem $x^2(x^2+1)=x^4+x^2$:

    $$(x^4-1)-(x^4+x^2)=-x^2-1$$

    Seguim: $-x^2:x^2=-1$, i restem $-1\cdot(x^2+1)=-x^2-1$:

    $$(-x^2-1)-(-x^2-1)=0$$

    El residu és $0$. Comprovació:

    $$(x^2+1)(x^2-1)=x^4-1$$

    **Resposta:** quocient $q(x)=x^2-1$ i residu $r(x)=0$.

### Exercici 6

Divideix per Ruffini, indicant el quocient i el residu:

- **a)** $(x^3-6x^2+11x-6):(x-2)$
- **b)** $(2x^3+x^2-5x+2):(x+2)$
- **c)** $(x^4-5x^2+4):(x-1)$

??? note "Mostra la solució"

    Ruffini serveix per dividir entre $x-a$. Escrivim els coeficients del dividend (amb $0$ als termes que falten), baixem el primer, i cada coeficient següent és la suma del coeficient de dalt amb el producte de $a$ pel de sota de l'esquerra.

    **a)** El divisor és $x-2$, per tant $a=2$.

    | | $1$ | $-6$ | $11$ | $-6$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $2$ | | $2$ | $-8$ | $6$ |
    | | $\textbf{1}$ | $\textbf{-4}$ | $\textbf{3}$ | $\boxed{0}$ |

    El residu és $0$, per tant $x=2$ és arrel del dividend i la divisió és exacta.

    **Resposta:** quocient $x^2-4x+3$ i residu $0$.

    **b)** El divisor és $x+2=x-(-2)$, per tant $a=-2$.

    | | $2$ | $1$ | $-5$ | $2$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $-2$ | | $-4$ | $6$ | $-2$ |
    | | $\textbf{2}$ | $\textbf{-3}$ | $\textbf{1}$ | $\boxed{0}$ |

    **Resposta:** quocient $2x^2-3x+1$ i residu $0$.

    **c)** El dividend no té termes de grau $3$ ni de grau $1$; els escrivim amb coeficient $0$: $x^4+0x^3-5x^2+0x+4$. El divisor és $x-1$, per tant $a=1$.

    | | $1$ | $0$ | $-5$ | $0$ | $4$ |
    |:--:|:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $1$ | $-4$ | $-4$ |
    | | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-4}$ | $\textbf{-4}$ | $\boxed{0}$ |

    El quocient té un grau menys que el dividend, és a dir, grau $3$.

    **Resposta:** quocient $x^3+x^2-4x-4$ i residu $0$.

### Exercici 7

Sense fer la divisió completa, aplica el teorema del residu i el teorema del factor:

- **a)** Calcula el residu de dividir $P(x)=2x^3-5x^2+3x+4$ entre $x-2$.
- **b)** Determina el valor de $k$ perquè $x-2$ sigui divisor de $P(x)=x^3+kx^2-5x+6$.

??? note "Mostra la solució"

    **a)** El residu de dividir $P(x)$ entre $x-a$ és $P(a)$. Aquí $a=2$:

    $$P(2)=2\cdot 2^3-5\cdot 2^2+3\cdot 2+4=16-20+6+4=6$$

    **Resposta:** el residu és $P(2)=6$.

    **b)** Pel teorema del factor, $x-2$ és divisor de $P(x)$ si, i només si, $P(2)=0$. Imposem-ho:

    $$
    \begin{aligned}
    P(2) &= 2^3+k\cdot 2^2-5\cdot 2+6 \\
    &= 8+4k-10+6 \\
    &= 4+4k
    \end{aligned}
    $$

    $$4+4k=0 \ \Rightarrow \ k=-1$$

    Comprovem-ho: amb $k=-1$, $P(x)=x^3-x^2-5x+6$ i, per Ruffini amb $a=2$:

    | | $1$ | $-1$ | $-5$ | $6$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $2$ | | $2$ | $2$ | $-6$ |
    | | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-3}$ | $\boxed{0}$ |

    El residu és $0$, tal com esperàvem.

    **Resposta:** $k=-1$

### Exercici 8

Desenvolupa aplicant la identitat notable corresponent:

| | |
|:--|:--|
| **a)** $(x+6)^2$ | **b)** $(x-3)^2$ |
| **c)** $(2x+1)^2$ | **d)** $(x+5)(x-5)$ |

??? note "Mostra la solució"

    **a)** Quadrat d'una suma, $(a+b)^2=a^2+2ab+b^2$, amb $a=x$ i $b=6$:

    $$(x+6)^2=x^2+2\cdot x\cdot 6+6^2=x^2+12x+36$$

    **Resposta:** $x^2+12x+36$

    **b)** Quadrat d'una diferència, $(a-b)^2=a^2-2ab+b^2$, amb $a=x$ i $b=3$:

    $$(x-3)^2=x^2-2\cdot x\cdot 3+3^2=x^2-6x+9$$

    **Resposta:** $x^2-6x+9$

    **c)** Quadrat d'una suma amb $a=2x$ i $b=1$. Cal elevar $a=2x$ sencer al quadrat: $(2x)^2=4x^2$.

    $$(2x+1)^2=(2x)^2+2\cdot 2x\cdot 1+1^2=4x^2+4x+1$$

    **Resposta:** $4x^2+4x+1$

    **d)** Suma per diferència, $(a+b)(a-b)=a^2-b^2$, amb $a=x$ i $b=5$:

    $$(x+5)(x-5)=x^2-5^2=x^2-25$$

    **Resposta:** $x^2-25$

### Exercici 9

Desenvolupa (vigila els coeficients i els exponents en elevar al quadrat):

| | |
|:--|:--|
| **a)** $(2x^2-3y)^2$ | **b)** $(3x-2y^2)^2$ |
| **c)** $(x^3+2y)^2$ | **d)** $(4x^2-y^3)(4x^2+y^3)$ |

??? note "Mostra la solució"

    En tots els apartats elevem al quadrat el terme **sencer**: $(k\cdot x^n)^2=k^2\cdot x^{2n}$.

    **a)** Quadrat d'una diferència amb $a=2x^2$ i $b=3y$:

    $$
    \begin{aligned}
    (2x^2-3y)^2 &= (2x^2)^2-2\cdot(2x^2)\cdot(3y)+(3y)^2 \\
    &= 4x^4-12x^2y+9y^2
    \end{aligned}
    $$

    **Resposta:** $4x^4-12x^2y+9y^2$

    **b)** Quadrat d'una diferència amb $a=3x$ i $b=2y^2$:

    $$
    \begin{aligned}
    (3x-2y^2)^2 &= (3x)^2-2\cdot(3x)\cdot(2y^2)+(2y^2)^2 \\
    &= 9x^2-12xy^2+4y^4
    \end{aligned}
    $$

    **Resposta:** $9x^2-12xy^2+4y^4$

    **c)** Quadrat d'una suma amb $a=x^3$ i $b=2y$:

    $$
    \begin{aligned}
    (x^3+2y)^2 &= (x^3)^2+2\cdot x^3\cdot(2y)+(2y)^2 \\
    &= x^6+4x^3y+4y^2
    \end{aligned}
    $$

    **Resposta:** $x^6+4x^3y+4y^2$

    **d)** Suma per diferència amb $a=4x^2$ i $b=y^3$:

    $$(4x^2-y^3)(4x^2+y^3)=(4x^2)^2-(y^3)^2=16x^4-y^6$$

    **Resposta:** $16x^4-y^6$

### Exercici 10

Desenvolupa, parant atenció als signes:

- **a)** $(-x-4y)^2$
- **b)** $(-2x+3)^2$. Compara el resultat amb el de $(2x-3)^2$: per què donen el mateix?
- **c)** $(-3x-1)(3x-1)$ *(indicació: treu primer signe menys factor comú d'un dels dos factors)*
- **d)** Digues quina identitat notable s'amaga darrere de $4x^2-12x+9$ i escriu-la com un quadrat.

??? note "Mostra la solució"

    **a)** Treiem factor comú $-1$ dins del parèntesi: $-x-4y=-(x+4y)$. Com que $(-1)^2=1$, el quadrat d'una expressió i el del seu oposat coincideixen:

    $$
    \begin{aligned}
    (-x-4y)^2 &= (x+4y)^2 \\
    &= x^2+2\cdot x\cdot 4y+(4y)^2 \\
    &= x^2+8xy+16y^2
    \end{aligned}
    $$

    **Resposta:** $x^2+8xy+16y^2$

    **b)** Aplicant el quadrat d'una suma amb $a=-2x$ i $b=3$:

    $$
    \begin{aligned}
    (-2x+3)^2 &= (-2x)^2+2\cdot(-2x)\cdot 3+3^2 \\
    &= 4x^2-12x+9
    \end{aligned}
    $$

    Ara desenvolupem $(2x-3)^2=(2x)^2-2\cdot 2x\cdot 3+3^2=4x^2-12x+9$. Surt el mateix perquè $-2x+3=-(2x-3)$ i el quadrat d'un nombre i el del seu oposat són iguals: $(-u)^2=u^2$, aquí amb $u=2x-3$.

    **Resposta:** $(-2x+3)^2=4x^2-12x+9$, igual que $(2x-3)^2$ perquè $(-u)^2=u^2$.

    **c)** Seguim la indicació: treiem signe menys factor comú del primer factor, $-3x-1=-(3x+1)$:

    $$(-3x-1)(3x-1)=-(3x+1)(3x-1)$$

    Ara $(3x+1)(3x-1)$ és una suma per diferència, amb $a=3x$ i $b=1$, que val $9x^2-1$. Per tant:

    $$-(3x+1)(3x-1)=-(9x^2-1)=-9x^2+1=1-9x^2$$

    **Resposta:** $1-9x^2$

    **d)** Els extrems són quadrats perfectes: $4x^2=(2x)^2$ i $9=3^2$. Mirem si el terme central és el doble producte amb signe negatiu:

    $$2\cdot(2x)\cdot 3=12x$$

    Coincideix amb el terme $-12x$, per tant és el desenvolupament d'un quadrat d'una diferència, $a^2-2ab+b^2$ amb $a=2x$ i $b=3$:

    $$4x^2-12x+9=(2x)^2-2\cdot 2x\cdot 3+3^2=(2x-3)^2$$

    **Resposta:** és el quadrat d'una diferència: $4x^2-12x+9=(2x-3)^2$
