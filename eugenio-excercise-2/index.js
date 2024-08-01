// JSON data
const data = [
    {
        "title": "Section 1",
        "content": "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
    },
    {
        "title": "Section 2",
        "content": "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
    },
    {
        "title": "Section 3",
        "content": "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
    },
    {
        "title": "Section 4",
        "content": "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
    }
];

// Populate Tabs and Accordion
const tabsContainer = document.querySelector('.tabs');
const accordionContainer = document.querySelector('.accordion');

data.forEach((item, index) => {
    // Create Tabs for Desktop
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.textContent = item.title;
    tab.dataset.index = index;
    tabsContainer.appendChild(tab);

    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';
    tabContent.innerHTML = item.content;
    tabsContainer.appendChild(tabContent);

    // Create Accordion for Mobile
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    const accordionTitle = document.createElement('div');
    accordionTitle.className = 'accordion-title';
    accordionTitle.textContent = item.title;
    accordionTitle.dataset.index = index;
    accordionItem.appendChild(accordionTitle);

    const accordionContent = document.createElement('div');
    accordionContent.className = 'accordion-content';
    accordionContent.innerHTML = item.content;
    accordionItem.appendChild(accordionContent);

    accordionContainer.appendChild(accordionItem);
});

// Default Active Tab and Accordion
const firstTab = document.querySelector('.tab');
const firstTabContent = document.querySelector('.tab-content');
if (firstTab && firstTabContent) {
    firstTab.classList.add('active');
    firstTabContent.classList.add('active');
}

const firstAccordionTitle = document.querySelector('.accordion-title');
const firstAccordionContent = document.querySelector('.accordion-content');
if (firstAccordionTitle && firstAccordionContent) {
    firstAccordionTitle.classList.add('active');
    firstAccordionContent.classList.add('active');
}

// Tab Click Event
tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
        const index = e.target.dataset.index;

        // Remove active class from all tabs and tab contents
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        e.target.classList.add('active');
        document.querySelectorAll('.tab-content')[index].classList.add('active');
    }
});

// Accordion Click Event
accordionContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion-title')) {
        const index = e.target.dataset.index;

        // Toggle active class on clicked accordion title and content
        const isActive = e.target.classList.contains('active');

        document.querySelectorAll('.accordion-title').forEach(title => title.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(content => content.classList.remove('active'));

        if (!isActive) {
            e.target.classList.add('active');
            document.querySelectorAll('.accordion-content')[index].classList.add('active');
        }
    }
});