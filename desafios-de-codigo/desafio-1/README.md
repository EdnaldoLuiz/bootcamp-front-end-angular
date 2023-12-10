# Agendamento de Pagamento

## Descrição
Este programa simula um agendamento de pagamento para auxiliar os clientes de um sistema bancário. O usuário é solicitado a fornecer informações sobre a conta a ser paga, como nome do beneficiário, valor da conta e data de vencimento. O programa fornece uma mensagem de confirmação do agendamento com as informações fornecidas.

## Entrada
O programa solicita as seguintes informações:

- Nome do beneficiário.
- Valor a ser pago (em reais, sem casas decimais).
- Data de vencimento no formato "DD/MM/AAAA" (Dia, Mês e Ano separados por barras).

## Saída
A saída fornece uma mensagem de confirmação, informando ao cliente que o agendamento foi realizado com sucesso. A mensagem contém as informações fornecidas pelo usuário de forma concatenada. O formato da mensagem de saída é:

"Pagamento Agendado! Valor: R$ [Valor da Conta], vencimento [Data de Vencimento]."

## Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada | Saída
--- | ---
Sabrina \| <br> 5000 \|<br> 04/12/2023 \| | Pagamento Agendado! Valor: R$ 5000, vencimento 04/12/2023.
Fabio \| <br> 300 \| <br> 14/01/2023 \| | Pagamento Agendado! Valor: R$ 300, vencimento 14/01/2023.
Marcelo \| <br> 1000 \| <br> 31/12/2023 \| | Pagamento Agendado! Valor: R$ 1000, vencimento 31/12/2023.
