using APIProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace APIProject.Controllers
{
    public class UserDetailsController : ApiController
    {
        [HttpPost ,Route("api/UserDetails/Loginvarification")]
        public IHttpActionResult Loginvarification([FromBody] LoginRequest userLoginData)
        {
            
            return Ok();
        }
    }
}
