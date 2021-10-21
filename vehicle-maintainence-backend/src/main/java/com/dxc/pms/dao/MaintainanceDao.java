package com.dxc.pms.dao;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dxc.pms.model.Maintainance;

public interface MaintainanceDao {
	
	public Maintainance addMaintainance(Maintainance maintainance,int uId);
	public List<Maintainance> getMaintainance(int uId, int mId);
	public List<Maintainance> getAllMaintainance(int uId);
	public boolean deleteMaintainance(int uId,int mId);
	public boolean updateMaintainance(Maintainance maintainance,int uId, int mId);

}
