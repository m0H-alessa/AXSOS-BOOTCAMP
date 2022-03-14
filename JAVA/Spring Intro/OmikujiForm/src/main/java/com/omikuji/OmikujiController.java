package com.omikuji;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller

public class OmikujiController {
@RequestMapping("/omikuji")
public String home () {
	return "index.jsp";
}
@PostMapping("/omikuji/process")
public String process(HttpSession session, 
					@RequestParam(value="counter") Integer counter,
					@RequestParam(value="city") String city,
					@RequestParam(value="name") String name,
					@RequestParam(value="hobby") String hobby,
					@RequestParam(value="living") String living,
					@RequestParam(value="say") String say) {
					session.setAttribute("counter", counter);
					session.setAttribute("city", city);
					session.setAttribute("name", name);
					session.setAttribute("hobby", hobby);
					session.setAttribute("living", living);
					session.setAttribute("say", say);
	return "redirect:/omikuji/show";
}
@RequestMapping("/omikuji/show")
public String result(Model model, HttpSession session) {
	model.addAttribute("counter",(Integer) session.getAttribute("counter"));
	model.addAttribute("city",(String) session.getAttribute("city"));
	model.addAttribute("name",(String) session.getAttribute("name"));
	model.addAttribute("hobby",(String) session.getAttribute("hobby"));
	model.addAttribute("say",(String) session.getAttribute("say"));
	return "show.jsp";
}

}
