package de.java.hackathon.controller;

import de.java.hackathon.model.Consumer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/update")
public class PutController {

    @PutMapping("/employees")
    @ResponseBody
    public String replaceEmployee(@RequestBody Consumer newEmployee) {
        Consumer employee = new Consumer();

        employee.setId(newEmployee.getId());
        employee.setName(newEmployee.getName());

        System.out.println(employee.toString());

        return "Success";
    }
}
