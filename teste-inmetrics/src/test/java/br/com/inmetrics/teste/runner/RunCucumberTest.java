package br.com.inmetrics.teste.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:features", tags = {
		"@Cadastro" }, glue = "br.com.inmetrics.teste.controller", monochrome = true, dryRun = false, plugin = {
				"html:target/cucumber-html-report" })

public class RunCucumberTest {
}