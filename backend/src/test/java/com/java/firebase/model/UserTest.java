package com.java.firebase.model;

import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {
    private static final String SERVICE_ACCOUNT_KEY_PATH = "backend/src/main/resources/serviceAccountKey.json";
    @Test
    void testUser() throws FirebaseAuthException {
        try {
            System.setProperty("GOOGLE_APPLICATION_CREDENTIALS", SERVICE_ACCOUNT_KEY_PATH);
            System.out.println(System.getProperty("GOOGLE_APPLICATION_CREDENTIALS").contains("serviceAccountKey.json"));
            FirebaseApp.initializeApp();

            UserRecord.CreateRequest userRequest = new UserRecord.CreateRequest()
                    .setEmail("svelet@iu.edu")
                    .setPassword("password")
                    .setPhoneNumber("+18125985490")
                    .setDisplayName("Sasha Velet");

            UserRecord sashaRecord = FirebaseAuth.getInstance().createUser(userRequest);

            User userSasha = new User(sashaRecord, "Sasha", "Velet", "1234 Main St");

            assertEquals("Sasha", userSasha.getFirstName());
            assertEquals("Velet", userSasha.getLastName());
            assertEquals("1234 Main St", userSasha.getAddress());
            assertEquals(sashaRecord.getPhoneNumber(), "+18125985490");
            assertEquals(userSasha, userSasha.getUserRecord());
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}