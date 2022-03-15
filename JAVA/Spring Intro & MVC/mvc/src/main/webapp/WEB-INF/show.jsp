<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<body>
<div class="container mt-5">
      <div class="row">
        <div class="col-6 offset-3 border border-2 border-dark p-3">
			<h1> Title: <c:out value="${book.title}"> </c:out> </h1>
				<p> Description: <c:out value="${book.description}"> </c:out> </p>
				<p> Language: <c:out value="${book.language}"> </c:out> </p>
				<p> Number Of Pages: <c:out value="${book.numberOfPages}"> </c:out> </p>
			</div>
     	 </div>
		</div>
</body>
</html>

