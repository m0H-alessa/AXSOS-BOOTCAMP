<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="java.util.Date"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>the time</title>

<link rel="stylesheet" href="/css/StyleTime.css"/>

</head>
<body>
<h1> The Time: <c:out value="${time}"></c:out> </h1>
<script type="text/javascript" src="js/time.js"></script>
</body>
</html>