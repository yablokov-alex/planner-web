using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Planner.Api.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        [HttpGet]
        public IEnumerable<Task> GetTasks()
        {
            return new List<Task>
            {
                new Task
                {
                    TaskId = Guid.NewGuid().ToString(),
                    Order = 1,
                    Name = "Купить хлеб",
                    IsChecked = true,
                    Type = TaskType.Day
                },
                new Task
                {
                    TaskId = Guid.NewGuid().ToString(),
                    Order = 2,
                    Name = "Помыть посуду",
                    IsChecked = true,
                    Type = TaskType.Day
                },
                new Task
                {
                    TaskId = Guid.NewGuid().ToString(),
                    Order = 3,
                    Name = "Заварить чай",
                    IsChecked = false,
                    Type = TaskType.Day
                },
                new Task
                {
                    TaskId = Guid.NewGuid().ToString(),
                    Order = 4,
                    Name = "Покушать",
                    IsChecked = false,
                    Type = TaskType.Day
                },
                new Task
                {
                    TaskId = Guid.NewGuid().ToString(),
                    Order = 5,
                    Name = "Поспать",
                    IsChecked = false,
                    Type = TaskType.Day
                }
            };
        }
    }

    public class Task
    {
        public string TaskId { get; set; }
        
        public string Name { get; set; }
        
        public int Order { get; set; }
        
        public bool IsChecked { get; set; }
        
        public TaskType Type { get; set; }
    }

    public enum TaskType
    {
        Inbox,
        Delegated,
        Day,
        Week,
        Month
    }
}