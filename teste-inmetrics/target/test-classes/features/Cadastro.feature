# language: pt
@Cadastro
Funcionalidade: Realizar teste em página de cadastro

  Esquema do Cenario: Realizar cadastro com dados validos
    Dado acessada a <url>
    E informado o <usuario>
    E a senha <senha>
    E a confirmacao de senha <senha>
    E clicar no botao cadastrar
    Entao a aplicacao deve redirecionar para a pagina <urlA>

    Exemplos: 
      | url                                                   | usuario          | senha      | urlA                                                 |
      | "https://inm-test-app.herokuapp.com/accounts/signup/" | "cadmo_robo"     | "qwerty"   | "https://inm-test-app.herokuapp.com/accounts/login/" |
      | "https://inm-test-app.herokuapp.com/accounts/signup/" | "julimarQaAQDDa" | "teste123" | "https://inm-test-app.herokuapp.com/accounts/login/" |

  Esquema do Cenario: Realizar cadastro com usuario cadastrado
    Dado acessada a <url>
    E informado o <usuario>
    E a senha <senha>
    E a confirmacao de senha <senha>
    E clicar no botao cadastrar
    Entao a aplicacao deve informar que o usuario ja esta cadastrado

    Exemplos: 
      | url                                                   | usuario     | senha      |
      | "https://inm-test-app.herokuapp.com/accounts/signup/" | "julimarQa" | "teste123" |

  Esquema do Cenario: Realizar cadastro com confirmacao de senha incorreta
    Dado acessada a <url>
    E informado o <usuario>
    E a senha <senha>
    E a confirmacao de senha <confirmacao>
    E clicar no botao cadastrar
    Entao a aplicacao deve informar que as senha informadas sao diferentes

    Exemplos: 
      | url                                                   | usuario          | senha      | confirmacao |
      | "https://inm-test-app.herokuapp.com/accounts/signup/" | "julimarQa"      | "teste123" | "misturar"  |
      | "https://inm-test-app.herokuapp.com/accounts/signup/" | "julimarQa"      | "teste123" | "teste123"  |
      | "https://inm-test-app.herokuapp.com/accounts/signup/" | "julimar12323Qa" | "teste123" | "teste123"  |
