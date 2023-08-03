function skillsMember() {
    var member = {
        name: "John Doe",
        age: 34,
        job: "Web Developer",
        calculateAge: function() {
            return 2018 - this.age;
        }
    };
    console.log(member.calculateAge());
}