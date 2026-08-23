# Polinomis

## Definició

Ja coneixes els polinomis de cursos anteriors: és un concepte que anirem fent servir com a base per factoritzar i resoldre equacions.

!!! abstract "Definició: polinomi"
    Un **polinomi** en la variable $x$ amb coeficients reals és una expressió de la forma

    $$p(x) = \sum_{i=0}^{n} a_i x^i = a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0$$

    on $n\in\mathbb{N}$, els coeficients $a_0,a_1,\dots,a_n \in \mathbb{R}$, i $a_n \neq 0$.

    - $a_n$ s'anomena **coeficient principal**, i $n$ el **grau** del polinomi ($\text{grau}(p)=n$).
    - $a_0$ s'anomena **terme independent**.
    - Cada sumand $a_i x^i$ s'anomena **terme** (o **monomi**) del polinomi.

!!! example "**Exemple:** Un polinomi de grau 4"
    $$p(x) = 3x^4 - 2x^3 + x^2 - 5x + 6$$

    És un polinomi de grau $4$, amb coeficient principal $a_4=3$ i terme independent $a_0=6$. En notació de sumatori:

    $$p(x) = \sum_{i=0}^{4} a_i x^i, \qquad a_4=3,\ a_3=-2,\ a_2=1,\ a_1=-5,\ a_0=6$$

!!! note "Termes que falten"
    Si un polinomi no té algun terme (per exemple, $p(x)=x^3-5$ no té terme de grau $2$ ni de grau $1$), es considera que el seu coeficient val $0$. Ho farem servir tot seguit per sumar, restar i dividir polinomis.

## Suma i resta de polinomis

!!! abstract "Definició: suma i resta de polinomis"
    Siguin $p(x)=\displaystyle\sum_{i=0}^n a_i x^i$ i $q(x)=\displaystyle\sum_{i=0}^n b_i x^i$ dos polinomis (completant amb coeficients $0$ els graus que no tinguin terme, si cal). Definim

    $$p(x)+q(x) = \sum_{i=0}^n (a_i+b_i)\,x^i, \qquad p(x)-q(x) = \sum_{i=0}^n (a_i-b_i)\,x^i$$

    És a dir, sumem (o restem) els coeficients dels termes del mateix grau.

!!! example "**Exemple:** Suma de polinomis"
    Siguin $p(x)=2x^4-3x^3+x-5$ i $q(x)=x^4+2x^3-4x^2+3$. Agrupem terme a terme:

    $$
    p(x)+q(x) = (2x^4+x^4) + (-3x^3+2x^3) + (-4x^2) + (x) + (-5+3)
    $$

    $$
    p(x)+q(x) = 3x^4 - x^3 - 4x^2 + x - 2
    $$

!!! example "**Exemple:** Resta de polinomis"
    Amb els mateixos $p(x)$ i $q(x)$: el signe $-$ afecta tots els termes del segon polinomi, així que primer el distribuïm canviant el signe de cada terme de $q(x)$:

    $$
    p(x)-q(x) = (2x^4-3x^3+x-5) - (x^4+2x^3-4x^2+3) = 2x^4-3x^3+x-5 - x^4-2x^3+4x^2-3
    $$

    Ara agrupem terme a terme:

    $$
    p(x)-q(x) = (2x^4-x^4) + (-3x^3-2x^3) + (4x^2) + (x) + (-5-3) = x^4 - 5x^3 + 4x^2 + x - 8
    $$

!!! note "Compte amb el signe"
    En restar, és fàcil oblidar canviar el signe d'algun terme del segon polinomi. Comprova sempre que cada terme de $q(x)$ ha canviat de signe abans d'agrupar.

## Multiplicació de polinomis

Per multiplicar dos polinomis, apliquem la propietat distributiva: multipliquem cada terme del primer per cada terme del segon, i després agrupem termes semblants.

!!! example "**Exemple:** Multiplicació de polinomis"
    Multipliquem $p(x)=2x^2-x+3$ per $q(x)=x-4$:

    $$
    \begin{aligned}
    p(x)\cdot q(x) &= (2x^2-x+3)(x-4) \\
    &= 2x^2\cdot x + 2x^2\cdot(-4) - x\cdot x - x\cdot(-4) + 3\cdot x + 3\cdot(-4) \\
    &= 2x^3 - 8x^2 - x^2 + 4x + 3x - 12 \\
    &= 2x^3 - 9x^2 + 7x - 12
    \end{aligned}
    $$

!!! tip "Propietat: grau del producte"
    Si $\text{grau}(p)=n$ i $\text{grau}(q)=m$, aleshores $\text{grau}(p\cdot q)=n+m$.

    En l'exemple anterior: $\text{grau}(p)=2$, $\text{grau}(q)=1$, i el producte té grau $2+1=3$, tal com esperàvem.

## Divisió de polinomis

!!! example "**Exemple:** Divisió de polinomis"
    Dividim $D(x) = x^3 - 2x^2 + 4x - 1$ (dividend, grau $3$) entre $d(x) = x^2+1$ (divisor, grau $2$).

    1. Dividim el terme de grau més alt del dividend pel de grau més alt del divisor: $x^3 \div x^2 = x$. Aquest és el primer terme del quocient. Multipliquem el divisor per $x$ i el restem al dividend:

        $$\left(x^3-2x^2+4x-1\right) - x\cdot\left(x^2+1\right) = \left(x^3-2x^2+4x-1\right)-\left(x^3+x\right) = -2x^2+3x-1$$

    2. Repetim amb el nou residu parcial $-2x^2+3x-1$: $-2x^2 \div x^2 = -2$. Aquest és el segon terme del quocient. Multipliquem el divisor per $-2$ i el restem:

        $$\left(-2x^2+3x-1\right) - (-2)\cdot\left(x^2+1\right) = \left(-2x^2+3x-1\right)-\left(-2x^2-2\right) = 3x+1$$

    3. El nou residu, $3x+1$, té grau $1$: com que és menor que el grau del divisor ($2$), aturem el procés. Aquest és el residu final.

    El quocient és $q(x)=x-2$ i el residu és $r(x)=3x+1$.

    **Comprovació:** $d(x)\cdot q(x) + r(x) = (x^2+1)(x-2) + (3x+1) = x^3-2x^2+x-2+3x+1 = x^3-2x^2+4x-1 = D(x)$, tal com calia.

!!! abstract "Definició: divisió de polinomis"
    Donats dos polinomis $D(x)$ (dividend) i $d(x)$ (divisor, amb $d(x)\neq 0$), sempre existeixen dos polinomis únics $q(x)$ (quocient) i $r(x)$ (residu) tals que

    $$D(x) = d(x)\cdot q(x) + r(x), \qquad \text{amb } \text{grau}(r) < \text{grau}(d) \ \text{(o } r(x)=0\text{)}$$

    Si $r(x)=0$, diem que $d(x)$ **divideix** $D(x)$ (o que $D(x)$ és **divisible** per $d(x)$).

Aquesta relació serà la base de l'apartat següent, on veurem com factoritzar polinomis (per exemple, amb la regla de Ruffini quan el divisor és de la forma $x-a$).
