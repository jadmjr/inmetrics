# language: pt
@Inmetrics
Funcionalidade: Realizar teste em página de cadastro

  Esquema do Cenario: Realizar cadastro com dados validos
    Dado acessada a pagina de cadastro no <ambiente>
    E informado o <usuario>
    E a senha <senha>
    E a confirmacao de senha <senha>
    E clicar no botao cadastrar
    Entao a aplicacao deve redirecionar para a pagina <url>

    Exemplos: 
      | ambiente | usuario          | senha      | url                                                  |
      | "TEST"   | "julimarQaAQDDa" | "teste123" | "https://inm-test-app.herokuapp.com/accounts/login/" |

  Esquema do Cenario: Realizar cadastro com usuario cadastrado
    Dado acessada a pagina de cadastro no <ambiente>
    E informado o <usuario>
    E a senha <senha>
    E a confirmacao de senha <senha>
    E clicar no botao cadastrar
    Entao a aplicacao deve informar que o usuario ja esta cadastrado

    Exemplos: 
      | ambiente | usuario     | senha      |
      | "TEST"   | "julimarQa" | "teste123" |

  Esquema do Cenario: Realizar cadastro com confirmacao de senha incorreta
    Dado acessada a pagina de cadastro no <ambiente>
    E informado o <usuario>
    E a senha <senha>
    E a confirmacao de senha <confirmacao>
    E clicar no botao cadastrar
    Entao a aplicacao deve informar que as senha informadas sao diferentes

    Exemplos: 
      | ambiente | usuario          | senha      | confirmacao |
      | "TEST"   | "julimarQa"      | "teste123" | "misturar"  |
      | "TEST"   | "julimarQa"      | "teste123" | "teste123"  |
      | "TEST"   | "julimar12323Qa" | "teste123" | "teste123"  |
