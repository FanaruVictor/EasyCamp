using EasyCamp.Core.IRepositories;
using EasyCamp.Data.Context;
using EasyCamp.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace EasyCamp.Data
{
    public static class Configuration
    {
        public static void AddDb(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration["easy-camp-connection-string"];
            var migrationsAssembly = typeof(EasyCampContext).GetTypeInfo().Assembly.GetName().Name;
            services.AddDbContext<EasyCampContext>(options => options.UseSqlServer(connectionString, sql =>
            {
                sql.MigrationsAssembly(migrationsAssembly);
                sql.MigrationsHistoryTable("__EFMigrationHistory");
            }));


            services.AddScoped<IUserRepository, UserRepository>();
        }
    }
}
