using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace Employees.Models
{
    public class employees
    {
        [Key]
        public int id { get; set; }
        public JsonDocument employee_info { get; set; }
    }
}
