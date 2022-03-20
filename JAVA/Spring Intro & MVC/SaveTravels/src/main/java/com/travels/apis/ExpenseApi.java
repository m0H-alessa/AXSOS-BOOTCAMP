package com.travels.apis;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.travels.models.Expense;
import com.travels.services.ExpenseService;

@RestController
public class ExpenseApi {
	
private final ExpenseService expenseService;
	
	public ExpenseApi (ExpenseService expenseService) {
        this.expenseService = expenseService;
    }
	

	@RequestMapping(value="/api", method=RequestMethod.POST)
    public Expense create(@RequestParam(value="name") String name, @RequestParam(value="vendor") String vendor, @RequestParam(value="description") String description, @RequestParam(value="amount") Integer amount) {
		Expense expense = new Expense(name, vendor, description, amount);
        return expenseService.createexpense(expense);
    }
}
