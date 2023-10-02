1. db.createCollection("companydrives")
2.db.companydrives.insertMany(
    [
        {
            "drive": "Amazon",
            "dateHeld": "20200909",
            "attendedStudents": [1, 2, 3, 4, 5]
        },
        {
            "drive": "Meta",
            "dateHeld": "20201019",
            "attendedStudents": [6, 7, 8, 9, 10]
        },
        {
            "drive": "Google",
            "dateHeld": "20201029",
            "attendedStudents": [11, 12, 13, 14, 15]
        },
        {
            "drive": "Myntra",
            "dateHeld": "20201110",
            "attendedStudents": [16, 17, 18, 19, 20]
        }
    ]);
