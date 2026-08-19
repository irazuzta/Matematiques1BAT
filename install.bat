@echo off
REM Instal·la l'entorn necessari per treballar amb aquest projecte (Windows).
REM Crea un entorn virtual Python (.venv) i hi instal·la Zensical i la resta
REM de paquets llistats a requirements.txt.

setlocal

where python >nul 2>nul
if errorlevel 1 (
    echo No s'ha trobat Python al PATH.
    echo Instal·la Python 3.10 o superior des de https://www.python.org/downloads/
    echo i torna a executar aquest script.
    pause
    exit /b 1
)

echo Creant l'entorn virtual a .venv ...
python -m venv .venv

echo Instal·lant les dependencies ...
call .venv\Scripts\pip install --upgrade pip
call .venv\Scripts\pip install -r requirements.txt

echo.
echo Instal·lacio completada.
echo Per iniciar el servidor local, executa:
echo.
echo     .venv\Scripts\zensical serve
echo.

pause
