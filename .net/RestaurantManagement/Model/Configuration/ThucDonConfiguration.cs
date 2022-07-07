using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RestaurantManagement.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestaurantManagement.Data.Configuration
{
    public class ThucDonConfiguration : IEntityTypeConfiguration<ThucDon>
    {
        public void Configure(EntityTypeBuilder<ThucDon> builder)
        {
            builder.ToTable("ThucDon");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.TenThucDon).IsRequired(true);
        }
    }
}
