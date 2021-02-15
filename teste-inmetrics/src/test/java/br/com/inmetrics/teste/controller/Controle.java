package br.com.inmetrics.teste.controller;

import static org.junit.Assert.fail;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import br.com.inmetrics.teste.config.Config;
import br.com.inmetrics.teste.domain.Login;
import br.com.inmetrics.teste.domain.Signup;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;

public class Controle extends Config {

	Signup cad;
	Login login;

	public Controle() {
		inicializaNavegador();
		inicializaEvidencia();

	}

	@Dado("^acessada a pagina de cadastro no \"([^\"]*)\"$")
	public void acessada_a_pagina_de_login_no(String ambiente) throws Throwable {
		if (ambiente.contains("TEST")) {
			driver.get("https://inm-test-app.herokuapp.com/accounts/signup/");
		} else {
			System.out.println("Ambiente não configurado");
			driver.close();
		}
	}

	@Dado("^informado o \"([^\"]*)\"$")
	public void informado_o(String usuario) {
		cad = new Signup();
		PageFactory.initElements(driver, cad);
		cad.preencherUsuario(usuario);

	}

	@Dado("^a senha \"([^\"]*)\"$")
	public void a_senha(String senha) {
		cad.preencherSenha(senha);
	}

	@Dado("^a confirmacao de senha \"([^\"]*)\"$")
	public void a_confirmacao_de_senha(String confirmaSenha) {
		cad.preencherConfirmacaoSenha(confirmaSenha);
	}

	@Dado("^clicar no botao cadastrar$")
	public void clicar_no_botao_cadastrar() {
		cad.clickCadastrar();
	}

	@Entao("^a aplicacao deve redirecionar para a pagina \"([^\"]*)\"$")
	public void a_aplicacao_deve_redirecionar_para_a_pagina_de_login(String url) throws Throwable {
		Thread.sleep(1500);
		String urlAtual = driver.getCurrentUrl();
		driver.close();
		Assert.assertEquals(true, urlAtual.contains(url));
	}

	@Entao("^a aplicacao deve redirecionar para pagina$")
	public void a_aplicacao_deve_redirecionar_para_pagina() throws Throwable {
		System.out.println("aaa");
	}

	@Entao("^a aplicacao deve informar que o usuario ja esta cadastrado$")
	public void a_aplicacao_deve_informar_que_o_usuario_ja_esta_cadastrado() throws Throwable {
		Thread.sleep(2500);
		PageFactory.initElements(driver, cad);
		Assert.assertTrue(cad.validarMsgUsuarioCadastro());
		driver.close();
	}

	@Entao("^a aplicacao deve informar que as senha informadas sao diferentes$")
	public void a_aplicacao_deve_informar_que_as_senha_informadas_sao_diferentes() throws Throwable {
		Thread.sleep(2500);
		PageFactory.initElements(driver, cad);
		Assert.assertTrue(cad.validarMsgSenhaErrada());
		driver.close();
	}

}
