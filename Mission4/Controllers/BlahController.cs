using Microsoft.AspNetCore.Mvc;
using Mission4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            //throw new IndexOutOfRangeException();

            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator (GradeCalculatorModels model)
        {
            return View();
        }
    }
}
