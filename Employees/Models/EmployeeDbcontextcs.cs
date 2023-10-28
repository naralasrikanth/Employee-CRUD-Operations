using Microsoft.EntityFrameworkCore;

namespace Employees.Models
{
    public class EmployeeDbcontextcs:DbContext
    {
        public EmployeeDbcontextcs(DbContextOptions<EmployeeDbcontextcs> options) :base(options) 
        {
        }
        public virtual DbSet<employees> employees { get; set; }
    }
}
