const adviceElement = document.getElementById('advice');
const buttonElement = document.getElementById('new-advice-button');
const adviceNumber = document.getElementById('advice-top')

const advices = [
    "Have the courage to live a life true to yourself, not the life others expect of you.",
    "Never attribute to malice that which can be adequately explained by stupidity.",
    "“There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.” Ernest Hemingway",
    "Do not make decisions when you are angry. Don not make promises when you are happy.",
    "“Never argue with a stupid person, they will drag you down to their level and beat you with experience.” Mark twain",
    "Only pack what you can carry yourself.",
    "Remember you’ll always regret what you didn’t do rather than what you did.",
    "“You’d worry less about what people think about you if you knew how seldom they do.” David Foster Wallace",
    "If you blame it on someone else, don’t expect it to get better.",
    "“You can be the ripest, juiciest peach in the world, but there will always be someone who hates peaches.” Dita von Teese",
    "If the grass is greener on the other side, there’s probably more manure there.",
    "Don’t give up what you want most for what you want now.",
    "With regards to the opposite sex: If you look hungry, you’ll starve.",
    "“Never let your sense of morals prevent you from doing what is right.” Isaac Asimov",
    "Strive to be the man you want your daughter to marry.",
    "“Remember only enemies speak the truth. Friends and lovers lie endlessly, caught in the web of duty.” Stephen King",
    "Never forget your car keys will change your car from one tonne of inert metal into one of the most deadly killing machines that has been invented.",
    "Wait 24 hours before getting mad and reacting about anything. If it doesn’t bother you in 24 hours time, it probably isn’t important enough to get mad over.",
    "Never make someone a priority who only makes you an option.",
    "Try not to take anything personally. No one thinks about you as much as you do.",
]

const adviceNumbers = [
    "A D V I C E #2121",
    "A D V I C E #2345",
    "A D V I C E #2128",
    "A D V I C E #2432",
    "A D V I C E #3211",
    "A D V I C E #2442",
    "A D V I C E #1198",
    "A D V I C E #2340",
    "A D V I C E #1150",
    "A D V I C E #7053",
    "A D V I C E #1234",
    "A D V I C E #4321",
]

buttonElement.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * advices.length);
    const randomAdvice = advices[randomIndex]
    adviceElement.textContent = randomAdvice
})

buttonElement.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * adviceNumbers.length)
    const randomNumbers = adviceNumbers[randomNumber]
    adviceNumber.textContent = randomNumbers
})