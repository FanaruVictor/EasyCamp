using MediatR;

namespace EasyCamp.Infrastructure.Common
{
    public class BaseRequest<TResponse> : IRequest<TResponse>
    {
    }
}
