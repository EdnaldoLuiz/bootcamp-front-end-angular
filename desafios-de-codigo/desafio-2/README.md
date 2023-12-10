# Validador de Números de Conta

## Descrição
Este programa combina vários conceitos de lógica de programação, como manipulação de strings, operações matemáticas, controle de fluxo e expressões regulares. Ele foi desenvolvido para fornecer uma solução de correção para a equipe de administração de uma empresa bancária. A equipe precisa de uma solução para a validação de números de contas com base em regras específicas. O programa solicita ao usuário que insira um número de conta e verifica se ele atende aos critérios predefinidos de validação. Além disso, o programa pode informar ao usuário qual regra específica não foi cumprida caso a validação falhe.

## Regras de Validação
1. O número de conta deve ter exatamente 6 dígitos.
2. O primeiro dígito deve ser maior que zero, ou seja, estar no intervalo de 1 a 9.
3. A soma dos dígitos do número de conta não deve ser maior do que 30.

## Entrada
O programa solicita as seguintes informações:

- Número de conta (uma sequência de 6 dígitos).

## Saída
O programa fornece uma mensagem que informa se o número de conta é válido ou inválido, indicando se o número de conta atende às regras de validação. Caso o número de conta seja inválido, o programa informa qual regra específica não foi cumprida.

## Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada | Saída
--- | ---
634100 \| Numero de conta valido. \| |
023699 \| Numero de conta invalido: O primeiro digito deve ser maior que zero. \| |
989899 \| Numero de conta invalido: A soma dos digitos e maior que 30. \| |
