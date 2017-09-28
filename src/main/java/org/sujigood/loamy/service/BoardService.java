package org.sujigood.loamy.service;

import org.springframework.stereotype.Service;
import org.sujigood.loamy.mapper.BoardMapper;
import org.sujigood.loamy.domain.Board;
import org.sujigood.loamy.domain.BoardFile;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by june713 on 2016. 11. 14..
 */
@Service
public class BoardService {
    @Inject
    private BoardMapper boardMapper;

//    public List<BoardAdmin> getBoardAdminList(BoardAdmin boardAdmin) {
//        return boardAdminMapper.selectBoardAdmin(boardAdmin);
//    } 
    
    
   	//find list
    public List<Board> getBoardList(Board board) {
        List<Board> posts = boardMapper.selectBoard(board);
        for (Board item : posts){
        	BoardFile query = new BoardFile();
        	query.setObjNum(item.getObjNum());
        	query.setBoardId(item.getBoardId());
        	item.setFiles(boardMapper.selectBoardFile(query));        	
        }
        return posts;        
    }
    //paging list
    public List<Board> findAllPaged(Board board){
    	return boardMapper.selectBoardPaged(board);
    }
    //get total count
    public int getTotalCount(Board board){
    	return boardMapper.selectBoardTotalCount(board);
    }
    //get Board
    public Board getBoard(int seqNum) {
        return boardMapper.getBoard(seqNum);
    }
    //add Board
    public int insertBoard(Board board){
    	return boardMapper.insertBoard(board);
    }
    //save Board
    public int updateBoard(Board board){
    	return boardMapper.updateBoard(board);	    	
    }
    //delete Board
    public int deleteBoard(Integer seqNum){
    	return boardMapper.deleteBoard(seqNum);
    }
}
