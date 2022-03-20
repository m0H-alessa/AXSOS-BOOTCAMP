<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/style.css"/>

<body>
<h1>Save Travels</h1>
<table  class="table">
 <thead>
    <tr>
        <th>Expense</th>
        <th>Vendor</th>
        <th>Amount</th>
        <th>Action(Edit)</th>
        <th>Action(Delete)</th>
    </tr>
    </thead>
    <tbody>
       <c:forEach var="expense" items="${expenses}">
    <tr>
        <td><c:out value="${expense.name}"></c:out></td>
        <td><c:out value="${expense.vendor }"></c:out></td>
        <td><c:out value="${expense.amount }"></c:out></td>
        <td><a href="/expense/${expense.id}/edit">Edit</a></td>
        <td>delete</td>
    </tr>
    </c:forEach>
    </tbody>
</table>


</body>
</html>