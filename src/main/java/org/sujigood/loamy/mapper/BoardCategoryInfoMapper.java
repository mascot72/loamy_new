package org.sujigood.loamy.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.sujigood.loamy.domain.BoardCategoryInfo;
import java.util.List;

/**
 * Created by isaac on 2016. 11. 26..
 */
@Mapper
public interface BoardCategoryInfoMapper {
    List<BoardCategoryInfo> selectBoardAdmin(BoardCategoryInfo categoryInfo);
}