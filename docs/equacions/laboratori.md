# Laboratori d'equacions

Aquí pots escriure una equació, veure'n la **interpretació gràfica** i seguir-ne la **resolució pas a pas**. Serveix per comprovar exercicis i per entendre què volen dir, gràficament, les solucions d'una equació.

## Les solucions d'una equació, a la gràfica

Una equació és una igualtat entre dues expressions, $f(x)=g(x)$. Cada membre es pot dibuixar com una funció: d'una banda $y=f(x)$ i de l'altra $y=g(x)$. Un valor $a$ és solució quan els dos membres valen el mateix, $f(a)=g(a)$, és a dir, quan les dues gràfiques passen pel mateix punt. Per tant, **les solucions són les abscisses dels punts on es tallen les dues gràfiques**.

!!! example "**Exemple:** l'equació $x^2=x+2$"
    Dibuixem la paràbola $y=x^2$ i la recta $y=x+2$:

    <div class="eq-demo" data-l="x^2" data-r="x+2" data-mode="two" markdown="1"></div>

    Es tallen en els punts $(-1,1)$ i $(2,4)$. Les solucions de l'equació són les abscisses d'aquests punts, $x=-1$ i $x=2$. Ho podem comprovar: $(-1)^2=1=-1+2$ i $2^2=4=2+2$.

!!! tip "Solucions i punts de tall"
    $$a \text{ és solució de } f(x)=g(x) \ \Leftrightarrow\ f(a)=g(a) \ \Leftrightarrow\ \text{les gràfiques de } y=f(x) \text{ i } y=g(x) \text{ es tallen en el punt } (a,f(a))$$

    Si les dues gràfiques no es tallen, l'equació no té solució.

També ho podem mirar d'una altra manera. Si passem tots els termes al primer membre, l'equació queda $f(x)-g(x)=0$, i les solucions són els punts on la gràfica de $y=f(x)-g(x)$ **talla l'eix $OX$**, com les arrels d'un polinomi (mira el [Laboratori de polinomis](../algebra/laboratori.md)). Per a l'exemple anterior, $x^2-(x+2)=x^2-x-2$:

<div class="eq-demo" data-l="x^2" data-r="x+2" data-mode="diff" markdown="1"></div>

Les dues gràfiques donen les mateixes solucions, $x=-1$ i $x=2$.

## Prova-ho amb la teva equació

<div id="lab-equacions" markdown="0"></div>

<noscript>Aquesta eina necessita JavaScript per funcionar.</noscript>

!!! note "Com funciona"
    - Si els dos membres són **polinomis**, el laboratori resol l'equació de manera exacta i n'explica tots els passos: passa tots els termes al primer membre, simplifica l'equació i la resol segons el seu tipus (primer grau, segon grau, incompletes, biquadrades o, si és de grau més alt, factoritzant amb [Ruffini](../algebra/02_factoritzacio.md)).
    - Si hi ha altres funcions (arrels, la $x$ en un denominador o en un exponent, logaritmes...), només en dibuixa la gràfica i en dona les **solucions aproximades**, buscant on es tallen les dues gràfiques a l'interval $[-100,100]$. Per resoldre-les de manera exacta, segueix el mètode de la [teoria](02_equacions_racionals_irracionals.md) i comprova sempre les solucions.
    - Amb els botons *Dues gràfiques* i *Tot en un membre* pots canviar entre les dues interpretacions gràfiques.
