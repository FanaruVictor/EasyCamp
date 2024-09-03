using EasyCamp.Core.Enities;
using EasyCamp.Core.IRepositories;
using EasyCamp.Infrastructure.Common;
using MediatR;

namespace EasyCamp.Infrastructure.Commands.UserCommands.Create
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, BaseResponse<bool>>
    {
        private readonly IUserRepository userRepository;

        public CreateUserCommandHandler(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }
        public async Task<BaseResponse<bool>> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var user = new User
                {
                    Id = Guid.NewGuid(),
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                };

                await userRepository.Add(user);

                await userRepository.SaveChanges();

                return BaseResponse<bool>.Ok(true);

            }

            catch (Exception ex)
            {
                return BaseResponse<bool>.BadRequest(new List<string>
                {
                    ex.Message
                });
            }
        }
    }
}
