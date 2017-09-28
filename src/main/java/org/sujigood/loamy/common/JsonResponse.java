package org.sujigood.loamy.common;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

public class JsonResponse {

	private static final String MODEL_CONTEXT_JSON = "jsonView";
	private static final String MODEL_CONTEXT_MESSAGE = "message";

	private static final String API_ELEMENT_RESULT = "result";
	private static final String API_ELEMENT_ERROR = "error";
	private static final String API_ELEMENT_VERSION = "@version";
	private static final String API_ELEMENT_SERVICE = "@service";
	private static final String API_ELEMENT_TYPE = "@type";

	private static final String API_VALUE_VERSION = "1.0.0";
	private static final String API_VALUE_TYPE = "response";
	private static final String API_VALUE_SERVICE = "org.sujigood.loamy";

	private static final Logger logger = LoggerFactory.getLogger(JsonResponse.class);

	private static Gson gson;

	// static 초기화 구문(static 초기화: 객체 발생 이전)
	static {
		logger.info("gson initialize");
		GsonBuilder builder = new GsonBuilder();
		builder.setPrettyPrinting();
		builder.serializeNulls();

		// http로 가져와서 String에 담았는데 유니코드가 박혀있을 때 (http://acet.pe.kr/519)
		builder.disableHtmlEscaping();

		gson = builder.create();
	}

	public static @ResponseBody
	Map getResult(ModelMap model) {

		Map<String, Object> message = new HashMap<String, Object>();
		Map<String, Object> response = new HashMap<String, Object>();

		response.put(API_ELEMENT_TYPE, API_VALUE_TYPE);
		response.put(API_ELEMENT_SERVICE, API_VALUE_SERVICE);
		response.put(API_ELEMENT_VERSION, API_VALUE_VERSION);
		response.put(API_ELEMENT_RESULT, model);

		message.put(MODEL_CONTEXT_MESSAGE, response);
		logger.info(gson.toJson(message));
		return message;
	}

	public static @ResponseBody
	Map getError(Object msg, BindingResult result) {

		Map<String, Object> message = new HashMap<String, Object>();

		Map<String, Object> response = new HashMap<String, Object>();

		Map<String, Object> errorMessages = new HashMap<String, Object>();
		Map<String, String> validations = new HashMap<String, String>();

		if (result != null && result.hasFieldErrors()) {

			for (FieldError fieldError : result.getFieldErrors()) {
				validations.put(fieldError.getField(), fieldError.getDefaultMessage());
			}

		}

		errorMessages.put("message", msg);
		errorMessages.put("validations", validations);

		response.put(API_ELEMENT_TYPE, API_VALUE_TYPE);
		response.put(API_ELEMENT_SERVICE, API_VALUE_SERVICE);
		response.put(API_ELEMENT_VERSION, API_VALUE_VERSION);
		response.put(API_ELEMENT_ERROR, errorMessages);

//		logger.error("error message : []", msg);

		message.put(MODEL_CONTEXT_MESSAGE, response);
		logger.info(gson.toJson(message));
		return message;
	}

}
