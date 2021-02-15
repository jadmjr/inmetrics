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

public class Signup {

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

	@FindAll({ @FindBy(className = "txt1") })
	@CacheLookup
	private List<WebElement> mensagens; //

	@FindAll({ @FindBy(tagName = "button") })
	@CacheLookup
	private List<WebElement> button;

	private final String pageUrl = "/accounts/signup/";

	public Signup() {
	}

	public Signup(WebDriver driver) {
		this();
		this.driver = driver;
	}

	public Signup(WebDriver driver, Map<String, String> data) {
		this(driver);
		this.data = data;
	}

	public Signup(WebDriver driver, Map<String, String> data, int timeout) {
		this(driver, data);
		this.timeout = timeout;
	}

	// jadmjr
	public Signup preencherUsuario(String user) {
		usuario.sendKeys(user);
		return this;
	}

	public Signup preencherSenha(String senha) {
		pass.sendKeys(senha);
		return this;
	}

	public Signup preencherConfirmacaoSenha(String confirmaSenha) {
		confirmpass.sendKeys(confirmaSenha);
		return this;
	}

	public Boolean validarMsgUsuarioCadastro() {
		try {
			String msg = mensagens.get(0).getText();
			if (msg.contains("Usuário já cadastrado"))
				return true;
			else
				return false;
		} catch (Exception e) {
			return false;
		}
	}

	public Boolean validarMsgSenhaErrada() {
		try {
			String msg = mensagens.get(1).getText();
			if (msg.contains("Senhas não combinam"))
				return true;
			else
				return false;
		} catch (Exception e) {
			return false;
		}
	}

	public Signup clickCadastrar() {
		button.get(1).click();
		return this;
	}
	// jadmjr

	public Signup verifyPageUrl() {
		(new WebDriverWait(driver, timeout)).until(new ExpectedCondition<Boolean>() {
			public Boolean apply(WebDriver d) {
				return d.getCurrentUrl().contains(pageUrl);
			}
		});
		return this;
	}
}
