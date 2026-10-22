# Solucionari — Factorització de polinomis

Resolució pas a pas dels exercicis 11–20 de [Exercicis i problemes](../exercicis.md).
Teoria: [Factorització de polinomis](../02_factoritzacio.md), [Polinomis](../01_polinomis.md).

### Exercici 11

> **Enunciat.** Factoritza completament: a) $x^3-5x^2+6x$ · b) $2x^3+2x^2-12x$ · c) $x^4-9x^2$ · d) $3x^3-12x^2+12x$

**a)** Falta el terme independent, per tant podem treure factor comú $x$:

$$x^3-5x^2+6x = x\,(x^2-5x+6)$$

Resolem $x^2-5x+6=0$:

$$x=\frac{5\pm\sqrt{25-24}}{2}=\frac{5\pm 1}{2}\Rightarrow x=3,\ x=2$$

Així, $x^2-5x+6=(x-3)(x-2)$.

**Resposta:** $x^3-5x^2+6x = x(x-2)(x-3)$

**b)** Tots els coeficients són múltiples de $2$ i no hi ha terme independent: treiem factor comú $2x$.

$$2x^3+2x^2-12x = 2x\,(x^2+x-6)$$

Resolem $x^2+x-6=0$:

$$x=\frac{-1\pm\sqrt{1+24}}{2}=\frac{-1\pm 5}{2}\Rightarrow x=2,\ x=-3$$

**Resposta:** $2x^3+2x^2-12x = 2x(x-2)(x+3)$

**c)** Treiem factor comú $x^2$:

$$x^4-9x^2 = x^2\,(x^2-9)$$

El factor $x^2-9$ és una diferència de quadrats: $x^2-9=(x-3)(x+3)$. El factor $x^2$ és $x\cdot x$, és a dir, $x=0$ és arrel doble.

**Resposta:** $x^4-9x^2 = x^2(x-3)(x+3)$

**d)** Treiem factor comú $3x$ (el $3$ divideix tots els coeficients i no hi ha terme independent):

$$3x^3-12x^2+12x = 3x\,(x^2-4x+4)$$

Resolem $x^2-4x+4=0$. El discriminant és $\Delta=(-4)^2-4\cdot 1\cdot 4=0$, de manera que hi ha una única arrel:

$$x=\frac{4\pm 0}{2}=2$$

Quan $\Delta=0$ l'arrel és **doble**: $x^2-4x+4=(x-2)^2$ (també es reconeix com a quadrat d'una diferència, $(x-2)^2=x^2-4x+4$). Per tant $x=2$ és arrel de multiplicitat $2$.

**Resposta:** $3x^3-12x^2+12x = 3x(x-2)^2$

### Exercici 12

> **Enunciat.** Factoritza completament (totes les arrels són enteres): a) $x^3-2x^2-5x+6$ · b) $x^3-3x-2$

**a)** No hi ha factor comú. Les arrels enteres són divisors del terme independent $6$: $\pm1,\pm2,\pm3,\pm6$. Provem $x=1$:

$$p(1)=1-2-5+6=0$$

Com que $p(1)=0$, $x=1$ és arrel. Dividim amb Ruffini:

| | $1$ | $-2$ | $-5$ | $6$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $-1$ | $-6$ |
| | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{-6}$ | $\boxed{0}$ |

Per tant $p(x)=(x-1)(x^2-x-6)$. Resolem $x^2-x-6=0$:

$$x=\frac{1\pm\sqrt{1+24}}{2}=\frac{1\pm 5}{2}\Rightarrow x=3,\ x=-2$$

**Resposta:** $x^3-2x^2-5x+6=(x-1)(x-3)(x+2)$

**b)** Escrivim el polinomi amb tots els termes, posant un $0$ al lloc que falta: $x^3+0x^2-3x-2$. Els divisors del terme independent són $\pm1,\pm2$. Provem:

$$p(1)=1-3-2=-4\neq 0\qquad p(-1)=-1+3-2=0$$

Com que $p(-1)=0$, $x=-1$ és arrel. Ruffini:

| | $1$ | $0$ | $-3$ | $-2$ |
|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $1$ | $2$ |
| | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{-2}$ | $\boxed{0}$ |

Ens queda $p(x)=(x+1)(x^2-x-2)$. Abans de resoldre el factor de grau $2$, comprovem si $x=-1$ **torna a ser arrel** del quocient $x^2-x-2$, repetint Ruffini amb el mateix valor:

| | $1$ | $-1$ | $-2$ |
|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $2$ |
| | $\textbf{1}$ | $\textbf{-2}$ | $\boxed{0}$ |

El residu torna a ser $0$, així que $x^2-x-2=(x+1)(x-2)$ i el factor $(x+1)$ apareix dues vegades. Per tant $x=-1$ és una **arrel doble** (multiplicitat $2$). El factor que queda, $x-2$, correspon a l'arrel simple $x=2$.

Comprovem amb el factor de grau $2$ per l'altre camí: $x^2-x-2=0$ dóna $x=\dfrac{1\pm 3}{2}$, és a dir $x=2$ i $x=-1$.

**Resposta:** $x^3-3x-2=(x+1)^2(x-2)$

### Exercici 13

> **Enunciat.** Factoritza completament (queda un factor de grau $2$ irreductible): a) $x^3-3x^2+4x-2$ · b) $x^3+x^2+x-3$

**a)** Divisors de $2$: $\pm1,\pm2$. Provem $x=1$:

$$p(1)=1-3+4-2=0$$

Ruffini:

| | $1$ | $-3$ | $4$ | $-2$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $-2$ | $2$ |
| | $\textbf{1}$ | $\textbf{-2}$ | $\textbf{2}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-1)(x^2-2x+2)$. Estudiem el factor de grau $2$:

$$\Delta=(-2)^2-4\cdot 1\cdot 2=4-8=-4<0$$

No té arrels reals, per tant és irreductible i la factorització s'atura aquí.

**Resposta:** $x^3-3x^2+4x-2=(x-1)(x^2-2x+2)$

**b)** Divisors de $3$: $\pm1,\pm3$. Provem $x=1$:

$$p(1)=1+1+1-3=0$$

Ruffini:

| | $1$ | $1$ | $1$ | $-3$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $2$ | $3$ |
| | $\textbf{1}$ | $\textbf{2}$ | $\textbf{3}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-1)(x^2+2x+3)$. Discriminant del factor de grau $2$:

$$\Delta=2^2-4\cdot 1\cdot 3=4-12=-8<0$$

Sense arrels reals: és irreductible.

**Resposta:** $x^3+x^2+x-3=(x-1)(x^2+2x+3)$

### Exercici 14

> **Enunciat.** Factoritza completament (les arrels del factor de grau $2$ són reals però irracionals): a) $x^3-2x^2-2x+4$ · b) $x^3-x^2-3x+3$

**a)** Divisors de $4$: $\pm1,\pm2,\pm4$. Provem:

$$p(1)=1-2-2+4=1\neq 0\qquad p(2)=8-8-4+4=0$$

Com que $p(2)=0$, $x=2$ és arrel. Ruffini:

| | $1$ | $-2$ | $-2$ | $4$ |
|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $0$ | $-4$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-2}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-2)(x^2-2)$. Les arrels del factor de grau $2$ són irracionals i Ruffini no les pot trobar, així que resolem l'equació directament:

$$x^2-2=0\Rightarrow x=\pm\sqrt{2}$$

Així, $x^2-2=(x-\sqrt2)(x+\sqrt2)$ (diferència de quadrats). Aquest factor té $\Delta=8>0$, de manera que, amb coeficients reals, es descompon en dos factors de grau $1$.

**Resposta:** $x^3-2x^2-2x+4=(x-2)(x-\sqrt{2})(x+\sqrt{2})$

**b)** Divisors de $3$: $\pm1,\pm3$. Provem $x=1$:

$$p(1)=1-1-3+3=0$$

Ruffini:

| | $1$ | $-1$ | $-3$ | $3$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $0$ | $-3$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-3}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-1)(x^2-3)$. Resolem $x^2-3=0$:

$$x=\pm\sqrt{3}$$

**Resposta:** $x^3-x^2-3x+3=(x-1)(x-\sqrt{3})(x+\sqrt{3})$

### Exercici 15

> **Enunciat.** Factoritza completament (el polinomi no és mònic: treu primer el factor comú numèric): a) $2x^3-4x^2-32x+64$ · b) $3x^3+3x^2-12x-12$ · c) $2x^3+2x^2-2x-2$

**a)** Tots els coeficients són múltiples de $2$; treiem aquest factor comú:

$$2x^3-4x^2-32x+64=2\,(x^3-2x^2-16x+32)$$

Factoritzem $q(x)=x^3-2x^2-16x+32$. Els divisors de $32$ són $\pm1,\pm2,\pm4,\pm8,\pm16,\pm32$. Provem $x=2$:

$$q(2)=8-8-32+32=0$$

| | $1$ | $-2$ | $-16$ | $32$ |
|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $0$ | $-32$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-16}$ | $\boxed{0}$ |

Ens queda $q(x)=(x-2)(x^2-16)$, i $x^2-16=(x-4)(x+4)$ (diferència de quadrats). El factor $2$ del principi s'ha de conservar.

**Resposta:** $2x^3-4x^2-32x+64=2(x-2)(x-4)(x+4)$

**b)** Tots els coeficients són múltiples de $3$:

$$3x^3+3x^2-12x-12=3\,(x^3+x^2-4x-4)$$

Factoritzem $q(x)=x^3+x^2-4x-4$. Divisors de $4$: $\pm1,\pm2,\pm4$. Provem $x=-1$:

$$q(-1)=-1+1+4-4=0$$

| | $1$ | $1$ | $-4$ | $-4$ |
|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $0$ | $4$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-4}$ | $\boxed{0}$ |

Ens queda $q(x)=(x+1)(x^2-4)=(x+1)(x-2)(x+2)$.

**Resposta:** $3x^3+3x^2-12x-12=3(x-2)(x+1)(x+2)$

**c)** Tots els coeficients són múltiples de $2$:

$$2x^3+2x^2-2x-2=2\,(x^3+x^2-x-1)$$

Factoritzem $q(x)=x^3+x^2-x-1$. Divisors de $1$: $\pm1$. Provem $x=1$:

$$q(1)=1+1-1-1=0$$

| | $1$ | $1$ | $-1$ | $-1$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $2$ | $1$ |
| | $\textbf{1}$ | $\textbf{2}$ | $\textbf{1}$ | $\boxed{0}$ |

Ens queda $q(x)=(x-1)(x^2+2x+1)$. Pel factor de grau $2$, $\Delta=2^2-4\cdot1\cdot1=0$: té una arrel doble, $x=-1$, i és el quadrat d'una suma: $x^2+2x+1=(x+1)^2$. Així, $x=-1$ és arrel de multiplicitat $2$.

**Resposta:** $2x^3+2x^2-2x-2=2(x-1)(x+1)^2$

### Exercici 16

> **Enunciat.** Factoritza completament cada polinomi (no hi ha cap indicació de quin cas és cadascun): a) $x^3-7x+6$ · b) $x^3-4x^2+6x-4$ · c) $x^3+x^2-3x-3$ · d) $2x^3-3x^2-11x+6$ · e) $x^3-x^2-8x+12$ · f) $x^4-x^3-7x^2+x+6$ · g) $x^4-2x^3-3x^2+4x+4$ · h) $x^5-2x^4-x^3+2x^2$ · i) $x^5-2x^3+2x^2-3x+2$

**a)** Posem el $0$ que falta: $x^3+0x^2-7x+6$. Divisors de $6$: $\pm1,\pm2,\pm3,\pm6$. Provem $x=1$:

$$p(1)=1-7+6=0$$

| | $1$ | $0$ | $-7$ | $6$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $1$ | $-6$ |
| | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-6}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-1)(x^2+x-6)$. Resolem $x^2+x-6=0$:

$$x=\frac{-1\pm\sqrt{1+24}}{2}=\frac{-1\pm5}{2}\Rightarrow x=2,\ x=-3$$

**Resposta:** $x^3-7x+6=(x-1)(x-2)(x+3)$

**b)** Divisors de $4$: $\pm1,\pm2,\pm4$. Provem:

$$p(1)=1-4+6-4=-1\neq0\qquad p(2)=8-16+12-4=0$$

| | $1$ | $-4$ | $6$ | $-4$ |
|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $-4$ | $4$ |
| | $\textbf{1}$ | $\textbf{-2}$ | $\textbf{2}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-2)(x^2-2x+2)$. Discriminant del factor de grau $2$: $\Delta=4-8=-4<0$, per tant és irreductible.

**Resposta:** $x^3-4x^2+6x-4=(x-2)(x^2-2x+2)$

**c)** Divisors de $3$: $\pm1,\pm3$. Provem:

$$p(1)=1+1-3-3=-4\neq0\qquad p(-1)=-1+1+3-3=0$$

| | $1$ | $1$ | $-3$ | $-3$ |
|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $0$ | $3$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-3}$ | $\boxed{0}$ |

Ens queda $p(x)=(x+1)(x^2-3)$. Resolem $x^2-3=0$: $x=\pm\sqrt3$ (arrels irracionals, que Ruffini no pot trobar).

**Resposta:** $x^3+x^2-3x-3=(x+1)(x-\sqrt{3})(x+\sqrt{3})$

**d)** El polinomi no és mònic. Les arrels enteres són divisors del terme independent $6$: $\pm1,\pm2,\pm3,\pm6$. Provem:

$$p(1)=-6\neq0\qquad p(-1)=12\neq0\qquad p(2)=-12\neq0\qquad p(3)=54-27-33+6=0$$

| | $2$ | $-3$ | $-11$ | $6$ |
|:--:|:--:|:--:|:--:|:--:|
| $3$ | | $6$ | $9$ | $-6$ |
| | $\textbf{2}$ | $\textbf{3}$ | $\textbf{-2}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-3)(2x^2+3x-2)$. Resolem $2x^2+3x-2=0$:

$$x=\frac{-3\pm\sqrt{9+16}}{4}=\frac{-3\pm5}{4}\Rightarrow x=\frac12,\ x=-2$$

L'arrel $x=\dfrac12$ és racional però no entera: Ruffini amb divisors del terme independent no la troba, però surt de l'equació de grau $2$. Com que el coeficient principal del factor és $2$, l'hem de conservar: $2x^2+3x-2=2\left(x-\dfrac12\right)(x+2)$.

**Resposta:** $2x^3-3x^2-11x+6=2(x-3)(x+2)\left(x-\dfrac12\right)=(x-3)(x+2)(2x-1)$

**e)** Divisors de $12$: $\pm1,\pm2,\pm3,\pm4,\pm6,\pm12$. Provem:

$$p(1)=1-1-8+12=4\neq0\qquad p(2)=8-4-16+12=0$$

| | $1$ | $-1$ | $-8$ | $12$ |
|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $2$ | $-12$ |
| | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-6}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-2)(x^2+x-6)$. Comprovem si $x=2$ torna a ser arrel del quocient:

| | $1$ | $1$ | $-6$ |
|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $6$ |
| | $\textbf{1}$ | $\textbf{3}$ | $\boxed{0}$ |

El residu és $0$ un cop més, així que $x^2+x-6=(x-2)(x+3)$ i $x=2$ és arrel doble. (Pel factor de grau $2$: $x=\dfrac{-1\pm5}{2}$, és a dir, $x=2$ i $x=-3$.)

**Resposta:** $x^3-x^2-8x+12=(x-2)^2(x+3)$

**f)** Polinomi de grau $4$, sense factor comú. Divisors de $6$: $\pm1,\pm2,\pm3,\pm6$. Provem $x=1$:

$$p(1)=1-1-7+1+6=0$$

| | $1$ | $-1$ | $-7$ | $1$ | $6$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $0$ | $-7$ | $-6$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-7}$ | $\textbf{-6}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-1)(x^3-7x-6)$, amb $x^3+0x^2-7x-6$. Busquem arrels de $q(x)=x^3-7x-6$ (divisors de $6$). Provem $x=-1$:

$$q(-1)=-1+7-6=0$$

| | $1$ | $0$ | $-7$ | $-6$ |
|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $1$ | $6$ |
| | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{-6}$ | $\boxed{0}$ |

Ara tenim $p(x)=(x-1)(x+1)(x^2-x-6)$. Resolem $x^2-x-6=0$:

$$x=\frac{1\pm\sqrt{1+24}}{2}=\frac{1\pm5}{2}\Rightarrow x=3,\ x=-2$$

**Resposta:** $x^4-x^3-7x^2+x+6=(x-3)(x-1)(x+1)(x+2)$

**g)** Polinomi de grau $4$. Divisors de $4$: $\pm1,\pm2,\pm4$. Provem:

$$p(1)=1-2-3+4+4=4\neq0\qquad p(2)=16-16-12+8+4=0$$

| | $1$ | $-2$ | $-3$ | $4$ | $4$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $0$ | $-6$ | $-4$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-3}$ | $\textbf{-2}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-2)(x^3-3x-2)$ (amb $x^3+0x^2-3x-2$). Mirem si $x=2$ torna a ser arrel del quocient:

| | $1$ | $0$ | $-3$ | $-2$ |
|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $4$ | $2$ |
| | $\textbf{1}$ | $\textbf{2}$ | $\textbf{1}$ | $\boxed{0}$ |

Sí: ara $p(x)=(x-2)^2(x^2+2x+1)$. Pel factor de grau $2$, $\Delta=4-4=0$, i $x^2+2x+1=(x+1)^2$. Per tant tenim dues arrels dobles: $x=2$ (multiplicitat $2$) i $x=-1$ (multiplicitat $2$). El grau suma $2+2=4$, com ha de ser.

**Resposta:** $x^4-2x^3-3x^2+4x+4=(x-2)^2(x+1)^2$

**h)** No hi ha terme independent ni terme de grau $1$; el menor grau és $2$, així que treiem factor comú $x^2$:

$$x^5-2x^4-x^3+2x^2=x^2\,(x^3-2x^2-x+2)$$

Factoritzem $q(x)=x^3-2x^2-x+2$. Divisors de $2$: $\pm1,\pm2$. Provem $x=1$:

$$q(1)=1-2-1+2=0$$

| | $1$ | $-2$ | $-1$ | $2$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $-1$ | $-2$ |
| | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{-2}$ | $\boxed{0}$ |

Ens queda $q(x)=(x-1)(x^2-x-2)$. Resolem $x^2-x-2=0$:

$$x=\frac{1\pm\sqrt{1+8}}{2}=\frac{1\pm3}{2}\Rightarrow x=2,\ x=-1$$

El factor $x^2$ indica que $x=0$ és arrel doble.

**Resposta:** $x^5-2x^4-x^3+2x^2=x^2(x-2)(x-1)(x+1)$

**i)** Polinomi de grau $5$ sense factor comú (el terme independent és $2$). Escrivim-lo amb tots els termes: $x^5+0x^4-2x^3+2x^2-3x+2$. Divisors de $2$: $\pm1,\pm2$. Provem $x=1$:

$$p(1)=1-2+2-3+2=0$$

| | $1$ | $0$ | $-2$ | $2$ | $-3$ | $2$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $1$ | $-1$ | $1$ | $-2$ |
| | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{1}$ | $\textbf{-2}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-1)(x^4+x^3-x^2+x-2)$. Comprovem si $x=1$ torna a ser arrel del quocient:

| | $1$ | $1$ | $-1$ | $1$ | $-2$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $2$ | $1$ | $2$ |
| | $\textbf{1}$ | $\textbf{2}$ | $\textbf{1}$ | $\textbf{2}$ | $\boxed{0}$ |

Sí. Ara $p(x)=(x-1)^2(x^3+2x^2+x+2)$. Per al cúbic $r(x)=x^3+2x^2+x+2$, provem $x=-2$:

$$r(-2)=-8+8-2+2=0$$

| | $1$ | $2$ | $1$ | $2$ |
|:--:|:--:|:--:|:--:|:--:|
| $-2$ | | $-2$ | $0$ | $-2$ |
| | $\textbf{1}$ | $\textbf{0}$ | $\textbf{1}$ | $\boxed{0}$ |

Ens queda $r(x)=(x+2)(x^2+1)$. El factor $x^2+1$ té $\Delta=0-4=-4<0$: és irreductible.

**Resposta:** $x^5-2x^3+2x^2-3x+2=(x-1)^2(x+2)(x^2+1)$

### Exercici 17

> **Enunciat.** Factoritza completament $x^5-3x^4-5x^3+15x^2+4x-12$ (totes les arrels són enteres).

És un polinomi de grau $5$ amb totes les arrels enteres: buscarem cinc arrels, repetides si cal. Divisors de $12$: $\pm1,\pm2,\pm3,\pm4,\pm6,\pm12$. Provem $x=1$:

$$p(1)=1-3-5+15+4-12=0$$

| | $1$ | $-3$ | $-5$ | $15$ | $4$ | $-12$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $-2$ | $-7$ | $8$ | $12$ |
| | $\textbf{1}$ | $\textbf{-2}$ | $\textbf{-7}$ | $\textbf{8}$ | $\textbf{12}$ | $\boxed{0}$ |

Ens queda $p(x)=(x-1)(x^4-2x^3-7x^2+8x+12)$. Provem $x=-1$ amb el quocient:

| | $1$ | $-2$ | $-7$ | $8$ | $12$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $3$ | $4$ | $-12$ |
| | $\textbf{1}$ | $\textbf{-3}$ | $\textbf{-4}$ | $\textbf{12}$ | $\boxed{0}$ |

Ara $p(x)=(x-1)(x+1)(x^3-3x^2-4x+12)$. Provem $x=2$ amb el quocient de grau $3$:

| | $1$ | $-3$ | $-4$ | $12$ |
|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $-2$ | $-12$ |
| | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{-6}$ | $\boxed{0}$ |

Tenim $p(x)=(x-1)(x+1)(x-2)(x^2-x-6)$. Per acabar, resolem $x^2-x-6=0$:

$$x=\frac{1\pm\sqrt{1+24}}{2}=\frac{1\pm5}{2}\Rightarrow x=3,\ x=-2$$

Les cinc arrels són $1,-1,2,3,-2$, totes simples.

**Resposta:** $x^5-3x^4-5x^3+15x^2+4x-12=(x-3)(x-2)(x-1)(x+1)(x+2)$

### Exercici 18

> **Enunciat.** Factoritza completament $x^6+2x^5-5x^4-7x^3-2x^2+5x+6$ (quatre arrels són enteres i queda un factor de grau $2$ irreductible).

Polinomi de grau $6$. Divisors de $6$: $\pm1,\pm2,\pm3,\pm6$. Provem $x=1$:

$$p(1)=1+2-5-7-2+5+6=0$$

| | $1$ | $2$ | $-5$ | $-7$ | $-2$ | $5$ | $6$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $3$ | $-2$ | $-9$ | $-11$ | $-6$ |
| | $\textbf{1}$ | $\textbf{3}$ | $\textbf{-2}$ | $\textbf{-9}$ | $\textbf{-11}$ | $\textbf{-6}$ | $\boxed{0}$ |

Ara $p(x)=(x-1)(x^5+3x^4-2x^3-9x^2-11x-6)$. Provem $x=-1$ amb el quocient:

| | $1$ | $3$ | $-2$ | $-9$ | $-11$ | $-6$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $-2$ | $4$ | $5$ | $6$ |
| | $\textbf{1}$ | $\textbf{2}$ | $\textbf{-4}$ | $\textbf{-5}$ | $\textbf{-6}$ | $\boxed{0}$ |

Ara $p(x)=(x-1)(x+1)(x^4+2x^3-4x^2-5x-6)$. Provem $x=2$ amb el quocient de grau $4$:

| | $1$ | $2$ | $-4$ | $-5$ | $-6$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $8$ | $8$ | $6$ |
| | $\textbf{1}$ | $\textbf{4}$ | $\textbf{4}$ | $\textbf{3}$ | $\boxed{0}$ |

Ara $p(x)=(x-1)(x+1)(x-2)(x^3+4x^2+4x+3)$. Provem $x=-3$ amb el cúbic:

| | $1$ | $4$ | $4$ | $3$ |
|:--:|:--:|:--:|:--:|:--:|
| $-3$ | | $-3$ | $-3$ | $-3$ |
| | $\textbf{1}$ | $\textbf{1}$ | $\textbf{1}$ | $\boxed{0}$ |

Tenim $p(x)=(x-1)(x+1)(x-2)(x+3)(x^2+x+1)$. El darrer factor, $x^2+x+1$, té

$$\Delta=1^2-4\cdot1\cdot1=-3<0$$

i per tant és irreductible. Les quatre arrels reals són $1,-1,2,-3$, totes simples. El grau suma $4\cdot1+2=6$, com ha de ser.

**Resposta:** $x^6+2x^5-5x^4-7x^3-2x^2+5x+6=(x-2)(x-1)(x+1)(x+3)(x^2+x+1)$

### Exercici 19

> **Enunciat.** *(guiat)* Comprova, multiplicant, que $x^4+4=(x^2-2x+2)(x^2+2x+2)$, i comprova després que els dos factors de grau $2$ són irreductibles.

Comprovació multiplicant. Agrupem els termes de cada factor de manera que es vegi una suma per una diferència, $(A-B)(A+B)=A^2-B^2$, amb $A=x^2+2$ i $B=2x$:

$$\begin{aligned}
(x^2-2x+2)(x^2+2x+2) &= \big[(x^2+2)-2x\big]\big[(x^2+2)+2x\big]\\
&=(x^2+2)^2-(2x)^2\\
&=x^4+4x^2+4-4x^2\\
&=x^4+4
\end{aligned}$$

Si preferim desenvolupar terme a terme:

$$\begin{aligned}
(x^2-2x+2)(x^2+2x+2) &= x^4+2x^3+2x^2-2x^3-4x^2-4x+2x^2+4x+4\\
&=x^4+(2x^3-2x^3)+(2x^2-4x^2+2x^2)+(-4x+4x)+4\\
&=x^4+4
\end{aligned}$$

Irreductibilitat. Un polinomi de grau $2$ és irreductible quan el seu discriminant és negatiu:

$$x^2-2x+2:\quad \Delta=(-2)^2-4\cdot1\cdot2=4-8=-4<0$$

$$x^2+2x+2:\quad \Delta=2^2-4\cdot1\cdot2=4-8=-4<0$$

Cap dels dos té arrels reals, de manera que no es poden descompondre en factors de grau $1$: són irreductibles. Així, $x^4+4$ no té cap arrel real i, tot i això, **no** és irreductible (és producte de dos factors de grau $2$ irreductibles).

**Resposta:** $(x^2-2x+2)(x^2+2x+2)=x^4+4$, i els dos factors tenen $\Delta=-4<0$, per tant són irreductibles.

### Exercici 20

> **Enunciat.** Troba un polinomi que tingui exactament les arrels indicades: a) $2$, $-1$ i $3$ · b) $0$ i $-2$ (doble)

Si un polinomi té arrels $r_1,r_2,\dots$, aleshores té els factors $(x-r_1)(x-r_2)\cdots$. Elevem el factor a la multiplicitat de l'arrel i no afegim cap factor més, per tal que no aparegui cap altra arrel.

**a)** Les arrels són $2$, $-1$ i $3$, totes simples:

$$p(x)=(x-2)(x+1)(x-3)$$

Desenvolupem: primer $(x+1)(x-3)=x^2-2x-3$, i després

$$\begin{aligned}
(x-2)(x^2-2x-3) &= x^3-2x^2-3x-2x^2+4x+6\\
&=x^3-4x^2+x+6
\end{aligned}$$

Comprovem una arrel: $p(2)=8-16+2+6=0$.

**Resposta:** $p(x)=(x-2)(x+1)(x-3)=x^3-4x^2+x+6$ (també serveix qualsevol múltiple $a\cdot p(x)$ amb $a\neq0$)

**b)** Interpretem l'enunciat com que l'arrel $0$ és simple i l'arrel $-2$ és doble (el "(doble)" acompanya el $-2$). Per tant, els factors són $x-0=x$ i $(x+2)$ elevat a $2$:

$$p(x)=x\,(x+2)^2$$

Desenvolupem: $(x+2)^2=x^2+4x+4$, i

$$p(x)=x\,(x^2+4x+4)=x^3+4x^2+4x$$

Comprovem que no té més arrels: $x^2+4x+4$ té $\Delta=16-16=0$, amb l'única arrel $x=-2$ (doble).

**Resposta:** $p(x)=x(x+2)^2=x^3+4x^2+4x$ (o qualsevol múltiple $a\cdot p(x)$ amb $a\neq0$)
