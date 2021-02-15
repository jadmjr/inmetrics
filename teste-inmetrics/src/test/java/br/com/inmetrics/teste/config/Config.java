package br.com.inmetrics.teste.config;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Config {

	public static WebDriver driver;
	public WebDriverWait wait;
	public JavascriptExecutor executor;
	public String pathChromeServer = "resources\\chromedriver\\chromedriver.exe";
	public Evidencia evidencia;

	public void inicializaNavegador() {
		ChromeOptions options = new ChromeOptions();
		options.addArguments("start-maximized");
		System.setProperty("webdriver.chrome.driver", pathChromeServer);
		driver = new ChromeDriver(options);
		wait = new WebDriverWait(driver, 10);
	}

	public void inicializaEvidencia() {
		evidencia = new Evidencia();
		evidencia.geraPDF();
	}

	public void finalizarEvidencia() {
		evidencia.fecharDocumentoPDF();
	}

	public void abrirURL(String url) {
		driver.get(url);
	}

}
