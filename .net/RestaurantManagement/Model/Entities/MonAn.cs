using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestaurantManagement.Data.Entities
{
    public class MonAn
    {
        public int Id { get; set; }
        public string TenMonAn { get; set; }
        public int MaThucDon { get; set; }
        public DateTime NgayTao { get; set; }
        public string AnhMonAn { get; set; }
    }
}
