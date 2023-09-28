

const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]

function drawPeople() {
    locations.forEach(location => {
        let peopleAtLocation = people.filter(person => person.location == location)
        // console.log(peopleAtLocation)
        let stringOfPictures = ''
        // look at your new array of peopleAtLocation, use a forEach to add their emoji/picture to the location
        peopleAtLocation.forEach(person => stringOfPictures += person.picture)
        // console.log(location, stringOfPictures);
        const locationElement = document.getElementById(location)
        locationElement.innerText = stringOfPictures
    })
}

function changeLocation() {

    people.forEach(person => {

        const randomLocationIndex = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomLocationIndex]
        // console.log('random location', randomLocation);

        person.location = randomLocation
    })
}

function attackPostOffice() {
    const area = people.filter(person => person.location == '🏤')
    console.log('🏤');
    area.forEach(person => person.picture = '🦇')
    changeLocation()
    drawPeople()
}
function attackHospital() {
    const area = people.filter(person => person.location == '🏥')
    console.log('🏥');
    area.forEach(person => person.picture = '🦇')
    changeLocation()
    drawPeople()
}
function attackFactory() {
    const area = people.filter(person => person.location == '🏭')
    console.log('🏭');
    area.forEach(person => person.picture = '🦇')
    changeLocation()
    drawPeople()
}
function attackOffice() {
    const area = people.filter(person => person.location == '🏢')
    console.log('🏢');
    area.forEach(person => person.picture = '🦇')
    changeLocation()
    drawPeople()
}
function attackJapan() {
    const area = people.filter(person => person.location == '🏣')
    console.log('🏣');
    area.forEach(person => person.picture = '🦇')
    changeLocation()
    drawPeople()
}



changeLocation()
drawPeople()

