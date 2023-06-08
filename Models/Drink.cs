using System;

namespace ShabuShabu.Models
{
	public class Drink
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public bool HasDairy { get; set; }
		public string Type { get; set; }
		public bool HasAlcohol { get; set; }
		public double Price { get; set; }
	}
}
