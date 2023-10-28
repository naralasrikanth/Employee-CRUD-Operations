using Employees.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Employees.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDbcontextcs _dbcontextcs;
        public EmployeeController(EmployeeDbcontextcs Employee)
        {
            _dbcontextcs = Employee;
           

        }
             [HttpGet]
             public IActionResult GET()
             {
                 var employee = _dbcontextcs.employees;
                 return Ok(employee);

             }
             [HttpGet("{id}")]
             public IActionResult Get(int id)
             {
                 var employee =_dbcontextcs.employees.Find(id);
                 if(employee == null)
                 {
                     return Ok(new { message = "employee id was not there" });
                 }
                 return Ok(employee);
             }


             [HttpPost]
             public IActionResult Post([FromBody] employees model)
             {
                 var empployeexist=_dbcontextcs.employees.Any(e => e.id == model.id);
                 if(empployeexist)
                 {
                     return Ok(new {message="employee already exists"});
                 }
                 _dbcontextcs.employees.Add(model);
                 _dbcontextcs.SaveChanges();
                 return Ok(new { message = "employee created" });
             }
             [HttpPut]
             public IActionResult Put([FromBody] employees model)
             {

                 _dbcontextcs.employees.Attach(model);
                 _dbcontextcs.Entry(model).State = EntityState.Modified;

                 _dbcontextcs.SaveChanges();
                 return Ok(new { message = "employee updated" });
             }

             [HttpDelete("{id}")]

             public IActionResult Delete(int id)
             {
                 var customer = _dbcontextcs.employees.Find(id);
                 if (customer != null)
                 {
                     _dbcontextcs.employees.Remove(customer);

                 }
                 _dbcontextcs.SaveChanges();
                 return Ok(new { message = " deleting a row " });
             }
        }
}
