using Ferro.Api.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ferro.Api.Controllers
{

   

    [Route("api/[controller]")]
    [ApiController]
    public class JugadoresController : ControllerBase
    {

        public pruebaContext Context { get; }

        public JugadoresController(pruebaContext context)
        {
            this.Context = context;

        }


      

        // GET: api/<JugadoresController>
        [HttpGet]
        public IEnumerable<Jugadore> Get()
        {
            return Context.Jugadores.ToList();
        }

        // GET api/<JugadoresController>/5
        [HttpGet("{id}")]
        public Jugadore? Get(int id)
        {
            return Context.Jugadores.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST api/<JugadoresController>
        [HttpPost]
        public void Post([FromBody] Jugadore value)
        {
            this.Context.Jugadores.Add(value);
            this.Context.SaveChanges();
        }

        // PUT api/<JugadoresController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Jugadore value)
        {
            var jugadorActual = this.Context.Jugadores.Where(e=> e.Id== id).FirstOrDefault();
            jugadorActual.Nombre = value.Nombre;
            jugadorActual.FechaDeNacimiento = value.FechaDeNacimiento;
            this.Context.SaveChanges();
        }

        // DELETE api/<JugadoresController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var jugadorActual = this.Context.Jugadores.Where(e => e.Id == id).FirstOrDefault();
            this.Context.Jugadores.Remove(jugadorActual);
            this.Context.SaveChanges();
        }
    }
}
