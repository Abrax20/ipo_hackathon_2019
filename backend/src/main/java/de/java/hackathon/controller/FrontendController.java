package de.java.hackathon.controller;

import de.java.hackathon.entities.Actions;
import de.java.hackathon.entities.Jobs;
import de.java.hackathon.entities.Processes;
import de.java.hackathon.entities.repo.ActionRepo;
import de.java.hackathon.entities.repo.JobRepo;
import de.java.hackathon.entities.repo.ProcessRepo;
import de.java.hackathon.model.NewProcess;
import de.java.hackathon.model.ProcessesMapper;
import de.java.hackathon.model.Step;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

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
    @Autowired
    private JdbcTemplate jdbcTemplate;

    final String raspberryUrl = "http://192.168.178.44/controls/controlEngine.php";

   @PostMapping(path = "/process", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public void replaceEmployee(@RequestBody NewProcess newProcess) {
       String sql = "INSERT INTO PROCESSES (PROGRESS, STATUS, TITLE) VALUES (?, ?, ?)";
       jdbcTemplate.update(sql, 0, "offen", newProcess.getTitle());

       List<Processes> list = jdbcTemplate.query("SELECT * FROM PROCESSES", new ProcessesMapper());

       sql = new String("INSERT INTO ACTION_PROCESS " +
                                "(FK_PROCESS_ID, FK_ACTION_ID_NOW, FK_ACTION_ID_AFTER) " +
                                "VALUES (?, ?, ?)");

       int index = list.size() - 1;
       int processID = list.get(index).getId();
       List<Step> steps = newProcess.getSteps();
       int stepOne;

       for (int j = 0; j < steps.size(); j++) {
           stepOne = steps.get(j).getId();
           if (j == (steps.size() - 1)) {
               jdbcTemplate.update(sql, processID, stepOne, null);
           } else {
               jdbcTemplate.update(sql, processID, stepOne, steps.get(j + 1).getId());
           }
       }

       sendGetToRasp(0, processID, 0);
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

    private void sendGetToRasp(int job, int process, int action) {
        RestTemplate restTemplate = new RestTemplate();
        String add = "?jobid=" + job + "&processid=" + process + "&actionid=" + action;
        String result = restTemplate.getForObject(raspberryUrl + add, String.class);
        System.out.println(result);
    }
}