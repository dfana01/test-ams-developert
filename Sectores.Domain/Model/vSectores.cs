using System.ComponentModel.DataAnnotations;

namespace Sectores.Domain.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    [Table("v_Sectores")]
    public partial class vSectores
    {
        [Key]
        [Column(TypeName = "bigint")]
        public int Row { get; set; }
        public int? SectorId { get; set; }
        public string SectorNombre { get; set; }
        public int? CiudadId { get; set; }
        public string CiudadNombre { get; set; }
        public int? PaisId { get; set; }
        public string PaisNombre { get; set; }
    }
}
