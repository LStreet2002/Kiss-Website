var div = document.createElement("div")
div.classList.add("divider")

function head() {

    var fix = document.createElement("div")
    fix.classList.add("navbar-fixed");
    document.querySelector('#holder').appendChild(fix)

    var hback = document.createElement("nav")

    hback.id = "hback";
    fix.appendChild(hback);

    var car = document.createElement("i");
    car.classList.add("large", "material-icons", "Car");
    car.innerHTML = "directions_car";
    document.querySelector('#hback').appendChild(car);

    var person = document.createElement("i");
    person.classList.add("large", "material-icons", "Person");
    person.innerHTML = "person_pin";
    document.querySelector('#hback').appendChild(person);

    var review = document.createElement("i");
    review.classList.add("large", "material-icons", "Review");
    review.innerHTML = "star";
    document.querySelector('#hback').appendChild(review);

    var Job = document.createElement("i");
    Job.classList.add("large", "material-icons", "Job");
    Job.innerHTML = "work";
    document.querySelector('#hback').appendChild(Job);

    var contact = document.createElement("i");
    contact.classList.add("large", "material-icons", "Contact");
    contact.innerHTML = "phone_enabled";
    document.querySelector('#hback').appendChild(contact);

    var menu = document.querySelector(".sidenav-trigger")
    menu.classList.add("Menu")
    document.querySelector("#hback").appendChild(menu)

    var logo = document.createElement("img")
    logo.src = "pics/KISS_Logo_site.jpg"
    logo.id = "logo"
    document.querySelector("#hback").appendChild(logo);



}
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var collapsibleElem = document.querySelector('.collapsible');
    var collapsibleInstance = M.Collapsible.init(collapsibleElem);
});

function mainpage() {
    var imd = document.createElement("div");
    imd.id = "imd"
    var image = document.createElement("img")
    image.id = "cars"
    image.src = "https://www.kissdrivingschool.com/files/kiss-driving-school-instructors.jpg"
    imd.appendChild(image);


    var maintext = document.createElement("p")
    maintext.id = "maintext"
    maintext.innerHTML = "KISS Driving School has over 80 driving instructors who provide driving lessons mainly in the South of England. "
    imd.appendChild(maintext);

    var bullets = document.createElement("ul")
    bullets.id = "bullets"
    var b1 = document.createElement("li")
    b1.id = "b1"
    b1.innerHTML = "Instructors trained in house<br>"
    bullets.appendChild(b1)

    var b2 = document.createElement("li")
    b2.id = "b2"
    b2.innerHTML = "Keep It Simple teaching method<br>"

    var b3 = document.createElement("li")
    b3.id = "b3"
    b3.innerHTML = "Lessons tailored to you"

    var b4 = document.createElement("li")
    b4.id = "b4"
    b4.innerHTML = "Manual and Automatic"

    bullets.appendChild(b1)
    bullets.appendChild(b2)
    bullets.appendChild(b3)
    bullets.appendChild(b4)



    imd.appendChild(bullets)

    var more = document.createElement("a")
    more.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "more")
    more.innerHTML = "MORE ABOUT LESSONS"

    imd.appendChild(more)

    var book = document.createElement("a")
    book.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "book")
    book.innerHTML = "FIND AN INSTRUCTOR"

    imd.appendChild(book)

    var number = document.createElement("p")
    number.classList.add("number")
    number.innerHTML = "07760 754517 / 0845 245 0405"
    imd.appendChild(number)

    imd.appendChild(div)

    var social = document.createElement("p")
    social.innerHTML = "Kiss On Social Media:"
    social.id = "social"

    imd.appendChild(social)

    var facebook = document.createElement("img")
    facebook.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
    facebook.id = "facebook"
    imd.appendChild(facebook)

    var instagram = document.createElement("img")
    instagram.src = "https://www.omgubuntu.co.uk/wp-content/uploads/2017/05/new-instagram-logo.png"
    instagram.id = "instagram"
    imd.appendChild(instagram)

    var copyright = document.createElement("p")
    copyright.id = "copyright"
    copyright.innerHTML = "© 2019 Keep it Simple Systems Ltd. A registered company in England & Wales – No. 05425158"

    imd.appendChild(copyright)

    document.querySelector("#holder").appendChild(imd)


}

function book() {

}
