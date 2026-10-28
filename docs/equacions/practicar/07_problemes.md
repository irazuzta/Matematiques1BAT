# Problemes

Exercicis 29–41. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

> En tots els problemes, comprova que les solucions obtingudes tenen sentit en el context.

### Exercici 29

Un rectangle té un perímetre de $34$ m i una diagonal de $13$ m. Quines dimensions té?

??? note "Mostra la solució"

    Anomenem $x$ la longitud d'un dels costats del rectangle, en metres. Com que el perímetre és $34$ m, la suma de dos costats contigus (la base i l'altura) és la meitat, $17$ m; per tant, l'altre costat mesura $17-x$ m.

    La diagonal i els dos costats formen un triangle rectangle en què la diagonal és la hipotenusa. Pel teorema de Pitàgores:

    $$
    x^2+(17-x)^2=13^2
    $$

    Desenvolupem el quadrat d'una diferència i ho passem tot a un membre:

    $$
    \begin{aligned}
    x^2+289-34x+x^2&=169\\
    2x^2-34x+120&=0\\
    x^2-17x+60&=0
    \end{aligned}
    $$

    (a l'última línia hem dividit per $2$). Amb $\Delta=(-17)^2-4\cdot 60=289-240=49$:

    $$
    x=\frac{17\pm\sqrt{49}}{2}=\frac{17\pm 7}{2} \;\Rightarrow\; x=12, \qquad x=5
    $$

    Les dues solucions són positives i menors que $17$, i donen el mateix rectangle: si $x=12$, l'altre costat fa $17-12=5$; si $x=5$, l'altre fa $17-5=12$. Comprovem-ho: $12^2+5^2=144+25=169=13^2$ i $2(12+5)=34$.

    **Resposta:** El rectangle fa $12$ m per $5$ m.

### Exercici 30

Un grup d'amics lloga una furgoneta per $360$ € i se'n reparteixen el cost a parts iguals. Si fossin tres amics més, cadascun pagaria $20$ € menys. Quants amics són?

??? note "Mostra la solució"

    Anomenem $x$ el nombre d'amics. Si es reparteixen $360$ € a parts iguals, cadascun paga $\dfrac{360}{x}$ €. Si fossin $x+3$ amics, cadascun pagaria $\dfrac{360}{x+3}$ €, que són $20$ € menys. Per tant, la diferència entre les dues quotes és $20$:

    $$
    \frac{360}{x}-\frac{360}{x+3}=20
    $$

    El denominador comú és $x(x+3)$. Multipliquem els dos membres per $x(x+3)$:

    $$
    \begin{aligned}
    360(x+3)-360x&=20x(x+3)\\
    360x+1080-360x&=20x^2+60x\\
    0&=20x^2+60x-1080\\
    0&=x^2+3x-54
    \end{aligned}
    $$

    (a l'última línia hem dividit per $20$). Amb $\Delta=3^2-4\cdot(-54)=9+216=225$:

    $$
    x=\frac{-3\pm\sqrt{225}}{2}=\frac{-3\pm 15}{2} \;\Rightarrow\; x=6, \qquad x=-9
    $$

    Cap de les dues anul·la un denominador, però $x=-9$ no té sentit: el nombre d'amics ha de ser un natural. Comprovem $x=6$: cadascun paga $\dfrac{360}{6}=60$ €; si fossin $9$, pagarien $\dfrac{360}{9}=40$ €, que són $20$ € menys.

    **Resposta:** Són $6$ amics (i cadascun paga $60$ €).

### Exercici 31

Dues aixetes juntes omplen un dipòsit en $6$ hores. La primera, sola, tarda $5$ hores més que la segona. Quant tarda cada aixeta a omplir el dipòsit sola?

??? note "Mostra la solució"

    Anomenem $x$ el temps, en hores, que tarda la segona aixeta a omplir el dipòsit sola. Aleshores la primera tarda $x+5$ hores.

    Pensem en la part del dipòsit que s'omple en $1$ hora. Si la segona aixeta l'omple sencer en $x$ hores, en $1$ hora n'omple $\dfrac{1}{x}$; la primera, en $1$ hora, n'omple $\dfrac{1}{x+5}$. Totes dues juntes l'omplen en $6$ hores, és a dir, en $1$ hora n'omplen $\dfrac16$. Com que, quan obrim les dues aixetes, els seus cabals se sumen:

    $$
    \frac{1}{x}+\frac{1}{x+5}=\frac{1}{6}
    $$

    El denominador comú és $6x(x+5)$. Multipliquem els dos membres per $6x(x+5)$:

    $$
    \begin{aligned}
    6(x+5)+6x&=x(x+5)\\
    12x+30&=x^2+5x\\
    0&=x^2-7x-30
    \end{aligned}
    $$

    Amb $\Delta=(-7)^2-4\cdot(-30)=49+120=169$:

    $$
    x=\frac{7\pm\sqrt{169}}{2}=\frac{7\pm 13}{2} \;\Rightarrow\; x=10, \qquad x=-3
    $$

    Cap de les dues anul·la un denominador, però $x=-3$ no té sentit, perquè un temps no pot ser negatiu. Per tant, $x=10$ i la primera aixeta tarda $10+5=15$ hores. Comprovem-ho: en $1$ hora omplen $\dfrac{1}{10}+\dfrac{1}{15}=\dfrac{3}{30}+\dfrac{2}{30}=\dfrac{5}{30}=\dfrac16$ del dipòsit.

    **Resposta:** La segona aixeta tarda $10$ hores i la primera, $15$ hores.

### Exercici 32

Un ciclista recorre $120$ km. Si anés $10$ km/h més ràpid, tardaria una hora menys. A quina velocitat va?

??? note "Mostra la solució"

    Anomenem $v$ la velocitat del ciclista, en km/h. Com que $\text{temps}=\dfrac{\text{distància}}{\text{velocitat}}$, ara tarda $\dfrac{120}{v}$ hores a fer els $120$ km; si anés a $v+10$ km/h, tardaria $\dfrac{120}{v+10}$ hores. Aquest segon temps és una hora menor, és a dir, la diferència entre els dos temps és $1$ hora:

    $$
    \frac{120}{v}-\frac{120}{v+10}=1
    $$

    El denominador comú és $v(v+10)$. Multipliquem els dos membres per $v(v+10)$:

    $$
    \begin{aligned}
    120(v+10)-120v&=v(v+10)\\
    120v+1200-120v&=v^2+10v\\
    0&=v^2+10v-1200
    \end{aligned}
    $$

    Amb $\Delta=10^2-4\cdot(-1200)=100+4800=4900$:

    $$
    v=\frac{-10\pm\sqrt{4900}}{2}=\frac{-10\pm 70}{2} \;\Rightarrow\; v=30, \qquad v=-40
    $$

    Cap de les dues anul·la un denominador, però $v=-40$ no té sentit, perquè la velocitat ha de ser positiva. Comprovem $v=30$: a $30$ km/h tarda $\dfrac{120}{30}=4$ h, i a $40$ km/h tardaria $\dfrac{120}{40}=3$ h, una hora menys.

    **Resposta:** El ciclista va a $30$ km/h.

### Exercici 33

La diagonal d'un rectangle fa $5$ cm i la seva àrea és de $12\ \text{cm}^2$. Calcula'n les dimensions.

??? note "Mostra la solució"

    Anomenem $x$ la longitud d'un dels costats, en centímetres. Com que l'àrea és $12\ \text{cm}^2$ i l'àrea és el producte dels dos costats, l'altre costat mesura $\dfrac{12}{x}$ cm.

    La diagonal és la hipotenusa del triangle rectangle que formen els dos costats. Pel teorema de Pitàgores:

    $$
    x^2+\left(\frac{12}{x}\right)^2=5^2 \;\Rightarrow\; x^2+\frac{144}{x^2}=25
    $$

    Multipliquem els dos membres per $x^2$ (que no és zero) i ho passem tot a un membre:

    $$
    x^4+144=25x^2 \;\Rightarrow\; x^4-25x^2+144=0
    $$

    És una equació biquadrada. Fem el canvi de variable $t=x^2$, de manera que $x^4=t^2$:

    $$
    t^2-25t+144=0
    $$

    Amb $\Delta=(-25)^2-4\cdot 144=625-576=49$:

    $$
    t=\frac{25\pm\sqrt{49}}{2}=\frac{25\pm 7}{2} \;\Rightarrow\; t=16, \qquad t=9
    $$

    Desfem el canvi $x^2=t$:

    $$
    x^2=16 \;\Rightarrow\; x=\pm 4, \qquad x^2=9 \;\Rightarrow\; x=\pm 3
    $$

    Les solucions negatives no tenen sentit, perquè $x$ és una longitud. Les dues positives donen el mateix rectangle: si $x=4$, l'altre costat fa $\dfrac{12}{4}=3$; si $x=3$, l'altre fa $\dfrac{12}{3}=4$. Comprovem-ho: $4\cdot 3=12$ i $4^2+3^2=16+9=25=5^2$.

    **Resposta:** El rectangle fa $4$ cm per $3$ cm.

### Exercici 34

*(més difícil)* D'una làmina quadrada de cartró de $12$ cm de costat retallem un quadrat de costat $x$ a cada cantonada i, doblegant les vores, formem una caixa sense tapa. Quant ha de valer $x$ perquè el volum de la caixa sigui de $128\ \text{cm}^3$?

??? note "Mostra la solució"

    Anomenem $x$ el costat, en centímetres, del quadrat que retallem a cada cantonada. En treure un quadrat de costat $x$ a cada extrem, cada costat de la làmina perd $2x$, i per tant la base de la caixa és un quadrat de costat $12-2x$. En doblegar les vores, l'altura de la caixa és $x$. Perquè la caixa existeixi cal $x>0$ i $12-2x>0$, és a dir, $0<x<6$.

    El volum és àrea de la base per altura:

    $$
    x(12-2x)^2=128
    $$

    Desenvolupem el quadrat i ho passem tot a un membre:

    $$
    \begin{aligned}
    x\left(144-48x+4x^2\right)&=128\\
    4x^3-48x^2+144x-128&=0\\
    x^3-12x^2+36x-32&=0
    \end{aligned}
    $$

    (a l'última línia hem dividit per $4$). Les possibles arrels enteres són els divisors de $32$. Provem $x=2$ per Ruffini:

    | | $1$ | $-12$ | $36$ | $-32$ |
    |:--:|:--:|:--:|:--:|:--:|
    | $2$ | | $2$ | $-20$ | $32$ |
    | | $\textbf{1}$ | $\textbf{-10}$ | $\textbf{16}$ | $\boxed{0}$ |

    El residu és $0$, per tant $x=2$ és arrel i el quocient és $x^2-10x+16$. Tornem a provar $x=2$ amb aquest quocient:

    | | $1$ | $-10$ | $16$ |
    |:--:|:--:|:--:|:--:|
    | $2$ | | $2$ | $-16$ |
    | | $\textbf{1}$ | $\textbf{-8}$ | $\boxed{0}$ |

    Torna a sortir residu $0$: $x=2$ és una arrel doble i l'últim quocient és $x-8$. Per tant:

    $$
    x^3-12x^2+36x-32=(x-2)^2(x-8)=0 \;\Rightarrow\; x=2 \text{ (doble)}, \qquad x=8
    $$

    La solució $x=8$ no té sentit: el costat de la base seria $12-2\cdot 8=-4$, negatiu (no podem retallar dos quadrats de $8$ cm d'una làmina de $12$ cm). Algebraicament compleix l'equació perquè $(-4)^2=16$ i $8\cdot 16=128$, però no correspon a cap caixa. Comprovem $x=2$: la base fa $12-4=8$ cm de costat i el volum és $8^2\cdot 2=128\ \text{cm}^3$.

    **Resposta:** Hem de retallar quadrats de $x=2$ cm de costat (la caixa fa $8$ cm per $8$ cm de base i $2$ cm d'altura).

### Exercici 35

El període d'un pèndol (el temps que tarda a fer una oscil·lació completa) és $T=2\pi\sqrt{\dfrac{L}{g}}$, amb $L$ en metres, $T$ en segons i $g=9{,}8\ \text{m/s}^2$.

- **a)** Quin és el període d'un pèndol d'$1$ m de longitud?
- **b)** Quina longitud ha de tenir un pèndol perquè el seu període sigui de $3$ s?

??? note "Mostra la solució"

    **a)** Substituïm $L=1$ i $g=9{,}8$ a la fórmula:

    $$
    T=2\pi\sqrt{\frac{1}{9{,}8}}\approx 2\pi\cdot 0{,}3194\approx 2{,}01
    $$

    **Resposta:** El període d'un pèndol d'$1$ m és d'uns $2{,}01$ s.

    **b)** Anomenem $L$ la longitud del pèndol, en metres. Volem que $T=3$:

    $$
    3=2\pi\sqrt{\frac{L}{9{,}8}}
    $$

    És una equació irracional. Aïllem l'arrel dividint per $2\pi$ i elevem els dos membres al quadrat:

    $$
    \begin{aligned}
    \sqrt{\frac{L}{9{,}8}}&=\frac{3}{2\pi}\\
    \frac{L}{9{,}8}&=\frac{9}{4\pi^2}\\
    L&=\frac{9{,}8\cdot 9}{4\pi^2}=\frac{88{,}2}{4\pi^2}\approx 2{,}23
    \end{aligned}
    $$

    Comprovem-ho a l'equació original: $2\pi\sqrt{\dfrac{2{,}234}{9{,}8}}\approx 2\pi\cdot 0{,}4775\approx 3{,}00$. És vàlida (els dos membres d'abans d'elevar al quadrat eren positius, de manera que no apareix cap solució falsa).

    **Resposta:** El pèndol ha de fer uns $2{,}23$ m de longitud.

### Exercici 36

Una població de bacteris es duplica cada $3$ hores. Si inicialment n'hi ha $500$, el nombre de bacteris al cap de $t$ hores és $N(t)=500\cdot 2^{t/3}$. Quant de temps ha de passar perquè n'hi hagi $64\,000$?

??? note "Mostra la solució"

    Anomenem $t$ el temps, en hores, que ha de passar. Volem que $N(t)=64\,000$:

    $$
    500\cdot 2^{t/3}=64\,000
    $$

    Dividim per $500$ i escrivim el resultat com a potència de $2$:

    $$
    2^{t/3}=\frac{64\,000}{500}=128=2^7
    $$

    Per la propietat d'igualació de potències (mateixa base $2$), els exponents han de ser iguals:

    $$
    \frac{t}{3}=7 \;\Rightarrow\; t=21
    $$

    Comprovem-ho: $500\cdot 2^{21/3}=500\cdot 2^7=500\cdot 128=64\,000$. També ho podem veure així: $21$ hores són $7$ períodes de $3$ hores, i $500$ duplicat $7$ vegades dona $64\,000$.

    **Resposta:** Han de passar $21$ hores.

### Exercici 37

Un capital $C$ col·locat a interès compost del $r\,\%$ anual es converteix, al cap de $t$ anys, en $C_t=C\left(1+\dfrac{r}{100}\right)^{t}$.

- **a)** Demostra que el temps que tarda a duplicar-se no depèn de $C$ i troba'n una fórmula en funció de $r$.
- **b)** Quant de temps tarda a duplicar-se al $3\,\%$? I al $6\,\%$?

??? note "Mostra la solució"

    **a)** Anomenem $t$ el temps, en anys, que tarda el capital a duplicar-se. Duplicar-se vol dir que $C_t=2C$:

    $$
    C\left(1+\frac{r}{100}\right)^{t}=2C
    $$

    Com que $C\neq 0$, podem dividir els dos membres per $C$. El capital desapareix de l'equació, i per això el temps de duplicació no depèn de $C$:

    $$
    \left(1+\frac{r}{100}\right)^{t}=2
    $$

    La incògnita és a l'exponent i no podem escriure els dos membres com a potències de la mateixa base. Prenem logaritmes decimals als dos membres i apliquem la propietat del logaritme d'una potència, $\log M^n=n\log M$:

    $$
    \begin{aligned}
    \log\left(1+\frac{r}{100}\right)^{t}&=\log 2\\
    t\cdot\log\left(1+\frac{r}{100}\right)&=\log 2\\
    t&=\frac{\log 2}{\log\left(1+\frac{r}{100}\right)}
    \end{aligned}
    $$

    Podem dividir perquè, si $r>0$, tenim $1+\dfrac{r}{100}>1$ i, per tant, $\log\left(1+\dfrac{r}{100}\right)>0$.

    **Resposta:** El temps de duplicació és $t=\dfrac{\log 2}{\log\left(1+\dfrac{r}{100}\right)}$ anys, que només depèn de $r$ (no de $C$).

    **b)** Substituïm a la fórmula de l'apartat anterior. Al $3\,\%$, $r=3$:

    $$
    t=\frac{\log 2}{\log 1{,}03}\approx\frac{0{,}30103}{0{,}012837}\approx 23{,}45
    $$

    Al $6\,\%$, $r=6$:

    $$
    t=\frac{\log 2}{\log 1{,}06}\approx\frac{0{,}30103}{0{,}025306}\approx 11{,}90
    $$

    Si els interessos només s'abonen al final de cada any, en la pràctica el capital es duplica al cap de $24$ i de $12$ anys complets, respectivament. Observem que, en doblar el tipus d'interès, el temps de duplicació gairebé es redueix a la meitat (però no exactament: $23{,}45:2\approx 11{,}72$).

    **Resposta:** Al $3\,\%$ el capital tarda uns $23{,}45$ anys a duplicar-se, i al $6\,\%$, uns $11{,}90$ anys.

### Exercici 38

El cesi-137 té un període de semidesintegració de $30$ anys: cada $30$ anys, la quantitat que en queda es redueix a la meitat. Quant de temps ha de passar perquè en quedi només el $10\,\%$ de la quantitat inicial?

??? note "Mostra la solució"

    Anomenem $t$ el temps, en anys, i $Q_0$ la quantitat inicial de cesi-137. Cada $30$ anys la quantitat es multiplica per $\dfrac12$; al cap de $t$ anys han passat $\dfrac{t}{30}$ períodes, de manera que en queda:

    $$
    Q(t)=Q_0\cdot\left(\frac12\right)^{t/30}
    $$

    Volem que en quedi el $10\,\%$, és a dir, $0{,}1\,Q_0$:

    $$
    Q_0\cdot\left(\frac12\right)^{t/30}=0{,}1\,Q_0 \;\Rightarrow\; \left(\frac12\right)^{t/30}=0{,}1
    $$

    (hem dividit per $Q_0$, que no és zero; el resultat no depèn de la quantitat inicial). Prenem logaritmes decimals i apliquem la propietat del logaritme d'una potència:

    $$
    \frac{t}{30}\cdot\log\frac12=\log 0{,}1
    $$

    Ara, $\log 0{,}1=\log 10^{-1}=-1$ i, per la propietat del quocient, $\log\dfrac12=\log 1-\log 2=-\log 2$. Per tant:

    $$
    \begin{aligned}
    \frac{t}{30}\cdot(-\log 2)&=-1\\
    \frac{t}{30}&=\frac{1}{\log 2}\\
    t&=\frac{30}{\log 2}\approx\frac{30}{0{,}3010}\approx 99{,}66
    \end{aligned}
    $$

    Comprovem-ho: $\left(\dfrac12\right)^{99{,}66/30}=\left(\dfrac12\right)^{3{,}322}\approx 0{,}1$. És raonable: després de $90$ anys (tres períodes) en queda $\dfrac18=12{,}5\,\%$, i després de $120$ anys, $\dfrac{1}{16}\approx 6{,}25\,\%$.

    **Resposta:** Han de passar uns $99{,}66$ anys (gairebé un segle).

### Exercici 39

El nivell sonor, en decibels, d'un so d'intensitat $I$ és $L=10\log\dfrac{I}{I_0}$, on $I_0$ és la intensitat mínima audible.

- **a)** Un concert fa $110$ dB i una conversa, $60$ dB. Quantes vegades més intens és el so del concert?
- **b)** Si dupliquem la intensitat d'un so, quants decibels augmenta el nivell sonor?

??? note "Mostra la solució"

    **a)** Anomenem $I_1$ la intensitat del concert i $I_2$ la de la conversa. Apliquem la fórmula a cada so:

    $$
    110=10\log\frac{I_1}{I_0}, \qquad 60=10\log\frac{I_2}{I_0}
    $$

    Restem les dues igualtats i apliquem la propietat del logaritme d'un quocient, $\log M-\log N=\log\dfrac{M}{N}$ (la $I_0$ se simplifica):

    $$
    \begin{aligned}
    110-60&=10\left(\log\frac{I_1}{I_0}-\log\frac{I_2}{I_0}\right)\\
    50&=10\log\frac{I_1/I_0}{I_2/I_0}=10\log\frac{I_1}{I_2}\\
    \log\frac{I_1}{I_2}&=5
    \end{aligned}
    $$

    Per la definició de logaritme (decimal), $\log A=5 \Leftrightarrow A=10^5$:

    $$
    \frac{I_1}{I_2}=10^5=100\,000
    $$

    **Resposta:** El so del concert és $100\,000$ vegades més intens que el de la conversa.

    **b)** Anomenem $I$ la intensitat inicial; el seu nivell és $L=10\log\dfrac{I}{I_0}$. Si dupliquem la intensitat, el nou nivell és:

    $$
    L'=10\log\frac{2I}{I_0}
    $$

    Apliquem la propietat del logaritme d'un producte, $\log(M\cdot N)=\log M+\log N$:

    $$
    L'=10\left(\log 2+\log\frac{I}{I_0}\right)=10\log 2+10\log\frac{I}{I_0}=10\log 2+L
    $$

    Per tant, l'augment és $L'-L=10\log 2\approx 10\cdot 0{,}3010\approx 3{,}01$ dB, sigui quin sigui el nivell inicial.

    **Resposta:** El nivell sonor augmenta $10\log 2\approx 3{,}01$ dB.

### Exercici 40

La magnitud $M$ d'un terratrèmol a l'escala de Richter és $M=\log\dfrac{A}{A_0}$, on $A$ és l'amplitud de les ones que registra el sismògraf i $A_0$ és una amplitud de referència. A més, l'energia $E$ alliberada (en joules) compleix $\log E=4{,}8+1{,}5M$.

- **a)** Quantes vegades més gran és l'amplitud d'un terratrèmol de magnitud $7$ que la d'un de magnitud $5$?
- **b)** Quantes vegades més energia allibera el de magnitud $7$ que el de magnitud $5$?
- **c)** Quina magnitud té un terratrèmol que allibera $1000$ vegades més energia que un de magnitud $4$?

??? note "Mostra la solució"

    **a)** Anomenem $A_1$ l'amplitud del terratrèmol de magnitud $7$ i $A_2$ la del de magnitud $5$. Volem calcular el quocient $\dfrac{A_1}{A_2}$. Escrivim la fórmula per a cadascun:

    $$
    7=\log\frac{A_1}{A_0}, \qquad 5=\log\frac{A_2}{A_0}
    $$

    Restem les dues igualtats i apliquem la propietat del logaritme d'un quocient, $\log M-\log N=\log\dfrac{M}{N}$ (la $A_0$ se simplifica):

    $$
    \begin{aligned}
    7-5&=\log\frac{A_1}{A_0}-\log\frac{A_2}{A_0}\\
    2&=\log\frac{A_1/A_0}{A_2/A_0}=\log\frac{A_1}{A_2}
    \end{aligned}
    $$

    Per la definició de logaritme decimal, $\log X=2 \Leftrightarrow X=10^2$:

    $$
    \frac{A_1}{A_2}=10^2=100
    $$

    **Resposta:** L'amplitud del terratrèmol de magnitud $7$ és $100$ vegades més gran que la del de magnitud $5$.

    **b)** Anomenem $E_1$ i $E_2$ les energies alliberades pels terratrèmols de magnitud $7$ i $5$. Escrivim la segona fórmula per a cadascun:

    $$
    \log E_1=4{,}8+1{,}5\cdot 7, \qquad \log E_2=4{,}8+1{,}5\cdot 5
    $$

    Restem les dues igualtats (el $4{,}8$ se simplifica) i apliquem la propietat del logaritme d'un quocient:

    $$
    \begin{aligned}
    \log E_1-\log E_2&=1{,}5\cdot(7-5)=3\\
    \log\frac{E_1}{E_2}&=3\\
    \frac{E_1}{E_2}&=10^3=1000
    \end{aligned}
    $$

    **Resposta:** El terratrèmol de magnitud $7$ allibera $1000$ vegades més energia que el de magnitud $5$.

    **c)** Anomenem $M$ la magnitud buscada, $E$ l'energia que allibera i $E_4$ la que allibera un terratrèmol de magnitud $4$. Sabem que $\dfrac{E}{E_4}=1000$. Com a l'apartat anterior, restem les dues igualtats:

    $$
    \log E-\log E_4=(4{,}8+1{,}5M)-(4{,}8+1{,}5\cdot 4)=1{,}5(M-4)
    $$

    D'altra banda, per la propietat del quocient, $\log E-\log E_4=\log\dfrac{E}{E_4}=\log 1000=3$. Igualem i resolem l'equació de primer grau:

    $$
    \begin{aligned}
    1{,}5(M-4)&=3\\
    M-4&=2\\
    M&=6
    \end{aligned}
    $$

    Comprovem-ho: $\log E-\log E_4=1{,}5\cdot(6-4)=3$, és a dir, $\dfrac{E}{E_4}=10^3=1000$.

    **Resposta:** El terratrèmol té magnitud $6$.

### Exercici 41

La pressió atmosfèrica disminueix amb l'altitud segons $p(h)=p_0\,e^{-kh}$, on $p_0=1013$ hPa és la pressió al nivell del mar, $h$ és l'altitud en metres i $k=1{,}2\cdot 10^{-4}\ \text{m}^{-1}$. Un altímetre baromètric mesura la pressió i en dedueix l'altitud.

- **a)** Quina pressió hi ha al cim de l'Aneto ($3404$ m)?
- **b)** Aïlla $h$ en funció de $p$ (deixa-ho en funció de $p_0$ i $k$).
- **c)** Si l'altímetre mesura una pressió de $700$ hPa, a quina altitud som?

??? note "Mostra la solució"

    **a)** Substituïm $p_0=1013$, $k=1{,}2\cdot 10^{-4}$ i $h=3404$. Primer calculem l'exponent:

    $$
    k\cdot h=1{,}2\cdot 10^{-4}\cdot 3404=0{,}40848
    $$

    i aleshores:

    $$
    p(3404)=1013\cdot e^{-0{,}40848}\approx 1013\cdot 0{,}6647\approx 673{,}3
    $$

    **Resposta:** Al cim de l'Aneto la pressió és d'uns $673{,}3$ hPa.

    **b)** Partim de $p=p_0\,e^{-kh}$ i volem aïllar $h$. Primer aïllem la potència dividint per $p_0$:

    $$
    \frac{p}{p_0}=e^{-kh}
    $$

    La incògnita és a l'exponent d'una potència de base $e$, així que prenem logaritmes neperians als dos membres. Com que $\ln e^{x}=x$ (el logaritme i la potència de la mateixa base es compensen):

    $$
    \ln\frac{p}{p_0}=-kh
    $$

    Dividim per $-k$ (que no és zero) i apliquem la propietat del logaritme d'un quocient, $-\ln\dfrac{p}{p_0}=-(\ln p-\ln p_0)=\ln p_0-\ln p=\ln\dfrac{p_0}{p}$:

    $$
    h=-\frac{1}{k}\ln\frac{p}{p_0}=\frac{1}{k}\ln\frac{p_0}{p}
    $$

    Té sentit: si som per sobre del nivell del mar, $p<p_0$, aleshores $\dfrac{p_0}{p}>1$, el logaritme és positiu i $h>0$.

    **Resposta:** $h=\dfrac{1}{k}\ln\dfrac{p_0}{p}$

    **c)** Substituïm $p=700$, $p_0=1013$ i $k=1{,}2\cdot 10^{-4}$ a la fórmula de l'apartat b):

    $$
    h=\frac{1}{1{,}2\cdot 10^{-4}}\ln\frac{1013}{700}\approx\frac{\ln 1{,}4471}{0{,}00012}\approx\frac{0{,}36959}{0{,}00012}\approx 3080
    $$

    Comprovem-ho: $1013\cdot e^{-1{,}2\cdot 10^{-4}\cdot 3080}=1013\cdot e^{-0{,}3696}\approx 700$ hPa. És coherent amb l'apartat a): la pressió és una mica més alta que al cim de l'Aneto, i per tant som una mica més avall.

    **Resposta:** Som a una altitud d'uns $3080$ m.
