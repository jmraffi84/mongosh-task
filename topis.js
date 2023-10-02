1.
db.createCollection("topics")

2.
db.topics.insertMany(
    [
        {
            "topicDate": "20201005",
            "topic": "JavascriptBasics"
        },
        {
            "topicDate": "20201010",
            "topic": "JavascriptArraymethods"
        },
        {
            "topicDate": "20201015",
            "topic": "JavascriptHTMLDOM",
        },
        {
            "topicDate": "20201020",
            "topic": "JavascriptFetchAPI"
        },
        {
            "topicDate": "20201023",
            "topic": "JavascriptAsync"
        },
        {
            "topicDate": "20201025",
            "topic": "ReactBasics",
        },
        {
            "topicDate": "20201029",
            "topic": "Reactstateandprops",
        },
        {
            "topicDate": "20201030",
            "topic": "ReactRouterDOM",
        },
        {
            "topicDate": "20201101",
            "topic": "ReactReduxStore",
        },
        {
            "topicDate": "20200910",
            "topic": "HTML5Basics"
        },
        {
            "topicDate": "20200920",
            "topic": "CSSFlexBox"
        }
    ]
)
