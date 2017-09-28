package org.sujigood.loamy.domain;

public class Pageable {
	public int page = 1;
	public int totalPage = 1;
    public int totalCount = 0;
    public int pageSize = 10;
    public int currentRowNum = 0;
    public int pageCountPerPage = 10;
    public String sort;

    public void setTotalPage(int totalPage) {
    	this.totalPage = totalPage;
    	if (totalCount%pageSize == 0){
            this.totalPage = totalPage-1;
        }    	
	}
    
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getCurrentRowNum() {
		return currentRowNum;
	}
	public void setCurrentRowNum(int currentRowNum) {
		this.currentRowNum = currentRowNum;
	}
	public int getPageCountPerPage() {
		return pageCountPerPage;
	}
	public void setPageCountPerPage(int pageCountPerPage) {
		this.pageCountPerPage = pageCountPerPage;
	}
	public String getSort(){
		return this.sort;
	}
	public void setSort(String sort){
		this.sort = sort;
	}
}
