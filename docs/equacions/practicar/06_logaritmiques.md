# Equacions logarítmiques

Exercicis 25–28. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 25

Resol i comprova les solucions:

| | |
|:--|:--|
| **a)** $\log(x^2-15)=1$ | **b)** $\log_3 x+\log_3(x-8)=2$ |
| **c)** $2\log x=\log(5x-6)$ | **d)** $\log x+\log(x+3)=1$ |

??? note "Mostra la solució"

    **a)** Escrivim $1$ com a logaritme decimal, $1=\log 10$, per poder igualar arguments:

    $$
    \begin{aligned}
    \log(x^2-15)=\log 10 &\Rightarrow x^2-15=10\\
    &\Rightarrow x^2=25\\
    &\Rightarrow x=\pm 5
    \end{aligned}
    $$

    Comprovació: l'argument d'un logaritme ha de ser positiu.

    - $x=5$: $x^2-15=25-15=10>0$. Vàlida.
    - $x=-5$: $x^2-15=(-5)^2-15=10>0$. També és vàlida.

    Fixem-nos que $x=-5$ **sí** és solució: el que ha de ser positiu és l'argument $x^2-15$, no la $x$. Com que $x$ apareix elevada al quadrat, el signe de $x$ no afecta.

    **Resposta:** $x=5$ i $x=-5$

    **b)** Apliquem la propietat del logaritme del producte, $\log_a M+\log_a N=\log_a(M\cdot N)$, i escrivim $2=\log_3 9$ (perquè $3^2=9$):

    $$
    \begin{aligned}
    \log_3\big(x(x-8)\big)=\log_3 9 &\Rightarrow x(x-8)=9\\
    &\Rightarrow x^2-8x-9=0\\
    &\Rightarrow x=\frac{8\pm\sqrt{64+36}}{2}=\frac{8\pm 10}{2}
    \end{aligned}
    $$

    Obtenim les candidates $x=9$ i $x=-1$.

    Comprovació: l'argument d'un logaritme ha de ser positiu.

    - $x=9$: $x=9>0$ i $x-8=1>0$. Vàlida.
    - $x=-1$: $\log_3 x$ seria $\log_3(-1)$, i l'argument és negatiu. No és vàlida.

    **Resposta:** $x=9$

    **c)** Apliquem la propietat del logaritme d'una potència, $n\log_a M=\log_a M^n$, per passar el $2$ a exponent, i igualem arguments:

    $$
    \begin{aligned}
    \log x^2=\log(5x-6) &\Rightarrow x^2=5x-6\\
    &\Rightarrow x^2-5x+6=0\\
    &\Rightarrow x=\frac{5\pm\sqrt{25-24}}{2}=\frac{5\pm 1}{2}
    \end{aligned}
    $$

    Obtenim les candidates $x=3$ i $x=2$.

    Comprovació: l'argument d'un logaritme ha de ser positiu.

    - $x=2$: $x=2>0$ i $5x-6=4>0$. Vàlida.
    - $x=3$: $x=3>0$ i $5x-6=9>0$. Vàlida.

    **Resposta:** $x=2$ i $x=3$

    **d)** Apliquem la propietat del logaritme del producte i escrivim $1=\log 10$:

    $$
    \begin{aligned}
    \log\big(x(x+3)\big)=\log 10 &\Rightarrow x(x+3)=10\\
    &\Rightarrow x^2+3x-10=0\\
    &\Rightarrow x=\frac{-3\pm\sqrt{9+40}}{2}=\frac{-3\pm 7}{2}
    \end{aligned}
    $$

    Obtenim les candidates $x=2$ i $x=-5$.

    Comprovació: l'argument d'un logaritme ha de ser positiu.

    - $x=2$: $x=2>0$ i $x+3=5>0$. Vàlida.
    - $x=-5$: $\log x$ seria $\log(-5)$, i també $x+3=-2<0$. No és vàlida.

    **Resposta:** $x=2$

### Exercici 26

Resol aplicant les propietats dels logaritmes:

- **a)** $2\log x-\log(x-2)=2\log 3$
- **b)** $\log(3x+1)-\log(2x-3)=1-\log 5$
- **c)** $\ln x+\ln(x-1)=\ln 6$
- **d)** $(\log x)^2-3\log x+2=0$
- **e)** *(més difícil)* $\log_2 x+\log_4 x=6$

??? note "Mostra la solució"

    **a)** Primer apliquem la propietat del logaritme d'una potència als dos costats ($2\log x=\log x^2$, $2\log 3=\log 3^2=\log 9$) i després la del quocient:

    $$
    \begin{aligned}
    \log x^2-\log(x-2)=\log 9 &\Rightarrow \log\frac{x^2}{x-2}=\log 9\\
    &\Rightarrow \frac{x^2}{x-2}=9\\
    &\Rightarrow x^2=9x-18\\
    &\Rightarrow x^2-9x+18=0\\
    &\Rightarrow x=\frac{9\pm\sqrt{81-72}}{2}=\frac{9\pm 3}{2}
    \end{aligned}
    $$

    Obtenim les candidates $x=6$ i $x=3$.

    Comprovació: l'argument d'un logaritme ha de ser positiu.

    - $x=3$: $x=3>0$ i $x-2=1>0$. Vàlida.
    - $x=6$: $x=6>0$ i $x-2=4>0$. Vàlida.

    **Resposta:** $x=3$ i $x=6$

    **b)** Escrivim $1=\log 10$ i apliquem la propietat del quocient als dos costats:

    $$
    \log\frac{3x+1}{2x-3}=\log 10-\log 5=\log\frac{10}{5}=\log 2
    $$

    Ara igualem arguments:

    $$
    \begin{aligned}
    \frac{3x+1}{2x-3}=2 &\Rightarrow 3x+1=2(2x-3)\\
    &\Rightarrow 3x+1=4x-6\\
    &\Rightarrow x=7
    \end{aligned}
    $$

    Comprovació: l'argument d'un logaritme ha de ser positiu. Per a $x=7$: $3x+1=22>0$ i $2x-3=11>0$. Vàlida.

    **Resposta:** $x=7$

    **c)** Els logaritmes neperians tenen les mateixes propietats. Apliquem la del producte i igualem arguments:

    $$
    \begin{aligned}
    \ln\big(x(x-1)\big)=\ln 6 &\Rightarrow x(x-1)=6\\
    &\Rightarrow x^2-x-6=0\\
    &\Rightarrow x=\frac{1\pm\sqrt{1+24}}{2}=\frac{1\pm 5}{2}
    \end{aligned}
    $$

    Obtenim les candidates $x=3$ i $x=-2$.

    Comprovació: l'argument d'un logaritme ha de ser positiu.

    - $x=3$: $x=3>0$ i $x-1=2>0$. Vàlida.
    - $x=-2$: $\ln x$ seria $\ln(-2)$, i també $x-1=-3<0$. No és vàlida.

    **Resposta:** $x=3$

    **d)** L'expressió $\log x$ es repeteix, així que fem el canvi de variable $t=\log x$. L'equació queda de segon grau:

    $$
    \begin{aligned}
    t^2-3t+2=0 &\Rightarrow t=\frac{3\pm\sqrt{9-8}}{2}=\frac{3\pm 1}{2}\\
    &\Rightarrow t=2 \text{ o } t=1
    \end{aligned}
    $$

    Aquí no hem de descartar cap valor de $t$: un logaritme pot prendre qualsevol valor real (positiu, negatiu o zero). Desfem el canvi aplicant la definició de logaritme:

    - $t=1$: $\log x=1 \Rightarrow x=10^1=10$.
    - $t=2$: $\log x=2 \Rightarrow x=10^2=100$.

    Comprovació: l'argument $x$ ha de ser positiu, i $10>0$, $100>0$. Totes dues són vàlides. Per exemple, per a $x=100$: $2^2-3\cdot 2+2=0$.

    **Resposta:** $x=10$ i $x=100$

    **e)** Els logaritmes tenen bases diferents. Apliquem la propietat del canvi de base per passar $\log_4 x$ a base $2$:

    $$
    \log_4 x=\frac{\log_2 x}{\log_2 4}=\frac{\log_2 x}{2}
    $$

    Substituïm a l'equació i agrupem:

    $$
    \begin{aligned}
    \log_2 x+\frac{\log_2 x}{2}=6 &\Rightarrow 2\log_2 x+\log_2 x=12\\
    &\Rightarrow 3\log_2 x=12\\
    &\Rightarrow \log_2 x=4
    \end{aligned}
    $$

    Per la definició de logaritme, $x=2^4=16$.

    Comprovació: l'argument $x=16$ és positiu. A més, $\log_2 16+\log_4 16=4+2=6$. Vàlida.

    **Resposta:** $x=16$

### Exercici 27

Troba $x$ aplicant la definició de logaritme:

| | |
|:--|:--|
| **a)** $\log_x 81=4$ | **b)** $\log_2(\log_3 x)=1$ |

??? note "Mostra la solució"

    **a)** Apliquem la definició de logaritme ($\log_a b=c \Leftrightarrow a^c=b$), amb la incògnita a la base:

    $$
    \log_x 81=4 \Rightarrow x^4=81 \Rightarrow x=\pm\sqrt[4]{81}=\pm 3
    $$

    Comprovació: la base d'un logaritme ha de ser positiva i diferent d'$1$. Per tant, $x=-3$ no pot ser base i la descartem. En canvi, $x=3$ sí que ho és, i $\log_3 81=4$ perquè $3^4=81$.

    **Resposta:** $x=3$

    **b)** Apliquem la definició de logaritme al logaritme de fora, en base $2$:

    $$
    \log_2(\log_3 x)=1 \Rightarrow \log_3 x=2^1=2
    $$

    Tornem a aplicar la definició, ara en base $3$:

    $$
    \log_3 x=2 \Rightarrow x=3^2=9
    $$

    Comprovació: els dos arguments han de ser positius. Per a $x=9$: $x=9>0$ i $\log_3 9=2>0$. A més, $\log_2 2=1$. Vàlida.

    **Resposta:** $x=9$

### Exercici 28

Aïlla $x$ en cada fórmula (totes les constants són positives i $b\neq1$):

- **a)** $y=a\cdot b^{x}$
- **b)** $y=k\log\dfrac{x}{c}$
- **c)** $\log x=\log a+2\log b-\dfrac12\log c$

??? note "Mostra la solució"

    **a)** Primer aïllem la potència dividint per $a$, i després apliquem la definició de logaritme, $b^C=B\Leftrightarrow C=\log_b B$ (té sentit perquè $b>0$, $b\neq1$ i $\dfrac{y}{a}$ ha de ser positiu):

    $$
    y=a\cdot b^x\;\Rightarrow\; b^x=\frac{y}{a}\;\Rightarrow\; x=\log_b\frac{y}{a} .
    $$

    Si volem una expressió amb logaritmes decimals, apliquem el canvi de base, $\log_b M=\dfrac{\log M}{\log b}$, i la propietat del logaritme del quocient, $\log\dfrac{M}{N}=\log M-\log N$:

    $$
    x=\frac{\log\dfrac{y}{a}}{\log b}=\frac{\log y-\log a}{\log b} .
    $$

    **Resposta:** $x=\log_b\dfrac{y}{a}=\dfrac{\log y-\log a}{\log b}$

    **b)** Aïllem el logaritme dividint per $k$ (que no és zero, perquè és positiu) i després apliquem la definició de logaritme en base $10$, $\log M=C\Leftrightarrow M=10^C$:

    $$
    \begin{aligned}
    y&=k\log\frac{x}{c}\\
    \log\frac{x}{c}&=\frac{y}{k}\\
    \frac{x}{c}&=10^{y/k}\\
    x&=c\cdot10^{y/k}
    \end{aligned}
    $$

    L'argument del logaritme, $\dfrac{x}{c}=10^{y/k}$, és positiu, com ha de ser.

    **Resposta:** $x=c\cdot10^{y/k}$

    **c)** Volem escriure el segon membre com un sol logaritme. Primer apliquem la propietat del logaritme d'una potència, $n\log M=\log M^n$, i la del logaritme d'una arrel, $\dfrac12\log M=\log\sqrt{M}$:

    $$
    \log x=\log a+\log b^2-\log\sqrt{c} .
    $$

    Després apliquem la propietat del logaritme del producte, $\log M+\log N=\log(M\cdot N)$, i la del quocient, $\log M-\log N=\log\dfrac{M}{N}$:

    $$
    \log x=\log\frac{a\,b^2}{\sqrt{c}} .
    $$

    Si dos logaritmes de la mateixa base són iguals, els arguments també ho són (per la definició de logaritme):

    $$
    x=\frac{a\,b^2}{\sqrt{c}} .
    $$

    Com que $a$, $b$ i $c$ són positius, aquest valor és positiu i l'argument del logaritme $\log x$ és vàlid.

    **Resposta:** $x=\dfrac{a\,b^2}{\sqrt{c}}$
