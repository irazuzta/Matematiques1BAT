# Polinomis

## Definició

Ja coneixes els polinomis de cursos anteriors. En aquest apartat revisarem conceptes ja coneguts amb més formalitat matemàtica.

!!! abstract "Definició: polinomi"
    Un **polinomi** amb variable $x$ i coeficients reals és una expressió de la forma

    $$
    \begin{aligned}
    p(x) &= \sum_{i=0}^{n} a_i x^i \\
    &= a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0
    \end{aligned}
    $$

    on $n\in\mathbb{N}$, els coeficients $a_0,a_1,\dots,a_n \in \mathbb{R}$, i $a_n \neq 0$.

    - $a_n$ s'anomena **coeficient principal**, i $n$ el **grau** del polinomi ($\text{grau}(p)=n$).
    - $a_0$ s'anomena **terme independent**.
    - Cada sumand $a_i x^i$ s'anomena **terme** (o **monomi**) del polinomi.

!!! example "**Exemple:** Un polinomi de grau 4"
    $$p(x) = 3x^4 - 2x^3 + x^2 - 5x + 6$$

    És un polinomi de grau $4$, amb coeficient principal $a_4=3$ i terme independent $a_0=6$. En notació de sumatori:

    $$
    \begin{aligned}
    p(x) &= \sum_{i=0}^{4} a_i x^i, \\
    &\qquad a_4=3,\ a_3=-2,\ a_2=1,\ a_1=-5,\ a_0=6
    \end{aligned}
    $$

!!! note "Termes que falten"
    Si un polinomi no té algun terme (per exemple, $p(x)=x^3-5$ no té terme de grau $2$ ni de grau $1$), es considera que els coeficients dels termes que falten valen $0$.

## Valor d'un polinomi en un punt

Sovint necessitem saber quant val un polinomi per a un valor concret d'$x$. Això ho anomenem **avaluar** el polinomi en $a$.

!!! abstract "Definició: valor d'un polinomi en $x=a$"
    Avaluar un polinomi $p(x)$ en $x=a$ vol dir substituir $x$ per $a$ i calcular el resultat. El valor obtingut es denota $p(a)$.

!!! example "**Exemple:** Avaluació d'un polinomi"
    Sigui $p(x) = 2x^3-x^2+3$. Calculem $p(2)$:

    $$p(2) = 2\cdot 2^3 - 2^2 + 3 = 16-4+3 = 15$$

    Per tant, $p(2)=15$.

Aquest concepte el farem servir sovint més endavant, per exemple per comprovar si un valor és arrel d'un polinomi (és a dir, si $p(a)=0$).

## Suma i resta de polinomis

!!! abstract "Definició: suma i resta de polinomis"
    Siguin $p(x)=\displaystyle\sum_{i=0}^n a_i x^i$ i $q(x)=\displaystyle\sum_{i=0}^m b_i x^i$ dos polinomis i $k=\max(n,m)$. Si cal, completem amb coeficients $0$ els graus que no tinguin terme i fins a completar al grau màxim dels polinomis. Definim

    $$(p+q)(x) = p(x)+q(x) = \sum_{i=0}^k (a_i+b_i)\,x^i$$

    $$(p-q)(x) = p(x)-q(x) = \sum_{i=0}^k (a_i-b_i)\,x^i$$

    És a dir, sumem (o restem) els coeficients dels termes del mateix grau (termes semblants) i obtenim un nou polinomi de grau $k$

!!! example "**Exemple:** Suma de polinomis"
    Siguin $p(x)=2x^4-3x^3+x-5$ i $q(x)=x^4+2x^3-4x^2+3$. Agrupem termes semblants:

    $$
    \begin{aligned}
    p(x)+q(x) &= (2x^4+x^4) + (-3x^3+2x^3) + (-4x^2) + (x) + (-5+3) \\
    &= 3x^4 - x^3 - 4x^2 + x - 2
    \end{aligned}
    $$

!!! example "**Exemple:** Resta de polinomis"
    Amb els mateixos $p(x)$ i $q(x)$: el signe $-$ afecta tots els termes del segon polinomi, així que primer el distribuïm canviant el signe de cada terme de $q(x)$:

    $$
    \begin{aligned}
    p(x)-q(x) &= (2x^4-3x^3+x-5) - (x^4+2x^3-4x^2+3) \\
    &= 2x^4-3x^3+x-5 - x^4-2x^3+4x^2-3
    \end{aligned}
    $$

    Ara agrupem termes semblants:

    $$
    \begin{aligned}
    p(x)-q(x) &= (2x^4-x^4) + (-3x^3-2x^3) + (4x^2) + (x) + (-5-3) \\
    &= x^4 - 5x^3 + 4x^2 + x - 8
    \end{aligned}
    $$

!!! note "Compte amb el signe"
    En restar, és fàcil oblidar canviar el signe d'algun terme del segon polinomi. Comprova sempre que cada terme de $q(x)$ ha canviat de signe abans d'agrupar.

## Multiplicació de polinomis

Per multiplicar dos polinomis, apliquem la **propietat distributiva**: multipliquem cada terme del primer per cada terme del segon, i després agrupem termes semblants.

!!! example "**Exemple:** Multiplicació de polinomis"
    Multipliquem $p(x)=2x^2-x+3$ per $q(x)=x-4$:

    $$
    \begin{aligned}
    p(x)\cdot q(x) &= (2x^2-x+3)(x-4) \\
    &= 2x^2\cdot x + 2x^2\cdot(-4) - x\cdot x - x\cdot(-4) \\
    &\quad + 3\cdot x + 3\cdot(-4) \\
    &= 2x^3 - 8x^2 - x^2 + 4x + 3x - 12 \\
    &= 2x^3 - 9x^2 + 7x - 12
    \end{aligned}
    $$

!!! tip "Propietat: grau del producte"
    Si $\text{grau}(p)=n$ i $\text{grau}(q)=m$, aleshores $\text{grau}(p\cdot q)=n+m$.

    En l'exemple anterior: $\text{grau}(p)=2$, $\text{grau}(q)=1$, i el producte té grau $2+1=3$, tal com esperàvem.

## Divisió de polinomis

!!! example "**Exemple:** Divisió de polinomis"
    Dividim $D(x) = x^3 - 2x^2 + 4x - 1$ entre $d(x) = x^2+1$. El resultat de la divisió és:

    $$
    \begin{aligned}
    D(x) &= x^3-2x^2+4x-1 & d(x) &= x^2+1 \\
    q(x) &= x-2 & r(x) &= 3x+1
    \end{aligned}
    $$

    - $D(x)$ és el **dividend**, de grau $3$.
    - $d(x)$ és el **divisor**, de grau $2$.
    - $q(x)$ és el **quocient**, de grau $1$.
    - $r(x)$ és el **residu**, de grau $1$ — inferior al grau del divisor, tal com ha de ser.

    **Comprovació:**

    $$
    \begin{aligned}
    d(x)\cdot q(x) + r(x) &= (x^2+1)(x-2) + (3x+1) \\
    &= x^3-2x^2+x-2+3x+1 \\
    &= x^3-2x^2+4x-1 = D(x)
    \end{aligned}
    $$


!!! abstract "Definició: divisió de polinomis"
    Donats dos polinomis $D(x)$ (dividend) i $d(x)$ (divisor, amb $d(x)\neq 0$), sempre existeixen dos polinomis únics $q(x)$ (quocient) i $r(x)$ (residu) tals que

    $$
    \begin{aligned}
    D(x) &= d(x)\cdot q(x) + r(x), \\
    &\qquad \text{amb } \text{grau}(r) < \text{grau}(d) \ \text{(o } r(x)=0\text{)}
    \end{aligned}
    $$

    Si $r(x)=0$, diem que $d(x)$ és **divisor de** $D(x)$ o que $D(x)$ és **divisible** per $d(x)$.

## Regla de Ruffini

Ja coneixes la regla de Ruffini de cursos anteriors: és una manera fàcil de dividir un polinomi $p(x)$ entre un polinomi de grau 1 de la forma $q(x) = x-a$. N'hi ha prou de treballar amb els coeficients de $p(x)$ i el valor d'$a$.

!!! example "**Exemple:** Ruffini amb residu diferent de zero"
    Dividim $p(x) = 2x^3-3x^2+x-4$ entre $q(x) = x-2$ (és a dir, $a=2$):

    | | $2$ | $-3$ | $1$ | $-4$ |
    |---|---|---|---|---|
    | $2$ | | $4$ | $2$ | $6$ |
    | | $\textbf{2}$ | $\textbf{1}$ | $\textbf{3}$ | $\boxed{2}$ |

    El quocient és $q(x)=2x^2+x+3$ (apareix en negreta) i el residu és $r=2$ (apareix enquadrat). És a dir,

    $$p(x) = (x-2)(2x^2+x+3) + 2$$

!!! example "**Exemple:** Ruffini amb residu zero"
    Dividim $p(x) = x^3-6x^2+11x-6$ entre $x-1$ (és a dir, $a=1$):

    | | $1$ | $-6$ | $11$ | $-6$ |
    |---|---|---|---|---|
    | $1$ | | $1$ | $-5$ | $6$ |
    | | $\textbf{1}$ | $\textbf{-5}$ | $\textbf{6}$ | $\boxed{0}$ |

    El quocient és $q(x)=x^2-5x+6$ i el residu és $r=0$. És a dir,

    $$p(x) = (x-1)(x^2-5x+6)$$
    
    En aquest cas $(x-1)$ i $(x^2-5x+6)$ són divisors de $p(x)$



!!! tip "Propietat: el residu és el valor del polinomi en $a$"
    El residu $r$ que s'obté en dividir $p(x)$ entre $x-a$ coincideix sempre amb $p(a)$:

    $$r = p(a)$$

    Ho podem comprovar en els dos exemples anteriors:

    - Primer exemple ($a=2$): $p(2) = 2\cdot 8-3\cdot 4+2-4 = 2$, que coincideix amb el residu obtingut.
    - Segon exemple ($a=1$): $p(1) = 1-6+11-6 = 0$, que coincideix amb el residu obtingut.

    Aquesta propietat serà clau per trobar arrels de polinomis: si trobem un valor $a$ tal que el residu de Ruffini és $0$, sabrem que $a$ és una arrel de $p(x)$, o sigui $p(a)=0$.
    
!!! tip "Teorema del factor"
    $a$ és una arrel de $p(x)$ si, i només si $(x-a)$ és divisor de $p(x)$

    $$p(a) = 0 \ \Leftrightarrow \ x-a \text{ és divisor de } p(x)$$

Amb la divisió i la regla de Ruffini ja tenim les eines per al següent apartat, on veurem com factoritzar polinomis a partir de les seves arrels.
