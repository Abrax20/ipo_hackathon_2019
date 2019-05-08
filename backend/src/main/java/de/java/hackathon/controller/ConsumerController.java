package de.java.hackathon.controller;

import de.java.hackathon.entities.ConsumerRepo;
import de.java.hackathon.entities.TestOneEntity;
import de.java.hackathon.entities.TestOneRepo;
import de.java.hackathon.model.Consumer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

@Controller
@CrossOrigin
@RequestMapping("/get")
public class ConsumerController {

    @Autowired
    private ConsumerRepo consumerRepo;
    @Autowired
    private TestOneRepo testOneRepo;
    @Autowired
    private WebSocketController webSocketController;
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/consumer")
    @ResponseBody
    public Consumer consume() {
        Consumer consumer = new Consumer(1, "Banana");
        return consumer;
    }

    @GetMapping("/consume")
    @ResponseBody
    public String consumer() {
        return "Viva la Banana";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<TestOneEntity> getAllUsers() {
        return testOneRepo.findAll();
    }

    @GetMapping(path = "/search/{id}")
    @ResponseBody
    public TestOneEntity single(@PathVariable int id) {
        TestOneEntity entity = testOneRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid id: " + id));

        webSocketController.oneReceivedMessage(entity.toString());

        return entity;
    }

}
