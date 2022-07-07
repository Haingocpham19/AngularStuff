using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore.SqlServer;
using System.IO;

namespace RestaurantManagement.Data.EF
{
    public class RMContextFactory : IDesignTimeDbContextFactory<RMDBContext>
    {
        public RMDBContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json")
                            .Build();

            var connectionString = configuration.GetConnectionString("HAINGOCPHAM");

            var optionsBuilder = new DbContextOptionsBuilder<RMDBContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new RMDBContext(optionsBuilder.Options);
        }
    }
}
