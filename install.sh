#!/usr/bin/env bash
# Instal·la l'entorn necessari per treballar amb aquest projecte (macOS / Linux).
# Crea un entorn virtual Python (.venv) i hi instal·la Zensical i la resta
# de paquets llistats a requirements.txt.

set -e

if ! command -v python3 >/dev/null 2>&1; then
    echo "No s'ha trobat Python 3 al PATH."
    echo "Instal·la Python 3.10 o superior (https://www.python.org/downloads/) i torna a provar-ho."
    exit 1
fi

echo "Creant l'entorn virtual a .venv ..."
python3 -m venv .venv

echo "Instal·lant les dependencies ..."
.venv/bin/pip install --upgrade pip
.venv/bin/pip install -r requirements.txt

echo ""
echo "Instal·lacio completada."
echo "Per iniciar el servidor local, executa:"
echo ""
echo "    .venv/bin/zensical serve"
echo ""
