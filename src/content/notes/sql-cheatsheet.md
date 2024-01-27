---
title: "SQL Cheatsheet"
publishedDate: 2024-01-24
publishedTime: "6:55 PM"
description: "A quick review of SQL queries."
slug: "sql-cheatsheet"
---

# Table of Contents

1. [ Fundamental SQL Queries ](#fund)
2. [ Data Modification Queries ](#modify)
3. [ Aggregate Function Queries ](#aggregate)
4. [ Join Queries ](#join)
5. [ View Queries ](#view)
6. [ Table Queries ](#table)

---

<a name="fund"></a>

# 1. Fundamental SQL Queries

### **SELECT**: Retrieves data from a database

- `SELECT * FROM table_name;`

### **DISTINCT**: Eliminates duplicate values in the specified column(s)

- `SELECT DISTINCT column_name;`

### **WHERE**: Filters records based on specific conditions

- `SELECT column1, column2 FROM table_name WHERE condition;`
- `SELECT * FROM table_name WHERE condition1 AND condition2;`
- `SELECT * FROM table_name WHERE condition1 OR condition2;`
- `SELECT column_name FROM table_name WHERE condition;`

### **ORDER BY**: Sorts the result-set in ascending or descending order

- `SELECT * FROM table_name ORDER BY column;`
- `SELECT * FROM table_name ORDER BY column DESC;`
- `SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;`

### **LIMIT, OFFSET**: Limits the number of rows returned by the query and specifies the number of rows to skip

- `SELECT column_names FROM table_name LIMIT *, OFFSET _;`

### **LIKE**: Operator used in a WHERE clause to search for a specific pattern in a column

- `SELECT column_names FROM table_name WHERE column_name LIKE pattern;`
- `LIKE ‘a%’` (finds any values that start with “a”)
- `LIKE ‘%a’` (finds any values that end with “a”)
- `LIKE ‘%or%’` (finds any values that have “or” in any position)
- `LIKE ‘_r%’` (finds any values that have “r” in the second position)
- `LIKE ‘a__%’` (finds any values that start with “a” and are at least 3 characters in length)
- `LIKE ‘[a-c]%’` (finds any values starting with “a”, “b”, or “c”)

### **IN**: Operator that allows you to specify multiple values in a WHERE clause

- `SELECT column_names FROM table_name WHERE column_name IN (value1, value2, …);`

### **BETWEEN**: Operator selects values within a given range (inclusive)

- `SELECT column_names FROM table_name WHERE column_name BETWEEN value1 AND value2;`
- `SELECT * FROM Products WHERE (column_name BETWEEN value1 AND value2) AND NOT column_name2 IN (value3, value4);`
- `SELECT * FROM Products WHERE column_name BETWEEN #01/07/1999# AND #03/12/1999#;`

### **NULL**: Values in a field with no value

- `SELECT * FROM table_name WHERE column_name IS NULL;`
- `SELECT * FROM table_name WHERE column_name IS NOT NULL;`

### **AS**: Aliases are used to assign a temporary name to a table or column

- `SELECT column_name AS alias_name FROM table_name;`
- `SELECT column_name FROM table_name AS alias_name;`
- `SELECT column_name AS alias_name1, column_name2 AS alias_name2;`
- `SELECT column_name1, column_name2 + ', ' + column_name3 AS alias_name;`

### **UNION**: Set operator used to combine the result-set of two or more SELECT statements

- `SELECT columns_names FROM table1 UNION SELECT column_name FROM table2;`
- `UNION` operator only selects distinct values, `UNION ALL` will allow duplicates

### **INTERSECT**: Set operator which is used to return the records that two SELECT statements have in common

- `SELECT columns_names FROM table1 INTERSECT SELECT column_name FROM table2;`

### **EXCEPT**: Set operator used to return all the records in the first SELECT statement that are not found in the second SELECT statement

- `SELECT columns_names FROM table1 EXCEPT SELECT column_name FROM table2;`

### **ANY|ALL**: Operators used to check subquery conditions within WHERE or HAVING clauses

- The `ANY` operator returns true if any subquery values meet the condition.
- The `ALL` operator returns true if all subquery values meet the condition.
- `SELECT columns_names FROM table1 WHERE column_name operator (ANY|ALL) (SELECT column_name FROM table_name WHERE condition);`

### **GROUP BY**: Often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns

- `SELECT column_name1, COUNT(column_name2) FROM table_name WHERE condition GROUP BY column_name1 ORDER BY COUNT(column_name2) DESC;`

### **HAVING**: This clause was added to SQL because the WHERE keyword could not be used with aggregate functions

- `SELECT COUNT(column_name1), column_name2 FROM table GROUP BY column_name2 HAVING COUNT(column_name1) > 5;`

### **WITH**: Often used for retrieving hierarchical data or re-using a temporary result set multiple times in a query. Also referred to as "Common Table Expression"

- `WITH RECURSIVE cte AS (
  SELECT c0._ FROM categories AS c0 WHERE id = 1 # Starting point
  UNION ALL
  SELECT c1._ FROM categories AS c1 JOIN cte ON c1.parent_category_id = cte.id
)
SELECT * FROM cte;`

---

<a name="modify"></a>

# 2. Data Modification Queries

### **INSERT INTO**: Used to insert new records/rows in a table

- `INSERT INTO table_name (column1, column2) VALUES (value1, value2);`
- `INSERT INTO table_name VALUES (value1, value2 …);`

### **UPDATE**: Used to modify the existing records in a table

- `UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;`
- `UPDATE table_name SET column_name = value;`

### **DELETE**: Used to delete existing records/rows in a table

- `DELETE FROM table_name WHERE condition;`
- `DELETE * FROM table_name;`

---

<a name="aggregate"></a>

# 3. Aggregate Function Queries

### **COUNT**: Returns the number of occurrences

- `SELECT COUNT (DISTINCT column_name);`

### **MIN() and MAX()**: Returns the smallest/largest value of the selected column

- `SELECT MIN (column_names) FROM table_name WHERE condition;`
- `SELECT MAX (column_names) FROM table_name WHERE condition;`

### **AVG()**: Returns the average value of a numeric column

- `SELECT AVG (column_name) FROM table_name WHERE condition;`

### **SUM()**: Returns the total sum of a numeric column

- `SELECT SUM (column_name) FROM table_name WHERE condition;`

---

<a name="join"></a>

# 4. Join Queries

### **INNER JOIN**: Returns records with matching values in both tables

- `SELECT column_names FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;`
- `SELECT table1.column_name1, table2.column_name2, table3.column_name3 FROM ((table1 INNER JOIN table2 ON relationship) INNER JOIN table3 ON relationship);`

### **LEFT (OUTER) JOIN**: Returns all records from the left table (table1), and the matched records from the right table (table2)

- `SELECT column_names FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;`

### **RIGHT (OUTER) JOIN**: Returns all records from the right table (table2), and the matched records from the left table (table1)

- `SELECT column_names FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;`

### **FULL (OUTER) JOIN**: Returns all records when there is a match in either left or right table

- `SELECT column_names FROM table1 FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;`

### **Self JOIN**: A regular join where the table is joined with itself

- `SELECT column_names FROM table1 T1, table1 T2 WHERE condition;`

---

<a name="view"></a>

# 5. View Queries

### **CREATE**: Creates a view

- `CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;`

### **SELECT**: Retrieves a view

- `SELECT * FROM view_name;`

### **DROP**: Drops a view

- `DROP VIEW view_name;`

---

<a name="table"></a>

# 6. Table Queries

- `CREATE TABLE table_name (
column1 datatype,
column2 datatype,
column3 datatype,
column4 datatype
);`

## Constraints

- NOT NULL: Ensures that a column cannot have a NULL value
- UNIQUE: Ensures that all values in a column are different
- PRIMARY KEY: A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
- FOREIGN KEY: Uniquely identifies a row/record in another table
- CHECK: Ensures that all values in a column satisfies a specific condition
- DEFAULT: Sets a default value for a column when none is specified
- INDEX: Used to create and retrieve data from the database very quickly

```sql
CREATE TABLE Employees (
    ID int NOT NULL,
    Name varchar(255) NOT NULL,
    Age int CHECK (Age >= 18),
    Salary decimal(8, 2) DEFAULT 50000.00,
    Email varchar(255) UNIQUE,
    DepartmentID int,
    PRIMARY KEY (ID),
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

CREATE INDEX idx_Employees_Name
ON Employees (Name);
```

### **ADD**: Adds a column

- `ALTER TABLE table_name ADD column_name column_definition;`

### **MODIFY**: Changes data type of a column

- `ALTER TABLE table_name MODIFY column_name column_type;`

### **DROP**: Deletes a column

- `ALTER TABLE table_name DROP COLUMN column_name;`
