using Microsoft.AspNetCore.Mvc;
using RestaurantManagement.Data.Entities;
using System.Data;
using System.Data.SqlClient;

namespace RestaurantManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ThucDonController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ThucDonController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = "Select * from ThucDons";
            DataTable table = new DataTable();
            String sqlDataSource = _configuration.GetConnectionString("HAINGOCPHAM");
            SqlDataReader myReader;
            using(SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using(SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    myReader = sqlCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(ThucDon thucDon)
        {
            string query = @"Insert into ThucDons values
            ('"+thucDon.TenThucDon+"')";
            DataTable table = new DataTable();
            String sqlDataSource = _configuration.GetConnectionString("HAINGOCPHAM");
            SqlDataReader myReader;
            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    myReader = sqlCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult("Thêm mới thành công!");
        }
        [HttpPut]
        public JsonResult Put(ThucDon thucDon)
        {
            string query = @"Update ThucDons set
            TenThucDon = '" +thucDon.TenThucDon+"' where Id = '"+thucDon.Id+"'";
            DataTable table = new DataTable();
            String sqlDataSource = _configuration.GetConnectionString("HAINGOCPHAM");
            SqlDataReader myReader;
            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    myReader = sqlCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult("Cập nhật thành công!");
        }
        [HttpDelete]
        public JsonResult Delete(ThucDon thucDon)
        {
            string query = @"Delete from ThucDons where Id = "+thucDon.Id+"";
            DataTable table = new DataTable();
            String sqlDataSource = _configuration.GetConnectionString("HAINGOCPHAM");
            SqlDataReader myReader;
            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    myReader = sqlCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult("Đã xóa!");
        }
        [Route("GetComboboxThucDon")]
        [HttpGet]
        public JsonResult GetComboboxThucDon()
        {
            string query = @"Select TenThucDon from ThucDons";
            DataTable table = new DataTable();
            String sqlDataSource = _configuration.GetConnectionString("HAINGOCPHAM");
            SqlDataReader myReader;
            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    myReader = sqlCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
