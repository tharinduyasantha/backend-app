using backend_app.Models;

namespace backend_app.Interfaces
{
    public interface IItemRepository
    {
        Task AddAsync(Item item);
        Task DeleteAsync(int id);
        Task<IEnumerable<Item>> GetAllAsync();
        Task<Item> GetByIdAsync(int id);
        Task UpdateAsync(Item item);
    }
}