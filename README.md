# Drinkup!
*Let's get high!*

## (How to) Start a drinkup
### Basic steps
- Choose the template for your drinkup
- Checkout a new branch based on one of the ```template-``` branchs, make sure the new branch name obeys ```LOCATION-DATE``` convention, the name is important for your attendees
- Modify the ```drinkup.json``` according to your settings
- [optional] Modify the template/ui-style according to your taste
- Send invitation to your friends!
- [optional] Make your branch a template, so everyone else to use it as well, do pick a cool name, like ```template-doom-day```

### drinkup.json
This json file stores the configuration for this drinkup

#### Sample config
    {
        "time": "April 28th - April 30th, 2013",
        "when": "Catlife",
        "subject": "Drinkup & Hackathon"
    }

#### Fields
- place. Where?
- time. When?
- subject. What are we cheering for?


### Avaliable templates
Templates are branches named in the convention of ```template-```.

#### Dummy template
Branch name *template-dummy*

- Design & implemented by HF
- Sample Screencasts


## (How to) Join a drinkup
### Basic steps
- Fork this repo, and find the drinkup branch you are interested in
- The drinkup branch follows the convention of ```LOCATION-DATE```, for example, drinkup that takes place in HIT at April of 2013 is named as ```hit-201304```
- Create a json file named as ```YOUR_GITHUB_LOGIN.json```
- Fill the json file according to ```void-main.json```
- Push the json file to your own remote repo
- Send us a pull-request to the *right* branch

### Sign up sheet
#### Sample sheet

    {
        "github-id" : "552990",
        "avaliable-time" : [0, 1, 2],
        "capability-of-alcohol" : 2,
        "skills-of-interest" : ["python", "ruby", "android"]
    }

#### Fields
- github-id. Inner id of your github account, or login name of github
- avaliable-time. The drinkup's date index you are avaliable, the index starts from 0
- capability-of-alcohol. How many bottles of beer can you drink?
- skills-of-interest. JSON array of the skills that you are interested in
