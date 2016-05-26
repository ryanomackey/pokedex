"use strict";

var music = document.getElementById('backgroundMusic');
music.volume = '0.1';

contentSet();

function ajax (verb, url, handler) {
  var res = new XMLHttpRequest();
  res.onreadystatechange = function() {
    if (res.readyState === 4) {
      if (res.status === 200) {
        handler(JSON.parse(res.responseText));
      }
    }
  };
  res.open(verb, url);
  res.send();
}

var currentOffset = 0;

var selectedPokemon = 1;

function pokemonSet () {
  if (currentOffset === 147) {
    ajax('GET','https://pokeapi.co/api/v2/pokemon/?limit=4&offset=' + currentOffset, function(res) {
      for (var i = 0; i < 7; i++) {
        var h2Element = document.createElement('h2');
        var content = document.querySelector('.content');
        var number = Number(i+1+currentOffset);
        if (i === 0) {
          h2Element.className = 'pokemon active';
          if (number < 10) {
            h2Element.innerHTML = '00' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else if (number < 100) {
            h2Element.innerHTML = '0' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else {
            h2Element.innerHTML = (number) +  ' ' + res.results[i].name.toUpperCase();
          }
          h2Element.id = (number);
          content.appendChild(h2Element);
        } else {
          h2Element.className = 'pokemon';
          if (number < 10) {
            h2Element.innerHTML = '00' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else if (number < 100) {
            h2Element.innerHTML = '0' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else {
            h2Element.innerHTML = (number) +  ' ' + res.results[i].name.toUpperCase();
          }
          h2Element.id = (number);
          content.appendChild(h2Element);
        }
      }
    });
  } else {
    ajax('GET','https://pokeapi.co/api/v2/pokemon/?limit=7&offset=' + currentOffset, function(res) {
      for (var i = 0; i < 7; i++) {
        var h2Element = document.createElement('h2');
        var content = document.querySelector('.content');
        var number = Number(i+1+currentOffset);
        if (i === 0) {
          h2Element.className = 'pokemon active';
          if (number < 10) {
            h2Element.innerHTML = '00' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else if (number < 100) {
            h2Element.innerHTML = '0' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else {
            h2Element.innerHTML = (number) +  ' ' + res.results[i].name.toUpperCase();
          }
          h2Element.id = (number);
          content.appendChild(h2Element);
        } else {
          h2Element.className = 'pokemon';
          if (number < 10) {
            h2Element.innerHTML = '00' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else if (number < 100) {
            h2Element.innerHTML = '0' + (number) +  ' ' + res.results[i].name.toUpperCase();
          } else {
            h2Element.innerHTML = (number) +  ' ' + res.results[i].name.toUpperCase();
          }
          h2Element.id = (number);
          content.appendChild(h2Element);
        }
      }
    });
  }
}

function pokemonDescription (selectedPokemon) {
  var display = document.querySelector('.screen');
  var stats = document.createElement('div');
  stats.className = 'descStats';
  display.appendChild(stats);
  var sprite = document.createElement('img');
  display.appendChild(sprite);
  var number = document.createElement('p');
  display.appendChild(number);
  var name = document.createElement('h1');
  stats.appendChild(name);
  var genus = document.createElement('h1');
  genus.className = 'genus';
  stats.appendChild(genus);
  var height = document.createElement('h1');
  stats.appendChild(height);
  var weight = document.createElement('h1');
  stats.appendChild(weight);
  ajax ('GET', 'https://pokeapi.co/api/v2/pokemon/' + selectedPokemon, function (res) {
    sprite.src = res.sprites.front_default;
    if (res.id < 10) {
      number.innerHTML = 'No. ' + '00' + res.id;
    } else if (res.id < 100) {
      number.innerHTML = 'No. ' + '0' + res.id;
    } else {
      number.innerHTML = 'No.' + res.id;
    }
    name.innerHTML = res.name.toUpperCase();
    height.innerHTML = 'HT ' + (Number(res.height) / 10) + 'm';
    weight.innerHTML = 'WT ' + (Number(res.weight) /10) + 'kg';
  });
  var descDivider = document.createElement('div');
  descDivider.className = 'descDivider';
  display.appendChild(descDivider);
  ajax ('GET', 'https://pokeapi.co/api/v2/pokemon-species/' + selectedPokemon, function (res) {
    document.querySelector('.genus').innerHTML = res.genera[0].genus.toUpperCase();
    var description = document.createElement('h3');
    description.innerHTML = res.flavor_text_entries[53].flavor_text;
    display.appendChild(description);
  });
}

function contentSet() {
  var display = document.querySelector('.screen');
  var content = document.createElement('div');
  content.className = 'content';
  var contents = document.createElement('h1');
  contents.innerHTML = 'CONTENTS';
  var divider = document.createElement('div');
  divider.className = 'divider';
  var thinHorizontal = document.createElement('div');
  thinHorizontal.className = 'thinHorizontal';
  var thickHorizontal = document.createElement('div');
  thickHorizontal.className = 'thickHorizontal';
  var options = document.createElement('div');
  options.className = 'options';
  var data = document.createElement('h2');
  data.className = 'optionText';
  data.id = 'data';
  data.innerHTML = 'DATA';
  var cry = document.createElement('h2');
  cry.className = 'optionText';
  cry.id = 'cry';
  cry.innerHTML = 'CRY';
  var area = document.createElement('h2');
  area.className = 'optionText';
  area.id = 'area';
  area.innerHTML = 'AREA';
  var quit = document.createElement('h2');
  quit.className = 'optionText';
  quit.id = 'quit';
  quit.innerHTML = 'QUIT';
  var stats = document.createElement('div');
  stats.className = 'stats';
  var seen = document.createElement('h2');
  seen.className = 'statsText';
  seen.innerHTML = 'SEEN';
  var num1 = document.createElement('h2');
  num1.className = 'statNumber';
  num1.innerHTML = '151';
  var own = document.createElement('h2');
  own.className = 'statsText';
  own.innerHTML = 'OWN';
  var num2 = document.createElement('h2');
  num2.className = 'statNumber';
  num2.innerHTML = '151';
  display.appendChild(contents);
  display.appendChild(content);
  display.appendChild(divider);
  display.appendChild(thinHorizontal);
  display.appendChild(thickHorizontal);
  display.appendChild(options);
  options.appendChild(data);
  options.appendChild(cry);
  options.appendChild(area);
  options.appendChild(quit);
  display.appendChild(stats);
  stats.appendChild(seen);
  stats.appendChild(num1);
  stats.appendChild(own);
  stats.appendChild(num2);
}

function deleteContents () {
  var content = document.querySelector('.content');
  var nodes = content.childNodes.length;
  if (nodes === 4) {
    for (var i = 0; i < 4; i++) {
      content.removeChild(content.childNodes[0]);
    }
  } else {
    for (var i = 0; i < 7; i++) {
      content.removeChild(content.childNodes[0]);
    }
  }
}

function deleteDescription () {
  var display = document.querySelector('.screen');
  var nodes = display.childNodes.length;
  if (nodes === 1) {
    for (var i = 0; i < 1; i++) {
      display.removeChild(display.childNodes[0]);
    }
  } else if (nodes === 2) {
    for (var i = 0; i < 2; i++) {
      display.removeChild(display.childNodes[0]);
    }
  } else if (nodes === 3) {
    for (var i = 0; i < 3; i++) {
      display.removeChild(display.childNodes[0]);
    }
  } else if (nodes === 4) {
    for (var i = 0; i < 4; i++) {
      display.removeChild(display.childNodes[0]);
    }
  } else {
    for (var i = 0; i < 5; i++) {
      display.removeChild(display.childNodes[0]);
    }
  }
}

function deleteScreen () {
  var display = document.querySelector('.screen');
  for (var i = 0; i < 7; i++) {
    display.removeChild(display.childNodes[0]);
  }
}

pokemonSet();

var onDescriptionPage = false;
var onMapPage = false;

document.body.addEventListener('keyup',function(event) {


  if (onDescriptionPage === false && onMapPage === false) {

    var currentActive = document.querySelector('.active');

    if (event.which === 40) {
      var newActive = currentActive.nextSibling;
      var id = currentActive.id;
      if (newActive === null && currentOffset === 147) {
        currentOffset = 0;
        deleteContents();
        pokemonSet();
      } else if (newActive === null && currentActive.className === 'pokemon active') {
        currentOffset = Number(currentActive.id);
        deleteContents();
        pokemonSet();
      } else if (id === 'data' || id === 'cry' || id === 'area' || id === 'quit') {
        var optionActive = document.querySelector('#' + id);
        var newOptionActive = optionActive.nextElementSibling;
        if (optionActive.id === 'quit') {
          newOptionActive = optionActive;
        }
        optionActive.className = 'optionText';
        newOptionActive.className = 'optionText active';
      } else {
        currentActive.className = 'pokemon';
        newActive.className = 'pokemon active';
      }
    }
    else if (event.which === 38) {
      var newActive = currentActive.previousSibling;
      var id = currentActive.id;
      if (currentActive.id === '1') {
        currentOffset = 147;
        deleteContents();
        pokemonSet();
      } else if (id === 'data' || id === 'cry' || id === 'area' || id === 'quit') {
        var optionActive = document.querySelector('#' + id);
        var newOptionActive = optionActive.previousSibling;
        if (optionActive.id === 'data' && newOptionActive === null) {
          newOptionActive = optionActive;
        }
        optionActive.className = 'optionText';
        newOptionActive.className = 'optionText active';
      } else if (newActive === null && currentOffset === 147) {
        console.log(currentOffset);
        currentOffset = 140;
        deleteContents();
        pokemonSet();
      } else if (newActive === null) {
        currentOffset = Number(currentActive.id) - 8;
        deleteContents();
        pokemonSet();
      } else {
        currentActive.className = 'pokemon';
        newActive.className = 'pokemon active';
      }
    }
    else if (event.which === 13) {
      var search = document.querySelector('#search')
      var newActive = document.querySelector('#data');
      var id = currentActive.id;
      if (currentActive === newActive) {
        onDescriptionPage = true;
        deleteScreen();
        pokemonDescription(selectedPokemon);
      } else if (id === 'area') {
        onMapPage = true;
        deleteScreen();
        map();
      } else if (id === 'cry' || id === 'quit') {

      } else {
        selectedPokemon = currentActive.id;
        currentActive.className = '';
        newActive.className = 'optionText active';
      }
    }
    else if (event.which === 27) {
      var active = document.querySelector('.active');
      active.className = 'optionText';
      deleteContents();
      pokemonSet();
    }

  } else if (onDescriptionPage === true) {
    if (event.which === 27) {
      deleteDescription();
      contentSet();
      pokemonSet();
      onDescriptionPage = false;
    }
  }

  else if (onMapPage === true) {
    if (event.which === 27) {
      onMapPage = false;
      deleteMap();
      contentSet();
      pokemonSet();
    }
  }

});

document.body.addEventListener('click',function(event) {

  var down = document.querySelector('#down');
  var up = document.querySelector('#up');
  var a = document.querySelector('#aButton');
  var b = document.querySelector('#bButton');

  if (onDescriptionPage === false && onMapPage === false) {

    var currentActive = document.querySelector('.active');

    if (event.target === down) {
      var newActive = currentActive.nextSibling;
      var id = currentActive.id;
      if (newActive === null && currentOffset === 147) {
        currentOffset = 0;
        deleteContents();
        pokemonSet();
      } else if (newActive === null && currentActive.className === 'pokemon active') {
        currentOffset = Number(currentActive.id);
        deleteContents();
        pokemonSet();
      } else if (id === 'data' || id === 'cry' || id === 'area' || id === 'quit') {
        var optionActive = document.querySelector('#' + id);
        var newOptionActive = optionActive.nextElementSibling;
        if (optionActive.id === 'quit') {
          newOptionActive = optionActive;
        }
        optionActive.className = 'optionText';
        newOptionActive.className = 'optionText active';
      } else {
        currentActive.className = 'pokemon';
        newActive.className = 'pokemon active';
      }
    }
    else if (event.target === up) {
      var newActive = currentActive.previousSibling;
      var id = currentActive.id;
      if (currentActive.id === '1') {
        currentOffset = 147;
        deleteContents();
        pokemonSet();
      } else if (id === 'data' || id === 'cry' || id === 'area' || id === 'quit') {
        var optionActive = document.querySelector('#' + id);
        var newOptionActive = optionActive.previousSibling;
        if (optionActive.id === 'data' && newOptionActive === null) {
          newOptionActive = optionActive;
        }
        optionActive.className = 'optionText';
        newOptionActive.className = 'optionText active';
      } else if (newActive === null && currentOffset === 147) {
        console.log(currentOffset);
        currentOffset = 140;
        deleteContents();
        pokemonSet();
      } else if (newActive === null) {
        currentOffset = Number(currentActive.id) - 8;
        deleteContents();
        pokemonSet();
      } else {
        currentActive.className = 'pokemon';
        newActive.className = 'pokemon active';
      }
    }
    else if (event.target === a) {
      var newActive = document.querySelector('#data');
      var id = currentActive.id;
      if (currentActive === newActive) {
        onDescriptionPage = true;
        deleteScreen();
        pokemonDescription(selectedPokemon);
      } else if (id === 'area') {
        onMapPage = true;
        deleteScreen();
        map();
      } else if (id === 'cry' || id === 'quit') {

      } else {
        selectedPokemon = currentActive.id;
        currentActive.className = '';
        newActive.className = 'optionText active';
      }
    }
    else if (event.target === b) {
      var active = document.querySelector('.active');
      active.className = 'optionText';
      deleteContents();
      pokemonSet();
    }
  }

  else if (onDescriptionPage === true) {
    if (event.target === b) {
      deleteDescription();
      contentSet();
      pokemonSet();
      onDescriptionPage = false;
    }
  }

  else if (onMapPage === true) {
      if (event.target === b) {
        onMapPage = false;
        deleteMap();
        contentSet();
        pokemonSet();
      }
    }

  var gameboy = document.querySelector('.gameboy');
  var berry = document.querySelector('#colorC');
  var grape = document.querySelector('#colorO1');
  var kiwi = document.querySelector('#colorL');
  var dandelion = document.querySelector('#colorO2');
  var teal = document.querySelector('#colorR');

  if(event.target === berry) {
    gameboy.style.backgroundColor = '#F63375';
  }

  if(event.target === grape) {
    gameboy.style.backgroundColor = '#4B44A7';
  }

  if(event.target === kiwi) {
    gameboy.style.backgroundColor = '#CFFB59';
  }

  if(event.target === dandelion) {
    gameboy.style.backgroundColor = '#F0C738';
  }

  if(event.target === teal) {
    gameboy.style.backgroundColor = '#41D2E2';
  }

});

var search = document.querySelector('#search');
var input = document.querySelector('#searchInput');

search.addEventListener('click', function(event) {
  event.preventDefault();
  selectedPokemon = input.value.toLowerCase();
  if (onDescriptionPage === false) {
    onDescriptionPage = true;
    deleteScreen();
  } else {
    deleteDescription();
  }
  pokemonDescription(selectedPokemon);
});

var pokeball = document.querySelector('#pokeball');
var searchField = document.querySelector('form');
var searchFieldOut = false;

pokeball.addEventListener('click', function(event) {
  if (searchFieldOut === false) {
    searchField.style.left = '0';
    searchField.autofocus = 'true';
    searchField.style.transitionDuration = '1s';
    pokeball.style.transform = 'rotate(360deg)';
    pokeball.style.transitionDuration = '1s';
    searchFieldOut = true;
  } else {
    searchField.style.left = '-395px';
    searchField.style.transitionDuration = '1s';
    pokeball.style.transform = 'rotate(-360deg)';
    pokeball.style.transitionDuration = '1s';
    searchFieldOut = false;
  }
});

function map () {
  var display = document.querySelector('.screen');
  var image = document.createElement('img');
  image.src = 'map.png';
  image.style.marginLeft = '0';
  image.style.width = '480px';
  image.style.height= '432px';
  display.appendChild(image);
}

function deleteMap() {
  var display = document.querySelector('.screen');
  display.removeChild(display.childNodes[0]);
}
