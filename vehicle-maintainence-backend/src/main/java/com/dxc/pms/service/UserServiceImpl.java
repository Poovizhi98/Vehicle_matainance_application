package com.dxc.pms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.dxc.pms.dao.UserDao;

import com.dxc.pms.model.User;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDao dao;
	

	@Override
	public boolean addUser(User user) {
		// TODO Auto-generated method stub
		System.out.println("Inside product Service and the details are"+user);
		dao.addUser(user);
		return false;
		

	}

	@Override
	public User getUser(int userId) {
		// TODO Auto-generated method stub
		return dao.getUser(userId);
	}

	@Override
	public boolean deleteUser(int userId) {
		// TODO Auto-generated method stub
		return dao.deleteUser(userId);
	}

	@Override
	public boolean updateUser(User user) {
		// TODO Auto-generated method stub
		System.out.println("Inside product Service and the details are"+user);
		return dao.updateUser(user);
	}

	@Override
	public boolean isUserExists(int userId) {
		// TODO Auto-generated method stub
		return dao.isUserExists(userId);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return dao.getAllUsers();
	}

	@Override
	public List<User> searchUserbyName(String userString) {
		// TODO Auto-generated method stub
		return dao.searchUserbyName(userString);
	}
	

}
