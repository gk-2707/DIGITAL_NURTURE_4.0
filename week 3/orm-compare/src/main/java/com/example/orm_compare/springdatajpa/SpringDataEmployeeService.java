package com.example.orm_compare.springdatajpa;

import com.example.orm_compare.model.Employee;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpringDataEmployeeService {

    @Autowired
    private EmployeeRepository repo;

    @Transactional
    public void addEmployee(Employee emp) {
        repo.save(emp);
        System.out.println("Spring Data JPA: Employee saved");
    }
}
