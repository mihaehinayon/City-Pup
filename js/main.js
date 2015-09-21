
/*
LANDING PAGE
    A. User enters search Input and clicks Search Icon
        1. Automatic scroll to Main Page
        2. Activate Loading State on Main Page >> and get data from Yelp
        3. Populate map with marker/markers based on Yelp data
            if only 1 result, display Map Blurb automatically
                - get Yelp rating and depending on the rating, display appropriate heart icons
            else, don't display Map Blurb until user clicks on a marker
    B. User does not enter search input and scrolls directly to Main Page
        1. Activate Loading State >> Get user location from browser >> get Yelp data based on location
        2. Populate map with Yelp results for Restaurants
        3. Display blurb when user clicks on marker, addClass to marker so user knows it's activated (maybe change the color?)
        4. If user clicks on nav buttons, change markers accordingly, i.e. Shops, Parks, etc.
        5. If users clicks on search, activate Search function

*/

var DATA = [

    {
        name: "The Cheeky Hound",
        category: "Shops",
        address: "727 Hope St., Providence, RI 02906",
        phone_number: "TEL: (401)-269-9953",
        link: "http://thecheekyhound.com/",
        description: "Pet boutique with DIY dog wash and grooming services",
        rating: 5,
        num_reviews: 8,
        location: {
            lat: 41.846693,
            lng: -71.395942
        }
    }, 

    {
        name: "Rhode Runner",
        category: "Shops",
        address: "657 N Main St., Providence, RI 02904",
        phone_number: "TEL: (401)-831-6346",
        link: "http://www.rhoderunner.com/",
        description: "Sportswear store and running club",
        rating: 5,
        num_reviews: 56,
        location: {
            lat: 41.838627,
            lng: -71.408906
        }
    },

    {
        name: "Julians",
        category: "Restaurants",
        address: "318 Broadway, Providence, RI 02909",
        phone_number: "TEL:(401)-861-1770",
        link: "http://www.juliansprovidence.com/",
        description: "Restaurant and bar on the West Side of Providence",
        rating: 4,
        num_reviews: 683,
        location: {
            lat: 41.819938,
            lng: -71.428209
        }
    },
    {
        name: "India",
        category: "Restaurants",
        address: "1060 Hope St., Providence, RI 02906",
        phone_number: "TEL: (401)-861-1770",
        link: "http://www.indiarestaurant.com/",
        description: "Restaurant bar and lounge",
        rating: 4,
        num_reviews: 227,
        location: {
            lat: 41.856073,
            lng: -71.391752
        }
    },

    {
        name: "Providence Marriott",
        category: "Hotels",
        address: "1 Orms St., Providence, RI 02904",
        phone_number: "TEL: (401)-272-2400",
        link: "http://marriottprovidence.com/",
        description: "Free guest parking, indoor/outdoor pool, and pet-friendly accommodations",
        rating: 3.5,
        num_reviews: 75,
        location: {
            lat: 41.835545,
            lng: -71.412925
        }
    },

      {
        name: "Blackstone Park",
        category: "Parks",
        address: "31 Parkside Rd., Providence, RI 02906",
        phone_number: "TEL: none",
        link: "http://www.blackstoneparksconservancy.org/the-parks/blackstone-conservation-district/",
        description: "Off-leash dog park with water views and trails",
        rating: 4,
        num_reviews: 13,
        location: {
            lat: 41.832537,
            lng: -71.380407
        }
    },

      {
        name: "India Point Park",
        category: "Parks",
        address: "India St., Providence, RI 02903",
        phone_number: "TEL: none",
        link: "http://www.friendsofindiapointpark.org/",
        description: "18 acres of open space, trees, and walking paths along the shoreline",
        rating: 4,
        num_reviews: 38,
        location: { 
            lat: 41.818155,
            lng: -71.394895
        }
    }
];


var map;

    function initMap() {
        var rhodeRunner = {lat: 41.838627, lng: -71.408906};  
        map = new google.maps.Map(document.getElementById('map'), {
            center: rhodeRunner,
            zoom: 14
        });


        DATA.forEach(function(place) {
            // Create InfoWindow
            var blurbContent = '<div class="blurb">' + 
                                    '<h2><a href=" '+ place.link +'" target="_blank">' + place.name + '</a></h2>' +
                                    '<p>' + place.description + '</p>' +
                                    '<p>' + place.address + '</p>' +
                                    '<p>' + place.phone_number + '</p>' +
                                '</div>';

            var infoWindow = new google.maps.InfoWindow({
                content: blurbContent
            });

            var marker = new google.maps.Marker ({
                position: place.location,
                map: map,
                title: place.name
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        
        });
    }





