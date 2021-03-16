<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*, javax.servlet.*" %>
<%@ page import="java.util.Calendar"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.*,java.text.SimpleDateFormat"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="style.css"/>
<title>Insert title here</title>
</head>
<body>
	<div class="header">
		<label class="header-left">login</label>
		<label class="header-right">
			<% Date date = new Date();
			   SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
			   String formatDate = sdf.format(date);
			out.print(formatDate); %>
		</label>
	</div>
</body>
</html>
