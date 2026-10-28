# Equacions biquadrades i de grau superior

Exercicis 8–13. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 8

Resol les equacions biquadrades següents:

| | |
|:--|:--|
| **a)** $x^4-13x^2+36=0$ | **b)** $x^4+3x^2-4=0$ |
| **c)** $x^4+5x^2+6=0$ | **d)** $x^4-9x^2=0$ |

??? note "Mostra la solució"

    En totes les equacions fem el canvi de variable $t=x^2$, de manera que $x^4=t^2$. Resolem l'equació de segon grau en $t$ i, al final, desfem el canvi amb $x=\pm\sqrt{t}$. Com que $t=x^2$ és un quadrat, només ens serveixen els valors $t\ge 0$.

    **a)** Amb $t=x^2$ l'equació queda $t^2-13t+36=0$:

    $$
    t=\frac{13\pm\sqrt{169-144}}{2}=\frac{13\pm 5}{2}\;\Rightarrow\; t_1=9,\quad t_2=4.
    $$

    Desfem el canvi:

    - $t_1=9 \;\Rightarrow\; x^2=9 \;\Rightarrow\; x=\pm 3$
    - $t_2=4 \;\Rightarrow\; x^2=4 \;\Rightarrow\; x=\pm 2$

    **Resposta:** $x=\pm 2$, $x=\pm 3$

    **b)** Amb $t=x^2$ l'equació queda $t^2+3t-4=0$:

    $$
    t=\frac{-3\pm\sqrt{9+16}}{2}=\frac{-3\pm 5}{2}\;\Rightarrow\; t_1=1,\quad t_2=-4.
    $$

    Desfem el canvi:

    - $t_1=1 \;\Rightarrow\; x^2=1 \;\Rightarrow\; x=\pm 1$
    - $t_2=-4 \;\Rightarrow\; x^2=-4$, que no té solució real, ja que el quadrat d'un nombre real mai no és negatiu.

    **Resposta:** $x=\pm 1$

    **c)** Amb $t=x^2$ l'equació queda $t^2+5t+6=0$:

    $$
    t=\frac{-5\pm\sqrt{25-24}}{2}=\frac{-5\pm 1}{2}\;\Rightarrow\; t_1=-2,\quad t_2=-3.
    $$

    Tots dos valors de $t$ són negatius, i $x^2=-2$ o $x^2=-3$ no tenen solució real. De fet, es podia veure directament: $x^4+5x^2+6$ és una suma de termes positius o nuls més $6$, per tant sempre val almenys $6$.

    **Resposta:** no té solució real.

    **d)** Amb $t=x^2$ l'equació queda $t^2-9t=0$, que és incompleta: traiem factor comú.

    $$
    t(t-9)=0\;\Rightarrow\; t_1=0,\quad t_2=9.
    $$

    Desfem el canvi:

    - $t_1=0 \;\Rightarrow\; x^2=0 \;\Rightarrow\; x=0$. Aquí $+\sqrt{0}$ i $-\sqrt{0}$ coincideixen, per tant $x=0$ és una arrel **doble** (el polinomi conté el factor $x^2$).
    - $t_2=9 \;\Rightarrow\; x^2=9 \;\Rightarrow\; x=\pm 3$

    Ho confirma la factorització $x^4-9x^2=x^2(x-3)(x+3)$.

    **Resposta:** $x=0$ (doble), $x=\pm 3$

### Exercici 9

Resol fent un canvi de variable que les redueixi a una equació de segon grau:

- **a)** $(x^2-2)^2=1$
- **b)** $x^6+7x^3-8=0$
- **c)** $9x^4-6x^2+1=0$

??? note "Mostra la solució"

    **a)** Desenvolupem el quadrat amb la identitat notable $(a-b)^2=a^2-2ab+b^2$ i ho passem tot al primer membre:

    $$
    \begin{aligned}
    (x^2-2)^2&=1\\
    x^4-4x^2+4&=1\\
    x^4-4x^2+3&=0
    \end{aligned}
    $$

    És biquadrada. Fem $t=x^2$: $t^2-4t+3=0$.

    $$
    t=\frac{4\pm\sqrt{16-12}}{2}=\frac{4\pm 2}{2}\;\Rightarrow\; t_1=3,\quad t_2=1.
    $$

    Desfem el canvi:

    - $t_1=3 \;\Rightarrow\; x^2=3 \;\Rightarrow\; x=\pm\sqrt3$
    - $t_2=1 \;\Rightarrow\; x^2=1 \;\Rightarrow\; x=\pm 1$

    **Resposta:** $x=\pm 1$, $x=\pm\sqrt3$

    **b)** Ara els exponents són $6$ i $3$, i $x^6=(x^3)^2$. Fem el canvi $t=x^3$ i l'equació queda de segon grau: $t^2+7t-8=0$.

    $$
    t=\frac{-7\pm\sqrt{49+32}}{2}=\frac{-7\pm 9}{2}\;\Rightarrow\; t_1=1,\quad t_2=-8.
    $$

    Desfem el canvi. Ara hem de fer una arrel **cúbica** i, a diferència de l'arrel quadrada, un nombre negatiu sí que té arrel cúbica real:

    - $t_1=1 \;\Rightarrow\; x^3=1 \;\Rightarrow\; x=\sqrt[3]{1}=1$
    - $t_2=-8 \;\Rightarrow\; x^3=-8 \;\Rightarrow\; x=\sqrt[3]{-8}=-2$

    Fixem-nos en la diferència amb les biquadrades: allà un valor negatiu de $t=x^2$ no donava solucions, mentre que aquí $t=x^3$ pot ser negatiu. A més, cada valor de $t$ dona una sola solució, no dues.

    **Resposta:** $x=1$, $x=-2$

    **c)** Ja és biquadrada. Fem $t=x^2$: $9t^2-6t+1=0$. El discriminant és

    $$
    \Delta=(-6)^2-4\cdot 9\cdot 1=36-36=0,
    $$

    per tant hi ha una única solució doble:

    $$
    t=\frac{6}{18}=\frac13 \quad\text{(doble)}.
    $$

    De fet, $9t^2-6t+1=(3t-1)^2$, és a dir, $9x^4-6x^2+1=(3x^2-1)^2$. Desfem el canvi racionalitzant l'arrel:

    $$
    x^2=\frac13\;\Rightarrow\; x=\pm\sqrt{\frac13}=\pm\frac{1}{\sqrt3}=\pm\frac{\sqrt3}{3}.
    $$

    Com que el factor $3x^2-1$ apareix elevat al quadrat, cadascuna de les dues arrels és doble.

    **Resposta:** $x=\dfrac{\sqrt3}{3}$ (doble) i $x=-\dfrac{\sqrt3}{3}$ (doble)

### Exercici 10

Resol factoritzant el polinomi amb Ruffini:

| | |
|:--|:--|
| **a)** $x^3-7x+6=0$ | **b)** $x^3-5x^2+7x-3=0$ |
| **c)** $x^3-x^2+x-1=0$ |  |

??? note "Mostra la solució"

    Les possibles arrels enteres són els divisors del terme independent. Les provem amb Ruffini fins a obtenir residu $0$ i, quan arribem a un quocient de grau 2, el resolem amb la fórmula.

    **a)** $P(x)=x^3-7x+6$. Els candidats són els divisors de $6$: $\pm1,\pm2,\pm3,\pm6$. Com que $P(1)=1-7+6=0$, $x=1$ és arrel. Apliquem Ruffini (el coeficient de $x^2$ és $0$):

    | | $1$ | $0$ | $-7$ | $6$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $1$ | $-6$ |
    | | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-6}$ | $\boxed{0}$ |

    Per tant $P(x)=(x-1)(x^2+x-6)$. Resolem el quocient:

    $$
    x^2+x-6=0\;\Rightarrow\; x=\frac{-1\pm\sqrt{1+24}}{2}=\frac{-1\pm 5}{2}\;\Rightarrow\; x=2,\quad x=-3.
    $$

    Així, $P(x)=(x-1)(x-2)(x+3)$.

    **Resposta:** $x=1$, $x=2$, $x=-3$

    **b)** $P(x)=x^3-5x^2+7x-3$. Els candidats són $\pm1,\pm3$. Com que $P(1)=1-5+7-3=0$, dividim per $x-1$:

    | | $1$ | $-5$ | $7$ | $-3$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $-4$ | $3$ |
    | | $\textbf{1}$ | $\textbf{-4}$ | $\textbf{3}$ | $\boxed{0}$ |

    El quocient és $x^2-4x+3$. Tornem a provar $x=1$ al quocient, ja que podria ser una arrel doble: $1-4+3=0$. Repetim Ruffini amb la mateixa arrel:

    | | $1$ | $-4$ | $3$ |
    |:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $-3$ |
    | | $\textbf{1}$ | $\textbf{-3}$ | $\boxed{0}$ |

    El nou quocient és $x-3$. Per tant

    $$
    P(x)=(x-1)^2(x-3),
    $$

    i $x=1$ és arrel doble perquè el factor $x-1$ apareix dues vegades.

    **Resposta:** $x=1$ (doble), $x=3$

    **c)** $P(x)=x^3-x^2+x-1$. Els candidats són $\pm1$. Com que $P(1)=1-1+1-1=0$:

    | | $1$ | $-1$ | $1$ | $-1$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $0$ | $1$ |
    | | $\textbf{1}$ | $\textbf{0}$ | $\textbf{1}$ | $\boxed{0}$ |

    Per tant $P(x)=(x-1)(x^2+1)$. Estudiem el factor de grau 2, $x^2+1=0$:

    $$
    \Delta=0^2-4\cdot1\cdot1=-4<0,
    $$

    així que no té arrels reals (de fet, $x^2+1\ge 1$ per a tot $x$).

    **Resposta:** $x=1$ (el factor $x^2+1$ no té arrels reals)

### Exercici 11

Resol les equacions següents:

- **a)** $x^4-2x^3-3x^2+8x-4=0$
- **b)** $2x^4+x^3-8x^2-x+6=0$
- **c)** $x^5-x^4-x+1=0$

??? note "Mostra la solució"

    **a)** $P(x)=x^4-2x^3-3x^2+8x-4$. Els candidats són els divisors de $4$: $\pm1,\pm2,\pm4$. Com que $P(1)=1-2-3+8-4=0$:

    | | $1$ | $-2$ | $-3$ | $8$ | $-4$ |
    |:--:|:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $-1$ | $-4$ | $4$ |
    | | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{-4}$ | $\textbf{4}$ | $\boxed{0}$ |

    El quocient $x^3-x^2-4x+4$ també s'anul·la en $x=1$ ($1-1-4+4=0$), així que repetim Ruffini amb la mateixa arrel:

    | | $1$ | $-1$ | $-4$ | $4$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $0$ | $-4$ |
    | | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-4}$ | $\boxed{0}$ |

    Ens queda $x^2-4=0\Rightarrow x^2=4\Rightarrow x=\pm2$. Per tant

    $$
    P(x)=(x-1)^2(x-2)(x+2).
    $$

    **Resposta:** $x=1$ (doble), $x=2$, $x=-2$

    **b)** $P(x)=2x^4+x^3-8x^2-x+6$. Els candidats enters són els divisors de $6$. Com que $P(1)=2+1-8-1+6=0$:

    | | $2$ | $1$ | $-8$ | $-1$ | $6$ |
    |:--:|:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $2$ | $3$ | $-5$ | $-6$ |
    | | $\textbf{2}$ | $\textbf{3}$ | $\textbf{-5}$ | $\textbf{-6}$ | $\boxed{0}$ |

    El quocient és $Q(x)=2x^3+3x^2-5x-6$. Provem $x=-1$: $Q(-1)=-2+3+5-6=0$.

    | | $2$ | $3$ | $-5$ | $-6$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $-1$ | | $-2$ | $-1$ | $6$ |
    | | $\textbf{2}$ | $\textbf{1}$ | $\textbf{-6}$ | $\boxed{0}$ |

    Resolem el quocient de grau 2:

    $$
    2x^2+x-6=0\;\Rightarrow\; x=\frac{-1\pm\sqrt{1+48}}{4}=\frac{-1\pm 7}{4}\;\Rightarrow\; x=\frac{6}{4}=\frac32,\quad x=-2.
    $$

    Així, $P(x)=(x-1)(x+1)(x+2)(2x-3)$.

    **Resposta:** $x=1$, $x=-1$, $x=-2$, $x=\dfrac32$

    **c)** $P(x)=x^5-x^4-x+1$. Escrivim tots els coeficients, també els nuls: $1,\,-1,\,0,\,0,\,-1,\,1$. Com que $P(1)=1-1-1+1=0$:

    | | $1$ | $-1$ | $0$ | $0$ | $-1$ | $1$ |
    |:--:|:--:|:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $0$ | $0$ | $0$ | $-1$ |
    | | $\textbf{1}$ | $\textbf{0}$ | $\textbf{0}$ | $\textbf{0}$ | $\textbf{-1}$ | $\boxed{0}$ |

    El quocient és $x^4-1$, que també s'anul·la en $x=1$. Repetim Ruffini amb la mateixa arrel:

    | | $1$ | $0$ | $0$ | $0$ | $-1$ |
    |:--:|:--:|:--:|:--:|:--:|:--:|
    | $1$ | | $1$ | $1$ | $1$ | $1$ |
    | | $\textbf{1}$ | $\textbf{1}$ | $\textbf{1}$ | $\textbf{1}$ | $\boxed{0}$ |

    Ara tenim $x^3+x^2+x+1$. En $x=1$ val $4\neq0$, però en $x=-1$ val $-1+1-1+1=0$:

    | | $1$ | $1$ | $1$ | $1$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $-1$ | | $-1$ | $0$ | $-1$ |
    | | $\textbf{1}$ | $\textbf{0}$ | $\textbf{1}$ | $\boxed{0}$ |

    Queda el factor $x^2+1$, amb discriminant $\Delta=0^2-4\cdot1\cdot1=-4<0$: no té arrels reals. Per tant

    $$
    P(x)=(x-1)^2(x+1)(x^2+1).
    $$

    **Resposta:** $x=1$ (doble), $x=-1$

### Exercici 12

Troba el valor de $m$ perquè $x=2$ sigui solució de l'equació $x^3+mx^2-4x+4=0$ i, després, resol-la.

??? note "Mostra la solució"

    Si $x=2$ és solució, en substituir $x=2$ l'equació s'ha de complir:

    $$
    \begin{aligned}
    2^3+m\cdot 2^2-4\cdot 2+4&=0\\
    8+4m-8+4&=0\\
    4m+4&=0\\
    m&=-1
    \end{aligned}
    $$

    Amb $m=-1$ l'equació és $x^3-x^2-4x+4=0$. Ja sabem que $x=2$ n'és arrel, així que dividim per Ruffini:

    | | $1$ | $-1$ | $-4$ | $4$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $2$ | | $2$ | $2$ | $-4$ |
    | | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-2}$ | $\boxed{0}$ |

    Resolem el quocient:

    $$
    x^2+x-2=0\;\Rightarrow\; x=\frac{-1\pm\sqrt{1+8}}{2}=\frac{-1\pm 3}{2}\;\Rightarrow\; x=1,\quad x=-2.
    $$

    Per tant $x^3-x^2-4x+4=(x-2)(x-1)(x+2)$.

    **Resposta:** $m=-1$; les solucions són $x=1$, $x=2$ i $x=-2$

### Exercici 13

Troba $k$ perquè $x=3$ sigui solució de l'equació $x^4+kx^2-18=0$ i, després, troba'n totes les solucions.

??? note "Mostra la solució"

    Si $x=3$ és solució, en substituir $x=3$ l'equació s'ha de complir:

    $$
    \begin{aligned}
    3^4+k\cdot3^2-18&=0\\
    81+9k-18&=0\\
    9k&=-63\\
    k&=-7
    \end{aligned}
    $$

    Amb $k=-7$ l'equació és la biquadrada $x^4-7x^2-18=0$. Fem el canvi de variable $t=x^2$, de manera que $x^4=t^2$:

    $$
    t^2-7t-18=0\;\Rightarrow\; t=\frac{7\pm\sqrt{49+72}}{2}=\frac{7\pm11}{2}\;\Rightarrow\; t_1=9,\quad t_2=-2 .
    $$

    Desfem el canvi:

    - $t_1=9\;\Rightarrow\; x^2=9\;\Rightarrow\; x=\pm3$.
    - $t_2=-2\;\Rightarrow\; x^2=-2$, que no té solució, perquè un quadrat no pot ser negatiu. Descartem $t=-2$.

    Com era d'esperar, $x=3$ és una de les solucions.

    **Resposta:** $k=-7$; les solucions són $x=3$ i $x=-3$
