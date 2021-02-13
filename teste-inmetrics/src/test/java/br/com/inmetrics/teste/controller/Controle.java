package br.com.inmetrics.teste.controller;

import org.openqa.selenium.support.PageFactory;

import br.com.inmetrics.teste.config.Config;
import br.com.inmetrics.teste.domain.Cadastro;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import junit.framework.Assert;

public class Controle extends Config {

	Cadastro cad;

	public Controle() {
		inicializaNavegador();
		inicializaEvidencia();
		cad = new Cadastro();
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

	@Entao("^a aplicacao deve redirecionar para a pagina de login$")
	public void a_aplicacao_deve_redirecionar_para_a_pagina_de_login() throws Throwable {
		System.out.println("Aaa");
	}

	@Entao("^a aplicacao deve informar que o usuario ja esta cadastrado$")
	public void a_aplicacao_deve_informar_que_o_usuario_ja_esta_cadastrado() throws Throwable {
		Assert.assertTrue(cad.validarMsgUsuarioCadastro());
	}

}
