using EasyCamp.Core.Enities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace EasyCamp.Data.Context
{
    public class EasyCampContext : DbContext
    {
        public EasyCampContext(DbContextOptions options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Feedback> Feedbacks => Set<Feedback>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

    }
}
