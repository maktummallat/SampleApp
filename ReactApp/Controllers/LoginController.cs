﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactApp.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public bool LogIn(string userName,string passWord)
        {
            return (userName=="Jhon" && passWord=="secretVault");
        }
    }
}