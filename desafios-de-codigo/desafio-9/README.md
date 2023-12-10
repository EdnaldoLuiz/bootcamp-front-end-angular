# Dio Bank II

## Desafio

O programa em JavaScript simula o saldo de uma conta bancária, permitindo operações de depósitos e saques.

### Entrada:

A entrada deve preencher o objeto JSON `contaBancaria` com as seguintes propriedades:

- `nomeCliente`: uma string com o nome do cliente.
- `saldo`: um número que representa o saldo inicial da conta.
- `numOperacoes`: um número que indica o número de operações a serem realizadas.

Para cada operação, o usuário informa:

- `tipoOperacao`: uma string que pode ser 'depósito' ou 'saque'.
- `valorOperacao`: um número que representa o valor da operação.

### Exemplo:

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada | Saída                           |
|---------|---------------------------------|
| Ana     | Nome do cliente: Ana            |
| 1000    | Saldo final: R$ 1000.00         |
| 2       |                                 |
| depósito|                                 |
| 200     |                                 |
| saque   |                                 |
| 200     |                                 |
|         |                                 |
| Caio    | Nome do cliente: Caio           |
| 400     | Saldo final: R$ 100.00          |
| 1       |                                 |
| saque   |                                 |
| 300     |                                 |
|         |                                 |
| Pedro   | Nome do cliente: Pedro          |
| 30      | Saldo final: R$ 745.00          |
| 2       |                                 |
| depósito|                                 |
| 250     |                                 |
| depósito|                                 |
| 465     |                                 |
