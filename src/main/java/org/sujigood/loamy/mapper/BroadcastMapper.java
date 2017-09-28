package org.sujigood.loamy.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.sujigood.loamy.domain.Broadcast;

import java.util.List;

/**
 * Created by Isaac on 2017. 01. 30..
 */
@Mapper
public interface BroadcastMapper {
    List<Broadcast> selectBroadcast(Broadcast board);
    List<Broadcast> selectBroadcastPaged(Broadcast board);
    int selectBroadcastTotalCount(Broadcast board);
    Broadcast getBroadcast(Integer seqNum);
    int insertBroadcast(Broadcast board);
    int updateBroadcast(Broadcast board);
    int deleteBroadcast(Integer seqNum);
}