package com.bookclub.contollers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import com.bookclub.models.Book;
import com.bookclub.models.User;
import com.bookclub.services.BookService;
import com.bookclub.services.UserService;


@Controller
public class BookClubController {
	
	@Autowired
	BookService bookService;
	@Autowired
	UserService userService;
	
@GetMapping("/books")
public String homePage(@ModelAttribute("books")Book book, Model model, HttpSession session) {
	
	List<Book> books=bookService.notBorrowed();
	List<Book> borrowedBooks=bookService.areBorrowed();
	model.addAttribute("books",books);
	model.addAttribute("borrowedBooks",borrowedBooks);
	Long user_id = (Long) session.getAttribute("user_id");
	User thisUser = userService.findById(user_id);
	model.addAttribute("thisUser",thisUser);
	return "books.jsp";
	
}
	
@GetMapping("/books/new")
public String addBookPage(@ModelAttribute("books")Book book) {
	return "addbook.jsp";
}

@PostMapping("/books/new")
public String createBook(@Valid @ModelAttribute("books")Book book, BindingResult result , HttpSession session) {
	Long user_id = (Long) session.getAttribute("user_id");
	User thisUser = userService.findById(user_id);
    book.setUser(thisUser);
	if (result.hasErrors()) {
        return "addbook.jsp";
    } else {
    	bookService.createBook(book);
        return "redirect:/books";
    }
}
@GetMapping("/logout")
public String logout(HttpServletRequest request){
    HttpSession httpSession = request.getSession();
    httpSession.invalidate();
    return "redirect:/";
}


@GetMapping("/show/{id}")
public String showDetailsPage(@PathVariable("id")Long id, HttpSession session, Model model) {
		Book book = bookService.findById(id);
		model.addAttribute("book", book);
		Long user_id = (Long) session.getAttribute("user_id");
		User thisUser = userService.findById(user_id);
		model.addAttribute("thisUser",thisUser);
		return "/show.jsp";
	
}

@GetMapping("/edit/{id}")
public String editBookPage(@PathVariable("id")Long id, HttpSession session, Model model) {
		Book book = bookService.findById(id);
		model.addAttribute("book", book);
		Long user_id = (Long) session.getAttribute("user_id");
		User thisUser = userService.findById(user_id);
		model.addAttribute("thisUser",thisUser);
		return "/edit.jsp";
	
}

@PutMapping("/edit/{id}")
public String editBook(Model model, @PathVariable("id") Long id, @Valid @ModelAttribute("books") Book book, BindingResult result,HttpSession session) {
	Long user_id = (Long) session.getAttribute("user_id");
	User thisUser = userService.findById(user_id);
	model.addAttribute("thisUser",thisUser);
	if (result.hasErrors()) {
        return "editbook.jsp";
    } else {
    	bookService.updateBook(book, id);
        return "redirect:/show/"+id;
}
}


@GetMapping("/borrow/{id}")
public String borrow(@PathVariable("id") Long id,HttpSession session) {
	Book book = bookService.findById(id);
	Long user_id = (Long) session.getAttribute("user_id");
	User thisUser = userService.findById(user_id);
	bookService.borrowBook(book,thisUser);
	return "redirect:/books";
}

@GetMapping("/return/{id}")
public String returnbook(@PathVariable("id") Long id) {
	Book book = bookService.findById(id);
	bookService.returnBook(book);
	return "redirect:/books";
}

@GetMapping("/delete/{id}")
public String deleteBook(@PathVariable Long proid ,HttpSession session) {
	Book thisBook = bookService.findById(proid);
	Long id = (Long) session.getAttribute("user_id");
	User thisUser = userService.findById(id);
	bookService.deleteBook(thisUser ,thisBook);
	return "redirect:/Books";

}
}