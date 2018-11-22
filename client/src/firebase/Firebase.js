import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB27y1gdYay2HLN0R3YNB_Cu7jl4jWAoRU",
    authDomain: "variosproyectos-35b23.firebaseapp.com",
    databaseURL: "https://variosproyectos-35b23.firebaseio.com",
    projectId: "variosproyectos-35b23",
    storageBucket: "variosproyectos-35b23.appspot.com",
    messagingSenderId: "317508774373"
};

const ConfigFire = firebase.initializeApp(config);

export{ConfigFire};