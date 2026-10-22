# Solucionari — Problemes en context

Resolució pas a pas dels exercicis 28–35 de [Exercicis i problemes](../exercicis.md).
Teoria: [Polinomis](../01_polinomis.md), [Factorització de polinomis](../02_factoritzacio.md), [Fraccions algebraiques](../03_fraccions_algebraiques.md).

### Exercici 28

> **Enunciat.** Un rectangle té una àrea de $x^3-x^2-4x+4$ i un dels costats fa $x-1$. Troba, factoritzant, l'expressió de l'altre costat i determina per a quins valors de $x$ totes dues longituds són positives.

L'àrea és el producte dels dos costats, així que l'altre costat és el quocient $\dfrac{x^3-x^2-4x+4}{x-1}$. Per trobar-lo, factoritzem l'àrea. Agrupem els termes de dos en dos i traiem factor comú:

$$
x^3-x^2-4x+4 = x^2(x-1)-4(x-1) = (x-1)(x^2-4)
$$

El segon factor és una diferència de quadrats: $x^2-4=(x-2)(x+2)$. Per tant, l'àrea és

$$
(x-1)(x-2)(x+2)
$$

i l'altre costat és $x^2-4=(x-2)(x+2)$. Ho comprovem multiplicant: $(x-1)(x^2-4)=x^3-4x-x^2+4$, que coincideix amb l'àrea.

Ara estudiem quan les dues longituds són positives:

- El costat $x-1$ és positiu si $x>1$.
- El costat $(x-2)(x+2)$ és positiu si els dos factors tenen el mateix signe: o bé $x>2$ (tots dos positius), o bé $x<-2$ (tots dos negatius).

Les dues condicions s'han de complir alhora. Com que $x<-2$ no compleix $x>1$, només ens queda $x>2$.

**Resposta:** l'altre costat fa $x^2-4=(x-2)(x+2)$, i les dues longituds són positives si $x>2$, és a dir, $x\in(2,\infty)$.

### Exercici 29

> **Enunciat.** Un dipòsit prismàtic té un volum $V(x)=x^3+2x^2-5x-6$. Si dues de les seves dimensions són $x+1$ i $x-2$, troba la tercera i determina per a quins valors de $x$ les tres dimensions són positives.

El volum és el producte de les tres dimensions; per tant, el volum ha de ser divisible per $(x+1)(x-2)$. Dividim amb Ruffini, primer per $x+1$ (arrel $x=-1$):

| | $1$ | $2$ | $-5$ | $-6$ |
|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $-1$ | $6$ |
| | $\textbf{1}$ | $\textbf{1}$ | $\textbf{-6}$ | $\boxed{0}$ |

El residu és $0$, així que $V(x)=(x+1)(x^2+x-6)$. Ara dividim el quocient per $x-2$ (arrel $x=2$):

| | $1$ | $1$ | $-6$ |
|:--:|:--:|:--:|:--:|
| $2$ | | $2$ | $6$ |
| | $\textbf{1}$ | $\textbf{3}$ | $\boxed{0}$ |

Així, $x^2+x-6=(x-2)(x+3)$ i

$$
V(x)=(x+1)(x-2)(x+3)
$$

La tercera dimensió és, doncs, $x+3$.

Imposem que les tres dimensions siguin positives:

$$
x+1>0 \Rightarrow x>-1 \qquad x-2>0 \Rightarrow x>2 \qquad x+3>0 \Rightarrow x>-3
$$

Han de complir-se les tres a la vegada, i la més restrictiva és $x>2$.

**Resposta:** la tercera dimensió és $x+3$, i les tres dimensions són positives si $x>2$, és a dir, $x\in(2,\infty)$.

### Exercici 30

> **Enunciat.** Simplifica $\dfrac{x^2-9}{x-3}$, indica el valor exclòs del domini original i avalua el resultat per a $x=5$.

El numerador és una diferència de quadrats: $x^2-9=(x-3)(x+3)$. Simplifiquem el factor comú $x-3$:

$$
\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3
$$

La fracció original no està definida quan el denominador val zero: $x-3=0\Rightarrow x=3$. Aquest valor continua exclòs encara que el factor $x-3$ hagi desaparegut en simplificar.

Per a $x=5$ (que sí que és del domini) substituïm en el resultat simplificat: $5+3=8$. Comprovem-ho amb l'expressió original: $\dfrac{25-9}{5-3}=\dfrac{16}{2}=8$.

**Resposta:** $\dfrac{x^2-9}{x-3}=x+3$ amb $x\neq3$, i per a $x=5$ val $8$.

### Exercici 31

> **Enunciat.** Factoritza i simplifica $\dfrac{x^3-4x}{x^2-x-2}$, i indica els valors exclosos del domini original.

Factoritzem el numerador: traiem factor comú $x$ i apliquem la diferència de quadrats.

$$
x^3-4x=x(x^2-4)=x(x-2)(x+2)
$$

Per al denominador, resolem $x^2-x-2=0$:

$$
x=\frac{1\pm\sqrt{1+8}}{2}=\frac{1\pm3}{2}\Rightarrow x=2,\ x=-1
$$

Per tant, $x^2-x-2=(x-2)(x+1)$. Substituïm i simplifiquem el factor $x-2$:

$$
\frac{x^3-4x}{x^2-x-2}=\frac{x(x-2)(x+2)}{(x-2)(x+1)}=\frac{x(x+2)}{x+1}
$$

Els valors exclosos són els que anul·len el denominador original, $(x-2)(x+1)=0$, és a dir, $x=2$ i $x=-1$. El valor $x=2$ continua exclòs encara que el seu factor s'hagi simplificat.

**Resposta:** $\dfrac{x^3-4x}{x^2-x-2}=\dfrac{x(x+2)}{x+1}$, amb $x\neq-1$ i $x\neq2$.

### Exercici 32

> **Enunciat.** Factoritza, simplifica i indica els valors de $x$ pels quals l'expressió original no està definida: $\dfrac{x^3-2x^2-3x}{x^2-9}$.

Al numerador traiem factor comú $x$ i factoritzem el trinomi $x^2-2x-3$, resolent $x^2-2x-3=0$:

$$
x=\frac{2\pm\sqrt{4+12}}{2}=\frac{2\pm4}{2}\Rightarrow x=3,\ x=-1
$$

Així,

$$
x^3-2x^2-3x=x(x^2-2x-3)=x(x-3)(x+1)
$$

El denominador és una diferència de quadrats: $x^2-9=(x-3)(x+3)$. Simplifiquem el factor $x-3$:

$$
\frac{x^3-2x^2-3x}{x^2-9}=\frac{x(x-3)(x+1)}{(x-3)(x+3)}=\frac{x(x+1)}{x+3}
$$

L'expressió original no està definida quan el denominador $(x-3)(x+3)$ s'anul·la, és a dir, per a $x=3$ i $x=-3$. Recordem que $x=3$ continua exclòs tot i haver simplificat el factor $x-3$.

**Resposta:** $\dfrac{x^3-2x^2-3x}{x^2-9}=\dfrac{x(x+1)}{x+3}$, i l'expressió original no està definida per a $x=3$ i $x=-3$.

### Exercici 33

> **Enunciat.** D'una làmina de cartró rectangular de $20\,\text{cm}\times12\,\text{cm}$ es retalla un quadrat de costat $x$ a cada cantonada i es doblega per formar una caixa sense tapa. Perquè la caixa es pugui construir, cal que $0<x<6$. · a) Expressa el volum $V(x)$ de la caixa com un polinomi. · b) Calcula el volum per a $x=2\,\text{cm}$.

**a)** Quan retallem un quadrat de costat $x$ a cada cantonada i doblegem, l'alçada de la caixa és $x$. A cada dimensió de la làmina perdem $x$ per cada banda, és a dir, $2x$ en total:

- llargada de la base: $20-2x$,
- amplada de la base: $12-2x$,
- alçada: $x$.

(La condició $0<x<6$ ve del fet que l'amplada ha de ser positiva: $12-2x>0\Rightarrow x<6$.) El volum és el producte de les tres dimensions:

$$
V(x)=x\,(20-2x)(12-2x)
$$

Multipliquem primer els dos parèntesis:

$$
(20-2x)(12-2x)=240-40x-24x+4x^2=4x^2-64x+240
$$

i després per $x$:

$$
V(x)=4x^3-64x^2+240x
$$

**Resposta:** $V(x)=4x^3-64x^2+240x$ (en $\text{cm}^3$, per a $0<x<6$).

**b)** Substituïm $x=2$ en el polinomi:

$$
V(2)=4\cdot8-64\cdot4+240\cdot2=32-256+480=256
$$

Ho comprovem amb les dimensions: $2\cdot(20-4)\cdot(12-4)=2\cdot16\cdot8=256$.

**Resposta:** el volum de la caixa és $256\,\text{cm}^3$.

### Exercici 34

> **Enunciat.** Una empresa estima que, en fabricar $x$ centenars d'unitats d'un producte, els ingressos (en milers d'€) són $I(x)=x^3-x^2-2x+8$ i els costos són $C(x)=x^2+3x+2$. · a) Calcula el benefici $B(x)=I(x)-C(x)$. · b) Factoritza $B(x)$ i troba els punts d'equilibri (valors de $x>0$ pels quals el benefici és nul). · c) Avalua $B(2)$ i interpreta el signe del resultat.

**a)** Restem els costos als ingressos, tenint cura dels signes del polinomi que restem:

$$
B(x)=(x^3-x^2-2x+8)-(x^2+3x+2)=x^3-2x^2-5x+6
$$

**Resposta:** $B(x)=x^3-2x^2-5x+6$ (en milers d'€).

**b)** Busquem arrels enteres entre els divisors del terme independent $6$. Provem $x=1$: $B(1)=1-2-5+6=0$, així que $x=1$ és arrel. Dividim per Ruffini:

| | $1$ | $-2$ | $-5$ | $6$ |
|:--:|:--:|:--:|:--:|:--:|
| $1$ | | $1$ | $-1$ | $-6$ |
| | $\textbf{1}$ | $\textbf{-1}$ | $\textbf{-6}$ | $\boxed{0}$ |

Ens queda $B(x)=(x-1)(x^2-x-6)$. Resolem $x^2-x-6=0$:

$$
x=\frac{1\pm\sqrt{1+24}}{2}=\frac{1\pm5}{2}\Rightarrow x=3,\ x=-2
$$

Per tant, $x^2-x-6=(x-3)(x+2)$ i

$$
B(x)=(x-1)(x-3)(x+2)
$$

El benefici és nul quan $x=1$, $x=3$ o $x=-2$. Com que $x$ representa centenars d'unitats fabricades, només té sentit $x>0$, i descartem $x=-2$.

**Resposta:** $B(x)=(x-1)(x-3)(x+2)$; els punts d'equilibri són $x=1$ i $x=3$, és a dir, quan es fabriquen $100$ o $300$ unitats.

**c)** Substituïm $x=2$ en la forma factoritzada:

$$
B(2)=(2-1)(2-3)(2+2)=1\cdot(-1)\cdot4=-4
$$

Coincideix amb el polinomi desenvolupat: $8-8-10+6=-4$. Com que $B$ està en milers d'€, el resultat negatiu vol dir que els costos superen els ingressos: l'empresa té pèrdues.

**Resposta:** $B(2)=-4$, és a dir, en fabricar $200$ unitats l'empresa perd $4\,000$ €.

### Exercici 35

> **Enunciat.** El nombre d'usuaris (en milers) d'una aplicació mòbil, $t$ mesos després del llançament, es modelitza per $N(t)=t^3-5t^2+2t+8$. · a) Calcula $N(5)$. · b) Factoritza $N(t)$ i indica per a quins valors de $t\geq0$ el model prediu zero usuaris.

**a)** Substituïm $t=5$:

$$
N(5)=125-125+10+8=18
$$

**Resposta:** $N(5)=18$, és a dir, $18\,000$ usuaris als $5$ mesos del llançament.

**b)** Busquem arrels enteres entre els divisors del terme independent $8$. Provem $t=-1$: $N(-1)=-1-5-2+8=0$, així que $t=-1$ és arrel. Dividim per Ruffini:

| | $1$ | $-5$ | $2$ | $8$ |
|:--:|:--:|:--:|:--:|:--:|
| $-1$ | | $-1$ | $6$ | $-8$ |
| | $\textbf{1}$ | $\textbf{-6}$ | $\textbf{8}$ | $\boxed{0}$ |

Ens queda $N(t)=(t+1)(t^2-6t+8)$. Resolem $t^2-6t+8=0$:

$$
t=\frac{6\pm\sqrt{36-32}}{2}=\frac{6\pm2}{2}\Rightarrow t=4,\ t=2
$$

Per tant,

$$
N(t)=(t+1)(t-2)(t-4)
$$

El model val zero per a $t=-1$, $t=2$ i $t=4$. Com que $t$ són mesos després del llançament, cal $t\geq0$ i descartem $t=-1$.

**Resposta:** $N(t)=(t+1)(t-2)(t-4)$, i el model prediu zero usuaris als $2$ i als $4$ mesos del llançament.
