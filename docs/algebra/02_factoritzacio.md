# Factorització de polinomis

## Polinomis irreductibles

Hem vist que, si trobem una arrel $a$ d'un polinomi $p(x)$, la regla de Ruffini ens permet escriure $p(x)=(x-a)\cdot q(x)$, amb $q(x)$ de grau una unitat inferior. Repetint aquest procés tantes vegades com calgui, podem arribar a expressar qualsevol polinomi com un producte de factors més senzills: és el que anomenem **factoritzar**.

!!! abstract "Definició: polinomi irreductible"
    Un polinomi és **irreductible** quan no es pot escriure com a producte de dos polinomis de grau inferior (diferents d'una constant); és a dir, quan no es pot factoritzar.

    Es pot demostrar que, amb coeficients reals, els únics polinomis irreductibles són:

    - els de **grau 1**, i
    - els de **grau 2 sense arrels reals**, és a dir, amb discriminant $\Delta<0$.

!!! tip "Propietat: factorització completa"
    Tot polinomi $p(x)$ amb coeficients reals es pot escriure com el producte del seu coeficient principal per factors irreductibles de grau $1$ o $2$:

    $$
    \begin{aligned}
    p(x) = a_n\,&(x-r_1)(x-r_2)\cdots \\
    &(x^2+b_1x+c_1)(x^2+b_2x+c_2)\cdots
    \end{aligned}
    $$

    on cada $x-r_i$ correspon a una arrel real, i cada factor de grau $2$ té discriminant negatiu (no té arrels reals). Mai calen factors de grau superior a $2$.

## Procediment per factoritzar

Per factoritzar un polinomi $p(x)$, seguim aquests passos:

1. **Traiem factor comú**, si n'hi ha (per exemple, una potència de $x$ si falten els termes de grau més baix, o un nombre que divideixi tots els coeficients).
2. Si el que queda té grau $2$, el factoritzem directament resolent l'equació de segon grau corresponent.
3. Si té grau més gran que $2$ i els coeficients són enters, **busquem arrels enteres amb Ruffini**: les possibles arrels enteres són els divisors del terme independent.
4. Cada vegada que trobem una arrel, dividim per Ruffini i continuem factoritzant el quocient, fins arribar a factors de grau $1$ o $2$.

!!! example "**Exemple:** Factor comú"
    Factoritzem $p(x) = x^4 - x^3 - 6x^2$.

    Traiem factor comú $x^2$:

    $$p(x) = x^2(x^2-x-6)$$

    El factor $x^2-x-6$ és de grau $2$; resolent-lo obtenim les arrels $x=3$ i $x=-2$. Per tant:

    $$p(x) = x^2(x-3)(x+2)$$

!!! example "**Exemple:** Factorització amb Ruffini (totes les arrels reals)"
    Factoritzem $p(x) = x^3-x^2-4x+4$.

    No hi ha factor comú. Els divisors del terme independent ($4$) són $\pm 1,\pm 2,\pm 4$. Provem $x=1$:

    | | $1$ | $-1$ | $-4$ | $4$ |
    |---|---|---|---|---|
    | $1$ | | $1$ | $0$ | $-4$ |
    | | $1$ | $0$ | $-4$ | $\boxed{0}$ |

    Per tant, $p(x) = (x-1)(x^2-4)$. El factor $x^2-4$ té arrels $x=2$ i $x=-2$, així que:

    $$p(x) = (x-1)(x-2)(x+2)$$

!!! example "**Exemple:** Factorització amb un factor de grau 2 irreductible"
    Factoritzem $p(x) = x^3-2x^2+x-2$.

    Els divisors del terme independent ($2$) són $\pm 1,\pm 2$. Provem $x=2$:

    | | $1$ | $-2$ | $1$ | $-2$ |
    |---|---|---|---|---|
    | $2$ | | $2$ | $0$ | $2$ |
    | | $1$ | $0$ | $1$ | $\boxed{0}$ |

    Per tant, $p(x) = (x-2)(x^2+1)$. El factor $x^2+1$ té discriminant $\Delta = 0^2-4\cdot 1\cdot 1=-4<0$: no té arrels reals, així que és irreductible. La factorització final és:

    $$p(x) = (x-2)(x^2+1)$$

## Taula resum

| Concepte | Idea clau |
| --- | --- |
| Polinomi irreductible | Grau $1$, o grau $2$ amb $\Delta<0$ |
| Factor comú | Treure'l sempre que es pugui, abans de res |
| Arrels enteres | Divisors del terme independent (amb Ruffini) |
| Factorització completa | $p(x)=a_n\cdot$ (factors de grau $1$) $\cdot$ (factors de grau $2$ irreductibles) |

Aquesta manera de descompondre polinomis en factors serà la base per treballar amb fraccions algebraiques, en l'apartat següent.
