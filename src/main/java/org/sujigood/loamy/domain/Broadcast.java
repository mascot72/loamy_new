package org.sujigood.loamy.domain;

public class Broadcast extends Board {

	public String preacher;   
	public String bible;   
	public String preachDate;   
	public String videoUrl; 
	public String subVideoUrl;
	public String mp3Url;
	public String praise;
	public String hymns;
	public int praiseNum;
	public int hymnsNum;
	public String subContents1;
	public String subContents2;
	public String thumbnailUrl;
	public int orderNum;
	
	public String getPreacher() {
		return preacher;
	}
	public String getBible() {
		return bible;
	}
	public String getPreachDate() {
		return preachDate;
	}
	public String getVideoUrl() {
		return videoUrl;
	}
	public String getMp3Url() {
		return mp3Url;
	}
	public void setPreacher(String preacher) {
		this.preacher = preacher;
	}
	public void setBible(String bible) {
		this.bible = bible;
	}
	public void setPreachDate(String preachDate) {
		this.preachDate = preachDate;
	}
	public void setVideoUrl(String videoUrl) {
		this.videoUrl = videoUrl;
	}
	public void setMp3Url(String mp3Url) {
		this.mp3Url = mp3Url;
	}
	public String getSubVideoUrl() {
		return subVideoUrl;
	}
	public void setSubVideoUrl(String subVideoUrl) {
		this.subVideoUrl = subVideoUrl;
	}
	public String getPraise() {
		return praise;
	}
	public void setPraise(String praise) {
		this.praise = praise;
	}
	public String getHymns() {
		return hymns;
	}
	public void setHymns(String hymns) {
		this.hymns = hymns;
	}
	public int getPraiseNum() {
		return praiseNum;
	}
	public void setPraiseNum(int praiseNum) {
		this.praiseNum = praiseNum;
	}
	public int getHymnsNum() {
		return hymnsNum;
	}
	public void setHymnsNum(int hymnsNum) {
		this.hymnsNum = hymnsNum;
	}
	public String getSubContents1() {
		return subContents1;
	}
	public void setSubContents1(String subContents1) {
		this.subContents1 = subContents1;
	}
	public String getSubContents2() {
		return subContents2;
	}
	public void setSubContents2(String subContents2) {
		this.subContents2 = subContents2;
	}
	public String getThumbnailUrl() {
		return thumbnailUrl;
	}
	public void setThumbnailUrl(String thumbnailUrl) {
		this.thumbnailUrl = thumbnailUrl;
	}

	public int getOrderNum() {
		return orderNum;
	}
	public void setOrderNum(int orderNum) {
		this.orderNum = orderNum;
	}

	/**
	 * 간증의 경우, 코드값을 각 간증 제목으로 변경(검색을 위함) 
	 */
	public void setChgSubjectForTestimony() {
		
		if ("1".equals(this.getSubject())) {	// 1:양육수료간증
			this.setSubject("양육수료간증");
		} else if ("2".equals(this.getSubject())) {	// 2:세례간증
			this.setSubject("세례간증");
		} else if ("3".equals(this.getSubject())) {	// 3:복음인카운터간증
			this.setSubject("복음인카운터간증");
		} else if ("4".equals(this.getSubject())) {	// 4:제자훈련간증
			this.setSubject("제자훈련수료간증");
		} else if ("5".equals(this.getSubject())) {	// 5:특별간증
			this.setSubject("Etc");
		} else if ("0".equals(this.getSubject())) {	// 0:전체출력
			this.setSubject("");
		}
	}
}
