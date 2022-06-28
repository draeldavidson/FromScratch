'use strict';

///////////////////////////////////////////////////////
//☁️                  SELECTORS                      //
//////////////////////////////////////////////////////


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

///////////////////////////////////////////////////////
//☁️           CLASSES AND FUNCTIONS                 //
//////////////////////////////////////////////////////

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  // CONSTRUCTOR
  constructor(coords, distance, duration) {
    this.coords = coords; //lat lng
    this.distance = distance; //in km
    this.duration = duration; //in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;

  }

  click(){
    this.clicks++
  }
}

//CHILDREN CLASSES
class Running extends Workout {
  type = 'running';
  // CONSTRUCTOR
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();

    this._setDescription();
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  // CONSTRUCTOR
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //min/km
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

/////////////////////////////////////////
//☁️ REFACTORING FOR PROJECT ARCHITECTURE
class App {
  //PRIVATE VALUES
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  // CONSTRUCTOR
  constructor() {
    //CALLING THE METHODS SO IT SHOWS AT THE START OF LOADING

    this._getPossition();
    //MARKER APPEARS WHEN YOU CLICK ENTER
    form.addEventListener('submit', this._newWorkout.bind(this));

    //☁️ CREATING A TOGGLE FR CYCLING AND RUNNING
    inputType.addEventListener('change', this._toggleElevationField);

    //WE USE EVENT DELEGATION TO ADD EVENT LISTENERS TO ELEMENTS THAT HAVNT BEEN CREATED
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    //using local storage to display saved workouts
    this._getLocalStorage()
  }

  _getPossition() {
    //☁️ GETTING THE USERS LOCATION
    if (navigator.geolocation)
      //FINDS OUR GEO LOCATION
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get location');
        }
      );
  }

  _loadMap(position) {
    //THE GEOLOCATION POSITION IS AN OBJECT SO WE TAKE LATITUDE AND LONGITUDE OUT
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // THEN WE INSERT THOSE COORDINATES INTO A GOOGLE MAPS LINK TO SEE IF IT SHOWS OUR LOCATION
    const coords = [latitude, longitude];
    // USED LEAFLETS OPEN  SOURCE LIBRARY TO DISPLAY A MAP AT SPECIFIC COORDS
    //HAD TO ALSO AD THE LEAFLET SCRIPTS TO THE HTML
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work=> this._renderWorkoutMarker(work))

  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    //☁️ FORM APPEARS WHEN YOU CLICK ON THE MAP
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    this._clearFields();
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(event) {
    event.preventDefault();

    //SMALL HELPER Functions
    //Check if data is valid
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //if workout is running create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }
    //if workout is cycling create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //add new object to workout array
    this.#workouts.push(workout);

    //render workout on map as marker'
    this._renderWorkoutMarker(workout);

    //render workout on list
    this._renderWorkout(workout);
    // hide formand clear input fields
    this._hideForm();

    // set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    //☁️ MOVING MARKER ON CLICK
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
          `;

    if (workout.type === 'running')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

    if (workout.type === 'cycling')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li> 
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _clearFields() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  }

  _moveToPopup(event) {
    const workoutEl = event.target.closest('.workout');
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel + 1, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    //WHEN WORKING WOTH LOCAL STORAGE THE OBJECTS DONT INHERIT Functions
    // workout.click();
  }

  _setLocalStorage(){
    localStorage.setItem('workouts',JSON.stringify(this.#workouts))
  }
  _getLocalStorage(){
  const data = JSON.parse(localStorage.getItem('workouts'))
  if (!data) return;

  this.#workouts = data;
  this.#workouts.forEach(work=> this._renderWorkout(work))

  }
  reset(){
    localStorage.removeItem('workouts');
    location.reload();
  }
}
//WE CALL THE CLASS IN THE CONSTRUCTOR BUT NEED TO DECLARE IT OUTSIDE OF THE CLASS FIRST
const app = new App();
