package de.java.hackathon.controller;

import de.java.hackathon.entities.RaspEntity;
import de.java.hackathon.entities.RaspRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/rasp/update")
public class PutController {

    @Autowired
    private  WebSocketController webSocketController;
    @Autowired
    private RaspRepo raspRepo;

    @PostMapping(path = "/process", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public void replaceEmployee(@RequestBody RaspEntity process) {

        raspRepo.save(setEntity(process));
        webSocketController.oneReceivedMessage(process.toString());
    }

    private RaspEntity setEntity(RaspEntity process) {
        RaspEntity raspEntity = new RaspEntity();

        raspEntity.setId(process.getId());
        raspEntity.setTitle(process.getTitle());
        raspEntity.setProgress(process.getProgress());
        raspEntity.setStatus(process.getStatus());

        return raspEntity;
    }
}