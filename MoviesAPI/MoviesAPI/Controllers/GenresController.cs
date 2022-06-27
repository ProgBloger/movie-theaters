using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("api/genres")]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> _logger;

        public GenresController(ILogger<GenresController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<Genre>> Get()
        {

            _logger.LogInformation("Getting all the genres");

            return Ok(new List<Genre>() { new Genre() { Id = 1, Name = "Comedy" } });
        }

        [HttpGet("{id:int}", Name = "getGenre")]
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult<Genre> Post([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult<Genre> Put([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult<Genre> Delete()
        {
            throw new NotImplementedException();
        }
    }
}
