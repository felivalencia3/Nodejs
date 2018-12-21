import java.io.*
import java.util.*
import javax.servlet.*
import javax.servlet.http.*
import java.sql.*

class DatabaseAccess : HttpServlet() {

    @Throws(ServletException::class, IOException::class)
    public override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
        val JDBC_DRIVER = "com.mysql.jdbc.Driver"
        val DB_URL = "jdbc:mysql://localhost/JavaDB"
        val USER = "root"
        val PASS = "castro03"
        response.contentType = "text/html"
        val out = response.writer
        val title = "Database Result"
        val docType = "<!doctype html public \"-//w3c//dtd html 4.0 " + "transitional//en\">\n"

        out.println(docType +
                "<html>\n" +
                "<head><title>" + title + "</title></head>\n" +
                "<body bgcolor = \"#f0f0f0\">\n" +
                "<h1 align = \"center\">" + title + "</h1>\n")
        try {
            // Register JDBC driver
            Class.forName("com.mysql.jdbc.Driver")

            // Open a connection
            val conn = DriverManager.getConnection(DB_URL, USER, PASS)

            // Execute SQL query
            val stmt = conn.createStatement()
            val sql: String
            sql = "SELECT id, first, last, age FROM Employees"
            val rs = stmt.executeQuery(sql)

            // Extract data from result set
            while (rs.next()) {
                //Retrieve by column name
                val id = rs.getInt("id")
                val age = rs.getInt("age")
                val first = rs.getString("first")
                val last = rs.getString("last")

                //Display values
                out.println("ID: $id<br>")
                out.println(", Age: $age<br>")
                out.println(", First: $first<br>")
                out.println(", Last: $last<br>")
            }
            out.println("</body></html>")

            // Clean-up environment
            rs.close()
            stmt.close()
            conn.close()
        } catch (se: SQLException) {
            //Handle errors for JDBC
            se.printStackTrace()
        } catch (e: ClassNotFoundException) {
            e.printStackTrace()
        }

    }
} 