package org.sujigood.loamy.domain;

import java.util.Date;
public class BoardCategoryInfo {
	
	
	public String category_id;              
	public String category_name;              
	public String mem_id;
	public Date regDate;              
	public String category_group;
	
	public String getCategory_id() {
		return category_id;
	}
	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}
	public String getCategory_name() {
		return category_name;
	}
	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}
	public String getMem_id() {
		return mem_id;
	}
	public void setMem_id(String mem_id) {
		this.mem_id = mem_id;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public String getCategory_group() {
		return category_group;
	}
	public void setCategory_group(String category_group) {
		this.category_group = category_group;
	}

}
