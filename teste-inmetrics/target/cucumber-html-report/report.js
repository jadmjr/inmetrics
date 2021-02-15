$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Inmetrics.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Realizar teste em página de cadastro",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Inmetrics"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Realizar cadastro com dados validos",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-dados-validos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "acessada a pagina de cadastro no \u003cambiente\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "informado o \u003cusuario\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "a confirmacao de senha \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "a aplicacao deve redirecionar para a pagina \u003curl\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-dados-validos;",
  "rows": [
    {
      "cells": [
        "ambiente",
        "usuario",
        "senha",
        "url"
      ],
      "line": 14,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-dados-validos;;1"
    },
    {
      "cells": [
        "\"TEST\"",
        "\"julimarQaAQDDa\"",
        "\"teste123\"",
        "\"https://inm-test-app.herokuapp.com/accounts/login/\""
      ],
      "line": 15,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-dados-validos;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
  "name": "Realizar cadastro com dados validos",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-dados-validos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Inmetrics"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "acessada a pagina de cadastro no \"TEST\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "informado o \"julimarQaAQDDa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \"teste123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "a confirmacao de senha \"teste123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "a aplicacao deve redirecionar para a pagina \"https://inm-test-app.herokuapp.com/accounts/login/\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 34
    }
  ],
  "location": "Controle.acessada_a_pagina_de_login_no(String)"
});
formatter.result({
  "duration": 9094020400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "julimarQaAQDDa",
      "offset": 13
    }
  ],
  "location": "Controle.informado_o(String)"
});
formatter.result({
  "duration": 269054500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 9
    }
  ],
  "location": "Controle.a_senha(String)"
});
formatter.result({
  "duration": 93588100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 24
    }
  ],
  "location": "Controle.a_confirmacao_de_senha(String)"
});
formatter.result({
  "duration": 104026600,
  "status": "passed"
});
formatter.match({
  "location": "Controle.clicar_no_botao_cadastrar()"
});
formatter.result({
  "duration": 1136176000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://inm-test-app.herokuapp.com/accounts/login/",
      "offset": 45
    }
  ],
  "location": "Controle.a_aplicacao_deve_redirecionar_para_a_pagina_de_login(String)"
});
formatter.result({
  "duration": 1689664300,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.com.inmetrics.teste.controller.Controle.a_aplicacao_deve_redirecionar_para_a_pagina_de_login(Controle.java:63)\r\n\tat ✽.Entao a aplicacao deve redirecionar para a pagina \"https://inm-test-app.herokuapp.com/accounts/login/\"(features/Inmetrics.feature:11)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Realizar cadastro com usuario cadastrado",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-usuario-cadastrado",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 18,
  "name": "acessada a pagina de cadastro no \u003cambiente\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "informado o \u003cusuario\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "a senha \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "a confirmacao de senha \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a aplicacao deve informar que o usuario ja esta cadastrado",
  "keyword": "Entao "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-usuario-cadastrado;",
  "rows": [
    {
      "cells": [
        "ambiente",
        "usuario",
        "senha"
      ],
      "line": 26,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-usuario-cadastrado;;1"
    },
    {
      "cells": [
        "\"TEST\"",
        "\"julimarQa\"",
        "\"teste123\""
      ],
      "line": 27,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-usuario-cadastrado;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 27,
  "name": "Realizar cadastro com usuario cadastrado",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-usuario-cadastrado;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Inmetrics"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "acessada a pagina de cadastro no \"TEST\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "informado o \"julimarQa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "a senha \"teste123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "a confirmacao de senha \"teste123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a aplicacao deve informar que o usuario ja esta cadastrado",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 34
    }
  ],
  "location": "Controle.acessada_a_pagina_de_login_no(String)"
});
formatter.result({
  "duration": 7825286500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "julimarQa",
      "offset": 13
    }
  ],
  "location": "Controle.informado_o(String)"
});
formatter.result({
  "duration": 151060300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 9
    }
  ],
  "location": "Controle.a_senha(String)"
});
formatter.result({
  "duration": 113341100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 24
    }
  ],
  "location": "Controle.a_confirmacao_de_senha(String)"
});
formatter.result({
  "duration": 109654200,
  "status": "passed"
});
formatter.match({
  "location": "Controle.clicar_no_botao_cadastrar()"
});
formatter.result({
  "duration": 1168619800,
  "status": "passed"
});
formatter.match({
  "location": "Controle.a_aplicacao_deve_informar_que_o_usuario_ja_esta_cadastrado()"
});
formatter.result({
  "duration": 2761478800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Realizar cadastro com confirmacao de senha incorreta",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 30,
  "name": "acessada a pagina de cadastro no \u003cambiente\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "informado o \u003cusuario\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a senha \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a confirmacao de senha \u003cconfirmacao\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a aplicacao deve informar que as senha informadas sao diferentes",
  "keyword": "Entao "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;",
  "rows": [
    {
      "cells": [
        "ambiente",
        "usuario",
        "senha",
        "confirmacao"
      ],
      "line": 38,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;;1"
    },
    {
      "cells": [
        "\"TEST\"",
        "\"julimarQa\"",
        "\"teste123\"",
        "\"misturar\""
      ],
      "line": 39,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;;2"
    },
    {
      "cells": [
        "\"TEST\"",
        "\"julimarQa\"",
        "\"teste123\"",
        "\"teste123\""
      ],
      "line": 40,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;;3"
    },
    {
      "cells": [
        "\"TEST\"",
        "\"julimar12323Qa\"",
        "\"teste123\"",
        "\"teste123\""
      ],
      "line": 41,
      "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 39,
  "name": "Realizar cadastro com confirmacao de senha incorreta",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Inmetrics"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "acessada a pagina de cadastro no \"TEST\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "informado o \"julimarQa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a senha \"teste123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a confirmacao de senha \"misturar\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a aplicacao deve informar que as senha informadas sao diferentes",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 34
    }
  ],
  "location": "Controle.acessada_a_pagina_de_login_no(String)"
});
formatter.result({
  "duration": 7079696900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "julimarQa",
      "offset": 13
    }
  ],
  "location": "Controle.informado_o(String)"
});
formatter.result({
  "duration": 122609200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 9
    }
  ],
  "location": "Controle.a_senha(String)"
});
formatter.result({
  "duration": 100356100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "misturar",
      "offset": 24
    }
  ],
  "location": "Controle.a_confirmacao_de_senha(String)"
});
formatter.result({
  "duration": 111760800,
  "status": "passed"
});
formatter.match({
  "location": "Controle.clicar_no_botao_cadastrar()"
});
formatter.result({
  "duration": 1050488400,
  "status": "passed"
});
formatter.match({
  "location": "Controle.a_aplicacao_deve_informar_que_as_senha_informadas_sao_diferentes()"
});
formatter.result({
  "duration": 2688023800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Realizar cadastro com confirmacao de senha incorreta",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Inmetrics"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "acessada a pagina de cadastro no \"TEST\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "informado o \"julimarQa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a senha \"teste123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a confirmacao de senha \"teste123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a aplicacao deve informar que as senha informadas sao diferentes",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 34
    }
  ],
  "location": "Controle.acessada_a_pagina_de_login_no(String)"
});
formatter.result({
  "duration": 7886955300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "julimarQa",
      "offset": 13
    }
  ],
  "location": "Controle.informado_o(String)"
});
formatter.result({
  "duration": 134781300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 9
    }
  ],
  "location": "Controle.a_senha(String)"
});
formatter.result({
  "duration": 102523100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 24
    }
  ],
  "location": "Controle.a_confirmacao_de_senha(String)"
});
formatter.result({
  "duration": 121654200,
  "status": "passed"
});
formatter.match({
  "location": "Controle.clicar_no_botao_cadastrar()"
});
formatter.result({
  "duration": 992651800,
  "status": "passed"
});
formatter.match({
  "location": "Controle.a_aplicacao_deve_informar_que_as_senha_informadas_sao_diferentes()"
});
formatter.result({
  "duration": 2539980300,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat br.com.inmetrics.teste.controller.Controle.a_aplicacao_deve_informar_que_as_senha_informadas_sao_diferentes(Controle.java:83)\r\n\tat ✽.Entao a aplicacao deve informar que as senha informadas sao diferentes(features/Inmetrics.feature:35)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 41,
  "name": "Realizar cadastro com confirmacao de senha incorreta",
  "description": "",
  "id": "realizar-teste-em-página-de-cadastro;realizar-cadastro-com-confirmacao-de-senha-incorreta;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Inmetrics"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "acessada a pagina de cadastro no \"TEST\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "informado o \"julimar12323Qa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a senha \"teste123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a confirmacao de senha \"teste123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a aplicacao deve informar que as senha informadas sao diferentes",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 34
    }
  ],
  "location": "Controle.acessada_a_pagina_de_login_no(String)"
});
formatter.result({
  "duration": 7189483400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "julimar12323Qa",
      "offset": 13
    }
  ],
  "location": "Controle.informado_o(String)"
});
formatter.result({
  "duration": 220667300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 9
    }
  ],
  "location": "Controle.a_senha(String)"
});
formatter.result({
  "duration": 87259800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 24
    }
  ],
  "location": "Controle.a_confirmacao_de_senha(String)"
});
formatter.result({
  "duration": 88493400,
  "status": "passed"
});
formatter.match({
  "location": "Controle.clicar_no_botao_cadastrar()"
});
formatter.result({
  "duration": 1391787500,
  "status": "passed"
});
formatter.match({
  "location": "Controle.a_aplicacao_deve_informar_que_as_senha_informadas_sao_diferentes()"
});
formatter.result({
  "duration": 2606934700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat br.com.inmetrics.teste.controller.Controle.a_aplicacao_deve_informar_que_as_senha_informadas_sao_diferentes(Controle.java:83)\r\n\tat ✽.Entao a aplicacao deve informar que as senha informadas sao diferentes(features/Inmetrics.feature:35)\r\n",
  "status": "failed"
});
});