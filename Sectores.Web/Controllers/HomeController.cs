using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sectores.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            return PartialView();
        }

        public ActionResult Sector()
        {
            return PartialView();
        }

        public ActionResult Ciudad()
        {
            return PartialView();
        }

        public ActionResult Pais()
        {
            return PartialView();
        }

        public ActionResult Modal()
        {
            return PartialView();
        }
    }
}
