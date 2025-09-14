#!/bin/bash

# Limite de memória em MB (ex: 2048 MB = 2 GB)
LIMITE_MB=2048

# Intervalo de verificação em segundos
INTERVALO=10

echo "Monitorando o consumo de memória do Google Chrome..."

while true; do
  # Soma o uso de memória de todos os processos 'chrome'
  USO_MB=$(ps -C chrome -o rss= | awk '{sum+=$1} END {print int(sum/1024)}')

  echo "Uso atual: ${USO_MB} MB"

  if [ "$USO_MB" -gt "$LIMITE_MB" ]; then
    echo "⚠️  ALERTA: Chrome está consumindo mais de $LIMITE_MB MB de RAM!"
    notify-send "Alerta de Memória" "Chrome está usando ${USO_MB} MB de RAM"
  fi

  sleep $INTERVALO
done
