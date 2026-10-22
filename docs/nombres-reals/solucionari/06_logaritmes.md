# Solucionari — Logaritmes

Resolució pas a pas dels exercicis 77–100 de [Exercicis i problemes](../exercicis.md).
Teoria: [Logaritmes](../07_logaritmes.md).

## 6.1 Definició i càlcul directe

### Exercici 77

> **Enunciat.** Escriu en forma de logaritme: a) $2^5=32$ · b) $10^3=1000$ · c) $5^0=1$ · d) $3^{-2}=\dfrac{1}{9}$

Fem servir la definició: $a^n=b \Leftrightarrow \log_a b=n$. La base de la potència passa a ser la base del logaritme, i l'exponent és el valor del logaritme.

**a)** La base és $2$, l'exponent $5$ i el resultat $32$.

**Resposta:** $\log_2 32=5$

**b)** La base és $10$, per tant és un logaritme decimal i no cal escriure la base.

**Resposta:** $\log 1000=3$

**c)** Base $5$, exponent $0$, resultat $1$.

**Resposta:** $\log_5 1=0$

**d)** Base $3$, exponent $-2$, resultat $\dfrac19$.

**Resposta:** $\log_3 \dfrac19=-2$

### Exercici 78

> **Enunciat.** Escriu en forma de potència: a) $\log_2 16=4$ · b) $\log 100=2$ · c) $\log_3 1=0$ · d) $\log_5 5=1$

Fem servir la definició en sentit contrari: $\log_a b=n \Leftrightarrow a^n=b$.

**a)** Base $2$, valor del logaritme $4$ (exponent) i argument $16$.

**Resposta:** $2^4=16$

**b)** El logaritme decimal té base $10$.

**Resposta:** $10^2=100$

**c)** Base $3$, exponent $0$ (recorda que $\log_a 1=0$).

**Resposta:** $3^0=1$

**d)** Base $5$, exponent $1$ (recorda que $\log_a a=1$).

**Resposta:** $5^1=5$

### Exercici 79

> **Enunciat.** Calcula sense calculadora: a) $\log_2 8$ · b) $\log_3 81$ · c) $\log 10000$ · d) $\log_5 1$ · e) $\log_7 7$ · f) $\ln e$

Busquem l'exponent al qual hem d'elevar la base per obtenir l'argument.

**a)** Com que $8=2^3$, tenim $\log_2 8=\log_2 2^3=3$.

**Resposta:** $3$

**b)** Com que $81=3^4$, tenim $\log_3 81=4$.

**Resposta:** $4$

**c)** Com que $10000=10^4$, tenim $\log 10000=4$.

**Resposta:** $4$

**d)** Per la propietat del logaritme de $1$, $\log_a 1=0$.

**Resposta:** $0$

**e)** Per la propietat del logaritme de la base, $\log_a a=1$.

**Resposta:** $1$

**f)** $\ln e=\log_e e$, que és el logaritme de la base.

**Resposta:** $1$

### Exercici 80

> **Enunciat.** Calcula sense calculadora, escrivint prèviament el nombre com una potència de la base: a) $\log_2 \dfrac{1}{4}$ · b) $\log_3 \dfrac{1}{27}$ · c) $\log_5 \sqrt5$ · d) $\log_2 \sqrt[3]{4}$

Escrivim l'argument com a potència de la base i apliquem $\log_a a^n=n$.

**a)** $\dfrac14=\dfrac1{2^2}=2^{-2}$, per tant

$$
\log_2 \frac14=\log_2 2^{-2}=-2.
$$

**Resposta:** $-2$

**b)** $\dfrac1{27}=\dfrac1{3^3}=3^{-3}$, per tant $\log_3 3^{-3}=-3$.

**Resposta:** $-3$

**c)** $\sqrt5=5^{1/2}$, per tant $\log_5 5^{1/2}=\dfrac12$.

**Resposta:** $\dfrac12$

**d)** $\sqrt[3]{4}=\sqrt[3]{2^2}=2^{2/3}$, per tant

$$
\log_2 2^{2/3}=\frac23.
$$

**Resposta:** $\dfrac23$

## 6.2 Propietats amb valors numèrics

### Exercici 81

> **Enunciat.** Aplica la propietat del logaritme d'un producte per desenvolupar: a) $\log_2\left(4\cdot 8\right)$ · b) $\log\left(5\cdot 20\right)$ · c) $\log_3\left(x\cdot y\right)$, amb $x,y>0$

La propietat del producte diu que $\log_a(M\cdot N)=\log_a M+\log_a N$.

**a)** Desenvolupem i calculem cada logaritme escrivint els nombres com a potències de $2$:

$$
\log_2(4\cdot 8)=\log_2 4+\log_2 8=2+3=5.
$$

**Resposta:** $\log_2 4+\log_2 8=5$

**b)** Desenvolupem:

$$
\log(5\cdot 20)=\log 5+\log 20.
$$

Ho comprovem amb el valor: $5\cdot 20=100$, i $\log 100=\log 10^2=2$, que és el que val la suma $\log 5+\log 20$.

**Resposta:** $\log 5+\log 20=2$

**c)** Aquí només podem desenvolupar, perquè $x$ i $y$ són lletres (i positives, de manera que els logaritmes tenen sentit).

**Resposta:** $\log_3 x+\log_3 y$

### Exercici 82

> **Enunciat.** Aplica la propietat del logaritme d'un quocient: a) $\log_2 \dfrac{32}{4}$ · b) $\log \dfrac{1000}{10}$ · c) $\log_5 \dfrac{x}{25}$, amb $x>0$

La propietat del quocient diu que $\log_a\dfrac MN=\log_a M-\log_a N$.

**a)** Com que $32=2^5$ i $4=2^2$:

$$
\log_2 \frac{32}{4}=\log_2 32-\log_2 4=5-2=3.
$$

**Resposta:** $\log_2 32-\log_2 4=3$

**b)** Com que $1000=10^3$ i $10=10^1$:

$$
\log \frac{1000}{10}=\log 1000-\log 10=3-1=2.
$$

**Resposta:** $\log 1000-\log 10=2$

**c)** Desenvolupem i usem que $25=5^2$:

$$
\log_5 \frac{x}{25}=\log_5 x-\log_5 25=\log_5 x-2.
$$

**Resposta:** $\log_5 x-2$

### Exercici 83

> **Enunciat.** Aplica la propietat de la potència: a) $\log_2 8^5$ · b) $\log_3 9^{-2}$ · c) $\log\left(10^7\right)$ · d) $\log_a a^n$

La propietat de la potència diu que $\log_a(M^n)=n\cdot\log_a M$.

**a)** Com que $\log_2 8=3$:

$$
\log_2 8^5=5\cdot\log_2 8=5\cdot 3=15.
$$

**Resposta:** $15$

**b)** Com que $\log_3 9=2$:

$$
\log_3 9^{-2}=-2\cdot\log_3 9=-2\cdot 2=-4.
$$

**Resposta:** $-4$

**c)** $\log 10^7=7\cdot\log 10=7\cdot 1=7$.

**Resposta:** $7$

**d)** $\log_a a^n=n\cdot\log_a a=n\cdot 1=n$.

**Resposta:** $n$

### Exercici 84

> **Enunciat.** Aplica la propietat de l'arrel: a) $\log_2 \sqrt[3]{8}$ · b) $\log_5\sqrt{25}$ · c) $\log_3\sqrt[4]{81}$

La propietat de l'arrel diu que $\log_a\sqrt[n]{M}=\dfrac1n\log_a M$.

**a)** Com que $\log_2 8=3$:

$$
\log_2\sqrt[3]{8}=\frac13\log_2 8=\frac13\cdot 3=1.
$$

**Resposta:** $1$

**b)** Com que $\log_5 25=2$:

$$
\log_5\sqrt{25}=\frac12\log_5 25=\frac12\cdot 2=1.
$$

**Resposta:** $1$

**c)** Com que $\log_3 81=4$:

$$
\log_3\sqrt[4]{81}=\frac14\log_3 81=\frac14\cdot 4=1.
$$

**Resposta:** $1$

### Exercici 85

> **Enunciat.** Desenvolupa aplicant totes les propietats necessàries: $\log_2\left(\dfrac{8\sqrt2}{4}\right)$.

Primer separem el quocient (propietat del quocient) i després el producte del numerador (propietat del producte):

$$
\log_2\frac{8\sqrt2}{4}=\log_2 8+\log_2\sqrt2-\log_2 4.
$$

Calculem cada terme. $\log_2 8=3$ i $\log_2 4=2$. Per la propietat de l'arrel, $\log_2\sqrt2=\dfrac12\log_2 2=\dfrac12$. Per tant:

$$
\log_2\frac{8\sqrt2}{4}=3+\frac12-2=\frac32.
$$

Ho comprovem: $\dfrac{8\sqrt2}{4}=2\sqrt2=2^{3/2}$, i efectivament $\log_2 2^{3/2}=\dfrac32$.

**Resposta:** $\log_2 8+\log_2\sqrt2-\log_2 4=\dfrac32=1{,}5$

### Exercici 86

> **Enunciat.** Desenvolupa: $\log\left(\dfrac{100\cdot\sqrt{10}}{1000}\right)$.

Apliquem la propietat del quocient i la del producte:

$$
\log\frac{100\cdot\sqrt{10}}{1000}=\log 100+\log\sqrt{10}-\log 1000.
$$

Calculem cada terme. $\log 100=2$ i $\log 1000=3$. Per la propietat de l'arrel, $\log\sqrt{10}=\dfrac12\log 10=\dfrac12$. Per tant:

$$
2+\frac12-3=-\frac12.
$$

Ho comprovem: $\dfrac{100\sqrt{10}}{1000}=\dfrac{\sqrt{10}}{10}=10^{1/2-1}=10^{-1/2}$.

**Resposta:** $\log 100+\log\sqrt{10}-\log 1000=-\dfrac12=-0{,}5$

### Exercici 87

> **Enunciat.** Redueix a un sol logaritme: a) $\log_2 5+\log_2 3$ · b) $\log 20-\log 4$ · c) $3\log_5 2$ · d) $\dfrac12 \log_3 9$

Ara fem el camí invers: llegim les propietats de dreta a esquerra.

**a)** Una suma de logaritmes de la mateixa base és el logaritme del producte:

$$
\log_2 5+\log_2 3=\log_2(5\cdot 3)=\log_2 15.
$$

**Resposta:** $\log_2 15$

**b)** Una resta de logaritmes és el logaritme del quocient:

$$
\log 20-\log 4=\log\frac{20}{4}=\log 5.
$$

**Resposta:** $\log 5$

**c)** Un coeficient davant del logaritme passa a ser l'exponent de l'argument (propietat de la potència):

$$
3\log_5 2=\log_5 2^3=\log_5 8.
$$

**Resposta:** $\log_5 8$

**d)** El coeficient $\dfrac12$ equival a una arrel quadrada:

$$
\frac12\log_3 9=\log_3 9^{1/2}=\log_3\sqrt9=\log_3 3=1.
$$

**Resposta:** $\log_3 3=1$

### Exercici 88

> **Enunciat.** Redueix a un sol logaritme i calcula'n el valor: $2\log_2 3-\log_2 \dfrac{9}{4}$.

Portem el coeficient a l'exponent (propietat de la potència) i després restem (propietat del quocient):

$$
2\log_2 3-\log_2\frac94=\log_2 3^2-\log_2\frac94=\log_2 9-\log_2\frac94=\log_2\left(9\cdot\frac49\right)=\log_2 4.
$$

Com que $4=2^2$, $\log_2 4=2$.

**Resposta:** $\log_2 4=2$

### Exercici 89

> **Enunciat.** Utilitza el canvi de base per expressar en base $10$ (deixa'l indicat, sense calcular-lo): a) $\log_2 7$ · b) $\log_5 12$

El canvi de base diu que $\log_a M=\dfrac{\log_b M}{\log_b a}$. Prenem $b=10$.

**a)** Aquí $a=2$ i $M=7$.

**Resposta:** $\log_2 7=\dfrac{\log 7}{\log 2}$

**b)** Aquí $a=5$ i $M=12$.

**Resposta:** $\log_5 12=\dfrac{\log 12}{\log 5}$

## 6.3 Propietats amb expressions literals

> En tots els exercicis d'aquest apartat, suposem $a>0$, $a\neq1$, i totes les variables ($x$, $y$, $z$) estrictament positives.

### Exercici 90

> **Enunciat.** Desenvolupa aplicant les propietats dels logaritmes: a) $\log_a\left(x^3 y^2\right)$ · b) $\log_a \dfrac{x^2}{y^3}$ · c) $\log_a \dfrac{xy}{z}$ · d) $\log_a \sqrt{x}$

**a)** Primer el producte i després la potència en cada factor:

$$
\log_a\left(x^3y^2\right)=\log_a x^3+\log_a y^2=3\log_a x+2\log_a y.
$$

**Resposta:** $3\log_a x+2\log_a y$

**b)** Primer el quocient i després les potències:

$$
\log_a\frac{x^2}{y^3}=\log_a x^2-\log_a y^3=2\log_a x-3\log_a y.
$$

**Resposta:** $2\log_a x-3\log_a y$

**c)** Quocient i producte:

$$
\log_a\frac{xy}{z}=\log_a(xy)-\log_a z=\log_a x+\log_a y-\log_a z.
$$

**Resposta:** $\log_a x+\log_a y-\log_a z$

**d)** Propietat de l'arrel: $\log_a\sqrt{x}=\log_a x^{1/2}=\dfrac12\log_a x$.

**Resposta:** $\dfrac12\log_a x$

### Exercici 91

> **Enunciat.** Desenvolupa completament, fins que no quedi cap producte, quocient, potència ni arrel dins d'un logaritme: a) $\log_a \dfrac{x^3\sqrt{y}}{z^2}$ · b) $\log_a \sqrt{\dfrac{x}{y}}$ · c) $\log_a \dfrac{x^2\sqrt[3]{y}}{z}$ · d) $\log_a \left(x\sqrt{yz}\right)$

**a)** Separem el quocient, després el producte, i finalment baixem els exponents (l'arrel és l'exponent $\frac12$):

$$
\log_a \frac{x^3\sqrt{y}}{z^2}=\log_a x^3+\log_a\sqrt y-\log_a z^2=3\log_a x+\frac12\log_a y-2\log_a z.
$$

**Resposta:** $3\log_a x+\dfrac12\log_a y-2\log_a z$

**b)** Primer l'arrel (propietat de l'arrel) i després el quocient:

$$
\log_a\sqrt{\frac xy}=\frac12\log_a\frac xy=\frac12\left(\log_a x-\log_a y\right).
$$

**Resposta:** $\dfrac12\log_a x-\dfrac12\log_a y$

**c)** Quocient, producte i arrel cúbica (exponent $\frac13$):

$$
\log_a \frac{x^2\sqrt[3]{y}}{z}=\log_a x^2+\log_a\sqrt[3]{y}-\log_a z=2\log_a x+\frac13\log_a y-\log_a z.
$$

**Resposta:** $2\log_a x+\dfrac13\log_a y-\log_a z$

**d)** Primer el producte i després l'arrel de $yz$:

$$
\log_a\left(x\sqrt{yz}\right)=\log_a x+\log_a\sqrt{yz}=\log_a x+\frac12\log_a(yz)=\log_a x+\frac12\log_a y+\frac12\log_a z.
$$

**Resposta:** $\log_a x+\dfrac12\log_a y+\dfrac12\log_a z$

### Exercici 92

> **Enunciat.** Redueix a un sol logaritme: a) $2\log_a x+3\log_a y$ · b) $\log_a x-\dfrac12\log_a y$ · c) $\log_a x+\log_a y-\log_a z$ · d) $4\log_a x$

Primer passem els coeficients a exponents (propietat de la potència) i després ajuntem sumes en productes i restes en quocients.

**a)** 

$$
2\log_a x+3\log_a y=\log_a x^2+\log_a y^3=\log_a\left(x^2y^3\right).
$$

**Resposta:** $\log_a\left(x^2y^3\right)$

**b)** El coeficient $\dfrac12$ és una arrel quadrada:

$$
\log_a x-\frac12\log_a y=\log_a x-\log_a\sqrt y=\log_a\frac{x}{\sqrt y}.
$$

**Resposta:** $\log_a\dfrac{x}{\sqrt y}$

**c)** Suma és producte, resta és quocient:

$$
\log_a x+\log_a y-\log_a z=\log_a(xy)-\log_a z=\log_a\frac{xy}{z}.
$$

**Resposta:** $\log_a\dfrac{xy}{z}$

**d)** $4\log_a x=\log_a x^4$.

**Resposta:** $\log_a x^4$

### Exercici 93

> **Enunciat.** Redueix a un sol logaritme: a) $3\log_a x-\log_a y-2\log_a z$ · b) $\dfrac12\left(\log_a x+\log_a y\right)$ · c) $2\log_a x-\dfrac13\log_a y$ · d) $\dfrac13\log_a x+\dfrac23\log_a y-\log_a z$

**a)** Passem els coeficients a exponents i ajuntem; les restes van al denominador:

$$
3\log_a x-\log_a y-2\log_a z=\log_a x^3-\log_a y-\log_a z^2=\log_a\frac{x^3}{y\,z^2}.
$$

**Resposta:** $\log_a\dfrac{x^3}{y\,z^2}$

**b)** Dins del parèntesi tenim un producte; el coeficient $\dfrac12$ el converteix en arrel:

$$
\frac12\left(\log_a x+\log_a y\right)=\frac12\log_a(xy)=\log_a\sqrt{xy}.
$$

**Resposta:** $\log_a\sqrt{xy}$

**c)** 

$$
2\log_a x-\frac13\log_a y=\log_a x^2-\log_a\sqrt[3]{y}=\log_a\frac{x^2}{\sqrt[3]{y}}.
$$

**Resposta:** $\log_a\dfrac{x^2}{\sqrt[3]{y}}$

**d)** Els coeficients $\frac13$ i $\frac23$ donen exponents $\frac13$ i $\frac23$:

$$
\frac13\log_a x+\frac23\log_a y-\log_a z=\log_a\sqrt[3]{x}+\log_a\sqrt[3]{y^2}-\log_a z=\log_a\frac{\sqrt[3]{x\,y^2}}{z}.
$$

**Resposta:** $\log_a\dfrac{\sqrt[3]{x\,y^2}}{z}$

### Exercici 94

> **Enunciat.** Sabent que $\log_a 2=m$ i $\log_a 3=n$, expressa en funció de $m$ i $n$: a) $\log_a 6$ · b) $\log_a 12$ · c) $\log_a \dfrac{3}{2}$ · d) $\log_a \sqrt{2}$ · e) $\log_a 18$ · f) $\log_a \dfrac{8}{9}$

La idea és descompondre cada nombre en factors $2$ i $3$ i aplicar les propietats.

**a)** $6=2\cdot 3$, i pel producte $\log_a 6=\log_a 2+\log_a 3$.

**Resposta:** $m+n$

**b)** $12=2^2\cdot 3$:

$$
\log_a 12=\log_a 2^2+\log_a 3=2\log_a 2+\log_a 3.
$$

**Resposta:** $2m+n$

**c)** Pel quocient, $\log_a\dfrac32=\log_a 3-\log_a 2$.

**Resposta:** $n-m$

**d)** Per l'arrel, $\log_a\sqrt2=\dfrac12\log_a 2$.

**Resposta:** $\dfrac m2$

**e)** $18=2\cdot 3^2$:

$$
\log_a 18=\log_a 2+\log_a 3^2=\log_a 2+2\log_a 3.
$$

**Resposta:** $m+2n$

**f)** $8=2^3$ i $9=3^2$:

$$
\log_a\frac89=\log_a 2^3-\log_a 3^2=3\log_a 2-2\log_a 3.
$$

**Resposta:** $3m-2n$

### Exercici 95

> **Enunciat.** Sabent que $\log 2 \approx 0{,}301$, calcula sense calculadora (recorda que $\log 10=1$): a) $\log 5$ · b) $\log 4$ · c) $\log 50$ · d) $\log 0{,}2$ · e) $\log \sqrt{2}$ · f) $\log 40$

Escrivim cada nombre usant només $2$ i $10$.

**a)** $5=\dfrac{10}{2}$, per tant $\log 5=\log 10-\log 2\approx 1-0{,}301$.

**Resposta:** $\log 5\approx 0{,}699$

**b)** $4=2^2$, per tant $\log 4=2\log 2\approx 2\cdot 0{,}301$.

**Resposta:** $\log 4\approx 0{,}602$

**c)** $50=\dfrac{100}{2}$, per tant $\log 50=\log 100-\log 2\approx 2-0{,}301$.

**Resposta:** $\log 50\approx 1{,}699$

**d)** $0{,}2=\dfrac{2}{10}$, per tant $\log 0{,}2=\log 2-\log 10\approx 0{,}301-1$.

**Resposta:** $\log 0{,}2\approx -0{,}699$

**e)** Per l'arrel, $\log\sqrt2=\dfrac12\log 2\approx\dfrac{0{,}301}{2}$.

**Resposta:** $\log\sqrt2\approx 0{,}1505$

**f)** $40=4\cdot 10$, per tant $\log 40=\log 4+\log 10\approx 0{,}602+1$.

**Resposta:** $\log 40\approx 1{,}602$

### Exercici 96

> **Enunciat.** Anomenem $L=\log_a x$. Expressa en funció de $L$ i simplifica al màxim: $\log_a x^2-\log_a \sqrt{x}+\log_a \dfrac{1}{x}$

Escrivim cada terme en funció de $L$:

- $\log_a x^2=2\log_a x=2L$ (potència).
- $\log_a\sqrt x=\dfrac12\log_a x=\dfrac12L$ (arrel).
- $\log_a\dfrac1x=\log_a x^{-1}=-\log_a x=-L$ (potència amb exponent $-1$).

Substituïm i sumem:

$$
2L-\frac12L+(-L)=\left(2-\frac12-1\right)L=\frac12L.
$$

**Resposta:** $\dfrac12L$

### Exercici 97

> **Enunciat.** Demostra, utilitzant el canvi de base, que per a qualsevol $a,b>0$ amb $a\neq1$ i $b\neq1$ es compleix $\log_a b \cdot \log_b a = 1$

Canviem a base $a$ el segon logaritme (propietat del canvi de base, $\log_b a=\dfrac{\log_a a}{\log_a b}$). Això és possible perquè $a\neq1$ i $b\neq1$, i $\log_a b\neq0$ (si $b\neq 1$).

Com que $\log_a a=1$:

$$
\log_b a=\frac{\log_a a}{\log_a b}=\frac{1}{\log_a b}.
$$

Per tant:

$$
\log_a b\cdot\log_b a=\log_a b\cdot\frac{1}{\log_a b}=1.
$$

**Resposta:** $\log_a b\cdot\log_b a=1$, que és el que volíem demostrar.

### Exercici 98

> **Enunciat.** Demostra que $\log_{a^2} x = \dfrac12 \log_a x$. *(Indicació: aplica el canvi de base a la base $a$.)*

Tenim $a>0$ i $a\neq1$, per tant $a^2>0$ i $a^2\neq1$, i el logaritme en base $a^2$ està ben definit.

Canviem a base $a$:

$$
\log_{a^2}x=\frac{\log_a x}{\log_a a^2}.
$$

Pel logaritme d'una potència i el de la base, $\log_a a^2=2\log_a a=2\cdot1=2$. Per tant:

$$
\log_{a^2}x=\frac{\log_a x}{2}=\frac12\log_a x.
$$

**Resposta:** $\log_{a^2}x=\dfrac12\log_a x$, que és el que volíem demostrar.

## 6.4 Aplicacions

### Exercici 99

> **Enunciat.** *(aplicat)* Un capital de $C_0=5\,000$ € s'inverteix a un interès compost anual del $4\%$. Quants anys calen, aproximadament, perquè el capital arribi a $C_f=7\,000$ €? *(Usa $C_f=C_0\left(1+i\right)^t$ i el logaritme per aïllar $t$.)*

L'interès és $i=4\%=0{,}04$. Substituïm a la fórmula:

$$
7000=5000\cdot 1{,}04^t.
$$

Aïllem la potència dividint entre $5000$:

$$
1{,}04^t=\frac{7000}{5000}=1{,}4.
$$

Per la definició de logaritme, $t=\log_{1{,}04}1{,}4$. Per calcular-lo a la calculadora, apliquem el canvi de base a la base neperiana:

$$
t=\frac{\ln 1{,}4}{\ln 1{,}04}\approx\frac{0{,}33647}{0{,}03922}\approx 8{,}58.
$$

Comprovem-ho: $1{,}04^{8}\approx1{,}369<1{,}4$ i $1{,}04^{9}\approx1{,}423>1{,}4$, així que el valor $t\approx 8{,}6$ és coherent (el capital supera els $7\,000$ € durant el novè any).

**Resposta:** calen uns $8{,}6$ anys (és a dir, el capital supera els $7\,000$ € al cap de $9$ anys complets).

### Exercici 100

> **Enunciat.** *(aplicat)* La magnitud $M$ d'un terratrèmol (escala de Richter) es relaciona amb l'energia alliberada $E$ mitjançant $M=\dfrac{2}{3}\log\left(\dfrac{E}{E_0}\right)$, amb $E_0$ constant. Si un terratrèmol allibera $1000$ vegades més energia que un altre ($E=1000\,E_1$), quant més gran és la seva magnitud $M$ respecte a $M_1$? *(Calcula $M-M_1$.)*

Escrivim les dues magnituds:

$$
M=\frac23\log\frac{E}{E_0},\qquad M_1=\frac23\log\frac{E_1}{E_0}.
$$

Les restem i traiem factor comú $\dfrac23$:

$$
M-M_1=\frac23\left(\log\frac{E}{E_0}-\log\frac{E_1}{E_0}\right).
$$

Per la propietat del quocient, la resta de logaritmes és el logaritme del quocient, i $E_0$ se simplifica:

$$
\log\frac{E}{E_0}-\log\frac{E_1}{E_0}=\log\left(\frac{E}{E_0}\cdot\frac{E_0}{E_1}\right)=\log\frac{E}{E_1}.
$$

Ara fem servir $E=1000\,E_1$, o sigui $\dfrac{E}{E_1}=1000=10^3$:

$$
M-M_1=\frac23\log 10^3=\frac23\cdot 3=2.
$$

**Resposta:** la magnitud és $2$ unitats més gran ($M-M_1=2$).
