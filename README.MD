# Microservicios

## Preparando entorno
#### Construir contenedores en docker
```bash
docker-compose up --build
```

#### Variable de entorno en postman
Para hacer las pruebas correctamente crear una variable de entorno con el nombre __url__ y asignarle como valor el host de ngix
```
http://localhost:8080
```
## API

### Listar todos los libros escritos por un autor por nombre o id

__Peticion:__

  ```
  /api/v2/books/author/12
  ```
  
  <details>
      <summary>Response</summary>
      
  ```json
     {
       "service": "authors",
       "architecture": "microservices",
       "data": {
        "0": {
            "id": 21,
            "author": "Fyodor Dostoevsky",
            "country": "Russia"
          },
         "books": [
            {
                "id": 16,
                "title": "Things Fall Apart",
                "authorid": 1,
                "imageLink": "images/things-fall-apart.jpg",
                "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
                "pages": 209,
                "year": 1958,
                "distributedCountries": [
                    "United Arab Emirates (the)",
                    "Ukraine",
                    "Iceland",
                    "Niue",
                    "Madagascar",
                    "Samoa",
                    "Armenia",
                    "Niger (the)",
                    "Grenada",
                    "French Guiana",
                    "Thailand",
                    "Marshall Islands (the)",
                    "Canada",
                    "Georgia",
                    "Fiji",
                    "Norway",
                    "Korea (the Democratic People's Republic of)",
                    "Dominica",
                    "United States Minor Outlying Islands (the)",
                    "France",
                    "Virgin Islands (British)",
                    "Zambia",
                    "Jordan",
                    "Azerbaijan",
                    "Jersey",
                    "Indonesia",
                    "Botswana",
                    "Tunisia",
                    "Northern Mariana Islands (the)",
                    "Uganda",
                    "Czechia",
                    "Chad",
                    "Guadeloupe",
                    "China",
                    "Tokelau",
                    "Poland"
                ],
                "languages": [
                    "Kinyarwanda (Rwanda)",
                    "Luganda, Ganda",
                    "Navajo",
                    "Swahili (Kiswahili)",
                    "Marshallese",
                    "Cree",
                    "Western Frisian",
                    "Divehi, Dhivehi, Maldivian",
                    "Avestan",
                    "Yiddish",
                    "Chechen",
                    "Sindhi",
                    "Luxembourgish",
                    "Tagalog",
                    "Dutch",
                    "Guarani",
                    "Pāli",
                    "Norwegian nynorsk"
                ]
            }
        ]
      }
     }
  ```
  </details>
 
  ---
  ### Listar todos los libros según rango de años
  
  - __Listar del año 1986 a 2000__
  
  __Peticion:__
  
  ```
  /api/v2/books?from=1986&to=2000
  ```
  <details>
    <summary>Response</summary>
    
  ```json
    {
    "service": "books",
    "architecture": "microservices",
    "length": 2,
    "data": [
        {
            "id": 62,
            "title": "Blindness",
            "authorid": 68,
            "imageLink": "images/blindness.jpg",
            "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
            "pages": 352,
            "year": 1995,
            "distributedCountries": [
                "United Arab Emirates (the)",
                "Norway",
                "Western Sahara",
                "Iran (Islamic Republic of)",
                "Ecuador",
                "Brunei Darussalam",
                "Uganda",
                "Burkina Faso",
                "Bhutan",
                "Jordan",
                "Belgium",
                "Grenada",
                "Virgin Islands (U.S.)",
                "Holy See (the)",
                "Liberia",
                "Finland",
                "Turkmenistan",
                "Bermuda",
                "Saint Lucia",
                "Indonesia",
                "Netherlands (the)",
                "Tokelau",
                "United Kingdom of Great Britain and Northern Ireland (the)",
                "Georgia",
                "United States Minor Outlying Islands (the)",
                "South Georgia and the South Sandwich Islands"
            ],
            "languages": [
                "Malayalam",
                "Chuvash",
                "Sinhalese",
                "Assamese",
                "Croatian",
                "Avestan",
                "Turkish",
                "Hebrew",
                "Volapük",
                "Ewe",
                "Luga-Katanga",
                "Tsonga",
                "Chichewa, Chewa, Nyanja",
                "Georgian",
                "Komi",
                "Slovak"
            ]
        },
        {
            "id": 65,
            "title": "Beloved",
            "authorid": 53,
            "imageLink": "images/beloved.jpg",
            "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
            "pages": 321,
            "year": 1987,
            "distributedCountries": [
                "Saudi Arabia",
                "Uzbekistan",
                "Armenia",
                "Eswatini",
                "Serbia",
                "Israel",
                "Trinidad and Tobago",
                "United States Minor Outlying Islands (the)",
                "Bangladesh",
                "Heard Island and McDonald Islands",
                "Italy"
            ],
            "languages": [
                "Bengali (Bangla)",
                "Czech",
                "Chamorro",
                "Irish",
                "Bihari",
                "Swahili (Kiswahili)",
                "Japanese",
                "Kanuri",
                "Luga-Katanga"
            ]
        }
    ]
}
  ```
  </details>
  
  ---
  - __Listar libros con años superiores a 1994__
  
   Peticion:
   
  ```
  /api/v2/books?from=1994
  ```
  <details>
    <summary>Response</summary>
    
  ```json
    {
    "service": "books",
    "architecture": "microservices",
    "length": 1,
    "data": [
        {
            "id": 62,
            "title": "Blindness",
            "authorid": 68,
            "imageLink": "images/blindness.jpg",
            "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
            "pages": 352,
            "year": 1995,
            "distributedCountries": [
                "United Arab Emirates (the)",
                "Norway",
                "Western Sahara",
                "Iran (Islamic Republic of)",
                "Ecuador",
                "Brunei Darussalam",
                "Uganda",
                "Burkina Faso",
                "Bhutan",
                "Jordan",
                "Belgium",
                "Grenada",
                "Virgin Islands (U.S.)",
                "Holy See (the)",
                "Liberia",
                "Finland",
                "Turkmenistan",
                "Bermuda",
                "Saint Lucia",
                "Indonesia",
                "Netherlands (the)",
                "Tokelau",
                "United Kingdom of Great Britain and Northern Ireland (the)",
                "Georgia",
                "United States Minor Outlying Islands (the)",
                "South Georgia and the South Sandwich Islands"
            ],
            "languages": [
                "Malayalam",
                "Chuvash",
                "Sinhalese",
                "Assamese",
                "Croatian",
                "Avestan",
                "Turkish",
                "Hebrew",
                "Volapük",
                "Ewe",
                "Luga-Katanga",
                "Tsonga",
                "Chichewa, Chewa, Nyanja",
                "Georgian",
                "Komi",
                "Slovak"
            ]
        }
    ]
}
  ```
  </details>
    
  ---
  - __Listar libros con años inferiores a 998__
  
   Peticion:
  ```
  /api/v2/books?to=998
  ```
  
  <details>
    <summary>Response</summary>
    
  ```json
    {
    "service": "books",
    "architecture": "microservices",
    "length": 2,
    "data": [
        {
            "id": 11,
            "title": "Metamorphoses",
            "authorid": 58,
            "imageLink": "images/the-metamorphoses-of-ovid.jpg",
            "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
            "pages": 576,
            "year": 100,
            "distributedCountries": [
                "Kuwait",
                "Cabo Verde",
                "Congo (the)",
                "Saint Helena, Ascension and Tristan da Cunha",
                "Jamaica",
                "Hungary",
                "Saint Lucia",
                "Nepal",
                "Greenland",
                "Rwanda",
                "Bermuda",
                "French Guiana",
                "Tanzania, United Republic of",
                "Belgium",
                "Chad",
                "United States of America (the)",
                "Nigeria",
                "Côte d'Ivoire",
                "Sri Lanka",
                "Korea (the Republic of)",
                "Serbia",
                "Fiji",
                "Eswatini",
                "Guatemala",
                "Cuba",
                "Guinea",
                "South Africa",
                "Afghanistan",
                "Australia",
                "Tunisia",
                "Paraguay",
                "Guernsey",
                "Romania",
                "Liberia",
                "Cook Islands (the)",
                "Anguilla",
                "Panama",
                "South Sudan"
            ],
            "languages": [
                "Hungarian",
                "Limburgish ( Limburger)",
                "Chechen",
                "Akan",
                "Venda",
                "Cornish",
                "Finnish",
                "Javanese",
                "Icelandic",
                "Tigrinya",
                "Spanish",
                "Sundanese",
                "Italian",
                "Nepali",
                "Gaelic (Scottish)"
            ]
        },
        {
            "id": 26,
            "title": "The recognition of Shakuntala",
            "authorid": 39,
            "imageLink": "images/the-recognition-of-shakuntala.jpg",
            "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
            "pages": 147,
            "year": 150,
            "distributedCountries": [
                "United States of America (the)",
                "Lebanon",
                "Gambia (the)",
                "Nepal",
                "Slovakia",
                "Anguilla",
                "Bouvet Island",
                "Burundi",
                "Niue",
                "Syrian Arab Republic",
                "Tuvalu",
                "Gibraltar",
                "Maldives",
                "Monaco",
                "Tonga",
                "Rwanda"
            ],
            "languages": [
                "Basque",
                "Telugu",
                "Spanish",
                "Sesotho",
                "Albanian"
            ]
        }
    ]
}
  ```
  </details>
  
  ---
  - __Listar libros con el año igual a 1904__
  
   Peticion:
  ```
  /api/v2/books?from=1904&to=1904
  ```
  
  <details>
    <summary>Response</summary>
    
  ```json
    {
    "service": "books",
    "architecture": "microservices",
    "length": 1,
    "data": [
        {
            "id": 3,
            "title": "Nostromo",
            "authorid": 17,
            "imageLink": "images/nostromo.jpg",
            "link": "https://en.wikipedia.org/wiki/Nostromo\n",
            "pages": 320,
            "year": 1904,
            "distributedCountries": [
                "Serbia",
                "Mayotte",
                "South Georgia and the South Sandwich Islands",
                "Christmas Island",
                "Hungary",
                "Oman",
                "Ireland",
                "Denmark",
                "Croatia",
                "Sweden"
            ],
            "languages": [
                "Tagalog",
                "Bambara",
                "Afar",
                "Korean",
                "Malagasy",
                "Serbian",
                "Western Frisian",
                "Latin",
                "Greenlandic",
                "Punjabi (Eastern)",
                "Turkmen",
                "Spanish",
                "Hausa",
                "Quechua",
                "Kalaallisut, Greenlandic",
                "Polish",
                "Urdu",
                "Tsonga",
                "Swedish",
                "Yoruba"
            ]
        }
    ]
}
  ```
  </details>
 
  ___
  ### Segun el nombre de una capital, listar:
  - Listar el nombre del país al que pertenece.
  - Los nombres de los autores nacidos en ese país.
  - Listar los libros distribuidos en ese país.
  
  __Peticion:__
  ```
  /api/v2/countries/capital/Madrid
  ```
 <details>
    <summary>Response</summary>
    
  ```json
  {
    "service": "countries",
    "architecture": "microservices",
    "data": {
        "country": "Spain",
        "authors": [
            "Miguel de Cervantes",
            "Federico García Lorca"
        ],
        "books": [
            "The Tin Drum",
            "Le Père Goriot",
            "Gulliver's Travels",
            "To the Lighthouse",
            "Journey to the End of the Night",
            "Don Quijote De La Mancha",
            "The Epic Of Gilgamesh",
            "Bostan",
            "Dead Souls"
        ]
    }
}
  ```
 </details>

___
### Según el código de lenguaje o el nombre, listar:
  - Información del autor que haya nacido en el país donde se habla ese lenguaje
  - Listar países, donde se hable o se use el determinado lenguaje
  - Listar los libros los que se hayan distribuido en determinado país
que hable ese lenguaje

__Según el código:__
```
/api/v2/languages/de
```

  <details>
    <summary>Response</summary>
    
  ```json
    {
    "service": "languages",
    "architecture": "microservices",
    "data": {
        "language": [
            "German"
        ],
        "countries": [
            "Austria",
            "Belgium",
            "Switzerland",
            "Germany",
            "Liechtenstein",
            "Luxembourg"
        ],
        "authors": [
            {
                "id": 55,
                "author": "Robert Musil",
                "country": "Austria"
            },
            {
                "id": 82,
                "author": "Marguerite Yourcenar",
                "country": "France/Belgium"
            },
            {
                "id": 20,
                "author": "Alfred Döblin",
                "country": "Germany"
            },
            {
                "id": 31,
                "author": "Günter Grass",
                "country": "Germany"
            },
            {
                "id": 49,
                "author": "Thomas Mann",
                "country": "Germany"
            }
        ],
        "books": [
            "Othello",
            "Pippi Longstocking",
            "The Book of Disquiet",
            "Berlin Alexanderplatz",
            "Mrs Dalloway",
            "Mahabharata",
            "Leaves of Grass",
            "Great Expectations",
            "The Sound and the Fury",
            "Ficciones",
            "Pedro Páramo",
            "Poems",
            "Othello",
            "Fairy tales",
            "Metamorphoses",
            "Poems",
            "Medea",
            "Blindness",
            "Dead Souls",
            "Independent People",
            "The Life And Opinions of Tristram Shandy",
            "The Brothers Karamazov",
            "Medea",
            "Dead Souls",
            "Odyssey",
            "Moby Dick",
            "The Life And Opinions of Tristram Shandy",
            "The Book Of Job",
            "Ulysses",
            "The Brothers Karamazov",
            "Journey to the End of the Night",
            "Midnight's Children",
            "Odyssey",
            "The Life And Opinions of Tristram Shandy",
            "The Stranger",
            "The Book Of Job",
            "The Red and the Black",
            "Othello",
            "Pippi Longstocking",
            "Anna Karenina",
            "The Adventures of Huckleberry Finn",
            "Medea",
            "Jacques the Fatalist",
            "The Castle",
            "The Sound of the Mountain",
            "Ficciones",
            "Hunger",
            "Moby Dick",
            "Molloy, Malone Dies, The Unnamable, the trilogy",
            "Pippi Longstocking",
            "The Brothers Karamazov",
            "Njál's Saga",
            "Iliad",
            "Confessions of Zeno",
            "Stories"
        ]
    }
}
  ```
  </details>

__Según el nombre:__
```
/api/v2/languages/language/Portuguese
```

  <details>
    <summary>Response</summary>
    
  ```json
    {
    "service": "languages",
    "architecture": "microservices",
    "data": {
        "languageCode": "pt",
        "countries": [
            "Angola",
            "Brazil",
            "Cape Verde",
            "Guinea-Bissau",
            "Macao",
            "Mozambique",
            "Portugal",
            "São Tomé and Príncipe",
            "East Timor"
        ],
        "authors": [
            {
                "id": 32,
                "author": "João Guimarães Rosa",
                "country": "Brazil"
            },
            {
                "id": 59,
                "author": "Fernando Pessoa",
                "country": "Portugal"
            },
            {
                "id": 68,
                "author": "José Saramago",
                "country": "Portugal"
            }
        ],
        "books": [
            "Children of Gebelawi",
            "The Book of Disquiet",
            "Madame Bovary",
            "The Canterbury Tales",
            "Berlin Alexanderplatz",
            "Mrs Dalloway",
            "Gypsy Ballads",
            "Midnight's Children",
            "Hunger",
            "The Life And Opinions of Tristram Shandy",
            "Molloy, Malone Dies, The Unnamable, the trilogy",
            "War and Peace",
            "The Golden Notebook",
            "A Doll's House",
            "Lolita",
            "Don Quijote De La Mancha",
            "Gargantua and Pantagruel",
            "Iliad",
            "In Search of Lost Time",
            "Nineteen Eighty-Four",
            "Madame Bovary",
            "The Decameron",
            "The Tin Drum",
            "Le Père Goriot",
            "The Tale of Genji",
            "Njál's Saga",
            "The Idiot",
            "Confessions of Zeno",
            "The Brothers Karamazov",
            "The Tale of Genji",
            "A Doll's House",
            "Great Expectations",
            "Odyssey",
            "Season of Migration to the North",
            "Ulysses",
            "Diary of a Madman",
            "The Tale of Genji",
            "The Golden Notebook",
            "Mahabharata",
            "The Aeneid",
            "The Man Without Qualities",
            "Bostan",
            "Gargantua and Pantagruel",
            "Dead Souls",
            "Molloy, Malone Dies, The Unnamable, the trilogy",
            "Fairy tales",
            "The Decameron",
            "Njál's Saga",
            "The Man Without Qualities",
            "Gypsy Ballads",
            "One Thousand and One Nights",
            "Jacques the Fatalist",
            "One Hundred Years of Solitude",
            "Independent People",
            "The Life And Opinions of Tristram Shandy",
            "In Search of Lost Time",
            "The Devil to Pay in the Backlands"
        ]
    }
}
  ```
  </details>
