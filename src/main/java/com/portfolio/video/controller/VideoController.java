package com.portfolio.video.controller;

import com.portfolio.video.dto.VideoDTO;
import com.portfolio.video.service.VideoRepositoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/videos")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173") // Allow Vite dev server
public class VideoController {

    private final VideoRepositoryService videoRepositoryService;

    @GetMapping
    public List<VideoDTO> getVideos() {
        return videoRepositoryService.getAllVideos();
    }
}
