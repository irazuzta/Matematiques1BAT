# Continuïtat de funcions i classificació de les discontinuïtats

Un cop hem estudiat el concepte de límit, podem introduir un dels conceptes més importants de les funcions: la **continuïtat**. Aquesta propietat és la que ens permet saber si una funció presenta algun tipus de ruptura o no.

## 1. Idea i definició de continuïtat

Intuïtivament, diem que una funció és contínua si la seva gràfica es pot dibuixar d'un sol traç, sense haver d'aixecar el llapis del paper, o sigui, sense cap trencament ni ruptura. Si en algun punt es perd aquesta continuïtat, llavors parlem de discontinuïtat en aquell punt.  

### Definició formal
Perquè una funció sigui contínua en un punt concret $x = a$, s'han de complir **tres condicions**:

* **Existència de la imatge:** El punt $x=a$ ha de pertànyer al domini, és a dir, ha d'existir $f(a)$.
* **Existència del límit:** El límit en el punt ha d'existir (ha de ser un nombre real). Per tant, els límits laterals han de coincidir:

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L \implies \mathbf{\lim_{x \to a} f(x) = L}, \hspace{0.5cm} L \in \mathbb{R}$$

* **Coincidència de valors:** El valor del límit ha de ser igual al valor de la imatge:
  
$$\lim_{x \to a} f(x) = f(a)$$



> **Observació** 
> 
> Totes les funcions que hem estudiat fins ara (polinòmiques, racionals, exponencials, logarítmiques... i totes les seves transformacions, operacions i composicions) són **contínues en tot el seu domini**. 
> 
> Per tant, **on poden aparèixer les discontinuïtats?** Els únics punts on podem trobar problemes de continuïtat són:
> 
> * Punts que **no pertanyen al domini** per fer zero algun denominador.
> * **Punts de ruptura en funcions a trossos** i que no compleixin les condicions de continuïtat.

---

## 2. Classificació de les discontinuïtats

Si en un punt alguna de les tres condicions anteriors no es compleix, diem que la funció presenta una **discontinuïtat** en aquell punt. Recuperant els quatre exemples de l'apartat de límits en un punt, podrem classificar-les:

### **Discontinuïtats Evitables**

Es produeixen quan **existeix el límit** en el punt, però la imatge en aquest punt és diferent o directament la funció no està definida en aquell punt.

**Cas del "falta un punt":** 

Recordem la funció $f(x) = \displaystyle\frac{x^2-4}{x-2}$:
  
* No existeix $f(2)=\displaystyle\frac{0}{0}$ (anul·la denominador)
* Però $\lim\limits_{x \to 2} f(x)=4$.

Per tant falla la condició 1 de la continuïtat.

>**Caracterització:** 

>* Existeix $\lim_{x \to a} f(x)$ 
>* No existeix $f(a)$  ($a \notin Dom(f)$).

**Cas de "punt desplaçat":** 

Recordem la funció $f(x) = \begin{cases} x + 2 & \text{si } x \neq 1 \\ 5 & \text{si } x = 1 \end{cases}$

* Existeix $f(1)=5$ 
* Existeix $\lim\limits_{x \to 1} f(x)=3$. 
  
Per tant falla la condició 3 de la continuïtat perquè $3 \neq 5$.

>**Caracterització:** 

>* Existeix $\lim_{x \to a} f(x)$ 
>* Existeix $f(a)$
>* Però $\lim\limits_{x \to a} f(x) \ne f(a)$


### **Discontinuïtat de Salt**

Es produeix quan els límits laterals existeixen, però donen valors diferents. Això provoca un salt vertical en la gràfica.

Recordem la funció $f(x) = \begin{cases} x + 1 & \text{si } x < 3 \\ 2x - 1 & \text{si } x \ge 3 \end{cases}$

En el punt $x=3$:

* El límit per l'esquerra val $4$ 
* El límit per la dreta val $5$.

Per tant falla la condició 2 de la continuïtat  

> **Caracterització:**
> 
> * $\lim_{x \to a^-} f(x) \neq \lim_{x \to a^+} f(x)$.


### **Discontinuïtat Asimptòtica** 
Es produeix quan un o els dos límits laterals tendeixen a l'infinit. La funció s'escapa verticalment cap amunt o cap avall. En aquests casos apareix una asímptota vertical d'equació: $x=a$

Recordem la funció $f(x) = \displaystyle\frac{1}{x}$

* No existeix $f(0)=\displaystyle\frac{1}{0}$
* En apropar-nos a zero, la funció creix o decreix indefinidament per dreta i esquerra. $\lim\limits_{x \to 0^+} f(x) = + \infty$ i $\lim\limits_{x \to 0^-} f(x) = -\infty$

Per tant falla la condició 1 i 2 (i per tant 3) de la continuïtat.
 
> **Caracterització:** 
> 
> * $\lim\limits_{x \to a^+} f(x) = \pm \infty$ i/o $\lim\limits_{x \to a^-} f(x) = \pm \infty$



---

## 3. Taula resum de les discontinuïtats

Aquesta taula permet classificar ràpidament qualsevol discontinuïtat segons el resultat dels límits laterals i la imatge:

| Tipus de discontinuïtat | Nom del cas | Caracterització matemàtica | Estat del límit |
| :--- | :--- | :--- | :--- |
| **Evitable** | Falta un punt | $\nexists f(a)$ però $\exists \lim\limits_{x \to a} f(x) = L$ | El límit existeix (finit) |
| **Evitable** | Punt desplaçat | $\lim\limits_{x \to a} f(x) = L \neq f(a)$ | El límit existeix (finit) |
| **De Salt** | Salt finit | $\lim\limits_{x \to a^-} f(x) \neq \lim\limits_{x \to a^+} f(x)$ | No existeix (laterals diferents) |
| **Asimptòtica** | Salt infinit | $\lim\limits_{x \to a} f(x) = \pm \infty$ | Un o els dos laterals són $\infty$ |

