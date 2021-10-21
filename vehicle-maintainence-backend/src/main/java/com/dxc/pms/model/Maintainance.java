package com.dxc.pms.model;

import org.springframework.data.annotation.Id;

public class Maintainance {
	@Id
	private int maintainID;
	private String service;
	private String date;
	private double cost;
	private double mileage;
	
	
		public int getMaintainID() {
		return maintainID;
	}
	public void setMaintainID(int maintainID) {
		this.maintainID = maintainID;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public double getMileage() {
		return mileage;
	}
	public void setMileage(double mileage) {
		this.mileage = mileage;
	}
	
		@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(cost);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + maintainID;
		temp = Double.doubleToLongBits(mileage);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((service == null) ? 0 : service.hashCode());
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
		Maintainance other = (Maintainance) obj;
		if (Double.doubleToLongBits(cost) != Double.doubleToLongBits(other.cost))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (maintainID != other.maintainID)
			return false;
		if (Double.doubleToLongBits(mileage) != Double.doubleToLongBits(other.mileage))
			return false;
		if (service == null) {
			if (other.service != null)
				return false;
		} else if (!service.equals(other.service))
			return false;
		return true;
	}
		public Maintainance(int maintainID, String service, String date, double cost, int mileage) {
		super();
		this.maintainID = maintainID;
		this.service = service;
		this.date = date;
		this.cost = cost;
		this.mileage = mileage;
	}
	public Maintainance() {
		super();
		this.maintainID = 0;
		this.service = "";
		this.date = "";
		this.cost = 0;
		this.mileage = 0;
	}
	@Override
	public String toString() {
		return "Maintainance [maintainID=" + maintainID + ", service=" + service + ", date=" + date + ", cost=" + cost
				+ ", mileage=" + mileage + "]";
	}
	
	

}
