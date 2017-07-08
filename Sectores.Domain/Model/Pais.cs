namespace Sectores.Domain.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Pais
    {
        public Pais()
        {
            Ciudades = new HashSet<Ciudad>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        public bool? Activo { get; set; }

        public virtual ICollection<Ciudad> Ciudades { get; set; }
    }
}
