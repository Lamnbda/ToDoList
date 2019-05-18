

let today = new Date();

let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

let day = today.toLocaleDateString('en-US', options);