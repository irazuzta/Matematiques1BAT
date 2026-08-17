# Arrels i radicals

## Definició

!!! abstract "Definició: arrel enèsima"
    Siguin $a \in \mathbb{R}$ i $n \in \mathbb{N}$ amb $n>0$. Direm que $b$ és una **arrel enèsima** de $a$ si es compleix

    $$b^n = a.$$

    Una arrel és, doncs, un nombre real que, elevat a $n$, dona com a resultat $a$.

!!! info "Notació: el símbol radical"
    Per representar una arrel es fa servir el **radical**:

    $$\sqrt[n]{a},$$

    que, per convenció, indica sempre l'**arrel real principal** (la positiva quan $n$ és parell i $a \geq 0$).

    Per exemple: $\sqrt{9}=3$ i $\sqrt[3]{-8}=-2$.

!!! note "Arrel vs. radical"
    Cal distingir bé:

    1. *arrel*: el resultat numèric (per exemple, $3$ és arrel quadrada de $9$).
    2. *radical*: el símbol $\sqrt[n]{a}$ que expressa l'operació.

    A més, quan escrivim $\sqrt{a}$ amb $a \ge 0$, per convenció ens referim només a l'**arrel principal**, és a dir, la positiva. Així, $\sqrt{4}=2$ i no pas $\pm 2$, ja que $\pm 2$ és el conjunt de solucions de l'equació $x^2=4$.

!!! example "Arrel quadrada"
    Considerem $a=9$ i $n=2$. El radical $\sqrt{9}$ indica, per convenció, l'**arrel quadrada principal**:

    $$\sqrt{9} = 3.$$

    Ara bé, si plantegem l'equació $x^2=9$, obtenim dues solucions:

    $$x=\pm\sqrt{9} \quad \Rightarrow \quad x=\pm 3.$$

    Per això es diu que $3$ i $-3$ són les *arrels de l'equació* $x^2-9=0$, mentre que el radical $\sqrt{9}$ denota únicament l'arrel principal positiva.

!!! example "Arrel cúbica"
    Considerem $a=-8$ i $n=3$. Només hi ha una arrel real que compleixi la definició: $b=-2$, ja que $(-2)^3 = -8$.

    Quan $n$ és senar, l'arrel $n$-èsima real és única. Direm que $-2$ és l'*arrel cúbica* de $-8$.

!!! example "Nombres sense arrels reals"
    Considerem el radical $\sqrt[4]{-16}$. Volem trobar un $b \in \mathbb{R}$ tal que $b^4 = -16$.

    Per a qualsevol nombre real $b$, la potència $b^4$ és positiva. En conseqüència, **no existeix cap arrel real quarta de $-16$**.

    Quan l'índex $n$ és parell i el radicand és negatiu, el radical no està definit en $\mathbb{R}$.

!!! note "Arrels complexes"
    Que no existeixin nombres reals que compleixin $b^4 = -16$ no vol dir que *no existeixin arrels*: hi ha solucions, però no pertanyen a $\mathbb{R}$, sinó a un conjunt més ampli, els *nombres complexos*. Per tant, és més correcte dir que "no hi ha arrels **reals**".

    Els nombres complexos s'obtenen afegint un nou element $i$ que compleix $i^2 = -1$. Amb aquest conjunt, les arrels quartes de $-16$ són:

    $$
    a_1 = \sqrt{2} + \sqrt{2}i, \quad
    a_2 = \sqrt{2} - \sqrt{2}i, \quad
    a_3 = -\sqrt{2} + \sqrt{2}i, \quad
    a_4 = -\sqrt{2} - \sqrt{2}i.
    $$

A partir de la definició d'arrel enèsima, és fàcil veure el següent fet:

!!! tip "Propietat: definició equivalent d'arrel enèsima"
    Si $b = \sqrt[n]{a}$, aleshores

    $$\left(\sqrt[n]{a}\right)^n = b^n = a.$$

Aquest resultat és una conseqüència immediata de la definició i només és vàlid quan el radical $\sqrt[n]{a}$ és un nombre real. Això depèn de la paritat de l'índex $n$ i del signe del radicand $a$:

!!! tip "Propietat: classificació segons l'índex i el radicand"
    | Radicand | Índex | Nombre d'arrels reals | Expressió radical |
    |---|---|---|---|
    | $a>0$ | Parell | 2 (dues) | $\pm \sqrt[n]{a}$ |
    | $a>0$ | Senar | 1 (única) | $\sqrt[n]{a}$ |
    | $a<0$ | Parell | Cap | — |
    | $a<0$ | Senar | 1 (única) | $\sqrt[n]{a} = -\sqrt[n]{\lvert a\rvert}$ |
    | $a=0$ | — | 1 (única) | $\sqrt[n]{0}=0$ |

## Relació amb les potències

El concepte d'arrel està estretament vinculat amb el de potència: $b$ és una arrel enèsima d'$a$ si $b^n = a$. El concepte d'arrel no és res més que la relació de potència vista a la inversa:

$$
b^n=a
\quad \Longleftrightarrow \quad
b=\text{arrel $n$-èsima d'}a.
$$

Si volem estendre el significat de les potències a exponents fraccionaris, cal que aquestes siguin coherents amb la definició d'arrel. En particular, si $b^n=a$, aleshores

$$(b^n)^{\tfrac{1}{n}} = a^{\tfrac{1}{n}} \quad \Rightarrow \quad b = a^{\tfrac{1}{n}}.$$

Per convenció, fem servir el radical per representar aquestes arrels. Així arribem a la definició següent:

!!! abstract "Definició: expressió d'un radical com a potència"
    Siguin $m,n \in \mathbb{N}$ amb $n>0$. Definim

    $$a^{\tfrac{m}{n}} := \left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}.$$

Aquest fet ens permet convertir els radicals en potències i, si cal, fer servir les propietats d'aquestes per simplificar o resoldre problemes.

!!! example "Simplificació de radicals"
    1. Simplifiquem $\sqrt[4]{1024}$:

        $$
        \sqrt[4]{1024}
        = \sqrt[4]{2^{10}}
        = 2^{\tfrac{10}{4}}
        = 2^{\tfrac{5}{2}}
        = \sqrt{2^{5}}
        = \sqrt{32}.
        $$

        (hem aplicat la definició d'expressió d'un radical com a potència)

    2. Simplifiquem $\sqrt[3]{64}$:

        $$
        \sqrt[3]{64}
        = \sqrt[3]{4^{3}}
        = 4^{\tfrac{3}{3}}
        = 4^1 =
        4.
        $$

## Propietats i exemples

A partir de la definició de potència amb exponent fraccionari, podem deduir que les arrels hereten directament les propietats de les potències. Les regles bàsiques que ja coneixem per a exponents enters continuen essent vàlides en aquest nou context, sempre que es respectin les condicions d'existència (segons la paritat de l'índex i el signe del radicand).

!!! tip "Propietat: simplificació i amplificació d'índex i exponent"
    $$
    \sqrt[np]{a^{mp}} \;=\; \sqrt[n]{a^{m}},
    \qquad n,p,m \in \mathbb{N},\; n\ge 2,\; p\ge 1.
    $$

    Val en $\mathbb{R}$ sota aquestes condicions:

    - $n$ senar: $a \in \mathbb{R}$
    - $n$ parell i $m$ parell: $a \in \mathbb{R}$
    - $n$ parell i $m$ imparell: $a \ge 0$

!!! example "Simplificació d'una arrel"
    $$
    \sqrt[4]{1024}
    \;=\; \sqrt[2\cdot \cancel{2}]{2^{5\cdot \cancel{2}}}
    \;=\; \sqrt{2^5}
    \;=\; \sqrt{32}.
    $$

    També ho podem veure passant primer l'arrel a potència fraccionària:

    $$
    \sqrt[4]{1024} = 1024^{\tfrac{1}{4}}
    = (2^{10})^{\tfrac{1}{4}}
    = 2^{\tfrac{10}{4}}
    = 2^{\tfrac{5}{2}}
    = \sqrt{2^5} = \sqrt{32}.
    $$

!!! note "Compte amb “cancel·lar $p$” sense restriccions"
    Com que $(-2)\cdot(-2)=4$, tenim $\sqrt[4]{(-2)^2}=\sqrt[4]{4}=\sqrt{2}$.

    Si "cancel·lem $p$" sense mirar les condicions:

    $$
    \sqrt[2 \cdot \cancel{2}]{(-2)^{1\cdot \cancel{2}}}
    =
    \sqrt[2]{(-2)^{1}}=\sqrt{-2},
    $$

    però $\sqrt{-2}$ **no està definit en $\mathbb{R}$**. Quan $n$ és parell i $m$ és imparell, cal exigir $a\ge 0$ perquè la igualtat tingui sentit en $\mathbb{R}$.

!!! example "Comparació de radicals"
    Comproveu quin d'aquests nombres és més gran, sense calculadora: $\sqrt{2}$ o $\sqrt[3]{3}$.

    $$\sqrt{2} = 2^{\tfrac{1}{2}} = 2^{\tfrac{3}{6}} = \sqrt[6]{2^3} = \sqrt[6]{8}$$

    $$\sqrt[3]{3} = 3^{\tfrac{1}{3}} = 3^{\tfrac{2}{6}} = \sqrt[6]{3^2} = \sqrt[6]{9}$$

    Per tant, $\sqrt[3]{3} > \sqrt{2}$, ja que $\sqrt[6]{9} > \sqrt[6]{8}$.

    En realitat, el que hem fet és portar els dos exponents fraccionaris ($\tfrac{1}{2}$ i $\tfrac{1}{3}$) a un denominador comú (6), de manera que la comparació es redueix a comparar els numeradors ($3$ i $2$).

!!! tip "Propietat: producte d'arrels del mateix índex"
    $$
    \sqrt[n]{a}\cdot\sqrt[n]{b} \;=\; \sqrt[n]{\,a\cdot b\,},
    \qquad n\in\mathbb{N},\; n\ge 2
    $$

    Val per a tot $a,b\in\mathbb{R}$ si $n$ és senar; si $n$ és parell, cal $a\ge 0$ i $b\ge 0$.

    Es dedueix directament de la definició de potència d'exponent fraccionari:

    $$\sqrt[n]{a}\cdot\sqrt[n]{b} = a^{\tfrac{1}{n}} \cdot b^{\tfrac{1}{n}} = (a\cdot b)^{\tfrac{1}{n}} = \sqrt[n]{a\cdot b}.$$

!!! note "Compte amb $a\cdot b>0$ però $a,b<0$"
    Sabem que $(-1)\cdot(-1)=1$, així que $\sqrt{(-1)\cdot(-1)}=\sqrt{1}=1$.

    Si apliquem la propietat sense restriccions: $\sqrt{-1}\cdot\sqrt{-1}\stackrel{?}{=}1$, però en $\mathbb{R}$ $\sqrt{-1}$ no està definit.

    Per $n$ parell cal $a\ge 0$ i $b\ge 0$; la condició $ab\ge 0$ per si sola és insuficient.

!!! example "Extracció i introducció de factors"
    1. **Extracció de factors d'un radical.** Separem la potència en dos blocs, un múltiple de l'índex i un altre no:

        $$
        \sqrt[4]{1024} = \sqrt[4]{2^{10}}
        = \sqrt[4]{2^{8} \cdot 2^2}
        = \sqrt[4]{2^8} \cdot \sqrt[4]{2^{2}}
        = 2^{\tfrac{8}{4}} \cdot \sqrt[4]{2^2}
        = 2^2 \cdot \sqrt{2}
        = 4 \cdot \sqrt{2}.
        $$

    2. **Introducció de factors dins d'un radical.** Portem el factor $x^2$ a l'interior del radical, elevant-lo a l'índex:

        $$
        x^2 \sqrt[3]{2}
        = \sqrt[3]{x^{2 \cdot 3}} \cdot \sqrt[3]{2}
        = \sqrt[3]{2x^6}.
        $$

!!! tip "Propietat: quocient d'arrels del mateix índex"
    $$
    \frac{\sqrt[n]{a}}{\sqrt[n]{b}}
    \;=\; \sqrt[n]{\tfrac{a}{b}},
    \qquad n \in \mathbb{N},\; n\ge 2
    $$

    Cert per a tot $a\in\mathbb{R},\; b\neq 0$ si $n$ és senar, i per a $a\ge 0,\; b>0$ si $n$ és parell.

!!! note "Compte amb radicands negatius"
    Considerem $n=2$, $a=-4$ i $b=-1$: $\dfrac{\sqrt{-4}}{\sqrt{-1}} = \sqrt{\tfrac{-4}{-1}}$.

    A l'esquerra, ni $\sqrt{-4}$ ni $\sqrt{-1}$ existeixen en $\mathbb{R}$, per tant l'expressió no té sentit en els reals. A la dreta, $\sqrt{\tfrac{-4}{-1}} = \sqrt{4} = 2$, que sí que és real.

    Aquesta aparent paradoxa mostra que, per a $n$ parell, cal exigir $a\ge 0$ i $b>0$ per poder aplicar la propietat correctament.

!!! example "Simplificació de quocients d'arrels"
    1. $\sqrt{\tfrac{4}{9}} = \tfrac{\sqrt{4}}{\sqrt{9}} = \tfrac{2}{3}$
    2. $\dfrac{\sqrt[3]{-16}}{\sqrt[3]{2}} = \sqrt[3]{\tfrac{-16}{2}} = \sqrt[3]{-8} = -2$

    Aquesta propietat es pot llegir en ambdós sentits: sovint s'aplica per simplificar radicals, però en altres casos pot ser més útil fer-la servir a l'inrevés (per exemple, escriure una fracció de radicals com un únic radical).

Per multiplicar o dividir arrels amb índexs diferents, la propietat del producte o quocient d'arrels del mateix índex no es pot aplicar directament. Primer cal reduir les arrels a un índex comú —normalment el mínim comú múltiple (m.c.m.) dels índexs— mitjançant la propietat d'amplificació d'índex i exponent.

!!! tip "Propietat: multiplicació i divisió d'arrels amb índex diferent"
    Per multiplicar o dividir $\sqrt[n]{a}$ i $\sqrt[m]{b}$, es busca el mínim comú múltiple $k$ de $n$ i $m$, s'amplifiquen totes dues arrels a índex $k$ i, un cop tenen el mateix índex, s'aplica la propietat del producte o del quocient d'arrels del mateix índex.

!!! example "Multiplicació d'arrels amb índex diferent"
    Multipliquem $\sqrt{2}$ i $\sqrt[3]{3}$.

    El mínim comú múltiple de $2$ i $3$ és $6$. Amplifiquem cada arrel a índex $6$:

    $$
    \sqrt{2} = 2^{\tfrac{1}{2}} = 2^{\tfrac{3}{6}} = \sqrt[6]{2^3} = \sqrt[6]{8}
    \qquad\qquad
    \sqrt[3]{3} = 3^{\tfrac{1}{3}} = 3^{\tfrac{2}{6}} = \sqrt[6]{3^2} = \sqrt[6]{9}
    $$

    Ara que tenen el mateix índex, ja podem multiplicar-les:

    $$
    \sqrt{2}\cdot\sqrt[3]{3} = \sqrt[6]{8}\cdot\sqrt[6]{9} = \sqrt[6]{8\cdot 9} = \sqrt[6]{72}
    $$

!!! example "Divisió d'arrels amb índex diferent"
    Dividim $\sqrt[3]{3}$ entre $\sqrt{2}$, reaprofitant l'amplificació de l'exemple anterior (índex comú $6$):

    $$
    \frac{\sqrt[3]{3}}{\sqrt{2}} = \frac{\sqrt[6]{9}}{\sqrt[6]{8}} = \sqrt[6]{\frac{9}{8}}
    $$

!!! tip "Propietat: arrel d'una arrel"
    $$
    \sqrt[n]{\sqrt[m]{a}} \;=\; \sqrt[n\cdot m]{a},
    \qquad n,m \in \mathbb{N},\; n,m \ge 2
    $$

    Val per a tot $a \in \mathbb{R}$ si $n$ i $m$ són senars; si algun dels dos és parell, cal $a \geq 0$.

!!! example "Arrel d'una arrel"
    Escrivim en forma d'una sola arrel:

    $$\sqrt[3]{\sqrt[4]{x}} = \sqrt[3\cdot 4]{x} = \sqrt[12]{x}.$$

    Per exemple: $\sqrt{\sqrt[4]{16}} = \sqrt{2} = \sqrt{2}$, i $\sqrt[2\cdot 4]{16} = \sqrt[8]{16} = \sqrt{2}$.

!!! note "Compte amb restriccions en arrels imbricades"
    Considerem $n=2$, $m=3$ i $a=-1$: $\sqrt{\sqrt[3]{-1}} = \sqrt[6]{-1}$.

    A l'esquerra, $\sqrt[3]{-1}=-1$ i, per tant, tenim l'arrel quadrada de $-1$, que **no** està definida en $\mathbb{R}$. A la dreta, $\sqrt[6]{-1}$ correspon a les arrels sisenes de $-1$ (6 elements, en $\mathbb{C}$).

    Per tant, els dos costats de la igualtat no representen el mateix conjunt de solucions: només si s'escull una branca concreta de l'arrel en $\mathbb{C}$ es pot establir la correspondència.

!!! tip "Propietat: potència d'una arrel"
    $$
    \bigl(\sqrt[n]{a}\bigr)^{m} \;=\; \sqrt[n]{\,a^{m}\,},
    \qquad n \in \mathbb{N},\; n\ge 2,\; m \in \mathbb{N}
    $$

    Cert per a tot $a\in\mathbb{R}$ si $n$ és senar, i per a $a\ge 0$ si $n$ és parell.

!!! note "Paradoxa amb potència d'una arrel"
    Considerem $n=2$, $m=2$ i $a=-1$: $\bigl(\sqrt{-1}\bigr)^{2} = \sqrt{(-1)^{2}}$.

    A l'esquerra, $\sqrt{-1}$ no està definida en $\mathbb{R}$. A la dreta, $\sqrt{1}=1$, que sí ho és. Si s'estén a $\mathbb{C}$, $\sqrt{-1}$ pot ser $i$ o $-i$, i en tots dos casos $(i)^2 = (-i)^2 = -1$: el costat esquerre sempre val $-1$, mentre que el dret val $+1$.

    Això mostra que, si $n$ és parell, cal exigir $a\ge 0$ per aplicar la propietat sense contradiccions.

!!! example "Potència d'una arrel"
    1. Índex senar (admet radicand negatiu): $\bigl(\sqrt[3]{-2}\bigr)^{2} = \sqrt[3]{(-2)^{2}} = \sqrt[3]{4}$.
    2. Índex parell (cal $a\ge 0$): $\bigl(\sqrt{5}\bigr)^{3} = \sqrt{5^{3}} = \sqrt{125}$.

## Aplicacions de les propietats dels radicals

Vegem alguns exemples d'aplicació directa de les propietats anteriors, útils per simplificar expressions i treballar amb fraccions o sumes que contenen radicals.

!!! example "Racionalització de denominadors"
    Donada una fracció que conté arrels al denominador, és interessant, en alguns casos, eliminar-les (per exemple, en sumes i restes de fraccions on necessitem enters per trobar el mínim comú múltiple).

    1. $$
        \frac{3}{\sqrt{5}}
        = \frac{3}{\sqrt{5}} \cdot \frac{\sqrt{5}}{\sqrt{5}}
        = \frac{3\sqrt{5}}{(\sqrt{5})^2}
        = \frac{3\sqrt{5}}{\sqrt{5^2}}
        = \frac{3\sqrt{5}}{5}.
        $$

    2. $$
        \frac{1}{2-\sqrt{3}}
        = \frac{1}{2-\sqrt{3}} \cdot \frac{2+\sqrt{3}}{2+\sqrt{3}}
        =\frac{2+\sqrt{3}}{(2-\sqrt{3})\cdot(2+\sqrt{3})}
        = \frac{2+\sqrt{3}}{2^2-(\sqrt{3})^2}
        = \frac{2+\sqrt{3}}{4-3}
        = 2+\sqrt{3}.
        $$

!!! note "Identitat notable per a la racionalització"
    Per eliminar arrels al denominador amb expressions del tipus $a-b$ o $a+b$, multipliquem pel conjugat, fent servir la identitat notable

    $$(a+b)(a-b) = a^2 - b^2.$$

    Si $a$ o $b$ són arrels, en elevar-los al quadrat passen a ser nombres enters i, per tant, la seva resta també.

!!! example "Suma i resta de radicals"
    Els radicals només es podran sumar o restar en aquells casos en què es puguin escriure amb el mateix radicand i el mateix índex:

    $$
    2\sqrt{2} + 5\sqrt{8} - 2\sqrt{18} + \sqrt{50}
    = 2\sqrt{2} + 5\sqrt{2^2 \cdot 2} - 2\sqrt{3^2 \cdot 2} + \sqrt{5^2 \cdot 2}
    $$

    $$
    = 2\sqrt{2} + 5 \cdot 2 \sqrt{2} - 2 \cdot 3 \sqrt{2} + 5\sqrt{2}
    = 2\sqrt{2} + 10\sqrt{2} - 6\sqrt{2} + 5\sqrt{2}
    = (2+10-6+5)\sqrt{2} = 11\sqrt{2}.
    $$

## Exemple final

!!! example "Diagonal i perímetre d'un rectangle"
    Considerem un rectangle de costats

    $$
    a = \frac{36}{\sqrt{18}}
    \qquad\text{i}\qquad
    b = \sqrt{50} - \sqrt{8},
    $$

    ![Rectangle amb costats a i b i diagonal d](img/rectangle-diagonal-perimetre.png)

    amb diagonal $d$. Resoleu sense calculadora:

    1. Simplifiqueu $a$ i $b$.
    2. Calculeu la diagonal $d$ del rectangle.
    3. Calculeu el perímetre $P$ i escriviu-lo de la forma més senzilla possible.

    **Solució**

    1. Simplificació de $a$ i $b$:

        $$
        a = \frac{36}{\sqrt{18}} \cdot \frac{\sqrt{18}}{\sqrt{18}}=\frac{36\sqrt{18}}{18} = 2\sqrt{18} = 2 \sqrt{3^2\cdot 2}=6 \sqrt{2}
        $$

        $$
        b=\sqrt{50}-\sqrt{8}
        =\sqrt{5^2\cdot 2}-\sqrt{2^2\cdot 2}
        =5\sqrt{2}-2\sqrt{2}
        =3\sqrt{2}.
        $$

    2. Diagonal (teorema de Pitàgores):

        $$
        d=\sqrt{a^2+b^2}
        =\sqrt{(6\sqrt{2})^2+(3\sqrt{2})^2}
        =\sqrt{36\cdot 2 + 9\cdot 2}
        =\sqrt{90}=\sqrt{9\cdot 10}=3\sqrt{10}.
        $$

    3. Perímetre:

        $$P=2(a+b)=2\bigl(6\sqrt{2}+3\sqrt{2}\bigr) =12\sqrt{2}+6\sqrt{2} = 18\sqrt{2}.$$

!!! note "Teorema de Pitàgores"
    En un triangle rectangle, el quadrat de la hipotenusa és igual a la suma dels quadrats dels catets:

    $$c^2 = a^2 + b^2.$$

    Per tant, si coneixem els catets $a$ i $b$, la hipotenusa $c$ s'obté amb $c = \sqrt{a^2+b^2}$. El signe radical $\sqrt{\phantom{a}}$ denota, per convenció, l'arrel quadrada positiva (l'arrel principal), que en aquest cas és la que volem, ja que es tracta de la longitud del costat d'un triangle, sempre positiva.
