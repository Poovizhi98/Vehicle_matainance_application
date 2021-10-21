package com.dxc.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.pms.model.Maintainance;
import com.dxc.pms.service.MaintainanceService;

@RestController
@RequestMapping("user/maintainance")
@CrossOrigin(origins= {"http://localhost:3000","https://localhost:4200"})
public class Controller_maintainance {
	@Autowired
	MaintainanceService service;
	@PostMapping("/{userId}")
	public ResponseEntity<Maintainance> saveMaintainance(@RequestBody Maintainance maintainances,@PathVariable("userId")int uId) {
		System.out.println("Saving a maintainance record is working");
		System.out.println(maintainances);
		 service.addMaintainance(maintainances, uId);
		 return new ResponseEntity<Maintainance>(HttpStatus.OK);
			
		}
	@GetMapping("/{userId}/{maintainId}")
	public ResponseEntity<List<Maintainance>> getMaintainance(@PathVariable("userId")int uId,@PathVariable("maintainId")int mId){
		List<Maintainance> list=service.getMaintainance(uId, mId);
		return new ResponseEntity<List<Maintainance>>(list,HttpStatus.OK);
		
	}
	@GetMapping("/{userId}")
	public ResponseEntity<List<Maintainance>> getAllMaintainance(@PathVariable("userId")int uId){
		List<Maintainance> list=service.getAllMaintainance(uId);
		return new ResponseEntity<List<Maintainance>>(list,HttpStatus.OK);
	}
	@DeleteMapping("/{userId}/{maintainId}")
	public ResponseEntity<Maintainance> deleteMaintainance(@PathVariable("userId")int uId,@PathVariable("maintainId")int mId){
		service.deleteMaintainance(uId, mId);
		return new ResponseEntity<Maintainance>(HttpStatus.OK);
		
	}
	@PutMapping("/{userId}/{maintainId}")
	public ResponseEntity<Maintainance> updateMaintainance(@RequestBody Maintainance list,@PathVariable("userId")int uId,@PathVariable("maintainId")int mId){
		service.updateMaintainance(list, uId, mId);
		return new ResponseEntity<Maintainance>(HttpStatus.OK);
		
	}
	

}
