<template>
    <div id="login">
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import  * as firebaseui from 'firebaseui'
export default {
    name: "Login",
    data: ()=>({
        firebaseUI:  new firebaseui.auth.AuthUI(firebase.auth()),
        firebaseUIConfig: {
            signInSuccessUrl: '/profile',
            signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            // Terms of service url.
            tosUrl: '/term-of-use',
            // Privacy policy url.
            privacyPolicyUrl: '/policy'
        }
    }),
    mounted(){
        console.log('login page')
        this.firebaseUI.start('#firebaseui-auth-container', this.firebaseUIConfig);
        
    }
}
</script>
<style scoped>
@import url('https://cdn.firebase.com/libs/firebaseui/3.2.0/firebaseui.css');
</style>
