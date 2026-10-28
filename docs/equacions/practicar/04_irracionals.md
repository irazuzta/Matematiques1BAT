# Equacions irracionals

Exercicis 17–20. Intenta resoldre cada exercici abans de desplegar-ne la solució pas a pas.

### Exercici 17

Resol i comprova les solucions:

| | |
|:--|:--|
| **a)** $\sqrt{x+5}=x-1$ | **b)** $\sqrt{2x+3}+x=6$ |
| **c)** $x-\sqrt{x}=2$ | **d)** $2+\sqrt{x-1}=0$ |

??? note "Mostra la solució"

    **a)** L'arrel ja està aïllada. Elevem els dos membres al quadrat i desenvolupem el quadrat del binomi $(x-1)^2=x^2-2x+1$:

    $$
    \begin{aligned}
    \left(\sqrt{x+5}\right)^2 &= (x-1)^2\\
    x+5 &= x^2-2x+1\\
    0 &= x^2-3x-4
    \end{aligned}
    $$

    Resolem l'equació de segon grau:

    $$
    x=\frac{3\pm\sqrt{9+16}}{2}=\frac{3\pm5}{2} \Rightarrow x=4,\quad x=-1.
    $$

    Com que hem elevat al quadrat, comprovem les dues candidates a l'equació original:

    - $x=4$: $\sqrt{4+5}=\sqrt9=3$ i $4-1=3$. Es compleix, és vàlida.
    - $x=-1$: $\sqrt{-1+5}=\sqrt4=2$, però $-1-1=-2$. Com que $2\neq-2$, no és vàlida (és una solució estranya).

    **Resposta:** $x=4$ ($x=-1$ no és vàlida).

    **b)** Primer aïllem l'arrel passant la $x$ a l'altre membre:

    $$
    \sqrt{2x+3}=6-x.
    $$

    Elevem al quadrat, amb $(6-x)^2=36-12x+x^2$:

    $$
    \begin{aligned}
    2x+3 &= 36-12x+x^2\\
    0 &= x^2-14x+33
    \end{aligned}
    $$

    $$
    x=\frac{14\pm\sqrt{196-132}}{2}=\frac{14\pm\sqrt{64}}{2}=\frac{14\pm8}{2} \Rightarrow x=11,\quad x=3.
    $$

    Comprovem a l'equació original $\sqrt{2x+3}+x=6$:

    - $x=3$: $\sqrt{9}+3=3+3=6$. És vàlida.
    - $x=11$: $\sqrt{25}+11=5+11=16\neq6$. No és vàlida.

    **Resposta:** $x=3$ ($x=11$ no és vàlida).

    **c)** Aïllem l'arrel:

    $$
    x-2=\sqrt{x}.
    $$

    Elevem al quadrat, amb $(x-2)^2=x^2-4x+4$:

    $$
    \begin{aligned}
    x^2-4x+4 &= x\\
    x^2-5x+4 &= 0
    \end{aligned}
    $$

    $$
    x=\frac{5\pm\sqrt{25-16}}{2}=\frac{5\pm3}{2} \Rightarrow x=4,\quad x=1.
    $$

    Comprovem a l'equació original $x-\sqrt{x}=2$:

    - $x=4$: $4-\sqrt4=4-2=2$. És vàlida.
    - $x=1$: $1-\sqrt1=1-1=0\neq2$. No és vàlida.

    **Resposta:** $x=4$ ($x=1$ no és vàlida).

    **d)** Aïllem l'arrel:

    $$
    \sqrt{x-1}=-2.
    $$

    Aquí ja veiem que l'equació no té solució: una arrel quadrada mai no pot ser negativa ($\sqrt{A}\geq0$). Tot i així, vegem què passa si apliquem el procediment sense pensar-hi. Elevem al quadrat:

    $$
    x-1=4 \Rightarrow x=5.
    $$

    Comprovem a l'equació original: $2+\sqrt{5-1}=2+\sqrt4=2+2=4\neq0$. Per tant, $x=5$ no és vàlida. En elevar al quadrat hem "perdut" el signe negatiu de $-2$, i per això ha aparegut una solució estranya.

    **Resposta:** no té solució ($x=5$ no és vàlida: una arrel quadrada no pot valer $-2$).

### Exercici 18

Resol les equacions amb dos radicals següents:

- **a)** $\sqrt{x+7}-\sqrt{x}=1$
- **b)** $\sqrt{3x+1}-\sqrt{x-1}=2$
- **c)** $\sqrt{x+4}+\sqrt{x-1}=5$
- **d)** *(més difícil)* $\sqrt{2x+1}+\sqrt{x-3}=2\sqrt{x}$

??? note "Mostra la solució"

    **a)** Aïllem una de les arrels:

    $$
    \sqrt{x+7}=1+\sqrt{x}.
    $$

    Elevem al quadrat. A la dreta tenim el quadrat d'un binomi: $\left(1+\sqrt x\right)^2=1+2\sqrt x+x$.

    $$
    \begin{aligned}
    x+7 &= 1+2\sqrt{x}+x\\
    6 &= 2\sqrt{x}\\
    3 &= \sqrt{x}
    \end{aligned}
    $$

    Ara l'arrel que queda ja està aïllada. Tornem a elevar al quadrat: $x=9$.

    Comprovem: $\sqrt{9+7}-\sqrt9=\sqrt{16}-3=4-3=1$. És vàlida.

    **Resposta:** $x=9$.

    **b)** Aïllem una de les arrels:

    $$
    \sqrt{3x+1}=2+\sqrt{x-1}.
    $$

    Elevem al quadrat, amb $\left(2+\sqrt{x-1}\right)^2=4+4\sqrt{x-1}+(x-1)$:

    $$
    \begin{aligned}
    3x+1 &= 4+4\sqrt{x-1}+x-1\\
    3x+1-x-3 &= 4\sqrt{x-1}\\
    2x-2 &= 4\sqrt{x-1}\\
    x-1 &= 2\sqrt{x-1}
    \end{aligned}
    $$

    (A l'última línia hem dividit per $2$.) L'arrel ja està aïllada; tornem a elevar al quadrat, amb $(x-1)^2=x^2-2x+1$:

    $$
    \begin{aligned}
    x^2-2x+1 &= 4(x-1)\\
    x^2-2x+1 &= 4x-4\\
    x^2-6x+5 &= 0
    \end{aligned}
    $$

    $$
    x=\frac{6\pm\sqrt{36-20}}{2}=\frac{6\pm4}{2} \Rightarrow x=5,\quad x=1.
    $$

    Comprovem a l'equació original $\sqrt{3x+1}-\sqrt{x-1}=2$:

    - $x=1$: $\sqrt4-\sqrt0=2-0=2$. És vàlida.
    - $x=5$: $\sqrt{16}-\sqrt4=4-2=2$. És vàlida.

    **Resposta:** $x=1$, $x=5$.

    **c)** Aïllem una de les arrels:

    $$
    \sqrt{x+4}=5-\sqrt{x-1}.
    $$

    Elevem al quadrat, amb $\left(5-\sqrt{x-1}\right)^2=25-10\sqrt{x-1}+(x-1)$:

    $$
    \begin{aligned}
    x+4 &= 25-10\sqrt{x-1}+x-1\\
    x+4 &= x+24-10\sqrt{x-1}\\
    10\sqrt{x-1} &= 20\\
    \sqrt{x-1} &= 2
    \end{aligned}
    $$

    Tornem a elevar al quadrat: $x-1=4 \Rightarrow x=5$.

    Comprovem: $\sqrt{5+4}+\sqrt{5-1}=\sqrt9+\sqrt4=3+2=5$. És vàlida.

    **Resposta:** $x=5$.

    **d)** Aquí el membre de la dreta ja és un sol radical, així que elevem directament els dos membres al quadrat. A l'esquerra tenim el quadrat d'una suma, $(A+B)^2=A^2+2AB+B^2$, i a la dreta $\left(2\sqrt x\right)^2=4x$:

    $$
    \begin{aligned}
    \left(\sqrt{2x+1}+\sqrt{x-3}\right)^2 &= \left(2\sqrt{x}\right)^2\\
    (2x+1)+2\sqrt{2x+1}\,\sqrt{x-3}+(x-3) &= 4x\\
    3x-2+2\sqrt{(2x+1)(x-3)} &= 4x
    \end{aligned}
    $$

    Aïllem el terme amb l'arrel (el producte de les dues arrels):

    $$
    2\sqrt{(2x+1)(x-3)}=x+2.
    $$

    Abans de tornar a elevar, desenvolupem el producte de dins: $(2x+1)(x-3)=2x^2-6x+x-3=2x^2-5x-3$. Elevem al quadrat, amb $\left(2\sqrt{A}\right)^2=4A$ i $(x+2)^2=x^2+4x+4$:

    $$
    \begin{aligned}
    4\left(2x^2-5x-3\right) &= x^2+4x+4\\
    8x^2-20x-12 &= x^2+4x+4\\
    7x^2-24x-16 &= 0
    \end{aligned}
    $$

    $$
    x=\frac{24\pm\sqrt{576+448}}{14}=\frac{24\pm\sqrt{1024}}{14}=\frac{24\pm32}{14} \Rightarrow x=\frac{56}{14}=4,\quad x=\frac{-8}{14}=-\frac{4}{7}.
    $$

    Comprovem a l'equació original:

    - $x=4$: a l'esquerra, $\sqrt{9}+\sqrt{1}=3+1=4$; a la dreta, $2\sqrt4=2\cdot2=4$. És vàlida.
    - $x=-\dfrac47$: a l'equació original apareixen $\sqrt{x-3}=\sqrt{-\dfrac{25}{7}}$ i $\sqrt{x}=\sqrt{-\dfrac47}$, arrels quadrades de nombres negatius, que no són nombres reals. No és vàlida.

    Aquesta solució estranya ha aparegut en ajuntar les dues arrels en una de sola: per a $x=-\dfrac47$ els dos factors $2x+1=-\dfrac17$ i $x-3=-\dfrac{25}{7}$ són negatius, però el seu producte $\dfrac{25}{49}$ és positiu, i per això sí que compleix $2\sqrt{(2x+1)(x-3)}=x+2$.

    **Resposta:** $x=4$ ($x=-\dfrac47$ no és vàlida).

### Exercici 19

Resol l'equació $\sqrt[3]{x^3-7}=x-1$. Cal comprovar les solucions quan l'arrel és cúbica?

??? note "Mostra la solució"

    Quan l'arrel és cúbica, elevem els dos membres al cub. Aquesta transformació **no introdueix solucions estranyes**: a diferència del quadrat, dos nombres amb el mateix cub són iguals ($A^3=B^3 \Leftrightarrow A=B$), ja que el cub conserva el signe. A més, tot nombre real (també els negatius) té una arrel cúbica real. Tot i així, és bona pràctica comprovar les solucions.

    L'arrel ja està aïllada. Elevem al cub. A la dreta usem el cub d'un binomi, $(a-b)^3=a^3-3a^2b+3ab^2-b^3$:

    $$
    \begin{aligned}
    x^3-7 &= (x-1)^3\\
    x^3-7 &= x^3-3x^2+3x-1\\
    3x^2-3x-6 &= 0\\
    x^2-x-2 &= 0
    \end{aligned}
    $$

    Els termes $x^3$ s'han anul·lat, i a l'última línia hem dividit per $3$. Resolem:

    $$
    x=\frac{1\pm\sqrt{1+8}}{2}=\frac{1\pm3}{2} \Rightarrow x=2,\quad x=-1.
    $$

    Comprovem a l'equació original:

    - $x=2$: $\sqrt[3]{8-7}=\sqrt[3]{1}=1$ i $2-1=1$. És vàlida.
    - $x=-1$: $\sqrt[3]{-1-7}=\sqrt[3]{-8}=-2$ i $-1-1=-2$. És vàlida.

    Com esperàvem, en elevar al cub no ha aparegut cap solució estranya.

    **Resposta:** $x=2$, $x=-1$.

### Exercici 20

Troba $k$ perquè $x=5$ sigui solució de l'equació $\sqrt{x+k}=x-1$. Per a aquest valor de $k$, resol l'equació i comprova les solucions.

??? note "Mostra la solució"

    Si $x=5$ és solució, en substituir $x=5$ l'equació s'ha de complir:

    $$
    \sqrt{5+k}=5-1=4\;\Rightarrow\; 5+k=16\;\Rightarrow\; k=11 .
    $$

    Amb $k=11$ l'equació és $\sqrt{x+11}=x-1$. L'arrel ja està aïllada; elevem els dos membres al quadrat, amb $(x-1)^2=x^2-2x+1$:

    $$
    \begin{aligned}
    \left(\sqrt{x+11}\right)^2&=(x-1)^2\\
    x+11&=x^2-2x+1\\
    0&=x^2-3x-10
    \end{aligned}
    $$

    Resolem l'equació de segon grau:

    $$
    x=\frac{3\pm\sqrt{9+40}}{2}=\frac{3\pm7}{2}\;\Rightarrow\; x=5,\quad x=-2 .
    $$

    Com que hem elevat al quadrat, comprovem les dues candidates a l'equació original:

    - $x=5$: $\sqrt{5+11}=\sqrt{16}=4$ i $5-1=4$. Es compleix, és vàlida.
    - $x=-2$: $\sqrt{-2+11}=\sqrt9=3$, però $-2-1=-3$. Com que $3\neq-3$, no és vàlida (és una solució estranya, que ha aparegut en elevar al quadrat).

    **Resposta:** $k=11$; l'única solució és $x=5$ ($x=-2$ no és vàlida)
