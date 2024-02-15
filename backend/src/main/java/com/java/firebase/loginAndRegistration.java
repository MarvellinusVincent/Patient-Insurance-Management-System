package com.java.firebase;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
import com.java.firebase.model.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class loginAndRegistration {


	@PostMapping("/signup")
	public String signUp(@RequestBody AuthRequest request) {
		try {
			UserRecord.CreateRequest userRequest = new UserRecord.CreateRequest()
					.setEmail(request.getEmail())
					.setPassword(request.getPassword())
					.setDisplayName(request.getDisplayName())
					.setPhoneNumber(request.getPhoneNumber());
			UserRecord userRecord = FirebaseAuth.getInstance().createUser(userRequest);
			/**
			 * 1. Send verification code to user to verify phone number
			 * 2. After phone number is verified, add user to database
			 */

			return "User signed up successfully with UID: " + userRecord.getUid();
		} catch (FirebaseAuthException e) {
			e.printStackTrace();
			return "Error signing up user: " + e.getMessage();
		}
	}
	//Sign up instructions in readme

	@PostMapping("/signin")
	public String signIn(@RequestBody AuthRequest request) {
		try {
			FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(request.getToken());
			String uid = decodedToken.getUid();
			UserRecord u = FirebaseAuth.getInstance().getUser(uid);

			/**
			 * 1. Check if user exists in database via their primary key (id)
			 * 2. If user exists, check if 2FA is enabled
			 * 3. If 2FA is enabled and phone # is verified, send 2FA code
			 *
			 * 4. If 2FA is not enabled, sign in user
			 */

			return "User signed in successfully";
		} catch (FirebaseAuthException e) {
			e.printStackTrace();
			return "Error signing in user: " + e.getMessage();
		}
	}
}
