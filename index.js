function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var element = document.querySelector('div#grand-node div')
  while (element.querySelector('div div')) {
    element = element.querySelector('div div')
  }
  return element
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < lists.length; i++) {
    var items = lists[i].querySelectorAll('li')
    for (var j = 0; j < items.length; j++) {
      items[j].textContent = parseInt(items[j].innerHTML, 10) + parseInt(n, 10)
    }
  }
  return lists
}
