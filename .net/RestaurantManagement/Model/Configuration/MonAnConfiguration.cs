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
    public class MonAnConfiguration : IEntityTypeConfiguration<MonAn>
    {
        public void Configure(EntityTypeBuilder<MonAn> builder)
        {
            builder.ToTable("MonAn");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.TenMonAn).IsRequired(true);
        }
    }
}
