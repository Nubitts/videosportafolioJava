package com.portfolio.video.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.portfolio.video.dto.VideoDTO;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class VideoRepositoryService {

    private List<VideoDTO> videoCache = new ArrayList<>();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostConstruct
    public void init() {
        try {
            ClassPathResource resource = new ClassPathResource("data/videos.json");
            InputStream inputStream = resource.getInputStream();
            videoCache = objectMapper.readValue(inputStream, new TypeReference<List<VideoDTO>>() {});
            System.out.println("Loaded " + videoCache.size() + " videos from JSON.");
        } catch (IOException e) {
            throw new RuntimeException("Failed to load videos.json", e);
        }
    }

    public List<VideoDTO> getAllVideos() {
        return videoCache;
    }
}
