// This is a JavaScript file


//Clicar no botão;
$(document).on("click", "#btnMapa", function(){
  
  //checkConnection();

  window.onload = function() {

     var onSuccess = function(position){
        L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';
        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });   

        map.addControl(L.mapquest.control());
        }

        navigator.geolocation.getCurrentPosition(onSuccess);
    }
  
  
});
/*


//Verificar conexão;
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

      window.onload = function() {

     var onSuccess = function(position){
        L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';
        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });   

        map.addControl(L.mapquest.control());
        }

        navigator.geolocation.getCurrentPosition(onSuccess);
    }
    }
}

//Desconectado
function semConexao()
{
  navigator.notification.beep(3);
  navigator.vibrate(6000);
}


//Achar as coordenadas
function getMapLocation() {

    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}

//Resultado positivo;
var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

}

//Resultado negativo
var onMapError = function (position) {

    alert('Código: '    + error.code    + '\n' +
              'Mensagem: ' + error.message + '\n');

}

//Abrir
function mostrar(){
    L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';

    L.mapquest.map('map', {
      center: [Latitude, Longitude],
      layers: L.mapquest.tileLayer('map'),
      zoom: 10
    });
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

    navigator.notification.alert("Latitude: " + Latitude + "\n" + "Longitude: " + Longitude);

    getMap(Latitude, Longitude);

}

//Encontrar mapa;
function getMap(latitude, longitude)
{

  window.onload = function() {
        L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';

        var map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
  }
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
}*/