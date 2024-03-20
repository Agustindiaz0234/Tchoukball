using System;
using System.Collections.Generic;

namespace Ferro.Api.Models
{
    public partial class Jugadore
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }
        public DateTime? FechaDeNacimiento { get; set; }

        public string? Imagen { get; set; }
        public double? Edad
        {
            get
            {
                if (FechaDeNacimiento == null)
                {
                    return null;
                }
                else
                {
                    return Math.Truncate((DateTime.Now - FechaDeNacimiento).Value.TotalDays / 365);
                }
            }
        }
    }
}
