# Equacions racionals i irracionals

## Equacions racionals

Una equació racional és aquella que involucra fraccions algebraiques.

!!! abstract "Definició: equació racional"
    Direm que una equació és **racional** si es pot escriure, amb les transformacions que calguin, com

    $$F(x)=0,$$

    on $F(x)$ és una fracció algebraica. Una manera alternativa d'escriure-la és

    $$\frac{P(x)}{Q(x)} = 0,$$

    on $P(x)$ i $Q(x)$ són polinomis.

Les solucions d'aquestes equacions són els valors reals $a$ que anul·len el numerador ($P(a)=0$) però que, alhora, **no** anul·len el denominador ($Q(a) \neq 0$).

!!! note "Comprovar el domini"
    El pas més important en una equació racional és comprovar les solucions.

    Qualsevol valor $a$ que faci $Q(a)=0$ (que anul·li el denominador) **no pot ser solució**, encara que també anul·li el numerador.

!!! example "**Exemple:** Resolució d'una equació racional (Cas 1)"
    Resolem l'equació:

    $$\frac{x^2-1}{x-1} = 1.$$

    1. Transformem l'equació a la forma $\dfrac{P(x)}{Q(x)}=0$:

        $$\frac{x^2-1}{x-1} - 1 = 0 \;\Rightarrow\; \frac{(x^2-1)-(x-1)}{x-1}=0,$$

        $$\frac{x^2-x}{x-1} = 0.$$

    2. Resolem l'equació del numerador, $P(x)=0$:

        $$x^2-x=0 \;\Rightarrow\; x(x-1)=0.$$

        Les solucions candidates són $x=0$ i $x=1$.

    3. Comprovem les solucions al denominador $Q(x)=x-1$:
        - $x=0 \Rightarrow Q(0) = 0-1 = -1 \neq 0$. Per tant, $x=0$ **és solució**.
        - $x=1 \Rightarrow Q(1) = 1-1 = 0$. Com que anul·la el denominador, $x=1$ **no és solució**.

    L'única solució de l'equació és $x=0$.

!!! example "**Exemple:** Resolució d'una equació racional (Cas 2)"
    Resolem l'equació:

    $$\frac{x+1}{x-1}-\frac{4}{x^2-1}=0.$$

    1. Operem per obtenir una única fracció (recordem que $x^2-1 = (x-1)(x+1)$):

        $$\frac{(x+1)(x+1)}{(x-1)(x+1)} - \frac{4}{x^2-1} = 0,$$

        $$\frac{(x+1)^2-4}{x^2-1} = 0 \;\Rightarrow\; \frac{x^2+2x+1-4}{x^2-1} = 0,$$

        $$\frac{x^2+2x-3}{x^2-1} = 0.$$

    2. Resolem $P(x)=0$: $x^2+2x-3=0$. Obtenim les solucions $x_1=1$ i $x_2=-3$.

    3. Comprovem les solucions al denominador $Q(x)=x^2-1$:
        - $x_1=1 \Rightarrow Q(1) = 1^2-1 = 0$. Com que anul·la el denominador, **no és solució**.
        - $x_2=-3 \Rightarrow Q(-3) = (-3)^2-1 = 8 \neq 0$. Per tant, $x=-3$ **és solució**.

    L'única solució de l'equació és $x=-3$.

## Equacions irracionals

!!! abstract "Definició: equació irracional"
    Direm que una equació és **irracional** si conté la incògnita sota, almenys, un signe radical. És a dir, si la incògnita està dins d'alguna arrel.

El mètode general per resoldre aquestes equacions és aïllar l'arrel (o una de les arrels) i elevar els dos membres de la igualtat al quadrat (o a l'índex de l'arrel) per eliminar el radical.

!!! note "Solucions estranyes"
    Elevar al quadrat els dos membres d'una igualtat **no és una operació equivalent**:

    $$A=B \;\Rightarrow\; A^2=B^2, \qquad \text{però} \qquad A^2=B^2 \;\Rightarrow\; A=\pm B.$$

    Aquest procés pot introduir solucions que no són vàlides (anomenades *solucions estranyes*). Per això és **obligatori comprovar** totes les solucions candidates a l'equació *original*.

!!! example "**Exemple:** Equació irracional amb solució vàlida"
    Resolem l'equació:

    $$x + \sqrt{x^2+5} = 1.$$

    1. Aïllem l'arrel a un costat de la igualtat:

        $$\sqrt{x^2+5} = 1-x.$$

    2. Elevem els dos membres al quadrat:

        $$\left( \sqrt{x^2+5} \right)^2 = (1-x)^2,$$

        $$x^2+5 = 1 - 2x + x^2.$$

    3. Resolem l'equació resultant (que ja no és irracional):

        $$5 = 1 - 2x \;\Rightarrow\; 2x = 1 - 5 \;\Rightarrow\; 2x = -4.$$

        La solució candidata és $x = -2$.

    4. **Comprovació (obligatòria).** Substituïm $x=-2$ a l'equació *original*:

        $$-2 + \sqrt{(-2)^2 + 5} = -2 + \sqrt{4 + 5} = -2 + \sqrt{9} = -2 + 3 = 1.$$

        Com que $1=1$, la solució $x=-2$ **és vàlida**.

!!! example "**Exemple:** Equació irracional amb solució estranya"
    Resolem una petita modificació de l'equació anterior:

    $$x - \sqrt{x^2+5} = 1.$$

    1. Aïllem l'arrel:

        $$-\sqrt{x^2+5} = 1-x.$$

    2. Elevem els dos membres al quadrat:

        $$\left( -\sqrt{x^2+5} \right)^2 = (1-x)^2,$$

        $$x^2+5 = 1 - 2x + x^2.$$

    3. Resolem l'equació resultant (fixa't que és la mateixa que a l'exemple anterior):

        $$5 = 1 - 2x \;\Rightarrow\; 2x = -4.$$

        La solució candidata és $x = -2$.

    4. **Comprovació (obligatòria).** Substituïm $x=-2$ a l'equació *original*:

        $$-2 - \sqrt{(-2)^2 + 5} = -2 - \sqrt{4 + 5} = -2 - \sqrt{9} = -2 - 3 = -5.$$

        Com que $-5 \neq 1$, la solució $x=-2$ **no és vàlida** (és una solució estranya). L'equació no té cap solució real.

## Taula resum

| Tipus | Forma | Mètode |
| --- | --- | --- |
| Racional | $\dfrac{P(x)}{Q(x)}=0$ | Resoldre $P(x)=0$ i descartar les solucions amb $Q(x)=0$ |
| Irracional | Incògnita sota un radical | Aïllar l'arrel, elevar-la a l'índex, i comprovar-ho sempre a l'equació original |
