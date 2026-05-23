package com.myportfolio.app;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.airbnb.lottie.LottieAnimationView;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        LottieAnimationView animationView = findViewById(R.id.lottieAnimationView);

        // Jaise hi animation khatam hoga, MainActivity (React App) open ho jayegi
        animationView.addAnimatorListener(new android.animation.AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(android.animation.Animator animation) {
                startActivity(new Intent(SplashActivity.this, MainActivity.class));
                finish(); // Splash activity ko band karne ke liye
            }
        });
    }
}