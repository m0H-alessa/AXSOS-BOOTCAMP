package com.travels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.travels.models.Expense;
import com.travels.services.ExpenseService;


@Controller


public class ExpenseController {
	@Autowired
	ExpenseService expenseService;
	
	@GetMapping("/Expenses")
	public String getAllExpences(Model model) {
		List<Expense> expenses =expenseService.allExpesne();
		model.addAttribute("expenses", expenses);
	return "index.jsp";
	
	}
	
	
	
	
}
