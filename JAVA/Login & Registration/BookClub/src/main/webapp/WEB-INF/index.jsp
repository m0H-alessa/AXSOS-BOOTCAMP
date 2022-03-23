<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
  <div class="title">
<h1>Book Club</h1>
<p>A place for friends to share there thoughts on books</p>
  </div>
  <div class="title">
  </div>
	<div class="container mt-4 ">
	      <div class="row">
	        <div class="col border border-1 border-dark p-3 bg-secondary">
	          <div class="header mb-3 text-center">
	            <h2>Register</h2>
	          </div>
				<form:form action="/register" method="post" modelAttribute="newUser">
				<div class="form-group">
				<label>User Name:</label>
				<form:input path="userName" class="form-control" />
				<form:errors path="userName" class="text-danger" />
				</div>
				<div class="form-group">
				<label>Email:</label>
				<form:input path="email" class="form-control" />
				<form:errors path="email" class="text-danger" />
				</div>
				<div class="form-group">
				<label>Password:</label>
				<form:password path="password" class="form-control" />
				<form:errors path="password" class="text-danger" />
				</div>
				<div class="form-group">
				<label>Confirm Password:</label>
				<form:password path="confirm" class="form-control" />
				<form:errors path="confirm" class="text-danger" />
				</div>
				<input type="submit" value="Register" class="btn btn-primary mt-2 float-end" />
				</form:form>
				</div>
	
	        <div class="col border border-1 border-dark p-3 offset-2 bg-secondary">
	          <div class="header mb-3 text-center">
	            <h2>Login</h2>
	          </div>
				<form:form action="/login" method="post" modelAttribute="newLogin">
				<div class="form-group">
				<label>Email:</label>
				<form:input path="email" class="form-control" />
				<form:errors path="email" class="text-danger" />
				</div>
				<div class="form-group">
				<label>Password:</label>
				<form:password path="password" class="form-control" />
				<form:errors path="password" class="text-danger" />
				</div>
				<input type="submit" value="Login" class="btn btn-success mt-2 float-end" />
				</form:form>
			 </div>
		</div>
	</div>
</body>
</html>