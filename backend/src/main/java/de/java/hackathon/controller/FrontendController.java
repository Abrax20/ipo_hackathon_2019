package de.java.hackathon.controller;

import de.java.hackathon.entities.Actions;
import de.java.hackathon.entities.Jobs;
import de.java.hackathon.entities.Processes;
import de.java.hackathon.entities.repo.ActionRepo;
import de.java.hackathon.entities.repo.JobRepo;
import de.java.hackathon.entities.repo.ProcessRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/fe")
public class FrontendController {

    @Autowired
    private  WebSocketController webSocketController;
    @Autowired
    private ProcessRepo processRepo;
    @Autowired
    private ActionRepo actionRepo;
    @Autowired
    private JobRepo jobRepo;

   @PostMapping(path = "/process", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public void replaceEmployee(@RequestBody String newProcess) {
       System.out.println(newProcess);
    }

    @GetMapping("/actions")
    @ResponseBody
    Iterable<Actions> getAllActions() {
        return actionRepo.findAll();
    }

    @GetMapping("/processes")
    @ResponseBody
    public Iterable<Processes> getAllProcesses() {
        return processRepo.findAll();
    }

    @GetMapping("/process/{id}")
    @ResponseBody
    public Processes getProcess(@PathVariable int id) {
        Processes entity = processRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid process id: " + id));

        webSocketController.oneReceivedMessage(entity.toString());

        return entity;
    }

    @GetMapping("/jobs")
    @ResponseBody
    public Iterable<Jobs> getAllJobs() {
        return jobRepo.findAll();
    }

    @GetMapping("/job/{id}")
    @ResponseBody
    public Jobs getJob(@PathVariable int id) {
        Jobs entity = jobRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid job id: " + id));

        webSocketController.oneReceivedMessage(entity.toString());
        return entity;
    }
}