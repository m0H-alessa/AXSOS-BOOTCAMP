package com.bookclub.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bookclub.models.Book;
import com.bookclub.repos.BookRepo;

@Service
public class BookService {
	
	@Autowired
	BookRepo bookRepo;
	
	public List<Book> allBooks(){
		return bookRepo.findAll();
}

	public Book createBook(Book book){
		return bookRepo.save(book);
	}
	
	public Book findById(Long id) {
	    Optional<Book> books =bookRepo.findById(id);
	    if(books.isPresent()) {
	    	return books.get();
	    }else {
	    	return null;
	    	}
	   }
	public void updateBook(Book updatedBook, Long bookId) {

		Book book = this.findById(bookId);
		book.setTitle(updatedBook.getTitle());
		book.setAuthor(updatedBook.getAuthor());
		book.setThought(updatedBook.getThought());
		bookRepo.save(book);
	}
	
}
