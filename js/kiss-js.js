//-----------------------divider
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
//-------------------collapsible(materialize)
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

//-----------------------------------main page
function mainpage() {
    //-----------------------Car image
    var imd = document.createElement("div");
    imd.id = "imd"
    var image = document.createElement("img")
    image.id = "cars"
    image.src = "https://www.kissdrivingschool.com/files/kiss-driving-school-instructors.jpg"
    imd.appendChild(image);

    //------------------------------body
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
    //---------------------------------button
    var more = document.createElement("a")
    more.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "more")
    more.href = "kisslesson.html"
    more.innerHTML = "MORE ABOUT LESSONS"

    imd.appendChild(more)
    //-----------------------------------button
    var book = document.createElement("a")
    book.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "book")
    book.innerHTML = "FIND AN INSTRUCTOR"
    book.href = "kisspeople.html"

    imd.appendChild(book)
    //----------------------footer area
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
    //-----------------------------------body
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

    //------button
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
    //--------------------------------------------footer
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
//------------------------Instructor page title
function people() {
    var title = document.createElement("h1")
    title.classList.add("instructors")
    title.innerHTML = "Instructors"

    document.querySelector("#holder").appendChild(title)

    var sub = document.createElement("p")
    sub.classList.add("look")
    sub.innerHTML = "Search for a KISS Driving Instructor"

    document.querySelector("#holder").appendChild(sub)







}
//---------------------------name search box
function searchname() {
    var droph = document.querySelector("#droph")
    document.querySelector("#holder").appendChild(droph)

    var instructors = [{ "name": "Alex Cross", "phone": "0000 0000", "car": "Honda" },
    { "name": "Millie Burne", "phone": "0000 0001", "car": "Ford" },
    { "name": "John Doe", "phone": "0000 0002", "car": "Citroen" },
    { "name": "Phil Elms", "phone": "0000 0003", "car": "Subaru" },
    { "name": "Michael Gent", "phone": "0000 0004", "car": "Lexus" },
    { "name": "Ernie Shun", "phone": "0000 0005", "car": "Mercedes" },
    { "name": "Terry Smith", "phone": "0000 0006", "car": "Citroen" }]

    for (i = 0; i < 7; i++) {
        var link = document.createElement("a")
        link.href = "kiss" + instructors[i].name + ".html"



        var card = document.createElement("div")
        card.classList.add("card")
        card.id = i
        card.innerHTML = instructors[i].name




        var phone = document.createElement("p")
        phone.innerHTML = "Phone:" + instructors[i].phone

        var car = document.createElement("p")
        car.innerHTML = "Car:" + instructors[i].car

        link.appendChild(card)

        card.appendChild(phone)
        card.appendChild(car)

        console.log("string")

        document.querySelector("#searchb").appendChild(link)


    };


}

//----------------------name search
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("searchname");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchb");
    li = ul.getElementsByTagName("a");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



//--------------------------------postcode search box

function searchpostcode() {
    var droph2 = document.querySelector("#droph2")
    document.querySelector("#holder").appendChild(droph2)

    var instructors = [{ "name": "Alex Cross", "phone": "0000 0000", "car": "Honda", "postcode": "sp2" },
    { "name": "Millie Burne", "phone": "0000 0001", "car": "Ford", "postcode": "sp1" },
    { "name": "John Doe", "phone": "0000 0002", "car": "Citroen", "postcode": "sp3" },
    { "name": "Phil Elms", "phone": "0000 0003", "car": "Subaru", "postcode": "zx8" },
    { "name": "Michael Gent", "phone": "0000 0004", "car": "Lexus", "postcode": "fr4" },
    { "name": "Ernie Shun", "phone": "0000 0005", "car": "Mercedes", "postcode": "tt1" },
    { "name": "Terry Smith", "phone": "0000 0006", "car": "Citroen", "postcode": "sp2" }]

    for (i = 0; i < 7; i++) {
        var link = document.createElement("a")
        link.href = "kiss" + instructors[i].name + ".html"



        var card = document.createElement("div")
        card.classList.add("card")
        card.id = i
        card.innerHTML = instructors[i].postcode


        var name = document.createElement("p")
        name.innerHTML = instructors[i].name

        var phone = document.createElement("p")
        phone.innerHTML = "Phone:" + instructors[i].phone

        var car = document.createElement("p")
        car.innerHTML = "Car:" + instructors[i].car

        link.appendChild(card)
        card.append(name)
        card.appendChild(phone)
        card.appendChild(car)

        console.log("string")

        document.querySelector("#searchb2").appendChild(link)


    };
    document.querySelector('#holder').appendChild(div)
    var none = document.createElement("p")
    none.innerHTML = "Can't find an instructor close to you? Phone 07760 754517."
    none.classList.add("none1")

    document.querySelector("#holder").appendChild(none)

}//---------------------------postcode search
function myFunction2() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("searchname2");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchb2");
    li = ul.getElementsByTagName("a");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var quotes = [{ "name": "John Smith", "age": "27", "class": "fivestar", "quote": "I was very satisfied and enjoyed my lessons with Sue, she was extremely supportive and was reliable. I learnt quickly and passed first time. Very thankful." },
{ "name": "Phil Dimms", "age": "42", "class": "fourstar", "quote": "My first impression of Nick was that his car was rather messy and I was worried this would reflect on him as a teacher, but after a few lessons this didn't bother me as Nick was patient and able to help me with my anxiety around driving and the driving test, he never made me feel stupid or afraid to mess up which has made me so much more confident at driving. With my previous instructor I would dread my driving lessons because I was so hard on myself to be good at everything but Nick is so laid back that I actually started to enjoy my lessons and became less worried about failure." },
{ "name": "Sam Simp", "age": "18", "class": "threestar", "quote": "I highly recommend my instructor Gary Foster. He is very professional. The guidance received from Gary will benefit the whole life driving. Thank you very much Gary." },
{ "name": "David Turst", "age": "28", "class": "twostar", "quote": "Can’t recommend Roshni enough as a driving instructor, she is very welcoming, friendly, patient and supportive, I couldn’t have passed without her encouragement and help." },
{ "name": "Tom Norps", "age": "24", "class": "onestar", "quote": "Michal is a great driving instructor, I enjoyed being taught by him and he helped become an able and confident driver. Would highly recommend Michal to anyone, thanks to him I passed first time." }]
//----------------------------reviews page
function reviews() {
    var titlet = document.createElement("h1")
    titlet.classList.add("instructors")
    titlet.innerHTML = "Testimonials"
    var starbox = document.createElement("div")
    starbox.id = "starbox"

    var stars = [
        { "name": "fivestar", "src": "pics/5star.png" },
        { "name": "fourstar", "src": "pics/4star.png" },
        { "name": "threestar", "src": "pics/3star.png" },
        { "name": "twostar", "src": "pics/2star.png" },
        { "name": "onestar", "src": "pics/1star.png" }]

    for (i = 0; i < stars.length; i++) {
        var link = document.createElement("a")




        link.href = "#"

        var star = document.createElement("img")
        star.src = stars[i].src
        star.classList.add("star")
        star.id = stars[i].name
        star.onclick =
            function filter(f) {
                var box = document.getElementById("reviewbox")
                var r = box.getElementsByTagName("div");
                //-----------------filter

                var name = document.getElementsByClassName(f.target.id);
                console.log(name)

                for (i = 0; i < r.length; i++) {
                    r[i].style.display = "none"
                }
                for (i = 0; i < name.length; i++) {

                    name[i].style.display = ""
                }


                console.log(r)
                console.log(box)
                console.log(name)

            }

        link.appendChild(star)
        starbox.appendChild(link)

        document.querySelector("#holder").appendChild(titlet)
        document.querySelector("#holder").appendChild(starbox)

    }
    var reviews = document.createElement("main")
    reviews.id = "reviewbox"




    //-----------------------reviews scrollbox
    for (i = 0; i < 5; i++) {
        var box = document.createElement("div")

        box.classList.add(quotes[i].class)

        var quote = document.createElement("p")
        quote.innerHTML = '"' + quotes[i].quote + '"'
        quote.classList.add("quotetext")


        var quoter = document.createElement("p")
        quoter.innerHTML = quotes[i].name + "," + quotes[i].age
        quoter.classList.add("quoter")

        box.appendChild(quote)
        box.appendChild(quoter)

        reviews.appendChild(box)
    }


    document.querySelector("#holder").appendChild(reviews)

}//------------------------ review adding
function reviewadd() {
    var top = document.createElement("div")
    top.id = "top"
    top.innerHTML = "Have your own feedback?"

    var fdiv = document.createElement("div")
    fdiv.id = "fdiv"

    var namm = document.createElement("div")
    namm.innerHTML = "<p id=" + '"' + "n" + '"' + ">Name:<p> <input type=" + '"' + "text" + '"' + "id= " + '"' + "searchn" + '"' + ">"

    var age = document.createElement("div")
    age.innerHTML = "<p id=" + '"' + "a" + '"' + ">Age:<p> <input type=" + '"' + "text" + '"' + "id= " + '"' + "searchm" + '"' + ">"

    var feedback = document.createElement("div")
    feedback.innerHTML = "<p id= " + '"' + "f" + '"' + ">Feedback:<p> <input type=" + '"' + "text" + '"' + "id= " + '"' + "searchf" + '"' + ">"

    var stardiv = document.createElement("div")
    stardiv.id = "stardiv"

    var button = document.createElement("a")
    button.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "submit")
    button.innerHTML = "Submit"
    button.href = "#"
    button.onclick = function arr() {

        var arra = document.getElementById("searchn").value
        var arrb = document.getElementById("searchm").value
        var arrc = document.getElementById("searchf").value

    }
    var stars = [
        { "name": "fivestar", "src": "pics/5star.png" },
        { "name": "fourstar", "src": "pics/4star.png" },
        { "name": "threestar", "src": "pics/3star.png" },
        { "name": "twostar", "src": "pics/2star.png" },
        { "name": "onestar", "src": "pics/1star.png" }]

    fdiv.appendChild(top)
    fdiv.appendChild(namm)
    fdiv.appendChild(age)
    fdiv.appendChild(feedback)

    for (i = 0; i < 5; i++) {
        var link = document.createElement("a")



        link.href = "#!"

        var star = document.createElement("img")
        star.src = stars[i].src
        star.classList.add("star")
        star.id = stars[i].name
        star.onclick =

            link.appendChild(star)
        stardiv.appendChild(link)


    }




    fdiv.appendChild(stardiv)

    fdiv.appendChild(button)



    document.querySelector("#holder").appendChild(fdiv)
}

//----------------------------------instructor details
function person() {
    var structors = [{ "name": "John Doe", "src": "https://celebrityinsider.org/wp-content/uploads/2018/09/Kevin-Spacey-SABreakingNews.com_.jpeg", "car": "https://threebestrated.co.uk/images/KissDrivingSchool-Salisbury-UK.png", "quot": "If my grave appearance unnerves you, just imagine me in my DS 3.I feel that students get the best instruction by driving themselves,so they get practical experience.The lessons are likely to consist of 90% you on the road, and 10% me talking about what is ahead or reveiwing what we have done.", "brief": "John covers mostly sp2 postcodes in his 2012 DS 3. Heteaches manual and automatic lessons all throughout the week.With John you can expect to be driving on day one all the way through to your test.", "specs": "Car:2012 Citroen DS 3<br> Handling:Light <br> 0-60:10.3s <br> Top Speed:114 mph <br> Size:1.46m <br> Fuel:Petrol", "final": "To book a lesson with John: <br> Call:01722 453552 <br> Or email:JDoe@hotmail.co.uk" },]

    var titlep = document.createElement("h1")
    titlep.innerHTML = structors[0].name
    titlep.classList.add("titlep")

    var inst = document.createElement("img")
    inst.src = structors[0].src
    inst.classList.add("inst")

    var car = document.createElement("img")
    car.src = structors[0].car
    car.classList.add("carim")

    var quot = document.createElement("p")
    quot.innerHTML = structors[0].quot
    quot.classList.add("quot")

    var brief = document.createElement("p")
    brief.innerHTML = structors[0].brief
    brief.classList.add("brief")

    var specs = document.createElement("p")
    specs.innerHTML = structors[0].specs
    specs.classList.add("specs")

    var final = document.createElement("p")
    final.innerHTML = structors[0].final
    final.classList.add("final")

    document.querySelector("#holder").appendChild(titlep)
    document.querySelector("#holder").appendChild(inst)
    document.querySelector("#holder").appendChild(car)
    document.querySelector("#holder").appendChild(quot)
    document.querySelector("#holder").appendChild(brief)
    document.querySelector("#holder").appendChild(specs)
    document.querySelector("#holder").appendChild(final)

}//-----------------------------store page
function store() {
    var titles = document.createElement("h1")
    titles.classList.add("titlep")
    titles.innerHTML = "Store"

    var des = document.createElement("p")
    des.id = "des"
    des.innerHTML = "Kiss provides resources for both beginners and those seeking to become instructors. <br> Training resources can be ordered as digital copies or hardbacks."

    var sub = document.createElement("h2")
    sub.classList.add("subhe")
    sub.innerHTML = "Learners"

    var manual = document.createElement("img")
    manual.src = "https://dqzrr9k4bjpzk.cloudfront.net/images/13124227/1156675358.jpg"
    manual.id = "manual"

    var automatic = document.createElement("img")
    automatic.src = "https://dqzrr9k4bjpzk.cloudfront.net/images/13124227/931609114.jpg"
    automatic.id = "automatic"

    var hardback1 = document.createElement("a")
    hardback1.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "hardback")
    hardback1.innerHTML = "Hardback"
    hardback1.href = "#"
    hardback1.id = "hardback1"
    //---------------hardback/ebook buttons
    var ebook1 = document.createElement("a")
    ebook1.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "ebook")
    ebook1.innerHTML = "E-book"
    ebook1.href = "#"
    ebook1.id = "ebook1"

    var hardback2 = document.createElement("a")
    hardback2.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "hardback")
    hardback2.innerHTML = "Hardback"
    hardback2.href = "#"
    hardback2.id = "hardback2"

    var ebook2 = document.createElement("a")
    ebook2.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "ebook")
    ebook2.innerHTML = "E-book"
    ebook2.href = "#"
    ebook2.id = "ebook2"

    var sub2 = document.createElement("h2")
    sub2.innerHTML = "Instructors"
    sub2.classList.add("subhe")

    var ibook = document.createElement("img")
    ibook.src = "https://dqzrr9k4bjpzk.cloudfront.net/images/13124227/931609436.jpg"
    ibook.id = "ibook"

    var ibrief = document.createElement("img")
    ibrief.src = "https://dqzrr9k4bjpzk.cloudfront.net/images/13124227/932987570.jpg"
    ibrief.id = "ibrief"

    var hardback3 = document.createElement("a")
    hardback3.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "hardback")
    hardback3.innerHTML = "Hardback"
    hardback3.href = "#"
    hardback3.id = "hardback3"

    var ebook3 = document.createElement("a")
    ebook3.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "ebook")
    ebook3.innerHTML = "E-book"
    ebook3.href = "#"
    ebook3.id = "ebook3"

    var hardback4 = document.createElement("a")
    hardback4.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "hardback")
    hardback4.innerHTML = "Hardback"
    hardback4.href = "#"
    hardback4.id = "hardback4"

    var ebook4 = document.createElement("a")
    ebook4.classList.add("waves-effect", "waves-light", "btn", "left-align", "black-text", "ebook")
    ebook4.innerHTML = "E-book"
    ebook4.href = "#"
    ebook4.id = "ebook4"

    var bottext = document.createElement("p")
    bottext.innerHTML = "Digital Copies will result in a code being sent by email. Hardbacks should arrive with 2-4 business days. "
    bottext.id = "bottext"

    document.querySelector("#holder").appendChild(titles)
    document.querySelector("#holder").appendChild(des)
    document.querySelector("#holder").appendChild(sub)
    document.querySelector("#holder").appendChild(manual)
    document.querySelector("#holder").appendChild(automatic)
    document.querySelector("#holder").appendChild(hardback1)
    document.querySelector("#holder").appendChild(ebook1)
    document.querySelector("#holder").appendChild(hardback2)
    document.querySelector("#holder").appendChild(ebook2)

    document.querySelector("#holder").appendChild(sub2)
    document.querySelector("#holder").appendChild(ibook)
    document.querySelector("#holder").appendChild(ibrief)

    document.querySelector("#holder").appendChild(hardback3)
    document.querySelector("#holder").appendChild(ebook3)

    document.querySelector("#holder").appendChild(hardback4)
    document.querySelector("#holder").appendChild(ebook4)

    document.querySelector("#holder").appendChild(bottext)


}//--------------------------------locations page
function places() {
    var titlel = document.createElement("h1")
    titlel.classList.add("titlep")
    titlel.innerHTML = "Locations"

    var map = document.createElement("img")
    map.src = "pics/map.png"
    map.id = "map"

    var mapbox = document.createElement("div")
    mapbox.id = "mapbox"

    var mapboxhead = document.createElement("div")
    mapboxhead.innerHTML = "Counties"
    mapboxhead.id = "mapboxhead"

    var counties = document.createElement("p")
    counties.innerHTML = "Berkshire<br>Buckinghamshire<br>Devon<br>Dorset<br>East Midlands<br>Essex<br>Gloucestershire<br>Hampshire<br>Hertfordshire<br>Isle of Wight <br> Kent <br>London<br>Middlesex<br>Surrey <br>Wiltshire"
    counties.classList.add("counties")

    mapbox.appendChild(mapboxhead)
    mapbox.appendChild(counties)


    document.querySelector("#holder").appendChild(titlel)
    document.querySelector("#holder").appendChild(map)
    document.querySelector("#holder").appendChild(mapbox)

}//------------------------------contact page
function contact() {
    var conbox = document.createElement("div")
    conbox.id = "conbox"

    var titlec = document.createElement("h1")
    titlec.classList.add("titlep")
    titlec.innerHTML = "Contact Kiss"

    var phon = document.createElement("p")
    phon.innerHTML = "Phone: 07760 754517"
    phon.id = "phon1"

    var phon2 = document.createElement("p")
    phon2.innerHTML = "(Monday-Saturday 09.00-17.00)"
    phon2.id = "phon2"

    var namec = document.createElement("p")
    namec.innerHTML = "Name:"
    namec.classList.add("namec")

    var inputc = document.createElement("input")
    inputc.classList.add("inputc")
    inputc.type = "text"

    var emailc = document.createElement("p")
    emailc.innerHTML = "Email:"
    emailc.classList.add("namec")

    var inputd = document.createElement("input")
    inputd.classList.add("inputc")

    var phonec = document.createElement("p")
    phonec.innerHTML = "Phone:"
    phonec.classList.add("namec")

    var inpute = document.createElement("input")
    inpute.classList.add("inputc")

    var messagec = document.createElement("p")
    messagec.innerHTML = "Message:"
    messagec.classList.add("namec")

    var inputf = document.createElement("input")
    inputf.classList.add("inputc")
    inputf.id = "inputf"

    var button = document.createElement("a")
    button.classList.add("waves-effect", "waves-light", "btn", "centre-align", "white-text", "submit")
    button.innerHTML = "Submit"
    button.href = "#"

    conbox.appendChild(titlec)
    conbox.appendChild(phon)
    conbox.appendChild(phon2)
    namec.appendChild(inputc)
    conbox.appendChild(namec)

    emailc.appendChild(inputd)
    conbox.appendChild(emailc)

    phonec.appendChild(inpute)
    conbox.appendChild(phonec)

    messagec.appendChild(inputf)
    conbox.appendChild(messagec)


    document.querySelector("#holder").appendChild(conbox)
    document.querySelector("#holder").appendChild(button)

}

