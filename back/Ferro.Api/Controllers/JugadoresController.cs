using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ferro.Api.Controllers
{



    [Route("api/[controller]")]
    [ApiController]
    public class JugadoresController : ControllerBase
    {
        Jugador[] Jugadores = new Jugador[] { new Jugador() {
            Id=1,
            Name= "Agustin",
            FechaDeNacimiento = new DateTime(2004, 03, 25),
            },

             new Jugador() {
            Id=2,
            Name= "Seba",
            FechaDeNacimiento = new DateTime(1981, 03, 21),
            }};

        // GET: api/<JugadoresController>
        [HttpGet]
        public IEnumerable<Jugador> Get()
        {
            return Jugadores;
        }

        // GET api/<JugadoresController>/5
        [HttpGet("{id}")]
        public Jugador? Get(int id)
        {
            return Jugadores.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST api/<JugadoresController>
        [HttpPost]
        public void Post([FromBody] Jugador value)
        {
        }

        // PUT api/<JugadoresController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Jugador value)
        {
        }

        // DELETE api/<JugadoresController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
