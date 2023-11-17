function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    // console.log(links);
    const nav = document.createElement("nav");
    links.forEach((item) => {
      const anchorTag = document.createElement("a");
      anchorTag.textContent = item.textContent;
      anchorTag.setAttribute("href", item.href);
      anchorTag.setAttribute("title", item.title);
      nav.appendChild(anchorTag);
    });
    return nav;
  };

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learners, languages) {
    const card = document.createElement("div");
    card.setAttribute("class", "learner-card");

      const fullName = document.createElement("p");
      fullName.textContent = learners.fullName;
      card.appendChild(fullName);

      const id = document.createElement("p");
      id.textContent = `Learner ID: ${learners.id}`;
      card.appendChild(id);

      const dateOfBirth = document.createElement("p");
      dateOfBirth.textContent = `Date of Birth: ${learners.dateOfBirth}`;
      card.appendChild(dateOfBirth);

      const favLanguage = document.createElement("p");
      let languageID = languages.find((item) => item.id === learners.favLanguage);
      favLanguage.textContent = `Favorite Language: ${languageID.name}`;
      card.appendChild(favLanguage);

      card.addEventListener("click", event => {
        document.querySelectorAll(".learner-card").forEach(card => {
          card.classList.remove("active");
        });
        card.classList.add("active");
      });

    return card;
  };

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ];
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ];
    learners.forEach((learners) => {
    document.querySelector("section").appendChild(buildLearnerCard(learners, languages));
    });
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement('footer');

    const info = document.createElement("div");
    info.setAttribute("class", "company-info");

    const name = document.createElement("p");
    name.setAttribute("class", "company-name");
    name.textContent = footerData.companyName;
    info.appendChild(name);

    const address = document.createElement("p");
    address.setAttribute("class", "address");
    address.textContent = footerData.address;
    info.appendChild(address);

    const email = document.createElement("p");
    email.setAttribute("class", "contact-email");
    email.textContent = "Email: ";
    const anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", "mailto:info@example.com");
    anchorTag.textContent = footerData.contactEmail;
    info.appendChild(email);
    email.appendChild(anchorTag);

    const contact = document.createElement("div");
    contact.setAttribute("class", "social-media");

    const twitter = document.createElement("a");
    twitter.setAttribute("href", "https://twitter.com/example");
    twitter.textContent = "Twitter";
    contact.appendChild(twitter);

    const facebook = document.createElement("a");
    facebook.setAttribute("href", "https://www.facebook.com/example");
    facebook.textContent = "Facebook";
    contact.appendChild(facebook);

    const instagram = document.createElement("a");
    instagram.setAttribute("href", "https://www.instagram.com/example");
    instagram.textContent = "Instagram";
    contact.appendChild(instagram);

    const copyright = document.createElement("div");
    copyright.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";

    footer.appendChild(info);
    footer.appendChild(contact);
    footer.appendChild(copyright)
    return footer;
  };

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  document.addEventListener("click", event => {
    if (event.target === document.querySelector("section")) {
      const learners = document.querySelectorAll(".learner-card");
      learners.forEach((card) => card.classList.remove('active'))
    };
  });
};

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
