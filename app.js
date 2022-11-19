const data = [
    {
        name : 'Tushar',
        age : 20,
        gender : 'male',
        lookingfor : 'female',
        location : 'Cumilla',
        image : 'https://cdn.pixabay.com/photo/2014/09/07/21/58/cyborg-438398__340.jpg',
    },
    {
        name : 'Dihan',
        age : 20,
        gender : 'male',
        lookingfor : 'female',
        location : 'Munshiganj',
        image : 'https://cdn.pixabay.com/photo/2013/07/13/11/43/spaceman-158537__340.png',
    },
    {
        name : 'Labonno',
        age : 20,
        gender : 'female',
        lookingfor : 'male',
        location : 'Narayanganj',
        image : 'https://cdn.pixabay.com/photo/2018/09/11/03/03/gothic-3668533__340.jpg',
    },
    {
        name : 'Saiful',
        age : 21,
        gender : 'male',
        lookingfor : 'female',
        location : 'Narayanganj',
        image : 'https://cdn.pixabay.com/photo/2013/07/13/11/43/spaceman-158537__340.png',
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click',nextProfile);

// Next Profile Display
function nextProfile()
{
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined)
    {
        document.getElementById('profileDisplay').innerHTML = `
    
        <ul class="list-group">
            <li class="list-group-item">Name : ${currentProfile.name}</li>
            <li class="list-group-item">Age : ${currentProfile.age}</li>
            <li class="list-group-item">Location : ${currentProfile.location}</li>
            <li class="list-group-item">Preference : ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>

    `;

    document.getElementById('imageDisplay').innerHTML = `<img width="200px" height="200px" src="${currentProfile.image}">`;
    }
    else
    {
        // No more profiles
        window.location.reload();
    }

}

// Profile Iterator 
function profileIterator(profiles)
{
    let nextIndex = 0;
    return{
        next : function()
        {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done : true }
        }
    };
}
