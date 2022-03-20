package com.travels.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.travels.models.Expense;
import com.travels.repos.ExpenseRepo;
@Service
public class ExpenseService {
	private final ExpenseRepo expenseRepo;
	
	public ExpenseService (ExpenseRepo expenseRepo) {
        this.expenseRepo = expenseRepo;
    }
	public List<Expense> allExpesne(){
		return expenseRepo.findAll();
	}
	
	public Expense createexpense(Expense e) {
        return expenseRepo.save(e);
    }
}
