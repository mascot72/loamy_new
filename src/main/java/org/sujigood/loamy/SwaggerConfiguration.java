package org.sujigood.loamy;

import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@ComponentScan(basePackages = { "com.navercorp.smd" })
public class SwaggerConfiguration extends WebMvcConfigurerAdapter {
	// Existent configuration code

	@Bean
	public Docket demoApi() {

		/**
		 * Avoiding default basic-error-controller from swagger api
		 *
		 * http://stackoverflow.com/questions/33431343/avoiding-default-basic-error-controller-from-swagger-api
		 * default로 등록되는 basic-error-controller를 제거하기 위한 설정
		 *
		 * swagger ui : http://local-iims2.navercorp.com:8080/swagger/index.html
		 * explore : http://local-iims2.navercorp.com:8080/v2/api-docs
		 */
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(Predicates.not(PathSelectors.regex("/error.*")))
				.build();
	}
}
