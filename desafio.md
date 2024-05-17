# Lava Jato 
### Duração: `3 dias`

## Descrição:
Construir sistema para agendamento de lavagens automotivas respeitando as
seguintes regras:

- 1. Para o agendamento é necessário os seguintes dados: Placa, Data, Horário,
   Tipo de Lavagem (Simples ou Completa)
- 2. Somente permitir agendamento para placas que seguem o formato mercosul
   (ABC1D34)
- 3. A agenda será aberta somente de segunda à sexta das 10h às 18h, com pausa
   das 12h às 13h;
- 4. A agenda será feita de slots, horários fixos que retornarão da API. Ex: ["10:00’,
   "10:15”, "10:30”]
- 5. O tempo de duração dos slots dependerá com Tipo da Consulta. Completa =
   45 minutos e Simples = 30 minutos.
- 6. Não permitir agendamentos com sobreposição de horário (início e fim),
   mesmo de Tipos de Lavagens diferentes.
- 7. Permitir a consulta de agendamentos
- 8. Permitir o cancelamento de agendamentos
- 9. Permitir a confirmação de agendamentos
    - Restrições:
        - Front-End: React, TypeScript, Styled-Components, Validação de Formulário
   (Formik ou Hook Form), Docker
   Back-End: TypeScript, Prisma, MySQL, Docker.
   

## Atividades:
- Construir tela e APIs para criação de agendamento
- Construir tela e APIs para listagem de agendamento
- Construir tela e APIs para confirmação de agendamento
- Construir tela e APIs para cancelamento de agendamento
- Configurar Docker para execução da aplicação (Front-end e Back-end)
