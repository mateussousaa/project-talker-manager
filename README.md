# Talker Manager
---

## Desenvolvimento
- Desenvolvi uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e alguns endpoints para ler e escrever em um arquivo utilizando o módulo fs.

<br/>

## Documentação da API
---

### Realiza login

```
  POST /login
```

- Request Body

```
{
  "email": "email@email.com",
  "password": "123456"
}
```

- Response

```
{
  "token": "7mqaVRXJSp886CGr"
}
```
---

### Retorna todos os palestrantes

```
  GET /talker
```

---

### Retorna um palestrante

```
  GET /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do palestrante que você quer |

---

### Retorna um palestrante pelo nome.

```
  GET /talker/search?q=searchTerm
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `searchTerm`      | `string` | **Obrigatório**. O nome que deseja retorna. |

---

### Cadastra um novo palestrante.

```
  POST /talker
```
- Request Body
```
{
  "name": "User",
  "age": 25,
  "talk": {
    "watchedAt": "28/10/2022",
    "rate": 3
  }
}
```
---

### Atualiza os dados de um palestrante cadastrado.

```
  PUT /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que deseja atualizar. |

#### OBS: Os valores que podem ser editados, são os mesmo necessários para cadastar.

---

### Deleta um palestrante pelo id.

```
  DELETE /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que deseja **DELETAR**. |

##
