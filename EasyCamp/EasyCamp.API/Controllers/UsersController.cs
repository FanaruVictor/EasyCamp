using EasyCamp.Infrastructure.Commands.UserCommands.Create;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Tempus.API.Controllers;

namespace EasyCamp.API.Controllers
{
    public class UsersController : BaseController
    {
        public UsersController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost]
        public async Task<ActionResult<bool>> Create([FromBody] CreateUserCommand command)
        {
            return HandleResponse(await _mediator.Send(command));
        }
    }
}
