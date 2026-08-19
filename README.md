# Apunts de Batxillerat — Matemàtiques

Aquest repositori conté els apunts de Matemàtiques de Batxillerat, generats amb
[Zensical](https://zensical.org/).

## Instal·lació

Cal tenir [Python](https://www.python.org/downloads/) 3.10 o superior instal·lat.

**Windows**

Fes doble clic a `install.bat`, o bé des d'una terminal:

```
install.bat
```

**macOS / Linux**

```
chmod +x install.sh
./install.sh
```

Això crea un entorn virtual a la carpeta `.venv` i hi instal·la Zensical i la
resta de paquets necessaris (llistats a `requirements.txt`).

## Ús

Un cop instal·lat, per veure el lloc en local:

**Windows**

```
.venv\Scripts\zensical serve
```

**macOS / Linux**

```
.venv/bin/zensical serve
```

I obre la URL que mostri la terminal (normalment `http://127.0.0.1:8000`) al
navegador.
