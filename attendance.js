1. db.createCollection("attendance")
2. db.attendance.insertMany([
    {
        "id": 1,
        "name": "user1",
        "email": "user1@gmail.com",
        "password": "pwd1",
        "attendanceDate": "20201005",
        "studentsPresent": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "topic": "html",
        "absentees": [21, 23, 25]
    },

    {
        "id": 2,
        "name": "user2",
        "email": "user2@gmail.com",
        "password": "pwd2",
        "attendanceDate": "20201010",
        "studentsPresent": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 20],
        "topic": "css",
        "absentees": [20, 14, 15]
    },
    {
        "id": 3,
        "name": "user3",
        "email": "user2@gmail.com",
        "password": "pwd3",
        "attendanceDate": "20201015",
        "studentsPresent": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "topic": "js",
        "absentees": [1, 17]
    },
    {
        "id": 4,
        "name": "user4",
        "email": "user4@gmail.com",
        "password": "pwd4",
        "attendanceDate": "20201020",
        "studentsPresent": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 23],
        "topic": "js",
        "absentees": [19, 22]
    },
    {
        "id": 5,
        "name": "user5",
        "email": "user5@gmail.com",
        "password": "pwd5",
        "attendanceDate": "20201023",
        "studentsPresent": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 22, 25],
        "topic": "django",
        "absentees": [20, 16]
    },
    {
        "id": 6,
        "name": "user6",
        "email": "user6@gmail.com",
        "password": "pwd6",
        "attendanceDate": "20201025",
        "studentsPresent": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22],
        "topic": "django",
        "absentees": [24, 25]
    }
])
