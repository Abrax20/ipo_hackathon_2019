package de.java.hackathon.controller;

import de.java.hackathon.model.Consumer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

@Controller
@RequestMapping("/get")
public class ConsumerController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/consumer")
    @ResponseBody
    public Consumer greeting() {
        Consumer consumer = new Consumer(1, "Banana");
        return consumer;
    }
}
