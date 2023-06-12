using ShabuShabu.Models;
using System.Collections.Generic;

namespace ShabuShabu.Repositories
{
	public interface IDrinkRepository
	{
		Drink AddDrink(Drink drink);
		void DeleteDrink(int id);
		List<Drink> GetAllDrinks();
		void UpdateDrink(Drink drink);
	}
}