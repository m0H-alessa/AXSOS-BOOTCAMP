<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="/css/style.css"/>
<meta charset="ISO-8859-1">
<title>Edit Book Page</title>
</head>
<body>
<div  style="display: flex; justify-content: space-between; padding: 20px">
<h1>Change your Entry</h1>
<a href="/books">back to shelves</a>
</div>
	<div class="container">
			<div class="col-6 offset-3 mt-5 border border-2 border-dark p-3">
				<div class="row">
					<div class="col text-start">
						<form:form action="/edit/${book.id}" method="post" modelAttribute="book">
							<input type="hidden" name="_method" value="put">
							<div class="mb-3">
								<form:errors class="text-danger" path="title" />
								<form:input type="text" class="form-control" id="title"
									path="title" placeholder="Title" />
							</div>
							<div class="mb-3">
								<form:errors class="text-danger" path="author" />
								<form:input type="text" class="form-control" id="author"
									path="author" placeholder="Author" />
							</div>

							<div class="mb-3">
								<form:errors class="text-danger" path="thought" />
								<form:textarea class="form-control" id="thought"
									path="thought" placeholder="Add your thought" rows="3"></form:textarea>
							</div>
							<button type="submit" class="btn btn-success float-end">Submit</button>
						</form:form>
					</div>
				</div>
			</div>
		</div>
</body>
</html>