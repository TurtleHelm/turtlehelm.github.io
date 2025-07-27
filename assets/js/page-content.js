function generateProjects() {
    var container = document.querySelector(".projects-container");

    fetch("./assets/js/projects.json")
    .then(resp => resp.json())
    .then(data => {
        data.content.forEach(item => {
            
            // Main project card container
            var project_card_container = document.createElement("div");
            project_card_container.classList.add("col-md-6");
            project_card_container.setAttribute("data-aos", "fade-up");
            project_card_container.setAttribute("data-aos-delay", item.delay);

            container.appendChild(project_card_container);
            
            // Project card
            var project_card = document.createElement("div");
            project_card.classList.add("custom-card", "rounded-4", "bg-base", "shadow-effect");
        
            project_card_container.appendChild(project_card);

            // Card image container
            var project_image_container = document.createElement("div");
            project_image_container.classList.add("custom-card-image", "rounded-4");

            project_card.appendChild(project_image_container);

            // Card Image
            var card_image = document.createElement("img");
            card_image.classList.add("rounded-4");
            card_image.setAttribute("src", item.image_path);
            card_image.setAttribute("alt", item.alt_text);

            project_image_container.appendChild(card_image);

            // Card content container
            var card_content_container = document.createElement("div");
            card_content_container.classList.add("custom-card-content", "p-4");

            project_card.appendChild(card_content_container);

            // Card title
            var card_title = document.createElement("h4");
            card_title.textContent = item.title;

            card_content_container.appendChild(card_title);

            // Card description
            var card_description = document.createElement("p");
            card_description.classList.add("m-0");

            var description_symbol = document.createElement("i");
            description_symbol.classList.add(item.symbol[0], item.symbol[1]);

            card_description.appendChild(description_symbol);

            card_description.appendChild(document.createTextNode(item.description));

            card_content_container.appendChild(card_description);

            // Card link
            var card_link = document.createElement("a");
            card_link.classList.add("custom-link");
            card_link.setAttribute("href", item.link);

            var card_link_symbol = document.createElement("i");
            card_link_symbol.classList.add(item.link_symbol[0], item.link_symbol[1]);

            card_link.appendChild(card_link_symbol);

            card_link.appendChild(document.createTextNode("More"));
            
            card_content_container.appendChild(card_link);
        });
    })
    .catch(() => {
        var error_msg = document.createElement("p");
        error_msg.setAttribute("data-aos", "fade-up");
        error_msg.setAttribute("data-aos-delay", "300");
        error_msg.appendChild(document.createTextNode("Oops :( There was an error parsing the JSON Content"));
        error_msg.appendChild(document.createElement("br"));

        container.appendChild(error_msg);
    });
}

generateProjects();