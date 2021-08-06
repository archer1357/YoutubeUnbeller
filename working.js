
        //unecessary? ..didn't test
        //if(document.querySelector('ytd-expanded-shelf-contents-renderer') == null)
        //{
        //   window.scrollTo(0,document.body.scrollHeight);
        //   setTimeout(youtubeunbeller, 10000)
        //   return;
        //}

            //var section = document.querySelector('ytd-item-section-renderer');
            //var channels = section.getElementsByTagName('ytd-channel-renderer');
        
               // console.log("hm " + channels.length);
            //if(section.querySelector('ytd-channel-renderer')==null)
            /*if(channels.length<5)
            {
                
               
                setTimeout(unbell,10000);
                console.log("ok");
            }
            else if(channels.length==0)
            {
                setTimeout(function(){
                    var section = document.querySelector('ytd-item-section-renderer');
                    section.parentNode.removeChild(section); 
                    unbell();
                },1000);
                console.log("ok2");
            }
            else
            {
            }*/


(function ()
{
    function ToNextEntry()
    {
        //var channel = document.querySelector('ytd-channel-renderer');  
        //channel.parentNode.removeChild(channel); 
        
       // var avatar = document.querySelector("#avatar-section");
       // if(avatar) {avatar.parentNode.removeChild(avatar); }
        var subscribe = document.querySelector("#subscribe-button");
        if(subscribe){
            subscribe.parentNode.removeChild(subscribe); 
           
            //var avatar = subscribe.parentNode.parentNode.parentNode.querySelector("#avatar-section");
            var avatar = subscribe .closest('#avatar-section');
            if(avatar) {avatar.parentNode.removeChild(avatar); }
            }
        /*var IsLoadingSection = (document.querySelectorAll('ytd-continuation-item-renderer').length >= 2);
        
        if(!IsLoadingSection)
        {
            var sections = document.getElementsByTagName("ytd-item-section-renderer");
            
            if(sections.length==1 && //document.querySelector('ytd-channel-renderer') == null
            sections[0].getElementsByTagName("ytd-channel-renderer").length <=5
            )
            {
                window.scrollTo(0,Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight));
                setTimeout(unbell,5000);
                return;
            }
        }*/
        unbell();
    }
    
    function unbell()
    {
        //var IsLoadingSection = (document.querySelectorAll('ytd-continuation-item-renderer').length >= 2); //2 because there is one at the bottom sometimes doing nothing
        //var IsChannelAvail =(document.querySelector('#subscribe-button')!=null);// (document.querySelector('ytd-channel-renderer') != null);
        
        //if(!IsLoadingSection && !IsChannelAvail)
        //{
               // console.log("stopping");
                //return;
        //}
        //else 
        
        //if( !IsChannelAvail) //IsLoadingSection ||
        //{
             //  console.log("sleeping");
              //  setTimeout(unbell,5000);
            //return;
        //}
        
        //remove last empty section (unnecessary)
       /* var section = document.querySelector('ytd-item-section-renderer');
        
        if(section.querySelector('ytd-channel-renderer')==null &&document.querySelector('ytd-continuation-item-renderer')==null)
        {
            section.parentNode.removeChild(section); 
        }
        
        //clear avatars (unnecessary, maybe speed up?)
        var avatars = document.querySelectorAll("#avatar-section");
        
        for(var i=0;i<avatars.length;i++) {  avatars[i].parentNode.removeChild(avatars[i]);  }
        */
        

        //
        //if(!IsLoadingSection)
        //{
            
        //var rect = document.querySelector('ytd-channel-renderer').getBoundingClientRect();
        //var rect = document.querySelector('#subscribe-button').getBoundingClientRect();
            
        //window.scrollTo(0,rect.top);
            // window.scrollTo(0,0);
          //  console.log(rect.top);
            
        //    document.querySelector('#subscribe-button').scrollIntoView();

        //}
        
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
            //ToNextEntry();
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
