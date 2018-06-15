Hi there! It's a list of restaurants so I called it Restalist.

To get started you chould firstly install packages via 'npm i' and then follow instructions.

To run server:
cd api/
meteor -p *your*.*local*.*IP*.*address*:3000

To run front-end in browser:
ionic serve


To launch an app on Android follow insctuctions:

1. Install Gradle
apt-get install gradle

2. Install (if needed) Android SDK and set ANDROID_HOME in ~/.bashrc: https://developer.android.com/studio/intro/update#sdk-manager

3. Add cordova platform
cordova platform add android

4. Change address in 'meteor-client.config.json' to your local ip address

5. npm run meteor-client:bundle

6. cordova run android