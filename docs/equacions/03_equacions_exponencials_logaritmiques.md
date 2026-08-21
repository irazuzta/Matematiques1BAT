# Equacions exponencials i logarítmiques

## Equacions exponencials

!!! abstract "Definició: equació exponencial"
    Una equació és **exponencial** si apareix alguna potència amb la incògnita a l'exponent.

Per a aquestes equacions, com amb les irracionals, no hi ha una única estratègia de resolució. El resultat que farem servir, en general, és la propietat d'igualació de potències.

!!! tip "Propietat: igualació de potències"
    Si $a>0$ i $a\neq 1$, aleshores

    $$a^n = a^m \;\Leftrightarrow\; n=m.$$

A més, cal tenir presents les propietats de les potències (com $a^{n+m} = a^n \cdot a^m$) per transformar les expressions algebraiques que apareixen a l'equació.

!!! example "**Exemple:** Extracció de factor comú"
    Resolem l'equació $3^{x+1} + 3^{x+2} = 36$.

    1. Descomposem les potències usant les propietats:

        $$3^x \cdot 3^1 + 3^x \cdot 3^2 = 36.$$

    2. Traiem factor comú $3^x$:

        $$3^x (3+9) = 36.$$

    3. Resolem l'equació per a $3^x$:

        $$3^x \cdot 12 = 36 \;\Rightarrow\; 3^x = \frac{36}{12} = 3.$$

    4. Apliquem la propietat d'igualació (ja que $3 = 3^1$):

        $$3^x = 3^1 \;\Rightarrow\; x=1.$$

En algunes ocasions no és possible igualar les bases. En aquests casos, cal aplicar la definició de logaritme per aïllar l'exponent.

!!! example "**Exemple:** Resolució aplicant logaritmes"
    Resolem l'equació $2^{x+2} = 5$.

    1. Com que $5$ no és una potència clara de $2$, apliquem la definició de logaritme ($\log_a B = C \Leftrightarrow a^C = B$):

        $$x+2 = \log_2 5.$$

    2. Aïllem $x$:

        $$x = -2 + \log_2 5.$$

    3. *(Opcional)* Càlcul i comprovació numèrica:

        $$x \simeq -2 + 2{,}3219 \simeq 0{,}3219.$$

        Si substituïm a l'equació original:

        $$2^{0{,}3219+2} = 2^{2{,}3219} \simeq 4{,}9999\ldots \approx 5.$$

    La solució és $x = -2 + \log_2 5$.

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
| Logarítmica | Igualació d'arguments | $\log_a M=\log_a N \Leftrightarrow M=N$ |
