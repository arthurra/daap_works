$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 500;
 
            //interval between items (in milliseconds)
            var itemInterval = 4000;
            //cross-fade time (in milliseconds)
            var fadeTime = 1000;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
            
                        
            
			//----------  ROW 1 POSITION B  -----------//

            var numberOfItems1B = $('.rotating-item-1B').length;
            var currentItem1B = 0;
            $('.rotating-item-1B').eq(currentItem1B).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-1B').eq(currentItem1B).fadeOut(fadeTime);
                if(currentItem1B == numberOfItems1B -1){  currentItem1B = 0;   }else{   currentItem1B++;   }
                $('.rotating-item-1B').eq(currentItem1B).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 1 POSITION C  -----------//

            var numberOfItems1C = $('.rotating-item-1C').length;
            var currentItem1C = 0;
            $('.rotating-item-1C').eq(currentItem1C).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-1C').eq(currentItem1C).fadeOut(fadeTime);
                if(currentItem1C == numberOfItems1C -1){  currentItem1C = 0;   }else{   currentItem1C++;   }
                $('.rotating-item-1C').eq(currentItem1C).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 1 POSITION D  -----------//

            var numberOfItems1D = $('.rotating-item-1D').length;
            var currentItem1D = 0;
            $('.rotating-item-1D').eq(currentItem1D).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-1D').eq(currentItem1D).fadeOut(fadeTime);
                if(currentItem1D == numberOfItems1D -1){  currentItem1D = 0;   }else{   currentItem1D++;   }
                $('.rotating-item-1D').eq(currentItem1D).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 1 POSITION E  -----------//

            var numberOfItems1E = $('.rotating-item-1E').length;
            var currentItem1E = 0;
            $('.rotating-item-1E').eq(currentItem1E).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-1E').eq(currentItem1E).fadeOut(fadeTime);
                if(currentItem1E == numberOfItems1E -1){  currentItem1E = 0;   }else{   currentItem1E++;   }
                $('.rotating-item-1E').eq(currentItem1E).fadeIn(fadeTime);
            }, itemInterval);

			 //----------  ROW 1 POSITION F  -----------//

            var numberOfItems1F = $('.rotating-item-1F').length;
            var currentItem1F = 0;
            $('.rotating-item-1F').eq(currentItem1F).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-1F').eq(currentItem1F).fadeOut(fadeTime);
                if(currentItem1F == numberOfItems1F -1){  currentItem1F = 0;   }else{   currentItem1F++;   }
                $('.rotating-item-1F').eq(currentItem1F).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 1 POSITION G  -----------//

            var numberOfItems1G = $('.rotating-item-1G').length;
            var currentItem1G = 0;
            $('.rotating-item-1G').eq(currentItem1G).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-1G').eq(currentItem1G).fadeOut(fadeTime);
                if(currentItem1G == numberOfItems1G -1){  currentItem1G = 0;   }else{   currentItem1G++;   }
                $('.rotating-item-1G').eq(currentItem1G).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 1 POSITION G  -----------//

            var numberOfItems1H = $('.rotating-item-1H').length;
            var currentItem1H = 0;
            $('.rotating-item-1H').eq(currentItem1H).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-1H').eq(currentItem1H).fadeOut(fadeTime);
                if(currentItem1H == numberOfItems1H -1){  currentItem1H = 0;   }else{   currentItem1H++;   }
                $('.rotating-item-1H').eq(currentItem1H).fadeIn(fadeTime);
            }, itemInterval);
          
          
          //-------------------------------------------------------------------------//
          //=============------------------ ROW 2 ----------------------=============//
          //-------------------------------------------------------------------------//
        
           //----------  ROW 2 POSITION A  -----------//

            var numberOfItems2A = $('.rotating-item-2A').length;
            var currentItem2A = 0;
            $('.rotating-item-2A').eq(currentItem2A).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2A').eq(currentItem2A).fadeOut(fadeTime);
                if(currentItem2A == numberOfItems2A -1){  currentItem2A = 0;   }else{   currentItem2A++;   }
                $('.rotating-item-2A').eq(currentItem2A).fadeIn(fadeTime);
            }, itemInterval);

			//----------  ROW 2 POSITION B  -----------//

            var numberOfItems2B = $('.rotating-item-2B').length;
            var currentItem2B = 0;
            $('.rotating-item-2B').eq(currentItem2B).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2B').eq(currentItem2B).fadeOut(fadeTime);
                if(currentItem2B == numberOfItems2B -1){  currentItem2B = 0;   }else{   currentItem2B++;   }
                $('.rotating-item-2B').eq(currentItem2B).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 2 POSITION C  -----------//

            var numberOfItems2C = $('.rotating-item-2C').length;
            var currentItem2C = 0;
            $('.rotating-item-2C').eq(currentItem2C).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2C').eq(currentItem2C).fadeOut(fadeTime);
                if(currentItem2C == numberOfItems2C -1){  currentItem2C = 0;   }else{   currentItem2C++;   }
                $('.rotating-item-2C').eq(currentItem2C).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 2 POSITION D  -----------//

            var numberOfItems2D = $('.rotating-item-2D').length;
            var currentItem2D = 0;
            $('.rotating-item-2D').eq(currentItem2D).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2D').eq(currentItem2D).fadeOut(fadeTime);
                if(currentItem2D == numberOfItems2D -1){  currentItem2D = 0;   }else{   currentItem2D++;   }
                $('.rotating-item-2D').eq(currentItem2D).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 2 POSITION E  -----------//

            var numberOfItems2E = $('.rotating-item-2E').length;
            var currentItem2E = 0;
            $('.rotating-item-2E').eq(currentItem2E).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2E').eq(currentItem2E).fadeOut(fadeTime);
                if(currentItem2E == numberOfItems2E -1){  currentItem2E = 0;   }else{   currentItem2E++;   }
                $('.rotating-item-2E').eq(currentItem2E).fadeIn(fadeTime);
            }, itemInterval);

			 //----------  ROW 2 POSITION F  -----------//

            var numberOfItems2F = $('.rotating-item-2F').length;
            var currentItem2F = 0;
            $('.rotating-item-2F').eq(currentItem2F).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2F').eq(currentItem2F).fadeOut(fadeTime);
                if(currentItem2F == numberOfItems2F -1){  currentItem2F = 0;   }else{   currentItem2F++;   }
                $('.rotating-item-2F').eq(currentItem2F).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 2 POSITION G  -----------//

            var numberOfItems2G = $('.rotating-item-2G').length;
            var currentItem2G = 0;
            $('.rotating-item-2G').eq(currentItem2G).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2G').eq(currentItem2G).fadeOut(fadeTime);
                if(currentItem2G == numberOfItems2G -1){  currentItem2G = 0;   }else{   currentItem2G++;   }
                $('.rotating-item-2G').eq(currentItem2G).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 2 POSITION G  -----------//

            var numberOfItems2H = $('.rotating-item-2H').length;
            var currentItem2H = 0;
            $('.rotating-item-2H').eq(currentItem2H).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-2H').eq(currentItem2H).fadeOut(fadeTime);
                if(currentItem2H == numberOfItems2H -1){  currentItem2H = 0;   }else{   currentItem2H++;   }
                $('.rotating-item-2H').eq(currentItem2H).fadeIn(fadeTime);
            }, itemInterval);

            
          //-------------------------------------------------------------------------//
          //=============------------------ ROW 3 ----------------------=============//
          //-------------------------------------------------------------------------//
        
           //----------  ROW 3 POSITION A  -----------//

            var numberOfItems3A = $('.rotating-item-3A').length;
            var currentItem3A = 0;
            $('.rotating-item-3A').eq(currentItem3A).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3A').eq(currentItem3A).fadeOut(fadeTime);
                if(currentItem3A == numberOfItems3A -1){  currentItem3A = 0;   }else{   currentItem3A++;   }
                $('.rotating-item-3A').eq(currentItem3A).fadeIn(fadeTime);
            }, itemInterval);

			//----------  ROW 3 POSITION B  -----------//

            var numberOfItems3B = $('.rotating-item-3B').length;
            var currentItem3B = 0;
            $('.rotating-item-3B').eq(currentItem3B).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3B').eq(currentItem3B).fadeOut(fadeTime);
                if(currentItem3B == numberOfItems3B -1){  currentItem3B = 0;   }else{   currentItem3B++;   }
                $('.rotating-item-3B').eq(currentItem3B).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 3 POSITION C  -----------//

            var numberOfItems3C = $('.rotating-item-3C').length;
            var currentItem3C = 0;
            $('.rotating-item-3C').eq(currentItem3C).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3C').eq(currentItem3C).fadeOut(fadeTime);
                if(currentItem3C == numberOfItems3C -1){  currentItem3C = 0;   }else{   currentItem3C++;   }
                $('.rotating-item-3C').eq(currentItem3C).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 3 POSITION D  -----------//

            var numberOfItems3D = $('.rotating-item-3D').length;
            var currentItem3D = 0;
            $('.rotating-item-3D').eq(currentItem3D).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3D').eq(currentItem3D).fadeOut(fadeTime);
                if(currentItem3D == numberOfItems3D -1){  currentItem3D = 0;   }else{   currentItem3D++;   }
                $('.rotating-item-3D').eq(currentItem3D).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 3 POSITION E  -----------//

            var numberOfItems3E = $('.rotating-item-3E').length;
            var currentItem3E = 0;
            $('.rotating-item-3E').eq(currentItem3E).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3E').eq(currentItem3E).fadeOut(fadeTime);
                if(currentItem3E == numberOfItems3E -1){  currentItem3E = 0;   }else{   currentItem3E++;   }
                $('.rotating-item-3E').eq(currentItem3E).fadeIn(fadeTime);
            }, itemInterval);

			 //----------  ROW 3 POSITION F  -----------//

            var numberOfItems3F = $('.rotating-item-3F').length;
            var currentItem3F = 0;
            $('.rotating-item-3F').eq(currentItem3F).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3F').eq(currentItem3F).fadeOut(fadeTime);
                if(currentItem3F == numberOfItems3F -1){  currentItem3F = 0;   }else{   currentItem3F++;   }
                $('.rotating-item-3F').eq(currentItem3F).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 3 POSITION G  -----------//

            var numberOfItems3G = $('.rotating-item-3G').length;
            var currentItem3G = 0;
            $('.rotating-item-3G').eq(currentItem3G).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3G').eq(currentItem3G).fadeOut(fadeTime);
                if(currentItem3G == numberOfItems3G -1){  currentItem3G = 0;   }else{   currentItem3G++;   }
                $('.rotating-item-3G').eq(currentItem3G).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 3 POSITION G  -----------//

            var numberOfItems3H = $('.rotating-item-3H').length;
            var currentItem3H = 0;
            $('.rotating-item-3H').eq(currentItem3H).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-3H').eq(currentItem3H).fadeOut(fadeTime);
                if(currentItem3H == numberOfItems3H -1){  currentItem3H = 0;   }else{   currentItem3H++;   }
                $('.rotating-item-3H').eq(currentItem3H).fadeIn(fadeTime);
            }, itemInterval);


		  //-------------------------------------------------------------------------//
          //=============------------------ ROW 4 ----------------------=============//
          //-------------------------------------------------------------------------//
        
           //----------  ROW 4 POSITION A  -----------//

            var numberOfItems4A = $('.rotating-item-4A').length;
            var currentItem4A = 0;
            $('.rotating-item-4A').eq(currentItem4A).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4A').eq(currentItem4A).fadeOut(fadeTime);
                if(currentItem4A == numberOfItems4A -1){  currentItem4A = 0;   }else{   currentItem4A++;   }
                $('.rotating-item-4A').eq(currentItem4A).fadeIn(fadeTime);
            }, itemInterval);

			//----------  ROW 4 POSITION B  -----------//

            var numberOfItems4B = $('.rotating-item-4B').length;
            var currentItem4B = 0;
            $('.rotating-item-4B').eq(currentItem4B).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4B').eq(currentItem4B).fadeOut(fadeTime);
                if(currentItem4B == numberOfItems4B -1){  currentItem4B = 0;   }else{   currentItem4B++;   }
                $('.rotating-item-4B').eq(currentItem4B).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 4 POSITION C  -----------//

            var numberOfItems4C = $('.rotating-item-4C').length;
            var currentItem4C = 0;
            $('.rotating-item-4C').eq(currentItem4C).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4C').eq(currentItem4C).fadeOut(fadeTime);
                if(currentItem4C == numberOfItems4C -1){  currentItem4C = 0;   }else{   currentItem4C++;   }
                $('.rotating-item-4C').eq(currentItem4C).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 4 POSITION D  -----------//

            var numberOfItems4D = $('.rotating-item-4D').length;
            var currentItem4D = 0;
            $('.rotating-item-4D').eq(currentItem4D).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4D').eq(currentItem4D).fadeOut(fadeTime);
                if(currentItem4D == numberOfItems4D -1){  currentItem4D = 0;   }else{   currentItem4D++;   }
                $('.rotating-item-4D').eq(currentItem4D).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 4 POSITION E  -----------//

            var numberOfItems4E = $('.rotating-item-4E').length;
            var currentItem4E = 0;
            $('.rotating-item-4E').eq(currentItem4E).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4E').eq(currentItem4E).fadeOut(fadeTime);
                if(currentItem4E == numberOfItems4E -1){  currentItem4E = 0;   }else{   currentItem4E++;   }
                $('.rotating-item-4E').eq(currentItem4E).fadeIn(fadeTime);
            }, itemInterval);

			 //----------  ROW 4 POSITION F  -----------//

            var numberOfItems4F = $('.rotating-item-4F').length;
            var currentItem4F = 0;
            $('.rotating-item-4F').eq(currentItem4F).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4F').eq(currentItem4F).fadeOut(fadeTime);
                if(currentItem4F == numberOfItems4F -1){  currentItem4F = 0;   }else{   currentItem4F++;   }
                $('.rotating-item-4F').eq(currentItem4F).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 4 POSITION G  -----------//

            var numberOfItems4G = $('.rotating-item-4G').length;
            var currentItem4G = 0;
            $('.rotating-item-4G').eq(currentItem4G).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4G').eq(currentItem4G).fadeOut(fadeTime);
                if(currentItem4G == numberOfItems4G -1){  currentItem4G = 0;   }else{   currentItem4G++;   }
                $('.rotating-item-4G').eq(currentItem4G).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 4 POSITION G  -----------//

            var numberOfItems4H = $('.rotating-item-4H').length;
            var currentItem4H = 0;
            $('.rotating-item-4H').eq(currentItem4H).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-4H').eq(currentItem4H).fadeOut(fadeTime);
                if(currentItem4H == numberOfItems4H -1){  currentItem4H = 0;   }else{   currentItem4H++;   }
                $('.rotating-item-4H').eq(currentItem4H).fadeIn(fadeTime);
            }, itemInterval);



 		  //-------------------------------------------------------------------------//
          //=============------------------ ROW 5 ----------------------=============//
          //-------------------------------------------------------------------------//
        
           //----------  ROW 5 POSITION A  -----------//

            var numberOfItems5A = $('.rotating-item-5A').length;
            var currentItem5A = 0;
            $('.rotating-item-5A').eq(currentItem5A).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5A').eq(currentItem5A).fadeOut(fadeTime);
                if(currentItem5A == numberOfItems5A -1){  currentItem5A = 0;   }else{   currentItem5A++;   }
                $('.rotating-item-5A').eq(currentItem5A).fadeIn(fadeTime);
            }, itemInterval);

			//----------  ROW 5 POSITION B  -----------//

            var numberOfItems5B = $('.rotating-item-5B').length;
            var currentItem5B = 0;
            $('.rotating-item-5B').eq(currentItem5B).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5B').eq(currentItem5B).fadeOut(fadeTime);
                if(currentItem5B == numberOfItems5B -1){  currentItem5B = 0;   }else{   currentItem5B++;   }
                $('.rotating-item-5B').eq(currentItem5B).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 5 POSITION C  -----------//

            var numberOfItems5C = $('.rotating-item-5C').length;
            var currentItem5C = 0;
            $('.rotating-item-5C').eq(currentItem5C).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5C').eq(currentItem5C).fadeOut(fadeTime);
                if(currentItem5C == numberOfItems5C -1){  currentItem5C = 0;   }else{   currentItem5C++;   }
                $('.rotating-item-5C').eq(currentItem5C).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 5 POSITION D  -----------//

            var numberOfItems5D = $('.rotating-item-5D').length;
            var currentItem5D = 0;
            $('.rotating-item-5D').eq(currentItem5D).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5D').eq(currentItem5D).fadeOut(fadeTime);
                if(currentItem5D == numberOfItems5D -1){  currentItem5D = 0;   }else{   currentItem5D++;   }
                $('.rotating-item-5D').eq(currentItem5D).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 5 POSITION E  -----------//

            var numberOfItems5E = $('.rotating-item-5E').length;
            var currentItem5E = 0;
            $('.rotating-item-5E').eq(currentItem5E).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5E').eq(currentItem5E).fadeOut(fadeTime);
                if(currentItem5E == numberOfItems5E -1){  currentItem5E = 0;   }else{   currentItem5E++;   }
                $('.rotating-item-5E').eq(currentItem5E).fadeIn(fadeTime);
            }, itemInterval);

			 //----------  ROW 5 POSITION F  -----------//

            var numberOfItems5F = $('.rotating-item-5F').length;
            var currentItem5F = 0;
            $('.rotating-item-5F').eq(currentItem5F).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5F').eq(currentItem5F).fadeOut(fadeTime);
                if(currentItem5F == numberOfItems5F -1){  currentItem5F = 0;   }else{   currentItem5F++;   }
                $('.rotating-item-5F').eq(currentItem5F).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 5 POSITION G  -----------//

            var numberOfItems5G = $('.rotating-item-5G').length;
            var currentItem5G = 0;
            $('.rotating-item-5G').eq(currentItem5G).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5G').eq(currentItem5G).fadeOut(fadeTime);
                if(currentItem5G == numberOfItems5G -1){  currentItem5G = 0;   }else{   currentItem5G++;   }
                $('.rotating-item-5G').eq(currentItem5G).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 5 POSITION G  -----------//

            var numberOfItems5H = $('.rotating-item-5H').length;
            var currentItem5H = 0;
            $('.rotating-item-5H').eq(currentItem5H).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-5H').eq(currentItem5H).fadeOut(fadeTime);
                if(currentItem5H == numberOfItems5H -1){  currentItem5H = 0;   }else{   currentItem5H++;   }
                $('.rotating-item-5H').eq(currentItem5H).fadeIn(fadeTime);
            }, itemInterval);

			
			 //-------------------------------------------------------------------------//
          //=============------------------ ROW 6 ----------------------=============//
          //-------------------------------------------------------------------------//
        
           //----------  ROW 6 POSITION A  -----------//

            var numberOfItems6A = $('.rotating-item-6A').length;
            var currentItem6A = 0;
            $('.rotating-item-6A').eq(currentItem6A).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6A').eq(currentItem6A).fadeOut(fadeTime);
                if(currentItem6A == numberOfItems6A -1){  currentItem6A = 0;   }else{   currentItem6A++;   }
                $('.rotating-item-6A').eq(currentItem6A).fadeIn(fadeTime);
            }, itemInterval);

			//----------  ROW 6 POSITION B  -----------//

            var numberOfItems6B = $('.rotating-item-6B').length;
            var currentItem6B = 0;
            $('.rotating-item-6B').eq(currentItem6B).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6B').eq(currentItem6B).fadeOut(fadeTime);
                if(currentItem6B == numberOfItems6B -1){  currentItem6B = 0;   }else{   currentItem6B++;   }
                $('.rotating-item-6B').eq(currentItem6B).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 6 POSITION C  -----------//

            var numberOfItems6C = $('.rotating-item-6C').length;
            var currentItem6C = 0;
            $('.rotating-item-6C').eq(currentItem6C).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6C').eq(currentItem6C).fadeOut(fadeTime);
                if(currentItem6C == numberOfItems6C -1){  currentItem6C = 0;   }else{   currentItem6C++;   }
                $('.rotating-item-6C').eq(currentItem6C).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 6 POSITION D  -----------//

            var numberOfItems6D = $('.rotating-item-6D').length;
            var currentItem6D = 0;
            $('.rotating-item-6D').eq(currentItem6D).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6D').eq(currentItem6D).fadeOut(fadeTime);
                if(currentItem6D == numberOfItems6D -1){  currentItem6D = 0;   }else{   currentItem6D++;   }
                $('.rotating-item-6D').eq(currentItem6D).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 6 POSITION E  -----------//

            var numberOfItems6E = $('.rotating-item-6E').length;
            var currentItem6E = 0;
            $('.rotating-item-6E').eq(currentItem6E).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6E').eq(currentItem6E).fadeOut(fadeTime);
                if(currentItem6E == numberOfItems6E -1){  currentItem6E = 0;   }else{   currentItem6E++;   }
                $('.rotating-item-6E').eq(currentItem6E).fadeIn(fadeTime);
            }, itemInterval);

			 //----------  ROW 6 POSITION F  -----------//

            var numberOfItems6F = $('.rotating-item-6F').length;
            var currentItem6F = 0;
            $('.rotating-item-6F').eq(currentItem6F).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6F').eq(currentItem6F).fadeOut(fadeTime);
                if(currentItem6F == numberOfItems6F -1){  currentItem6F = 0;   }else{   currentItem6F++;   }
                $('.rotating-item-6F').eq(currentItem6F).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 6 POSITION G  -----------//

            var numberOfItems6G = $('.rotating-item-6G').length;
            var currentItem6G = 0;
            $('.rotating-item-6G').eq(currentItem6G).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6G').eq(currentItem6G).fadeOut(fadeTime);
                if(currentItem6G == numberOfItems6G -1){  currentItem6G = 0;   }else{   currentItem6G++;   }
                $('.rotating-item-6G').eq(currentItem6G).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 6 POSITION G  -----------//

            var numberOfItems6H = $('.rotating-item-6H').length;
            var currentItem6H = 0;
            $('.rotating-item-6H').eq(currentItem6H).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-6H').eq(currentItem6H).fadeOut(fadeTime);
                if(currentItem6H == numberOfItems6H -1){  currentItem6H = 0;   }else{   currentItem6H++;   }
                $('.rotating-item-6H').eq(currentItem6H).fadeIn(fadeTime);
            }, itemInterval);


			 //-------------------------------------------------------------------------//
          //=============------------------ ROW 7 ----------------------=============//
          //-------------------------------------------------------------------------//
        
           //----------  ROW 7 POSITION A  -----------//

            var numberOfItems7A = $('.rotating-item-7A').length;
            var currentItem7A = 0;
            $('.rotating-item-7A').eq(currentItem7A).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7A').eq(currentItem7A).fadeOut(fadeTime);
                if(currentItem7A == numberOfItems7A -1){  currentItem7A = 0;   }else{   currentItem7A++;   }
                $('.rotating-item-7A').eq(currentItem7A).fadeIn(fadeTime);
            }, itemInterval);

			//----------  ROW 7 POSITION B  -----------//

            var numberOfItems7B = $('.rotating-item-7B').length;
            var currentItem7B = 0;
            $('.rotating-item-7B').eq(currentItem7B).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7B').eq(currentItem7B).fadeOut(fadeTime);
                if(currentItem7B == numberOfItems7B -1){  currentItem7B = 0;   }else{   currentItem7B++;   }
                $('.rotating-item-7B').eq(currentItem7B).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 7 POSITION C  -----------//

            var numberOfItems7C = $('.rotating-item-7C').length;
            var currentItem7C = 0;
            $('.rotating-item-7C').eq(currentItem7C).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7C').eq(currentItem7C).fadeOut(fadeTime);
                if(currentItem7C == numberOfItems7C -1){  currentItem7C = 0;   }else{   currentItem7C++;   }
                $('.rotating-item-7C').eq(currentItem7C).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 7 POSITION D  -----------//

            var numberOfItems7D = $('.rotating-item-7D').length;
            var currentItem7D = 0;
            $('.rotating-item-7D').eq(currentItem7D).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7D').eq(currentItem7D).fadeOut(fadeTime);
                if(currentItem7D == numberOfItems7D -1){  currentItem7D = 0;   }else{   currentItem7D++;   }
                $('.rotating-item-7D').eq(currentItem7D).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 7 POSITION E  -----------//

            var numberOfItems7E = $('.rotating-item-7E').length;
            var currentItem7E = 0;
            $('.rotating-item-7E').eq(currentItem7E).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7E').eq(currentItem7E).fadeOut(fadeTime);
                if(currentItem7E == numberOfItems7E -1){  currentItem7E = 0;   }else{   currentItem7E++;   }
                $('.rotating-item-7E').eq(currentItem7E).fadeIn(fadeTime);
            }, itemInterval);

			 //----------  ROW 7 POSITION F  -----------//

            var numberOfItems7F = $('.rotating-item-7F').length;
            var currentItem7F = 0;
            $('.rotating-item-7F').eq(currentItem7F).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7F').eq(currentItem7F).fadeOut(fadeTime);
                if(currentItem7F == numberOfItems7F -1){  currentItem7F = 0;   }else{   currentItem7F++;   }
                $('.rotating-item-7F').eq(currentItem7F).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 7 POSITION G  -----------//

            var numberOfItems7G = $('.rotating-item-7G').length;
            var currentItem7G = 0;
            $('.rotating-item-7G').eq(currentItem7G).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7G').eq(currentItem7G).fadeOut(fadeTime);
                if(currentItem7G == numberOfItems7G -1){  currentItem7G = 0;   }else{   currentItem7G++;   }
                $('.rotating-item-7G').eq(currentItem7G).fadeIn(fadeTime);
            }, itemInterval);
            
             //----------  ROW 7 POSITION H  -----------//

            var numberOfItems7H = $('.rotating-item-7H').length;
            var currentItem7H = 0;
            $('.rotating-item-7H').eq(currentItem7H).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7H').eq(currentItem7H).fadeOut(fadeTime);
                if(currentItem7H == numberOfItems7H -1){  currentItem7H = 0;   }else{   currentItem7H++;   }
                $('.rotating-item-7H').eq(currentItem7H).fadeIn(fadeTime);
            }, itemInterval);
            
            //----------  ROW 7 POSITION I  -----------//

            var numberOfItems7I = $('.rotating-item-7I').length;
            var currentItem7I = 0;
            $('.rotating-item-7I').eq(currentItem7I).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function(){
                $('.rotating-item-7I').eq(currentItem7I).fadeOut(fadeTime);
                if(currentItem7I == numberOfItems7I -1){  currentItem7I = 0;   }else{   currentItem7I++;   }
                $('.rotating-item-7I').eq(currentItem7I).fadeIn(fadeTime);
            }, itemInterval);

        }
    };
 
    InfiniteRotator.init();
 
});



