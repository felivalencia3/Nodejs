import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.sql.*;
@WebServlet("/delete")
public class Delete extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        String name = request.getParameter("name");
        String JDBC_DRIVER = "com.mysql.jdbc.Driver";
        String DB_URL="jdbc:mysql://localhost/JavaDB";
        String USER = "root";
        String PASS = "castro03";
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            String sql = "DELETE FROM User WHERE Name = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1,name);
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
