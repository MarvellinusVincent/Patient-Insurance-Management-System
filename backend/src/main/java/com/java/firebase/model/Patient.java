package com.java.firebase.model;

import com.google.firebase.auth.UserRecord;

public class Patient extends User {
    public Patient(UserRecord userRecord, String firstName, String lastName, String address) {
        super(userRecord, firstName, lastName, address);
    }
}
