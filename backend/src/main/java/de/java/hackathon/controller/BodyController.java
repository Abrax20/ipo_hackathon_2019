package de.java.hackathon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/post")
public class BodyController {

    @PostMapping("/response")
    @ResponseBody
    public String postResponseController( ) {

        String body = "Hello Banana!!!!";
        return body;
    }
}
