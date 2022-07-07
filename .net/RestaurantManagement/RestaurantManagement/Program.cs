using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json.Serialization;
using RestaurantManagement.Data.EF;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("HAINGOCPHAM");

//add dbcontext
builder.Services.AddDbContext<RMDBContext>(x => x.UseSqlServer(connectionString));

//enable Cors
//Configure CORS for angular2 UI
//services.AddCors(options =>
//{
//    options.AddPolicy(DefaultCorsPolicyName, builder =>
//    {
//        //App:CorsOrigins in appsettings.json can contain more than one address with splitted by comma.
//        builder
//            .WithOrigins(
//                // App:CorsOrigins in appsettings.json can contain more than one address separated by comma.
//                configuration["App:CorsOrigins"]
//                    .Split(",", StringSplitOptions.RemoveEmptyEntries)
//                    .Select(o => o.RemovePostFix("/"))
//                    .ToArray()
//            )
//            .AllowAnyHeader()
//            .AllowAnyMethod()
//            .AllowCredentials()
//            .SetIsOriginAllowedToAllowWildcardSubdomains();
//    });
//});
builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

//json serializer
builder.Services.AddControllersWithViews().AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(options =>
        options.SerializerSettings.ContractResolver = new DefaultContractResolver());  

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowOrigin");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthorization();

app.MapControllers();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(),"Images")),
    RequestPath = "/Images"
});

app.Run();
