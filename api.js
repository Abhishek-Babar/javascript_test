const teams = [
    {
        id: 1,
        fullName: "Mumbai Indians",
        key: "MI",
        champioshipsWon: 5,
        teamIcon: "./images/teams/mumbai.png",
        border: "#003a63",
        background: "linear-gradient(100deg,#005da0,#003a63)",
        top_bowler: "Jasprit Bumrah",
        top_batsman: "Kieron Pollard",
        team_icon: "Rohit Sharma"
    },
    {
        id: 2,
        fullName: "Chennai Super Kings",
        key: "CSK",
        champioshipsWon: 3,
        teamIcon: "./images/teams/chennai.png",
        border: "#f85c00",
        background: "linear-gradient(100deg,#fdb913,#f85c00)",
        top_bowler: "Deepak Chahar",
        top_batsman: "Ruturaj Gaikwad",
        team_icon: "Mahendra Singh Dhoni"
    },
    {
        id: 3,
        fullName: "Royal Challengers Banglore",
        key: "RCB",
        champioshipsWon: 0,
        teamIcon: "./images/teams/banglore.png",
        border: "#464646",
        background: "linear-gradient(100deg,#000,#464646)",
        top_bowler: "Yuzvendra Chahal",
        top_batsman: "AB de Villiers",
        team_icon: "Virat Kohli"
    },
    {
        id: 4,
        fullName: "Sunrisers Hyderabad",
        key: "SRH",
        champioshipsWon: 1,
        teamIcon: "./images/teams/hyderabad.png",
        border:"#b81c25",
        background: "linear-gradient( 100deg,#fb643e,#b81c25)",
        top_bowler: "Rashid Khan",
        top_batsman: "David Warner",
        team_icon: "Kane Williamson"
    },
    {
        id: 5,
        fullName: "Kolkata Knight Riders",
        key: "KKR",
        champioshipsWon: 2,
        teamIcon: "./images/teams/kolkata.png",
        border:"#3d2057",
        background: "linear-gradient(100deg,#70458f,#3d2057)",
        top_bowler: "Pat Cummins",
        top_batsman: "Shubman Gill",
        team_icon: "Dinesh Karthik"
    },
    {
        id: 6,
        fullName: "Punjab Kings",
        key: "PBKS",
        champioshipsWon: 0,
        teamIcon: "./images/teams/punjab.png",
        border:"#740f0b",
        background: "linear-gradient(100deg,#aa4545,#740f0b)",
        top_bowler: "Murugan Ashwin",
        top_batsman: "Mayank Agarwal",
        team_icon: "KL Rahul"
    },
    {
        id: 7,
        fullName: "Delhi Capitals",
        key: "DC",
        champioshipsWon: 0,
        teamIcon: "./images/teams/delhi.png",
        border:"#0358a7",
        background: "linear-gradient(100deg,#004c93,#0358a7)",
        top_bowler: "Ravichandran Ashwin",
        top_batsman: "Steve Smith",
        team_icon: "Shikhar Dhawan"
    },
    {
        id: 8,
        fullName: "Rajasthan Royals",
        key: "RR",
        champioshipsWon: 1,
        teamIcon: "./images/teams/rajasthan.png",
        border:"#0358a7",
        background: "linear-gradient(100deg,#2d4d9d,#172e5e)",
        top_bowler: "Mustafizur Rahman",
        top_batsman: "Shivam Dube",
        team_icon: "Ben Stokes"
    }
]

const players = [
    {
        id: 1,
        playerName: "Hardik Pandya",
        from: "MI",
        price: "6.50 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/2740.png"
    },
    {
        id: 2,
        playerName: "Krunal Pandya",
        from: "MI",
        price: "1.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image: "https://static.iplt20.com/players/210/3183.png"
    },
    {
        id: 3,
        playerName: "Rohit Sharma",
        from: "MI",
        price: "6.50 Cr",
        isPlaying: true,
        description: "BatsMan",
        image: "https://static.iplt20.com/players/210/107.png"
    },
    {
        id: 4,
        playerName: "Ishan Kishan",
        from: "MI",
        price: "2.50 Cr",
        isPlaying: true,
        description: "Wicket Keeper Batsman",
        image: "https://static.iplt20.com/players/210/2975.png"
    },
    {
        id: 5,
        playerName: "Kieron Pollard",
        from: "MI",
        price: "5.50 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/210.png"
    },
    {
        id: 6,
        playerName: "Jasprit Bumrah",
        from: "MI",
        price: "8.50 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/1124.png"
    },
    {
        id: 7,
        playerName: "Rahul Chahar",
        from: "MI",
        price: "2 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/3763.png"
    },
    {
        id: 8,
        playerName: "Trent Boult",
        from: "MI",
        price: "4.50 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/969.png"
    },
    {
        id: 9,
        playerName: "Quinton De Kock",
        from: "MI",
        price: "7.50 Cr",
        isPlaying: true,
        description: "BatsMan",
        image: "https://static.iplt20.com/players/210/834.png"
    },
    {
        id: 10,
        playerName: "Suryakumar Yadav",
        from: "MI",
        price: "3.50 Cr",
        isPlaying: true,
        description: "BatsMan",
        image: "https://static.iplt20.com/players/210/108.png"
    },
    {
        id: 11,
        playerName: "Piyush Chawla",
        from: "MI",
        price: "3 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/76.png"
    },
    {
        id: 12,
        playerName: "Virat Kohli",
        from: "RCB",
        price: "12.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/164.png"
    },
    {
        id: 13,
        playerName: "AB de Villiers",
        from: "RCB",
        price: "11.00 Cr",
        isPlaying: true,
        description: "Wicket Keeper Batsman",
        image: "https://static.iplt20.com/players/210/233.png"
    },
    {
        id: 14,
        playerName: "Devdutt Padikkal",
        from: "RCB",
        price: "3.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/5430.png"
    },
    {
        id: 15,
        playerName: "Glenn Maxwell",
        from: "RCB",
        price: "6.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image: "https://static.iplt20.com/players/210/282.png"
    },
    {
        id: 16,
        playerName: "Shahbaz Ahmed",
        from: "RCB",
        price: "2.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/13803.png"
    },
    {
        id: 17,
        playerName: "Mohammed Siraj",
        from: "RCB",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/3840.png"
    },
    {
        id: 18,
        playerName: "Daniel Sams",
        from: "RCB",
        price: "8.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image: "https://static.iplt20.com/players/210/4649.png"
    },
    {
        id: 19,
        playerName: "Rajat Patidar",
        from: "RCB",
        price: "8.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/5471.png"
    },
    {
        id: 20,
        playerName: "Yuzvendra Chahal",
        from: "RCB",
        price: "7.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/111.png"
    },
    {
        id: 21,
        playerName: "Navdeep Saini",
        from: "RCB",
        price: "5.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/3824.png"
    },
    {
        id: 22,
        playerName: "Kyle Jamieson",
        from: "RCB",
        price: "3.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image: "https://static.iplt20.com/players/210/1616.png"
    },
    {
        id: 23,
        playerName: "Mahendra Singh Dhoni",
        from: "CSK",
        price: "15.00 Cr",
        isPlaying: true,
        description: "Wicket Keeper Batsman",
        image: "https://static.iplt20.com/players/210/1.png"
    },
    {
        id: 24,
        playerName: "Imran Tahir",
        from: "CSK",
        price: "5.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/898.png"
    },
    {
        id: 25,
        playerName: "Ruturaj Gaikwad",
        from: "CSK",
        price: "3.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/5443.png"
    },
    {
        id: 26,
        playerName: "Moeen Ali",
        from: "CSK",
        price: "5.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image: "https://static.iplt20.com/players/210/1735.png"
    },
    {
        id: 27,
        playerName: "Ravindra Jadeja",
        from: "CSK",
        price: "9.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image: "https://static.iplt20.com/players/210/9.png"
    },
    {
        id: 28,
        playerName: "Deepak Chahar",
        from: "CSK",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/140.png"
    },
    {
        id: 29,
        playerName: "Suresh Raina",
        from: "CSK",
        price: "7.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/14.png"
    },
    {
        id: 30,
        playerName: "Shardul Thakur",
        from: "CSK",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/1745.png"
    },
    {
        id: 31,
        playerName: "Faf du Plesis",
        from: "CSK",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/24.png"
    },
    {
        id: 32,
        playerName: "Dwayne Bravo",
        from: "CSK",
        price: "5.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image: "https://static.iplt20.com/players/210/25.png"
    },
    {
        id: 33,
        playerName: "Sam Curran",
        from: "CSK",
        price: "3.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/2939.png"
    },
    {
        id: 34,
        playerName: "KL Rahul",
        from: "PBKS",
        price: "10.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/1125.png"
    },
    {
        id: 35,
        playerName: "Harpreet Brar",
        from: "PBKS",
        price: "3.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/5441.png"
    },
    {
        id: 36,
        playerName: "Ishan Porel",
        from: "PBKS",
        price: "1.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image: "https://static.iplt20.com/players/210/3777.png"
    },
    {
        id: 37,
        playerName: "Moises Henriques",
        from: "PBKS",
        price: "2.50 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/388.png"
    },
    {
        id: 38,
        playerName: "Chris Gyale",
        from: "PBKS",
        price: "9.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image: "https://static.iplt20.com/players/210/236.png"
    },
    {
        id: 39,
        playerName: "Murugan Ashwin",
        from: "PBKS",
        price: "1.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/3187.png"
    },
    {
        id: 40,
        playerName: "Deepak Hooda",
        from: "PBKS",
        price: "3.50 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/1556.png"
        
    },
    {
        id: 41,
        playerName: "Chris Jordan",
        from: "PBKS",
        price: "2.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/1299.png"
    },
    {
        id: 42,
        playerName: "Mayank Agarwal",
        from: "PBKS",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/158.png"
    },
    {
        id: 43,
        playerName: "David Malan",
        from: "PBKS",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/3318.png"
    },
    {
        id: 44,
        playerName: "Prabhsimran Singh",
        from: "PBKS",
        price: "1.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/5436.png"
    },
    {
        id: 45,
        playerName: "Yashasvi Jaiswal",
        from: "RR",
        price: "10.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/13538.png"
    },
    {
        id: 46,
        playerName: "Riyan Parag",
        from: "RR",
        price: "3.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/4445.png"
    },
    {
        id: 47,
        playerName: "Shreyas Gopal",
        from: "RR",
        price: "1.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/1748.png"
    },
    {
        id: 48,
        playerName: "Shivam Dube",
        from: "RR",
        price: "2.50 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/5431.png"
    },
    {
        id: 49,
        playerName: "Chris Moris",
        from: "RR",
        price: "9.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/836.png"
    },
    {
        id: 50,
        playerName: "Mustafizur Rahman",
        from: "RR",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/1594.png"
    },
    {
        id: 51,
        playerName: "David Miller",
        from: "RR",
        price: "3.50 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/187.png"
    },
    {
        id: 52,
        playerName: "Sanju Samson",
        from: "RR",
        price: "2.00 Cr",
        isPlaying: true,
        description: "Wicket Keeper Batsman",
        image:"https://static.iplt20.com/players/210/258.png"
    },
    {
        id: 53,
        playerName: "Ben Stokes",
        from: "RR",
        price: "6.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/1154.png"
    },
    {
        id: 54,
        playerName: "Jaydev Unadkat",
        from: "RR",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/86.png"
    },
    {
        id: 55,
        playerName: "Rahul Tewatia",
        from: "RR",
        price: "1.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/1749.png"
    },
    {
        id: 56,
        playerName: "Kane Williamson",
        from: "SRH",
        price: "10.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/440.png"
    },
    {
        id: 57,
        playerName: "Rashid Khan",
        from: "SRH",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/2885.png"
    },
    {
        id: 58,
        playerName: "Wriddhiman Saha",
        from: "SRH",
        price: "3.00 Cr",
        isPlaying: true,
        description: "Wicket Keeper Batsman",
        image:"https://static.iplt20.com/players/210/16.png"
    },
    {
        id: 59,
        playerName: "David Warner",
        from: "SRH",
        price: "9.50 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/170.png"
    },
    {
        id: 60,
        playerName: "Kedar Jadhav",
        from: "SRH",
        price: "3.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/297.png"
    },
    {
        id: 61,
        playerName: "Khaleel Ahmed",
        from: "SRH",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/2964.png"
    },
    {
        id: 62,
        playerName: "Jason Holder",
        from: "SRH",
        price: "3.50 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/1075.png"
    },
    {
        id: 63,
        playerName: "Bhuveshwar Kumar",
        from: "SRH",
        price: "2.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/116.png"
    },
    {
        id: 64,
        playerName: "Johnny Bairstow",
        from: "SRH",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/506.png"
    },
    {
        id: 65,
        playerName: "Manish Pandey",
        from: "SRH",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/123.png"
    },
    {
        id: 66,
        playerName: "Abdul Samad",
        from: "SRH",
        price: "1.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/19352.png"
    },
    {
        id: 67,
        playerName: "Rishab Pant",
        from: "DC",
        price: "10.00 Cr",
        isPlaying: true,
        description: "Wicket Keeper Batsman",
        image:"https://static.iplt20.com/players/210/2972.png"
    },
    {
        id: 68,
        playerName: "Kagiso Rabada",
        from: "DC",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/1664.png"
    },
    {
        id: 69,
        playerName: "Steve Smith",
        from: "DC",
        price: "13.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/271.png"
    },
    {
        id: 70,
        playerName: "Ajinkya Rahane",
        from: "DC",
        price: "9.50 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/135.png"
    },
    {
        id: 71,
        playerName: "Chris Woakes",
        from: "DC",
        price: "3.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/967.png"
    },
    {
        id: 72,
        playerName: "Ravichandran Ashwin",
        from: "DC",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/8.png"
    },
    {
        id: 73,
        playerName: "Axar Patel",
        from: "DC",
        price: "3.50 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/1113.png"
    },
    {
        id: 74,
        playerName: "Shimron Hetmyer",
        from: "DC",
        price: "2.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/1705.png"
    },
    {
        id: 75,
        playerName: "Shikhar Dhawan",
        from: "DC",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/41.png"
    },
    {
        id: 76,
        playerName: "Umesh Yadav",
        from: "DC",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/59.png"
    },
    {
        id: 77,
        playerName: "Prithvi Shaw",
        from: "DC",
        price: "1.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/3764.png"
    },
    {
        id: 78,
        playerName: "Pawan Negi",
        from: "KKR",
        price: "10.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/53.png"
    },
    {
        id: 79,
        playerName: "Kuldeep Yadav",
        from: "KKR",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/261.png"
    },
    {
        id: 80,
        playerName: "Lockie Ferguson",
        from: "KKR",
        price: "3.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/3729.png"
    },
    {
        id: 81,
        playerName: "Dinesh Karthik",
        from: "KKR",
        price: "9.50 Cr",
        isPlaying: true,
        description: "Wicket Keeper Batsman",
        image:"https://static.iplt20.com/players/210/102.png"
    },
    {
        id: 82,
        playerName: "Harbhajan Singh",
        from: "KKR",
        price: "3.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/103.png"
    },
    {
        id: 83,
        playerName: "Kamlesh Nagarkoti",
        from: "KKR",
        price: "4.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/3766.png"
    },
    {
        id: 84,
        playerName: "Shubman Gill",
        from: "KKR",
        price: "3.50 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/3761.png"
    },
    {
        id: 85,
        playerName: "Rahul Tripati",
        from: "KKR",
        price: "2.00 Cr",
        isPlaying: true,
        description: "Batsman",
        image:"https://static.iplt20.com/players/210/3838.png"
    },
    {
        id: 86,
        playerName: "Pat Cummins",
        from: "KKR",
        price: "6.00 Cr",
        isPlaying: true,
        description: "Bowler",
        image:"https://static.iplt20.com/players/210/488.png"
    },
    {
        id: 87,
        playerName: "Andre Russell",
        from: "KKR",
        price: "4.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/177.png"
    },
    {
        id: 88,
        playerName: "Varun Chakaravarthy",
        from: "KKR",
        price: "1.00 Cr",
        isPlaying: true,
        description: "All Rounder",
        image:"https://static.iplt20.com/players/210/5432.png"
    }
]

const player = JSON.parse(localStorage.getItem("players")) === null ?
                  players : JSON.parse(localStorage.getItem("players"));
