let User = {
    methods: {
        getRefLink() {
            return "https://bomber.best/r/Qfkfo225Fef5fw15";
        },
        getRefAward() {
            return "0.00";
        },
        earnRefAward() {
            console.log('user ref award ' + User.methods.getRefAward() + ' earned');
        },
        logout() {
            console.log('user logged out');
        }
    }
}
export default User;

