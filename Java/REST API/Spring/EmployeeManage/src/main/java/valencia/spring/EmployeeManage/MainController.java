package valencia.spring.EmployeeManage;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/employees")
public class MainController {
    
    @Autowired
    private Repository employeeRepository;

    @GetMapping(path = "/startup")
    public @ResponseBody boolean startUp() throws UnirestException {
        for (int i = 0; i < 5; i++) {
            Employee foo = new Employee();
            HttpResponse<String> response = Unirest.get("https://randomuser.me/api/")
                .asString();
                JSONObject obj = new JSONObject(response);
                String body = obj.getString("body");
                JSONObject jsonObject = new JSONObject(body);
                JSONArray arr = jsonObject.getJSONArray("results");
                JSONObject json = arr.getJSONObject(0);
                String gender = json.getString("gender");
                String first = json.getJSONObject("name").getString("first");
                String last = json.getJSONObject("name").getString("last");
                String name = first + " " + last;
                String email = json.getString("email");
                int age = json.getJSONObject("dob").getInt("age");
                foo.setAge(age);
                foo.setEmail(email);
                foo.setGender(gender);
                foo.setName(name);
                employeeRepository.save(foo);
                
        }
        return true;
    }
    @GetMapping(path="/add")
    public @ResponseBody String newEmployee(@RequestParam Integer age, @RequestParam String name,
     @RequestParam String gender, @RequestParam String email ) 
     {
         Employee bar = new Employee();
         bar.setAge(age);
         bar.setName(name);
         bar.setEmail(email);
         bar.setGender(gender);
         employeeRepository.save(bar);
         return "Saved.";
     }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Employee> getAll() {
        return employeeRepository.findAll();
    }
}