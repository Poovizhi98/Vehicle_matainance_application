package com.dxc.pms.dao;

import java.util.List;


import com.dxc.pms.model.User;

public interface UserDao {
	public boolean addUser(User user);
	public User getUser(int userID);
	public boolean deleteUser(int userID);
	public boolean updateUser(User user);
	public boolean isUserExists(int userID);
	public List<User> getAllUsers();
	public List<User> searchUserbyName(String userName);
	

}
