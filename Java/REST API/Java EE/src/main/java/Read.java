import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
public class Read extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String JDBC_DRIVER = "com.mysql.jdbc.Driver";
        String DB_URL="jdbc:mysql://localhost/JavaDB";
        String USER = "root";
        String PASS = "castro03";
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
            String sql = "SELECT * FROM User";
            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()){
                String name = rs.getString("Name");
                String age = rs.getString("Age");
                String phone = rs.getString("Phone");
                String job = rs.getString("Job");
                out.println("<br><br>Name: "+name+"<br>");
                out.println("Age: "+age+"<br>");
                out.println("Phone Number: "+phone+"<br>");
                out.println("Job: "+job+"<br><br>");

            }
            rs.close();
            stmt.close();
            conn.close();
        } catch(SQLException se) {
            //Handle errors for JDBC
            se.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
