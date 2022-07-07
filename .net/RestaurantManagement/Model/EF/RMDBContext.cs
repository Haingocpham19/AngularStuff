using Microsoft.EntityFrameworkCore;
using RestaurantManagement.Data.Configuration;
using RestaurantManagement.Data.Entities;

namespace RestaurantManagement.Data.EF
{
    public class RMDBContext : DbContext
    {
        public RMDBContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AppconfigConfiguration());

            //base.OnModelCreating(modelBuilder);
        }
        public DbSet<AppConfig> AppConfigs { set; get; }
        public DbSet<MonAn> MonAns { set; get; }
        public DbSet<ThucDon> ThucDons { set; get; }
    }
}
