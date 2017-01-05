package br.edu.ifpb.activityeventapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RouteController {

	/**
	 * 
	 * @return
	 */
	@RequestMapping("/")
	public String loadIndex(){
		return "index";
		
	}
}
