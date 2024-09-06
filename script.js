let textAreas = document.querySelectorAll('textarea');
let layoutBtn = document.querySelector('#layout-btn');
let runBtn = document.querySelector('#run-btn');
let themeBtn = document.querySelector('#theme-btn');

function runCode() {
    let htmlCode = document.querySelector('#html-code').value;
    let cssCode = document.querySelector('#css-code').value;
    let jsCode = document.querySelector('#js-code').value;
    let output = document.querySelector('#output');

    output.contentDocument.body.innerHTML = `${htmlCode}<style>${cssCode}</style>`;
    output.contentWindow.eval(jsCode);
}

function changeLayout() {
    let container = document.querySelector('.container');
    let leftPanel = document.querySelector('.left');
    let rightPanel = document.querySelector('.right');
    let blocks = document.querySelectorAll('.block');

    if (container.style.flexDirection === 'column') {
        container.style.flexDirection = 'row';
        leftPanel.style.display = '';
        leftPanel.style.width = '49%';
        leftPanel.style.height = '';
        rightPanel.style.width = '49%';
        rightPanel.style.height = '';
        blocks.forEach(block => {
            block.style.width = '96%';
            block.style.height = '';
        });
        textAreas.forEach(textArea => {
            textArea.style.height = '';
        });
    } else {
        container.style.flexDirection = 'column';
        leftPanel.style.display = 'flex';
        leftPanel.style.width = '100%';
        leftPanel.style.height = '70vh';
        rightPanel.style.width = '96%';
        rightPanel.style.height = '100vh';
        rightPanel.style.margin = '20px';
        blocks.forEach(block => {
            block.style.width = '33%';
            block.style.height = '100%';
        });
        textAreas.forEach(textArea => {
            textArea.style.height = '75%';
        });
    }
}


function changeTheme() {
    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    let options = document.querySelector('.options');
    let labels = document.querySelectorAll('label');
    let textAreas = document.querySelectorAll('textarea');
    let rightPanel = document.querySelector('.right');

    if (body.style.backgroundColor === 'rgb(30, 30, 30)') {
        // Switch to Light Mode
        body.style.backgroundColor = 'rgb(250, 249, 249)';
        container.style.color = 'black';
        options.style.backgroundColor = 'white';
        rightPanel.style.backgroundColor = 'white';
        rightPanel.style.borderColor = 'lightgray';

        labels.forEach(label => {
            label.style.color = 'black';
        });

        textAreas.forEach(textarea => {
            textarea.style.backgroundColor = 'white';
            textarea.style.color = 'black';
        });

        themeBtn.style.backgroundColor = 'black';
        themeBtn.innerText = 'Dark Mode';
    } else {
        // Switch to Dark Mode
        body.style.backgroundColor = 'rgb(30, 30, 30)';
        container.style.color = '#c5c6c7';
        options.style.backgroundColor = '#1e1e1e';
        rightPanel.style.backgroundColor = '#1e1e1e';
        rightPanel.style.borderColor = '#555';

        labels.forEach(label => {
            label.style.color = '#c5c6c7';
        });

        textAreas.forEach(textarea => {
            textarea.style.backgroundColor = '#333';
            textarea.style.color = '#c5c6c7';
        });

        themeBtn.style.backgroundColor = '#444';
        themeBtn.innerText = 'Light Mode';
    }
}

themeBtn.addEventListener("click", changeTheme);
layoutBtn.addEventListener("click", changeLayout);
runBtn.addEventListener("click", runCode);