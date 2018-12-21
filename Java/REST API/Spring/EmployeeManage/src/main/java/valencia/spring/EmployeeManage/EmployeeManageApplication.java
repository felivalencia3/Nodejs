package valencia.spring.EmployeeManage;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class EmployeeManageApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManageApplication.class, args);
		
	}
	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {
		try {
			HttpResponse<String> response = Unirest.get("http://127.0.0.1:8080/employees/startup").asString();
			if (response != null) {
				System.out.println(response);
				System.out.println("Generated random values.");
			}
		} catch (UnirestException e) {
			e.printStackTrace();
		}
	
		
}

}

