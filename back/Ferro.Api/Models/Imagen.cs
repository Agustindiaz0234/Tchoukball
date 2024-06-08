using Microsoft.AspNetCore.Mvc;

namespace Ferro.Api.Models
{
    public partial class Imagen
    {
       public Guid Id { get; set; }
        public string Name { get; set; }
        public byte[] Data { get; set; }
    }
}
