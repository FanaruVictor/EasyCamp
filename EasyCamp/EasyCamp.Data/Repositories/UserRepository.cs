using EasyCamp.Core.Enities;
using EasyCamp.Core.IRepositories;
using EasyCamp.Data.Context;

namespace EasyCamp.Data.Repositories
{
    internal class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(EasyCampContext context) : base(context)
        {
        }
    }
}
