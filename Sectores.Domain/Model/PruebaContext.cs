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
            modelBuilder.Entity<Ciudad>()
                .HasMany(e => e.Sectores)
                .WithRequired(e => e.Ciudad)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Pais>()
                .HasMany(e => e.Ciudades)
                .WithRequired(e => e.Pais)
                .HasForeignKey(e => e.PaisID)
                .WillCascadeOnDelete(false);
        }
    }
}
