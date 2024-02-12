package com.java.firebase;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
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
			return "User signed in successfully";
		} catch (FirebaseAuthException e) {
			e.printStackTrace();
			return "Error signing in user: " + e.getMessage();
		}
	}
}
