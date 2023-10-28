drop table if exists employees;

CREATE TABLE employees(
	id serial primary key,
	employee_info json
);

insert into employees(employee_info) values
('{"name":"srikanth","Details":{"college":"mrce","code":"3462","rank":"5"}}'),
('{"name":"sunny","Details":{"college":"vbit","code":"1233","rank":"1"}}'),
('{"name":"sai","Details":{"college":"jntuh","code":"1111","rank":"1"}}');

select * from employees;

