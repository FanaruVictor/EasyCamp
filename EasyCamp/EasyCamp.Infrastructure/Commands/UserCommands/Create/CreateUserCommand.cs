using EasyCamp.Core.Enities;
using EasyCamp.Infrastructure.Common;

namespace EasyCamp.Infrastructure.Commands.UserCommands.Create
{
    public class CreateUserCommand : BaseRequest<BaseResponse<bool>>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Role Role { get; set; }
    }
}
