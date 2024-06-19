using backend_app.Models;

namespace backend_app.Interfaces
{
    public interface IItemService
    {
        Task AddItemAsync(Item item);
        Task DeleteItemAsync(int id);
        Task<IEnumerable<Item>> GetAllItemsAsync();
        Task<Item> GetItemByIdAsync(int id);
        Task UpdateItemAsync(Item item);
    }
}
