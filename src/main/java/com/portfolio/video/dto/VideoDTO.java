package com.portfolio.video.dto;

import lombok.Data;
import java.util.List;

@Data
public class VideoDTO {
    private String id;
    private String title;
    private String vimeoId;
    private String thumbnail;
    private int width;
    private int height;
    private List<String> tags;
}
