// Import necessary modules
import { NextRequest, NextResponse } from 'next/server';

// Define a GET function that handles incoming requests
export async function GET() {
    try {
        const movies: Movie[] = [
            { 
                id: 1, 
                title: 'Avengers: Endgame', 
                poster: '/images/movie1.jpg',
                ageRating: '13+',
                duration: '2h 14m',
                synopsis: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.',
                genre: 'Action',
                isHD: true,
                actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson', 'Mark Ruffalo']
            },
            { 
                id: 2, 
                title: 'Avengers: Infinity War', 
                poster: '/images/movie2.jpg',
                ageRating: '18+',
                duration: '1h 45m',
                synopsis: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
                genre: 'Action',
                isHD: false,
                actors: ['Robert Downey Jr.', 'Chris Hemsworth', 'Chris Evans', 'Scarlett Johansson', 'Benedict Cumberbatch', 'Benedict Cumberbatch', 'Benedict Cumberbatch', 'Benedict Cumberbatch', 'Benedict Cumberbatch', 'Benedict Cumberbatch', 'Benedict Cumberbatch']
            },
            { 
                id: 3, 
                title: 'Captain America: Civil War', 
                poster: '/images/movie3.jpg',
                ageRating: 'PG',
                duration: '1h 30m',
                synopsis: 'Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The team is split into two factions - one that supports registration and the other that opposes it.',
                genre: 'Action',
                isHD: true,
                actors: ['Chris Evans', 'Robert Downey Jr.', 'Scarlett Johansson', 'Bucky Barnes']
            },
            { 
                id: 4, 
                title: 'Spider-Man: No Way Home', 
                poster: '/images/movie4.jpg',
                ageRating: '13+',
                duration: '2h 28m',
                synopsis: 'With Spider-Man’s identity now revealed, Peter Parker asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
                genre: 'Action',
                isHD: true,
                actors: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch', 'Alfred Molina']
            },
            { 
                id: 5, 
                title: 'Black Panther', 
                poster: '/images/movie5.jpg',
                ageRating: 'PG-13',
                duration: '2h 15m',
                synopsis: 'T’Challa, the king of Wakanda, returns home from America to the isolated African nation to take his rightful place on the throne. However, he soon finds himself challenged for the crown by a vengeful outsider.',
                genre: 'Adventure',
                isHD: false,
                actors: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong\'o', 'Danai Gurira']
            },
            { 
                id: 6, 
                title: 'Doctor Strange', 
                poster: '/images/movie6.jpg',
                ageRating: '12+',
                duration: '1h 55m',
                synopsis: 'After his career is destroyed, a brilliant but arrogant surgeon puts his skills to the test to heal himself and discovers the mystical arts.',
                genre: 'Fantasy',
                isHD: false,
                actors: ['Benedict Cumberbatch', 'Chiwetel Ejiofor', 'Rachel McAdams', 'Mads Mikkelsen']
            },
            { 
                id: 7, 
                title: 'Guardians of the Galaxy', 
                poster: '/images/movie7.jpg',
                ageRating: 'PG-13',
                duration: '2h 1m',
                synopsis: 'An orphaned human named Peter Quill is kidnapped by a group of intergalactic criminals, who must pull together to stop a fanatical warrior with plans to purge the universe.',
                genre: 'Sci-Fi',
                isHD: true,
                actors: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel']
            },
            { 
                id: 8, 
                title: 'Thor: Ragnarok', 
                poster: '/images/movie8.jpg',
                ageRating: '13+',
                duration: '2h 10m',
                synopsis: 'Thor is imprisoned on the other side of the universe and must race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld.',
                genre: 'Action',
                isHD: true,
                actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett', 'Mark Ruffalo']
            },
            { 
                id: 9, 
                title: 'Iron Man', 
                poster: '/images/movie9.jpg',
                ageRating: 'PG-13',
                duration: '2h 6m',
                synopsis: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
                genre: 'Sci-Fi',
                isHD: false,
                actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Jeff Bridges', 'Terrence Howard']
            },
            { 
                id: 10, 
                title: 'Ant-Man', 
                poster: '/images/movie10.jpg',
                ageRating: 'PG-13',
                duration: '1h 57m',
                synopsis: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner hero.',
                genre: 'Adventure',
                isHD: false,
                actors: ['Paul Rudd', 'Evangeline Lilly', 'Michael Douglas', 'Corey Stoll']
            },
            { 
                id: 11, 
                title: 'The Incredible Hulk', 
                poster: '/images/movie11.jpg',
                ageRating: 'PG-13',
                duration: '1h 52m',
                synopsis: 'Bruce Banner, a geneticist on the run from the government, must find a cure for the gamma radiation that transforms him into the Hulk.',
                genre: 'Action',
                isHD: false,
                actors: ['Edward Norton', 'Liv Tyler', 'Tim Roth', 'William Hurt']
            },
            { 
                id: 12, 
                title: 'Captain Marvel', 
                poster: '/images/movie12.jpg',
                ageRating: '13+',
                duration: '2h 3m',
                synopsis: 'Carol Danvers becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
                genre: 'Adventure',
                isHD: true,
                actors: ['Brie Larson', 'Samuel L. Jackson', 'Ben Mendelsohn', 'Jude Law']
            },
            { 
                id: 13, 
                title: 'Shang-Chi and the Legend of the Ten Rings', 
                poster: '/images/movie13.jpg',
                ageRating: 'PG-13',
                duration: '2h 12m',
                synopsis: 'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
                genre: 'Fantasy',
                isHD: true,
                actors: ['Simu Liu', 'Awkwafina', 'Tony Leung', 'Menger Zhang']
            },
            { 
                id: 14, 
                title: 'Eternals', 
                poster: '/images/movie14.jpg',
                ageRating: 'PG-13',
                duration: '2h 36m',
                synopsis: 'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When monstrous creatures known as Deviants return, they must step out of the shadows to protect humanity.',
                genre: 'Sci-Fi',
                isHD: true,
                actors: ['Gemma Chan', 'Richard Madden', 'Angelina Jolie', 'Kit Harington']
            },
            { 
                id: 15, 
                title: 'The Avengers', 
                poster: '/images/movie15.jpg',
                ageRating: 'PG-13',
                duration: '2h 23m',
                synopsis: 'Nick Fury of S.H.I.E.L.D. brings together a team of superheroes to form the Avengers and save the world from Loki and his army.',
                genre: 'Action',
                isHD: false,
                actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson', 'Tom Hiddleston']
            },
            { 
                id: 16, 
                title: 'Iron Man 3', 
                poster: '/images/movie16.jpg',
                ageRating: 'PG-13',
                duration: '2h 10m',
                synopsis: 'When Tony Stark’s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
                genre: 'Action',
                isHD: true,
                actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Don Cheadle', 'Ben Kingsley']
            },
            { 
                id: 17, 
                title: 'Thor', 
                poster: '/images/movie17.jpg',
                ageRating: 'PG-13',
                duration: '1h 55m',
                synopsis: 'When the arrogant Thor is exiled to Earth, he must prove himself worthy to reclaim his title and powers.',
                genre: 'Fantasy',
                isHD: false,
                actors: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins']
            },
            { 
                id: 18, 
                title: 'Captain America: The First Avenger', 
                poster: '/images/movie18.jpg',
                ageRating: 'PG-13',
                duration: '2h 4m',
                synopsis: 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a potent serum. He must then stop the Red Skull from using a weapon of mass destruction.',
                genre: 'Adventure',
                isHD: false,
                actors: ['Chris Evans', 'Hayley Atwell', 'Tommy Lee Jones', 'Hugo Weaving']
            },
            { 
                id: 19, 
                title: 'Iron Man 2', 
                poster: '/images/movie19.jpg',
                ageRating: 'PG-13',
                duration: '2h 4m',
                synopsis: 'With the world now aware of his dual life as Iron Man, Tony Stark must contend with both his declining health and an enemy seeking revenge.',
                genre: 'Action',
                isHD: true,
                actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Don Cheadle', 'Mickey Rourke']
            },
            { 
                id: 20, 
                title: 'Guardians of the Galaxy Vol. 2', 
                poster: '/images/movie20.jpg',
                ageRating: 'PG-13',
                duration: '2h 16m',
                synopsis: 'The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill’s true parentage.',
                genre: 'Sci-Fi',
                isHD: true,
                actors: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Kurt Russell']
            },
        ]; 

        // Return JSON response with the sorted list of movies
        return NextResponse.json(movies);

    } catch (error) {
        // Log any errors that occur during the execution
        console.log("[MOVIES]", error);

        // Return an internal server error response
        return new NextResponse("Internal Error", { status: 500 });
    }
}
