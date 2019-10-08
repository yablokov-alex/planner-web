using System;
using System.Threading.Tasks;
using Planner.Common.Mongo;
using Planner.Services.Tasks.Domain;

namespace Planner.Services.Tasks.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly IMongoRepository<TaskItem> _repository;

        public TaskRepository(IMongoRepository<TaskItem> repository)
        {
            _repository = repository;
        }

        public async Task<TaskItem> GetAsync(Guid id)
            => await _repository.GetAsync(id);

        public async Task AddAsync(TaskItem task)
            => await _repository.AddAsync(task);

        public async Task UpdateAsync(TaskItem task)
            => await _repository.UpdateAsync(task);

        public async Task DeleteAsync(Guid id)
            => await _repository.DeleteAsync(id);
    }
}