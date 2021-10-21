package com.dxc.pms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dxc.pms.dao.MaintainanceDaoImpl;

import com.dxc.pms.model.Maintainance;


@Service
public class MaintainanceServiceImpl implements MaintainanceService {
	@Autowired
	MaintainanceDaoImpl dao;
	

	@Override
	public Maintainance addMaintainance(Maintainance maintainance, int uId) {
		// TODO Auto-generated method stub
		System.out.println("Coming inside Maintainance service");
		dao.addMaintainance(maintainance, uId);
		
		return null;
	}


	@Override
	public List<Maintainance> getMaintainance(int uId, int mId) {
		// TODO Auto-generated method stub
		return dao.getMaintainance(uId, mId);
		
	}


	@Override
	public List<Maintainance> getAllMaintainance(int uId){
		
		return dao.getAllMaintainance(uId);
	}
	
	public boolean deleteMaintainance(int uId,int mId){
		dao.deleteMaintainance(uId, mId);
		return true;
		
	}


	@Override
	public boolean updateMaintainance(Maintainance maintainance,int uId, int mId) {
		// TODO Auto-generated method stub
		dao.updateMaintainance(maintainance, uId, mId);
		return false;
	}

}
