import { z } from 'zod';

const EMOJIS = {
  meals: {
    breakfast: { name: 'Breakfast', code: '\u{1F95E}' },
    lunch: { name: 'Bento Box', code: '\u{1F371}' },
    dinner: { name: 'Pot of Food', code: '\u{1F372}' },
    snack: { name: 'Popcorn', code: '\u{1F37F}' },
    bowl: { name: 'Bowl With Spoon', code: '\u{1F963}' },
    salad: { name: 'Green Salad', code: '\u{1F957}' },
    popcorn: { name: 'Popcorn', code: '\u{1F37F}' },
    bentoBox: { name: 'Bento Box', code: '\u{1F371}' },
    riceBall: { name: 'Rice Ball', code: '\u{1F359}' },
    curryRice: { name: 'Curry Rice', code: '\u{1F35B}' },
    ramen: { name: 'Ramen', code: '\u{1F35C}' },
    spaghetti: { name: 'Spaghetti', code: '\u{1F35D}' },
    bread: { name: 'Bread', code: '\u{1F35E}' },
    cheese: { name: 'Cheese Wedge', code: '\u{1F9C0}' },
    milk: { name: 'Glass of Milk', code: '\u{1F95B}' },
    beverageBox: { name: 'Beverage Box', code: '\u{1F9C3}' },
    cake: { name: 'Cake', code: '\u{1F370}' },
    cupcake: { name: 'Cupcake', code: '\u{1F9C1}' },
    iceCream: { name: 'Ice Cream', code: '\u{1F368}' },
    shallowPanOfFood: { name: 'Shallow Pan of Food', code: '\u{1F958}' },
  },

  workouts: {
    running: { name: 'Person Running', code: '\u{1F3C3}' },
    handstand: { name: 'Woman Doing Handstand', code: '\u{1F938}\u{200D}\u{2640}\u{FE0F}' },
    weightLifting: { name: 'Person Lifting Weights', code: '\u{1F3CB}' },
    biking: { name: 'Person Biking', code: '\u{1F6B4}' },
    swimming: { name: 'Person Swimming', code: '\u{1F3CA}' },
    cartwheel: { name: 'Person Doing Cartwheel', code: '\u{1F938}' },
    basketball: { name: 'Person Bouncing Ball', code: '\u{26F9}' },
    climbing: { name: 'Person Climbing', code: '\u{1F9D7}' },
    yoga: { name: 'Person in Lotus Position', code: '\u{1F9D8}' },
    flexedBiceps: { name: 'Flexed Biceps', code: '\u{1F4AA}' },
    soccerBall: { name: 'Soccer Ball', code: '\u{26BD}' },
    football: { name: 'Football', code: '\u{1F3C8}' },
    tennis: { name: 'Tennis', code: '\u{1F3BE}' },
    volleyball: { name: 'Volleyball', code: '\u{1F3D0}' },
    rugbyFootball: { name: 'Rugby Football', code: '\u{1F3C9}' },
    bicycle: { name: 'Bicycle', code: '\u{1F6B2}' },
    pilates: { name: 'Woman in Lotus Position', code: '\u{1F9D8}\u{200D}\u{2640}\u{FE0F}' },
    dance: { name: 'Woman Dancing', code: '\u{1F483}' },
    martialArts: { name: 'Martial Arts Uniform', code: '\u{1F94B}' },
    boxing: { name: 'Boxing Glove', code: '\u{1F94A}' },
  },

  healthyFoods: {
    greenApple: { name: 'Green Apple', code: '\u{1F34F}' },
    redApple: { name: 'Red Apple', code: '\u{1F34E}' },
    pear: { name: 'Pear', code: '\u{1F350}' },
    tangerine: { name: 'Tangerine', code: '\u{1F34A}' },
    lemon: { name: 'Lemon', code: '\u{1F34B}' },
    banana: { name: 'Banana', code: '\u{1F34C}' },
    watermelon: { name: 'Watermelon', code: '\u{1F349}' },
    grapes: { name: 'Grapes', code: '\u{1F347}' },
    strawberry: { name: 'Strawberry', code: '\u{1F353}' },
    blueberries: { name: 'Blueberries', code: '\u{1FAD0}' },
    melon: { name: 'Melon', code: '\u{1F348}' },
    cherries: { name: 'Cherries', code: '\u{1F352}' },
    peach: { name: 'Peach', code: '\u{1F351}' },
    mango: { name: 'Mango', code: '\u{1F96D}' },
    pineapple: { name: 'Pineapple', code: '\u{1F34D}' },
    coconut: { name: 'Coconut', code: '\u{1F965}' },
    kiwi: { name: 'Kiwi Fruit', code: '\u{1F95D}' },
    tomato: { name: 'Tomato', code: '\u{1F345}' },
    avocado: { name: 'Avocado', code: '\u{1F951}' },
    eggplant: { name: 'Eggplant', code: '\u{1F346}' },
    potato: { name: 'Potato', code: '\u{1F954}' },
    carrot: { name: 'Carrot', code: '\u{1F955}' },
    corn: { name: 'Ear of Corn', code: '\u{1F33D}' },
    cucumber: { name: 'Cucumber', code: '\u{1F952}' },
    leafyGreen: { name: 'Leafy Green', code: '\u{1F96C}' },
    broccoli: { name: 'Broccoli', code: '\u{1F966}' },
    garlic: { name: 'Garlic', code: '\u{1F9C4}' },
    onion: { name: 'Onion', code: '\u{1F9C5}' },
    mushroom: { name: 'Mushroom', code: '\u{1F344}' },
    peanuts: { name: 'Peanuts', code: '\u{1F95C}' },
    chestnut: { name: 'Chestnut', code: '\u{1F330}' },
    chiliPepper: { name: 'Hot Pepper', code: '\u{1F336}' },
    egg: { name: 'Egg', code: '\u{1F95A}' },
    poultryLeg: { name: 'Poultry Leg', code: '\u{1F357}' },
    meat: { name: 'Cut of Meat', code: '\u{1F969}' },
    bacon: { name: 'Bacon', code: '\u{1F953}' },
    fish: { name: 'Fish', code: '\u{1F41F}' },
  },

  progress: {
    weight: { name: 'Weight Lifter', code: '\u{1F3CB}' },
    ruler: { name: 'Straight Ruler', code: '\u{1F4CF}' },
    chart: { name: 'Chart Increasing', code: '\u{1F4C8}' },
    calendar: { name: 'Calendar', code: '\u{1F4C5}' },
  },

  moods: {
    very_sad: { name: 'Very Sad Face', code: '\u{1F62D}' },
    sad: { name: 'Sad Face', code: '\u{1F641}' },
    neutral: { name: 'Neutral Face', code: '\u{1F610}' },
    happy: { name: 'Happy Face', code: '\u{1F642}' },
    very_happy: { name: 'Very Happy Face', code: '\u{1F600}' },
    energetic: { name: 'Star-Struck', code: '\u{1F929}' },
    tired: { name: 'Sleepy Face', code: '\u{1F62A}' },
    stressed: { name: 'Anxious Face with Sweat', code: '\u{1F630}' },
  },

  miscellaneous: {
    stopwatch: { name: 'Stopwatch', code: '\u{23F1}' },
    directHit: { name: 'Direct Hit', code: '\u{1F3AF}' },
    sparkles: { name: 'Sparkles', code: '\u{2728}' },
    glowingStar: { name: 'Glowing Star', code: '\u{1F31F}' },
    trophy: { name: 'Trophy', code: '\u{1F3C6}' },
    firstPlaceMedal: { name: '1st Place Medal', code: '\u{1F947}' },
    sportsMedal: { name: 'Sports Medal', code: '\u{1F3C5}' },
    fire: { name: 'Fire', code: '\u{1F525}' },
    rocket: { name: 'Rocket', code: '\u{1F680}' },
    camera: { name: 'Camera', code: '\u{1F4F7}' },
    balance: { name: 'Balance Scale', code: '\u{2696}' },
    robot: { name: 'Robot', code: '\u{1F916}' },
    bullseye: { name: 'Bullseye', code: '\u{1F3AF}' },
    ruler: { name: 'Ruler', code: '\u{1F4CF}' },
    bell: { name: 'Bell', code: '\u{1F514}' },
    water: { name: 'Water Drop', code: '\u{1F4A7}' },
    sleep: { name: 'Sleeping Face', code: '\u{1F634}' },
    goal: { name: 'Checkered Flag', code: '\u{1F3C1}' },
  },
};

export default EMOJIS;