// This is a JavaScript file


$(document).on("click", "#btnMapa", function(){
  checkConnection();
  var latitude = undefined;
  var longitude = undefined;
});

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    if(states[networkState] == states[Connection.NONE])
    {

      navigator.notification.alert("Sem conexão. Por favor, conectar a uma rede.", semConexao, "Alerta", "fechar");
    }
    else
    {
      navigator.notification.beep(1);
      
      getMapLocation();
    }
}

function semConexao()
{
  navigator.notification.beep(3);
  navigator.vibrate(6000);
}

//Encontrar as coordenadas;
function getMapLocation() {

    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}

//Resultado positivo;
var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);

}

//Encontrar mapa;
function getMap(latitude, longitude)
{

  var mapOptions = {
    center: new com.MapQuest.LatLng(0,0),
    zoom: 1,
    mapTypeId: com.MapQuest.MapTypeId.ROADMAP
  };

  map = new com.MapQuest.Map
    (document.getElementById("#mapa"), mapOptions);

  var latLong = new com.MapQuest.LatLng(latitude, longitude);

    var marker = new com.MapQuest.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

//Retorno de sucesso após observar mudança de posição;

var onMapWatchSuccess = function (position) {

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getMap(updatedLatitude, updatedLongitude);
    }
}

//Retorno de erro;

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

//Observar mudança de posição;

function watchMapPosition() {

    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });
}