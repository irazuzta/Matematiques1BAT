# Sistemes d'equacions

Exercicis 32–37. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 32

Resol els sistemes següents:

| | |
|:--|:--|
| **a)** $\begin{cases}x+y=7\\xy=12\end{cases}$ | **b)** $\begin{cases}2x-y=1\\x^2+y^2=10\end{cases}$ |
| **c)** $\begin{cases}y=x^2-2x\\y=x+4\end{cases}$ | **d)** $\begin{cases}x^2-y^2=16\\x+y=8\end{cases}$ |

??? note "Mostra la solució"

    **a)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    x+y=7\\
    xy=12
    \end{cases}
    $$

    Aïllem $y$ a la primera equació, $y=7-x$, i la substituïm a la segona:

    $$
    \begin{aligned}
    x(7-x)&=12\\
    7x-x^2&=12\\
    x^2-7x+12&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{7\pm\sqrt{49-48}}{2}=\frac{7\pm 1}{2}\\
    &\Rightarrow\; x_1=4,\quad x_2=3
    \end{aligned}
    $$

    Calculem $y=7-x$ per a cada valor:

    - $x_1=4 \;\Rightarrow\; y_1=7-4=3$
    - $x_2=3 \;\Rightarrow\; y_2=7-3=4$

    **Resposta:** $(4,3)$ i $(3,4)$

    **b)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    2x-y=1\\
    x^2+y^2=10
    \end{cases}
    $$

    Aïllem $y$ a la primera equació, $y=2x-1$, i la substituïm a la segona. Desenvolupem el quadrat del binomi $(2x-1)^2=4x^2-4x+1$:

    $$
    \begin{aligned}
    x^2+(2x-1)^2&=10\\
    x^2+4x^2-4x+1&=10\\
    5x^2-4x-9&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{4\pm\sqrt{16+180}}{10}=\frac{4\pm 14}{10}\\
    &\Rightarrow\; x_1=\frac{18}{10}=\frac95,\quad x_2=-1
    \end{aligned}
    $$

    Calculem $y=2x-1$ per a cada valor:

    - $x_1=\dfrac95 \;\Rightarrow\; y_1=\dfrac{18}{5}-1=\dfrac{13}{5}$
    - $x_2=-1 \;\Rightarrow\; y_2=-2-1=-3$

    **Resposta:** $\left(\dfrac95,\dfrac{13}{5}\right)$ i $(-1,-3)$

    **c)** Les dues equacions ja tenen la $y$ aïllada, així que fem servir el mètode d'**igualació**:

    $$
    \begin{cases}
    y=x^2-2x\\
    y=x+4
    \end{cases}
    $$

    Igualem les dues expressions de $y$:

    $$
    \begin{aligned}
    x^2-2x&=x+4\\
    x^2-3x-4&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{3\pm\sqrt{9+16}}{2}=\frac{3\pm 5}{2}\\
    &\Rightarrow\; x_1=4,\quad x_2=-1
    \end{aligned}
    $$

    Calculem $y=x+4$ per a cada valor:

    - $x_1=4 \;\Rightarrow\; y_1=8$
    - $x_2=-1 \;\Rightarrow\; y_2=3$

    Gràficament, la primera equació és una paràbola i la segona una recta: les solucions del sistema són els seus **punts de tall**, $(4,8)$ i $(-1,3)$.

    **Resposta:** $(4,8)$ i $(-1,3)$

    **d)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    x^2-y^2=16\\
    x+y=8
    \end{cases}
    $$

    Aïllem $y$ a la segona equació, $y=8-x$, i la substituïm a la primera. Desenvolupem el quadrat del binomi $(8-x)^2=64-16x+x^2$:

    $$
    \begin{aligned}
    x^2-(8-x)^2&=16\\
    x^2-64+16x-x^2&=16\\
    16x&=80 \;\Rightarrow\; x=5
    \end{aligned}
    $$

    Els termes en $x^2$ s'anul·len i ens queda una equació de primer grau, amb una sola solució. Calculem $y=8-x=8-5=3$.

    També ho podíem veure amb la identitat $x^2-y^2=(x+y)(x-y)$: com que $x+y=8$, la primera equació diu $8(x-y)=16$, és a dir, $x-y=2$. Juntament amb $x+y=8$, dona el mateix parell.

    Comprovem-ho: $5^2-3^2=25-9=16$ i $5+3=8$.

    **Resposta:** $(5,3)$

### Exercici 33

Resol els sistemes següents:

| | |
|:--|:--|
| **a)** $\begin{cases}\dfrac{1}{x}+\dfrac{1}{y}=\dfrac{5}{6}\\xy=6\end{cases}$ | **b)** $\begin{cases}\dfrac{x}{y}+\dfrac{y}{x}=\dfrac{5}{2}\\x+y=6\end{cases}$ |
| **c)** $\begin{cases}x+y=5\\\dfrac{3}{x}+\dfrac{2}{y}=2\end{cases}$ | **d)** $\begin{cases}\dfrac{x}{y-1}=2\\xy=24\end{cases}$ |

??? note "Mostra la solució"

    **a)** Ha de ser $x\neq 0$ i $y\neq 0$, perquè hi ha $x$ i $y$ als denominadors. Sumem les fraccions de la primera equació amb denominador comú $xy$:

    $$
    \frac1x+\frac1y=\frac{y+x}{xy}
    $$

    Com que la segona equació diu que $xy=6$, la primera queda

    $$
    \frac{x+y}{6}=\frac56 \;\Rightarrow\; x+y=5
    $$

    Ara resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    x+y=5\\
    xy=6
    \end{cases}
    $$

    Aïllem $y=5-x$ i substituïm a $xy=6$:

    $$
    \begin{aligned}
    x(5-x)&=6\\
    x^2-5x+6&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{5\pm\sqrt{25-24}}{2}=\frac{5\pm 1}{2}\\
    &\Rightarrow\; x_1=3,\quad x_2=2
    \end{aligned}
    $$

    Calculem $y=5-x$ per a cada valor:

    - $x_1=3 \;\Rightarrow\; y_1=2$
    - $x_2=2 \;\Rightarrow\; y_2=3$

    Cap valor anul·la un denominador. Comprovem la primera equació (la segona es compleix: $3\cdot 2=6$):

    $$
    \begin{aligned}
    (3,2)\text{: }&\frac13+\frac12=\frac{2+3}{6}=\frac56\\
    (2,3)\text{: }&\frac12+\frac13=\frac{3+2}{6}=\frac56
    \end{aligned}
    $$

    **Resposta:** $(3,2)$ i $(2,3)$

    **b)** Ha de ser $x\neq 0$ i $y\neq 0$. Multipliquem la primera equació per $2xy$ per treure denominadors:

    $$
    \frac xy+\frac yx=\frac52 \;\Rightarrow\; 2x^2+2y^2=5xy
    $$

    Fem servir la identitat $x^2+y^2=(x+y)^2-2xy$ i la segona equació, $x+y=6$:

    $$
    \begin{aligned}
    2\big((x+y)^2-2xy\big)&=5xy\\
    2(36-2xy)&=5xy\\
    72-4xy&=5xy\\
    72&=9xy \;\Rightarrow\; xy=8
    \end{aligned}
    $$

    Ara resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    x+y=6\\
    xy=8
    \end{cases}
    $$

    Aïllem $y=6-x$ i substituïm a $xy=8$:

    $$
    \begin{aligned}
    x(6-x)&=8\\
    x^2-6x+8&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{6\pm\sqrt{36-32}}{2}=\frac{6\pm 2}{2}\\
    &\Rightarrow\; x_1=4,\quad x_2=2
    \end{aligned}
    $$

    Calculem $y=6-x$ per a cada valor:

    - $x_1=4 \;\Rightarrow\; y_1=2$
    - $x_2=2 \;\Rightarrow\; y_2=4$

    Hem multiplicat per una expressió amb incògnites, així que comprovem la primera equació (la segona es compleix, perquè $4+2=6$):

    $$
    \begin{aligned}
    (4,2)\text{: }&\frac42+\frac24=2+\frac12=\frac52\\
    (2,4)\text{: }&\frac24+\frac42=\frac12+2=\frac52
    \end{aligned}
    $$

    **Resposta:** $(4,2)$ i $(2,4)$

    **c)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    x+y=5\\
    \dfrac3x+\dfrac2y=2
    \end{cases}
    $$

    Ha de ser $x\neq 0$ i $y\neq 0$. Multipliquem la segona equació per $xy$ per treure denominadors:

    $$
    \frac3x+\frac2y=2 \;\Rightarrow\; 3y+2x=2xy
    $$

    Aïllem $y=5-x$ a la primera equació i substituïm:

    $$
    \begin{aligned}
    3(5-x)+2x&=2x(5-x)\\
    15-3x+2x&=10x-2x^2\\
    2x^2-11x+15&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{11\pm\sqrt{121-120}}{4}=\frac{11\pm 1}{4}\\
    &\Rightarrow\; x_1=3,\quad x_2=\frac{10}{4}=\frac52
    \end{aligned}
    $$

    Calculem $y=5-x$ per a cada valor:

    - $x_1=3 \;\Rightarrow\; y_1=2$
    - $x_2=\dfrac52 \;\Rightarrow\; y_2=\dfrac52$

    Hem multiplicat per una expressió amb incògnites, així que comprovem la segona equació (la primera es compleix, perquè hem calculat $y=5-x$):

    $$
    \begin{aligned}
    (3,2)\text{: }&\frac33+\frac22=1+1=2\\
    \left(\tfrac52,\tfrac52\right)\text{: }&\frac65+\frac45=\frac{10}{5}=2
    \end{aligned}
    $$

    (Recordem que $3:\frac52=\frac65$ i $2:\frac52=\frac45$.)

    **Resposta:** $(3,2)$ i $\left(\dfrac52,\dfrac52\right)$

    **d)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    \dfrac{x}{y-1}=2\\
    xy=24
    \end{cases}
    $$

    Ha de ser $y\neq 1$, perquè $y=1$ anul·la el denominador. Multipliquem la primera equació per $y-1$ i aïllem $x$:

    $$
    x=2(y-1)=2y-2
    $$

    Substituïm a la segona equació:

    $$
    \begin{aligned}
    (2y-2)\,y&=24\\
    2y^2-2y-24&=0\\
    y^2-y-12&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    y&=\frac{1\pm\sqrt{1+48}}{2}=\frac{1\pm 7}{2}\\
    &\Rightarrow\; y_1=4,\quad y_2=-3
    \end{aligned}
    $$

    Calculem $x=2(y-1)$ per a cada valor:

    - $y_1=4 \;\Rightarrow\; x_1=2\cdot 3=6$
    - $y_2=-3 \;\Rightarrow\; x_2=2\cdot(-4)=-8$

    Cap dels dos valors de $y$ és $1$. Comprovem les dues equacions:

    $$
    \begin{aligned}
    (6,4)\text{: }&\frac{6}{4-1}=\frac63=2,\quad 6\cdot 4=24\\
    (-8,-3)\text{: }&\frac{-8}{-3-1}=\frac{-8}{-4}=2\\
    &(-8)\cdot(-3)=24
    \end{aligned}
    $$

    **Resposta:** $(6,4)$ i $(-8,-3)$

### Exercici 34

Resol i comprova les solucions:

| | |
|:--|:--|
| **a)** $\begin{cases}x-y=2\\\sqrt{x+y}+y=3\end{cases}$ | **b)** $\begin{cases}\sqrt{x}+y=5\\x-y=7\end{cases}$ |
| **c)** $\begin{cases}\sqrt{x+3}=y\\x-y=3\end{cases}$ | **d)** $\begin{cases}\sqrt{x}+\sqrt{y}=5\\x-y=5\end{cases}$ |

??? note "Mostra la solució"

    **a)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    x-y=2\\
    \sqrt{x+y}+y=3
    \end{cases}
    $$

    Aïllem $x$ a la primera equació, $x=y+2$, i substituïm a la segona. Aïllem l'arrel i elevem al quadrat:

    $$
    \begin{aligned}
    \sqrt{2y+2}+y&=3\\
    \sqrt{2y+2}&=3-y\\
    2y+2&=9-6y+y^2\\
    y^2-8y+7&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    y&=\frac{8\pm\sqrt{64-28}}{2}=\frac{8\pm 6}{2}\\
    &\Rightarrow\; y_1=7,\quad y_2=1
    \end{aligned}
    $$

    Calculem $x=y+2$: obtenim els parells $(9,7)$ i $(3,1)$.

    Hem elevat al quadrat, així que comprovem les candidates a la segona equació (la primera es compleix sempre, perquè hem calculat $x=y+2$):

    $$
    \begin{aligned}
    (9,7)\text{: }&\sqrt{9+7}+7=4+7=11\neq 3\\
    (3,1)\text{: }&\sqrt{3+1}+1=2+1=3
    \end{aligned}
    $$

    El parell $(9,7)$ és una **solució falsa**, que ha aparegut en elevar al quadrat. El parell $(3,1)$ sí que és solució.

    **Resposta:** $(3,1)$

    **b)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    \sqrt{x}+y=5\\
    x-y=7
    \end{cases}
    $$

    Aïllem $x$ a la segona equació, $x=y+7$, i substituïm a la primera. Aïllem l'arrel i elevem al quadrat:

    $$
    \begin{aligned}
    \sqrt{y+7}+y&=5\\
    \sqrt{y+7}&=5-y\\
    y+7&=25-10y+y^2\\
    y^2-11y+18&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    y&=\frac{11\pm\sqrt{121-72}}{2}=\frac{11\pm 7}{2}\\
    &\Rightarrow\; y_1=9,\quad y_2=2
    \end{aligned}
    $$

    Calculem $x=y+7$: obtenim els parells $(16,9)$ i $(9,2)$.

    Hem elevat al quadrat, així que comprovem les candidates a la primera equació (la segona es compleix sempre, perquè hem calculat $x=y+7$):

    $$
    \begin{aligned}
    (16,9)\text{: }&\sqrt{16}+9=4+9=13\neq 5\\
    (9,2)\text{: }&\sqrt{9}+2=3+2=5
    \end{aligned}
    $$

    El parell $(16,9)$ és una **solució falsa**. El parell $(9,2)$ sí que és solució.

    **Resposta:** $(9,2)$

    **c)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    \sqrt{x+3}=y\\
    x-y=3
    \end{cases}
    $$

    Aïllem $x$ a la segona equació, $x=y+3$, i substituïm a la primera. L'arrel ja està aïllada, així que elevem al quadrat:

    $$
    \begin{aligned}
    \sqrt{y+6}&=y\\
    y+6&=y^2\\
    y^2-y-6&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    y&=\frac{1\pm\sqrt{1+24}}{2}=\frac{1\pm 5}{2}\\
    &\Rightarrow\; y_1=3,\quad y_2=-2
    \end{aligned}
    $$

    Calculem $x=y+3$: obtenim els parells $(6,3)$ i $(1,-2)$.

    Hem elevat al quadrat, així que comprovem les candidates a la primera equació (la segona es compleix sempre, perquè hem calculat $x=y+3$):

    $$
    \begin{aligned}
    (6,3)\text{: }&\sqrt{6+3}=3\\
    (1,-2)\text{: }&\sqrt{1+3}=2\neq -2
    \end{aligned}
    $$

    El parell $(1,-2)$ és una **solució falsa**: una arrel quadrada no pot ser negativa. El parell $(6,3)$ sí que és solució.

    **Resposta:** $(6,3)$

    **d)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    \sqrt{x}+\sqrt{y}=5\\
    x-y=5
    \end{cases}
    $$

    Aïllem $x$ a la segona equació, $x=y+5$, i substituïm a la primera. Aïllem una de les arrels i elevem al quadrat:

    $$
    \begin{aligned}
    \sqrt{y+5}+\sqrt{y}&=5\\
    \sqrt{y+5}&=5-\sqrt{y}\\
    y+5&=25-10\sqrt{y}+y\\
    10\sqrt{y}&=20\\
    \sqrt{y}&=2
    \end{aligned}
    $$

    Elevem al quadrat una altra vegada: $y=4$. Calculem $x=y+5=9$.

    També ho podíem veure amb la identitat $x-y=\left(\sqrt x-\sqrt y\right)\left(\sqrt x+\sqrt y\right)$: la segona equació diu $5\left(\sqrt x-\sqrt y\right)=5$, és a dir, $\sqrt x-\sqrt y=1$. Sumant-ho amb $\sqrt x+\sqrt y=5$ obtenim $\sqrt x=3$ i $\sqrt y=2$.

    Hem elevat al quadrat, així que comprovem el parell a les dues equacions:

    $$
    \begin{aligned}
    \text{1a equació: }&\sqrt9+\sqrt4=3+2=5\\
    \text{2a equació: }&9-4=5
    \end{aligned}
    $$

    **Resposta:** $(9,4)$

### Exercici 35

Resol els sistemes d'equacions exponencials següents:

| | |
|:--|:--|
| **a)** $\begin{cases}2^x\cdot 2^y=16\\2^x:2^y=4\end{cases}$ | **b)** $\begin{cases}3^x+3^y=12\\x+y=3\end{cases}$ |
| **c)** $\begin{cases}2^x=4^y\\x+y=3\end{cases}$ | **d)** $\begin{cases}2^{x+y}=8\\3^x\cdot 9^y=243\end{cases}$ |

??? note "Mostra la solució"

    **a)** Transformem cada equació amb les propietats de les potències (producte i quocient de potències de la mateixa base) i igualem exponents:

    $$
    \begin{aligned}
    2^x\cdot 2^y=2^{x+y}=2^4 &\;\Rightarrow\; x+y=4\\
    2^x:2^y=2^{x-y}=2^2 &\;\Rightarrow\; x-y=2
    \end{aligned}
    $$

    Ens queda un sistema lineal, que resolem per **substitució**:

    $$
    \begin{cases}
    x+y=4\\
    x-y=2
    \end{cases}
    $$

    Aïllem $x=2+y$ a la segona equació i substituïm a la primera:

    $$
    2+y+y=4 \;\Rightarrow\; 2y=2 \;\Rightarrow\; y=1
    $$

    i, per tant, $x=2+1=3$.

    **Resposta:** $(3,1)$

    **b)** Resolem el sistema pel mètode de **substitució**:

    $$
    \begin{cases}
    3^x+3^y=12\\
    x+y=3
    \end{cases}
    $$

    Aïllem $y=3-x$ a la segona equació. Amb la propietat del quocient de potències,

    $$
    3^y=3^{3-x}=\frac{3^3}{3^x}=\frac{27}{3^x}
    $$

    i la primera equació queda

    $$
    3^x+\frac{27}{3^x}=12
    $$

    Fem el canvi de variable $t=3^x$ (amb $t>0$, perquè una potència de base positiva sempre és positiva) i multipliquem per $t$:

    $$
    \begin{aligned}
    t+\frac{27}{t}&=12\\
    t^2+27&=12t\\
    t^2-12t+27&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    t&=\frac{12\pm\sqrt{144-108}}{2}=\frac{12\pm 6}{2}\\
    &\Rightarrow\; t_1=9,\quad t_2=3
    \end{aligned}
    $$

    Tots dos valors són positius. Desfem el canvi i calculem $y=3-x$:

    - $3^x=9=3^2 \;\Rightarrow\; x_1=2 \;\Rightarrow\; y_1=1$
    - $3^x=3=3^1 \;\Rightarrow\; x_2=1 \;\Rightarrow\; y_2=2$

    Comprovem la primera equació: $3^2+3^1=9+3=12$ i $3^1+3^2=3+9=12$.

    **Resposta:** $(2,1)$ i $(1,2)$

    **c)** Escrivim $4$ com a potència de $2$ i apliquem la propietat de la potència d'una potència, $4^y=\left(2^2\right)^y=2^{2y}$. Igualem exponents:

    $$
    2^x=2^{2y} \;\Rightarrow\; x=2y
    $$

    Ens queda un sistema lineal, que resolem per **substitució**:

    $$
    \begin{cases}
    x=2y\\
    x+y=3
    \end{cases}
    $$

    Substituïm $x=2y$ a la segona equació:

    $$
    2y+y=3 \;\Rightarrow\; 3y=3 \;\Rightarrow\; y=1
    $$

    i, per tant, $x=2\cdot 1=2$. Comprovem-ho: $2^2=4=4^1$ i $2+1=3$.

    **Resposta:** $(2,1)$

    **d)** Escrivim $8=2^3$, $9=3^2$ i $243=3^5$. Amb les propietats de les potències (potència d'una potència i producte de potències de la mateixa base), igualem exponents:

    $$
    \begin{aligned}
    2^{x+y}=2^3 &\;\Rightarrow\; x+y=3\\
    3^x\cdot 9^y=3^x\cdot 3^{2y}=3^{x+2y}=3^5 &\;\Rightarrow\; x+2y=5
    \end{aligned}
    $$

    Ens queda un sistema lineal, que resolem per **substitució**:

    $$
    \begin{cases}
    x+y=3\\
    x+2y=5
    \end{cases}
    $$

    Aïllem $x=3-y$ a la primera equació i substituïm a la segona:

    $$
    3-y+2y=5 \;\Rightarrow\; y=2
    $$

    i, per tant, $x=3-2=1$. Comprovem-ho: $2^{1+2}=8$ i $3^1\cdot 9^2=3\cdot 81=243$.

    **Resposta:** $(1,2)$

### Exercici 36

Resol els sistemes d'equacions logarítmiques següents:

| | |
|:--|:--|
| **a)** $\begin{cases}\log x+\log y=3\\\log x-\log y=1\end{cases}$ | **b)** $\begin{cases}\log_2 x+\log_2 y=5\\x-y=4\end{cases}$ |
| **c)** $\begin{cases}\log x+\log y=1\\x+y=7\end{cases}$ | **d)** $\begin{cases}\ln x+\ln y=\ln 12\\x-y=1\end{cases}$ |

??? note "Mostra la solució"

    **a)** Apliquem la propietat del logaritme d'un producte a la primera equació i la del logaritme d'un quocient a la segona. Després, la definició de logaritme:

    $$
    \begin{aligned}
    \log x+\log y=\log(xy)=3 &\;\Rightarrow\; xy=10^3=1000\\
    \log x-\log y=\log\frac xy=1 &\;\Rightarrow\; \frac xy=10
    \end{aligned}
    $$

    Resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    xy=1000\\
    x=10y
    \end{cases}
    $$

    Substituïm $x=10y$ a la primera equació:

    $$
    10y\cdot y=1000 \;\Rightarrow\; y^2=100 \;\Rightarrow\; y=\pm 10
    $$

    Calculem $x=10y$: obtenim els parells $(100,10)$ i $(-100,-10)$.

    Comprovació: l'argument d'un logaritme ha de ser positiu. Substituïm cada parell a les equacions originals:

    $$
    \begin{aligned}
    (100,10)\text{: }&\log 100+\log 10=2+1=3\\
    &\log 100-\log 10=2-1=1\\
    (-100,-10)\text{: }&\log(-100)\ \text{no existeix}
    \end{aligned}
    $$

    El parell $(100,10)$ és solució. El parell $(-100,-10)$ no ho és.

    **Resposta:** $(100,10)$

    **b)** A la primera equació apliquem la propietat del logaritme d'un producte i la definició de logaritme:

    $$
    \log_2 x+\log_2 y=\log_2(xy)=5 \;\Rightarrow\; xy=2^5=32
    $$

    Resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    xy=32\\
    x-y=4
    \end{cases}
    $$

    Aïllem $x=y+4$ a la segona equació i substituïm:

    $$
    \begin{aligned}
    (y+4)\,y&=32\\
    y^2+4y-32&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    y&=\frac{-4\pm\sqrt{16+128}}{2}=\frac{-4\pm 12}{2}\\
    &\Rightarrow\; y_1=4,\quad y_2=-8
    \end{aligned}
    $$

    Calculem $x=y+4$: obtenim els parells $(8,4)$ i $(-4,-8)$.

    Comprovació: l'argument d'un logaritme ha de ser positiu. Substituïm cada parell a la primera equació:

    $$
    \begin{aligned}
    (8,4)\text{: }&\log_2 8+\log_2 4=3+2=5\\
    (-4,-8)\text{: }&\log_2(-4)\ \text{no existeix}
    \end{aligned}
    $$

    El parell $(8,4)$ és solució (també compleix $8-4=4$). El parell $(-4,-8)$ no és vàlid.

    **Resposta:** $(8,4)$

    **c)** A la primera equació apliquem la propietat del logaritme d'un producte i la definició de logaritme:

    $$
    \log x+\log y=\log(xy)=1 \;\Rightarrow\; xy=10^1=10
    $$

    Resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    xy=10\\
    x+y=7
    \end{cases}
    $$

    Aïllem $y=7-x$ a la segona equació i substituïm:

    $$
    \begin{aligned}
    x(7-x)&=10\\
    x^2-7x+10&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{7\pm\sqrt{49-40}}{2}=\frac{7\pm 3}{2}\\
    &\Rightarrow\; x_1=5,\quad x_2=2
    \end{aligned}
    $$

    Calculem $y=7-x$: obtenim els parells $(5,2)$ i $(2,5)$.

    Comprovació: l'argument d'un logaritme ha de ser positiu. En els dos parells $x$ i $y$ són positius. Substituïm a la primera equació:

    $$
    \begin{aligned}
    (5,2)\text{: }&\log 5+\log 2=\log 10=1\\
    (2,5)\text{: }&\log 2+\log 5=\log 10=1
    \end{aligned}
    $$

    **Resposta:** $(5,2)$ i $(2,5)$

    **d)** A la primera equació apliquem la propietat del logaritme d'un producte i igualem arguments:

    $$
    \ln x+\ln y=\ln(xy)=\ln 12 \;\Rightarrow\; xy=12
    $$

    Resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    xy=12\\
    x-y=1
    \end{cases}
    $$

    Aïllem $x=y+1$ a la segona equació i substituïm:

    $$
    \begin{aligned}
    (y+1)\,y&=12\\
    y^2+y-12&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    y&=\frac{-1\pm\sqrt{1+48}}{2}=\frac{-1\pm 7}{2}\\
    &\Rightarrow\; y_1=3,\quad y_2=-4
    \end{aligned}
    $$

    Calculem $x=y+1$: obtenim els parells $(4,3)$ i $(-3,-4)$.

    Comprovació: l'argument d'un logaritme ha de ser positiu. Substituïm cada parell a la primera equació:

    $$
    \begin{aligned}
    (4,3)\text{: }&\ln 4+\ln 3=\ln 12\\
    (-3,-4)\text{: }&\ln(-3)\ \text{no existeix}
    \end{aligned}
    $$

    El parell $(4,3)$ és solució (també compleix $4-3=1$). El parell $(-3,-4)$ no és vàlid.

    **Resposta:** $(4,3)$

### Exercici 37

Planteja un sistema d'equacions i resol-lo:

- **a)** Un rectangle té $28$ m de perímetre i la seva diagonal fa $10$ m. Quines dimensions té?
- **b)** Troba els punts de tall de la paràbola $y=x^2-3x$ i la recta $y=x-3$.
- **c)** La suma de dos nombres és $10$ i la suma dels seus inversos és $\dfrac{5}{12}$. Quins són aquests nombres?
- **d)** Troba els punts de tall de la circumferència $x^2+y^2=25$ i la recta $x+y=7$.

??? note "Mostra la solució"

    **a)** Anomenem $x$ i $y$ les longituds dels costats del rectangle, en metres.

    - El perímetre és $2x+2y=28$, és a dir, $x+y=14$.
    - La diagonal i dos costats formen un triangle rectangle. Pel teorema de Pitàgores, $x^2+y^2=10^2=100$.

    Resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    x+y=14\\
    x^2+y^2=100
    \end{cases}
    $$

    Aïllem $y=14-x$ i substituïm a la segona equació:

    $$
    \begin{aligned}
    x^2+(14-x)^2&=100\\
    x^2+196-28x+x^2&=100\\
    2x^2-28x+96&=0\\
    x^2-14x+48&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{14\pm\sqrt{196-192}}{2}=\frac{14\pm 2}{2}\\
    &\Rightarrow\; x_1=8,\quad x_2=6
    \end{aligned}
    $$

    Calculem $y=14-x$:

    - $x_1=8 \;\Rightarrow\; y_1=6$
    - $x_2=6 \;\Rightarrow\; y_2=8$

    Tots dos valors són positius, com cal en una longitud. Els dos parells, $(8,6)$ i $(6,8)$, donen el mateix rectangle (només canvia quin costat anomenem $x$). Comprovem-ho: $8+6=14$ i $8^2+6^2=64+36=100$.

    **Resposta:** El rectangle fa $8$ m per $6$ m.

    **b)** Els punts de tall de la paràbola i la recta són els punts que compleixen totes dues equacions, és a dir, les solucions del sistema

    $$
    \begin{cases}
    y=x^2-3x\\
    y=x-3
    \end{cases}
    $$

    Les dues equacions tenen la $y$ aïllada: fem servir el mètode d'**igualació**.

    $$
    \begin{aligned}
    x^2-3x&=x-3\\
    x^2-4x+3&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{4\pm\sqrt{16-12}}{2}=\frac{4\pm 2}{2}\\
    &\Rightarrow\; x_1=3,\quad x_2=1
    \end{aligned}
    $$

    Calculem $y=x-3$ per a cada valor:

    - $x_1=3 \;\Rightarrow\; y_1=0$
    - $x_2=1 \;\Rightarrow\; y_2=-2$

    **Resposta:** Els punts de tall són $(1,-2)$ i $(3,0)$.

    **c)** Anomenem $x$ i $y$ els dos nombres (han de ser diferents de $0$ per poder-ne calcular l'invers).

    - La suma és $10$: $x+y=10$.
    - La suma dels inversos és $\dfrac{5}{12}$: $\dfrac1x+\dfrac1y=\dfrac{5}{12}$.

    Sumem les fraccions amb denominador comú $xy$ i fem servir que $x+y=10$:

    $$
    \begin{aligned}
    \frac1x+\frac1y=\frac{x+y}{xy}=\frac{10}{xy}&=\frac{5}{12}\\
    5xy&=120 \;\Rightarrow\; xy=24
    \end{aligned}
    $$

    Resolem pel mètode de **substitució** el sistema

    $$
    \begin{cases}
    x+y=10\\
    xy=24
    \end{cases}
    $$

    Aïllem $y=10-x$ i substituïm a $xy=24$:

    $$
    \begin{aligned}
    x(10-x)&=24\\
    x^2-10x+24&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{10\pm\sqrt{100-96}}{2}=\frac{10\pm 2}{2}\\
    &\Rightarrow\; x_1=6,\quad x_2=4
    \end{aligned}
    $$

    Calculem $y=10-x$:

    - $x_1=6 \;\Rightarrow\; y_1=4$
    - $x_2=4 \;\Rightarrow\; y_2=6$

    Els dos parells donen els mateixos dos nombres. Hem multiplicat per $xy$, així que ho comprovem: $6+4=10$ i

    $$
    \frac16+\frac14=\frac{2+3}{12}=\frac{5}{12}
    $$

    **Resposta:** Els nombres són $4$ i $6$.

    **d)** Els punts de tall de la circumferència i la recta són els punts que compleixen totes dues equacions, és a dir, les solucions del sistema

    $$
    \begin{cases}
    x^2+y^2=25\\
    x+y=7
    \end{cases}
    $$

    Fem servir el mètode de **substitució**. Aïllem $y=7-x$ a la segona equació i substituïm a la primera:

    $$
    \begin{aligned}
    x^2+(7-x)^2&=25\\
    x^2+49-14x+x^2&=25\\
    2x^2-14x+24&=0\\
    x^2-7x+12&=0
    \end{aligned}
    $$

    $$
    \begin{aligned}
    x&=\frac{7\pm\sqrt{49-48}}{2}=\frac{7\pm 1}{2}\\
    &\Rightarrow\; x_1=4,\quad x_2=3
    \end{aligned}
    $$

    Calculem $y=7-x$ per a cada valor:

    - $x_1=4 \;\Rightarrow\; y_1=3$
    - $x_2=3 \;\Rightarrow\; y_2=4$

    Comprovem-ho: $4^2+3^2=16+9=25$ i $3^2+4^2=25$.

    **Resposta:** Els punts de tall són $(3,4)$ i $(4,3)$.
