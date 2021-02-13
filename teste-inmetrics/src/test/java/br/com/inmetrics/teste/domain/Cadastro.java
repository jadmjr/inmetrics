package br.com.inmetrics.teste.domain;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import br.com.inmetrics.teste.config.Config;

public class Cadastro {

	private Map<String, String> data;
	private WebDriver driver;
	private int timeout = 15;

	@FindBy(name = "username")
	@CacheLookup
	private WebElement usuario;

	@FindBy(name = "pass")
	@CacheLookup
	private WebElement pass;

	@FindBy(name = "confirmpass")
	@CacheLookup
	private WebElement confirmpass; // txt1

	@FindAll({ @FindBy(tagName = "txt1") })
	@CacheLookup
	private List<WebElement> mensagens; //

	@FindAll({ @FindBy(tagName = "button") })
	@CacheLookup
	private List<WebElement> button;

	private final String pageUrl = "/accounts/signup/";

	public Cadastro() {
	}

	public Cadastro(WebDriver driver) {
		this();
		this.driver = driver;
	}

	public Cadastro(WebDriver driver, Map<String, String> data) {
		this(driver);
		this.data = data;
	}

	public Cadastro(WebDriver driver, Map<String, String> data, int timeout) {
		this(driver, data);
		this.timeout = timeout;
	}

	// jadmjr
	public Cadastro preencherUsuario(String user) {
		usuario.sendKeys(user);
		return this;
	}

	public Cadastro preencherSenha(String senha) {
		pass.sendKeys(senha);
		return this;
	}

	public Cadastro preencherConfirmacaoSenha(String confirmaSenha) {
		confirmpass.sendKeys(confirmaSenha);
		return this;
	}

	public Boolean validarMsgUsuarioCadastro() {
		try {
			Thread.sleep(2500);
			System.out.println(mensagens.get(0).getText());

		} catch (InterruptedException e) {
			return false;
		}
		return true;

	}

	public Cadastro clickCadastrar() {
		button.get(1).click();
		return this;
	}
	// jadmjr

	public Cadastro verifyPageUrl() {
		(new WebDriverWait(driver, timeout)).until(new ExpectedCondition<Boolean>() {
			public Boolean apply(WebDriver d) {
				return d.getCurrentUrl().contains(pageUrl);
			}
		});
		return this;
	}
}
