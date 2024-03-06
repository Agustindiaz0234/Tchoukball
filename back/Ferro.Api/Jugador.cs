namespace Ferro.Api
{
    public class Jugador
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public DateTime FechaDeNacimiento { get; set; }

        public double Edad
        {
            get
            {
                return Math.Truncate((DateTime.Now - FechaDeNacimiento).TotalDays / 365);
            }
        }
    }
}
