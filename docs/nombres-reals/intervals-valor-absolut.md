# Intervals i valor absolut

En aquesta secció veurem conjunts numèrics que tenen una forta relació amb la relació d'ordre que hem vist a [La recta real](recta-real.md): els **intervals**.

## Intervals

Recordem de cursos anteriors que un interval és un conjunt d'elements que compleixen una certa condició d'ordre respecte a un o dos nombres donats.

!!! abstract "Definició: interval obert i interval tancat"
    Donats dos nombres reals $a$ i $b$ amb $a<b$, es defineix un **interval obert** com

    $$(a,b) = \{x\in \mathbb{R}, a<x<b\}$$

    i un **interval tancat** com

    $$[a,b] = \{x \in \mathbb{R}, a \leq x \leq b\}$$

    Sobre la recta real es representen així:

    ![Interval obert](img/interval_obert.png)

    ![Interval tancat](img/interval_tancat.png)

Es poden considerar també intervals que són oberts per un costat i tancats per l'altre, i els que tenen un extrem infinit.

Si un interval té un extrem obert i l'altre tancat, parlem d'**intervals semioberts** (o semitancats). Si un dels extrems és un infinit, parlem de **semirectes**. Gràficament, en serien alguns exemples:

![Interval semiobert](img/interval_semiobert.png)

![Semirecta](img/interval_semirecta.png)

Resumim totes les possibilitats de notació d'intervals a la taula següent.

!!! tip "Propietat: classificació dels intervals"
    | Notació | Descripció |
    |---|---|
    | $(a,b)$ | Interval obert: $a < x < b$ |
    | $[a,b]$ | Interval tancat: $a \leq x \leq b$ |
    | $(a,b]$ | Interval semiobert a l'esquerra: $a < x \leq b$ |
    | $[a,b)$ | Interval semiobert a la dreta: $a \leq x < b$ |
    | $(a,+\infty)$ | Semirecta oberta: $x > a$ |
    | $[a,+\infty)$ | Semirecta tancada: $x \geq a$ |
    | $(-\infty,b)$ | Semirecta oberta: $x < b$ |
    | $(-\infty,b]$ | Semirecta tancada: $x \leq b$ |

## Valor absolut

Un concepte interessant i útil en molts aspectes és el **valor absolut**, que es defineix com el mateix nombre si aquest és positiu o zero, i com el seu oposat si és negatiu.

!!! abstract "Definició: valor absolut"
    Donat un nombre real $a$, es defineix el seu valor absolut com

    $$
    |a| = \begin{cases} a & \text{ si } a \geq 0 \\ -a & \text{ si } a <0 \end{cases}
    $$

!!! example "Càlcul d'alguns valors absoluts"
    $$
    |3| = |+3| = 3 \qquad\qquad |-5| = -(-5) = 5
    $$

En essència, es tracta de prendre un nombre sempre positiu: si ja ho és, el deixem igual, i si és negatiu, li canviem el signe.

Donats dos nombres $a$ i $b$ reals, ens podem plantejar a quina distància estan si els representem sobre la recta real. És evident que si $a<b$ la distància és $b-a$ i que si $a>b$ és $a-b$. Les dues expressions són oposades una de l'altra:

!!! example "Càlcul d'algunes distàncies"
    Siguin $a=3$ i $b=7$. Aleshores

    $$
    a-b = 3-7 = -4 \qquad\qquad b-a = 7-3 = 4
    $$

Com que una distància sempre és positiva, només cal prendre el valor absolut d'una de les dues expressions per obtenir la distància entre els dos punts.

!!! abstract "Definició: distància entre dos nombres reals"
    Siguin $a$ i $b$ dos nombres reals qualssevol. Es defineix la distància entre $a$ i $b$ com

    $$d(a,b) = |b-a|$$

L'avantatge de definir la distància amb el valor absolut és que ens permet prescindir del fet que $b$ hagi de ser més gran que $a$.

Amb aquesta definició ens podem plantejar quins són els nombres $x$ que es troben a una distància menor que un cert nombre $r$ fixat d'un cert nombre $a$, és a dir, quins nombres $x$ compleixen

$$d(a,x)<r$$

Gràficament, es tracta de trobar els extrems d'un interval $(e_1,e_2)$:

![Entorn d'un punt](img/interval_entorn.png)

!!! example "Reals a una distància menor que un valor conegut d'un altre real"
    Sigui $a=4$ i $r=6$. Volem calcular els punts la distància dels quals a $a$ sigui menor que $r$:

    $$d(x,4)<6 \qquad\Rightarrow\qquad |x-4|<6$$

    Gràficament, es tracta de trobar els extrems del següent interval:

    ![Exemple d'entorn](img/entorn_exemple.png)

    Observem que $e_1=4-6=-2$ i $e_2=4+6=10$. Per tant, l'interval demanat és $(-2,10)$.

A partir de l'exemple anterior, podem generalitzar el resultat:

!!! tip "Propietat: entorn d'un punt"
    Per a qualsevol $a \in \mathbb{R}$ i $r>0$ es té

    $$
    |x-a| < r \quad \Longleftrightarrow \quad a-r < x < a+r,
    $$

    és a dir, l'interval solució és sempre $(a-r,\,a+r)$.

## Inequacions lineals

Una inequació lineal és una desigualtat amb una incògnita on les expressions algebraiques implicades són polinomis de grau $1$. Aquest tipus d'inequacions ja es van resoldre en cursos anteriors; el mètode per trobar els valors que compleixen la desigualtat és gairebé igual que amb les equacions de primer grau, amb una diferència important.

!!! example "Resolució d'una inequació lineal"
    $$2x-5>7$$

    Aïllem la $x$ igual que amb les equacions de primer grau:

    $$2x > 7 + 5 \qquad\Rightarrow\qquad 2x > 12 \qquad\Rightarrow\qquad x > \frac{12}{2} = 6$$

    Per tant, la solució és la semirecta $(6,+\infty)$.

!!! note "Atenció amb el signe!"
    Quan multipliquem o dividim una desigualtat per un nombre negatiu, cal **canviar el sentit de la desigualtat**.

    Per exemple: $2 < 5 \quad \Longrightarrow \quad -2 > -5$

!!! example "Resolució d'una altra inequació lineal"
    $$-3x + 5 \leq 23$$

    $$-3x \leq 23 - 5 \qquad\Rightarrow\qquad -3x \leq 18$$

    El valor que passem dividint és negatiu, així que cal girar el sentit de la desigualtat (només ho fem amb el producte i la divisió):

    $$x \geq \frac{18}{-3} = -6$$

    Per tant, la solució és la semirecta $[-6,+\infty)$.
