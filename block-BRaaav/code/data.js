let div = React.createElement(
  'div',
  null,
  React.createElement(
    'div',
    { className: 'preference' },
    React.createElement('label', { for: 'cheese' }, 'Do you like cheese'),
    React.createElement('input', {
      type: 'checkbox',
      name: 'cheese',
      id: 'cheese',
    })
  ),
  React.createElement(
    'div',
    { className: 'preference' },
    React.createElement('label', { for: 'peas' }, 'Do you like peas?'),
    React.createElement('input', {
      type: 'checkbox',
      name: 'peas',
      id: 'peas',
    })
  ),
  React.createElement('h2', null, 'list od Numbers!'),
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'one'),
    React.createElement('li', null, 'two'),
    React.createElement('li', null, 'three')
  )
);
