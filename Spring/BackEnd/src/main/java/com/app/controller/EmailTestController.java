package com.app.controller;

import com.app.service.IEmailSendingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
public class EmailTestController {

    @Autowired
    private IEmailSendingService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendMail(@RequestParam String to,
                           @RequestParam String subject,
                           @RequestParam String body) {
        try {
            emailService.sendEmail(to, body, subject);
            return ResponseEntity.ok("Email sent successfully to " + to);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to send email: " + e.getMessage());
        }
    }

    @GetMapping("/test")
    public ResponseEntity<String> testEmail() {
        try {
            String testEmail = "test@example.com"; // Replace with your test email
            String subject = "Test Email from Blood Bank System";
            String body = "<h2>Test Email</h2><p>This is a test email from the Blood Bank Management System.</p>";
            
            emailService.sendEmail(testEmail, body, subject);
            return ResponseEntity.ok("Test email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Test email failed: " + e.getMessage());
        }
    }
}
