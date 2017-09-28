package org.sujigood.loamy.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.sujigood.loamy.domain.Board;
import org.sujigood.loamy.domain.BoardFile;

import java.util.List;

/**
 * Created by june713 on 2016. 11. 14..
 */
@Mapper
public interface BoardMapper {
    List<Board> selectBoard(Board board);
    List<Board> selectBoardPaged(Board board);
    List<BoardFile> selectBoardFile(BoardFile boardFile);
    int selectBoardTotalCount(Board board);
    Board getBoard(Integer seqNum);
    int insertBoard(Board board);
    int updateBoard(Board board);
    int deleteBoard(Integer seqNum);
}