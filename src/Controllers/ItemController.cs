using backend_app.Data.Repositories;
using backend_app.Interfaces;
using backend_app.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace backend_app.Controllers
{
    [Route("api")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemService _itemService;
        public ItemController(IItemService itemService) { 
            _itemService = itemService;
        }

        [HttpGet]
        [Route("items/all")]
        public async Task<IActionResult> GetAllItems()
        {
            var items = await _itemService.GetAllItemsAsync();
            return Ok(items);
        }

        [HttpGet]
        [Route("item/{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _itemService.GetItemByIdAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpPost]
        [Route("item")]
        public async Task<IActionResult> CreateItem([FromBody] Item item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _itemService.AddItemAsync(item);
            return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item);
        }

        [HttpPut]
        [Route("item/{id}")]
        public async Task<IActionResult> UpdateItem(int id,[FromBody] Item item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            try
            {
                await _itemService.UpdateItemAsync(item);
            }
            catch (Exception ex)
            {
                // Log the exception
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete]
        [Route("item/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _itemService.GetItemByIdAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            await _itemService.DeleteItemAsync(id);
            return Ok();
        }

    }
}
