using FluentValidation;

namespace EasyCamp.Infrastructure.Commands.UserCommands.Create
{
    public class CreateUserCommandValidator : AbstractValidator<CreateUserCommand>
    {
        public CreateUserCommandValidator()
        {
            RuleFor(x => x.FirstName).NotEmpty().MinimumLength(3).WithMessage("First name must be at least 3 letters");
            RuleFor(x => x.LastName).NotEmpty().MinimumLength(3).WithMessage("Last name must be at least 3 letters");
            RuleFor(x => x.Role).NotNull();
        }
    }
}
