# Drinkup!
*Let's get high!*

## (How to) Sign up
- Fork this repo, and find the drinkup branch you are interested in
- The drinkup branch follows the convention of ```LOCATION-DATE```, for example, drinkup that takes place in HIT at April of 2013 is named as ```hit-201304```
- Create a json file named as ```YOUR_GITHUB_LOGIN.json```
- Fill the json file according to ```void-main.json```
- Push the json file to your own remote repo
- Send us a pull-request to the *right* branch

## Sign up sheet
### Sample sheet

    {
        "github-id" : "552990",
        "avaliable-time" : [0, 1, 2],
        "capability-of-alcohol" : 2,
        "skills-of-interest" : ["python", "ruby", "android"]
    }

### Fields
- github-id. Inner id of your github account
- avaliable-time. The drinkup's date index you are avaliable, the index starts from 0
- capability-of-alcohol. How many bottles of beer can you drink?
- skills-of-interest. JSON array of the skills that you are interested in
