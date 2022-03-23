package com.bookclub.models;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

	@Entity
	@Table(name="books")
	public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotEmpty(message="Author is required!")
	@Size(min=3, max=30, message="Author must be between 3 and 30 characters")
	private String author;
	@NotEmpty(message="Title is required!")
	@Size(min=3, max=30, message="title must be between 3 and 30 characters")
	private String title;
	@NotEmpty(message="please enter your thoughts")
	@Size(min=10, max=300, message="your thoughts must be between 10 and 300 characters")
	private String thought;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;
	private Date createdAt;
	private Date updatedAt;
	
	public Book() {}

	public Book(String author, String title, String thought, User user) {
		this.author = author;
		this.title = title;
		this.thought = thought;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getThought() {
		return thought;
	}

	public void setThought(String thought) {
		this.thought = thought;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
	}
	
	@PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
	}
	
}
