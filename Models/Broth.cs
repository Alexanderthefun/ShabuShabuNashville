using System;

namespace ShabuShabu.Models
{
	public class Broth
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool CanBeVegetarian { get; set; }
		public bool CanBeGlutenFree { get; set; }
		public bool Spicy { get; set; }
	}
}
