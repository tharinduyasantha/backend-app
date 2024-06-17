using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using backend_app.Models;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;

public class DataContext : DbContext
{

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DbSet<Item> Items { get; set; }

    //public async Task<List<Item>> GetItemsAsync()
    //{
    //    var items = new List<Item>();

    //    using (var connection = new SqlConnection(_connectionString))
    //    {
    //        await connection.OpenAsync();
    //        using (var command = new SqlCommand("SELECT Id, Name FROM Items", connection))
    //        {
    //            using (var reader = await command.ExecuteReaderAsync())
    //            {
    //                while (await reader.ReadAsync())
    //                {
    //                    items.Add(new Item
    //                    {
    //                        Id = reader.GetInt32(0),
    //                        Name = reader.GetString(1)
    //                    });
    //                }
    //            }
    //        }
    //    }

    //    return items;
    //}
}
