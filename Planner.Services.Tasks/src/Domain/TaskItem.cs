using System;
using Planner.Common.Types;

namespace Planner.Services.Tasks.Domain
{
    public class TaskItem : IIdentifiable
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }

        protected TaskItem()
        {
        }

        public TaskItem(Guid id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}