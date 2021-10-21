package com.dxc.pms.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
@Id
	private int userId;
	private String userName;
	private String email;
	private double contactNumber;
	private int pinCode;
	
	private List<Maintainance> maintainace;



	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public double getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(double contactNumber) {
		this.contactNumber = contactNumber;
	}

	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public List<Maintainance> getMaintainace() {
		return maintainace;
	}

	public void setMaintainace(List<Maintainance> maintainace) {
		this.maintainace = maintainace;
	}
	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(contactNumber);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((maintainace == null) ? 0 : maintainace.hashCode());
		result = prime * result + pinCode;
		result = prime * result + userId;
		result = prime * result + ((userName == null) ? 0 : userName.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (Double.doubleToLongBits(contactNumber) != Double.doubleToLongBits(other.contactNumber))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (maintainace == null) {
			if (other.maintainace != null)
				return false;
		} else if (!maintainace.equals(other.maintainace))
			return false;
		if (pinCode != other.pinCode)
			return false;
		if (userId != other.userId)
			return false;
		if (userName == null) {
			if (other.userName != null)
				return false;
		} else if (!userName.equals(other.userName))
			return false;
		return true;
	}

	public User(int userId, String userName, String email, double contactNumber, int pinCode,
			List<Maintainance> maintainace) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.email = email;
		this.contactNumber = contactNumber;
		this.pinCode = pinCode;
		this.maintainace = maintainace;
	}

	public User() {
		super();
		this.userId = 0;
		this.userName = "NA";
		this.email = "NA";
		this.contactNumber = 0;
		this.pinCode = 0;
		this.maintainace = null;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", email=" + email + ", contactNumber="
				+ contactNumber + ", pinCode=" + pinCode + ", maintainace=" + maintainace + "]";
	}
	

	

	
}
