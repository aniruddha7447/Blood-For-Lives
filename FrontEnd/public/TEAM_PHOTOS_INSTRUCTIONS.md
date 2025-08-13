# Team Photos Setup Instructions

## Current Status
✅ **Placeholder images are currently displayed** using online placeholder service
✅ **GitHub links have been removed** - only LinkedIn links remain
✅ **5 team members are configured** and ready for your photos

## Adding Real Team Photos

To replace the placeholder images with your actual team photos, follow these steps:

### 1. Photo Requirements
- **Format**: JPG/JPEG
- **Size**: Recommended 400x400 pixels or larger (square aspect ratio works best)
- **Quality**: High quality, professional headshots

### 2. File Names
Place the following photos in the `public` directory:
- `team-member-1.jpg` - First team member photo
- `team-member-2.jpg` - Second team member photo  
- `team-member-3.jpg` - Third team member photo
- `team-member-4.jpg` - Fourth team member photo
- `team-member-5.jpg` - Fifth team member photo

### 3. Photo Placement
1. Copy your team photos to the `public` folder in your project root
2. Rename them according to the naming convention above
3. Update the image sources in `src/pages/About.jsx`:

```jsx
// Change from placeholder URLs to local files:
<img src="/team-member-1.jpg" alt="Team Member 1" />
<img src="/team-member-2.jpg" alt="Team Member 2" />
<img src="/team-member-3.jpg" alt="Team Member 3" />
<img src="/team-member-4.jpg" alt="Team Member 4" />
<img src="/team-member-5.jpg" alt="Team Member 5" />
```

### 4. Team Member Information
You can update the team member names and positions by editing the `src/pages/About.jsx` file:

```jsx
// Update these sections in the team member cards:
<h3>Team Member 1</h3>
<p>Lead Developer</p>

<h3>Team Member 2</h3>
<p>UI/UX Designer</p>

<h3>Team Member 3</h3>
<p>Backend Developer</p>

<h3>Team Member 4</h3>
<p>Frontend Developer</p>

<h3>Team Member 5</h3>
<p>Project Manager</p>
```

### 5. Social Links
Update the LinkedIn links for each team member:
```jsx
<div className="member-social">
  <a href="YOUR_LINKEDIN_URL" className="social-link">LinkedIn</a>
</div>
```

## Current Design Features
- ✅ Responsive grid layout for 5 team members
- ✅ Hover effects and animations
- ✅ Professional styling
- ✅ LinkedIn social links only
- ✅ Modern card design
- ✅ Optimized spacing for all screen sizes
- ✅ Placeholder images working

## Backend Connection Issues

**Note**: The API connection errors you're seeing are likely due to:
1. **CORS issues** - Your backend needs to allow requests from `http://localhost:3000`
2. **Authentication headers** - Some endpoints require proper authorization
3. **Backend not fully initialized** - Some endpoints might not be ready yet

**To fix backend issues:**
1. Ensure your backend server is running on port 8080
2. Check CORS configuration in your backend
3. Verify authentication tokens are being sent correctly
4. Test API endpoints directly using Postman or similar tool

## Layout Information
- **Desktop**: 5 team members in a responsive grid
- **Tablet**: 3-4 members per row
- **Mobile**: 2-3 members per row
- **Small Mobile**: 1-2 members per row
