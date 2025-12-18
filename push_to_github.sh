#!/bin/bash

# Script para fazer push para GitHub
# Execute com: bash push_to_github.sh

cd /private/tmp/viana-site

echo "=== Verificando status git ==="
git status

echo -e "\n=== Tentando push para GitHub ==="
git push -u origin main -v

if [ $? -eq 0 ]; then
    echo -e "\n✅ Push bem-sucedido!"
    echo "Seu site está disponível em: https://github.com/vianafjorge/viana-site"
else
    echo -e "\n❌ Push falhou"
    echo ""
    echo "PRÓXIMAS ETAPAS:"
    echo "1. Acesse https://github.com/new"
    echo "2. Crie um repositório chamado 'viana-site'"
    echo "3. Escolha 'Public'"
    echo "4. NÃO inicialize com README"
    echo "5. Clique em 'Create repository'"
    echo "6. Execute este script novamente"
fi
