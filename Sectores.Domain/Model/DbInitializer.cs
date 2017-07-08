using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Sectores.Domain.Model
{
    class DbInitializer : DropCreateDatabaseIfModelChanges<PruebaContext>
    {
        protected override void Seed(PruebaContext context)
        {
            new List<Sector>
            {
                new Sector{Nombre = "Bella Vista",Ciudad = new Ciudad{Nombre = "Distrito Nacional",Pais=new Pais{Nombre="Republica Dominicana"}}},
                new Sector{Nombre = "Evaristo Morales",Ciudad = new Ciudad{Nombre = "Distrito Nacional",Pais=new Pais{Nombre="Republica Dominicana"}}},
                new Sector{Nombre = "El Millon",Ciudad = new Ciudad{Nombre = "Distrito Nacional",Pais=new Pais{Nombre="Republica Dominicana"}}},
                new Sector{Nombre = "La Julia",Ciudad = new Ciudad{Nombre = "Distrito Nacional",Pais=new Pais{Nombre="Republica Dominicana"}}},
                new Sector{Nombre = "Mirador Norte",Ciudad = new Ciudad{Nombre = "Distrito Nacional",Pais=new Pais{Nombre="Republica Dominicana"}}},
            }.ForEach(s => context.Sectores.Add(s));
            context.SaveChanges();
        }
    }
}
