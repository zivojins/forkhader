document.addEventListener("DOMContentLoaded", function() {
    let counters = document.querySelectorAll('.counter');
    let countersSection = document.querySelector('#counters');
    let countersStarted = false;

    function animateCounters() {
        counters.forEach(counter => {
            let target = +counter.getAttribute('data-target');
            let count = 0;
            let increment = target / 100; // Increased speed (was 200)
            
            function updateCounter() {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            }
            
            updateCounter();
        });
    }

    function checkViewport() {
        let rect = countersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !countersStarted) {
            countersStarted = true;
            animateCounters();
        }
    }

    window.addEventListener('scroll', checkViewport);
    checkViewport(); // Trigger the check on load
});






//COLABS ANIMATIONS
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#colabs .colabs-imgs img');
    const text = document.querySelectorAll('#colabs .colabs-content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'animate' class to trigger animation
                text.forEach(element => element.classList.add('animate'));
                images.forEach(image => image.classList.add('animate'));
                // Optionally stop observing after the animation has started
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Observe each image individually
    images.forEach(image => {
        observer.observe(image);
    });

    // Also observe the text
    text.forEach(element => {
        observer.observe(element);
    });
});

//COLABS ANIMATIONS END
//MISSION 
document.addEventListener("DOMContentLoaded", function () {
    const missionSection = document.querySelector(".missionwrapper");
    const missionContentP = document.querySelector(".missioncontent p");
    const missionContentH2 = document.querySelector(".missioncontent h2");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                missionSection.classList.add("animate");
                missionContentP.classList.add("animate");
                missionContentH2.classList.add("animate");
                observer.unobserve(entry.target); // Unobserve after animation starts
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in the viewport
    });

    observer.observe(document.querySelector("#mission"));
});

//MISSION END

//BENEFITS
document.addEventListener('DOMContentLoaded', function () {
    const benefitsSection = document.querySelector('#breinrockbenefits');
    const benefitItems = benefitsSection.querySelectorAll('.half');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                benefitItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate-benefit');
                    }, index * 200); // Add delay for staggered animations
                });
                observer.unobserve(benefitsSection); // Stop observing after animation
            }
        });
    }, { threshold: 0.3 });

    observer.observe(benefitsSection);
});

//BENEFITS END
//ROCK AND PAY
document.addEventListener("DOMContentLoaded", function() {
    const prepaidSection = document.querySelector("#prepaidcards");
    const cardImage = document.querySelector(".cards-left");
    const rightContent = document.querySelector(".cards-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cardImage.classList.add("animate");
                rightContent.classList.add("animate");
            }
        });
    }, {
        threshold: 0.5 /* Trigger when 50% of the section is visible */
    });

    observer.observe(prepaidSection);
});

//ROCK AND PAY END

    



//CONTACT
// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Add scroll event listener to check for visibility
  document.addEventListener('scroll', function() {
    const contactWrapper = document.querySelector('.contactwrapper');
    const contactBtn = document.querySelector('.contactbtn');
    
    if (isInViewport(contactWrapper)) {
      contactWrapper.classList.add('in-view');
      contactBtn.classList.add('in-view');
    }
  });
//CONTACT END

document.getElementById('contactexpand').addEventListener('click', function(e) {
    e.preventDefault();
    const formContainer = document.querySelector('.contactform-container');
    const contactButton = document.getElementById('contactexpand');
    
    // Check if the form is currently hidden or visible
    if (!formContainer.classList.contains('open')) {
        // Expand the form with animation
        formContainer.classList.add('open');
        
        // Hide the contact button after form is shown
        contactButton.style.display = 'none';
    }
});


//header
// Vanilla JavaScript
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('.logomain');

    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
        logo.src = "imgs/logo.png"; // Change logo to black version
    } else {
        header.classList.remove('header-scrolled');
        logo.src = "imgs/logo.png"; // Change back to the original logo
    }
});





//ABOUT US

    // Function to check if element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animate the section when it comes into view
    document.addEventListener('scroll', function () {
        const licencesSection = document.getElementById('licences');
        if (isInViewport(licencesSection)) {
            licencesSection.classList.add('in-view');
        }
    });


    

    // Check if the section is partially in the viewport (not strictly contained)
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Add 'in-view' class when it enters the viewport
    function handleScroll() {
        const experienceSection = document.getElementById('experience');
        if (isInViewport(experienceSection)) {
            experienceSection.classList.add('in-view');
            // Remove event listener after the animation triggers to prevent repeated checks
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Listen for the scroll event and trigger animation
    window.addEventListener('scroll', handleScroll);

    // Trigger the animation if the section is already in view when the page loads
    document.addEventListener('DOMContentLoaded', handleScroll);


    //PRODUCTS
    document.addEventListener('DOMContentLoaded', function () {
        const section = document.querySelector('#corporateaccounts');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation classes
                    section.classList.add('in-view');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        });
    
        // Start observing the section
        observer.observe(section);
    });

    
    document.addEventListener('DOMContentLoaded', function () {
        const foreignExchangeSection = document.querySelector('#foreignexchange');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class
                    foreignExchangeSection.classList.add('in-view');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        });
    
        // Start observing the section
        observer.observe(foreignExchangeSection);
    });
    


    //CONTACT WRAPPER ANIMATION


    document.addEventListener("DOMContentLoaded", function () {
        const particleContainer = document.createElement("div");
        particleContainer.className = "particles-container";
        document.querySelector(".contactwrapper").appendChild(particleContainer);
    
        const particleCount = 100; // Number of particles
    
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
    
            // Random particle size between 2px and 8px
            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
    
            // Random initial position within the container
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
    
            // Random movement directions
            const xMovement = (Math.random() - 0.5) * 10; // -5vw to +5vw
            const yMovement = (Math.random() - 0.5) * 10; // -5vh to +5vh
            particle.style.setProperty("--x-movement", `${xMovement}vw`);
            particle.style.setProperty("--y-movement", `${yMovement}vh`);
    
            // Much faster animation duration for increased speed
            particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds range
    
            particleContainer.appendChild(particle);
        }
    
        console.log("Particles created and appended to container with maximum speed.");
    });

    

    //DINAMIC SETTING OF THE PARTICLE HEIGHT

      //TEAM MEMBERS ANIMATION 
      document.addEventListener("DOMContentLoaded", () => {
        const teamRows = document.querySelectorAll(".team-row div");
        const observerOptions = {
            root: null,
            threshold: 0.1,
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
    
        teamRows.forEach((row) => observer.observe(row));
    });
    
    
//TEAM MEMBERS ANIMATION END    

//HEADER ON PHONES EXPANDED BACKGROUND

    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header'); // Select the header
        const navbarCollapse = document.querySelector('.navbar-collapse'); // Select the collapsible menu

        // Add the class when the menu is shown
        navbarCollapse.addEventListener('show.bs.collapse', () => {
            header.classList.add('menu-expanded');
        });

        // Remove the class when the menu is hidden
        navbarCollapse.addEventListener('hide.bs.collapse', () => {
            header.classList.remove('menu-expanded');
        });
    });
