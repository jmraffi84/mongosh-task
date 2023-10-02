1. db.createCollection("mentor")
2.db.mentor.insertMany([{
    "mentorID": 1,
    "mentor": "Sanjay",
    "mentee": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
},
{
    "mentorID": 2,
    "mentor": "Vishnu",
    "mentee": [6, 7, 8, 9, 10, 21, 22, 23, 24, 25]
},
{
    "mentorID": 3,
    "mentor": "Farook",
    "mentee": [1, 2, 3, 4, 5, 18, 19, 20]
},
]); 
