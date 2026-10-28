# Equacions exponencials

Exercicis 21–24. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 21

Resol expressant els dos membres com a potències de la mateixa base:

| | |
|:--|:--|
| **a)** $3^{x^2-1}=27$ | **b)** $5^{x^2-5x+6}=1$ |
| **c)** $4^{x-1}=8^{x}$ | **d)** $\sqrt{2^{x+1}}=\dfrac{1}{4}$ |
| **e)** $2^{x}\cdot 4^{x+1}=0{,}5$ |  |

??? note "Mostra la solució"

    En tots els apartats escrivim els dos membres com a potències de la mateixa base i després apliquem la igualació de potències: si $a>0$ i $a\neq 1$, $a^n=a^m \Leftrightarrow n=m$.

    **a)** Escrivim $27=3^3$ i igualem els exponents:

    $$
    \begin{aligned}
    3^{x^2-1}&=3^3\\
    x^2-1&=3 \;\Rightarrow\; x^2=4 \;\Rightarrow\; x=\pm 2.
    \end{aligned}
    $$

    **Resposta:** $x=-2$, $x=2$

    **b)** Qualsevol nombre no nul elevat a zero val $1$ ($a^0=1$), per tant $1=5^0$:

    $$
    \begin{aligned}
    5^{x^2-5x+6}&=5^0\\
    x^2-5x+6&=0.
    \end{aligned}
    $$

    Resolem l'equació de segon grau:

    $$
    x=\frac{5\pm\sqrt{25-24}}{2}=\frac{5\pm 1}{2} \;\Rightarrow\; x=3,\quad x=2.
    $$

    **Resposta:** $x=2$, $x=3$

    **c)** Les bases $4$ i $8$ són potències de $2$: $4=2^2$ i $8=2^3$. Amb la propietat $(a^m)^n=a^{mn}$:

    $$
    \begin{aligned}
    (2^2)^{x-1}&=(2^3)^{x}\\
    2^{2x-2}&=2^{3x}\\
    2x-2&=3x \;\Rightarrow\; x=-2.
    \end{aligned}
    $$

    **Resposta:** $x=-2$

    **d)** Expressem l'arrel com a potència, $\sqrt{a}=a^{1/2}$, i apliquem $(a^m)^n=a^{mn}$:

    $$
    \sqrt{2^{x+1}}=\left(2^{x+1}\right)^{1/2}=2^{\frac{x+1}{2}}.
    $$

    D'altra banda, $\dfrac{1}{4}=\dfrac{1}{2^2}=2^{-2}$. Igualem els exponents:

    $$
    \begin{aligned}
    2^{\frac{x+1}{2}}&=2^{-2}\\
    \frac{x+1}{2}&=-2 \;\Rightarrow\; x+1=-4 \;\Rightarrow\; x=-5.
    \end{aligned}
    $$

    **Resposta:** $x=-5$

    **e)** Escrivim $4^{x+1}=(2^2)^{x+1}=2^{2x+2}$ i $0{,}5=\dfrac{1}{2}=2^{-1}$. El producte de potències de la mateixa base suma els exponents, $a^m\cdot a^n=a^{m+n}$:

    $$
    \begin{aligned}
    2^{x}\cdot 2^{2x+2}&=2^{-1}\\
    2^{3x+2}&=2^{-1}\\
    3x+2&=-1 \;\Rightarrow\; 3x=-3 \;\Rightarrow\; x=-1.
    \end{aligned}
    $$

    **Resposta:** $x=-1$

### Exercici 22

Resol traient factor comú:

- **a)** $2^{x+1}+2^{x}+2^{x-1}=28$
- **b)** $3^{x+2}-3^{x}=72$

??? note "Mostra la solució"

    Descomponem cada potència amb la propietat $a^{x+k}=a^x\cdot a^k$ (i $a^{x-k}=\dfrac{a^x}{a^k}$), traiem factor comú la potència $a^x$, l'aïllem i acabem igualant potències.

    **a)** Descomponem: $2^{x+1}=2^x\cdot 2$ i $2^{x-1}=2^x\cdot 2^{-1}=\dfrac{2^x}{2}$. Traiem factor comú $2^x$:

    $$
    \begin{aligned}
    2\cdot 2^x+2^x+\frac{2^x}{2}&=28\\
    2^x\left(2+1+\frac{1}{2}\right)&=28\\
    2^x\cdot\frac{7}{2}&=28 \;\Rightarrow\; 2^x=\frac{28\cdot 2}{7}=8.
    \end{aligned}
    $$

    Com que $8=2^3$, igualem els exponents: $2^x=2^3 \Rightarrow x=3$.

    **Resposta:** $x=3$

    **b)** Descomponem $3^{x+2}=3^x\cdot 3^2=9\cdot 3^x$ i traiem factor comú $3^x$:

    $$
    \begin{aligned}
    9\cdot 3^x-3^x&=72\\
    3^x(9-1)&=72\\
    8\cdot 3^x&=72 \;\Rightarrow\; 3^x=9=3^2 \;\Rightarrow\; x=2.
    \end{aligned}
    $$

    **Resposta:** $x=2$

### Exercici 23

Resol fent un canvi de variable:

- **a)** $4^{x}-5\cdot 2^{x}+4=0$
- **b)** $9^{x}-2\cdot 3^{x}-3=0$
- **c)** $2^{x}+2^{1-x}=3$
- **d)** $a^{2x}-(a+1)\,a^{x}+a=0$, amb $a>0$ i $a\neq1$

??? note "Mostra la solució"

    En tots els apartats fem un canvi de variable que converteix l'equació exponencial en una equació de segon grau. Recordem que una potència de base positiva sempre és positiva ($a^x>0$ per a tot $x$), per tant només ens serveixen els valors de $t$ positius.

    **a)** Fem el canvi $t=2^x$. Per la propietat $(a^m)^n=a^{mn}$, $4^x=(2^2)^x=(2^x)^2=t^2$. L'equació queda:

    $$
    t^2-5t+4=0 \;\Rightarrow\; t=\frac{5\pm\sqrt{25-16}}{2}=\frac{5\pm 3}{2} \;\Rightarrow\; t=4,\quad t=1.
    $$

    Tots dos valors són positius. Desfem el canvi:

    $$
    \begin{aligned}
    2^x&=4=2^2 \;\Rightarrow\; x=2,\\
    2^x&=1=2^0 \;\Rightarrow\; x=0.
    \end{aligned}
    $$

    **Resposta:** $x=0$, $x=2$

    **b)** Fem el canvi $t=3^x$. Com que $9^x=(3^2)^x=(3^x)^2=t^2$, l'equació queda:

    $$
    t^2-2t-3=0 \;\Rightarrow\; t=\frac{2\pm\sqrt{4+12}}{2}=\frac{2\pm 4}{2} \;\Rightarrow\; t=3,\quad t=-1.
    $$

    Desfem el canvi:

    - $3^x=3=3^1 \Rightarrow x=1$.
    - $3^x=-1$ no té solució, perquè una potència de base positiva sempre és positiva. Descartem $t=-1$.

    **Resposta:** $x=1$

    **c)** Escrivim $2^{1-x}=2^1\cdot 2^{-x}=\dfrac{2}{2^x}$ (propietats $a^{m+n}=a^m\cdot a^n$ i $a^{-n}=\dfrac{1}{a^n}$). Amb el canvi $t=2^x$ queda $2^{1-x}=\dfrac{2}{t}$:

    $$
    t+\frac{2}{t}=3.
    $$

    Multipliquem per $t$ (que no és zero perquè $t=2^x>0$):

    $$
    t^2+2=3t \;\Rightarrow\; t^2-3t+2=0 \;\Rightarrow\; t=\frac{3\pm\sqrt{9-8}}{2}=\frac{3\pm 1}{2} \;\Rightarrow\; t=2,\quad t=1.
    $$

    Tots dos són positius. Desfem el canvi:

    $$
    \begin{aligned}
    2^x&=2=2^1 \;\Rightarrow\; x=1,\\
    2^x&=1=2^0 \;\Rightarrow\; x=0.
    \end{aligned}
    $$

    **Resposta:** $x=0$, $x=1$

    **d)** Fem el canvi $t=a^x$. Per la propietat $(a^m)^n=a^{mn}$, tenim $a^{2x}=(a^x)^2=t^2$, i l'equació queda

    $$
    t^2-(a+1)\,t+a=0 .
    $$

    Busquem dos nombres que sumin $a+1$ i que multiplicats donin $a$: són $1$ i $a$. Per tant

    $$
    t^2-(a+1)\,t+a=(t-1)(t-a)=0\;\Rightarrow\; t=1,\quad t=a .
    $$

    (Amb la fórmula surt el mateix: $\Delta=(a+1)^2-4a=(a-1)^2$ i $t=\dfrac{(a+1)\pm(a-1)}{2}$.) Tots dos valors són positius, perquè $a>0$. Desfem el canvi:

    $$
    \begin{aligned}
    a^x&=1=a^0\;\Rightarrow\; x=0,\\
    a^x&=a=a^1\;\Rightarrow\; x=1.
    \end{aligned}
    $$

    Les condicions de l'enunciat són necessàries:

    - $a>0$: les funcions exponencials només es defineixen amb base positiva; així $a^x$ té sentit per a qualsevol $x$ i sempre és positiva (per això els dos valors de $t$ serveixen).
    - $a\neq1$: per poder igualar exponents ($a^x=a^0\Rightarrow x=0$) cal que potències diferents donin resultats diferents, i això falla si $a=1$, perquè $1^x=1$ per a tot $x$. De fet, amb $a=1$ l'equació seria $1-2+1=0$, que es compleix per a qualsevol $x$.

    **Resposta:** $x=0$, $\;x=1$ (per a qualsevol valor de $a$ amb $a>0$, $a\neq1$)

### Exercici 24

Resol aplicant logaritmes. Dona la solució exacta i una aproximació amb quatre decimals:

- **a)** $3^{x}=20$
- **b)** $2^{x-1}=5$
- **c)** $5e^{2x}=30$
- **d)** *(més difícil)* $2^{x}=3^{x-1}$

??? note "Mostra la solució"

    Ara el segon membre no es pot escriure com a potència de la mateixa base, i per això fem servir la definició de logaritme, $a^C=B \Leftrightarrow C=\log_a B$, o bé prenem logaritmes als dos membres. Per calcular el valor aproximat fem servir el canvi de base, $\log_a B=\dfrac{\log B}{\log a}$.

    **a)** Per la definició de logaritme:

    $$
    3^x=20 \;\Rightarrow\; x=\log_3 20.
    $$

    Amb el canvi de base:

    $$
    x=\log_3 20=\frac{\log 20}{\log 3}\approx 2{,}7268.
    $$

    Comprovació: $3^{2{,}7268}\approx 20$.

    **Resposta:** $x=\log_3 20=\dfrac{\log 20}{\log 3}\approx 2{,}7268$

    **b)** Per la definició de logaritme, l'exponent $x-1$ és el logaritme en base $2$ de $5$:

    $$
    \begin{aligned}
    2^{x-1}=5 \;&\Rightarrow\; x-1=\log_2 5\\
    &\Rightarrow\; x=1+\log_2 5=1+\frac{\log 5}{\log 2}\approx 1+2{,}3219=3{,}3219.
    \end{aligned}
    $$

    Comprovació: $2^{3{,}3219-1}=2^{2{,}3219}\approx 5$.

    **Resposta:** $x=1+\log_2 5\approx 3{,}3219$

    **c)** Primer aïllem la potència dividint per $5$, i després apliquem la definició de logaritme neperià ($e^C=B \Leftrightarrow C=\ln B$):

    $$
    \begin{aligned}
    5e^{2x}=30 \;&\Rightarrow\; e^{2x}=6\\
    &\Rightarrow\; 2x=\ln 6\\
    &\Rightarrow\; x=\frac{\ln 6}{2}\approx\frac{1{,}7918}{2}\approx 0{,}8959.
    \end{aligned}
    $$

    Comprovació: $5e^{2\cdot 0{,}8959}=5e^{1{,}7918}\approx 5\cdot 6=30$.

    **Resposta:** $x=\dfrac{\ln 6}{2}\approx 0{,}8959$

    **d)** Les bases $2$ i $3$ no es poden igualar, així que prenem logaritmes decimals als dos membres i fem servir la propietat $\log a^n=n\log a$:

    $$
    \begin{aligned}
    \log 2^x&=\log 3^{x-1}\\
    x\log 2&=(x-1)\log 3\\
    x\log 2&=x\log 3-\log 3.
    \end{aligned}
    $$

    Passem els termes amb $x$ a un membre, traiem factor comú $x$ i l'aïllem:

    $$
    \begin{aligned}
    \log 3&=x\log 3-x\log 2\\
    \log 3&=x(\log 3-\log 2)\\
    x&=\frac{\log 3}{\log 3-\log 2}\approx 2{,}7095.
    \end{aligned}
    $$

    Comprovació: $2^{2{,}7095}\approx 6{,}541$ i $3^{2{,}7095-1}=3^{1{,}7095}\approx 6{,}541$.

    **Resposta:** $x=\dfrac{\log 3}{\log 3-\log 2}\approx 2{,}7095$
