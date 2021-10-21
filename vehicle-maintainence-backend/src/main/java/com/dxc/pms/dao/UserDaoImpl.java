package com.dxc.pms.dao;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;



import com.dxc.pms.model.User;
import com.mongodb.WriteResult;
import com.mongodb.bulk.WriteRequest;
@Repository
public class UserDaoImpl implements UserDao {
	@Autowired
	MongoTemplate mongotemplate;

	@Override
	public boolean addUser(User user) {
		System.out.println("Inside product Dao and the details are"+user);
		mongotemplate.save(user);
		return false;
	}


	@Override
	public User getUser(int userID) {
		mongotemplate.findById(userID, User.class,"user");
		return mongotemplate.findById(userID, User.class,"user");
	}


	@Override
	public boolean deleteUser(int userID) {
		User object=new User();
		object.setUserId(userID);
		WriteResult result=mongotemplate.remove(object);
		System.out.println(result);
		int  rowsAffected=result.getN();
		if(rowsAffected==0)
		return false;
		else
			return true;
	}


	@Override
	public boolean updateUser(User user) {
		System.out.println("Inside product Dao and the details are"+user);
		if(isUserExists(user.getUserId())) {
			mongotemplate.save(user);
			System.out.println("Update successfull");
			return true;
		}
		else {
			System.out.println("Update unsuccessfull because user does not exist");
			return false;
		}
//		
	
	}


	@Override
	public boolean isUserExists(int userID) {
		User user=mongotemplate.findById(userID, User.class, "user");
		if(user==null) {
			return false;
		}
		else
		return true;

	}


	@Override
	public List<User> getAllUsers() {
		return mongotemplate.findAll(User.class);
		
	}


	@Override
	public List<User> searchUserbyName(String userName) {
		Query query=new Query();
		query.addCriteria(Criteria.where("userName").is(userName));
		List<User> list=mongotemplate.find(query, User.class);
		System.out.println(list);
		return list;
		
	}

}
