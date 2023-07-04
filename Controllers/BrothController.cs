using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShabuShabu.Models;
using ShabuShabu.Repositories;
using System.Security.Claims;

namespace ShabuShabu.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BrothController : ControllerBase
	{
		private readonly IBrothRepository _brothRepository;

		public BrothController(IBrothRepository brothRepository)
		{
			_brothRepository = brothRepository;
		}

		// ...::: GETS :::...
		[HttpGet("broths")]
		public IActionResult GetBroths()
		{
			var brothResult = _brothRepository.GetAllBroths();

			if (brothResult != null)
			{
				return Ok(brothResult);
			}
			else
			{
				return Ok(new { data = (object)null });
			}
		}

		[HttpGet("{id}")]
		public IActionResult GetBroth(int id)
		{
			var brothResult = _brothRepository.GetBrothById(id);
			
			if (brothResult != null)
			{
				return Ok(brothResult);
			}
			else
			{
				return Ok(new { data = (object)null });
			}
		}

		// ...::: POSTS :::...
		[HttpPost("addBroth")]
		public IActionResult AddBroth(Broth broth)
		{
			_brothRepository.AddBroth(broth);
			return Ok(broth);
		}


		// ...::: PUTS :::...
		[HttpPut("broth/{id}")]
		public IActionResult UpdateBroth(Broth broth, int id)
		{
			if (id != broth.Id)
			{
				return BadRequest();
			}

			_brothRepository.UpdateBroth(broth);
			return NoContent();
		}


		// ...::: DELETES :::...
		[HttpDelete("deleteBroth/{brothId}")]
		public IActionResult DeleteBroth(int InvId, int brothId)
		{
			_brothRepository.DeleteBroth(brothId);
			return NoContent();
		}
	}
}
