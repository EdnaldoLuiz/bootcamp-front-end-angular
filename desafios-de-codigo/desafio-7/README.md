# Comparando Contas Bancarias

## Desafio

O objetivo deste desafio é criar um programa em JavaScript que compare duas contas bancárias e determine se elas possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o número da conta e o saldo da conta.

### Entrada

O programa receberá os dados necessários para criar duas contas bancárias para comparação:

**Conta Bancária 1:**
- Número da Conta (número inteiro): número da conta da primeira conta bancária.
- Saldo (número): saldo da primeira conta bancária.

**Conta Bancária 2:**
- Número da Conta (número inteiro): número da conta da segunda conta bancária.
- Saldo (número): saldo da segunda conta bancária.

*Importante:* a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

### Saída

Se todos os dados das contas bancárias forem estritamente iguais, o programa deverá retornar a mensagem:

    As contas bancárias são iguais.

Caso contrário, o programa deverá retornar a mensagem:

    As conas bancárias são diferentes

### Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.


| Entrada | Saída |
| ------- | ----- |
| Pedro <br> 1234 <br> 500.0 <br> Pedro <br> 1252 <br> 400.0 | As contas bancárias são diferentes. |
| Ju <br> 01090 <br> 80.0 <br> Ju <br> 01090 <br> 80.0 | As contas bancárias são iguais. |
| Tadeu <br> 11111 <br> 600.0 <br> João <br> 12311 <br> 600.0 | As contas bancárias são diferentes. |
