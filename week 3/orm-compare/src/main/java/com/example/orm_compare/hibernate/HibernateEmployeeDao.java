package com.example.orm_compare.hibernate;

import com.example.orm_compare.model.Employee;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class HibernateEmployeeDao {

    public void addEmployee(Employee emp) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();
            session.save(emp);
            tx.commit();
            System.out.println("Hibernate: Employee saved");
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
