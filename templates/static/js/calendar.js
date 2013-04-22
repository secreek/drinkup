var api_key = 'AIzaSyBGpH8Z_hbAaEgqq3TMQ5HEehYYtAtLDcI';
var client_id = '2832182632';

var scopes = 'https://www.googleapis.com/auth/calendar';
var resource;

function get_json(){
    //temp version, refactor when solve the problem getting json from 
    //url = 'https://raw.github.com/secreek/drinkup/hit-201304/drinkup.json?callback=?'
    data = {
        "summary" : "Drink Up",
        "location" : "Harbin Institude of Technology",
        "start" : {
            "dateTime" : "2013-04-28T10:00:00.000-07:00"
        },
        "end" : {
            "dateTime" : "2013-04-29T16:00:00.000-07:00"
        },
        "description" : "http://drinkup.in/hit",
        "organizer" : {
            "displayName" : "GoF"
        }
    };
    return data;
}

function get_drinkup_data() {
    resource = get_json();
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
