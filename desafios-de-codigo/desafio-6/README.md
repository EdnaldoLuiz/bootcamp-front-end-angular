# Desafio DIO Bank

## Entrada

A entrada deve receber os valores que preencherão o objeto JSON `contaBancaria`. Ele deve conter as seguintes propriedades:

- cliente: uma string com o nome do cliente.
- numeroConta: uma string com o número da conta.
- saldoInicial: um número que representa o saldo inicial da conta.

Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

## Saída

Deverá retornar uma mensagem (string) que informa o nome do cliente, o número da conta e o saldo final, da seguinte maneira:

    Nome do cliente: ${contaBancaria.cliente}
    Número da conta: ${contaBancaria.numeroConta}
    Saldo: R$ ${contaBancaria.saldo.toFixed(2)}


## Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada | Saída |
| ------- | ----- |
| João <br> 12345 <br> 1000.50 | Nome do cliente: João <br> Número da conta: 12345 <br> Saldo: R$ 1000.50 |
| Ana <br> 01011 <br> 290.00 | Nome do cliente: Ana <br> Número da conta: 01011 <br> Saldo: R$ 290.00 |
| Paula <br> 23540 <br> 3050.99 | Nome do cliente: Paula <br> Número da conta: 23540 <br> Saldo: R$ 3050.99 |
