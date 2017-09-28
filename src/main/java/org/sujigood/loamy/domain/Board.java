package org.sujigood.loamy.domain;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties(ignoreUnknown = true)
public class Board extends Pageable {
	public int seqNum;
	public Integer seqNumObj;
	public String boardId; 
	public int objNum;
	public Integer objNumObj;
	public String author;   
	public String subject;   
	public String subjectCategory;
	public String subjectMain;
	public String passwd;   
	public String category;   
	public String regDate;   
	public String editDate;
	public int memoNum; 
	public Integer memoNumObj;
	public int readNum;  
	public Integer readNumObj;
	public String ipReg;   
	public String ipEdit;   
	public String usrAgentReg;   
	public String usrAgentEdit;   
	public String contents;
	private List<BoardFile> files;
	public int isNew;
	public String docType;
//	public List<CommonsMultipartFile> uploadFileList;
//	public List<Integer> fileNumList;
//	public int commentNum;  
//	public String keyword;
//	public int search_seq;
	

	public int getSeqNum() {
		return seqNum;
	}
	public void setSeqNum(int seqNum) {
		this.seqNum = seqNum;
		//this.seqNumObj = new Integer(seqNum);
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
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
		
		int index = subject.indexOf("]");
		if (index > 0) {
			String[] subjects = subject.split("]");
			this.subjectCategory = subjects[0].trim() +"]";
			if (subjects.length > 1) {
				this.subjectMain = subjects[1].trim();
			} else {
				this.subjectMain = "";
			}
			//String returnStr = "<font size=2>"+ subjects[0] +"]</font>";
			//returnStr += subjects[1];
		} else {
			this.subjectCategory = "";
			this.subjectMain = subject;
		}
	}
	
	public String getSubjectCategory() {
		return subjectCategory;
	}
	public String getSubjectMain() {
		return subjectMain;
	}

	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	public String getEditDate() {
		return editDate;
	}
	public void setEditDate(String editDate) {
		this.editDate = editDate;
	}
	public int getMemoNum() {
		return memoNum;
	}
	public void setMemoNum(int memoNum) {
		this.memoNum = memoNum;
		this.memoNumObj = new Integer(memoNum);
	}
	public int getReadNum() {
		return readNum;
	}
	public void setReadNum(int readNum) {
		this.readNum = readNum;
		this.readNumObj = new Integer(readNum);
	}
	public String getIpReg() {
		return ipReg;
	}
	public void setIpReg(String ipReg) {
		this.ipReg = ipReg;
	}
	public String getIpEdit() {
		return ipEdit;
	}
	public void setIpEdit(String ipEdit) {
		this.ipEdit = ipEdit;
	}
	public String getUsrAgentReg() {
		return usrAgentReg;
	}
	public void setUsrAgentReg(String usrAgentReg) {
		this.usrAgentReg = usrAgentReg;
	}
	public String getUsrAgentEdit() {
		return usrAgentEdit;
	}
	public void setUsrAgentEdit(String usrAgentEdit) {
		this.usrAgentEdit = usrAgentEdit;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public Integer getSeqNumObj() {
		return seqNumObj;
	}
	public Integer getObjNumObj() {
		return objNumObj;
	}
	public Integer getMemoNumObj() {
		return memoNumObj;
	}
	public Integer getReadNumObj() {
		return readNumObj;
	}
	public List<BoardFile> getFiles() {
		return files;
	}
	public void setFiles(List<BoardFile> files) {
		this.files = files;
	}
	public int getIsNew() {
		return isNew;
	}
	public void setIsNew(int isNew) {
		this.isNew = isNew;
	}

	public String getDocType() {
		return docType;
	}
	public void setDocType(String docType) {
		this.docType = docType;
	}
//	public List<CommonsMultipartFile> getUploadFileList() {
//		return uploadFileList;
//	}
//	public void setUploadFileList(List<CommonsMultipartFile> uploadFileList) {
//		this.uploadFileList = uploadFileList;
//	}
//	public List<Integer> getFileNumList() {
//		return fileNumList;
//	}
//	public void setFileNumList(List<Integer> fileNumList) {
//		this.fileNumList = fileNumList;
//	}
//	public int getCommentNum() {
//		return commentNum;
//	}
//	public void setCommentNum(int commentNum) {
//		this.commentNum = commentNum;
//	}
//	public String getKeyword() {
//		return keyword;
//	}
//	public void setKeyword(String keyword) {
//		this.keyword = keyword;
//	}
//	public int getSearch_seq() {
//		return search_seq;
//	}
//	public void setSearch_seq(int search_seq) {
//		this.search_seq = search_seq;
//	}
	@Override
	public String toString() {
		return "Board [seqNum=" + seqNum + ", seqNumObj=" + seqNumObj
				+ ", board_id=" + boardId + ", objNum=" + objNum
				+ ", objNumObj=" + objNumObj + ", author=" + author
				+ ", subject=" + subject + ", subjectCategory="
				+ subjectCategory + ", subjectMain=" + subjectMain
				+ ", passwd=" + passwd + ", category=" + category
				+ ", regDate=" + regDate + ", editDate=" + editDate
				+ ", memoNum=" + memoNum + ", memoNumObj=" + memoNumObj
				+ ", readNum=" + readNum + ", readNumObj=" + readNumObj
				+ ", ip_reg=" + ipReg + ", ip_edit=" + ipEdit
				+ ", usrAgent_reg=" + usrAgentReg + ", usrAgent_edit="
				+ usrAgentEdit + ", contents=" + contents + ", boardFileList=";
//				+ Arrays.toString(boardFileList)
//				+ ", isNew=" + isNew + ", docType=" + docType
//				+ ", uploadFileList=" + uploadFileList + ", fileNumList="
//				+ fileNumList + ", commentNum=" + commentNum + ", keyword="
//				+ keyword + "]";
	}
}
