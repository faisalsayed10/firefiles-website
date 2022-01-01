---
sidebar_position: 1
---

# Firebase Setup

Let's first setup our Firebase project. (This guide is beginner-friendly, so if you have 0 experience with Firebase, you'll still be able to follow along.)

## Creating a new Firebase project

**Note:** Skip this step if you already have a Firebase project.

1. Go to [Firebase console](https://console.firebase.google.com/).
![firebase-console](/img/tutorial/firebase-console.png)

2. Click on the `+ Add Project` button.

3. Give your project a name, and on the next page, disable Google Analytics if not required.
![firebase-add-project](/img/tutorial/firebase-add-project.png)

4. Click on `Create` and wait for your project to get created.
![firebase-add-project](/img/tutorial/firebase-project-created.png)

5. Once created, you'll need to configure your project for each platform. However, we only need to worry about configuring the `Web` platform. To do this, click on the `</>` icon in the console.

6. Once you get to the `Add Firebase SDK` section, copy and store your config values.
![firebase-add-sdk](/img/tutorial/firebase-add-sdk.png)

## Authentication and Cloud Storage

Once your app's setup is done, we now need an account with which you'll login to your Firefiles instance. For this, we can simply use the authentication provided with our project!  
Click on the `Authentication` section in the console's sidebar and click on `Get Started`. If asked to add providers, select the `Email/Password` provider. Enable the simple `Email/Password` option and click `Save`.  

Now click on the `Users` tab on the top and click on `Add User`. This will ask you an email and a password, these credentials will be with what you'll login to your Firefiles instance. So, add your email and a strong password of your choice.

![firebase-auth](/img/tutorial/firebase-auth.png)

Once this is done, let's move to setting up our cloud storage. Click on the `Storage` section in the sidebar and click on `Get Started`. Select `Production Mode` when asked to select the type of mode to use. Firebase will now ask you to select a location for your bucket. Select the one which is closer to you.  
**NOTE:** Once the location is selected, it cannot be changed again. Speed of the uploads and downloads depends on the selected location and your location.

![firebase-create-bucket](/img/tutorial/firebase-create-bucket.png)

Aaand our bucket is created!

![firebase-bucket](/img/tutorial/firebase-bucket.png)

Now we need to fix some rules for our bucket. Click on the `Rules` tab. Notice how on line 5 it's written `allow read, write: if false;`, this means that all requests to your bucket will be denied. So, we need to change line 5 to either to allow all authenticated requests, or to allow only the requests from the user which we recently created.

```
// Allow all authenticated users
allow read, write: if request.auth != null;
```

OR

```
// Allow only our user to access the bucket.
allow read, write: if request.auth.uid == <the uid of the user which we created>;
```

**NOTE:** Grab the `uid` of the user from the `Users` tab in the `Authentication` section of the console.

![firebase-security-rules](/img/tutorial/firebase-security-rules.png)

Once you are done with changing the security rules, click on `Publish` and your bucket is ready!

:::success

Yay! We're all set up! Now it's time to deploy!

:::