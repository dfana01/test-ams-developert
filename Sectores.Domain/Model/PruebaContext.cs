namespace Sectores.Domain.Model
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class PruebaContext : DbContext
    {
        public PruebaContext()
            : base("name=PruebaContext")
        {
        }

        public virtual DbSet<Ciudad> Ciudades { get; set; }
        public virtual DbSet<Pais> Paises { get; set; }
        public virtual DbSet<Sector> Sectores { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Sector>()
                .MapToStoredProcedures(o =>
                {
                   o.Update(u => u.HasName("sp_SectorUpdate")
                        .Parameter(p => p.Id, "Id")
                        .Parameter(p => p.Nombre, "Nombre")
                        .Parameter(p => p.Activo, "Activo")
                        .Parameter(p => p.CiudadID, "CiudadID"));
                   o.Delete(d => d.HasName("sp_SectorDelete")
                        .Parameter(p => p.Id, "Id"));
                   o.Insert(i => i.HasName("sp_SectorCreate")
                        .Parameter(p => p.Nombre, "Nombre")
                        .Parameter(p => p.Activo, "Activo")
                        .Parameter(p => p.CiudadID, "CiudadID")
                        );
                });

            modelBuilder.Entity<Ciudad>()
                .MapToStoredProcedures(o =>
                {
                    o.Update(u => u.HasName("sp_CiudadUpdate")
                        .Parameter(p => p.Id, "Id")
                        .Parameter(p => p.Nombre, "Nombre")
                        .Parameter(p => p.Activo, "Activo")
                        .Parameter(p => p.PaisID, "PaisID"));
                    o.Delete(d => d.HasName("sp_CiudadDelete")
                        .Parameter(p => p.Id, "Id"));
                    o.Insert(i => i.HasName("sp_CiudadCreate")
                        .Parameter(p => p.Nombre, "Nombre")
                        .Parameter(p => p.Activo, "Activo")
                        .Parameter(p => p.PaisID, "PaisID"));
                });

            modelBuilder.Entity<Pais>()
                .MapToStoredProcedures(o =>
                {
                    o.Update(u => u.HasName("sp_PaisUpdate")
                        .Parameter(p => p.Id, "Id")
                        .Parameter(p => p.Nombre, "Nombre")
                        .Parameter(p => p.Activo, "Activo"));
                    o.Delete(d => d.HasName("sp_PaisDelete")
                        .Parameter(p => p.Id, "Id"));
                    o.Insert(i => i.HasName("sp_PaisCreate")
                        .Parameter(p => p.Nombre, "Nombre")
                        .Parameter(p => p.Activo, "Activo"));
                });

        }
    }
}
