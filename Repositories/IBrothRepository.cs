using ShabuShabu.Models;
using System.Collections.Generic;

namespace ShabuShabu.Repositories
{
	public interface IBrothRepository
	{
		Broth AddBroth(Broth broth);
		void DeleteBroth(int id);
		List<Broth> GetAllBroths();
		void UpdateBroth(Broth broth);
	}
}