namespace Sectores.Domain.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("vSectores")]
    public partial class VSectores
    {

        public int SectorId { get; set; }
        public string SectorNombre { get; set; }
        public int CiudadId { get; set; }
        public string CiudadNombre { get; set; }
        public int PaisId { get; set; }
        public string PaisNombre { get; set; }

    }
}
