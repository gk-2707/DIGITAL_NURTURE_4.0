package com.example.orm_compare;

import com.example.orm_compare.hibernate.HibernateEmployeeDao;
import com.example.orm_compare.model.Employee;
import com.example.orm_compare.springdatajpa.SpringDataEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrmCompareApplication implements CommandLineRunner {

	@Autowired
	private SpringDataEmployeeService springDataEmployeeService;

	public static void main(String[] args) {
		SpringApplication.run(OrmCompareApplication.class, args);
	}

	@Override
	public void run(String... args) {
		Employee e1 = new Employee(17, "Kaithamalai", "IT");
		Employee e2 = new Employee(18, "Virat Kohli", "HR");


		HibernateEmployeeDao hibernateDao = new HibernateEmployeeDao();
		hibernateDao.addEmployee(e1);

		springDataEmployeeService.addEmployee(e2);
	}
}
