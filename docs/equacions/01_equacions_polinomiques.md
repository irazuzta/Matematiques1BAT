# Equacions polinòmiques

## Definicions i conceptes bàsics

Segurament ja has resolt moltes equacions abans. Comencem posant nom, de manera formal, al que és una equació i a la seva solució.

!!! abstract "Definició: equació i incògnita"
    Sigui $f(x)$ una expressió algebraica. Una **equació** amb una incògnita és una igualtat que, amb les transformacions que calguin, es pot escriure de la forma

    $$f(x)=0.$$

    $x$ s'anomena la **incògnita** de l'equació.

!!! example "**Exemple:** Equacions"
    Són exemples d'equacions:

    $$x-3=0, \qquad 5x-5=x+7.$$

    En el segon cas, la podem transformar:

    $$5x-5-x-7=0 \quad \Rightarrow \quad 4x-12=0,$$

    de manera que obtenim una expressió com la de la definició anterior.

!!! abstract "Definició: solució i equivalència"
    Direm que un valor real $a$ és una **solució** de l'equació $f(x)=0$ si es compleix que

    $$f(a)=0.$$

    Si dues equacions tenen les mateixes solucions, direm que són **equivalents**.

!!! example "**Exemple:** Comprovació de solucions"
    Si prenem les equacions de l'exemple anterior, en tots els casos $a=3$ n'és una solució:

    $$x-3=0 \;\longrightarrow\; 3-3=0,$$

    $$5x-5=x+7 \;\longrightarrow\; 5\cdot 3-5=10=3+7,$$

    $$4\cdot 3-12=0.$$

    Com que en tots els casos es tracta d'equacions de primer grau (que tenen una única solució), podem assegurar que les tres són equivalents.

## Equacions de primer i segon grau

!!! abstract "Definició: equació polinòmica"
    Una equació $p(x)=0$ és **polinòmica** si $p(x)$ és un polinomi. Parlarem aleshores del **grau de l'equació**, que coincideix amb el grau del polinomi.

!!! example "**Exemple:** Equacions de primer grau"
    Una equació de primer grau es pot escriure de forma equivalent com

    $$ax+b=0, \qquad a\neq 0.$$

    Té una única solució, que es pot escriure de manera general com

    $$x=-\frac{b}{a}.$$

    Fixa't en el cas especial en què $a=0$ després de simplificar:

    $$2x-3=2(x-1) \;\Rightarrow\; 2x-3=2x-2 \;\Rightarrow\; -1=0.$$

    No existeix cap valor real que compleixi aquesta igualtat: l'equació no té solució.

!!! example "**Exemple:** Equacions de segon grau"
    Una equació de segon grau es pot escriure com

    $$ax^2+bx+c=0, \qquad a\neq 0.$$

    Les solucions venen donades per la fórmula

    $$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a},$$

    on $\Delta=b^2-4ac$ s'anomena **discriminant**. Segons el seu signe distingim tres casos:

    - $\Delta>0$: dues solucions reals diferents.
    - $\Delta=0$: una solució real (doble).
    - $\Delta<0$: cap solució real.

    Per exemple, a $4x^2+4x+1=0$ el discriminant és $\Delta=4^2-4\cdot4\cdot1=0$:

    $$x=\frac{-4\pm\sqrt{0}}{8}=-\frac{4}{8}=-\frac{1}{2} \quad \text{(solució doble)}.$$

## Equacions de grau superior

Per a graus més grans que 2, sovint cal reduir l'equació a una que ja sabem resoldre.

!!! example "**Exemple:** Equacions biquadrades"
    Una **equació biquadrada** és una equació de grau 4 de la forma

    $$ax^4+bx^2+c=0.$$

    Per resoldre-la, fem el canvi de variable $t=x^2$. Resolem $x^4-10x^2+9=0$:

    1. Fem el canvi $t=x^2$. L'equació es transforma en

        $$t^2-10t+9=0.$$

    2. Resolem l'equació de segon grau per a $t$:

        $$t=\frac{10\pm\sqrt{100-36}}{2}=\frac{10\pm8}{2}.$$

        Obtenim $t_1=9$ i $t_2=1$.

    3. Desfem el canvi de variable per a cada $t$ (recordant que $x=\pm\sqrt{t}$):
        - $t_1=9 \;\Rightarrow\; x^2=9 \;\Rightarrow\; x=\pm\sqrt{9} \;\Rightarrow\; x=\pm 3$
        - $t_2=1 \;\Rightarrow\; x^2=1 \;\Rightarrow\; x=\pm\sqrt{1} \;\Rightarrow\; x=\pm 1$

    Per tant, les solucions de l'equació són $x_1=3$, $x_2=-3$, $x_3=1$ i $x_4=-1$.

!!! example "**Exemple:** Equacions de grau superior a 2"
    Per a una equació $P(x)=0$ amb $\text{grau}(P)\ge 3$, el mètode habitual és factoritzar el polinomi, ja que les solucions de l'equació són les arrels del polinomi.

    Resolem $x^3-3x^2-9x+27=0$:

    1. Busquem arrels enteres (divisors de $27$) i apliquem Ruffini. Provem $x=3$:

        | | $1$ | $-3$ | $-9$ | $27$ |
        |---|---|---|---|---|
        | $3$ | | $3$ | $0$ | $-27$ |
        | | $1$ | $0$ | $-9$ | $\boxed{0}$ |

    2. El polinomi es factoritza com $(x-3)(x^2-9)=0$.

    3. Resolem l'equació de segon grau $x^2-9=0$, que dona $x=\pm\sqrt{9}$, és a dir, $x=3$ i $x=-3$.

    4. Les solucions són totes les arrels trobades:

        $$x=-3 \ \text{(simple)} \qquad \text{i} \qquad x=3 \ \text{(doble)}.$$

## Taula resum

| Tipus | Forma | Solucions |
| --- | --- | --- |
| Primer grau | $ax+b=0,\ a\neq 0$ | $x=-\dfrac{b}{a}$ |
| Segon grau | $ax^2+bx+c=0,\ a\neq 0$ | $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$ |
| Biquadrada | $ax^4+bx^2+c=0$ | Canvi $t=x^2$, i després $x=\pm\sqrt{t}$ |
| Grau $\geq 3$ | $P(x)=0$ | Factoritzar $P(x)$ (per exemple, amb Ruffini) |
