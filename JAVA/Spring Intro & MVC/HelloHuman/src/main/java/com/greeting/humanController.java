package com.greeting;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class humanController {
@RequestMapping("/")
public String greeting(@RequestParam(value="q", required=false) String myName,@RequestParam(value="el",required=false) String  lastName) {
	if(myName == null || lastName == null) {
	return " Hello Human ";
	}
	else {
		return "Hello " + myName + lastName;
	}
}
}
