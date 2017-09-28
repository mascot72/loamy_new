package org.sujigood.loamy.controller;

import io.swagger.annotations.Api;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.sujigood.loamy.common.JsonResponse;
import org.sujigood.loamy.domain.Board;
import org.sujigood.loamy.domain.Broadcast;
import org.sujigood.loamy.service.BoardService;
import org.sujigood.loamy.service.BroadcastService;

//import com.mysql.jdbc.log.Log;

import javax.inject.Inject;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by june713 on 2016. 11. 14..
 */
@Api
@RestController
@RequestMapping("/api")
public class AdminController {
	@Inject
	private BroadcastService broadcastService;

	@Inject
	private BoardService boardService;
	
	//글정보 목록
	@RequestMapping(value = "boardList", method = RequestMethod.GET)
	public @ResponseBody Map list(@ModelAttribute Board board, BindingResult bindingResult) {
		ModelMap model = new ModelMap();

		List<Board> result = boardService.getBoardList(board);
		model.addAttribute("boardList", result);

		return JsonResponse.getResult(model);
	}
	
	@RequestMapping(value = "board/{action}/{key}")
	public @ResponseBody Map list(@PathVariable String action, @PathVariable String key, @RequestBody Board board,
			BindingResult bindingResult) {
		ModelMap model = new ModelMap();
		List<Board> result;
		Board one;
		
		switch (action){
			case "findOne":
				//한개의 조회
				one = boardService.getBoard(Integer.parseInt(key));
				model.addAttribute("item", one);
				break;
				
			case "findAll":
				if (key.equals("totalCount")){
					
					// 전체행조회
					int totalCount = boardService.getTotalCount(board);	//full list
					model.addAttribute("totalCount", totalCount);
					
				} else if (key.equals("onePage")){
					
					// 한페이지 조회
					result = boardService.findAllPaged(board);	//paging
					model.addAttribute("list", result);
				} else if (key.equals("full")){
					
					// 전체조회
					result = boardService.getBoardList(board);	//full list
					model.addAttribute("list", result);
				}
				break;
		}
		
		model.addAttribute("info", String.format("action %s, key %s", key, action));

		return JsonResponse.getResult(model);
	}
	


	// 방송정보상세(broadcast/get|update/detail/12|
	@RequestMapping(value = "broadcast/{action}/{key}")
	public @ResponseBody Map list(@ModelAttribute Board boardAdmin, @PathVariable String action, @PathVariable String key, @RequestBody Broadcast broadcast,
			BindingResult bindingResult) {
		ModelMap model = new ModelMap();
		List<Broadcast> result;
		Broadcast one;
		
		switch (action){
			case "findOne":
				//한개의 방송조회
				one = broadcastService.getBoard(Integer.parseInt(key));
				model.addAttribute("item", one);
				break;
				
			case "findAll":
				if (key.equals("totalCount")){
					
					// 전체행조회
					int totalCount = broadcastService.getTotalCount(broadcast);	//full list
					model.addAttribute("totalCount", totalCount);
					
				} else if (key.equals("onePage")){
					
					// 한페이지 조회
					result = broadcastService.findAllPaged(broadcast);	//paging
					model.addAttribute("list", result);
				} else if (key.equals("full")){
					
					// 전체조회
					result = broadcastService.getBoardList(broadcast);	//full list
					model.addAttribute("list", result);
				}
				break;
		}
		
		model.addAttribute("info", String.format("action %s, key %s", key, action));
		//System.out.printf("key %s action %s\n", key, action);

		return JsonResponse.getResult(model);
	}
	
	// 방송저장
	@RequestMapping(value = "addNewBroadcast")
	public Map add(@RequestBody Broadcast board){
		ModelMap model = new ModelMap();
		if (board.getRegDate() == null || board.getRegDate().equals("")){
			Date now = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss", Locale.KOREA);
			String currentDay = formatter.format(now);
			board.setRegDate(currentDay);
		}
		int id = broadcastService.insertBoard(board);
		model.addAttribute("message", id > 0 ? "successful" : "fail");
		model.addAttribute("result", board);
		model.addAttribute("id(seqNum)", board.seqNum);
		return JsonResponse.getResult(model);
	}
	
	// 방송수정
	@RequestMapping(value = "editBroadcast/{key}", method = RequestMethod.PUT)
	public Map edit(@PathVariable String key, @RequestBody Broadcast board){
		ModelMap model = new ModelMap();
		if (board.getEditDate() == null || board.getEditDate().equals("")){
			Date now = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss", Locale.KOREA);
			String currentDay = formatter.format(now);
			board.setEditDate(currentDay);
		}
		int resultCnt = broadcastService.updateBoard(board);
		model.addAttribute("message", resultCnt > 0 ? "successful" : "fail");
		model.addAttribute("result", broadcastService.getBoard(board.seqNum));
		return JsonResponse.getResult(model);
	}
	
	//조회결과 행수 조회
	@RequestMapping(value = "totalCount/{key}/{action}")
	public @ResponseBody Map totalCount(@ModelAttribute Board board, @PathVariable String key, @PathVariable String action, @RequestBody Broadcast broadcast,
			BindingResult bindingResult) {
		ModelMap model = new ModelMap();
		
		int totalCount = broadcastService.getTotalCount(broadcast);	//full list
		model.addAttribute("totalCount", totalCount);
		
		
		model.addAttribute("info", String.format("key %s action %s", key, action));

		return JsonResponse.getResult(model);
	}
}