package de.java.hackathon.controller;

import de.java.hackathon.entities.Actions;
import de.java.hackathon.entities.repo.ActionRepo;
import de.java.hackathon.entities.repo.ConsumerRepo;
import de.java.hackathon.entities.RaspEntity;
import de.java.hackathon.entities.repo.RaspRepo;
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
    private RaspRepo raspRepo;
    @Autowired
    private ActionRepo actionRepo;
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
    Iterable<Actions> getAllActions() {
        return actionRepo.findAll();
    }

    @GetMapping(path = "/search/{id}")
    @ResponseBody
    public RaspEntity single(@PathVariable int id) {
        RaspEntity entity = raspRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid id: " + id));

        webSocketController.oneReceivedMessage(entity.toString());

        return entity;
    }

}
