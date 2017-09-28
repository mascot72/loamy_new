package org.sujigood.loamy.domain;

/**
 * Created by june713 on 2016. 11. 14..
 */
public class BoardAdmin {
    private String boardId;
    private String boardName;
    private String skin;
    private Integer totalCount;
    private Integer todayCount;
    private String directoryPath;
    private Integer listLevel;
    private Integer viewLevel;
    private Integer secretLevel;
    private Integer writeLevel;
    private Integer replyLevel;
    private Integer noticeWriteLevel;
    private Integer memoWriteLevel;
    private Integer htmlLevel;
    private Integer deleteLevel;
    private Integer articleNum;
    private String curDate;
    private String regDate;
    private String editDate;

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getBoardName() {
        return boardName;
    }

    public void setBoardName(String boardName) {
        this.boardName = boardName;
    }

    public String getSkin() {
        return skin;
    }

    public void setSkin(String skin) {
        this.skin = skin;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public Integer getTodayCount() {
        return todayCount;
    }

    public void setTodayCount(Integer todayCount) {
        this.todayCount = todayCount;
    }

    public String getDirectoryPath() {
        return directoryPath;
    }

    public void setDirectoryPath(String directoryPath) {
        this.directoryPath = directoryPath;
    }

    public Integer getListLevel() {
        return listLevel;
    }

    public void setListLevel(Integer listLevel) {
        this.listLevel = listLevel;
    }

    public Integer getViewLevel() {
        return viewLevel;
    }

    public void setViewLevel(Integer viewLevel) {
        this.viewLevel = viewLevel;
    }

    public Integer getSecretLevel() {
        return secretLevel;
    }

    public void setSecretLevel(Integer secretLevel) {
        this.secretLevel = secretLevel;
    }

    public Integer getWriteLevel() {
        return writeLevel;
    }

    public void setWriteLevel(Integer writeLevel) {
        this.writeLevel = writeLevel;
    }

    public Integer getReplyLevel() {
        return replyLevel;
    }

    public void setReplyLevel(Integer replyLevel) {
        this.replyLevel = replyLevel;
    }

    public Integer getNoticeWriteLevel() {
        return noticeWriteLevel;
    }

    public void setNoticeWriteLevel(Integer noticeWriteLevel) {
        this.noticeWriteLevel = noticeWriteLevel;
    }

    public Integer getMemoWriteLevel() {
        return memoWriteLevel;
    }

    public void setMemoWriteLevel(Integer memoWriteLevel) {
        this.memoWriteLevel = memoWriteLevel;
    }

    public Integer getHtmlLevel() {
        return htmlLevel;
    }

    public void setHtmlLevel(Integer htmlLevel) {
        this.htmlLevel = htmlLevel;
    }

    public Integer getDeleteLevel() {
        return deleteLevel;
    }

    public void setDeleteLevel(Integer deleteLevel) {
        this.deleteLevel = deleteLevel;
    }

    public Integer getArticleNum() {
        return articleNum;
    }

    public void setArticleNum(Integer articleNum) {
        this.articleNum = articleNum;
    }

    public String getCurDate() {
        return curDate;
    }

    public void setCurDate(String curDate) {
        this.curDate = curDate;
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
}
