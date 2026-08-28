# Fraccions algebraiques

## Definició i simplificació

Igual que les fraccions numèriques es formen amb dos nombres enters, les fraccions algebraiques es formen amb dos polinomis, i es comporten de manera molt semblant.

!!! abstract "Definició: fracció algebraica"
    Una **fracció algebraica** és el quocient de dos polinomis $\dfrac{P(x)}{Q(x)}$, amb $Q(x)$ no nul.

!!! tip "Propietat: simplificació"
    Si el numerador i el denominador tenen un factor comú, es pot simplificar la fracció dividint tots dos pel mateix factor — igual que amb les fraccions numèriques. Per detectar-ho, factoritzem primer numerador i denominador.

!!! example "**Exemple:** Simplificació d'una fracció algebraica"
    Simplifiquem $\dfrac{x^2-4}{x^2+x-6}$.

    Factoritzem numerador i denominador:

    $$x^2-4 = (x-2)(x+2)$$

    $$x^2+x-6 = (x-2)(x+3)$$

    Simplifiquem el factor comú $(x-2)$:

    $$
    \begin{aligned}
    \frac{x^2-4}{x^2+x-6} &= \frac{(x-2)(x+2)}{(x-2)(x+3)} \\
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
