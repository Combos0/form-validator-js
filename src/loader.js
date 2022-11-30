import './style.css';

export default function initialLoader() {
    const root = document.body;

    createHeader();
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
    };

    function createImageSpace() {
        const imageSpace = document.createElement('div');
        imageSpace.setAttribute('id', 'image-space');
        root.appendChild(imageSpace);
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
}