package com.dxc.pms.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dxc.pms.model.Maintainance;


public interface MaintainanceService {

	public Maintainance addMaintainance(Maintainance maintainance,int uId);
	public List<Maintainance> getMaintainance(int uId, int mId);
	public List<Maintainance> getAllMaintainance(int uId);
	public boolean deleteMaintainance(int uId,int rId);
	public boolean updateMaintainance(Maintainance maintainance,int uId, int mId);


}
