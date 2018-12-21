package valencia.spring.EmployeeManage;
import valencia.spring.EmployeeManage.Employee;
import org.springframework.data.repository.CrudRepository;

public interface Repository extends CrudRepository<Employee, Integer> {

}