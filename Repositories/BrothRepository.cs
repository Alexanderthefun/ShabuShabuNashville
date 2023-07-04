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
	public class BrothRepository : BaseRepository, IBrothRepository
	{
		public BrothRepository(IConfiguration configuration) : base(configuration) { }
		public List<Broth> GetAllBroths()
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"SELECT * 
										FROM Broths";
					using (SqlDataReader reader = cmd.ExecuteReader())
					{
						var broths = new List<Broth>();
						while (reader.Read())
						{
							broths.Add(new Broth()
							{
								Id = DbUtils.GetInt(reader, "id"),
								Name = DbUtils.GetString(reader, "Name"),
								Description = DbUtils.GetString(reader, "Description"),
								CanBeVegetarian = reader.GetBoolean(reader.GetOrdinal("CanBeVegetarian")),
								CanBeGlutenFree = reader.GetBoolean(reader.GetOrdinal("CanBeGlutenFree")),
								Spicy = reader.GetBoolean(reader.GetOrdinal("Spicy"))
							});
						}
						return broths;
					}
				}
			}
		}

		public Broth GetBrothById(int id)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"SELECT Id, Name, Description, CanBeVegetarian, CanBeGlutenFree, Spicy
										FROM Broths
										WHERE Id = @id";
					DbUtils.AddParameter(cmd, "@Id", id);

					using (SqlDataReader reader = cmd.ExecuteReader())
					{
						Broth broth = null;
						if (reader.Read())
						{
							broth = new Broth()
							{
								Id = DbUtils.GetInt(reader, "id"),
								Name = DbUtils.GetString(reader, "Name"),
								Description = DbUtils.GetString(reader, "Description"),
								CanBeVegetarian = reader.GetBoolean(reader.GetOrdinal("CanBeVegetarian")),
								CanBeGlutenFree = reader.GetBoolean(reader.GetOrdinal("CanBeGlutenFree")),
								Spicy = reader.GetBoolean(reader.GetOrdinal("Spicy"))
							};
						}
						return broth;
					}
				}
			}
		}

		public Broth AddBroth(Broth broth)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"INSERT INTO Broths
												(Name, Description, CanBeVegetarian, CanBeGlutenFree, Spicy)
										OUTPUT INSERTED.ID
										VALUES (@Name, @Description, @CanBeVegetarian, @CanBeGlutenFree, @Spicy)";
					DbUtils.AddParameter(cmd, "@Name", broth.Name);
					DbUtils.AddParameter(cmd, "@Description", broth.Description);
					DbUtils.AddParameter(cmd, "@CanBeVegetarian", broth.CanBeVegetarian);
					DbUtils.AddParameter(cmd, "@CanBeGlutenFree", broth.CanBeGlutenFree);
					DbUtils.AddParameter(cmd, "@Spicy", broth.Spicy);

					broth.Id = (int)cmd.ExecuteScalar();
				}
				return broth;
			}
		}

		public void DeleteBroth(int id)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = "DELETE FROM Broths WHERE Id = @Id";
					DbUtils.AddParameter(cmd, "@Id", id);
					cmd.ExecuteNonQuery();
				}
			}
		}

		public void UpdateBroth(Broth broth)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"Update Broth
								SET Name = @Name,
									Description = @Description,
									CanBeVegetarian = @CanBeVegetarian,
									CanBeGlutenFree = @CanBeGlutenFree,
									Spicy = @Spicy
								WHERE Id = @Id";

					DbUtils.AddParameter(cmd, "@Id", broth.Id);
					DbUtils.AddParameter(cmd, "@Name", broth.Name);
					DbUtils.AddParameter(cmd, "@Description", broth.Description);
					DbUtils.AddParameter(cmd, "@CanBeVegetarian", broth.CanBeVegetarian);
					DbUtils.AddParameter(cmd, "@CanBeGlutenFree", broth.CanBeGlutenFree);
					DbUtils.AddParameter(cmd, "@Spicy", broth.Spicy);

					cmd.ExecuteNonQuery();

				}
			}
		}
	}
}
