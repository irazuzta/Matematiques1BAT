# Equacions racionals

Exercicis 14–16. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 14

Resol i comprova les solucions:

- **a)** $\dfrac{2}{x}+\dfrac{3}{x+1}=2$
- **b)** $\dfrac{x}{x-2}=\dfrac{2}{x-2}+3$
- **c)** $\dfrac{x}{x-3}+\dfrac{6}{x+3}=\dfrac{18}{x^2-9}$
- **d)** $\dfrac{2x}{x+1}+\dfrac{1}{x}=3$

??? note "Mostra la solució"

    **a)** Els denominadors són $x$ i $x+1$, que ja estan factoritzats i no tenen cap factor comú. El denominador comú és

    $$
    \text{MCM}[x,\,x+1]=x(x+1).
    $$

    Multipliquem els dos membres per $x(x+1)$ i simplifiquem cada terme:

    $$
    \begin{aligned}
    \frac{2}{x}\cdot x(x+1)+\frac{3}{x+1}\cdot x(x+1)&=2\cdot x(x+1)\\
    2(x+1)+3x&=2x(x+1)\\
    2x+2+3x&=2x^2+2x\\
    0&=2x^2-3x-2
    \end{aligned}
    $$

    Resolem l'equació de segon grau $2x^2-3x-2=0$:

    $$
    x=\frac{3\pm\sqrt{(-3)^2-4\cdot2\cdot(-2)}}{2\cdot2}=\frac{3\pm\sqrt{25}}{4}=\frac{3\pm5}{4}
    \Rightarrow
    x_1=\frac{8}{4}=2,\quad x_2=\frac{-2}{4}=-\frac12 .
    $$

    Comprovem si alguna de les solucions candidates anul·la un denominador de l'equació original ($x$ o $x+1$):

    - $x=2$: $\;x=2\neq0$ i $x+1=3\neq0$. És solució.
    - $x=-\dfrac12$: $\;x=-\dfrac12\neq0$ i $x+1=\dfrac12\neq0$. És solució.

    **Resposta:** $x=2$, $\;x=-\dfrac12$

    **b)** L'únic denominador és $x-2$, així que el denominador comú és $x-2$. Multipliquem els dos membres per $x-2$ (el $3$ també s'ha de multiplicar):

    $$
    \begin{aligned}
    \frac{x}{x-2}\cdot(x-2)&=\frac{2}{x-2}\cdot(x-2)+3\cdot(x-2)\\
    x&=2+3x-6\\
    x-3x&=-4\\
    -2x&=-4\\
    x&=2
    \end{aligned}
    $$

    Comprovem la solució candidata: per a $x=2$ el denominador val $x-2=2-2=0$. Com que anul·la un denominador, $x=2$ no és solució.

    **Resposta:** l'equació no té solució.

    **c)** Factoritzem els denominadors. El tercer és una diferència de quadrats:

    $$
    x^2-9=(x-3)(x+3).
    $$

    Els denominadors són $x-3$, $x+3$ i $(x-3)(x+3)$, de manera que

    $$
    \text{MCM}[x-3,\,x+3,\,x^2-9]=(x-3)(x+3).
    $$

    Multipliquem els dos membres per $(x-3)(x+3)$ i simplifiquem cada terme:

    $$
    \begin{aligned}
    \frac{x}{x-3}\cdot(x-3)(x+3)+\frac{6}{x+3}\cdot(x-3)(x+3)&=\frac{18}{(x-3)(x+3)}\cdot(x-3)(x+3)\\
    x(x+3)+6(x-3)&=18\\
    x^2+3x+6x-18&=18\\
    x^2+9x-36&=0
    \end{aligned}
    $$

    Resolem l'equació de segon grau:

    $$
    x=\frac{-9\pm\sqrt{9^2-4\cdot1\cdot(-36)}}{2}=\frac{-9\pm\sqrt{225}}{2}=\frac{-9\pm15}{2}
    \Rightarrow
    x_1=3,\quad x_2=-12 .
    $$

    Comprovem les solucions candidates als denominadors de l'equació original ($x-3$, $x+3$ i $x^2-9$):

    - $x=3$: $\;x-3=0$. Com que anul·la un denominador, $x=3$ no és solució.
    - $x=-12$: $\;x-3=-15\neq0$, $\;x+3=-9\neq0$ i $\;x^2-9=135\neq0$. És solució.

    **Resposta:** $x=-12$

    **d)** Els denominadors són $x+1$ i $x$, sense factors comuns. El denominador comú és

    $$
    \text{MCM}[x+1,\,x]=x(x+1).
    $$

    Multipliquem els dos membres per $x(x+1)$ i simplifiquem cada terme:

    $$
    \begin{aligned}
    \frac{2x}{x+1}\cdot x(x+1)+\frac{1}{x}\cdot x(x+1)&=3\cdot x(x+1)\\
    2x\cdot x+(x+1)&=3x(x+1)\\
    2x^2+x+1&=3x^2+3x\\
    0&=x^2+2x-1
    \end{aligned}
    $$

    Resolem l'equació de segon grau:

    $$
    x=\frac{-2\pm\sqrt{2^2-4\cdot1\cdot(-1)}}{2}=\frac{-2\pm\sqrt8}{2}=\frac{-2\pm2\sqrt2}{2}=-1\pm\sqrt2 .
    $$

    Comprovem les solucions candidates als denominadors ($x$ i $x+1$):

    - $x=-1+\sqrt2$: $\;x=-1+\sqrt2\neq0$ (perquè $\sqrt2\neq1$) i $x+1=\sqrt2\neq0$. És solució.
    - $x=-1-\sqrt2$: $\;x=-1-\sqrt2\neq0$ i $x+1=-\sqrt2\neq0$. És solució.

    **Resposta:** $x=-1+\sqrt2$, $\;x=-1-\sqrt2$

### Exercici 15

Resol:

- **a)** $\dfrac{1}{x-1}-\dfrac{1}{x+1}=\dfrac{1}{12}$
- **b)** $1+\dfrac{1}{x}=\dfrac{6}{x^2}$

??? note "Mostra la solució"

    **a)** Els denominadors són $x-1$, $x+1$ i $12$. Cap té factors en comú amb els altres, així que el denominador comú és

    $$
    \text{MCM}[x-1,\,x+1,\,12]=12(x-1)(x+1).
    $$

    Multipliquem els dos membres per $12(x-1)(x+1)$ i simplifiquem cada terme:

    $$
    \begin{aligned}
    \frac{1}{x-1}\cdot12(x-1)(x+1)-\frac{1}{x+1}\cdot12(x-1)(x+1)&=\frac{1}{12}\cdot12(x-1)(x+1)\\
    12(x+1)-12(x-1)&=(x-1)(x+1)\\
    12x+12-12x+12&=x^2-1\\
    24&=x^2-1\\
    x^2&=25\\
    x&=\pm5
    \end{aligned}
    $$

    Comprovem les solucions candidates als denominadors ($x-1$ i $x+1$):

    - $x=5$: $\;x-1=4\neq0$ i $x+1=6\neq0$. És solució.
    - $x=-5$: $\;x-1=-6\neq0$ i $x+1=-4\neq0$. És solució.

    **Resposta:** $x=5$, $\;x=-5$

    **b)** Els denominadors són $x$ i $x^2$. Com que $x^2=x\cdot x$, el factor $x$ hi apareix amb exponent màxim $2$:

    $$
    \text{MCM}[x,\,x^2]=x^2.
    $$

    Multipliquem els dos membres per $x^2$ i simplifiquem cada terme:

    $$
    \begin{aligned}
    1\cdot x^2+\frac{1}{x}\cdot x^2&=\frac{6}{x^2}\cdot x^2\\
    x^2+x&=6\\
    x^2+x-6&=0
    \end{aligned}
    $$

    Resolem l'equació de segon grau:

    $$
    x=\frac{-1\pm\sqrt{1^2-4\cdot1\cdot(-6)}}{2}=\frac{-1\pm\sqrt{25}}{2}=\frac{-1\pm5}{2}
    \Rightarrow
    x_1=2,\quad x_2=-3 .
    $$

    Comprovem les solucions candidates als denominadors ($x$ i $x^2$): cap de les dues és $0$, de manera que no anul·len cap denominador ($x^2=4$ i $x^2=9$). Totes dues són solució.

    **Resposta:** $x=2$, $\;x=-3$

### Exercici 16

Troba el valor de $a$ perquè $x=3$ sigui solució de l'equació $\dfrac{a}{x-1}+\dfrac{1}{x+1}=1$ i, per a aquest valor, resol l'equació.

??? note "Mostra la solució"

    Si $x=3$ és solució, en substituir $x=3$ l'equació s'ha de complir:

    $$
    \begin{aligned}
    \frac{a}{3-1}+\frac{1}{3+1}&=1\\
    \frac{a}{2}+\frac14&=1\\
    \frac{a}{2}&=\frac34\\
    a&=\frac32
    \end{aligned}
    $$

    Amb $a=\dfrac32$ el primer terme és $\dfrac{3/2}{x-1}=\dfrac{3}{2(x-1)}$, i l'equació queda

    $$
    \frac{3}{2(x-1)}+\frac{1}{x+1}=1 .
    $$

    Els denominadors són $2(x-1)$ i $x+1$, sense factors comuns, de manera que

    $$
    \text{MCM}[2(x-1),\,x+1]=2(x-1)(x+1).
    $$

    Multipliquem els dos membres per $2(x-1)(x+1)$ i simplifiquem cada terme:

    $$
    \begin{aligned}
    \frac{3}{2(x-1)}\cdot2(x-1)(x+1)+\frac{1}{x+1}\cdot2(x-1)(x+1)&=1\cdot2(x-1)(x+1)\\
    3(x+1)+2(x-1)&=2(x^2-1)\\
    3x+3+2x-2&=2x^2-2\\
    0&=2x^2-5x-3
    \end{aligned}
    $$

    Resolem l'equació de segon grau:

    $$
    x=\frac{5\pm\sqrt{25+24}}{4}=\frac{5\pm7}{4}\;\Rightarrow\; x_1=\frac{12}{4}=3,\quad x_2=\frac{-2}{4}=-\frac12 .
    $$

    Comprovem si alguna de les solucions candidates anul·la un denominador de l'equació original ($x-1$ o $x+1$):

    - $x=3$: $\;x-1=2\neq0$ i $x+1=4\neq0$. És solució (ja ho sabíem).
    - $x=-\dfrac12$: $\;x-1=-\dfrac32\neq0$ i $x+1=\dfrac12\neq0$. És solució.

    **Resposta:** $a=\dfrac32$; les solucions són $x=3$ i $x=-\dfrac12$
