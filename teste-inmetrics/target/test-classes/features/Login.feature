# language: pt
@Login
Funcionalidade: Realizar teste na pagina de Login

  Esquema do Cenario: Realizar login com dados validos
    Dado acessada a <url>
    E realizar login
    Entao a aplicacao deve redirecionar para a pagina <urlA>

    Exemplos: 
      | url                                                  | urlA                                             |
      | "https://inm-test-app.herokuapp.com/accounts/login/" | "https://inm-test-app.herokuapp.com/empregados/" |

  Esquema do Cenario: Realizar login com dados invalidos
    Dado acessada a <url>
    E realizar login invalido
    Entao a aplicacao deve exibir a <mensagem>

    Exemplos: 
      | url                                                  | mensagem                           |
      | "https://inm-test-app.herokuapp.com/accounts/login/" | "ERRO! Usuário ou Senha inválidos" |
