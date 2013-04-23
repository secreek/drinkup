var api_key = 'AIzaSyBGpH8Z_hbAaEgqq3TMQ5HEehYYtAtLDcI';
var client_id = '2832182632';

var scopes = 'https://www.googleapis.com/auth/calendar';
var resource={};

function set_switch(id, sw_status){   
    var traget=document.getElementById(id);   
    if(sw_status == 'on'){ 
        traget.disabled=false;   
    }else{
        traget.style.display=true;  
    }   
}  

function init_drinkup_data() {
    url = 'https://api.github.com/repos/secreek/drinkup/contents/drinkup.json?ref=hit-201304&callback=?'
    $.getJSON(url, function(json){
        resource = JSON.parse(base64decode(json.data.content));
        set_switch('calendar', 'on');
    });
}

function insert_event() {
    gapi.client.setApiKey(api_key);
    gapi.auth.init(load);
}

function load() {
    gapi.client.load('calendar', 'v3', auth);
}

function auth() {
    gapi.auth.authorize({
        'client_id': client_id,
        'scope': scopes,
        'immediate': true
    }, make_request);
}

function make_request() {
    gapi.client.request({
    'path': '/calendar/v3/calendars/primary/events',
    'method': 'POST',
    'body': resource,
    'callback': handle_response
    });
}

function handle_response(response) {
    console.log(response);
    var calendar_entry = response.htmlLink;
    window.open(calendar_entry, "_blank" ,"resizable:true");
}
