namespace Sectores.Domain.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Ciudad")]
    public partial class Ciudad
    {
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        public bool? Activo { get; set; }

        public int PaisID { get; set; }

        public virtual Pais Pais { get; set; }
    }
}
