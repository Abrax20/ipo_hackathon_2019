package de.java.hackathon.controller;

import de.java.hackathon.entities.RaspEntity;
import de.java.hackathon.entities.repo.RaspRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin
@RequestMapping("/rasp/update")
public class RaspberryController {

    @Autowired
    private WebSocketController webSocketController;
    @Autowired
    private RaspRepo raspRepo;


    @PutMapping(path = "/process", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public String replaceEmployee(@RequestBody RaspEntity process) {

        RaspEntity updatedRasp = raspRepo.findById(process.getId())
                .map(employee -> {
                    employee.setProgress(process.getProgress());
                    employee.setStatus(process.getStatus());

                    webSocketController.oneReceivedMessage(employee.toString("UPDATE_PROCESS"));
                    return raspRepo.save(employee);
                })
                .orElseGet(() -> {
                    webSocketController.oneReceivedMessage(process.toString("UPDATE_PROCESS"));
                    return raspRepo.save(process);
                });
        System.out.println("Raspberry: [" + process.getId() + "] = " + process.getProgress() + "%");
        return "Success";
    }

    private void sendMail() {

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