import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import org.json.*;
import java.sql.*;
@WebServlet("/user")
public class Find extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String JDBC_DRIVER = "com.mysql.jdbc.Driver";
        String DB_URL="jdbc:mysql://localhost/JavaDB";
        String USER = "root";
        String PASS = "castro03";
        String name = req.getParameter("name");
        res.setContentType("application/json");
        PrintWriter out = res.getWriter();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
            String sql = "SELECT * FROM User WHERE Name = \""+name+"\" ";
            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next()){
                String Username = rs.getString("Name");
                String age = rs.getString("Age");
                String phone = rs.getString("Phone");
                String job = rs.getString("Job");
                //String output = String.format("%s = %d", "joe", 35);
                String json = "{\"name\": \"%s\", \"age\": \"%s\", \"phone\": \"%s\", \"job\": \"%s\"}";
                String output = String.format(json,name,age,phone,job);
                out.println(output);
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
