# Laboratori de polinomis

Aquí pots escriure qualsevol polinomi i veure'n la **gràfica**, les **arrels** i la **factorització**, explicada pas a pas. Serveix per comprovar exercicis i per entendre què fa cada pas.

## Com es dibuixa un polinomi?

Un polinomi $p(x)$ és una funció: a cada valor de $x$ li correspon un únic valor $y=p(x)$. Per dibuixar-lo fem servir uns **eixos de coordenades**: l'eix horitzontal ($OX$) és per a $x$ i el vertical ($OY$) per a $y=p(x)$. Cada valor de $x$ dona un punt $(x,\,p(x))$ i, si en marquem molts i els unim, apareix la **gràfica** del polinomi.

!!! example "**Exemple 1:** alguns punts de $p(x)=x^2-1$"
    <div class="lab-taula" markdown="1">

    | $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
    |---|---|---|---|---|---|
    | $p(x)$ | $3$ | $0$ | $-1$ | $0$ | $3$ |

    </div>

    <div class="lab-demo" data-poly="x^2-1" data-xs="-2,-1,0,1,2" markdown="1"></div>

    Els punts marcats en color són els que tenen $p(x)=0$, és a dir, els punts on la gràfica talla l'eix $OX$: $(-1,0)$ i $(1,0)$. Per tant, les arrels són $x=-1$ i $x=1$, i es corresponen amb els factors de la factorització, un $(x-a)$ per a cada arrel $a$:

    $$x^2-1=(x+1)(x-1)$$

!!! example "**Exemple 2:** alguns punts de $p(x)=x^3-x^2-4x+4$"
    <div class="lab-taula" markdown="1">

    | $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
    |---|---|---|---|---|---|---|
    | $p(x)$ | $0$ | $6$ | $4$ | $0$ | $0$ | $10$ |

    </div>

    <div class="lab-demo" data-poly="x^3-x^2-4x+4" data-xs="-2,-1,0,1,2,3" markdown="1"></div>

    Ara la gràfica talla l'eix $OX$ en tres punts, $(-2,0)$, $(1,0)$ i $(2,0)$. Per tant, les arrels són $x=-2$, $x=1$ i $x=2$, i la factorització té un factor per a cada una:

    $$x^3-x^2-4x+4=(x+2)(x-1)(x-2)$$

!!! tip "Arrels i punts de tall amb l'eix $OX$"
    Tots els punts de l'eix $OX$ tenen $y=0$. Per tant, $a$ és arrel de $p(x)$ si, i només si, la gràfica passa pel punt $(a,0)$, és a dir, si la talla l'eix $OX$ en aquest punt:

    $$a \text{ és arrel de } p(x) \ \Leftrightarrow\ p(a)=0 \ \Leftrightarrow\ \text{la gràfica passa pel punt } (a,0)$$

## Prova-ho amb el teu polinomi

<div id="lab-polinomis" markdown="0"></div>

<noscript>Aquesta eina necessita JavaScript per funcionar.</noscript>

!!! note "Com funciona"
    El laboratori segueix el mateix procediment que has vist a [Factorització de polinomis](02_factoritzacio.md): treu el factor comú, busca arrels racionals i les elimina amb la [regla de Ruffini](01_polinomis.md#regla-de-ruffini), i resol l'equació de segon grau que quedi.

    - A la gràfica, els punts marcats sobre l'eix $OX$ són les arrels reals.
    - Si un factor no té cap arrel racional, el laboratori ho diu i en dona les **arrels reals de manera aproximada**: aquests valors apareixen amb decimals.
    - Els factors de grau $2$ amb $\Delta<0$ són irreductibles i es deixen sense descompondre.
    - Treballa amb polinomis de grau $12$ com a màxim i coeficients de fins a $10^9$.
