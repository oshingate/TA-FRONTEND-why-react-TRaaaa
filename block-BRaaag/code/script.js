let arrOfmovies = [
  {
    name: 'Bahubali',
    watched: false,
  },
];

let input = document.querySelector('#movie');
let root = document.querySelector('.root');

let elem = React.createElement;

function createUI() {
  //   console.log(root);
  //   root.innerHTML = '';
  let arr = arrOfmovies.map((ele) => {
    let div = elem(
      'div',
      {},
      elem('input', { type: 'checkbox', checked: ele.watched }),
      elem('h3', {}, ele.name),
      elem('h4', {}, ele.watched ? 'watched' : 'to watch')
    );
    // div.classList.add('movie-div');
    return div;
    // let checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';
    // checkbox.checked = ele.watched;
    // checkbox.addEventListener('click', (event) => {
    //   handleCheckbox(event);
    // });
    // let h3 = document.createElement('h3');
    // h3.innerText = ele.name;
    // let h4 = document.createElement('h4');
    // if (ele.watched) {
    //   h4.innerText = 'watched';
    // } else {
    //   h4.innerText = 'not watched';
    // }

    // div.append(checkbox, h3, h4);
    // root.append(div);
    // console.log(div);
  });

  ReactDOM.render(arr, root);
}

function handleCheckbox(event) {
  console.dir(event.target.checked);
  if (event.target.checked) {
  }
}

function handleClickEvent(event) {
  event.preventDefault();
  console.log(event.keyCode);
  if (event.keyCode === 13) {
    let data = {
      name: event.target.value,
      watched: false,
    };

    arrOfmovies.push(data);
    createUI();
  }
}

input.addEventListener('keyup', (event) => {
  handleClickEvent(event);
});

createUI();
