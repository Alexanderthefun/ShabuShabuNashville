using ShabuShabu.Models;
using System.Collections.Generic;

namespace ShabuShabu.Repositories
{
	public interface IDrinkRepository
	{
		Drink AddDrink(Drink drink);
		void DeleteDrink(int id);
		List<Drink> GetAllDrinks();
		Drink GetDrinkById(int id);
		void UpdateDrink(Drink drink);
	}
}