using backend_app.Models;

public interface IDataContext
{
    Task<List<Item>> GetItemsAsync();
}