# Equacions exponencials i logarítmiques

## Equacions exponencials

!!! abstract "Definició: equació exponencial"
    Una equació és **exponencial** si apareix alguna potència amb la incògnita a l'exponent.

Per resoldre una equació exponencial farem servir tres tècniques bàsiques, sovint combinades:

1. **Igualar les bases**, quan podem escriure els dos membres com a potències de la mateixa base.
2. **Aplicar la definició de logaritme**, quan no és possible igualar les bases.
3. **Fer un canvi de variable**, quan podem escriure tota l'equació en funció d'una potència $a^x$.

En tots els casos, cal tenir presents les propietats de les potències (com $a^{n+m} = a^n \cdot a^m$ o $(a^n)^m = a^{n\cdot m}$) per transformar les expressions que apareixen a l'equació.

### Igualació de bases

!!! tip "Propietat: igualació de potències"
    Si $a>0$ i $a\neq 1$, aleshores

    $$a^n = a^m \;\Leftrightarrow\; n=m.$$

!!! example "**Exemple:** Escrivim les bases com a potències de $2$"
    Resolem l'equació $4^{x+1} = 8^x$.

    1. Escrivim $4=2^2$ i $8=2^3$:

        $$\left(2^2\right)^{x+1} = \left(2^3\right)^x.$$

    2. Apliquem la propietat $(a^n)^m=a^{n\cdot m}$:

        $$2^{2x+2} = 2^{3x}.$$

    3. Apliquem la propietat d'igualació de potències:

        $$2x+2 = 3x \;\Rightarrow\; x=2.$$

    Comprovació: $4^{2+1}=4^3=64$ i $8^2=64$.

### Aplicació de la definició de logaritme

En algunes ocasions no és possible igualar les bases. En aquests casos, apliquem la definició de logaritme per aïllar l'exponent.

!!! tip "Propietat: de la potència al logaritme"
    Si $a>0$, $a\neq 1$ i $b>0$, aleshores

    $$a^{E(x)} = b \;\Leftrightarrow\; E(x) = \log_a b.$$

    Si $b\leq 0$, l'equació **no té solució**: una potència de base positiva sempre és positiva. Per exemple, $2^x=-4$ no té solució.

!!! example "**Exemple:** Resolució aplicant logaritmes"
    Resolem l'equació $2^{x+2} = 5$.

    1. Com que $5$ no és una potència clara de $2$, apliquem la definició de logaritme ($\log_a B = C \Leftrightarrow a^C = B$):

        $$x+2 = \log_2 5.$$

    2. Aïllem $x$:

        $$x = -2 + \log_2 5.$$

    3. *(Opcional)* Càlcul i comprovació numèrica. Amb la calculadora, $\log_2 5 = \dfrac{\log 5}{\log 2} \simeq 2{,}3219$:

        $$x \simeq -2 + 2{,}3219 \simeq 0{,}3219.$$

        Si substituïm a l'equació original:

        $$2^{0{,}3219+2} = 2^{2{,}3219} \simeq 4{,}9999\ldots \approx 5.$$

    La solució és $x = -2 + \log_2 5$.

### Canvi de variable

!!! tip "Tècnica: canvi de variable"
    Si, aplicant les propietats de les potències, podem escriure tots els termes de l'equació en funció de $a^x$ i de les seves potències ($a^x$, $(a^x)^2$, $(a^x)^3$…), fem el **canvi de variable** $t=a^x$. Obtenim una equació polinòmica en $t$, que ja sabem resoldre.

    Com que $t=a^x$ sempre és positiu, **descartem les solucions $t\leq 0$**. Després **desfem el canvi**, igualant bases o aplicant logaritmes.

!!! example "**Exemple:** Canvi de variable que porta a una equació de primer grau"
    Resolem l'equació $3^{x+1} + 3^{x+2} = 36$.

    1. Descomposem les potències usant les propietats:

        $$3^x \cdot 3 + 3^x \cdot 9 = 36.$$

    2. Fem el canvi $t=3^x$:

        $$3t + 9t = 36.$$

    3. Resolem l'equació en $t$:

        $$12t = 36 \;\Rightarrow\; t = 3.$$

    4. Desfem el canvi i apliquem la propietat d'igualació (ja que $3 = 3^1$):

        $$3^x = 3^1 \;\Rightarrow\; x=1.$$

    Fixa't que treure factor comú $3^x$, és a dir, escriure $3^x(3+9)=36$, és fer el mateix sense escriure la $t$.

!!! example "**Exemple:** Canvi de variable que porta a una equació de segon grau"
    Resolem l'equació $4^x - 5\cdot 2^x + 6 = 0$.

    1. Escrivim $4^x$ en funció de $2^x$:

        $$4^x = \left(2^2\right)^x = \left(2^x\right)^2.$$

    2. Fem el canvi $t=2^x$:

        $$t^2 - 5t + 6 = 0.$$

    3. Resolem l'equació de segon grau:

        $$
        \begin{aligned}
        t&=\frac{5\pm\sqrt{25-24}}{2}=\frac{5\pm 1}{2}\\
        &\Rightarrow\; t_1=3,\quad t_2=2
        \end{aligned}
        $$

        Tots dos valors són positius, així que no en descartem cap.

    4. Desfem el canvi:

        - $2^x = 2 \;\Rightarrow\; x=1$ (igualació de potències).
        - $2^x = 3 \;\Rightarrow\; x=\log_2 3 \simeq 1{,}585$ (definició de logaritme).

    Comprovació: per a $x=1$, $4-10+6=0$. Per a $x=\log_2 3$, tenim $2^x=3$ i $4^x=\left(2^x\right)^2=9$, i per tant $9-15+6=0$.

    Les solucions són $x=1$ i $x=\log_2 3$.

!!! note "Compte amb el signe de $t$"
    Si resolem $9^x - 2\cdot 3^x - 3 = 0$ amb el canvi $t=3^x$, obtenim $t^2-2t-3=0$, amb solucions $t=3$ i $t=-1$. Descartem $t=-1$, perquè $3^x$ no pot ser negatiu. Només queda $3^x=3$, és a dir, $x=1$.

!!! note "Quina tècnica faig servir?"
    1. Puc escriure els dos membres com a potències de la mateixa base? **Igualo els exponents.**
    2. Puc escriure tota l'equació en funció de $a^x$ i les seves potències? **Faig el canvi $t=a^x$.**
    3. Em queda $a^{E(x)}=b$ i $b$ no és una potència de $a$? **Aplico la definició de logaritme.**

## Equacions logarítmiques

!!! abstract "Definició: equació logarítmica"
    De forma semblant a les equacions exponencials, direm que una equació és **logarítmica** quan la incògnita apareix dins d'algun logaritme, ja sigui a la base o a l'argument.

!!! note "Comprovar les solucions"
    L'argument d'un logaritme **sempre ha de ser positiu**.

    És **obligatori comprovar** totes les solucions obtingudes sobre l'equació *inicial*, i descartar aquelles que facin que un argument sigui zero o negatiu.

Com abans, caldrà tenir en compte les propietats dels logaritmes per transformar l'equació en una expressió del tipus $\log_b M = \log_b N$. En aquest cas, podrem afirmar que $M=N$.

!!! example "**Exemple:** Agrupant termes"
    Resolem $\log x - \log 4 = \log(x-2)$.

    1. Apliquem la propietat de la resta de logaritmes:

        $$\log \frac{x}{4} = \log(x-2).$$

    2. Tenim una igualtat de logaritmes de la mateixa base, així que igualem els arguments:

        $$\frac{x}{4} = x-2.$$

    3. Resolem l'equació de primer grau resultant:

        $$x = 4(x-2) \;\Rightarrow\; x = 4x - 8,$$

        $$3x = 8 \;\Rightarrow\; x = \frac{8}{3}.$$

    4. **Comprovació.** Verifiquem que tots els arguments de l'equació original són positius:
        - $\log x \Rightarrow \log \tfrac{8}{3}$. Vàlid, $\tfrac{8}{3} > 0$.
        - $\log(x-2) \Rightarrow \log\left(\tfrac{8}{3} - 2\right) = \log \tfrac{2}{3}$. Vàlid, $\tfrac{2}{3} > 0$.

    Com que tots els arguments són positius, la solució $x=\tfrac{8}{3}$ **és vàlida**.

!!! example "**Exemple:** Llei de Hicks-Hyman"
    La llei de Hicks-Hyman descriu el temps de reacció ($T$) en funció del nombre d'opcions ($n$):

    $$T=a+b \cdot \log_2 n,$$

    on $a$ i $b$ són constants.

    Suposem $a=0{,}6\,\text{s}$ i $b=0{,}1\,\text{s}$. Volem saber quantes opcions $n$ calen per a un temps de reacció de $T=0{,}8\,\text{s}$.

    1. Substituïm els valors coneguts a l'equació:

        $$0{,}8 = 0{,}6 + 0{,}1 \cdot \log_2 n.$$

    2. Aïllem el logaritme:

        $$0{,}8 - 0{,}6 = 0{,}1 \cdot \log_2 n \;\Rightarrow\; 0{,}2 = 0{,}1 \cdot \log_2 n,$$

        $$\frac{0{,}2}{0{,}1} = \log_2 n \;\Rightarrow\; 2 = \log_2 n.$$

    3. Apliquem la definició de logaritme ($\log_a B = C \Leftrightarrow a^C = B$):

        $$n = 2^2 = 4.$$

    Per tant, per tenir un temps de reacció mitjà de $0{,}8$ segons calen $4$ opcions.

## Taula resum

| Tipus | Propietat clau | Fórmula |
| --- | --- | --- |
| Exponencial (bases iguals) | Igualació de potències | $a^n=a^m \Leftrightarrow n=m$ |
| Exponencial (bases diferents) | Definició de logaritme | $a^{x}=b \Leftrightarrow x=\log_a b$ |
| Exponencial (en funció de $a^x$) | Canvi de variable | $t=a^x$, amb $t>0$ |
| Logarítmica | Igualació d'arguments | $\log_a M=\log_a N \Leftrightarrow M=N$ |
