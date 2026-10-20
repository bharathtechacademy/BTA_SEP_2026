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