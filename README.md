# Youtube Unbeller

Goes through your youtube subscriptions and unbells them. Can be modified to personalise or bell them instead.

## Status

Seems to work ..

## Code

Goto your https://www.youtube.com/feed/channels and then run this in developer's console:

```javascript

(function ()
{
    function ToNextEntry()
    {
        var subscribe = document.querySelector("#subscribe-button");
        if(subscribe){
            subscribe.parentNode.removeChild(subscribe); 
        }
        
        unbell();
    }
    
    function unbell()
    {
        //
        var belldropdown = document.querySelector('ytd-subscription-notification-toggle-button-renderer');
        
        if(belldropdown==null)
        {
            console.log("sleeping");
            setTimeout(unbell,5000);
            return;
        }
        
        belldropdown.closest('ytd-channel-renderer').scrollIntoView();
                
        if(belldropdown.querySelector('button').getAttribute('aria-label').search('no notifications') != -1)
        {
            setTimeout(ToNextEntry,500);
        }
        else
        {
            belldropdown.click();
            
            setTimeout(function () { 
                document.getElementsByTagName('ytd-menu-service-item-renderer')[2].click();
                setTimeout(ToNextEntry,1500);
            },1500);
        }
    }
    
    if(document.querySelector('ytd-expanded-shelf-contents-renderer') != null)
    {
        unbell();
    }
})();

```

## Modifying it

* change the `no` in `'no notifications'` to `all` or `personalized`.
* change the array index `2` in `document.getElementsByTagName("ytd-menu-service-item-renderer")[2]` to `0` or `1`.

## Credit
* https://stackoverflow.com/questions/48874382/how-to-unsubscribe-from-all-the-youtube-channels-at-once
