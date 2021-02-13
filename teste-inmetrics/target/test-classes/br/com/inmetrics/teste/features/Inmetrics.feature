# language: pt
@Inmetrics
Funcionalidade: Realizar teste em página de cadastro

  #fazendo isso eu lembrei o quanto eu gosto de automatizar frontend s2
  Esquema do Cenario: Realizar cadastro com dados validos
    Dado acessada a pagina de cadastro no <ambiente>
    E informado o <usuario>
    E a senha <senha>
    E a confirmacao de senha <senha>
    E clicar no botao cadastrar
    Entao a aplicacao deve redirecionar para a pagina de login

    Exemplos: 
      | ambiente | usuario     | senha      |
      | "TEST"   | "julimarQa" | "teste123" |

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
