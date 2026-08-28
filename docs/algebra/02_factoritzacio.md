# Factorització de polinomis

## Polinomis irreductibles

Hem vist que, si trobem una arrel $a$ d'un polinomi $p(x)$, amb la regla de Ruffini podem escriure fàcilment $p(x)=(x-a)\cdot q(x)$, amb $q(x)$ de grau una unitat inferior que el grau de $p(x)$. Repetint aquest procés tantes vegades com calgui, podem arribar a expressar qualsevol polinomi com un producte de factors més senzills: és el que anomenem **factoritzar**.

!!! abstract "Definició: polinomi irreductible"
    Un polinomi és **irreductible** quan no es pot escriure com a producte de dos polinomis de grau inferior (diferents d'una constant); és a dir, quan no es pot factoritzar.

    Es pot demostrar que, amb coeficients reals, els únics polinomis irreductibles són:

    - els de **grau 1**, i
    - els de **grau 2 sense arrels reals**, és a dir, amb discriminant $\Delta<0$.

!!! tip "Propietat: factorització completa"
    Tot polinomi $p(x)$ amb coeficients reals es pot escriure com el producte del seu coeficient principal per factors irreductibles de grau $1$ o $2$ de la forma:

    $$p(x) = a_n(x-r_1)(x-r_2)\cdots(x^2+b_1x+c_1)(x^2+b_2x+c_2)\cdots$$

    on cada factor $(x-r_i)$ correspon a una arrel real ($r_i$) de $p(x)$, i cada factor de grau $2$ té discriminant negatiu (no té arrels reals).

!!! note "Un paral·lelisme amb els nombres enters"
    Aquesta factorització polinomis és anàloga al que ja coneixes amb els nombres enters.

    - Un **nombre primer** és un enter més gran que $1$ que només és divisible per $1$ i per ell mateix, és a dir, no es pot descompondre en factors més petits. És un concepte similar al de **polinomi irreductible**, ja que no es pot factoritzar.
    - El **teorema fonamental de l'aritmètica** diu que tot nombre enter més gran que $1$ es pot escriure, de manera única (llevat de l'ordre), com un producte de nombres primers. Per exemple, $60 = 2^2\cdot 3\cdot 5$.
    - De la mateixa manera, tot polinomi es pot escriure, de manera única (llevat de l'ordre), com un producte de polinomis irreductibles (els de grau $1$ o $2$ que acabem de veure).

!!! example "**Exemples:** Factoritzacions completes"
    | Polinomi | Factorització |
    | --- | --- |
    | $2x^2+4x-6$ | $2(x-1)(x+3)$ |
    | $x^3-3x^2+4$ | $(x+1)(x-2)^2$ |
    | $3x^3-3$ | $3(x-1)(x^2+x+1)$ |
    | $x^4+5x^2+4$ | $(x^2+1)(x^2+4)$ |
    | $x^4-x^3-6x^2$ | $x^2(x-3)(x+2)$ |

!!! note "Ruffini i les arrels reals d'un polinomi"
    - **Amb Ruffini només trobem arrels racionals.** Si els coeficients del polinomi són enters, els únics candidats a arrel són els divisors del terme independent. Per tant, les arrels irracionals (com $x=\sqrt{2}$) o les arrels complexes mai les trobarem amb aquest mètode. Per trobar-les, cal resoldre directament l'equació de grau $2$ que quedi al final.
    - **Factorització i arrels d'un polinomi** Cada factor de grau $1$, $x-r_i$, correspon exactament a una arrel real $r_i$ del polinomi. Per tant, el nombre de factors de grau $1$ (comptant repeticions o multiplicitats) és el nombre total d'arrels reals del polinomi. Si un polinomi de grau $n$ té menys de $n$ arrels reals, és perquè la resta de la factorització conté polinomis de grau $2$ irreductibles.

## Procediment per factoritzar

Per factoritzar un polinomi $p(x)$, seguim aquests passos:

1. **Traiem factor comú**
    * Si falta el terme independent, podrem treure una potència d'$x$ com a factor comú.
    * Si tots els coeficients tenen un divisor comú, aquest factor es pot treure com a factor comú.
2. Si el que ens queda és un polinomi de grau $2$, el factoritzem directament **resolent l'equació de segon grau** corresponent.
3. Si ens queda un polinomi de grau més gran que $2$, **busquem arrels enteres amb Ruffini**: els candidats a arrels enteres són els divisors del terme independent.
4. Cada vegada que trobem una arrel, ja tenim un factor i **continuem el procés** amb el quocient, fins arribar a factors de grau $1$ o $2$.

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
    | | $\textbf{1}$ | $\textbf{0}$ | $\textbf{-4}$ | $\boxed{0}$ |

    Per tant, $p(x) = (x-1)(x^2-4)$. El factor $x^2-4$ té arrels $x=2$ i $x=-2$, així que:

    $$p(x) = (x-1)(x-2)(x+2)$$

!!! example "**Exemple:** Factorització amb un factor de grau 2 irreductible"
    Factoritzem $p(x) = x^3-2x^2+x-2$.

    Els divisors del terme independent ($2$) són $\pm 1,\pm 2$. Provem $x=2$:

    | | $1$ | $-2$ | $1$ | $-2$ |
    |---|---|---|---|---|
    | $2$ | | $2$ | $0$ | $2$ |
    | | $\textbf{1}$ | $\textbf{0}$ | $\textbf{1}$ | $\boxed{0}$ |

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
