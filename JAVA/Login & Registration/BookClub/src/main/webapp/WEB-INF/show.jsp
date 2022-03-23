<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Show Book Details</title>
</head>
<body>
<div class="container mt-5">
<a href="/books" style="position: relative; left: 1000px">back to shelves</a> 
	<div class="row">
		<div class="card col-6 offset-3 border border-2 border-dark p-3">
		  <div class="card-header">
		    <span> <c:out value="${book.title}"> </c:out> </span>
		  </div>
		  <div class="card-body" >
		    <h5 class="card-title"><c:out value="${book.user.userName}"> </c:out> read <c:out value="${book.title}"> </c:out> by <c:out value="${book.author}"> </c:out>. </h5>
		    <p class="card-text">Here are <c:out value="${book.user.userName}"></c:out>'s thoughts: </p>
		    <div class="card-body border border-1 ">
		    <p><c:out value="${book.thought}"> </c:out></p>
		    </div>
		    <a href="/edit/<c:out value="${book.id}"></c:out>" class="btn btn-info mt-2 float-end">Edit</a>
		</div>
	   </div>
	 </div>
	</div>
</body>
</html>