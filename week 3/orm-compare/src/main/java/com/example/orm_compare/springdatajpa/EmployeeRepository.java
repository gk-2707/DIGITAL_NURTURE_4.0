package com.example.orm_compare.springdatajpa;

import com.example.orm_compare.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
