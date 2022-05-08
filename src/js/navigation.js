const refs = {
    headerControls: document.querySelector('[data-header-controls]'),
    headerPanes: document.querySelector('[data-header-panes]'),
    headerRef: document.querySelector('[data-header]'),
};

setActiveTab()

refs.headerControls.addEventListener('click', controlClickHeader);

function controlClickHeader(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'A') {
        return;
    }
    removeActiveTab()

    const controlItem = e.target;
    controlItem.classList.add('controls__link--active');

    const paneId = getPaneId(controlItem);
    setActivePane(paneId);
}

function setActiveTab() {
    const consoleItems = refs.headerControls.querySelectorAll('a');
    const control = consoleItems[0];

    control.classList.add('controls__link--active');

    const paneId = getPaneId(control);
    setActivePane(paneId);
}

function removeActiveTab() {
    const currentControl = refs.headerControls.querySelector('.controls__link--active');

    if (!currentControl) {
        return;
    }

    currentControl.classList.remove('controls__link--active');

    const paneId = getPaneId(currentControl);
    removePaneId(paneId);
}

function setActivePane(paneId) {
    const pane = getPaneById(paneId);
    pane.classList.add('header-pane--active');

    if (paneId === 'header-pane__my-library') {
        refs.headerRef.classList.remove('header--background-home')
        refs.headerRef.classList.add('header--background-my-library')
    }

    if (paneId === 'header-pane__home') {
        refs.headerRef.classList.remove('header--background-my-library')
        refs.headerRef.classList.add('header--background-home')
    }
}

function removePaneId(paneId) {
    const pane = getPaneById(paneId);
    pane.classList.remove('header-pane--active');
}

function getPaneId(control) {
    return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
    return refs.headerPanes.querySelector(`#${id}`);
}