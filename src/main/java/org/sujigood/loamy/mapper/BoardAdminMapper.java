package org.sujigood.loamy.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.sujigood.loamy.domain.BoardAdmin;

@Mapper
public interface BoardAdminMapper {
    List<BoardAdmin> selectBoardAdmin(BoardAdmin admin);
}