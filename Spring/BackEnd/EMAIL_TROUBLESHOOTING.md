# Email Sending Troubleshooting Guide

## Issues Identified and Fixed

### 1. **Silent Exception Handling**
**Problem**: The original code was catching exceptions but only calling `excp.getMessage()` without logging or re-throwing, making it impossible to see what was going wrong.

**Fix**: Added proper error logging and exception throwing:
```java
catch (MessagingException excp) {
    log.error("Failed to send email to: " + to, excp);
    log.error("Error message: " + excp.getMessage());
    throw new RuntimeException("Failed to send email: " + excp.getMessage(), excp);
}
```

### 2. **Hardcoded Configuration**
**Problem**: Email settings were hardcoded in the service class.

**Fix**: Added configurable properties in `application.properties` and used `@Value` annotations.

### 3. **Gmail App Password Issues**
**Problem**: The app password might be expired or invalid.

## Steps to Fix Email Sending

### Step 1: Generate New Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** → **App passwords**
3. Generate a new app password for "Mail"
4. Copy the 16-character password

### Step 2: Update Application Properties

Update the password in `src/main/resources/application.properties`:
```properties
spring.mail.password=YOUR_NEW_APP_PASSWORD_HERE
```

### Step 3: Test Email Functionality

Use the test endpoint to verify email sending:
```bash
# Test endpoint
GET http://localhost:8080/api/email/test

# Send custom email
POST http://localhost:8080/api/email/send
Content-Type: application/x-www-form-urlencoded

to=your-email@example.com&subject=Test&body=Hello World
```

### Step 4: Check Logs

Monitor the application logs for email-related messages:
```bash
# Look for these log messages:
# "----sending mail ---in mail sending method---->"
# "Email sent successfully to: [email]"
# "Failed to send email to: [email]" (if there's an error)
```

## Common Issues and Solutions

### Issue 1: "Authentication failed"
**Solution**: 
- Generate a new app password
- Ensure 2-Step Verification is enabled
- Use the app password, not your regular Gmail password

### Issue 2: "Connection timeout"
**Solution**:
- Check internet connection
- Verify firewall settings
- Try different SMTP settings

### Issue 3: "Invalid recipient"
**Solution**:
- Verify email address format
- Check if the email address exists

## Debugging Tips

1. **Enable SMTP Debugging**: Uncomment this line in `EmailSendingServiceImpl.java`:
   ```java
   session.setDebug(true);
   ```

2. **Check Application Logs**: Look for detailed error messages in the console/logs.

3. **Test with Simple Email**: Use the test endpoint first before testing with complex HTML emails.

## Email Configuration Properties

The following properties are now configurable in `application.properties`:

```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=465
spring.mail.username=aniruddhalalge283@gmail.com
spring.mail.password=YOUR_APP_PASSWORD
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.ssl.enable=true
```

## Testing the Fix

1. Restart your Spring Boot application
2. Check the logs for any startup errors
3. Use the test endpoint: `GET http://localhost:8080/api/email/test`
4. Monitor the logs for success/error messages

## Alternative Email Services

If Gmail continues to have issues, consider:
- **SendGrid**: More reliable for production
- **Amazon SES**: Cost-effective for high volume
- **Mailgun**: Good for transactional emails

## Security Notes

- Never commit app passwords to version control
- Use environment variables for sensitive data in production
- Consider using Spring Cloud Config for centralized configuration 