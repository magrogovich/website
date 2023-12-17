function populateCities(){
    usa = ['New York','Chicago','LA']
    Tunisia = ['Ben Arous','Nabeul','Tunis']

    country = document.getElementById('country').value
    city = document.getElementById('city')

    city.innerHTML = ''

    if (country === 'usa'){
        cities = usa
    }else if(country === 'tunisia'){
        cities = Tunisia
    }

    for(i = 0; i < cities.length; i++){
        option = document.createElement('option')
        option.text = cities[i]
        city.add(option)
    }

}