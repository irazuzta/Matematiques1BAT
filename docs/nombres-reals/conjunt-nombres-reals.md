# El conjunt dels nombres reals

Al llarg dels cursos anteriors hem anat veient diferents conjunts de nombres que s'agrupaven en funció d'una sèrie de característiques que tenien en comú.

El conjunt més senzill que hi ha és el format pels **nombres naturals**. Aquests els podem definir, de manera informal, com els nombres que utilitzem per comptar els elements d'un conjunt finit:

$$
\mathbb{N} = \{0, 1, 2, 3, 4, \dots\}
$$

El nombre $0$ s'anomena element neutre per la suma i $1$ l'element neutre pel producte. Això vol dir que, per exemple, si prenem el nombre $4$ es té que

$$
4 + 0 = 0 + 4 = 4 \qquad\qquad 4 \cdot 1 = 1 \cdot 4 = 4
$$

és a dir, són nombres que en les seves respectives operacions no alteren el nombre original.

Podem definir de manera natural els **nombres oposats** com aquells nombres que, en sumar-los al nombre original, donen com a resultat el $0$. La notació que utilitzarem és el nombre amb un $-$ al davant. Per exemple:

$$
5 + (-5) = 0
$$

Aquest fet ens permet definir la resta com la suma d'un nombre amb l'oposat del qual volem restar, és a dir, si considerem $8$ i $3$ es té que

$$
8 - 3 = 8 + (-3) = 5
$$

Si al conjunt dels naturals afegim els oposats de cadascun d'aquests, obtenim el conjunt dels **nombres enters**:

$$
\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}
$$

D'altra banda, tot nombre té una representació decimal: el podem expressar mitjançant una part entera i una decimal, separades per una coma. Per exemple:

$$
-6 = -6{,}0 \qquad 1{,}56 \qquad 1{,}\overline{3} \qquad \pi = 3{,}141592\dots
$$

Els nombres decimals es poden separar entre els **racionals** ($\mathbb{Q}$), que són els que es poden expressar mitjançant una fracció, i els **irracionals** ($\mathbb{R}\setminus\mathbb{Q}$), que són els que no es poden expressar mitjançant una fracció. De fet,

$$
x \in \mathbb{Q} \;\;\Leftrightarrow\;\; \exists\, m,n \in \mathbb{Z},\; n \neq 0 \;\; \text{tals que } x=\frac{m}{n}
$$

!!! note "Pertinença"
    Quan un element pertany a un conjunt fem servir el símbol $\in$. Si no hi pertany, fem servir $\notin$.

    Exemple: $-3 \in \mathbb{Z}$, però $-3 \notin \mathbb{N}$.

!!! note "Implica i equival"
    $\Rightarrow$ vol dir *implica* i es llegeix "aleshores". $\Leftrightarrow$ vol dir *equivalència* (si i només si) i es llegeix "equival".

    Exemple: $x \in \mathbb{N} \Rightarrow x \in \mathbb{Z}$ — si $x$ és un nombre natural, aleshores també és un nombre enter.

En el cas dels nombres racionals, si aquests no són nombres enters, poden ser **exactes** (part decimal amb un nombre finit de xifres) o **periòdics** (part decimal amb infinites xifres que a partir d'un punt es repeteixen seguint un patró); aquests últims poden ser purs o mixtos.

!!! note "Quantificadors"
    $\forall$ vol dir "per a tot" i es llegeix "per a qualsevol". $\exists$ vol dir "existeix" i es llegeix "hi ha".

    Exemple: $\forall n \in \mathbb{N},\; n+1 \in \mathbb{N}$ — per a tot nombre natural $n$, també $n+1$ és natural.

El següent esquema mostra aquesta divisió:

![Esquema dels conjunts de nombres](img/schema-conjunts-numerics.png)

Observem que hi ha una relació d'inclusió:

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}
$$

!!! note "Inclusió"
    Si $A \subset B$, tots els elements d'$A$ són també d'$B$.

    Exemple: $\mathbb{N} \subset \mathbb{Z}$.
