#!/usr/bin/env python3
"""
Simple script to test email functionality of the Blood Bank Management System
"""

import requests
import json

# Configuration
BASE_URL = "http://localhost:8080"
EMAIL_ENDPOINT = f"{BASE_URL}/api/email"

def test_email_send():
    """Test sending a custom email"""
    print("Testing email send functionality...")
    
    # Test data
    test_data = {
        'to': 'test@example.com',  # Replace with your email
        'subject': 'Test Email from Blood Bank System',
        'body': '<h2>Test Email</h2><p>This is a test email from the Blood Bank Management System.</p>'
    }
    
    try:
        response = requests.post(f"{EMAIL_ENDPOINT}/send", data=test_data)
        
        if response.status_code == 200:
            print("✅ Email sent successfully!")
            print(f"Response: {response.text}")
        else:
            print(f"❌ Email sending failed with status code: {response.status_code}")
            print(f"Response: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("❌ Connection error: Make sure the Spring Boot application is running on port 8080")
    except Exception as e:
        print(f"❌ Error: {e}")

def test_email_endpoint():
    """Test the simple test endpoint"""
    print("\nTesting email test endpoint...")
    
    try:
        response = requests.get(f"{EMAIL_ENDPOINT}/test")
        
        if response.status_code == 200:
            print("✅ Test email endpoint working!")
            print(f"Response: {response.text}")
        else:
            print(f"❌ Test endpoint failed with status code: {response.status_code}")
            print(f"Response: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("❌ Connection error: Make sure the Spring Boot application is running on port 8080")
    except Exception as e:
        print(f"❌ Error: {e}")

def check_server_status():
    """Check if the server is running"""
    print("Checking server status...")
    
    try:
        response = requests.get(f"{BASE_URL}/actuator/health", timeout=5)
        if response.status_code == 200:
            print("✅ Server is running!")
            return True
        else:
            print(f"❌ Server responded with status code: {response.status_code}")
            return False
    except requests.exceptions.ConnectionError:
        print("❌ Server is not running. Please start the Spring Boot application.")
        return False
    except Exception as e:
        print(f"❌ Error checking server status: {e}")
        return False

if __name__ == "__main__":
    print("=" * 50)
    print("Blood Bank Management System - Email Test")
    print("=" * 50)
    
    # Check if server is running
    if check_server_status():
        # Test the endpoints
        test_email_endpoint()
        test_email_send()
    else:
        print("\nPlease start the Spring Boot application first:")
        print("1. Navigate to the BackEnd directory")
        print("2. Run: mvn spring-boot:run")
        print("3. Wait for the application to start")
        print("4. Run this script again")
    
    print("\n" + "=" * 50)
    print("Test completed!")
    print("=" * 50) 