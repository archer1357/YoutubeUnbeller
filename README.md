# Youtube Unbeller

Goes through your youtube subscriptions and unbells them. Can be modified to personalise or bell them instead.

## Status

Seems to work ..

## Code

Goto your https://www.youtube.com/feed/channels and then run this in developer's console:

```javascript

(function ()
{
	var fromIndices = [1,0];
	var toIndex = 2;
	
	var fromNames=['all','personalized','no'];
	
	var masthead=document.getElementById('masthead-container');
	masthead.parentElement.removeChild(masthead);
	
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
        var curBellStatus = false;
		
		for(var i=0;i<fromIndices.length;i++)
		{
			var fromIndex = fromIndices[i];
			curBellStatus = curBellStatus || (belldropdown.querySelector('button').getAttribute('aria-label').search(fromNames[fromIndex]+' notifications')  != -1);
		}
		
		
        if(!curBellStatus)
        {
            setTimeout(ToNextEntry,500);
        }
        else
        {
            belldropdown.click();
            
            setTimeout(function () { 
                document.getElementsByTagName('ytd-menu-service-item-renderer')[toIndex].click(); //2
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

* change fromIndices and  toIndex
* index 0 = all notifications, 1 == personalized notifications, 2 = no notifications

## Credit
* https://stackoverflow.com/questions/48874382/how-to-unsubscribe-from-all-the-youtube-channels-at-once
