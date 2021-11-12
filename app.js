// document.querySelector('.btn').addEventListener('click',  src);
// Всплывающий поиск
let dataCity = document.querySelector('.inp').oninput = function () {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.elastic li');
	if (val !=''){
			elasticItems.forEach(function (elem) {
				if (elem.innerText.search(val) == -1){
					elem.classList.add('hide');
					elem.innerHTML = elem.innerText;
					
				}
				else{
					elem.classList.remove('hide');
					let str = elem.innerText;
					elem.innerText = capitalFirstLetter(val);
					elem.innerHTML = insertMark(str,elem.innerText.search(val), val.length);
					
				}
			});
	}
	else{
		elasticItems.forEach(function (elem) {
			elem.classList.add('hide');
			elem.innerHTML = elem.innerText;
		});
	}
}

function insertMark(string,pos,len) {
	return string.slice(0, pos)+'<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos+len)
}

function capitalFirstLetter(string) {
	const arrFromStr = string.split('')
	arrFromStr[0] = arrFromStr[0].toUpperCase()
	return arrFromStr.join('')
}





fetch('http://api.openweathermap.org/data/2.5/weather?q=Hrodna&appid=d37ac89ef7c7457d4d4c0623f06babed')
.then(function (resp) {return resp.json()})
.then(function (data) {
	console.log(data)
	document.querySelector('.header__city').textContent = data.name;
	document.querySelector('.header__discription') .textContent = data.weather[0].description;
	document.querySelector('.header__temperature').innerHTML = Math.floor(data.main.temp - 273)+'&deg'
	document.querySelector('.forecast__icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	document.querySelector('.forecast__humidity').textContent = 'Влажность  ' + data.main.humidity;
	document.querySelector('.forecast__wind').textContent = 'ветер  ' + data.wind.speed + ' m/s';
})


fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=53.68848&lon=23.8258", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "8528257bdbmsh017f9da5cc629fdp13a134jsn45f9b5fc3d98"
	}
})
.then(response => {
	return response.json()
	console.log(response);
})

.then(function (d) {
	console.log(d)
	document.querySelector('.header__city_2').textContent = d.city_name;
	document.querySelector('.header__discription_2') .textContent = d.data[0].weather.description;
	document.querySelector('.header__temperature_2').innerHTML = d.data[0].app_temp +'&deg'
	document.querySelector('.forecast__icon_2').innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${d.data[0].weather['icon']}.png/">`;
	document.querySelector('.forecast__humidity_2').textContent = 'Влажность  ' + Math.floor(d.data[0].dhi) + ' %' ;
	document.querySelector('.forecast__wind_2').textContent = 'ветер  ' + Math.floor(d.data[0].wind_spd ) + ' m/s';

// Tomorrow

	document.querySelector('.header__city_3').textContent = d.city_name;
	document.querySelector('.header__discription_3') .textContent = d.data[10].weather.description;
	document.querySelector('.header__temperature_3').innerHTML = d.data[10].app_temp +'&deg'
	document.querySelector('.forecast__icon_3').innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${d.data[10].weather['icon']}.png/">`;
	document.querySelector('.forecast__humidity_3').textContent = 'Влажность  ' + Math.floor(d.data[10].dhi) + ' %' ;
	document.querySelector('.forecast__wind_3').textContent = 'ветер  ' + Math.floor(d.data[10].wind_spd ) + ' m/s';



})


.catch(err => {
	console.error(err);
})