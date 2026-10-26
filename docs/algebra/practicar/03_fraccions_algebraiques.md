# Fraccions algebraiques

Exercicis 21–27. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 21

Calcula el MCD i el MCM mònic de cada parell de polinomis:

- **a)** $A(x)=x^2-9$, $B(x)=x^2-x-6$
- **b)** $A(x)=x^3-x$, $B(x)=x^2+2x+1$

??? note "Mostra la solució"

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

Simplifica les fraccions algebraiques següents:

| | |
|:--|:--|
| **a)** $\dfrac{x^2-1}{x^2+2x+1}$ | **b)** $\dfrac{x^2-4}{x^2-5x+6}$ |
| **c)** $\dfrac{x^2+3x}{x^2-9}$ | **d)** $\dfrac{x^3-x}{x^2-x}$ |

??? note "Mostra la solució"

    Per simplificar una fracció algebraica, factoritzem el numerador i el denominador, cancel·lem els factors comuns i escrivim el que queda.

    **a)** Factoritzem cada part:

    - Numerador: $x^2-1$ és una diferència de quadrats, $x^2-1=(x-1)(x+1)$.
    - Denominador: $x^2+2x+1$ és el quadrat d'una suma, $x^2+2x+1=(x+1)^2=(x+1)(x+1)$.

    Substituïm, cancel·lem el factor comú $(x+1)$ i ens queda:

    $$
    \begin{aligned}
    \frac{x^2-1}{x^2+2x+1} &= \frac{(x-1)(x+1)}{(x+1)(x+1)} \\
    &= \frac{(x-1)\cancel{(x+1)}}{\cancel{(x+1)}(x+1)} \\
    &= \frac{x-1}{x+1}
    \end{aligned}
    $$

    **Resposta:** $\dfrac{x-1}{x+1}$

    **b)** Factoritzem cada part:

    - Numerador: $x^2-4$ és una diferència de quadrats, $x^2-4=(x-2)(x+2)$.
    - Denominador: $x^2-5x+6$ té arrels $x=2$ i $x=3$ (suma $5$, producte $6$), per tant $x^2-5x+6=(x-2)(x-3)$.

    Substituïm i cancel·lem el factor comú $(x-2)$:

    $$
    \begin{aligned}
    \frac{x^2-4}{x^2-5x+6} &= \frac{(x-2)(x+2)}{(x-2)(x-3)} \\
    &= \frac{\cancel{(x-2)}(x+2)}{\cancel{(x-2)}(x-3)} \\
    &= \frac{x+2}{x-3}
    \end{aligned}
    $$

    **Resposta:** $\dfrac{x+2}{x-3}$

    **c)** Factoritzem cada part:

    - Numerador: traiem factor comú $x$, $x^2+3x=x(x+3)$.
    - Denominador: $x^2-9$ és una diferència de quadrats, $x^2-9=(x-3)(x+3)$.

    Substituïm i cancel·lem el factor comú $(x+3)$:

    $$
    \begin{aligned}
    \frac{x^2+3x}{x^2-9} &= \frac{x(x+3)}{(x-3)(x+3)} \\
    &= \frac{x\cancel{(x+3)}}{(x-3)\cancel{(x+3)}} \\
    &= \frac{x}{x-3}
    \end{aligned}
    $$

    **Resposta:** $\dfrac{x}{x-3}$

    **d)** Factoritzem cada part:

    - Numerador: traiem factor comú $x$ i després apliquem la diferència de quadrats, $x^3-x=x(x^2-1)=x(x-1)(x+1)$.
    - Denominador: traiem factor comú $x$, $x^2-x=x(x-1)$.

    Substituïm i cancel·lem els factors comuns $x$ i $(x-1)$:

    $$
    \begin{aligned}
    \frac{x^3-x}{x^2-x} &= \frac{x(x-1)(x+1)}{x(x-1)} \\
    &= \frac{\cancel{x}\,\cancel{(x-1)}(x+1)}{\cancel{x}\,\cancel{(x-1)}} \\
    &= x+1
    \end{aligned}
    $$

    **Resposta:** $x+1$

### Exercici 23

Per a cada apartat, indica si la igualtat és certa. Si no ho és, dona un valor de $x$ per al qual els dos membres no coincideixin:

| | |
|:--|:--|
| **a)** $\dfrac{x+2}{x^2+4}=\dfrac{1}{x+2}$ | **b)** $\dfrac{x-3}{x^2-9}=\dfrac{1}{x+3}$ |
| **c)** $\dfrac{x^2+2x}{2x}=x+2$ | **d)** $\dfrac{x^2-2x}{x-2}=x$ |

??? note "Mostra la solució"

    Per comprovar una igualtat, simplifiquem el membre més complicat i mirem si obtenim l'altre. Si no hi coincideix, busquem un valor de $x$ que ho demostri.

    **a)** El numerador $x+2$ i el denominador $x^2+4$ no tenen cap factor comú ($x^2+4$ no es pot factoritzar), de manera que el membre esquerre no es pot simplificar. Provem amb un valor, per exemple $x=1$:

    $$
    \begin{aligned}
    \text{membre esquerre: } & \frac{1+2}{1^2+4}=\frac{3}{5} \\
    \text{membre dret: } & \frac{1}{1+2}=\frac{1}{3}
    \end{aligned}
    $$

    Com que $\dfrac35\neq\dfrac13$, les dues expressions no són iguals.

    **Resposta:** no és certa; per a $x=1$ els membres valen $\dfrac35$ i $\dfrac13$

    **b)** Simplifiquem el membre esquerre. Factoritzem el denominador com a diferència de quadrats, $x^2-9=(x-3)(x+3)$, i cancel·lem el factor $(x-3)$ comú amb el numerador:

    $$
    \begin{aligned}
    \frac{x-3}{x^2-9} &= \frac{x-3}{(x-3)(x+3)} \\
    &= \frac{\cancel{(x-3)}}{\cancel{(x-3)}(x+3)} \\
    &= \frac{1}{x+3}
    \end{aligned}
    $$

    El resultat coincideix amb el membre dret.

    **Resposta:** és certa

    **c)** Simplifiquem el membre esquerre. Traiem factor comú $x$ al numerador, $x^2+2x=x(x+2)$, i cancel·lem el factor $x$:

    $$
    \begin{aligned}
    \frac{x^2+2x}{2x} &= \frac{x(x+2)}{2x} \\
    &= \frac{\cancel{x}(x+2)}{2\cancel{x}} \\
    &= \frac{x+2}{2}
    \end{aligned}
    $$

    Queda $\dfrac{x+2}{2}$, que no és $x+2$: ens falta multiplicar per $2$. Ho comprovem amb $x=1$:

    $$\frac{1+2}{2}=\frac{3}{2} \qquad \text{però} \qquad 1+2=3$$

    **Resposta:** no és certa; per a $x=1$ els membres valen $\dfrac32$ i $3$

    **d)** Simplifiquem el membre esquerre. Traiem factor comú $x$ al numerador, $x^2-2x=x(x-2)$, i cancel·lem el factor $(x-2)$:

    $$
    \begin{aligned}
    \frac{x^2-2x}{x-2} &= \frac{x(x-2)}{x-2} \\
    &= \frac{x\cancel{(x-2)}}{\cancel{(x-2)}} \\
    &= x
    \end{aligned}
    $$

    El resultat coincideix amb el membre dret.

    **Resposta:** és certa

### Exercici 24

Opera i simplifica:

- **a)** $\dfrac{1}{x-1}+\dfrac{2}{x+1}$
- **b)** $\dfrac{x}{x^2-4}-\dfrac{1}{x+2}$
- **c)** $\dfrac{3}{x}+\dfrac{x}{x-3}$

??? note "Mostra la solució"

    Per sumar o restar fraccions algebraiques, primer les posem totes amb el mateix denominador (el denominador comú, que és el MCM dels denominadors); després en sumem o restem els numeradors, i finalment simplifiquem si és possible.

    **a)** Els denominadors són $x-1$ i $x+1$, que no tenen cap factor comú; per tant, el denominador comú és el producte, $(x-1)(x+1)$.

    A cada fracció li multipliquem numerador i denominador pel factor que li falta: a la primera, per $(x+1)$; a la segona, per $(x-1)$.

    $$
    \begin{aligned}
    \frac{1}{x-1}+\frac{2}{x+1} &= \frac{1\cdot(x+1)}{(x-1)(x+1)}+\frac{2\cdot(x-1)}{(x+1)(x-1)} \\
    &= \frac{x+1}{(x-1)(x+1)}+\frac{2x-2}{(x-1)(x+1)}
    \end{aligned}
    $$

    Ara que tenen el mateix denominador, sumem els numeradors i reduïm termes semblants:

    $$
    \begin{aligned}
    \frac{x+1}{(x-1)(x+1)}+\frac{2x-2}{(x-1)(x+1)} &= \frac{x+1+2x-2}{(x-1)(x+1)} \\
    &= \frac{3x-1}{(x-1)(x+1)}
    \end{aligned}
    $$

    Finalment, mirem si es pot simplificar. El numerador $3x-1$ no es pot factoritzar i no conté els factors $(x-1)$ ni $(x+1)$; per tant, la fracció ja és irreductible.

    **Resposta:** $\dfrac{3x-1}{(x-1)(x+1)}=\dfrac{3x-1}{x^2-1}$

    **b)** Factoritzem el primer denominador com a diferència de quadrats, $x^2-4=(x-2)(x+2)$. El segon denominador, $x+2$, ja és un dels seus factors; per tant, el denominador comú és $(x-2)(x+2)$.

    La primera fracció ja el té. A la segona li multipliquem numerador i denominador per $(x-2)$:

    $$
    \begin{aligned}
    \frac{x}{x^2-4}-\frac{1}{x+2} &= \frac{x}{(x-2)(x+2)}-\frac{1}{x+2} \\
    &= \frac{x}{(x-2)(x+2)}-\frac{1\cdot(x-2)}{(x+2)(x-2)} \\
    &= \frac{x}{(x-2)(x+2)}-\frac{x-2}{(x-2)(x+2)}
    \end{aligned}
    $$

    Restem els numeradors (posem l'últim entre parèntesis perquè el signe menys afecta tot el numerador) i reduïm:

    $$
    \begin{aligned}
    \frac{x}{(x-2)(x+2)}-\frac{x-2}{(x-2)(x+2)} &= \frac{x-(x-2)}{(x-2)(x+2)} \\
    &= \frac{x-x+2}{(x-2)(x+2)} \\
    &= \frac{2}{(x-2)(x+2)}
    \end{aligned}
    $$

    El numerador és una constant, així que no es pot simplificar més.

    **Resposta:** $\dfrac{2}{(x-2)(x+2)}=\dfrac{2}{x^2-4}$

    **c)** Els denominadors són $x$ i $x-3$, sense factors comuns; el denominador comú és $x(x-3)$.

    A la primera fracció li multipliquem numerador i denominador per $(x-3)$ i a la segona, per $x$:

    $$
    \begin{aligned}
    \frac{3}{x}+\frac{x}{x-3} &= \frac{3(x-3)}{x(x-3)}+\frac{x\cdot x}{(x-3)\,x} \\
    &= \frac{3x-9}{x(x-3)}+\frac{x^2}{x(x-3)}
    \end{aligned}
    $$

    Sumem els numeradors i els ordenem:

    $$
    \begin{aligned}
    \frac{3x-9}{x(x-3)}+\frac{x^2}{x(x-3)} &= \frac{3x-9+x^2}{x(x-3)} \\
    &= \frac{x^2+3x-9}{x(x-3)}
    \end{aligned}
    $$

    El numerador $x^2+3x-9$ no té arrels enteres (el seu discriminant és $9+36=45$, que no és un quadrat perfecte), així que no conté els factors $x$ ni $(x-3)$ i no es pot simplificar.

    **Resposta:** $\dfrac{x^2+3x-9}{x(x-3)}$

### Exercici 25

Opera i simplifica:

- **a)** $\dfrac{x+3}{x-1}\cdot\dfrac{x^2-1}{(x+3)^2}$
- **b)** $\dfrac{x^2-4}{x+1}:\dfrac{x-2}{x+1}$

??? note "Mostra la solució"

    Per multiplicar fraccions multipliquem numeradors i denominadors. Per dividir, multipliquem la primera fracció per la inversa de la segona. En tots dos casos és convenient deixar els polinomis factoritzats per poder cancel·lar.

    **a)** Factoritzem $x^2-1=(x-1)(x+1)$ i escrivim $(x+3)^2=(x+3)(x+3)$. Multipliquem numeradors i denominadors, sense desenvolupar:

    $$
    \begin{aligned}
    \frac{x+3}{x-1}\cdot\frac{x^2-1}{(x+3)^2} &= \frac{(x+3)\,(x-1)(x+1)}{(x-1)\,(x+3)(x+3)}
    \end{aligned}
    $$

    Cancel·lem els factors que apareixen al numerador i al denominador, $(x+3)$ i $(x-1)$:

    $$
    \begin{aligned}
    \frac{(x+3)\,(x-1)(x+1)}{(x-1)\,(x+3)(x+3)} &= \frac{\cancel{(x+3)}\,\cancel{(x-1)}(x+1)}{\cancel{(x-1)}\,\cancel{(x+3)}(x+3)} \\
    &= \frac{x+1}{x+3}
    \end{aligned}
    $$

    **Resposta:** $\dfrac{x+1}{x+3}$

    **b)** Convertim la divisió en un producte: multipliquem la primera fracció per la inversa de la segona.

    $$\frac{x^2-4}{x+1}:\frac{x-2}{x+1}=\frac{x^2-4}{x+1}\cdot\frac{x+1}{x-2}$$

    Factoritzem $x^2-4=(x-2)(x+2)$ i multipliquem:

    $$
    \begin{aligned}
    \frac{x^2-4}{x+1}\cdot\frac{x+1}{x-2} &= \frac{(x-2)(x+2)\,(x+1)}{(x+1)\,(x-2)}
    \end{aligned}
    $$

    Cancel·lem els factors $(x-2)$ i $(x+1)$, que apareixen a dalt i a baix:

    $$
    \begin{aligned}
    \frac{(x-2)(x+2)\,(x+1)}{(x+1)\,(x-2)} &= \frac{\cancel{(x-2)}(x+2)\,\cancel{(x+1)}}{\cancel{(x+1)}\,\cancel{(x-2)}} \\
    &= x+2
    \end{aligned}
    $$

    **Resposta:** $x+2$

### Exercici 26

Opera i simplifica: $\dfrac{1}{x}+\dfrac{1}{x+1}-\dfrac{2}{x^2+x}$.

??? note "Mostra la solució"

    Comencem factoritzant els denominadors per trobar el denominador comú. L'últim és $x^2+x=x(x+1)$, que ja conté els altres dos ($x$ i $x+1$). Per tant, el denominador comú és $x(x+1)$.

    Posem cada fracció amb aquest denominador: a la primera li multipliquem numerador i denominador per $(x+1)$, a la segona per $x$, i la tercera ja el té.

    $$
    \begin{aligned}
    \frac{1}{x}+\frac{1}{x+1}-\frac{2}{x^2+x} &= \frac{1\cdot(x+1)}{x(x+1)}+\frac{1\cdot x}{(x+1)\,x}-\frac{2}{x(x+1)} \\
    &= \frac{x+1}{x(x+1)}+\frac{x}{x(x+1)}-\frac{2}{x(x+1)}
    \end{aligned}
    $$

    Operem els numeradors i reduïm termes semblants:

    $$
    \begin{aligned}
    \frac{x+1}{x(x+1)}+\frac{x}{x(x+1)}-\frac{2}{x(x+1)} &= \frac{x+1+x-2}{x(x+1)} \\
    &= \frac{2x-1}{x(x+1)}
    \end{aligned}
    $$

    El numerador $2x-1$ s'anul·la per a $x=\tfrac12$, que no és ni $0$ ni $-1$; per tant, no conté els factors $x$ ni $(x+1)$ i no es pot simplificar més.

    **Resposta:** $\dfrac{2x-1}{x(x+1)}$

### Exercici 27

Demostra les identitats següents:

- **a)** $\dfrac{1}{x-1}-\dfrac{1}{x+1}=\dfrac{2}{x^2-1}$
- **b)** $\dfrac{x}{x+1}+\dfrac{1}{x+1}=1$

??? note "Mostra la solució"

    Per demostrar una identitat, operem un dels dos membres (normalment el més complicat) fins a obtenir l'altre.

    **a)** Operem el membre esquerre. El denominador comú és $(x-1)(x+1)=x^2-1$. A cada fracció li multipliquem numerador i denominador pel factor que li falta:

    $$
    \begin{aligned}
    \frac{1}{x-1}-\frac{1}{x+1} &= \frac{1\cdot(x+1)}{(x-1)(x+1)}-\frac{1\cdot(x-1)}{(x+1)(x-1)} \\
    &= \frac{x+1}{(x-1)(x+1)}-\frac{x-1}{(x-1)(x+1)}
    \end{aligned}
    $$

    Restem els numeradors, amb parèntesis perquè el signe menys afecta tot el numerador, i reduïm:

    $$
    \begin{aligned}
    \frac{x+1}{(x-1)(x+1)}-\frac{x-1}{(x-1)(x+1)} &= \frac{x+1-(x-1)}{(x-1)(x+1)} \\
    &= \frac{x+1-x+1}{(x-1)(x+1)} \\
    &= \frac{2}{(x-1)(x+1)} = \frac{2}{x^2-1}
    \end{aligned}
    $$

    Hem obtingut exactament el membre dret.

    **Resposta:** la identitat és certa

    **b)** Operem el membre esquerre. Les dues fraccions ja tenen el mateix denominador; per tant, sumem els numeradors i deixem el denominador igual:

    $$
    \begin{aligned}
    \frac{x}{x+1}+\frac{1}{x+1} &= \frac{x+1}{x+1} \\
    &= \frac{\cancel{(x+1)}}{\cancel{(x+1)}} \\
    &= 1
    \end{aligned}
    $$

    Hem obtingut exactament el membre dret.

    **Resposta:** la identitat és certa
