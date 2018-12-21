import java.io.*
import java.util.*
import javax.servlet.*
import javax.servlet.http.*
import java.sql.*

class Create : HttpServlet() {

    @Throws(ServletException::class, IOException::class)
    public override fun doPost(request: HttpServletRequest, response: HttpServletResponse) {
        response.contentType = "text/plain"
        val out = response.writer
        val name = request.getParameter("name")
        val age = request.getParameter("age")
        val phone_num = request.getParameter("phone")
        val employment = request.getParameter("job")
        val JDBC_DRIVER = "com.mysql.jdbc.Driver"
        val DB_URL = "jdbc:mysql://localhost/JavaDB"
        val USER = "root"
        val PASS = "castro03"
        try {
            Class.forName("com.mysql.jdbc.Driver")
            val conn = DriverManager.getConnection(DB_URL, USER, PASS)
            val stmt = conn.createStatement()
            val sql = "INSERT INTO User " +
                    "VALUES ('" + name + "', '" + age + "', '" + phone_num + "', '" + employment + "')"
            println(sql)
            val rs = stmt.executeUpdate(sql)
            out.println("Saved.")
            stmt.close()
            conn.close()
        } catch (e: SQLException) {
            e.printStackTrace()
        } catch (se: ClassNotFoundException) {
            se.printStackTrace()
        }

    }
}
