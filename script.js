function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("Full Name: " + profile.getName());
    console.log("Email: " + profile.getEmail());

    var x = document.getElementsByClassName("logged");
    var i;
    for (i = 0; i <= x.length; i++) {
        x[0].classList.remove("logged");
    }
}

function renderButton() {
    gapi.signin2.render('gs', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

function onSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        hideDashboard();
    });
}

function hideDashboard() {
    var x = document.getElementsByClassName("onlylogged");
    var i;
    for (i = 0; i <= x.length; i++) {
        x[i].classList.remove("logged");
    }
}

function gotoDashboard() {

}