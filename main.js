const main = document.querySelector('.main');
const createButton = document.querySelector("#createNode");
const nodes = document.querySelector('.nodes');

createButton.addEventListener('click', () => {
    createNote('Your Title', 'Your Text');
})

function createNote(title, text) {
    const node = document.createElement('div');

    node.classList.add('node');

    node.innerHTML = `
    <div class="node__top">
      <h1 id="node__title_p">${title}</h1>
        <input id="node__title_input" class="hidden" value="${title}">

      
      <div class="node__actions">
        <button class="node-edit">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="node-delete">
          <i class="fa-solid fa-delete-left"></i>
        </button>
      </div>
    </div>

    <p id="node__text_p">${text}</p>
      <textarea id="node__text_input" class="hidden">${text}</textarea>
    `

    const deleteBtn = node.querySelector('.node-delete');
    const editBtn = node.querySelector('.node-edit');

    const titleEL = node.querySelector('#node__title_p');
    const textEL = node.querySelector('#node__text_p');

    const titleInput = node.querySelector('#node__title_input');
    const textInput = node.querySelector('#node__text_input');





    deleteBtn.addEventListener('click', () => {
        node.remove();
    });


    editBtn.addEventListener('click', () => {
        titleEL.classList.toggle('hidden');
        textEL.classList.toggle('hidden');

        titleInput.classList.toggle('hidden');
        textInput.classList.toggle('hidden');

        title = titleInput.value;
    });

    textInput.addEventListener('input', (event) => {
        textEL.textContent = textInput.value;
    });

    titleInput.addEventListener('input', (event) => {
        titleEL.textContent = titleInput.value;
    });


    nodes.append(node);
};