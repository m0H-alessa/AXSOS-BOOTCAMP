<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Fruity Loops</title>
</head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/style.css"/>
<body>
<h1>Fruit Store</h1>

<div class="container mt-5">
      <div class="row">
        <div class="col-6 offset-3 border border-2 border-dark p-3">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
            	<c:forEach var="fruit" items="${fruits}">
              <tr>
                <td><c:out value="${fruit.name}"> </c:out></td>
                <td><c:out value="${fruit.price}"> </c:out></td>
                </c:forEach>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</body>
</html>