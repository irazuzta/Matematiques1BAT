# Operacions amb funcions

A més de transformar una única funció, podem combinar dues funcions diferents ($f(x)$ i $g(x)$) per crear-ne una de nova mitjançant les operacions aritmètiques elementals. El resultat és una nova funció que relaciona les imatges de les originals per a cada valor de $x$.

Per als següents exemples, farem servir aquestes dues funcions polinòmiques senzilles:

* $f(x) = x^2 - 1$
* $g(x) = x - 1$

## 1. **Suma i resta**

La suma o resta de dues funcions és la suma o resta de les seves expressions analítiques punt a punt.

* $(f + g)(x) = f(x) + g(x) = (x^2 - 1) + (x - 1) = \mathbf{x^2 + x - 2}$
*  $(f - g)(x) = f(x) - g(x) = (x^2 - 1) - (x - 1) = \mathbf{x^2 - x}$



## 2. **Producte (Multiplicació)**
El producte de dues funcions s'obté multiplicant les seves expressions. Sovint caldrà aplicar la propietat distributiva o identitats notables per simplificar l'expressió final.

*  $(f \cdot g)(x) = f(x)\cdot g(x)=(x^2 - 1) \cdot (x - 1) = x^3 - x^2 - x + 1$

## 3. **Quocient (Divisió)**
La divisió de dues funcions genera una funció racional. Si sabem factoritzar, podem simplificar l'expressió resultant.

*  $\displaystyle \left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}=\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = \mathbf{x + 1}$

---

## 4. **El Domini de les operacions amb funcions**
Aquest és el punt més important: la nova funció només existeix en aquells valors de $x$ on existeixen les dues funcions originals alhora.

1.  **Suma, Resta i Producte:** El domini és la **intersecció** dels dominis originals.
   
    $$Dom(f \pm g) = Dom(f) \cap Dom(g)$$

    $$Dom(f \cdot g) = Dom(f) \cap Dom(g)$$

2.  **Quocient:** El domini és la intersecció dels dominis originals **excloent** els valors que fan que el denominador sigui zero.
   
    $$Dom\left(\frac{f}{g}\right) = \{x \in Dom(f) \cap Dom(g) \mid g(x) \neq 0\}$$

>**Exemple** En el quocient d'abans $\frac{x^2-1}{x-1}$, tot i que la solució simplificada és la recta $x+1$, el valor **$x=1$ no pertany al domini** perquè la funció $g(x)$ original s'anul·laria (divisió per zero). O sigui:

>$$Dom\left(\frac{f}{g}\right) = \mathbb{R} \setminus {\{1\}}$$

---

> **Exemples gràfics**
>
> Vegem quin aspecte, des del punt de vista gràfic, podem tenir les funcions resultants d'una suma i un quocient obtingudes a partir de funcions senzilles.
> 
> Considerem les funcions $f(x)=\displaystyle\frac{x^2}{4}$ i $g(x)=\sin(4x)$. La gràfica de $(f+g)(x)$ és:
>
> ![Exemple funcions](../img/analisi/suma_funcions.svg){width=60%}
>
> Observeu l'efecte de la paràbola,$f(x)$, que marca la tendència de la gràfica i l'efecte del sinus, $g(x)$, que provoca l'oscil·lació.

---

>Considerem ara les funcions $f(x)=x^2$ i $g(x)=x^2-1$. La gràfica de $\left ( \displaystyle\frac{f}{g} \right) (x)=\displaystyle\frac{x^2}{x^2-1}$ és:
>
> ![Exemple funcions](../img/analisi/quocient_funcions.svg){width=60%}
>
> Observeu que el quocient ens fa aparèixer dos zeros al denominador ($x=1$ i $x=-1$) que no pertanyen al domini i fan aparèixer dues asímptotes verticals.