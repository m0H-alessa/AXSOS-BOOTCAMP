package com.bookclub.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bookclub.models.Book;


@Repository
public interface BookRepo extends CrudRepository<Book, Long> {
List<Book>findAll();
List<Book> findByBorrowNull();
List<Book> findByBorrowNotNull();

}
