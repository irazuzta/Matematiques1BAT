# Inequacions

## Què és una inequació

!!! abstract "Definició: inequació"
    Una **inequació** és una desigualtat entre dues expressions algebraiques en què apareix una incògnita. Fem servir els signes $<$, $\leq$, $>$ i $\geq$.

    Una **solució** d'una inequació és un valor de la incògnita que fa certa la desigualtat. **Resoldre** la inequació vol dir trobar **totes** les solucions.

!!! example "**Exemple:** la inequació $2x+1>7$"
    Provem alguns valors:

    $$
    \begin{aligned}
    x=5&:\quad 2\cdot 5+1=11>7 &&\text{(és solució)}\\
    x=3&:\quad 2\cdot 3+1=7\not>7 &&\text{(no és solució)}\\
    x=1&:\quad 2\cdot 1+1=3\not>7 &&\text{(no és solució)}
    \end{aligned}
    $$

    De fet, són solució **tots** els nombres més grans que $3$. La inequació té infinites solucions, que escrivim amb un interval: $(3,+\infty)$.

A diferència de les equacions, que normalment tenen un nombre finit de solucions, les inequacions solen tenir-ne infinites. Per això les escrivim amb [intervals](../nombres-reals/03_intervals_valor_absolut.md) o unions d'intervals. Recordem que:

* Amb $<$ o $>$, l'extrem **no** hi és inclòs i fem servir un parèntesi: $x<4 \Rightarrow (-\infty,4)$.
* Amb $\leq$ o $\geq$, l'extrem **sí** que hi és inclòs i fem servir un claudàtor: $x\leq 4 \Rightarrow (-\infty,4]$.
* Per als extrems $-\infty$ i $+\infty$ sempre fem servir parèntesis.

## Inequacions de primer grau

Les inequacions de primer grau es resolen com les equacions de primer grau: traiem parèntesis i denominadors, agrupem els termes amb $x$ en un membre i aïllem la $x$. Les transformacions que podem fer són:

* **Sumar o restar** el mateix nombre o expressió als dos membres: la desigualtat **no canvia**.
* **Multiplicar o dividir** els dos membres per un nombre **positiu**: la desigualtat **no canvia**.
* **Multiplicar o dividir** els dos membres per un nombre **negatiu**: la desigualtat **canvia de sentit**.

!!! warning "Compte: multiplicar o dividir per un nombre negatiu"
    Sabem que $2<3$. Si multipliquem els dos nombres per $-1$, obtenim $-2$ i $-3$, i ara és $-2$ el més gran:

    $$2<3 \quad\Rightarrow\quad -2>-3$$

    A la recta real, canviar el signe és com mirar-se en un mirall col·locat al $0$: l'ordre dels nombres s'inverteix. Per això, **quan multipliquem o dividim per un nombre negatiu, hem de girar la desigualtat**: $<$ passa a ser $>$, i $\leq$ passa a ser $\geq$ (i al revés).

!!! example "**Exemple 1:** $3x-2\leq 10$"
    Passem el $-2$ a l'altre membre i dividim per $3$:

    $$
    \begin{aligned}
    3x-2&\leq 10\\
    3x&\leq 12\\
    x&\leq \frac{12}{3}=4
    \end{aligned}
    $$

    Hem dividit per $3$, que és **positiu**, i per tant la desigualtat **no** canvia. La solució és

    $$(-\infty,4].$$

    Comprovem-ho amb un valor de dins de l'interval i un de fora:

    $$
    \begin{aligned}
    x=0&:\quad 3\cdot 0-2=-2\leq 10 &&\text{(és solució)}\\
    x=5&:\quad 3\cdot 5-2=13\not\leq 10 &&\text{(no és solució)}
    \end{aligned}
    $$

!!! example "**Exemple 2:** $2(x-3)\leq 5x+3$"
    Traiem el parèntesi i agrupem:

    $$
    \begin{aligned}
    2x-6&\leq 5x+3\\
    2x-5x&\leq 3+6\\
    -3x&\leq 9
    \end{aligned}
    $$

    Ara hem de dividir per $-3$, que és **negatiu**: **girem la desigualtat**.

    $$x\geq \frac{9}{-3}=-3$$

    La solució és

    $$[-3,+\infty).$$

    Comprovem-ho amb un valor de dins de l'interval i un de fora:

    $$
    \begin{aligned}
    x=0&:\quad 2(0-3)\overset{?}{\leq} 5\cdot 0+3\\
    &\Rightarrow\; -6\leq 3 \quad\text{(és solució)}\\[6pt]
    x=-4&:\quad 2(-4-3)\overset{?}{\leq} 5(-4)+3\\
    &\Rightarrow\; -14\not\leq -17 \quad\text{(no és solució)}
    \end{aligned}
    $$

!!! tip "Per no haver de girar la desigualtat"
    Podem agrupar els termes amb $x$ al membre on el coeficient queda positiu. A l'exemple 2:

    $$
    \begin{aligned}
    2x-6&\leq 5x+3\\
    -6-3&\leq 5x-2x\\
    -9&\leq 3x\\
    -3&\leq x
    \end{aligned}
    $$

    Obtenim el mateix resultat, $x\geq -3$, sense haver dividit per cap nombre negatiu.

### Una altra manera de mirar-ho

Tornem a la inequació de l'exemple 1, $3x-2\leq 10$. Si passem el $10$ a l'esquerra, obtenim la inequació equivalent

$$3x-12\leq 0.$$

Si dibuixem la recta $y=3x-12$, les solucions són els valors de $x$ on la recta és **per sota** de l'eix $OX$ o el toca:

!!! note "Com llegim les gràfiques d'aquest apartat"
    * <svg class="ineq-sw" viewBox="0 0 30 14" aria-hidden="true"><path class="eq-curve ineq-on" d="M2 12 L28 2"/></svg> Tros de la gràfica que **compleix** la desigualtat.
    * <svg class="ineq-sw" viewBox="0 0 30 14" aria-hidden="true"><line class="ineq-band" x1="1" y1="7" x2="29" y2="7"/></svg> **Solució**, marcada sobre l'eix $OX$.
    * <svg class="ineq-sw" viewBox="0 0 30 14" aria-hidden="true"><circle class="ineq-end is-closed" cx="15" cy="7" r="5"/></svg> Punt **ple**: l'extrem **hi és inclòs** ($\leq$ o $\geq$).
    * <svg class="ineq-sw" viewBox="0 0 30 14" aria-hidden="true"><circle class="ineq-end is-open" cx="15" cy="7" r="5"/></svg> Punt **buit**: l'extrem **no hi és inclòs** ($<$ o $>$).

<div class="ineq-demo" data-poly="3x-12" data-rel="le" data-view="-1.5,7.5,-14,8" markdown="1"></div>

Aquesta idea, mirar on la gràfica és per sobre o per sota de l'eix $OX$, és la que farem servir per resoldre les inequacions de segon grau.

## Inequacions de segon grau

Una inequació és de **segon grau** quan, passant tots els termes a un membre i simplificant, la podem escriure en la **forma canònica**

$$ax^2+bx+c<0, \qquad a\neq 0,$$

o bé la mateixa expressió amb $\leq$, $>$ o $\geq$.

El primer pas sempre és portar la inequació a aquesta forma, deixant un $0$ en un dels membres. Per exemple:

$$2x^2\geq x+3 \quad\Rightarrow\quad 2x^2-x-3\geq 0.$$

!!! abstract "Idea clau"
    La gràfica de $y=ax^2+bx+c$ és una **paràbola**. Per tant:

    * $ax^2+bx+c>0$ vol dir buscar on la paràbola és **per sobre** de l'eix $OX$.
    * $ax^2+bx+c<0$ vol dir buscar on la paràbola és **per sota** de l'eix $OX$.
    * Amb $\geq$ o $\leq$, també hi afegim els punts on la paràbola **talla** l'eix $OX$.

Per saber on és per sobre i on és per sota, en tenim prou de conèixer dues coses: la **forma** de la paràbola i els seus **punts de tall** amb l'eix $OX$.

### La forma de la paràbola

!!! abstract "Forma de la paràbola segons el signe de $a$"
    * Si $a>0$, la paràbola és **còncava** ($\cup$): és oberta cap amunt i les dues branques pugen.
    * Si $a<0$, la paràbola és **convexa** ($\cap$): és oberta cap avall i les dues branques baixen.

<div class="ineq-pair" markdown="1">
<div markdown="1">
<div class="ineq-demo" data-poly="x^2-2x-3" data-view="-3,5,-5,6" markdown="1"></div>

$y=x^2-2x-3$: $a=1>0$, còncava ($\cup$)
</div>
<div markdown="1">
<div class="ineq-demo" data-poly="-x^2+2x+3" data-view="-3,5,-6,5" markdown="1"></div>

$y=-x^2+2x+3$: $a=-1<0$, convexa ($\cap$)
</div>
</div>

Per què depèn només de $a$? Quan $x$ és molt gran (positiu o negatiu), el terme $ax^2$ és molt més gran que els altres i decideix el signe. Com que $x^2$ sempre és positiu, el signe de $ax^2+bx+c$ per a valors grans de $x$ és el signe de $a$.

!!! note "Compte amb els noms"
    No tots els llibres fan servir el mateix conveni: n'hi ha que diuen *convexa* a la forma $\cup$ i *còncava* a la forma $\cap$. Per evitar confusions, sempre podem dir **oberta cap amunt** o **oberta cap avall**.

### Els punts de tall amb l'eix $OX$

Els punts de tall són les solucions de l'equació $ax^2+bx+c=0$. Depenen del signe del discriminant $\Delta=b^2-4ac$:

* Si $\Delta>0$, la paràbola talla l'eix $OX$ en **dos punts**.
* Si $\Delta<0$, la paràbola **no talla** l'eix $OX$.
* Si $\Delta=0$, la paràbola toca l'eix $OX$ en **un sol punt**: hi és **tangent**.

Estudiem cada cas per separat.

## Cas general: dos punts de tall

Quan $\Delta>0$, l'equació $ax^2+bx+c=0$ té dues solucions, $x_1<x_2$, i la recta real queda dividida en tres trossos.

!!! abstract "Pas a pas"
    1. Portem la inequació a la **forma canònica**: $ax^2+bx+c$ comparat amb $0$.
    2. Mirem el **signe de $a$**: si $a>0$, la paràbola és $\cup$; si $a<0$, és $\cap$.
    3. Resolem l'equació $ax^2+bx+c=0$ per trobar els **punts de tall** $x_1<x_2$.
    4. Fem un **esbós** de la paràbola: talla l'eix $OX$ a $x_1$ i $x_2$ i té la forma del pas 2.
    5. Fem la **taula de signes**: amb els punts de tall dividim la recta en intervals i hi anotem el signe que llegim a l'esbós ($+$ si la paràbola és per sobre de l'eix, $-$ si és per sota i $0$ als punts de tall). Si no tenim l'esbós, trobem el signe de cada interval calculant el polinomi en un valor qualsevol de dins.
    6. **Llegim la solució** a la taula: per a $>0$, els intervals amb $+$; per a $<0$, els intervals amb $-$.
    7. Decidim els **extrems**: amb $\geq$ o $\leq$, els punts de tall (amb signe $0$) hi són inclosos i fem servir claudàtors; amb $>$ o $<$, no hi són inclosos i fem servir parèntesis.

Si $a>0$ ($\cup$), la paràbola és per sota de l'eix **entre** les arrels i per sobre **fora** de les arrels. Si $a<0$ ($\cap$), és al revés.

!!! example "**Exemple 1:** $x^2-x-6<0$"
    Ja és en forma canònica. Com que $a=1>0$, la paràbola és **còncava** ($\cup$). Busquem els punts de tall:

    $$
    \begin{aligned}
    x^2-x-6&=0\\
    x&=\frac{1\pm\sqrt{1+24}}{2}=\frac{1\pm 5}{2}\\
    x_1&=-2,\quad x_2=3
    \end{aligned}
    $$

    <div class="ineq-demo" data-poly="x^2-x-6" data-rel="lt" data-view="-4,5,-8,8" markdown="1"></div>

    Fem la taula de signes. Els signes es llegeixen a la gràfica; també els podem trobar amb un valor de prova a cada interval:

    <div class="sign-table" markdown="1">

    | $x$ | $(-\infty,-2)$ | $-2$ | $(-2,3)$ | $3$ | $(3,+\infty)$ |
    |:--|:--:|:--:|:--:|:--:|:--:|
    | Prova | $-3$ |  | $0$ |  | $4$ |
    | $x^2-x-6$ | $6$ | $0$ | $-6$ | $0$ | $6$ |
    | Signe | $+$ | $0$ | $-$ | $0$ | $+$ |
    | $<0$? | no | no | **sí** | no | no |

    </div>

    Volem que sigui $<0$: ens quedem amb l'interval amb signe $-$, **entre** les arrels. Com que la desigualtat és estricta, els punts de tall (signe $0$) no hi són inclosos:

    $$(-2,3)$$

!!! example "**Exemple 2:** $2x^2\geq x+3$"
    Primer la portem a la forma canònica:

    $$2x^2-x-3\geq 0$$

    Com que $a=2>0$, la paràbola és **còncava** ($\cup$). Busquem els punts de tall:

    $$
    \begin{aligned}
    2x^2-x-3&=0\\
    x&=\frac{1\pm\sqrt{1+24}}{4}=\frac{1\pm 5}{4}\\
    x_1&=-1,\quad x_2=\frac32
    \end{aligned}
    $$

    <div class="ineq-demo" data-poly="2x^2-x-3" data-rel="ge" data-labels="−1;3/2" data-view="-3,3.5,-5,6" markdown="1"></div>

    Fem la taula de signes:

    <div class="sign-table" markdown="1">

    | $x$ | $(-\infty,-1)$ | $-1$ | $(-1,\,3/2)$ | $3/2$ | $(3/2,+\infty)$ |
    |:--|:--:|:--:|:--:|:--:|:--:|
    | Signe | $+$ | $0$ | $-$ | $0$ | $+$ |
    | $\geq 0$? | **sí** | **sí** | no | **sí** | **sí** |

    </div>

    Volem que sigui $\geq 0$: els intervals amb signe $+$, **fora** de les arrels, i també els punts de tall (signe $0$), perquè la desigualtat inclou l'igual:

    $$(-\infty,-1]\cup\left[\frac32,+\infty\right)$$

    Comprovem-ho amb un valor de dins i un de fora:

    $$
    \begin{aligned}
    x=2&:\quad 2\cdot 2^2=8\geq 2+3=5 &&\text{(és solució)}\\
    x=0&:\quad 2\cdot 0^2=0\not\geq 0+3=3 &&\text{(no és solució)}
    \end{aligned}
    $$

!!! example "**Exemple 3:** $-x^2+4x-3>0$"
    Ara $a=-1<0$: la paràbola és **convexa** ($\cap$). Busquem els punts de tall:

    $$
    \begin{aligned}
    -x^2+4x-3&=0\\
    x^2-4x+3&=0\\
    x&=\frac{4\pm\sqrt{16-12}}{2}=\frac{4\pm 2}{2}\\
    x_1&=1,\quad x_2=3
    \end{aligned}
    $$

    <div class="ineq-demo" data-poly="-x^2+4x-3" data-rel="gt" data-view="-1,5,-5,3" markdown="1"></div>

    Fem la taula de signes. Com que la paràbola és oberta cap avall, el signe $+$ ara és **entre** les arrels:

    <div class="sign-table" markdown="1">

    | $x$ | $(-\infty,1)$ | $1$ | $(1,3)$ | $3$ | $(3,+\infty)$ |
    |:--|:--:|:--:|:--:|:--:|:--:|
    | Signe | $-$ | $0$ | $+$ | $0$ | $-$ |
    | $>0$? | no | no | **sí** | no | no |

    </div>

    Volem que sigui $>0$: l'interval amb signe $+$, sense els extrems:

    $$(1,3)$$

    Comprovem-ho: per a $x=2$ tenim $-4+8-3=1>0$, que és solució; per a $x=0$ tenim $-3\not>0$, que no ho és.

!!! tip "Una altra manera: fer que $a$ sigui positiu"
    Si multipliquem per $-1$ (i **girem la desigualtat**), l'exemple 3 queda

    $$-x^2+4x-3>0 \quad\Rightarrow\quad x^2-4x+3<0,$$

    que té $a>0$. Ara busquem on la paràbola $\cup$ és per sota de l'eix, que és entre les arrels: $(1,3)$. És el mateix resultat.

!!! example "**Exemple 4:** $x^2>9$ (incompleta)"
    La forma canònica és $x^2-9>0$, amb $a=1>0$ ($\cup$). Els punts de tall són

    $$x^2-9=0 \;\Rightarrow\; x^2=9 \;\Rightarrow\; x=\pm 3$$

    <div class="ineq-demo" data-poly="x^2-9" data-rel="gt" data-view="-6,6,-11,8" markdown="1"></div>

    Fem la taula de signes:

    <div class="sign-table" markdown="1">

    | $x$ | $(-\infty,-3)$ | $-3$ | $(-3,3)$ | $3$ | $(3,+\infty)$ |
    |:--|:--:|:--:|:--:|:--:|:--:|
    | Signe | $+$ | $0$ | $-$ | $0$ | $+$ |
    | $>0$? | **sí** | no | no | no | **sí** |

    </div>

    Volem que sigui $>0$: els intervals amb signe $+$, **fora** de les arrels:

    $$(-\infty,-3)\cup(3,+\infty)$$

    **Compte:** és un error freqüent escriure «$x>\pm 3$». Per exemple, $x=-4$ és solució, perquè $(-4)^2=16>9$, i en canvi $x=0$ no ho és, perquè $0^2=0\not>9$.

## Cas sense punts de tall

Quan $\Delta<0$, l'equació $ax^2+bx+c=0$ no té solució i la paràbola **no talla** l'eix $OX$. Per tant:

* Si $a>0$ ($\cup$), la paràbola és **sempre per sobre** de l'eix: $ax^2+bx+c>0$ per a qualsevol $x$.
* Si $a<0$ ($\cap$), la paràbola és **sempre per sota** de l'eix: $ax^2+bx+c<0$ per a qualsevol $x$.

La inequació, doncs, o bé es compleix per a **tots** els nombres reals, o bé **no té cap solució**.

!!! example "**Exemple 5:** $x^2+2x+3>0$"
    Com que $a=1>0$, la paràbola és **còncava** ($\cup$). Busquem els punts de tall:

    $$
    \begin{aligned}
    x^2+2x+3&=0\\
    \Delta&=2^2-4\cdot 1\cdot 3=4-12=-8<0
    \end{aligned}
    $$

    No hi ha punts de tall: la paràbola és sempre per sobre de l'eix.

    <div class="ineq-demo" data-poly="x^2+2x+3" data-rel="gt" data-view="-4,2,-2,8" markdown="1"></div>

    Sense punts de tall, la taula té un sol interval, tota la recta:

    <div class="sign-table" markdown="1">

    | $x$ | $\mathbb{R}$ |
    |:--|:--:|
    | Signe | $+$ |
    | $>0$? | **sí** |

    </div>

    La desigualtat es compleix sempre. La solució és $\mathbb{R}$, és a dir, $(-\infty,+\infty)$.

    En canvi, la inequació $x^2+2x+3\leq 0$ **no té solució**: la paràbola mai és per sota de l'eix ni el toca.

!!! example "**Exemple 6:** $-x^2+2x-5\geq 0$"
    Ara $a=-1<0$: la paràbola és **convexa** ($\cap$). Busquem els punts de tall:

    $$
    \begin{aligned}
    -x^2+2x-5&=0\\
    \Delta&=2^2-4\cdot(-1)\cdot(-5)\\
    &=4-20=-16<0
    \end{aligned}
    $$

    No hi ha punts de tall: la paràbola és sempre per sota de l'eix.

    <div class="ineq-demo" data-poly="-x^2+2x-5" data-rel="ge" data-view="-2,4,-9,2" markdown="1"></div>

    La taula té un sol interval:

    <div class="sign-table" markdown="1">

    | $x$ | $\mathbb{R}$ |
    |:--|:--:|
    | Signe | $-$ |
    | $\geq 0$? | no |

    </div>

    Mai és $\geq 0$, i per tant la inequació **no té solució**. Ho escrivim $\varnothing$ (conjunt buit).

    En canvi, $-x^2+2x-5<0$ es compleix per a tots els nombres reals: la solució és $\mathbb{R}$.

## Cas tangent a l'eix $OX$

Quan $\Delta=0$, l'equació $ax^2+bx+c=0$ té una sola solució (doble), $x_0$. La paràbola **toca** l'eix $OX$ en aquest punt, que és el vèrtex, però **no el travessa**: a banda i banda de $x_0$ queda sempre al mateix costat de l'eix.

!!! example "**Exemple 7:** $x^2-4x+4$ comparat amb $0$"
    Com que $a=1>0$, la paràbola és **còncava** ($\cup$). Busquem els punts de tall:

    $$
    \begin{aligned}
    x^2-4x+4&=0\\
    \Delta&=(-4)^2-4\cdot 1\cdot 4=16-16=0\\
    x&=\frac{4}{2}=2 \quad\text{(arrel doble)}
    \end{aligned}
    $$

    De fet, $x^2-4x+4=(x-2)^2$. La paràbola toca l'eix a $x=2$ i, a la resta de punts, és per sobre. A la taula de signes es veu que el signe **no canvia** en passar per l'arrel doble:

    <div class="sign-table" markdown="1">

    | $x$ | $(-\infty,2)$ | $2$ | $(2,+\infty)$ |
    |:--|:--:|:--:|:--:|
    | Signe | $+$ | $0$ | $+$ |

    </div>

    <div class="ineq-pair" markdown="1">
    <div markdown="1">
    <div class="ineq-demo" data-poly="x^2-4x+4" data-rel="gt" data-view="-1,5,-2,6" markdown="1"></div>

    $x^2-4x+4>0$
    </div>
    <div markdown="1">
    <div class="ineq-demo" data-poly="x^2-4x+4" data-rel="le" data-view="-1,5,-2,6" markdown="1"></div>

    $x^2-4x+4\leq 0$
    </div>
    </div>

    Segons la desigualtat, obtenim quatre resultats diferents:

    | Inequació | Què llegim a la taula? | Solució |
    |:--|:--|:--|
    | ${x^2-4x+4>0}$ | signe $+$ | ${\mathbb{R}\setminus\{2\}}$, és a dir, $(-\infty,2)\cup(2,+\infty)$ |
    | ${x^2-4x+4\geq 0}$ | signe $+$ o $0$ | $\mathbb{R}$ |
    | ${x^2-4x+4<0}$ | cap signe $-$ | no té solució ($\varnothing$) |
    | ${x^2-4x+4\leq 0}$ | només el $0$, a $x=2$ | $x=2$ |

!!! example "**Exemple 8:** $-x^2+6x-9\geq 0$"
    Ara $a=-1<0$ ($\cap$) i

    $$
    \begin{aligned}
    -x^2+6x-9&=0\\
    x^2-6x+9&=0\\
    (x-3)^2&=0 \;\Rightarrow\; x=3
    \end{aligned}
    $$

    La paràbola és per sota de l'eix i només el toca a $x=3$:

    <div class="sign-table" markdown="1">

    | $x$ | $(-\infty,3)$ | $3$ | $(3,+\infty)$ |
    |:--|:--:|:--:|:--:|
    | Signe | $-$ | $0$ | $-$ |
    | $\geq 0$? | no | **sí** | no |

    </div>

    L'únic punt on és $\geq 0$ és el de tangència, i la solució és $x=3$.

!!! note "Compte amb l'igual"
    En el cas tangent, el punt $x_0$ és solució només si la desigualtat inclou l'igual ($\geq$ o $\leq$). Amb $>$ o $<$ l'hem de treure.

## Taula resum

Escrivim $p(x)=ax^2+bx+c$. Per a $a>0$ (paràbola $\cup$), amb arrels $x_1<x_2$ quan $\Delta>0$ i arrel doble $x_0$ quan $\Delta=0$:

| | ${\Delta>0}$ | ${\Delta=0}$ | ${\Delta<0}$ |
|:--|:--|:--|:--|
| ${p(x)>0}$ | $(-\infty,x_1)\cup(x_2,+\infty)$ | ${\mathbb{R}\setminus\{x_0\}}$ | $\mathbb{R}$ |
| ${p(x)\geq 0}$ | $(-\infty,x_1]\cup[x_2,+\infty)$ | $\mathbb{R}$ | $\mathbb{R}$ |
| ${p(x)<0}$ | $(x_1,x_2)$ | $\varnothing$ | $\varnothing$ |
| ${p(x)\leq 0}$ | $[x_1,x_2]$ | només ${x_0}$ | $\varnothing$ |

Si $a<0$, podem multiplicar per $-1$ i girar la desigualtat per tornar a aquesta taula. De tota manera, més que memoritzar la taula, és millor fer sempre un **esbós de la paràbola** i llegir-hi la solució.

!!! tip "I si el grau és més gran?"
    Per a inequacions polinòmiques de grau més gran que $2$, factoritzem el polinomi i estudiem el seu signe en cada interval. Ho fem a l'apartat de [càlcul de dominis](../analisi/02_eines_calcul_dominis.md).
