const data = [
    {
        name : 'Tushar',
        age : 20,
        gender : 'male',
        lookingfor : 'female',
        location : 'Cumilla',
        image : 'https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-1/280205052_1393862467703322_208753879341624956_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qP1-vIGhui4AX_GgMNh&_nc_ht=scontent.fdac27-2.fna&oh=00_AT_Xe3Ja7bgWYUyn7gtncTsFG-hxvOax0Jzh_Ve5Wp5XLg&oe=633D3B68'
    },
    {
        name : 'Dihan',
        age : 20,
        gender : 'male',
        lookingfor : 'female',
        location : 'Munshiganj',
        image : 'https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-1/81688007_2377750415870074_2993098112274268160_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rJS0bS3YPB0AX9UyaNQ&_nc_ht=scontent.fdac27-2.fna&oh=00_AT-QiY8yPVdRDMIi8MkgB-RaYMzYlAVZkJo_TIqmII54FQ&oe=635B7B30'
    },
    {
        name : 'Labonno',
        age : 20,
        gender : 'female',
        lookingfor : 'male',
        location : 'Narayanganj',
        image : 'https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-1/283419499_1418222738622083_5924206008531042877_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6M5e_zZUc5gAX_6ZIUD&_nc_ht=scontent.fdac27-2.fna&oh=00_AT-D5VbH94yTL5dNJRWY0l36V5a7YcAWGigh6rIrJRjdpQ&oe=633C5CD7'
    },
    {
        name : 'Saiful',
        age : 21,
        gender : 'male',
        lookingfor : 'female',
        location : 'Narayanganj',
        image : 'https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/292435773_3157086961200099_820556284942078764_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nTF_foi12PMAX-z_Lnb&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8tdgVHxdcSJ5vmdA4hAeKUzvyBIoL8SCVRW7MdCGCuhQ&oe=633D4DEE'
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