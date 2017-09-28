package org.sujigood.loamy.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.sujigood.loamy.domain.Broadcast;
import org.sujigood.loamy.mapper.BroadcastMapper;

/**
 * Created by isaac on 2017. 01. 30..
 */
@Service
public class BroadcastService {
	   @Inject
	    private BroadcastMapper broadcastMapper;
	   	//find list
	    public List<Broadcast> getBoardList(Broadcast board) {
	        return broadcastMapper.selectBroadcast(board);
	    }
	    //paging list
	    public List<Broadcast> findAllPaged(Broadcast board){
	    	return broadcastMapper.selectBroadcastPaged(board);
	    }
	    //get total count
	    public int getTotalCount(Broadcast board){
	    	return broadcastMapper.selectBroadcastTotalCount(board);
	    }
	    //get Broadcast
	    public Broadcast getBoard(int seqNum) {
	        return broadcastMapper.getBroadcast(seqNum);
	    }
	    //add broadcast
	    public int insertBoard(Broadcast board){
	    	return broadcastMapper.insertBroadcast(board);
	    }
	    //save broadcast
	    public int updateBoard(Broadcast board){
	    	return broadcastMapper.updateBroadcast(board);	    	
	    }
	    //delete broadcast
	    public int deleteBoard(Integer seqNum){
	    	return broadcastMapper.deleteBroadcast(seqNum);
	    }
}