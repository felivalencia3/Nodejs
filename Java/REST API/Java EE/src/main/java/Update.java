import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.sql.*;
@WebServlet("/update")
public class Update extends HttpServlet{
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String age = request.getParameter("age");
        String phone = request.getParameter("phone");
        String job = request.getParameter("job");
        String JDBC_DRIVER = "com.mysql.jdbc.Driver";
        String DB_URL="jdbc:mysql://localhost/JavaDB";
        String USER = "root";
        String PASS = "castro03";
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            String sql = "UPDATE User SET Name = ?, Age = ?, Phone = ?, Job = ? WHERE Name = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1,name);
            stmt.setString(2,age);
            stmt.setString(3,phone);
            stmt.setString(4,job);
            stmt.setString(5,name);
            int changes = stmt.executeUpdate();
            stmt.close();
            conn.close();
            out.println(changes+" changes were made");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch(SQLException se) {
            se.printStackTrace();
        }


    }
}
