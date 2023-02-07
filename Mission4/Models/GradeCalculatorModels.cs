using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class GradeCalculatorModels
    {
        [Required] //this makes sure that the assignments section has a value
        [Range(0, 100.00)] //this makes sure that the inputted value is between 0 and 100.00
        public float assignments { get; set; }
        [Required]
        [Range(0, 100.00)]
        public float group_projects { get; set; }
        [Required]
        [Range(0, 100.00)]
        public float quizzes { get; set; }
        [Required]
        [Range(0, 100.00)]
        public float midterm { get; set; }
        [Required]
        [Range(0, 100.00)]
        public float final { get; set; }
        [Required]
        [Range(0, 100.00)]
        public float intex { get; set; }
    }
}
