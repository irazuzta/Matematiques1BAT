# Solucionari — Fraccions algebraiques

Resolució pas a pas dels exercicis 21–27 de [Exercicis i problemes](../exercicis.md).
Teoria: [Factorització de polinomis](../02_factoritzacio.md), [Fraccions algebraiques](../03_fraccions_algebraiques.md).

### Exercici 21

> **Enunciat.** Calcula el MCD i el MCM mònic de cada parell de polinomis: a) $A(x)=x^2-9$, $B(x)=x^2-x-6$ · b) $A(x)=x^3-x$, $B(x)=x^2+2x+1$

**a)** Factoritzem els dos polinomis. El primer és una diferència de quadrats; el segon té arrels $x=3$ i $x=-2$ (suma $1$, producte $-6$):

$$A(x)=(x-3)(x+3) \qquad B(x)=(x-3)(x+2)$$

L'únic factor comú és $(x-3)$, amb exponent $1$. El MCD és aquest factor, i el MCM conté tots els factors que apareixen:

$$\text{MCD}=x-3 \qquad \text{MCM}=(x-3)(x+3)(x+2)$$

**Resposta:** $\text{MCD}=x-3$ i $\text{MCM}=(x-3)(x+3)(x+2)$

**b)** Per a $A(x)$ traiem factor comú i després apliquem la diferència de quadrats; $B(x)$ és el quadrat d'una suma:

$$A(x)=x(x^2-1)=x(x-1)(x+1) \qquad B(x)=(x+1)^2$$

El factor comú és $(x+1)$; apareix amb exponent $1$ a $A(x)$ i amb exponent $2$ a $B(x)$. Per al MCD agafem l'exponent més petit i per al MCM el més gran:

$$\text{MCD}=x+1 \qquad \text{MCM}=x(x-1)(x+1)^2$$

**Resposta:** $\text{MCD}=x+1$ i $\text{MCM}=x(x-1)(x+1)^2$

### Exercici 22

> **Enunciat.** Simplifica i indica els valors que queden exclosos del domini original: a) $\dfrac{x^2-1}{x^2+2x+1}$ · b) $\dfrac{x^2-4}{x^2-5x+6}$ · c) $\dfrac{x^2+3x}{x^2-9}$ · d) $\dfrac{x^3-x}{x^2-x}$

**a)** Factoritzem: el numerador és una diferència de quadrats i el denominador, un quadrat d'una suma. El denominador s'anul·la per a $x=-1$, que queda exclòs.

$$
\begin{aligned}
\frac{x^2-1}{x^2+2x+1} &= \frac{(x-1)\cancel{(x+1)}}{(x+1)\cancel{(x+1)}} \\
&= \frac{x-1}{x+1}
\end{aligned}
$$

**Resposta:** $\dfrac{x-1}{x+1}$, amb $x\neq-1$

**b)** El numerador és una diferència de quadrats. El denominador té arrels $x=2$ i $x=3$ (suma $5$, producte $6$), així que $x^2-5x+6=(x-2)(x-3)$. Els valors exclosos són $x=2$ i $x=3$.

$$
\begin{aligned}
\frac{x^2-4}{x^2-5x+6} &= \frac{\cancel{(x-2)}(x+2)}{\cancel{(x-2)}(x-3)} \\
&= \frac{x+2}{x-3}
\end{aligned}
$$

Atenció: $x=2$ continua exclòs encara que el factor $(x-2)$ hagi desaparegut.

**Resposta:** $\dfrac{x+2}{x-3}$, amb $x\neq2,3$

**c)** Traiem factor comú al numerador i factoritzem el denominador com a diferència de quadrats. Els valors exclosos són $x=-3$ i $x=3$.

$$
\begin{aligned}
\frac{x^2+3x}{x^2-9} &= \frac{x\cancel{(x+3)}}{(x-3)\cancel{(x+3)}} \\
&= \frac{x}{x-3}
\end{aligned}
$$

**Resposta:** $\dfrac{x}{x-3}$, amb $x\neq-3,3$

**d)** Al numerador traiem factor comú $x$ i, després, diferència de quadrats; al denominador traiem factor comú $x$. El denominador s'anul·la per a $x=0$ i $x=1$.

$$
\begin{aligned}
\frac{x^3-x}{x^2-x} &= \frac{\cancel{x}\,\cancel{(x-1)}(x+1)}{\cancel{x}\,\cancel{(x-1)}} \\
&= x+1
\end{aligned}
$$

**Resposta:** $x+1$, amb $x\neq0,1$

### Exercici 23

> **Enunciat.** Per a cada apartat, indica si la igualtat és certa per a tots els valors admesos pels dos membres. Escriu també els valors exclosos: a) $\dfrac{x+2}{x^2+4}=\dfrac{1}{x+2}$ · b) $\dfrac{x-3}{x^2-9}=\dfrac{1}{x+3}$ · c) $\dfrac{x^2+2x}{2x}=x+2$ · d) $\dfrac{x^2-2x}{x-2}=x$

**a)** El membre esquerre no exclou cap valor, perquè $x^2+4>0$ per a tot $x$; el dret exclou $x=-2$. Aquí no hi ha cap factor comú per simplificar, així que provem un valor: per a $x=1$ ens queda

$$\frac{1+2}{1+4}=\frac{3}{5} \qquad \text{i} \qquad \frac{1}{1+2}=\frac{1}{3}$$

que no coincideixen. De fet, si creuem els termes, $(x+2)^2=x^2+4$ només es compleix per a $x=0$.

**Resposta:** no és certa per a tots els valors admesos; exclou $x=-2$ (només es compleix per a $x=0$)

**b)** Factoritzem el denominador de l'esquerra: $x^2-9=(x-3)(x+3)$. El membre esquerre exclou $x=\pm3$ i el dret, $x=-3$; així que els valors admesos pels dos membres són $x\neq-3,3$.

$$
\begin{aligned}
\frac{x-3}{x^2-9} &= \frac{\cancel{(x-3)}}{\cancel{(x-3)}(x+3)} \\
&= \frac{1}{x+3}
\end{aligned}
$$

**Resposta:** és certa per a $x\neq-3,3$

**c)** Traiem factor comú al numerador i simplifiquem. El membre esquerre exclou $x=0$; el dret no exclou res.

$$
\begin{aligned}
\frac{x^2+2x}{2x} &= \frac{\cancel{x}(x+2)}{2\cancel{x}} \\
&= \frac{x+2}{2}
\end{aligned}
$$

Això no és igual a $x+2$ en general (per exemple, per a $x=1$: $\tfrac{3}{2}\neq3$). Només coincideixen quan $x+2=0$, és a dir, per a $x=-2$.

**Resposta:** no és certa per a tots els valors admesos; exclou $x=0$ (només es compleix per a $x=-2$)

**d)** Traiem factor comú al numerador i simplifiquem. El membre esquerre exclou $x=2$; el dret no exclou res.

$$
\begin{aligned}
\frac{x^2-2x}{x-2} &= \frac{x\cancel{(x-2)}}{\cancel{(x-2)}} \\
&= x
\end{aligned}
$$

**Resposta:** és certa per a $x\neq2$

### Exercici 24

> **Enunciat.** Opera, simplifica i indica els valors exclosos del domini original: a) $\dfrac{1}{x-1}+\dfrac{2}{x+1}$ · b) $\dfrac{x}{x^2-4}-\dfrac{1}{x+2}$ · c) $\dfrac{3}{x}+\dfrac{x}{x-3}$

**a)** Els denominadors són $x-1$ i $x+1$, sense factors comuns; el denominador comú és $(x-1)(x+1)=x^2-1$. Valors exclosos: $x=1$ i $x=-1$.

$$
\begin{aligned}
\frac{1}{x-1}+\frac{2}{x+1} &= \frac{x+1}{(x-1)(x+1)}+\frac{2(x-1)}{(x-1)(x+1)} \\
&= \frac{x+1+2x-2}{(x-1)(x+1)} = \frac{3x-1}{x^2-1}
\end{aligned}
$$

El numerador $3x-1$ no té cap factor en comú amb el denominador, i la fracció no se simplifica més.

**Resposta:** $\dfrac{3x-1}{x^2-1}$, amb $x\neq-1,1$

**b)** Factoritzem el primer denominador: $x^2-4=(x-2)(x+2)$. Com que $x+2$ ja hi és, el denominador comú és $(x-2)(x+2)$. Valors exclosos: $x=2$ i $x=-2$.

$$
\begin{aligned}
\frac{x}{x^2-4}-\frac{1}{x+2} &= \frac{x}{(x-2)(x+2)}-\frac{x-2}{(x-2)(x+2)} \\
&= \frac{x-(x-2)}{(x-2)(x+2)} = \frac{2}{x^2-4}
\end{aligned}
$$

**Resposta:** $\dfrac{2}{x^2-4}$, amb $x\neq-2,2$

**c)** El denominador comú és $x(x-3)$. Valors exclosos: $x=0$ i $x=3$.

$$
\begin{aligned}
\frac{3}{x}+\frac{x}{x-3} &= \frac{3(x-3)}{x(x-3)}+\frac{x^2}{x(x-3)} \\
&= \frac{3x-9+x^2}{x(x-3)} = \frac{x^2+3x-9}{x(x-3)}
\end{aligned}
$$

El numerador val $-9$ per a $x=0$ i $9$ per a $x=3$, així que no té els factors $x$ ni $x-3$ i no es pot simplificar.

**Resposta:** $\dfrac{x^2+3x-9}{x(x-3)}$, amb $x\neq0,3$

### Exercici 25

> **Enunciat.** Opera, simplifica i indica els valors exclosos del domini original: a) $\dfrac{x+3}{x-1}\cdot\dfrac{x^2-1}{(x+3)^2}$ · b) $\dfrac{x^2-4}{x+1}:\dfrac{x-2}{x+1}$

**a)** Els denominadors originals són $x-1$ i $(x+3)^2$, així que els valors exclosos són $x=1$ i $x=-3$. Multipliquem, factoritzem $x^2-1=(x-1)(x+1)$ i simplifiquem:

$$
\begin{aligned}
\frac{x+3}{x-1}\cdot\frac{x^2-1}{(x+3)^2} &= \frac{(x+3)(x-1)(x+1)}{(x-1)(x+3)^2} \\
&= \frac{\cancel{(x+3)}\,\cancel{(x-1)}(x+1)}{\cancel{(x-1)}\,\cancel{(x+3)}(x+3)} \\
&= \frac{x+1}{x+3}
\end{aligned}
$$

**Resposta:** $\dfrac{x+1}{x+3}$, amb $x\neq-3,1$

**b)** Els denominadors originals exclouen $x=-1$. A més, en un quocient la fracció divisora no pot valer zero: $\dfrac{x-2}{x+1}=0$ quan $x=2$, així que $x=2$ també queda exclòs.

Multipliquem per la inversa de la segona fracció, factoritzem $x^2-4=(x-2)(x+2)$ i simplifiquem:

$$
\begin{aligned}
\frac{x^2-4}{x+1}:\frac{x-2}{x+1} &= \frac{x^2-4}{x+1}\cdot\frac{x+1}{x-2} \\
&= \frac{(x-2)(x+2)\,(x+1)}{(x+1)(x-2)} \\
&= x+2
\end{aligned}
$$

**Resposta:** $x+2$, amb $x\neq-1,2$

### Exercici 26

> **Enunciat.** Opera, simplifica i indica els valors exclosos del domini original: $\dfrac{1}{x}+\dfrac{1}{x+1}-\dfrac{2}{x^2+x}$

Factoritzem l'últim denominador: $x^2+x=x(x+1)$, que ja conté els altres dos. Així, el denominador comú és $x(x+1)$ i els valors exclosos són $x=0$ i $x=-1$.

$$
\begin{aligned}
\frac{1}{x}+\frac{1}{x+1}-\frac{2}{x^2+x} &= \frac{x+1}{x(x+1)}+\frac{x}{x(x+1)}-\frac{2}{x(x+1)} \\
&= \frac{x+1+x-2}{x(x+1)} = \frac{2x-1}{x(x+1)}
\end{aligned}
$$

El numerador $2x-1$ s'anul·la per a $x=\tfrac12$, que no és arrel del denominador; per tant, no hi ha res més a simplificar.

**Resposta:** $\dfrac{2x-1}{x(x+1)}$, amb $x\neq-1,0$

### Exercici 27

> **Enunciat.** Demostra les identitats següents i indica per a quins valors de $x$ són vàlides: a) $\dfrac{1}{x-1}-\dfrac{1}{x+1}=\dfrac{2}{x^2-1}$ · b) $\dfrac{x}{x+1}+\dfrac{1}{x+1}=1$

**a)** Operem el membre esquerre fins a obtenir el dret. El denominador comú és $(x-1)(x+1)=x^2-1$.

$$
\begin{aligned}
\frac{1}{x-1}-\frac{1}{x+1} &= \frac{x+1}{(x-1)(x+1)}-\frac{x-1}{(x-1)(x+1)} \\
&= \frac{x+1-(x-1)}{(x-1)(x+1)} = \frac{2}{x^2-1}
\end{aligned}
$$

Això és exactament el membre dret. L'esquerre exclou $x=\pm1$ i el dret també ($x^2-1=0$), de manera que la identitat és vàlida per a tots els altres valors.

**Resposta:** la identitat és certa per a $x\neq-1,1$

**b)** Les dues fraccions tenen el mateix denominador, així que sumem els numeradors i simplifiquem:

$$
\begin{aligned}
\frac{x}{x+1}+\frac{1}{x+1} &= \frac{x+1}{x+1} \\
&= 1
\end{aligned}
$$

L'esquerre exclou $x=-1$ i el dret no exclou res; per tant, la identitat només té sentit per a $x\neq-1$.

**Resposta:** la identitat és certa per a $x\neq-1$
