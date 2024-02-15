package com.java.firebase.model;

import com.google.firebase.auth.UserRecord;

public class Doctor extends User {
    public Doctor(UserRecord userRecord, String firstName, String lastName, String address) {
        super(userRecord, firstName, lastName, address);
    }
}
