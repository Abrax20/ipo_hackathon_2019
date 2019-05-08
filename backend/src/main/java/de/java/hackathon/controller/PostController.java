package de.java.hackathon.controller;

import de.java.hackathon.entities.RaspEntity;
import de.java.hackathon.entities.RaspRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/fe")
public class PostController {

    @Autowired
    private  WebSocketController webSocketController;
    @Autowired
    private RaspRepo raspRepo;

    @PutMapping(path = "/process", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public void replaceEmployee(@RequestBody RaspEntity process) {
/*        RaspEntity testOneEntity = new RaspEntity();

        testOneEntity.setId(process.getId());
        testOneEntity.setTitle(process.getTitle());
        testOneEntity.setProgress(process.getProgress());
        testOneEntity.setStatus(process.getStatus());

        testOneRepo.save(testOneEntity);

        webSocketController.oneReceivedMessage(process.toString());*/
    }
}