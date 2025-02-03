namespace Ferro.Api.Models
{
    public partial class Sponsor
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }

        public string? RedSocial { get; set; }

        public Guid? IdImagen { get; set;}
    }
}
