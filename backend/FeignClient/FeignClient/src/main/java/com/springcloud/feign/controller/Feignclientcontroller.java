package com.springcloud.feign.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feign")
public class Feignclientcontroller {

    @Autowired
    Greetingsclient greetingsfeignclient;

    @Autowired
    Employeesclient employeesfeignclient;

    // -------------------------------- GREETINGS SERVICE --------------------------------

    @GetMapping(
        value = "/getGreetings/{localeId}",
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<String> getGreetingsAndUserInfoViaFeign(
            @PathVariable(name = "localeId") String langCode) {

        System.out.println("Fetching greetings for locale = " + langCode);

        String greetMsg = greetingsfeignclient.getGreetings(langCode);

        return new ResponseEntity<>(greetMsg, HttpStatus.OK);
    }

    // -------------------------------- EMPLOYEE SERVICE --------------------------------

    @GetMapping(
        value = "/all/getAllEmployees",
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<ArrayList> getEmployeesAndUserInfoViaFeign() {

        System.out.println("Fetching all employees");

        ArrayList list = employeesfeignclient.getAllEmployees();

        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
