# Potències

## Definició

En cursos anteriors hem vist el concepte de potència i les seves propietats. És un concepte que s'ha anat ampliant cada curs a conjunts numèrics cada cop més grans.

!!! info "Notació: potència"
    La notació utilitzada per a les potències és

    $$a^n$$

    on $a$ s'anomena **base** i $n$ **exponent**.

En el cas d'exponent natural, això significa que multipliquem $a$ tants cops com indiqui l'exponent:

!!! abstract "Definició: potència d'exponent natural"
    Si $a$ és un nombre real i $n$ un nombre natural, aleshores

    $$a^n = \underbrace{a \cdot a \cdot \dots \cdot a}_n$$

!!! example "Bases positives i negatives"
    $$
    3^5 = \underbrace{3\cdot 3\cdot 3\cdot 3\cdot 3}_5 = 243,
    \qquad
    (-2)^4 = \underbrace{(-2)\cdot(-2)\cdot(-2)\cdot(-2)}_4 = 16.
    $$

!!! note "Atenció amb els parèntesis"
    No és el mateix $-2^4$ que $(-2)^4$:

    1. $-2^4=-(2^4)=-16$
    2. $(-2)^4=16$

## Propietats i exemples: exponents naturals

Per a exponents naturals, les potències compleixen una sèrie de propietats bàsiques, que seran el punt de partida per estendre després la definició als exponents zero i negatius.

!!! tip "Propietat: producte de potències de la mateixa base"
    Si $m,n\in\mathbb{N}$, aleshores

    $$a^m \cdot a^n = a^{m+n}, \qquad a \in \mathbb{R}.$$

!!! example
    $$2^3 \cdot 2^4 = (2\cdot 2\cdot 2)\cdot(2\cdot 2\cdot 2\cdot 2).$$

    Comptant tots els factors en tenim 7 i tots són 2:

    $$2^3 \cdot 2^4 = 2^7 = 128.$$

    I, efectivament, $2^3=8$, $2^4=16$, $8\cdot 16 = 128$.

!!! tip "Propietat: quocient de potències de la mateixa base"
    Si $m,n\in\mathbb{N}$ amb $m> n$, aleshores

    $$\frac{a^m}{a^n} = a^{m-n}, \qquad a \in \mathbb{R},\; a \neq 0.$$

!!! example
    $$
    \frac{5^6}{5^2}=\frac{5\cdot 5\cdot 5\cdot 5\cdot 5\cdot 5}{5\cdot 5}
    =5\cdot 5\cdot 5\cdot 5 = 5^4 = 625.
    $$

    I, efectivament, $5^6=15\,625$, $5^2=25$ i $\tfrac{15\,625}{25}=625$.

!!! note "Atenció"
    Amb exponents naturals, només es pot aplicar la regla si $m> n$. El cas $m\leq n$ quedarà definit més endavant amb exponents negatius i el cas d'exponent $0$.

!!! tip "Propietat: potència d'una potència"
    Si $m,n\in\mathbb{N}$, aleshores

    $$(a^m)^n = a^{m \cdot n}, \qquad a \in \mathbb{R}.$$

!!! example
    $$(3^2)^4 = (9)^4 = 6561, \qquad\text{i també}\qquad 3^{2\cdot 4}=3^8=6561.$$

## Extensió de la definició

Les propietats de les potències amb exponents naturals funcionen correctament mentre els exponents siguin positius. Ara bé, si volem que continuïn essent vàlides en casos com el quocient amb exponents iguals ($m=n$) o amb el numerador més petit que el denominador ($m<n$), cal ampliar la definició de potència als casos d'exponent zero i d'exponent negatiu.

!!! abstract "Definició: potència d'exponent zero"
    Si $a$ és un nombre real diferent de zero, definim

    $$a^0 = 1.$$

!!! note "Justificació del cas $a^0$"
    Per coherència amb la regla del quocient:

    $$a^0 = a^{n-n} = \frac{a^n}{a^n} = 1, \qquad a\neq 0.$$

!!! note "Cas especial"
    El valor $0^0$ no està definit i apareix com a indeterminació en càlcul.

!!! abstract "Definició: potència d'exponent negatiu"
    Si $a$ és un nombre real diferent de zero i $n\in\mathbb{N}$, definim

    $$a^{-n} = \frac{1}{a^n}.$$

!!! note "Justificació del cas amb exponent negatiu"
    Per coherència amb la regla del producte:

    $$1 = a^0 = a^{n-n} = a^{n} \cdot a^{-n}.$$

    Així, $a^{-n}$ es defineix com $\tfrac{1}{a^n}$.

!!! example "Ús d'exponents zero i negatius"
    $$5^0 = 1, \qquad 7^{-2} = \frac{1}{7^2} = \frac{1}{49}.$$

    Un càlcul combinat:

    $$\frac{4^3 \cdot 4^{-5}}{4^0} = 4^{3+(-5)-0} = 4^{-2} = \frac{1}{16}.$$

Amb aquestes dues definicions, totes les propietats anteriors de les potències continuen essent vàlides per a exponents enters.

!!! abstract "Definició: potència amb exponent enter (definició global)"
    Per a tot $a\in\mathbb{R}$ i $n\in\mathbb{Z}$, definim

    $$
    a^n=
    \begin{cases}
        \underbrace{a\cdot a \cdot \ldots \cdot a}_{n\text{ factors}}, & n\in\mathbb{N},\\[6pt]
        1, & n=0,\ a\neq 0,\\[6pt]
        \dfrac{1}{a^{-n}}, & n<0,\ a\neq 0.
    \end{cases}
    $$

A partir d'ara, quan treballem amb exponents enters (naturals, zero o negatius), les propietats de les potències que hem vist segueixen sent vàlides sempre que no comportin divisió per zero.

## Propietats i exemples: exponents enters

Amb les definicions d'exponent zero i negatiu ja introduïdes, les propietats de les potències que havíem vist amb exponents naturals es conserven per a tots els exponents enters. A continuació les recordem amb exemples.

!!! tip "Propietat: producte de potències de la mateixa base"
    $$a^m \cdot a^n = a^{m+n}, \qquad a \in \mathbb{R},\; a \neq 0.$$

!!! example
    $$2^{-3}\cdot 2^{5}=2^{-3+5}=2^2=4.$$

    Efectivament, $\tfrac{1}{2^3}\cdot 2^5=\tfrac{1}{8}\cdot 32=4$.

!!! note "Importància del fet que $a\neq 0$"
    Si $a=0$ i algun dels exponents és negatiu, la potència no està definida i la propietat no es pot aplicar; per exemple

    $$0^{5}\cdot 0^{-7} =0^{-2}=\frac{1}{0^2}= \frac{1}{0},$$

    que no té sentit. En alguns casos la propietat sí que és certa quan $a=0$, però excloent aquest cas ens assegurem que la propietat sigui vàlida en general.

!!! tip "Propietat: quocient de potències de la mateixa base"
    $$\frac{a^m}{a^n} = a^{m-n}, \qquad a \in \mathbb{R},\; a \neq 0.$$

!!! example
    $$\frac{5^2}{5^{-3}} = 5^{2-(-3)}=5^5=3125.$$

    També: $\tfrac{25}{1/125}=3125$.

!!! tip "Propietat: potència d'una potència"
    $$(a^m)^n = a^{m \cdot n}, \qquad a \in \mathbb{R},\; a \neq 0.$$

!!! example
    $$(3^{-2})^3 = 3^{-6} = \frac{1}{729}.$$

    També: $\left(\tfrac{1}{9}\right)^3=\tfrac{1}{729}$.

!!! note "Atenció als parèntesis"
    No és el mateix $(a^m)^n$ que $a^{m^n}$, on l'exponent és una potència. Per exemple:

    1. $(2^2)^3 = 2^6 = 64$
    2. $2^{2^3}=2^{8}=256$

!!! tip "Propietat: potència d'exponent 1"
    $$a^1 = a, \qquad a \in \mathbb{R}.$$

!!! example
    $$(-7)^1 = -7.$$

!!! tip "Propietat: potència d'un producte"
    $$(a \cdot b)^n = a^n \cdot b^n, \qquad a,b \in \mathbb{R},\; ab\neq 0.$$

!!! example
    $$
    (2\cdot 3)^{-2} = 6^{-2} = \frac{1}{36}
    \quad\text{i}\quad
    2^{-2}\cdot 3^{-2} = \tfrac{1}{4}\cdot \tfrac{1}{9}=\tfrac{1}{36}.
    $$

!!! note "Compte"
    Aquesta propietat no val per a sumes: $(a+b)^n \neq a^n+b^n$.

!!! tip "Propietat: potència d'un quocient"
    $$\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}, \qquad a,b \in \mathbb{R},\; b\neq 0.$$

!!! example
    $$
    \left(\frac{2}{5}\right)^{-3} = \left(\frac{5}{2}\right)^3=\frac{125}{8},
    \quad\text{i també}\quad \frac{2^{-3}}{5^{-3}}=\frac{1/8}{1/125}=\frac{125}{8}.
    $$

!!! note "Consell"
    Cal posar parèntesis a tota la fracció quan calgui. No és el mateix

    $$\left(\tfrac{2}{5}\right)^3 = \tfrac{2^3}{5^3} = \tfrac{8}{125}$$

    que

    $${\tfrac{2}{5}}^3 = \tfrac{2^3}{5}= \frac{8}{5}.$$

## Exemples finals

Vegem alguns exemples amb algunes de les propietats anteriors combinades:

!!! example "Operació amb fraccions i variables"
    $$
    \left(\frac{9x}{2}\right)^3
    = \frac{(9 \cdot x)^3}{2^3}
    = \frac{9^3 \cdot x^3}{2^3}
    = \frac{(3^2)^3 \cdot x^3}{2^3}
    = \frac{3^6 \cdot x^3}{2^3}
    = \frac{3^6}{2^3}x^3
    = \frac{729}{8} x^3
    $$

    (S'han aplicat, en ordre, les propietats de la potència d'un quocient, la potència d'un producte i la potència d'una potència.)

!!! example "Descomposició en factors primers"
    $$
    \frac{(12)^2 \cdot (9)^3}{(8)^{-4}} =
    \frac{(2^2 \cdot 3)^2 \cdot (3^2)^3}{(2^3)^{-4}}
    = \frac{(2^2)^2\cdot 3^2 \cdot (3^2)^3}{(2^3)^{-4}}
    = \frac{2^4 \cdot 3^2 \cdot 3^6}{2^{-12}}
    $$

    $$
    = 2^4 \cdot 3^2 \cdot 3^6 \cdot 2^{12}
    = 2^{4+12} \cdot 3^{2+6} = 2^{16} \cdot 3^{8}
    $$

!!! example "Massa atòmica de l'hidrogen"
    L'àtom d'hidrogen (H) té una massa de $1{,}66\cdot10^{-24}\,\text{g}$. Quants àtoms es necessiten per obtenir $10\,\text{kg}$ d'aquest gas?

    $$
    10\,\text{kg}\cdot\frac{1000\,\text{g}}{1\,\text{kg}}\cdot
    \frac{1\ \text{àtom}}{1{,}66\cdot10^{-24}\,\text{g}}
    =
    \frac{10^{4}}{1{,}66\cdot10^{-24}}\ \text{àtoms}
    =\ \frac{10^{4}\cdot10^{24}}{1{,}66}\ \text{àtoms}
    $$

    $$
    =\ \frac{1}{1{,}66}\cdot10^{28}\ \text{àtoms}
    \approx 0{,}6024\cdot10^{28}\ \text{àtoms}
    = \boxed{6{,}024\cdot10^{27}\ \text{àtoms}}
    $$

!!! note "Massa atòmica"
    La *massa atòmica* fa referència a la massa d'un sol àtom. En aquest exemple s'utilitza com a **factor de conversió** per passar de grams a nombre d'àtoms: $1{,}66\cdot 10^{-24}\,\text{g} \longleftrightarrow 1\ \text{àtom d'H}$.

## Annex: notació científica

Una de les aplicacions més freqüents de les potències és l'expressió de nombres molt grans o molt petits en **notació científica**. Un nombre està en notació científica quan s'escriu en la forma

$$a \cdot 10^n, \qquad 1 \leq a < 10, \quad n \in \mathbb{Z}.$$

L'exponent de la potència de 10 indica l'**ordre de magnitud**. Això permet comparar nombres molt grans o molt petits només mirant els exponents: com més gran és l'exponent, més gran és el nombre.

!!! example "Notació científica"
    $$0{,}000\,45 = 4{,}5 \cdot 10^{-4}, \qquad 72\,300 = 7{,}23 \cdot 10^{4}.$$

!!! note "Consell pràctic"
    En càlculs amb notació científica, es poden separar els factors numèrics i els factors de potències de 10:

    $$(a\cdot 10^m)(b\cdot 10^n) = (a\cdot b)\cdot 10^{m+n}.$$

    El factor numèric ha d'estar entre $1$ i $10$. Si $a\cdot b$ no compleix aquesta condició, caldrà reescriure el resultat ajustant-lo al format de notació científica.

!!! example "Càlcul amb notació científica"
    $$
    \frac{(6{,}0\cdot 10^{-3})(8{,}0\cdot 10^{7})}{2{,}0\cdot 10^{2}}
    =\frac{6{,}0\cdot 8{,}0}{2{,}0}\cdot 10^{-3+7-2}
    =24\cdot 10^{2}
    =2{,}4\cdot 10^{3}.
    $$

!!! example "Comparació d'ordres de magnitud"
    La massa de la Terra és aproximadament $5{,}97 \cdot 10^{24}\ \text{kg}$, mentre que la massa de la Lluna és $7{,}35 \cdot 10^{22}\ \text{kg}$.

    Només comparant els exponents veiem que $10^{24}$ és cent vegades més gran que $10^{22}$; per tant, la Terra té una massa unes 100 vegades superior a la de la Lluna.

!!! example "Distàncies astronòmiques en notació científica"
    La distància mitjana de la Terra al Sol és aproximadament

    $$149\,600\,000\ \text{km} = 1{,}496 \cdot 10^{8}\ \text{km}.$$

    La distància a l'estrella més propera (Pròxima Centauri) és d'uns

    $$40\,000\,000\,000\,000\ \text{km} \approx 4{,}0 \cdot 10^{13}\ \text{km}.$$

    Els exponents $10^8$ i $10^{13}$ mostren immediatament que la distància a Pròxima Centauri és unes $10^5$ vegades més gran que la distància de la Terra al Sol.
