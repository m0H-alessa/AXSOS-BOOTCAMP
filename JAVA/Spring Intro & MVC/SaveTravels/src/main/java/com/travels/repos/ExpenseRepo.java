package com.travels.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.travels.models.Expense;
@Repository
public interface ExpenseRepo extends CrudRepository<Expense,Long > {
	
		List<Expense> findAll();
}
