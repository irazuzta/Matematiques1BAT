# **Equacions de la recta al pla**

Ara que ja sabem treballar amb els punts del pla utilitzant coordenades, ens cal poder fer-ho amb un altre objecte geomètric fonamental: **la recta**.
Per determinar una recta de forma única al pla, necessitem conèixer:

* Un **punt** de la recta: $A(x_A, y_A)$
* Una **direcció**, donada per un **vector director**: $\vec{d} = (d_1, d_2)$

Alternativament, també podem determinar una recta si sabem dos punts per on passa. En aquest cas, calculant el **vector entre els dos punts**, ja tenim la **direcció** de la recta. 

En aquest apartat, l'**objectiu** és descriure les rectes mitjançant equacions. O sigui, donada una recta, volem una equació que tingui com a solució tots els punts de la recta.  
Veurem que tenim diferents tipus d'equacions per representar qualsevol recta

---

## 1. Equació vectorial
L'equació vectorial es basa en la idea que qualsevol punt $X(x, y)$ de la recta s'obté sumant al punt $A$ (un punt qualsevol de la recta) un múltiple del vector director $\vec{d}$ (un vector director de la recta).

$$X = A + k\cdot \vec{d}, \hspace{.5cm}k \in \mathbb{R}$$

En coordenades:

$$(x, y) = (x_A, y_A) + k \cdot (d_1, d_2), \hspace{.5cm}k \in \mathbb{R}$$

!!! note "Interpretació"
    Si anem variant el valor de $k$, ens anem movent al llarg de la recta. Per exemple, per $k=0$ som al punt $A$, per $k=1$ som al punt $A+\vec{d}$, per $k=2$ som al punt $A+2\vec{d}$... i així per a qualevol valor de $k$.
    ![equacio vectorial ](../img/equacio_vectorial.png)

---

## 2. Equacions paramètriques
A partir de l'equació vectorial, si la descomponem component a component, obtenim un sistema de dues equacions que anomenem paramètriques:

$$\begin{cases} x = x_A + k \cdot d_1 \\ y = y_A + k \cdot d_2 \end{cases}$$

!!! Example "Exemple"
    Volem les equacions vectorial i paramètrica de la recta que passa pel punt $A(1, 2)$ i té com a vector director $\vec{d}(3, 4)$:
    
    * **Equació vectorial:**
  
        $$(x, y) = (1, 2) + k \cdot (3, 4)$$
    * **Equació paramètrica:**
  
        $$
        \begin{cases} 
        x = 1 + 3k \\ 
        y = 2 + 4k 
        \end{cases}
        $$
    
    Per exemple, 

    * **(eq. paramètrica)** Si $k=2$, obtenim el punt $P(7, 10)$, ja que:
    $x = 1 + 3(2) = 7$ i $y = 2 + 4(2) = 10$.
    * **(eq. vectorial)** Si $k =-1$, obtenim el punt $P(-2,-2)$, ja que $(x,y)=(1,2)-1\cdot (3,4)=(1,2)-(3,4)=(-2,-2)$.
---

## 3. Equació contínua
Si aïllem el paràmetre $k$ en les dues equacions paramètriques i igualem els resultats, obtenim l'equació contínua:

$$k = \frac{x - x_A}{d_1} \quad \text{i} \quad k = \frac{y - y_A}{d_2}$$

$$\mathbf{\frac{x - x_A}{d_1} = \frac{y - y_A}{d_2}}$$

!!! warning "Atenció"
    Aquesta equació només es pot fer servir si les dues components del vector director són diferents de zero $(d_1 \neq 0, d_2 \neq 0)$.

!!! note "Pas a l'equació contínua"
    Si aïllem el paràmetre $k$ a les equacions paramètriques de l'exemple anterior:
    
    * $x = 1 + 3k \implies k = \displaystyle\frac{x - 1}{3}$
    * $y = 2 + 4k \implies k = \displaystyle \frac{y - 2}{4}$
    
    Igualant les dues expressions, obtenim l'**equació contínua**:
    
    $$\frac{x - 1}{3} = \frac{y - 2}{4}$$

---

## 4. Equació punt-pendent

Per obtenir l'equació punt pendent, partim de la contínua i passem a l'altre membre de l'equació $d_2$:

$$y - y_A=\frac{d_2}{d_1}(x-x_A)$$

$$\mathbf{y - y_A = m(x - x_A)}$$

El quocient $m=\displaystyle\frac{d_2}{d_1}$ és el pendent de la recta. I, de fet, tenim que $\mathbf{ m= tan(\alpha) }$, on $\alpha$ és l'angle de la recta respecte de la horitzontal:

![equacio punt-pedent ](../img/equacio_punt_pendent.png){width=70%}


Observem que, per semblança de triangles, el pendent (tangent d'$\alpha$) de la recta no canvia sigui quin sigui el vector director. El pendent (inclinació) de la recta només depèn de l'angle $\alpha$:

![independència pedent ](../img/independencia_pendent.png){width=90%}


Alguns casos particulars:

* Si $m=0$, llavors $d_y=0$ i la recta és horitzontal.
* Si $m=1$, llavors $d_x=d_y$ i la recta te un angle $\alpha=45^{\circ}$ respecte l'horitzontal.

També podem observar que si $d_x=1$, llavors $m=d_y$ i tenim que:  
**Si $m$ és el pendent d'una recta $\implies$ $\vec{d}=(1,m)$ és vector director de la recta.**

!!! Note "Interpretació del pendent ($\mathbf{m}$)"
    Amb el que acabem de veure, podem interpretar que, per cada unitat que augmentem horitzontalment, n'augmentem $m$ verticalment.

!!! Example "Exemple: equació a partir del pendent (o la direcció)"
    Seguim les dades dels exemples anteriors:

    * **Punt:** $A(1, 2)$
    * **Pendent:** $m = \displaystyle\frac{4}{3}$ (recorda que això ve del vector $\vec{d}(3, 4)$)

    * L'equació punt-pendent té la forma:

    $$y - y_a = m \cdot (x - x_a)$$

    * Substituïm $x_a = 1$, $y_a = 2$ i $m = 4/3$:

    $$y - 2 = \frac{4}{3} \cdot (x - 1)$$

!!! Example "Exemple: equació a partir de l'angle"
    Volem trobar l'equació de la recta que passa pel punt **$A(2, 1)$** i forma un angle de **$30^\circ$** respecte de l'horitzontal.

    * El pendent és la tangent de l'angle d'inclinació:
  
    $$m = \tan(30^\circ) = \frac{\sqrt{3}}{3}$$

    * Substituïm el punt $A(2, 1)$ i el pendent $m = \frac{\sqrt{3}}{3}$ a la fórmula:

    $$y - 1 = \frac{\sqrt{3}}{3}(x - 2)$$

    * I si necessitem un **vector director**?
    Ja hem vist que $(1,m)$ és vector director, per tant, $(1,\displaystyle\frac{\sqrt{3}}{3})$ ho és.  
    En veritat, qualsevol vector proporcional a aquest ens serviria:

    $$\vec{d} = (3, \sqrt{3})$$

---
## 5. Equació explícita
Si aïllem completament la $y$ de l'equació anterior, obtenim l'equació explícita de la recta, que per altra banda és la forma més habitual en què trobem les funcions lineals:

$$y-y_A = m(x-x_A)\implies y=mx - mx_A+y_A\implies y=mx +\underbrace{(- mx_A+y_A)}_{=n}$$

$$\mathbf{y = mx + n}$$

* $\mathbf{m}$: Pendent.
* $\mathbf{n}$: Ordenada a l'origen. Observem que per a $x=0$, tenim que $y=n$, o sigui $(0,n)$ és el punt de tall de la recta amb l'eix d'ordenades $OY$.

Vegem-ho gràficament:

![equacio explicita ](../img/equacio_explicita.png){width=75%}

!!! Example "Exemple: pas a l'equació explícita"
    D'una recta que passa per $A(1, 2)$ amb $m = 4/3$:
    
    * **Punt-pendent:** $y - 2 = \displaystyle\frac{4}{3}(x - 1)$
    * **Operem:** $y - 2 = \displaystyle\frac{4}{3}x - \frac{4}{3}$
    * **Aïllem:** $y = \displaystyle\frac{4}{3}x - \frac{4}{3} + 2$
    
    **Equació Explícita:**

    $$y = \frac{4}{3}x + \frac{2}{3}$$
    
    * On el tall amb l'eix $OY$ és $n = 2/3$.

---

## 6. Equació implícita (o general)
Si passem tots els termes a un costat de la igualtat per deixar-la igualada a zero, obtenim la forma general:

$$\mathbf{Ax + By + C = 0}$$

Si ho fem a partir de l'equació continua (des de l'explícita seria similar) tenim que:  

$$\frac{x - x_A}{d_1} = \frac{y - y_A}{d_2}\implies d_2(x-x_A)=d_1(y-y_A)\implies$$

$$d_2x-d_2x_A=d_1y-d_1y_A\implies \underbrace{d_2}_{A}x\underbrace{-d_1}_{B}y\underbrace{-d_2x_A+d_1y_A}_{C}=0$$


Del que acabem de veure, podem deduir la següent informació:

* Un **vector director** és $\vec{d} = (-B, A)$.
* El **pendent** és $m = -\frac{A}{B}$.
* Un **vector normal** (perpendicular a la recta) és $\vec{n} = (A, B)$.
  > Observem que el producte escalar $\vec{d}\cdot \vec{n}=0$

---

!!! example "L'exemple complet"
    Troba les equacions de la recta que passa per $A(1, 2)$ amb vector director $\vec{d}(3, 4)$:

    * **Vectorial:** $(x, y) = (1, 2) + k(3, 4)$
    * **Paramètrica:** $\begin{cases} x = 1 + 3k \\ y = 2 + 4k \end{cases}$
    * **Contínua:** $\frac{x-1}{3} = \frac{y-2}{4}$
    * **Punt-pendent:** $y - 2 = \frac{4}{3}(x - 1)$
    * **Explícita:** $y = \frac{4}{3}x + \frac{2}{3}$
    * **Implícita o general:** $4x - 3y + 2 = 0$