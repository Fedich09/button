package com.button.backend.controller;

import com.button.backend.model.Message;
import com.button.backend.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/message")
@RequiredArgsConstructor
public class MessageController {
    private final MessageRepository messageRepository;

    @PostMapping(path = "/add", consumes = {"application/json"})
    public ResponseEntity<Message> addMessage(@RequestBody Message message) {
        return ResponseEntity.ok(messageRepository.save(message));
    }

    @GetMapping(path = "/all", produces = {"application/json"})
    public ResponseEntity<List<Message>> getAllMessages() {
        return ResponseEntity.ok(messageRepository.findAll());
    }
}
