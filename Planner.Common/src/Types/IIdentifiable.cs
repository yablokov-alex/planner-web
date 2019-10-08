using System;

namespace Planner.Common.Types
{
    public interface IIdentifiable
    {
        Guid Id { get; }
    }
}