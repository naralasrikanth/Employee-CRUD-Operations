# Employee-CRUD-Operations
##Introduction
This documentation provides an overview of the Employee CRUD operations implemented in an Angular web application, connected to a C# Web API using PostgreSQL as the database.

##Technologies Used
1.Angular
2.C# Web API
3.PostgreSQL

##API Endpoints
##GET Employees
*Endpoint*: /api/Employee
*Method*: GET
*Description:* Retrieve a list of all employees from the database.
###Response:
*Status Code:* 200 (OK)
*Body: *List of employee objects
##GET Employee by ID
*Endpoint:* /api/Employee/{id}
*Method:* GET
*Description:* Retrieve a specific employee by their unique ID.
###Parameters:
1.id (integer) - The unique identifier of the employee.
###Response:
*Status Code:* 200 (OK)
*Body:* Employee object
Status Code: 404 (Not Found)
Body: { "message": "Employee with the provided ID was not found" }
##Create Employee
Endpoint: /api/Employee
Method: POST
Description: Create a new employee in the database.
Request Body: JSON object representing the new employee with the following properties:
id (integer) - Unique identifier
Employee_info - json
####Response:
Status Code: 200 (OK)
Body: { "message": "Employee created" }
Status Code: 200 (OK)
Body: { "message": "Employee already exists" } (If an employee with the same ID already exists)

##Update Employee
Endpoint: /api/Employee
Method: PUT
Description: Update an existing employee in the database.
Request Body: JSON object representing the updated employee with the following properties:
id (integer) - Unique identifier (must exist in the database)
name (string) - Updated employee's name
position (string) - Updated employee's position
department (string) - Updated employee's department
####Response:
Status Code: 200 (OK)
Body: { "message": "Employee updated" }
Status Code: 404 (Not Found)
Body: { "message": "Employee with the provided ID was not found" }

##Delete Employee
Endpoint: /api/Employee/{id}
Method: DELETE
Description: Delete an employee from the database by their unique ID.
Parameters:
id (integer) - The unique identifier of the employee to be deleted.
Response:
Status Code: 200 (OK)
Body: { "message": "Row deleted" }
Status Code: 404 (Not Found)
Body: { "message": "Employee with the provided ID was not found" }
Examples
Here are some example API requests:

Conclusion
This documentation outlines the CRUD operations for managing employee data through the Angular web application, C# Web API, and PostgreSQL database. You can use these endpoints to perform various operations on employee records efficiently.




