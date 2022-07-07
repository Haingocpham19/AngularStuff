using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantManagement.Data.EF;
using RestaurantManagement.Data.Entities;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace RestaurantManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonAnController : ControllerBase
    {
        private readonly RMDBContext _context;
        private readonly ILogger _logger;
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public MonAnController(RMDBContext context, IWebHostEnvironment env, ILogger logger, IConfiguration configuration)
        {
            _context = context;
            _env = env;
            _logger = logger;
            _configuration = configuration;
        }
        // GET: api/MonAn
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MonAn>>> GetMonAns()
        {
          if (_context.MonAns == null)
          {
              return NotFound();
          }
            return await _context.MonAns.ToListAsync();
        }

        // GET: api/MonAn/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MonAn>> GetMonAn(int id)
        {
          if (_context.MonAns == null)
          {
              return NotFound();
          }
            var monAn = await _context.MonAns.FindAsync(id);

            if (monAn == null)
            {
                return NotFound();
            }

            return monAn;
        }

        // PUT: api/MonAn/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMonAn(int id, MonAn monAn)
        {
            if (id != monAn.Id)
            {
                return BadRequest();
            }
            _context.Entry(monAn).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonAnExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // POST: api/MonAn
        [HttpPost]
        public async Task<ActionResult<MonAn>> PostMonAn(MonAn monAn)
        {
          if (_context.MonAns == null)
          {
              return Problem("Entity set 'RMDBContext.MonAns'  is null.");
          }
            _context.MonAns.Add(monAn);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMonAn", new { id = monAn.Id }, monAn);
        }

        // DELETE: api/MonAn/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMonAn(int id)
        {
            if (_context.MonAns == null)
            {
                return NotFound();
            }
            var monAn = await _context.MonAns.FindAsync(id);
            if (monAn == null)
            {
                return NotFound();
            }
            _context.MonAns.Remove(monAn);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MonAnExists(int id)
        {
            return (_context.MonAns?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [Route("SaveFile")]
        [HttpPost]
        public async Task<JsonResult> SaveFile(MonAn monAn)
        {
            try
            {
                var httpRequest = Request.Form;
                var postFile = httpRequest.Files[0];
                string fileName = postFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Images/" + fileName;

                using (var stream = new FileStream(physicalPath,FileMode.Create))
                {
                    postFile.CopyTo(stream);
                }
                return new JsonResult("Thêm ảnh thành công");
            }
            catch (Exception)
            {
                return new JsonResult("");
            }
        }
    }
}
