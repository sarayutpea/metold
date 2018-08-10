<template>
    <div id="profile">

    </div>
</template>
<script>
import firebase from 'firebase'
import  * as firebaseui from 'firebaseui'
export default {
    name: 'Profile',
    mounted(){
        console.log('Profile')
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            console.log(user);
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
            //   document.getElementById('sign-in-status').textContent = 'Signed in';
            //   document.getElementById('sign-in').textContent = 'Sign out';
            //   document.getElementById('account-details').textContent = JSON.stringify({
            //     displayName: displayName,
            //     email: email,
            //     emailVerified: emailVerified,
            //     phoneNumber: phoneNumber,
            //     photoURL: photoURL,
            //     uid: uid,
            //     accessToken: accessToken,
            //     providerData: providerData
            //   }, null, '  ');
            });
          } else {
            // User is signed out.
            console.log('Logout')
            // document.getElementById('sign-in-status').textContent = 'Signed out';
            // document.getElementById('sign-in').textContent = 'Sign in';
            // document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        });
    }
}
</script>

