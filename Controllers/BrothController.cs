﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShabuShabu.Models;
using ShabuShabu.Repositories;
using System.Security.Claims;

namespace ShabuShabu.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
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

		// ...::: POSTS :::...
		[HttpPost("addBroth")]
		public IActionResult AddBroth(Broth broth)
		{
			_brothRepository.AddBroth(broth);
			return Ok(broth);
		}


		// ...::: PUTS :::...
		[HttpPut("broth/{id}")]
		public IActionResult UpdateFood(Broth broth, int id)
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