const state = {
    profilePage: {
        posts : [
    {id: 1, text: "Hi, how are you", likes: 12},
    {id: 2, text: "Hey there", likes: 32},
    {id: 3, text: "I won", likes: 124},
    {id: 4, text: "I did my first job", likes: 2}
]
    },
    dialogsPage: {
        dialogs : [
            {id: 1, name: "Dima", avatarLink: "https://image.flaticon.com/icons/png/128/168/168899.png"},
            {id: 2, name: "Sasha", avatarLink: "https://image.flaticon.com/icons/png/128/168/168874.png"},
            {id: 3, name: "Masha", avatarLink: "https://image.flaticon.com/icons/png/128/168/168883.png"},
            {id: 4, name: "Vova", avatarLink: "https://image.flaticon.com/icons/png/128/168/168888.png"},
        ],
        messages : [
            [
                {id: 0, text: "Hi"},
                {id: 1, text: "What's up?"},
                {id: 0, text: "Yo, amazing!"}
            ],

            [
                {id: 1, text: "Heey"},
                {id: 1, text: "How was your day?"},
                {id: 0, text: "Hey there, amazing!"}
            ],

            [
                {id: 0, text: "Wuss up"},
                {id: 1, text: "Hii"},
                {id: 1, text: "How is it going?"}
            ],

            [
                {id: 0, text: "Hello"},
                {id: 0, text: "Are you ok?"},
                {id: 1, text: "Thanks, i'm good"}
            ],

        ]
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: "Yura",
                photoLink: "https://ichef.bbci.co.uk/news/976/cpsprodpb/10A71/production/_117090286_mediaitem117090284.jpg"
            },

            {
                id: 2,
                name: "Lena",
                photoLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
            },

            {
                id: 3,
                name: "Nyanya",
                photoLink: "https://static01.nyt.com/images/2021/05/20/science/20VIRUS-DOGS-SPILLOVER1/20VIRUS-DOGS-SPILLOVER1-videoSixteenByNineJumbo1600.jpg"
            }
        ]
    }
}

export default state;