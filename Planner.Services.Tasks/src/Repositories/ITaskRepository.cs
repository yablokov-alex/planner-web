using System;
using System.Threading.Tasks;
using Planner.Services.Tasks.Domain;

namespace Planner.Services.Tasks.Repositories
{
    public interface ITaskRepository
    {
        Task<TaskItem> GetAsync(Guid id);
        Task AddAsync(TaskItem task);
        Task UpdateAsync(TaskItem task);
        Task DeleteAsync(Guid id);
    }
}