using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Sectores.Domain.Model;

namespace Sectores.Web.Controllers
{
    public class SectorController : ApiController
    {
        private PruebaContext db = new PruebaContext();

        // GET: api/Sectores
        public IQueryable<Sector> GetSectores()
        {
            return db.Sectores;
        }

        // GET: api/Sectores/5
        [ResponseType(typeof(Sector))]
        public IHttpActionResult GetSector(int id)
        {
            Sector sector = db.Sectores.Find(id);
            if (sector == null)
            {
                return NotFound();
            }

            return Ok(sector);
        }

        // PUT: api/Sectores/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSector(int id, Sector sector)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sector.Id)
            {
                return BadRequest();
            }

            db.Entry(sector).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SectorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Sectores
        [ResponseType(typeof(Sector))]
        public IHttpActionResult PostSector(Sector sector)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Sectores.Add(sector);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = sector.Id }, sector);
        }

        // DELETE: api/Sectores/5
        [ResponseType(typeof(Sector))]
        public IHttpActionResult DeleteSector(int id)
        {
            Sector sector = db.Sectores.Find(id);
            if (sector == null)
            {
                return NotFound();
            }

            db.Sectores.Remove(sector);
            db.SaveChanges();

            return Ok(sector);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SectorExists(int id)
        {
            return db.Sectores.Count(e => e.Id == id) > 0;
        }
    }
}