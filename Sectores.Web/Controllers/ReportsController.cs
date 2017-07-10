using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Razor.Tokenizer.Symbols;
using Sectores.Domain.Model;

namespace Sectores.Web.Controllers
{
    public class ReportsController : ApiController
    {

        private PruebaContext db = new PruebaContext();

        public IQueryable<vSectores> GetReports()
        {
            return db.vSectoresList;
        }


    }
}
