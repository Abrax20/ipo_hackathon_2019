package de.java.hackathon.controller;

import de.java.hackathon.entities.TestOneEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/rasp/update")
public class PutController {

    @Autowired
    private  WebSocketController webSocketController;

    @PutMapping("/process")
    @ResponseBody
    public void replaceEmployee(@RequestBody TestOneEntity process) {
        TestOneEntity testOneEntity = new TestOneEntity();

        testOneEntity.setId(process.getId());
        testOneEntity.setTitle(process.getTitle());
        testOneEntity.setProgress(process.getProgress());

        webSocketController.oneReceivedMessage(process.toString());
    }
}
