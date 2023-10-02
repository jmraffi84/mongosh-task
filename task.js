1. db.createCollection("task")
2. db.task.insertMany([
    {
        "id": "1",
        "task_name": "html",
        "status": "false"
    },
    {
        "id": "2",
        "task_name": "css",
        "status": "false"
    },
    {
        "id": "3",
        "task_name": "golang",
        "status": "false"
    },
    {
        "id": "4",
        "task_name": "js",
        "status": "false"
    },
    {
        "id": "5",
        "task_name": "django",
        "status": "false"
    },
    {
        "id": "6",
        "task_name": "python",
        "status": "false"
    },
])


db.task.insertMany(
    [
        {
            "taskDate": "20201005",
            "task": "variablesandoperatorspractice",
            "taskSubmitted": [
                1,
                2,
                3
            ],
            "taskPending": [
                7,
                8,
                9
            ]
        },
        {
            "taskDate": "20201010",
            "task": "Arraymethodspractice",
            "taskSubmitted": [
                1,
                2
            ],
            "taskPending": [
                10,
                5,
                4
            ]
        },
        {
            "taskDate": "20201015",
            "task": "forms,calculatorusingDOM",
            "taskSubmitted": [
                2,
                3,
                5
            ],
            "taskPending": [
                1,
                11,
                13
            ]
        },
        {
            "taskDate": "20201020",
            "task": "DisplayflagsfromRestcountryAPI",
            "taskSubmitted": [
                1,
                3,
                4,
                8,
                9
            ],
            "taskPending": [
                11,
                21,
                22
            ]
        },
        {
            "taskDate": "20201023",
            "task": "TimerCountdown",
            "taskSubmitted": [
                3,
                4,
                5
            ],
            "taskPending": [
                6,
                16
            ]
        },
        {
            "taskDate": "20201025",
            "task": "Reactcomponentpractice",
            "taskSubmitted": [
                1,
                2,
                3,
                4,
                5
            ],
            "taskPending": [
                13,
                17
            ]
        },
        {
            "taskDate": "20201029",
            "task": "Displaydashboardincards",
            "taskSubmitted": [
                5,
                2,
                3
            ],
            "taskPending": [
                17,
                18,
                19
            ]
        },
        {
            "taskDate": "20200910",
            "task": "HTML5Forms",
            "taskSubmitted": [1, 2, 3, 12, 15, 15],
            "taskPending": [10, 8, 9]
        },
        {
            "taskDate": "20200920",
            "task": "Resume Using Flexbox",
            "taskSubmitted": [1, 2],
            "taskPending": [10, 5, 4]
        }
    ]);


