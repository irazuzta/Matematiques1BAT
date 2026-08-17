# La recta real: relació d'ordre

## Relació d'ordre i desigualtats

!!! abstract "Definició: comparació de nombres reals"
    Donats dos nombres reals $a$ i $b$, direm que $a$ és més gran que $b$, i ho escriurem $a>b$, si i només si

    $$
    a > b \;\;\Leftrightarrow\;\; a-b > 0.
    $$

!!! note "Més gran o igual vs. més gran"
    En llenguatge col·loquial sovint es fa servir "més gran" tant per a $>$ com per a $\geq$. Matemàticament, però, cal distingir:

    1. **més gran** $\Rightarrow$ *estrictament* més gran ($>$).
    2. **més gran o igual** $\Rightarrow$ inclou el cas d'igualtat ($\geq$).

Podem estendre la definició anterior:

!!! abstract "Definició: relacions d'ordre en els reals"
    Donats dos nombres reals $a$ i $b$:

    | Notació | Descripció i condició equivalent |
    |---|---|
    | $a=b$ | Igualtat: $a=b \Longleftrightarrow a-b=0$ |
    | $a \geq b$ | "$a$ és més gran o igual que $b$": $a \geq b \Longleftrightarrow a-b \geq 0$ |
    | $a \leq b$ | "$a$ és més petit o igual que $b$": $a \leq b \Longleftrightarrow a-b \leq 0$ |
    | $a > b$ | "$a$ és més gran que $b$": $a > b \Longleftrightarrow a-b > 0$ |
    | $a < b$ | "$a$ és més petit que $b$": $a < b \Longleftrightarrow a-b < 0$ |

!!! example "Relacions d'ordre"
    Donats els nombres $-3$, $4$ i $6$:

    | Enunciat | Notació | Condició numèrica |
    |---|---|---|
    | $6$ és igual que $6$ | $6 = 6$ | $6-6=0$ és zero |
    | $4$ és més petit o igual que $6$ | $4 \leq 6$ | $4-6=-2$ és negatiu |
    | $4$ és més gran que $-3$ | $4 > -3$ | $4-(-3)=7$ és positiu |
    | $-3$ és més petit que $4$ | $-3 < 4$ | $-3-4=-7$ és negatiu |

Donats dos nombres reals qualssevol, sempre podrem establir alguna d'aquestes relacions. Això ens permetrà representar els nombres reals sobre una recta de manera biunívoca.

## Representació gràfica

Per representar gràficament els nombres reals sobre una recta necessitem indicar dos elements fonamentals: el $0$ i l'$1$, de manera que $1$ quedi a la dreta de $0$. Així, a la mateixa distància, podrem representar els enters positius a la dreta i els negatius a l'esquerra.

![Recta real](img/recta_real.png)

Amb això podem representar qualsevol nombre real: com més gran sigui, més a la dreta quedarà representat, i com més petit, més a l'esquerra.

!!! example "Representació de punts a la recta real"
    Considerem els nombres reals $2$, $\pi$, $-\sqrt{2}$ i $\tfrac{21}{4}$. La seva representació decimal és:

    $$
    2 = 2{,}0, \qquad
    \pi = 3{,}141592\dots, \qquad
    -\sqrt{2} = -1{,}414213\dots, \qquad
    \tfrac{21}{4} = 5{,}25.
    $$

    Els nombres $\pi$ i $-\sqrt{2}$ són irracionals i, per tant, no tenen una representació decimal exacta. Tots, però, es poden situar a la recta real:

    ![Exemple de representació a la recta real](img/recta_real_exemple.png)

!!! note "Escala de la recta real"
    En marcar el punt $1$ a la dreta de l'origen, fixem l'escala de tota la recta real. La distància de $0$ a $1$ determina la unitat i permet situar la resta de nombres.

!!! example "Comparació entre fracció i decimal"
    Comproveu que $\tfrac{2}{3} < 0{,}7$. Efectivament:

    $$
    \tfrac{2}{3} = 0{,}666\dots \quad < \quad 0{,}7.
    $$

Aquesta representació i la relació d'ordre ens permetran definir conjunts de nombres continus, anomenats **intervals**, i també el concepte de **valor absolut**, que estudiarem a continuació.
