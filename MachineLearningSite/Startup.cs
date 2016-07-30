using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MachineLearningSite.Startup))]
namespace MachineLearningSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
