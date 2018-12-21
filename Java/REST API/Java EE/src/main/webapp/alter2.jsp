<%@ page import="com.mashape.unirest.http.Unirest" %>
<%@ page import="com.mashape.unirest.http.HttpResponse" %>
<%@ page import="org.json.JSONObject" %>
<%@ page import="java.net.URLEncoder" %>
<%@ page import="com.mashape.unirest.http.exceptions.UnirestException" %>
<%@ page import="java.nio.charset.StandardCharsets" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Update a User</title>
</head>
<body>
<%
    String ReqName = request.getParameter("name");

    HttpResponse<String> output = null;
    try {
        output = Unirest.get("http://127.0.0.1:8080/user?name="+URLEncoder.encode(ReqName, StandardCharsets.UTF_8))
                .asString();
    } catch (UnirestException e) {
        e.printStackTrace();
    }
    JSONObject jsonObject = new JSONObject(output);
    String body = jsonObject.getString("body");
    JSONObject obj = new JSONObject(body);
    String name = obj.getString("name");
    String age = obj.getString("age");
    String phone = obj.getString("phone");
    String job = obj.getString("job");
%>
<form action="/update" method="post">
    <input type="text" value="<%= name %>" name="name" readonly>
    <br>
    <input type="text" value="<%= age %>" name="age">
    <br>
    <input type="text" value="<%= phone %>" name="phone">
    <br>
    <input type="text" value="<%= job %>" name="job">
    <br>
    <input type="submit">
</form>
<style>
    input {
        align-content: center;
        margin-top: 10px;
    }
</style>
</body>
</html>
