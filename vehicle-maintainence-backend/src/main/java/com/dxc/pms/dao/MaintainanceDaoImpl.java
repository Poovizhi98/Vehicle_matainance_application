package com.dxc.pms.dao;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.dxc.pms.model.Maintainance;
import com.dxc.pms.model.User;


@Repository
public class MaintainanceDaoImpl implements MaintainanceDao {
	@Autowired
MongoTemplate mongotemplate;
	@Autowired
UserDaoImpl daoImpl;
	
	@Override
	public Maintainance addMaintainance(Maintainance maintainance, int uId) {
		System.out.println(maintainance);
		User user=daoImpl.getUser(uId);
		List<Maintainance> finalMaintainance=user.getMaintainace();
		finalMaintainance.add(maintainance);
		user.setMaintainace(finalMaintainance);
		mongotemplate.save(user);
		
		
		
		
		
		return null;
	}

	public List<Maintainance> getMaintainance(int uId, int mId) {
		// TODO Auto-generated method stub
		User user=daoImpl.getUser(uId);
		List<Maintainance> finalMaintainance=user.getMaintainace();
		List<Maintainance> list = new ArrayList<Maintainance>();
		
		for(int i=0;i<finalMaintainance.size();i++) {
			if(finalMaintainance.get(i).getMaintainID()==mId) {
				
				list.add(finalMaintainance.get(i));
				
			}
		}
		
		
		return list;
		
	}

	public List<Maintainance> getAllMaintainance(int uId) {
		User user=daoImpl.getUser(uId);
		List<Maintainance> finalMaintainance;
		finalMaintainance=user.getMaintainace();
		return finalMaintainance;
		
		
		
		
		
		
	}

	public boolean deleteMaintainance(int uId,int mId) {
		// TODO Auto-generated method stub
		User user=daoImpl.getUser(uId);
		List<Maintainance> finalMaintainance;
		finalMaintainance=user.getMaintainace();
		for(int i=0;i<finalMaintainance.size();i++) {
			if(finalMaintainance.get(i).getMaintainID()==mId) {
				finalMaintainance.remove(i);
				
				
				
			}
			System.out.println(finalMaintainance);
			user.setMaintainace(finalMaintainance);
			mongotemplate.save(user);
		}
		
		
		
		return true;
		
	}

	public boolean updateMaintainance(Maintainance maintainances,int uId, int mId) {
		User user=daoImpl.getUser(uId);
		List<Maintainance> finalMaintainance;
		finalMaintainance=user.getMaintainace();
		for(int i=0;i<finalMaintainance.size();i++) {
			if(finalMaintainance.get(i).getMaintainID()==mId) {
				finalMaintainance.remove(i);
				finalMaintainance.add(i, maintainances);;
				
				
				
			}
			System.out.println(finalMaintainance);
			user.setMaintainace(finalMaintainance);
			mongotemplate.save(user);
		}
		return false;
		// TODO Auto-generated method stub
		
	}
}

	
