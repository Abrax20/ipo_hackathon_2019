package de.java.hackathon.controller;

import de.java.hackathon.entities.ConsumerEntity;
import de.java.hackathon.entities.ConsumerRepo;
import de.java.hackathon.model.Consumer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Controller
@RequestMapping("/get")
public class ConsumerController {

    @Autowired
    private ConsumerRepo consumerRepo;
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/consumer")
    @ResponseBody
    public Consumer consume() {
        Consumer consumer = new Consumer(1, "Banana");
        return consumer;
    }

    @CrossOrigin
    @GetMapping("/consume")
    @ResponseBody
    public String consumer() {
        return "Viva la Banana";
    }

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<ConsumerEntity> getAllUsers() {
        return consumerRepo.findAll();
    }
}