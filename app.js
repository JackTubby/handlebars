const peopleObj = {
    "people": [
        {
            id: 1,
            name: "Jack",
            age: 22,
            location: "London",
            address: "123 drive",
        },
        {
            id: 2,
            name: "Jane",
            age: 32,
            location: null,
            address:  "321 lane",
        },
        {
            id: 3,
            name: "John",
            age: 42,
            location: null,
            address: null,
        }
    ]
}

document.addEventListener("DOMContentLoaded", function() {
    const peopleTemplate = document.getElementById("people-template").innerHTML;
    const compiledPeopleTemplate = Handlebars.compile(peopleTemplate);
    document.querySelector(".people-list-container").innerHTML = compiledPeopleTemplate(peopleObj); 
});