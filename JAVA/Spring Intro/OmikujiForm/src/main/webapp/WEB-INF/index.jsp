<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
</head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/style.css"/>
<body>
<h1>Send an Omikuji</h1>
<div class="container mt-5">
      <div class="row">
        <div class="col-6 offset-3 border border-2 border-dark p-3">
          <form action="/omikuji/process" method="POST">
            <div class="form-group">
              <label for="exampleFormControlInput1"
                >Enter any number from 5 to 25</label
              >
              <input
                name="counter"
                min="5" 
                max="25"
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="number"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"
                >Enter the name of any city</label
              >
              <input
                name="city"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"
                >Enter the name of any real person</label
              >
              <input
                name="name"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="person name"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"
                >Enter professional endeavor or hobby</label
              >
              <input
                name="hobby"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="hobby"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"
                >Enter any type of living thing</label
              >
              <input
                name="living"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="any living thing"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"
                >Say something nice to someone</label
              >
              <textarea
                name="say"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-2 ml-5">Send</button>
          </form>
        </div>
      </div>
    </div>
      
        
</body>
</html>