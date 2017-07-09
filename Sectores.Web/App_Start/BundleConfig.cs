using System.Web;
using System.Web.Optimization;

namespace Sectores.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/metisMenu.min.js",
                      "~/Scripts/sb-admin-2.min.js",
                      "~/scripts/respond.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/metisMenu.min.css",
                      "~/Content/sb-admin-2.min.css",
                      "~/Content/font-awesome.min.css"));
        }
    }
}
