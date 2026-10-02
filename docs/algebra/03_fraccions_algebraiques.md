# Fraccions algebraiques

## Màxim comú divisor i mínim comú múltiple de polinomis

Abans d'operar amb fraccions algebraiques, ens convé saber calcular el MCD i el MCM de polinomis: els farem servir tot seguit per simplificar i per reduir a denominador comú.

!!! abstract "Definició: MCD i MCM de polinomis"
    Donats dos polinomis $A(x)$ i $B(x)$, el seu **màxim comú divisor** $\text{MCD}[A(x),B(x)]$ és el polinomi de grau més gran que divideix alhora $A(x)$ i $B(x)$; el seu **mínim comú múltiple** $\text{MCM}[A(x),B(x)]$ és el polinomi de grau més petit que és múltiple alhora d'$A(x)$ i $B(x)$.

    Es calculen igual que amb els nombres enters: factoritzem els dos polinomis i...

    - El MCD és el producte dels factors **comuns**, cadascun amb l'**exponent més petit** amb què apareix.
    - El MCM és el producte de **tots** els factors (comuns o no), cadascun amb l'**exponent més gran** amb què apareix.

!!! example "**Exemple:** MCD i MCM sense factors repetits"
    Calculem el MCD i el MCM de $A(x)=x^2-4$ i $B(x)=x^2+x-6$.

    Factoritzem tots dos:

    $$A(x) = (x-2)(x+2) \qquad B(x) = (x-2)(x+3)$$

    L'únic factor comú és $(x-2)$, amb exponent $1$ als dos polinomis:

    $$\text{MCD}[A(x),B(x)] = x-2$$

    El MCM inclou tots els factors que apareixen (comuns o no), cadascun amb l'exponent més gran:

    $$\text{MCM}[A(x),B(x)] = (x-2)(x+2)(x+3)$$

!!! example "**Exemple:** MCD i MCM amb un factor repetit"
    Calculem el MCD i el MCM de $A(x)=x^3-2x^2+x$ i $B(x)=x^2-x$.

    Factoritzem:

    $$A(x) = x(x-1)^2 \qquad B(x) = x(x-1)$$

    Els factors comuns són $x$ i $(x-1)$. Per al MCD ens quedem amb l'exponent més petit de cadascun ($x^1$ i $(x-1)^1$):

    $$\text{MCD}[A(x),B(x)] = x(x-1)$$

    Per al MCM ens quedem amb l'exponent més gran de cadascun ($x^1$ i $(x-1)^2$):

    $$\text{MCM}[A(x),B(x)] = x(x-1)^2$$

    (En aquest cas, com que $A(x)$ ja conté tots els factors de $B(x)$ amb exponent igual o més gran, el MCM coincideix amb $A(x)$ mateix.)

## Definició i simplificació

Igual que les fraccions numèriques es formen amb dos nombres enters, les fraccions algebraiques es formen amb dos polinomis, i es comporten de manera molt semblant.

!!! abstract "Definició: fracció algebraica"
    Una **fracció algebraica** és el quocient de dos polinomis $\dfrac{P(x)}{Q(x)}$, amb $Q(x)$ no nul.

!!! tip "Propietat: simplificació"
    Si el numerador i el denominador tenen un factor comú, es pot simplificar la fracció dividint tots dos pel mateix factor — igual que amb les fraccions numèriques. Per detectar-ho, factoritzem primer numerador i denominador.

!!! example "**Exemple:** Simplificació d'una fracció algebraica"
    Simplifiquem $\dfrac{x^2-4}{x^2+x-6}$.

    Factoritzem numerador i denominador (el mateix parell de polinomis que hem fet servir per calcular-ne el MCD i el MCM):

    $$x^2-4 = (x-2)(x+2)$$

    $$x^2+x-6 = (x-2)(x+3)$$

    Simplifiquem el factor comú $(x-2)$:

    $$
    \begin{aligned}
    \frac{x^2-4}{x^2+x-6} &= \frac{\cancel{(x-2)}(x+2)}{\cancel{(x-2)}(x+3)} \\
    &= \frac{x+2}{x+3}
    \end{aligned}
    $$

!!! note "Compte amb el domini"
    Encara que en simplificar la fracció desaparegui el factor $(x-2)$, el valor $x=2$ continua sent un valor prohibit: no el podem substituir, perquè anul·lava el denominador de la fracció original.

## Suma i resta de fraccions algebraiques

!!! abstract "Definició: suma i resta de fraccions algebraiques"
    Per sumar o restar fraccions algebraiques, primer les reduïm a un denominador comú (com faríem amb fraccions numèriques) i després sumem o restem els numeradors.

!!! example "**Exemple:** Suma de fraccions algebraiques"
    Sumem $\dfrac{1}{x} + \dfrac{2}{x+1}$. El denominador comú és $x(x+1)$:

    $$
    \begin{aligned}
    \frac{1}{x} + \frac{2}{x+1} &= \frac{x+1}{x(x+1)} + \frac{2x}{x(x+1)} \\
    &= \frac{(x+1)+2x}{x(x+1)} = \frac{3x+1}{x(x+1)}
    \end{aligned}
    $$

!!! example "**Exemple:** Resta de fraccions algebraiques"
    Restem $\dfrac{x}{x-1} - \dfrac{1}{x}$. El denominador comú és $x(x-1)$:

    $$
    \begin{aligned}
    \frac{x}{x-1} - \frac{1}{x} &= \frac{x^2}{x(x-1)} - \frac{x-1}{x(x-1)} \\
    &= \frac{x^2-(x-1)}{x(x-1)} = \frac{x^2-x+1}{x(x-1)}
    \end{aligned}
    $$

## Multiplicació i divisió de fraccions algebraiques

!!! abstract "Definició: producte i quocient de fraccions algebraiques"
    El **producte** de dues fraccions algebraiques és el producte dels numeradors dividit pel producte dels denominadors:

    $$\frac{P(x)}{Q(x)} \cdot \frac{M(x)}{N(x)} = \frac{P(x)\cdot M(x)}{Q(x)\cdot N(x)}$$

    El **quocient** és el producte de la primera fracció per la inversa de la segona:

    $$\frac{P(x)}{Q(x)} : \frac{M(x)}{N(x)} = \frac{P(x)}{Q(x)} \cdot \frac{N(x)}{M(x)}$$

!!! example "**Exemple:** Producte de fraccions algebraiques"
    $$
    \begin{aligned}
    \frac{x+1}{x} \cdot \frac{2x}{x-3} &= \frac{2x(x+1)}{x(x-3)} \\
    &= \frac{2(x+1)}{x-3}
    \end{aligned}
    $$

!!! example "**Exemple:** Quocient de fraccions algebraiques"
    $$
    \begin{aligned}
    \frac{x}{x+2} : \frac{x-1}{x} &= \frac{x}{x+2} \cdot \frac{x}{x-1} \\
    &= \frac{x^2}{(x+2)(x-1)}
    \end{aligned}
    $$

## Taula resum

| Operació | Com es fa |
| --- | --- |
| Simplificació | Factoritzar numerador i denominador i eliminar el factor comú |
| Suma i resta | Reduir a denominador comú i sumar/restar numeradors |
| Producte | Numerador per numerador, denominador per denominador |
| Quocient | Multiplicar per la fracció inversa de la segona |
