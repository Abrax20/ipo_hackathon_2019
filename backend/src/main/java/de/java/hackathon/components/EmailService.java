package de.java.hackathon.components;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EmailService {

    @Autowired
    public JavaMailSender emailSender;

    @ResponseBody
    @RequestMapping("/sendSimpleEmail")
    public void sendSimpleEmail() {

        // Create a Simple MailMessage.
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("abs.christoph@gmail.com");
        message.setSubject("Process Status");
        message.setText("Process done.");

        // Send Message!
        this.emailSender.send(message);
    }

}