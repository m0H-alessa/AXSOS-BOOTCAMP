package com.date;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

	public class DateController {
	
	@RequestMapping("/home")
	public String home() {
		return "index.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		SimpleDateFormat timeFormat = new SimpleDateFormat("K:mm a");
		model.addAttribute("time", timeFormat.format(new Date()));
		return "time.jsp";
	}
	@RequestMapping("/date")
	public String date(Model model) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("EEEEE',' 'the' d 'of' MMMMM',' y");
		model.addAttribute("date", dateFormat.format(new Date()));
		return "date.jsp";
	}
	}
