"use strict";

function ajax (verb, url, handler) {
  var res = new XMLHttpRequest();
  res.onreadystatechange = function() {
    if (res.readyState === 4 && res.status === 200) {
      handler(JSON.parse(res.responseText));
    }
  };
  res.open(verb, url);
  res.send();
}

var currentOffset = 0;

var selectedPokemon;

function pokemonSet () {
  ajax('GET','http://pokeapi.co/api/v2/pokemon/?limit=7&offset=' + currentOffset, function(res) {
    for (var i = 0; i < 7; i++) {
      var h2Element = document.createElement('h2');
      var content = document.querySelector('.content');
      if (i === 0) {
        h2Element.className = 'pokemon active';
        h2Element.innerHTML = (i+1+currentOffset) +  ' ' + res.results[i].name.toUpperCase();
        h2Element.id = (i+1+currentOffset);
        content.appendChild(h2Element);
      } else {
        h2Element.className = 'pokemon';
        h2Element.innerHTML = (i+1+currentOffset) +  ' ' + res.results[i].name.toUpperCase();
        h2Element.id = (i+1+currentOffset);
        content.appendChild(h2Element);
      }
    }
  });
}

function pokemonDescription (selectedPokemon) {
  var display = document.querySelector('.screen');
  for (var i = 0; i < 14; i++) {
    display.removeChild(display.childNodes[0]);
  }
  var stats = document.createElement('div');
  stats.className = 'descStats';
  display.appendChild(stats);
  ajax ('GET', 'http://pokeapi.co/api/v2/pokemon/' + selectedPokemon, function (res) {
    var sprite = document.createElement('img');
    sprite.src = res.sprites.front_default;
    display.appendChild(sprite);
    var name = document.createElement('h1');
    name.innerHTML = res.name.toUpperCase();
    stats.appendChild(name);
    var genus = document.createElement('h1');
    genus.className = 'genus';
    stats.appendChild(genus);
    var height = document.createElement('h1');
    height.innerHTML = 'HT ' + res.height;
    stats.appendChild(height);
    var weight = document.createElement('h1');
    weight.innerHTML = 'WT ' + res.weight;
    stats.appendChild(weight);
  });
  var descDivider = document.createElement('div');
  descDivider.className = 'descDivider';
  display.appendChild(descDivider);
  ajax ('GET', 'http://pokeapi.co/api/v2/pokemon-species/' + selectedPokemon, function (res) {
    document.querySelector('.genus').innerHTML = res.genera[0].genus.toUpperCase();
    var description = document.createElement('h3');
    description.innerHTML = res.flavor_text_entries[53].flavor_text;
    display.appendChild(description);
  });
}

function deleteContents () {
  var content = document.querySelector('.content');
  for (var i = 0; i < 7; i++) {
    content.removeChild(content.childNodes[0]);
  }
}

function deleteDescription () {
  var display = document.querySelector('.screen');
  for (var i = 0; i < 5; i++) {
    display.removeChild(display.childNodes[0]);
  }
}

pokemonSet();

document.body.addEventListener('keyup',function(event) {
  var currentActive = document.querySelector('.active');

  if (event.which === 40) {
    var newActive = currentActive.nextSibling;
    if (newActive === null && currentActive.className === 'pokemon active') {
      currentOffset = Number(currentActive.id);
      deleteContents();
      pokemonSet();
    } else {
      currentActive.className = 'pokemon';
      newActive.className = 'pokemon active';
    }
  }
  else if (event.which === 38) {
    var newActive = currentActive.previousSibling;
    if (currentActive.id === '1') {
      newActive = currentActive;
    } else if (newActive === null) {
      currentOffset = Number(currentActive.id) - 8;
      deleteContents();
      pokemonSet();
    } else {
      currentActive.className = '';
      newActive.className = 'active';
    }
  }
  else if (event.which === 13) {
    var newActive = document.querySelector('#data');
    if (currentActive === newActive) {
      pokemonDescription(selectedPokemon);
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
});
