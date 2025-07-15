Difference between JPA, Hibernate and Spring Data JPA :


In this we are asked to differentiate and show JPA and Hibernate with an example code.

So we created a db and connected it in the application.properties file.

Now in the hibernate package we added the code to use hibernate and in the springdatajpa package we added the code file for jpa.

After adding all the required files we run the application and checked whether both the hibernate and jpa have added the data into the db.

Output :

Hibernate: insert into employees (department,name,id) values (?,?,?)
Hibernate: Employee saved

2025-07-08T20:54:01.984+05:30 DEBUG 12592 --- [orm-compare] [           main] org.hibernate.SQL                        : select e1_0.id,e1_0.department,e1_0.name from employees e1_0 where e1_0.id=?
Hibernate: select e1_0.id,e1_0.department,e1_0.name from employees e1_0 where e1_0.id=?

Spring Data JPA: Employee saved

