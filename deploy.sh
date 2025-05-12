#!/bin/bash
echo "Bygger Angular-prosjektet..."
ng build -c production

echo "Kopierer filer til serveren..."
scp -r dist/descalerdelight.com/* root@10.10.10.100:/var/www/descalerdelight.com/dist/descalerdelight.com

echo "Utrulling fullført!"