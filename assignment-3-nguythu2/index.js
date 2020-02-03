var TwitContainer = document.getElementsByClassName('twit-container')[0];

function clearText(event){
  var clear = document.getElementById('twit-text-input');
  clear.value = '';
  clear = document.getElementById('twit-attribution-input');
  clear.value = '';
}

function createNewTwit(event){
  document.getElementById('modal-backdrop').style.display = "inherit";
  document.getElementById('create-twit-modal').style.display = "initial";
  var doh = document.getElementById('twit-text-input');
}

var newTwit = document.getElementById('create-twit-button');
newTwit.addEventListener('click', createNewTwit);

function closeNewTwit(event){
  var close = document.getElementsByClassName('hidden'), i;
  for (var i = 0; i < close.length; i ++) {
    close[i].style.display = 'none';
  }
  clearText();
}

var closeTwit = document.getElementsByClassName('modal-close-button')[0];
closeTwit.addEventListener('click',closeNewTwit);
closeTwit = document.getElementsByClassName('modal-cancel-button')[0];
closeTwit.addEventListener('click',closeNewTwit);


function createTwit(text,author){
  closeNewTwit();

  var twitItem = document.createElement('article');
    twitItem.classList.add('twit');
      var divIcon = document.createElement('div');
        divIcon.classList.add('twit-icon');
        var horn = document.createElement('i');
          horn.classList.add('fa');
          horn.classList.add('fa-bullhorn');
        divIcon.appendChild(horn);
        twitItem.appendChild(divIcon);

  var divContent =  document.createElement('div');
    divContent.classList.add('twit-content');
  var twitInput = document.createElement('p');
    twitInput.classList.add('twit-text');
  var twitAuthor = document.createElement('p');
    twitAuthor.classList.add('twit-author');
    var authorLink = document.createElement('a');
    var authorCrap = document.createTextNode(author);
    authorLink.appendChild(authorCrap);
  var nodeCrap = document.createTextNode(text);
  twitInput.appendChild(nodeCrap);
  twitAuthor.appendChild(authorLink);
  divContent.appendChild(twitInput);
  divContent.appendChild(twitAuthor);
  twitItem.appendChild(divContent);
  TwitContainer.appendChild(twitItem);
}

function validTwit(event){
  var text = document.getElementById('twit-text-input');
  var author = document.getElementById('twit-attribution-input');

  if ( text.value == '' || author.value == ''){
    alert("One of your twit textboxes is empty (author or twittext)!");
  }
  else{
    createTwit(text.value,author.value);
  }
}

var Twit = document.getElementsByClassName('modal-accept-button')[0];
Twit.addEventListener('click', validTwit);

/* SEARCH **************************************************************/

function searchBar(event){
var twitCont = document.getElementsByClassName('twit-content');
var searchInput = document.getElementById('navbar-search-input');
var yes = document.getElementById('navbar-search-input').value;

  for( var w = 0; w < twitCont.length; w++){
    var textt = twitCont[w].getElementsByClassName('twit-text')[0].textContent;
    var aut = twitCont[w].getElementsByClassName('twit-author')[0].textContent;
    var a = aut.search(yes);
    var t = textt.search(yes);

    console.log("before", w);
    if ( t == -1 && a == -1){
      var bye = document.getElementsByClassName('twit');
      console.log("during", w);
      bye[w].remove();
      w = w -1;
    }

    console.log("after", w);

  }
}

var search = document.getElementById('navbar-search-input');
search.addEventListener('keyup', searchBar);
