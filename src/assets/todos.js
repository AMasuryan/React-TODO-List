export const dayEnum = {
    0: "SUNDAY",
    1: "MONDAY",
    2: "TUESDAY",
    3: "WEDNESDAY",
    4: "THURSDAY",
    5: "FRIDAY",
    6: "SATURDAY",
}

const todos = [
    {
        id: 1,
        weekDay: dayEnum[1], 
        title: "Walk out the dog",
        description: "Bacon ipsum dolor amet jowl pig pork meatball pork belly. Beef ribs buffalo hamburger burgdoggen.",
        completed: false
    },
    {
        id: 2,
        weekDay: dayEnum[4], 
        title: "Walk out the cat",
        description: "If Bacon Ipsum weren’t enough, or you don’t eat pork and don’t want anything to do with it…",
        completed: false
    },
    {
        id: 3,
        weekDay: dayEnum[2], 
        title: "Do more speak less",
        description: "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro.",
        completed: false
    },
    {
        id: 4,
        weekDay: dayEnum[3], 
        title: "Prepare homework",
        description: "Lorem ipsum dolor amet etsy pabst nulla incididunt YOLO marfa 90’s pickled sriracha lyft kale chips irure.",
        completed: false
    },
    {
        id: 5,
        weekDay: dayEnum[5], 
        title: "Kill Valod",
        description: "Cupcake ipsum dolor. Sit amet candy canes powder cotton candy.",
        completed: false
    },
]

export default todos
