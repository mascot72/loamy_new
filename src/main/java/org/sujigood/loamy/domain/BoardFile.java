package org.sujigood.loamy.domain;

public class BoardFile {
	public int seqNum;
	public Integer seqNumObj;
	public String boardId;              
	public int objNum;
	public Integer objNumObj;
	public int boardSeq;
	public Integer boardSeqObj;
	public int fileseq;
	public Integer fileseqObj;
	public String filename;   
	public String orgFilename;
	public int filesize;
	public Integer filesizeObj;
	public int filedownload;
	public Integer filedownloadObj;
	public String regDate;
	public String fileType;

	public int getSeqNum() {
		return seqNum;
	}
	public void setSeqNum(int seqNum) {
		this.seqNum = seqNum;
		this.seqNumObj = new Integer(seqNum);
	}
	public String getBoardId() {
		return boardId;
	}
	public void setBoardId(String boardId) {
		this.boardId = boardId;
	}
	public int getObjNum() {
		return objNum;
	}
	public void setObjNum(int objNum) {
		this.objNum = objNum;
		this.objNumObj = new Integer(objNum);
	}
	public int getBoardSeq() {
		return boardSeq;
	}
	public void setBoardSeq(int boardSeq) {
		this.boardSeq = boardSeq;
		this.boardSeqObj = new Integer(boardSeq);
	}
	public int getFileseq() {
		return fileseq;
	}
	public void setFileseq(int fileseq) {
		this.fileseq = fileseq;
		this.fileseqObj = new Integer(fileseq);
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public int getFilesize() {
		return filesize;
	}
	public void setFilesize(int filesize) {
		this.filesize = filesize;
		this.filesizeObj = new Integer(filesize);
	}
	public int getFiledownload() {
		return filedownload;
	}
	public void setFiledownload(int filedownload) {
		this.filedownload = filedownload;
		this.filedownloadObj = new Integer(filedownload);
	}
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	public Integer getSeqNumObj() {
		return seqNumObj;
	}
	public Integer getObjNumObj() {
		return objNumObj;
	}
	public Integer getBoardSeqObj() {
		return boardSeqObj;
	}
	public Integer getFileseqObj() {
		return fileseqObj;
	}
	public Integer getFilesizeObj() {
		return filesizeObj;
	}
	public Integer getFiledownloadObj() {
		return filedownloadObj;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public String getOrgFilename() {
		return orgFilename;
	}
	public void setOrgFilename(String orgFilename) {
		this.orgFilename = orgFilename;
	}
}
