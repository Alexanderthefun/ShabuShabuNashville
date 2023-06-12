using Microsoft.AspNetCore.Mvc;
using ShabuShabu.Models;
using ShabuShabu.Repositories;

namespace ShabuShabu.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class DrinkController : ControllerBase
	{
		private readonly IDrinkRepository _drinkRepository;

		public DrinkController(IDrinkRepository drinkRepository)
		{
			_drinkRepository = drinkRepository;
		}

		[HttpGet("drinks")]
		public IActionResult GetAllDrinks()
		{
			var drinkResult = _drinkRepository.GetAllDrinks();

			if (drinkResult != null)
			{
				return Ok(drinkResult);
			}
			else
			{
				return Ok(new { data = (object)null });
			}
		}

		[HttpPost("addDrink")]
		public IActionResult AddDrink(Drink drink)
		{
			_drinkRepository.AddDrink(drink);
			return Ok(drink);
		}

		[HttpPut("drink/{id}")]
		public IActionResult UpdateDrink(Drink drink, int id)
		{
			if (id != drink.Id)
			{
				return BadRequest();
			}

			_drinkRepository.UpdateDrink(drink);
			return NoContent();
		}

		[HttpDelete("deleteDrink/{drinkId}")]
		public IActionResult DeleteDrink(int InvId, int drinkId)
		{
			_drinkRepository.DeleteDrink(drinkId);
			return NoContent();
		}
	}
}
