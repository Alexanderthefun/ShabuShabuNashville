using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using ShabuShabu.Models;
using ShabuShabu.Utils;

namespace ShabuShabu.Repositories
{
	public class DrinkRepository : BaseRepository, IDrinkRepository
	{
		public DrinkRepository(IConfiguration configuration) : base(configuration) { }
		public List<Drink> GetAllDrinks()
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"SELECT * 
										FROM Drinks";
					using (SqlDataReader reader = cmd.ExecuteReader())
					{
						var drinks = new List<Drink>();
						while (reader.Read())
						{
							drinks.Add(new Drink()
							{
								Id = DbUtils.GetInt(reader, "id"),
								Name = DbUtils.GetString(reader, "Name"),
								HasDairy = reader.GetBoolean(reader.GetOrdinal("HasDairy")),
								Type = DbUtils.GetString(reader, ("Type")),
								HasAlcohol = reader.GetBoolean(reader.GetOrdinal("HasAlcohol")),
								Price = reader.GetDouble(reader.GetOrdinal("Price"))
							});
						}
						return drinks;
					}
				}
			}
		}

		public Drink GetDrinkById(int id)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"SELECT Id, Name, HasDairy, Type, HasAlcohol, Price
										FROM Drinks
										WHERE Id = @id";
					DbUtils.AddParameter(cmd, "@Id", id);

					using (SqlDataReader reader = cmd.ExecuteReader())
					{
						Drink broth = null;
						if (reader.Read())
						{
							broth = new Drink()
							{
								Id = DbUtils.GetInt(reader, "id"),
								Name = DbUtils.GetString(reader, "Name"),
								HasDairy = reader.GetBoolean(reader.GetOrdinal("HasDairy")),
								Type = DbUtils.GetString(reader, "Type"),
								HasAlcohol = reader.GetBoolean(reader.GetOrdinal("HasAlcohol")),
								Price = reader.GetDouble(reader.GetOrdinal("Price"))
							};
						}
						return broth;
					}
				}
			}
		}

		public Drink AddDrink(Drink drink)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"INSERT INTO Drinks
												(Name, HasDairy, Type, HasAlcohol, Price)
										OUTPUT INSERTED.ID
										VALUES (@Name, @HasDairy, @Type, @HasAlcohol, @Price)";
					DbUtils.AddParameter(cmd, "@Name", drink.Name);
					DbUtils.AddParameter(cmd, "@HasDairy", drink.HasDairy);
					DbUtils.AddParameter(cmd, "@Type", drink.Type);
					DbUtils.AddParameter(cmd, "@HasAlcohol", drink.HasAlcohol);
					DbUtils.AddParameter(cmd, "@Price", drink.Price);

					drink.Id = (int)cmd.ExecuteScalar();
				}
				return drink;
			}
		}

		public void DeleteDrink(int id)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = "DELETE FROM Drinks WHERE Id = @Id";
					DbUtils.AddParameter(cmd, "@Id", id);
					cmd.ExecuteNonQuery();
				}
			}
		}

		public void UpdateDrink(Drink drink)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"Update Drinks
								SET Name = @Name,
									HasDairy = @HasDairy,
									Type = @Type,
									HasAlcohol = @HasAlcohol,
									Price = @Price
								WHERE Id = @Id";

					DbUtils.AddParameter(cmd, "@Id", drink.Id);
					DbUtils.AddParameter(cmd, "@Name", drink.Name);
					DbUtils.AddParameter(cmd, "@HasDairy", drink.HasDairy);
					DbUtils.AddParameter(cmd, "@Type", drink.Type);
					DbUtils.AddParameter(cmd, "@HasAlcohol", drink.HasAlcohol);
					DbUtils.AddParameter(cmd, "@Price", drink.Price);

					cmd.ExecuteNonQuery();

				}
			}
		}
	}
}

