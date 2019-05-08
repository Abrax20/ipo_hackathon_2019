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

    @PutMapping(path = "/process", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public String replaceEmployee(@RequestBody RaspEntity process) {
        RaspEntity newProcess = new RaspEntity();

        raspRepo.findById(process.getId())
                .map(employee -> {
                    employee.setId(process.getId());
                    employee.setTitle(process.getTitle());
                    employee.setProgress(process.getProgress());
                    employee.setStatus(process.getStatus());
                    raspRepo.save(employee);
                    webSocketController.oneReceivedMessage(process.toString());
                    return "Update succeeded";
                })
                .orElseGet(() -> {
                    newProcess.setId(process.getId());
                    newProcess.setTitle(process.getTitle());
                    newProcess.setProgress(process.getProgress());
                    newProcess.setStatus(process.getStatus());
                    raspRepo.save(newProcess);
                    webSocketController.oneReceivedMessage(process.toString());
                    return "New process added";
                });
        return "Success";
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