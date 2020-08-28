package com.example.contacts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner {
    private final ContactsRepository repository;

    @Autowired
    public DemoLoader(ContactsRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Contact("Sarah","Test","2184282478","123 Sesame street","email@email.org"));
        this.repository.save(new Contact("Sarah","Test 2","123593490","125 Sesame street","test@email.org"));
    }
}