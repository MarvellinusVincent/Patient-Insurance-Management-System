package com.java.firebase.model;
import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;

public class User {
    private UserRecord userRecord;
    private String firstName;
    private String lastName;
    private String address;

    // Constructor
    public User(UserRecord userRecord, String firstName, String lastName, String address) {
        this.userRecord = userRecord;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    // Getters and Setters for additional fields
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // Get the underlying UserRecord
    public UserRecord getUserRecord() {
        return userRecord;
    }


}
