package com.variables;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/daikchi")

public class variablesContorller {
	@RequestMapping("/{destination}/{place}")
	public String holiday (@PathVariable ("destination") String dis, @PathVariable ("place") String place) {
		return "Congratulations! You will soon " +dis +" to " +place;
	}
	@RequestMapping("/{destination}/{place}/{number}")
	public String holiday (@PathVariable ("destination") String dis,
						@PathVariable ("place") String place,
						@PathVariable ("number") int num) {
		if(num%2==0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}
		else {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";

		}
	}

}
