# Database testing - step by step 

## What is a database? 
A database is an organized collection of data that is going to help us to access, review, and update the information in a rapid and coherent manner. 

## What is RDBMS? 
RDBMS stands for relational database management system. Mainly, RDBMS is going to talk about maintaining the data in multiple tables and later connecting them to each other to get complete information by maintaining common columns between each and every table. 

## What is SQL?
SQL stands for Structured Query Language. SQL is a programming language that we are going to use to communicate with our database. By using SQL, you can perform CRUD operations inside the database. 

## What do CRUD operations mean in a database? 

-C refers to create operations. => CREATE , INSERT 
-R refers to read operations. => SELECT
-U refer to update operations. => ALTER , UPDATE
-D refers to delete operations. => DROP , DELETE


## SQL Basics

-Syntax to create a database table column to store the data : ColumnName DataType Constraint

## Data Types in SQL?

## Numerical data types in SQL (Datatype used to store numbers with decimals and without decimals )

SMALLINT- It can store numbers without decimals from -32,768 to +32,767. 
INTEGER- It can store numbers without decimals from -2147483648 to +2147483647
BIGINT-It can store the numbers without decimals from -19 digit to +19 digit

FLOAT-It can store numbers with decimals, upto 6 decimal points
DOUBLE-It can store numbers with decimals , up to 15 decimal points. 
DECIMAL-It can store numbers with decimals up to roughly 16k decimals. 

SMALLSERIAL-It can store only positive numbers without decimals, from 1 to 32,767. 
SERIAL-It can store only positive numbers without decimals, from 1 to +2147483647
BIGSERIAL-It can store only positive numbers without decimals, from 1 to +19 digit

## Character data types (The data types used to store text values )

char(n) => Can store a fixed number of characters 
varchar(n) => It can store a variable number of characters. 
text => It can store an unlimited number of characters. 

## Boolean data type 
boolean => It can store boolean values like true or false. 

## Date data types 
date => Can store only date 
time => Can store only time 
timestamp => Can store date and time together 
interval => Can store the period in the form of seconds, minutes, hours, days, months, and years, etc. 

## Operator in SQL ?
In SQL, mainly, we have three important operators. 

1. Arithmetic operators => The operators used in mathematical operations 

+ Represents addition 
- Represents subtraction 
* Represents multiplication 
/ Represents division 
% Represents modulus or remainder 

2. Comparison operators => The operators we are going to use to compare two different values 
= Represents equal to
!= Regresents not equal to
> 
<
>=
<=

3. Logical operators => The operators we are going to use to build the logic By combining multiple conditions together .
AND => It will return true only if all conditions are true. 
OR => It will return true if at least one condition becomes 
NOT => It will always return the opposite result. 
BETWEEN => It will filter the rows within the specific range. (SELECT employee_id FROM employee WHERE employee_id BETWEEN 1 AND 10; )
IN => It will filter the rows based on the list of values. (SELECT employee_id FROM employee WHERE employee_id IN (1, 13, 97, 99); )
EXISTS => It will filter the rows based on the result of the subquery. (SELECT employee_id FROM employee WHERE employee_id exists(Select employee ID from promotionList) )
LIKE => Filter the rows based on the pattern, and we are going to use some special characters like percentile (any) and underscore(_) to refer to the position while filtering the record. (SELECT * FROM employee WHERE employee name LIKE '_d%Bharath%'; )
IS NULL =>Filter the rows with null records

## Constraints in SQL 
Constraints are all about conditions that we are going to add on top of the database columns to avoid invalid data. 

NOT NULL => The column having a non-null constraint won't allow any null value. 
UNIQUE => The column having a unique constraint won't allow duplicate values. 
PRIMARY KEY => The column having a primary key constraint won't allow duplicate values and also null values. Mainly, the purpose of a primary key is to maintain a unique reference to separate each and every row within the table. 
FOREIGN KEY => A foreign key constraint is a key that is going to maintain the relation between two different tables, mainly to ensure referential integrity. 
CHECK => The column having a check constraint is going to allow us to add our own conditions. 
DEFAULT => The column having a default constraint is going to add a default value every time the user is not updating it.  

## Default functions in SQL ?
Default functions are all about a set of default methods provided by the SQL programming language to manipulate the data that we have stored previously within the database. 

### Aggregate functions 
Aggregate functions are all about a set of functions designed to perform calculations on a set of rows and return a single result. 

COUNT() => It will return the total number of rows available in the table. 
SUM() => It will return the sum of all values available in the specific column. 
AVG() => It will return the average value available within the specific column. 
MIN() => It will return the minimum value available within the specific column. 
MAX() => It will return the maximum value available within the specific column. 

### Numerical functions 
Numerical functions in SQL are all about the functions that we are going to use to perform mathematical operations and manipulations on top of the numeric data. 

ABS() => It will return the absolute value or positive value of a number. => SELECT ABS(-123.99) => 123.99
CEIL()=> It will return the nearest next integer value. => SELECT CEIL(123.11) => 124
FLOOR() => It will return the nearest previous integer value. => SELECT FLOOR (123.99) => 123
ROUND() => It will return the rounded value of a particular number based on the decimal point specified. => SELECT ROUND(125.995 , 2) => 126.00
SQRT() => It will return the square root of a specific number. => SQRT(4) => 2
POWER()=> It will return the power of a specific number. => POWER(2,3) => 2^3 => 8

### String functions 
String functions in SQL are all about a set of default methods we are going to use to manipulate and transform the text or character data. 

LENGTH()=>It will return the total number of characters stored inside the string. 
UPPER()=>It will return the uppercase version of each and every character inside the string. 
LOWER()=>It will return the lowercase of each and every character inside the string. 
SUBSTRING(COL_NAME START_INDEX TO END_INDEX)=> It will extract part of the string based on the start and end index specified in the `substring` method. 
TRIM()=> It will eliminate leading and trailing spaces from the string. 
CONCAT()=> It will join two or more strings and return a single string. 


