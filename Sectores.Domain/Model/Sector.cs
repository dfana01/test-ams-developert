namespace Sectores.Domain.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Sector")]
    public partial class Sector
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        public bool? Activo { get; set; }

        public int CiudadID { get; set; }

        public virtual Ciudad Ciudad { get; set; }
    }
}
