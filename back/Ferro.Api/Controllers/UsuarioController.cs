using Ferro.Api.Models;
using Ferro.Api.Models.Commands;
using Ferro.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ferro.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        public pruebaContext Context { get;}

        private ITokenService tokenService;

        public UsuarioController(pruebaContext context, ITokenService tokenService)
        {
            this.Context = context;
            this.tokenService = tokenService;
        }


        [HttpPost("login")]
        public IActionResult Post([FromBody] LoginCommand value)
        {
           var usuarioExiste = Context.Usuarios.FirstOrDefault(u => u.Nombre == value.UserName);

            if (usuarioExiste == null) {

                return NotFound("El usuario no existe.");
            }
            if (usuarioExiste.Password != value.Password)
            {

                return NotFound("Usuario/contraseña incorrecta");
            }

            var token = tokenService.GenerateToken(value.UserName);

            return Ok(new { Token = token });
        }
    }
}
