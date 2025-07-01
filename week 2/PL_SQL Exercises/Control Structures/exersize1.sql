CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    interest_rate NUMBER(5,2),
    isvip VARCHAR2(10)
);

CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    due_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES (201, 'Shouko Komi', 65, 5000, 8.5, 'FALSE');
INSERT INTO customers VALUES (202, 'Hitohito Tadano', 45, 15000, 9.0, 'FALSE');
INSERT INTO customers VALUES (203, 'Najimi Osana', 70, 20000, 10.0, 'FALSE');
INSERT INTO customers VALUES (204, 'Ren Yamai', 30, 9500, 7.5, 'FALSE');
INSERT INTO customers VALUES (205, 'Nakanaka Omoharu', 61, 3000, 11.0, 'FALSE');

INSERT INTO loans VALUES (301, 201, SYSDATE + 10);
INSERT INTO loans VALUES (302, 202, SYSDATE + 35);
INSERT INTO loans VALUES (303, 203, SYSDATE + 5);
INSERT INTO loans VALUES (304, 204, SYSDATE + 60);
INSERT INTO loans VALUES (305, 205, SYSDATE + 25);

COMMIT;

BEGIN
    FOR c IN (SELECT customer_id, age FROM customers) LOOP
        IF c.age > 60 THEN
            UPDATE customers
            SET interest_rate = interest_rate - 1
            WHERE customer_id = c.customer_id;
            DBMS_OUTPUT.PUT_LINE('Interest discount applied to customer ID: ' || c.customer_id);
        END IF;
    END LOOP;
END;


BEGIN
    FOR c IN (SELECT customer_id, balance FROM customers) LOOP
        IF c.balance > 10000 THEN
            UPDATE customers
            SET isvip = 'TRUE'
            WHERE customer_id = c.customer_id;
            DBMS_OUTPUT.PUT_LINE('VIP status granted to customer ID: ' || c.customer_id);
        END IF;
    END LOOP;
END;


BEGIN
    FOR l IN (
        SELECT loan_id, customer_id, due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || l.loan_id ||
                             ' for Customer ID ' || l.customer_id ||
                             ' is due on ' || TO_CHAR(l.due_date, 'DD-MON-YYYY'));
    END LOOP;
END;

