import './style.css';

export default function initialLoader() {
    const root = document.body;

    createHeader();
    createNavBar();
    createDailyMessage();
    createImageSpace();
    createFormSpace();
    createFooter();

    function createFooter() {
        const footer = document.createElement('div');
        footer.setAttribute('id', 'footer');
        root.appendChild(footer);
    };

    function createFormSpace() {
        const formSpace = document.createElement('div');
        formSpace.setAttribute('id', 'form-space');
        root.appendChild(formSpace);

        const formTitle = document.createElement('div');
        formTitle.setAttribute('id', 'form-title');
        formTitle.textContent = 'Want to know when more pictures of Ajax drops? Sign up for notifications below!';
        formSpace.appendChild(formTitle);

        const form = document.createElement('form');
        form.setAttribute.setAttribute('id', 'subscribe-form');
        formSpace.appendChild(form);

        const formFieldSet = document.createElement('fieldset');
        form.appendChild(formFieldSet);

        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Name:';
        formFieldSet.appendChild(nameLabel);

        const nameInput = document.createElement('input');
        formFieldSet.appendChild(nameInput);

        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        formFieldSet.appendChild(emailLabel);

        const emailInput = document.createElement('input');
        formFieldSet.appendChild(emailInput);

        const countryLabel = document.createElement('label');
        countryLabel.textContent = 'Country:';
        formFieldSet.appendChild(countryLabel);

        const countryInput = document.createElement('input');
        formFieldSet.appendChild(countryInput);

        const zipCodeLabel = document.createElement('label');
        zipCodeLabel.textContent = 'Zip code:';
        formFieldSet.appendChild(zipCodeLabel);

        const zipCodeInput = document.createElement('input');
        formFieldSet.appendChild(zipCodeInput);
    };

    function createImageSpace() {
        const imageSpace = document.createElement('div');
        imageSpace.setAttribute('id', 'image-space');
        root.appendChild(imageSpace);

        const placeHolder = document.createElement('img');
        placeHolder.setAttribute('src', '../images/IMG_0407.jpg');
        placeHolder.setAttribute('id', 'place-holder');
        imageSpace.appendChild(placeHolder);
    };

    function createHeader() {
        const header = document.createElement('div');
        header.setAttribute('id', 'header');
        header.textContent = 'Free Pictures of Ajax.Com';
        root.appendChild(header);
    };

    function createDailyMessage() {
        const dailyMessage = document.createElement('div');
        dailyMessage.setAttribute('id', 'daily-message');
        dailyMessage.textContent = 'NOW SELLING DOG $9.95 ALL SALES FINAL!';
        root.appendChild(dailyMessage);
    };

    function createNavBar() {
        const navBar = document.createElement('div');
        navBar.setAttribute('id', 'nav-bar');
        root.appendChild(navBar);

        const homeBTN = document.createElement('button');
        homeBTN.setAttribute('type', 'button');
        homeBTN.setAttribute('id', 'home-BTN');
        homeBTN.textContent = 'Home';
        navBar.appendChild(homeBTN);

        const aboutBTN = document.createElement('button');
        aboutBTN.setAttribute('type', 'button');
        aboutBTN.setAttribute('id', 'about-BTN');
        aboutBTN.textContent = 'About';
        navBar.appendChild(aboutBTN);
    };
};