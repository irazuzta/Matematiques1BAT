# Laboratori d'equacions

Aquí pots escriure una equació, veure'n la **interpretació gràfica** i seguir-ne la **resolució pas a pas**. Serveix per comprovar exercicis i per entendre què volen dir, gràficament, les solucions d'una equació.

## Les solucions d'una equació, a la gràfica

Una equació és una igualtat entre dues expressions, $f(x)=g(x)$. Cada membre es pot dibuixar com una funció: d'una banda $y=f(x)$ i de l'altra $y=g(x)$. Un valor $a$ és solució quan els dos membres valen el mateix, $f(a)=g(a)$, és a dir, quan les dues gràfiques passen pel mateix punt. Per tant, **les solucions són les abscisses dels punts on es tallen les dues gràfiques**.

!!! example "**Exemple:** l'equació $x^2=x+2$"
    Dibuixem la paràbola $y=x^2$ i la recta $y=x+2$:

    <div class="eq-demo" data-l="x^2" data-r="x+2" data-mode="two" markdown="1"></div>

    Es tallen en els punts $(-1,1)$ i $(2,4)$. Les solucions de l'equació són les abscisses d'aquests punts, $x=-1$ i $x=2$. Ho comprovem substituint cada valor al primer membre ($x^2$) i al segon ($x+2$):

    $$
    \begin{alignedat}{2}
    x=-1:&\quad (-1)^2=1, &\qquad -1+2&=1\\
    x=2:&\quad 2^2=4, & 2+2&=4
    \end{alignedat}
    $$

    En tots dos casos els dos membres donen el mateix valor.

!!! tip "Solucions i punts de tall"
    Un nombre $a$ és solució de l'equació $f(x)=g(x)$ si, i només si, les gràfiques de $y=f(x)$ i $y=g(x)$ es tallen en un punt d'abscissa $a$:

    $$
    \begin{aligned}
    a \text{ és solució} &\ \Leftrightarrow\ f(a)=g(a)\\
    &\ \Leftrightarrow\ \text{les gràfiques es tallen}\\
    &\phantom{\ \Leftrightarrow\ }\ \text{en el punt } (a,f(a))
    \end{aligned}
    $$

    Si les dues gràfiques no es tallen, l'equació no té solució.

També ho podem mirar d'una altra manera. Si passem tots els termes al primer membre, l'equació queda $f(x)-g(x)=0$, i les solucions són els punts on la gràfica de $y=f(x)-g(x)$ **talla l'eix $OX$**, com les arrels d'un polinomi (mira el [Laboratori de polinomis](../algebra/laboratori.md)).

Per a l'exemple anterior, passem tots els termes al primer membre:

$$x^2-(x+2)=0 \;\Rightarrow\; x^2-x-2=0$$

i resolem l'equació de segon grau:

$$
\begin{aligned}
x&=\frac{1\pm\sqrt{1+8}}{2}=\frac{1\pm 3}{2}\\
&\Rightarrow\; x_1=-1,\quad x_2=2
\end{aligned}
$$

A la gràfica de $y=x^2-x-2$, aquestes solucions són els punts de tall amb l'eix $OX$:

<div class="eq-demo" data-l="x^2" data-r="x+2" data-mode="diff" markdown="1"></div>

Les dues gràfiques donen les mateixes solucions, $x=-1$ i $x=2$.

## Prova-ho amb la teva equació

<div id="lab-equacions" markdown="0"></div>

<noscript>Aquesta eina necessita JavaScript per funcionar.</noscript>

!!! note "Com funciona"
    - Si els dos membres són **polinomis**, el laboratori resol l'equació de manera exacta i n'explica tots els passos: passa tots els termes al primer membre, simplifica l'equació i la resol segons el seu tipus (primer grau, segon grau, incompletes, biquadrades o, si és de grau més alt, factoritzant amb [Ruffini](../algebra/02_factoritzacio.md)).
    - Si hi ha altres funcions (arrels, la $x$ en un denominador o en un exponent, logaritmes...), només en dibuixa la gràfica i en dona les **solucions aproximades**, buscant on es tallen les dues gràfiques a l'interval $[-100,100]$. Per resoldre-les de manera exacta, segueix el mètode de la [teoria](02_equacions_racionals_irracionals.md) i comprova sempre les solucions.
    - Amb els botons *Dues gràfiques* i *Tot en un membre* pots canviar entre les dues interpretacions gràfiques.
