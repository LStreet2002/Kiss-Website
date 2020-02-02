var div = document.createElement("div")
div.classList.add("divider")

function head() {
    //creating navbar and links
    var fix = document.createElement("div")
    fix.classList.add("navbar-fixed");
    document.querySelector('#holder').appendChild(fix)

    var hback = document.createElement("nav")

    hback.id = "hback";
    fix.appendChild(hback);



    //-------------------------------------------Lessons

    var car = document.createElement("i");
    car.classList.add("large", "material-icons", "Car");
    car.innerHTML = "directions_car";

    var cara = document.createElement("a");
    cara.classList.add("cara");
    cara.href = "kisslesson.html";

    cara.appendChild(car);

    document.querySelector('#hback').appendChild(cara);
    //-------------------------------------------Instructors

    var person = document.createElement("i");
    person.classList.add("large", "material-icons", "Person");
    person.innerHTML = "person_pin";


    var persona = document.createElement("a");
    persona.classList.add("persona");
    persona.href = "kisspeople.html";

    persona.appendChild(person);
    document.querySelector('#hback').appendChild(persona);
    //-------------------------------------------Review

    var review = document.createElement("i");
    review.classList.add("large", "material-icons", "Review");
    review.innerHTML = "star";
    document.querySelector('#hback').appendChild(review);

    var reviewa = document.createElement("a");
    reviewa.classList.add("reviewa");
    reviewa.href = "kissreview.html";

    reviewa.appendChild(review);
    document.querySelector('#hback').appendChild(reviewa);

    //-------------------------------------------Job

    var Job = document.createElement("i");
    Job.classList.add("large", "material-icons", "Job");
    Job.innerHTML = "work";
    document.querySelector('#hback').appendChild(Job);

    var joba = document.createElement("a");
    joba.classList.add("joba");
    joba.href = "kissjob.html";

    joba.appendChild(Job);
    document.querySelector('#hback').appendChild(joba);
    //-------------------------------------------Contact
    var contact = document.createElement("i");
    contact.classList.add("large", "material-icons", "Contact");
    contact.innerHTML = "phone_enabled";
    document.querySelector('#hback').appendChild(contact);

    var contacta = document.createElement("a");
    contacta.classList.add("contacta");
    contacta.href = "kisscontact.html";

    contacta.appendChild(contact);
    document.querySelector('#hback').appendChild(contacta);

    var menu = document.querySelector(".sidenav-trigger")
    menu.classList.add("Menu")
    document.querySelector("#hback").appendChild(menu)
    //-------------------------------------------Logo
    var logo = document.createElement("img")
    logo.src = "pics/KISS_Logo_site.jpg"
    logo.id = "logo"
    document.querySelector("#hback").appendChild(logo);

    var logoa = document.createElement("a");
    logoa.classList.add("logoa");
    logoa.href = "kissmain.html";

    logoa.appendChild(logo);
    document.querySelector('#hback').appendChild(logoa);



}
//Sidenav functions(materialize)
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var collapsibleElem = document.querySelector('.collapsible');
    var collapsibleInstance = M.Collapsible.init(collapsibleElem);
});

function mainpage() {
    //-----------------------Car image
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
    more.href = "kisslesson.html"
    more.innerHTML = "MORE ABOUT LESSONS"

    imd.appendChild(more)

    var book = document.createElement("a")
    book.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "book")
    book.innerHTML = "FIND AN INSTRUCTOR"
    book.href = "kisspeople.html"

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
//----------------------------Lessons page
function lessons() {
    var lhead = document.createElement("h1")
    lhead.id = "lhead"
    lhead.innerHTML = "Driving Lessons"
    document.querySelector("#holder").appendChild(lhead)

    var maintext = document.createElement("p")
    maintext.id = "maintext"
    maintext.innerHTML = "KISS Driving Lessons are much more intensive than driving lessons with AA, BSM, RED, LDC and other driving schools. You could save as much as 60% on learning to drive as our driving lessons are well structured and will meet your personal needs. Our driving instructors teach as fast as you can learn, can you learn as fast as they can teach?<br><br>We have and continue to train literally hundreds of driving instructors throughout London and the South East over the last 10 years. Use our instructor’s locator map by clicking the link below to find your nearest driving instructor to you."
    document.querySelector("#holder").appendChild(maintext);

    var prices = document.createElement("h2")
    prices.id = "prices"
    prices.innerHTML = "Prices"

    document.querySelector("#holder").appendChild(prices)

    var pricetext = document.createElement("p")
    pricetext.id = "maintext"
    pricetext.innerHTML = "Lesson prices vary depending on area and if you require manual or automatic lessons. Feel free to contact Instructors direct as they will be able to offer their best price for lessons depending on your availability and how many lessons you wish to book.<br><br>Most of the Instructors are happy to offer good block booking discounts when you prepay for lessons. Complete beginners to driving should be able to secure a competitive rate for their first lessons and the Instructor can again make an offer if you give them a call direct.<br><br> For people who have driven before but are not yet ready for the test, we offer the first 90 - minute session for £30 which allows your driving instructor to assess your driving skills.During this driving lesson, you will be given feedback and coached to suit your level of ability.You will also be guided as to how many more driving lessons you are likely to need for success in your practical driving test."
    document.querySelector("#holder").appendChild(pricetext);


    var book = document.createElement("a")
    book.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "book")
    book.innerHTML = "FIND AN INSTRUCTOR"
    book.href = "kisspeople.html"

    document.querySelector("#holder").appendChild(book)

    var number = document.createElement("p")
    number.classList.add("number")
    number.innerHTML = "07760 754517 / 0845 245 0405"
    document.querySelector("#holder").appendChild(number)

    document.querySelector("#holder").appendChild(div)

    var lessfoot = document.createElement("div")
    lessfoot.id = "lessfoot"

    var cd = document.createElement("img")
    cd.src = "https://www.learnerdriving.com/images/products/dvsa-theory-test-kit.jpg"
    cd.id = "CEED"

    var cda = document.createElement("a")
    cda.href = "https://www.learnerdriving.com/store/theory-test-products/the-official-dvsa-complete-theory-test-kit.html"
    cda.id = "CD"

    cda.appendChild(cd)

    var el = document.createElement("p")
    el.innerHTML = "E Learning"

    var ela = document.createElement("a")
    ela.href = "https://www.dvsalearningzone.co.uk/"
    ela.id = "E-learn"

    ela.appendChild(el)

    var pass = document.createElement("img")
    pass.src = "https://irp-cdn.multiscreensite.com/1bfc4269/dms3rep/multi/mobile/RS40539_Pass%20Plus%20CMYK%2006-hpr-339x300.jpg"

    var passa = document.createElement("a")
    passa.href = "https://www.gov.uk/pass-plus"
    passa.id = "pass-plus"

    passa.appendChild(pass)

    var myd = document.createElement("img")
    myd.src = "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-1/p200x200/11892127_1661309587439865_1437590365605498527_n.png?_nc_cat=111&_nc_ohc=o2qHPgH-gEQAX8Vg1ZU&_nc_ht=scontent-lhr8-1.xx&oh=0328b85b39acbc182f8c771edc670a44&oe=5EC94ED7"
    myd.id = "mid"

    var myda = document.createElement("a")
    myda.href = "https://www.mydrivetime.co.uk/"
    myda.id = "MyDrive"

    myda.appendChild(myd)

    var store = document.createElement("img")
    store.src = "pics/storeicon.png"

    var storea = document.createElement("a")
    storea.href = "kissstore.html"
    storea.id = "Store"

    storea.appendChild(store)

    var DVSA = document.createElement("img")
    DVSA.src = "pics/DVSA.png"

    var DVSAa = document.createElement("a")
    DVSAa.href = "https://www.gov.uk/government/organisations/driver-and-vehicle-standards-agency"
    DVSAa.id = "DVSA"

    DVSAa.appendChild(DVSA)

    lessfoot.appendChild(cda)
    lessfoot.appendChild(ela)
    lessfoot.appendChild(passa)
    lessfoot.appendChild(myda)
    lessfoot.appendChild(storea)
    lessfoot.appendChild(DVSAa)

    document.querySelector('#holder').appendChild(lessfoot)














}
