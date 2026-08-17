# Logaritmes

## Definició

Quan treballem amb potències, sovint ens interessa calcular quin és l'exponent que cal aplicar a una base determinada per obtenir un resultat donat. Per exemple, si sabem que $a^n = b$, el que volem trobar és el valor de l'exponent $n$ a partir de $a$ i $b$.

!!! abstract "Definició: logaritme"
    Siguin $a$ i $b$ dos nombres reals amb $a>0$, $a \neq 1$ i $b>0$. Es defineix el **logaritme en base $a$ de $b$** com el nombre real $n$ tal que

    $$
    \log_a b = n
    \quad \Leftrightarrow \quad
    a^n = b.
    $$

!!! note "Condicions de definició"
    El logaritme només està definit quan $a>0$, $a\neq 1$ i $b>0$.

    No té sentit parlar de $\log_2 0$, ja que cap exponent $n$ compleix $2^n=0$.

    Tampoc podem definir $\log_{-3} 9$ dins dels reals. És cert que $(-3)^2=9$, però la funció $n \mapsto (-3)^n$ no està ben definida per a tots els reals (per exemple, què vol dir $(-3)^{1/2}$?). Per aquest motiu, la definició de logaritme exigeix una base positiva.

!!! note "Una mica d'història"
    El terme *logaritme* prové del grec: *logos* (raó, proporció) i *arithmos* (nombre). Va ser encunyat per **John Napier** (1550–1617), matemàtic escocès, al seu llibre *Mirifici Logarithmorum Canonis Descriptio* (1614), on va introduir per primer cop els logaritmes, amb l'objectiu de facilitar càlculs de multiplicacions i divisions transformant-los en sumes i restes.

De fet, potències, arrels i logaritmes són el mateix problema plantejat de maneres diferents, a partir de la relació $a^n=b$:

![Relació entre potència, arrel i logaritme](img/triangle-potencia-arrel-log.png)

Per aquest motiu, les propietats tant d'arrels com de logaritmes no són més que reformulacions de les propietats que ja coneixíem de les potències.

!!! example "Triple equivalència amb nombres concrets"
    Considerem la potència $2^3=8$. Aquesta relació es pot expressar de tres formes equivalents:

    $$
    2^3 = 8
    \quad \Leftrightarrow \quad
    \sqrt[3]{8}=2
    \quad \Leftrightarrow \quad
    \log_2 8=3.
    $$

### Casos especials de logaritmes

Hi ha dos casos de logaritmes que tenen nom i notació especial, ja que s'utilitzen molt sovint:

!!! note "El nombre $e$"
    El nombre $e$ és una constant irracional, aproximadament $e \approx 2{,}718281828459045\ldots$. Té un paper fonamental en matemàtiques: apareix de manera natural en el càlcul de límits, derivades i creixements continus. El seu nom com a *logaritme neperià* prové de John Napier.

- **Logaritme decimal.** El logaritme en base $10$ s'anomena **logaritme decimal**. Quan fem servir aquesta base, no cal especificar-la: $\log_{10} x = \log x$. Així, el *logaritme decimal de $x$* l'escriurem simplement com $\log x$.
- **Logaritme neperià.** El logaritme en base $e$ s'anomena **logaritme neperià**. La notació que utilitzarem és $\ln x$: $\log_e x = \ln x$.

## Propietats i exemples

Els logaritmes presenten les següents propietats:

!!! tip "Propietat: logaritme de $1$"
    Sigui $a$ una base amb $a>0$ i $a\neq 1$. Aleshores $\log_a 1=0$.

    *Justificació:* per definició, $\log_a 1=n \Leftrightarrow a^{n}=1$. Com que $a\neq 1$ i $a>0$, l'únic exponent real que compleix $a^{n}=1$ és $n=0$.

!!! note "Atenció amb $\log_1 1$"
    No està definit el logaritme en base $1$: $\log_1 1$ voldria dir trobar $n$ tal que $1^n=1$, però això és cert per a tot $n\in\mathbb{R}$, i per tant no hi ha un exponent únic. Això reforça la condició que la base no pot ser $1$.

!!! example
    $$\log_2 1=0 \qquad\text{ja que}\qquad 2^{0}=1.$$

!!! tip "Propietat: logaritme de la base"
    Sigui $a$ una base amb $a>0$ i $a\neq 1$. Aleshores $\log_a a = 1$.

    *Justificació:* per definició, $\log_a a=n \Leftrightarrow a^n=a$, i l'únic exponent real que compleix aquesta relació és $n=1$.

!!! example
    $$\log_2 2=1 \qquad\text{ja que}\qquad 2^{1}=2.$$

!!! tip "Propietat: logaritme del producte"
    Sigui $a$ una base amb $a>0$ i $a\neq 1$, i siguin $M,N>0$. Aleshores

    $$\log_a (M \cdot N) \;=\; \log_a M + \log_a N.$$

    *Justificació:* si $\log_a M=m$ i $\log_a N=n$, per definició $a^m = M$ i $a^n = N$. Llavors $M \cdot N = a^m \cdot a^n = a^{m+n}$, i per tant $\log_a(M \cdot N) = m+n = \log_a M + \log_a N$.

!!! example
    $$
    \log_2 6
    = \log_2 (2 \cdot 3)
    = \log_2 2 + \log_2 3
    = 1 + \log_2 3.
    $$

!!! tip "Propietat: logaritme del quocient"
    Sigui $a$ una base amb $a>0$ i $a\neq 1$, i siguin $M,N>0$. Aleshores

    $$\log_a \tfrac{M}{N} \;=\; \log_a M - \log_a N.$$

    *Justificació:* si $\log_a M=m$ i $\log_a N=n$, aleshores $M=a^m$ i $N=a^n$, de manera que $\tfrac{M}{N} = \tfrac{a^m}{a^n} = a^{m-n}$.

!!! example
    $$
    \log_2 3
    = \log_2 \tfrac{6}{2}
    = \log_2 6 - \log_2 2
    = \log_2 6 - 1.
    $$

!!! tip "Propietat: logaritme d'una potència"
    Sigui $a$ una base amb $a>0$ i $a\neq 1$, i sigui $M>0$. Per a qualsevol $n\in\mathbb{R}$,

    $$\log_a (M^n) \;=\; n \cdot \log_a M.$$

    *Justificació:* si $\log_a M=m$, aleshores $M=a^m$, per tant $M^n = (a^m)^n = a^{n \cdot m}$.

!!! example
    Aquesta propietat permet calcular de manera senzilla logaritmes de potències:

    $$
    \log_2 32 = \log_2 2^5 = 5 \cdot \log_2 2 = 5 \cdot 1 = 5.
    $$

!!! tip "Propietat: logaritme d'una arrel"
    Sigui $a$ una base amb $a>0$ i $a\neq 1$, i sigui $M>0$. Per a qualsevol $n\in\mathbb{N}$, $n>0$,

    $$\log_a \sqrt[n]{M} \;=\; \tfrac{1}{n} \cdot \log_a M.$$

    *Justificació:* $\sqrt[n]{M} = M^{1/n}$; aplicant la propietat del logaritme de la potència, $\log_a M^{1/n} = \tfrac{1}{n}\,\log_a M$.

!!! example
    $$
    \log_2 \sqrt{8}
    = \tfrac{1}{2}\,\log_2 8
    = \tfrac{1}{2}\,\log_2 2^3
    = \tfrac{1}{2}\cdot 3 \cdot \log_2 2
    = 1{,}5.
    $$

!!! tip "Propietat: canvi de base"
    Siguin $a,b,M>0$ amb $a\neq 1$ i $b\neq 1$. Aleshores

    $$\log_a M = \frac{\log_b M}{\log_b a}.$$

    *Justificació:* si $\log_a M=n$, tenim $a^n=M$. Prenent logaritmes en base $b$ a tots dos costats: $\log_b a^n = \log_b M$, i aplicant la propietat de la potència, $n\cdot \log_b a = \log_b M$, d'on $n = \dfrac{\log_b M}{\log_b a}$.

!!! example
    Expressem $\log_2 100$ en funció de logaritmes decimals i neperians:

    - En base $10$: $\log_2 100 = \dfrac{\log 100}{\log 2} = \dfrac{\log 10^2}{\log 2} = \dfrac{2\cdot \log 10}{\log 2} = \dfrac{2}{\log 2}$ (recordem que $\log 10 = 1$, ja que és el logaritme decimal).
    - En base $e$: $\log_2 100 = \dfrac{\ln 100}{\ln 2} = \dfrac{\ln 10^2}{\ln 2} = \dfrac{2\cdot \ln 10}{\ln 2}.$

## Exemples d'aplicació

Per acabar aquest apartat, veurem dos exemples reals en què els logaritmes apareixen de manera natural: l'interès compost i l'equació de Hill en farmacologia.

!!! example "Interès compost"
    L'interès compost és l'interès obtingut per un cert capital inicial $C_0$ a un interès $i$ (en tant per cent), on després de cada període els interessos s'acumulen al capital inicial per generar nous interessos. El capital final $C_f$ al cap d'un temps $t$ ve donat per

    $$C_f = C_0 \left( 1 + \tfrac{i}{100}\right)^t,$$

    si la recapitalització és anual i $t$ s'expressa en anys.

    Suposem un capital inicial de $7.000$ € a un interès compost anual del $2{,}5\%$. Volem saber quants anys, aproximadament, cal esperar per obtenir un capital de $7.354$ €.

    $$
    7354 = 7000 \cdot 1{,}025^t
    \quad\Rightarrow\quad
    \frac{7354}{7000} = 1{,}025^t
    $$

    Aplicant la definició de logaritme i, després, el canvi de base amb el logaritme neperià:

    $$
    t = \log_{1{,}025}\frac{7354}{7000}
    = \frac{\ln \frac{7354}{7000}}{\ln 1{,}025}.
    $$

    Calculem pas a pas:

    $$
    \frac{7354}{7000} \approx 1{,}050571,
    \qquad
    \ln 1{,}050571 \approx 0{,}049316,
    \qquad
    \ln 1{,}025 \approx 0{,}024692.
    $$

    Per tant, $\dfrac{0{,}049316}{0{,}024692} \approx 1{,}998$. Expressant el resultat en anys i aproximant a un enter:

    $$t \approx 1{,}998 \;\text{anys} \;\approx\; 2 \text{ anys}.$$

!!! example "Equació de Hill"
    En farmacologia, per descriure la relació entre la concentració d'un fàrmac i la seva resposta biològica s'utilitza l'**equació de Hill**:

    $$E = E_{max} \cdot \frac{D^n}{K_D^n+D^n},$$

    on $E$ és l'efecte observat, $E_{max}$ l'efecte màxim, $D$ la concentració del fàrmac, $K_D$ la concentració a la qual s'assoleix la meitat de l'efecte màxim, i $n$ el coeficient de Hill.

    Volem calcular el coeficient de Hill $n$ a partir de les dades següents: $E_{max}=90\%$, $K_D=60$, i per a $D=90$ s'obté $E=80\%$. Substituïm a la fórmula:

    $$80 = 90 \cdot \frac{90^n}{60^n+90^n}.$$

    Simplificant:

    $$
    \frac{8}{9}(60^n+90^n)=90^n
    \quad\Rightarrow\quad
    8 \cdot 60^n = 90^n.
    $$

    Dividint entre $60^n$ (propietat del quocient de potències):

    $$
    \Bigl(\frac{90}{60}\Bigr)^n = 8
    \quad\Rightarrow\quad
    \Bigl(\frac{3}{2}\Bigr)^n = 8.
    $$

    Aplicant la definició de logaritme i el canvi de base:

    $$
    n = \log_{3/2} 8
    = \frac{\ln 8}{\ln \frac{3}{2}}
    \;\simeq\; 5{,}13.
    $$
