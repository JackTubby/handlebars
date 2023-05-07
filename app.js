const peopleObj = {
    "people": [
        {
            id: 1,
            name: "Jack",
            age: 22
        },
        {
            id: 2,
            name: "Jane",
            age: 32
        },
        {
            id: 3,
            name: "John",
            age: 42
        }
    ]
}

document.addEventListener("DOMContentLoaded", function() {
    const peopleTemplate = document.getElementById("people-template").innerHTML;
    const compiledPeopleTemplate = Handlebars.compile(peopleTemplate);
    document.querySelector(".people-list-container").innerHTML = compiledPeopleTemplate(peopleObj); 
});