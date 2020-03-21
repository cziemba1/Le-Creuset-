//Menu Toggle//

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("#navigation");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    hamburger.classList.toggle("open");
    navigation.classList.toggle("open");
    // Do something else, like open/close menu
});

//Fullpage.js inicialization//

new fullpage("#fullpage", {
    anchors: ['home', 'complexion_cream', 'clarifying_cleanser', 'moisturising_mask', 'contact'],
    navigation: true,
    paddingTop: "0em",
    scrollingSpeed: 1000,
    onLeave: (origin, destination, direction) => { //animation for the rest of slides
        const section = destination.item;

        const tl2 = new TimelineMax({ delay: 0.5 });

        tl2.from(".main-info", 1.5,
            {
                y: 20,
                autoAlpha: 0,
                ease: Power2.easeOut
            })

    },
    afterLoad: function (origin, destination, direction) {
        if (origin.index === 0) {
            const tl3 = new TimelineMax();

            tl3.from(".main-intro", 1.5,
                {
                    autoAlpha: 0,
                    y: 70,
                    ease: Power2.easeInOut
                })
        }
    }
})




