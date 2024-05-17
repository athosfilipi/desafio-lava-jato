### 1. Criar um Agendamento

```bash
curl -X POST http://localhost:4000/api/appointments -H "Content-Type: application/json" -d '{
    "license": "ABC1D34",
    "date": "2024-05-25",
    "time": "10:00",
    "type": "Completa"
}'
```

### 2. Listar Agendamentos

```bash
curl -X GET http://localhost:4000/api/appointments
```

### 3. Confirmar um Agendamento

Para confirmar um agendamento, você precisa do ID do agendamento. Substitua {id} pelo ID real do agendamento.

```bash
curl -X PUT http://localhost:4000/api/appointments/{id}/confirm
```

### 4. Cancelar um Agendamento

Da mesma forma, para cancelar um agendamento, você precisará do ID do agendamento. Substitua {id} pelo ID real.

```bash
curl -X DELETE http://localhost:4000/api/appointments/{id}
```
