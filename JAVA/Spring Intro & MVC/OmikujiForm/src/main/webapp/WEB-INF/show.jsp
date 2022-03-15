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
<h1>Here's Your Omikuji</h1>
	<div class="container mt-5">
      <div class="row">
        <div class="col-6 offset-3 border border-2 border-dark p-3">
        <p> In <c:out value="${counter}"></c:out> years, you you will live in <c:out value="${city}"></c:out> 
        with <c:out value="${name}"></c:out> as your roommate,
		<c:out value="${hobby}"></c:out> for a living.
		The next time you see a <c:out value="${living}"></c:out> you will have good luck
		also, <c:out value="${say}"></c:out>.
 		</p>
        </div>
      </div>
    </div>
    <br><br>
    <div class="go"><a href=/omikuji>Go Back</a></div>
</body>
</html>