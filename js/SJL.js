"use strict";
/**

*/
/**
* @file sjl is a cross-platform library for javascript and use bootstrap css to create components.
* It has no dependency not even jQuery just a single js and css file.
* sjl are released under the terms of the license specified in the project's repository or if not specified, under 
* the MIT license.
* The MIT License is simple and easy to understand and it places almost no restrictions on what you can do with
* sjl.
* You are free to use any sjl in any other project (even commercial projects) as long as the copyright header is left intact.
* @author Sourena Maroofi (maroofi@gmail.com)
* @version 1.0
*/



/**
*Description of my main namespace!
*@namespace
*/
var SJL=SJL||{};

SJL.debug_mode = false;

/**
*This is a deep(recursive) copy method.it extends 'obj' object with members from 'config'.
* If 'config' is null, a deep clone of 'obj' is returned. Notice that if a property exists in both obj and config, then
* the config property overwrite the obj one.
*@example
* var obj = {name:'sourena',lastname:'maroofi'};
* var config = {age:30,student:true}
* var result =SJL.add_config(obj,config);
* //Now result is {name:'sourena',lastname:'maroofi',age:30,student:true}
*@param {*} config - This is the config we want to add it to obj. It could be any type of data or function.
*@param {Object|Null} obj - This is the main object we want to extend it. It could be an Object or null.
*@return {Object} obj - returns the extended object.
*@memberof SJL
*@method add_config
*/
SJL.add_config=function extend(obj,config){
    if (config == null || typeof config != "object" ) return config;
    if (config.constructor != Object && config.constructor != Array) return config;
    if (config.constructor == Date || config.constructor == RegExp || config.constructor == Function ||
        config.constructor == String || config.constructor == Number || config.constructor == Boolean)
        return new config.constructor(config);
    obj = obj || new config.constructor();
    for (var name in config)
    {
        //obj[name] = (typeof obj[name] == "undefined" || obj[name]==="") ? SJL.add_config(null,config[name]) : obj[name];
        obj[name] =  SJL.add_config(null,config[name]);
    }
    return obj;
}

/**
* <p>Detect the browser type.</p>
* <p>From : Bowser - a browser detector (<a href="https://github.com/ded/bowser">https://github.com/ded/bowser</a>).
* MIT License | (c) Dustin Diaz 2015</p>
*@return {Object}  - The return value is an object which includes the name of the browser and the version of the browser.
*@example
* var result = SJL.get_browser_type();
* //result = {name:'Firefox',version:49.0}
* console.log(result.name}  //Firefox
* console.log(result.version) //49.0
*@memberof SJL
*@method get_browser_type
*/
SJL.get_browser_type=function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/CrOS/.test(t),a=n(/edge\/(\d+(\.\d+)?)/i),f=n(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(t),c=!l&&/[^-]mobi/i.test(t),h;/opera|opr/i.test(t)?h={name:"Opera",opera:e,version:f||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?h={name:"Yandex Browser",yandexbrowser:e,version:f||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(h={name:"Windows Phone",windowsphone:e},a?(h.msedge=e,h.version=a):(h.msie=e,h.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?h={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?h={name:"Chrome",chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?h={name:"Microsoft Edge",msedge:e,version:a}:/chrome|crios|crmo/i.test(t)?h={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(h={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},f&&(h.version=f)):/sailfish/i.test(t)?h={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?h={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(h={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(h.firefoxos=e)):/silk/i.test(t)?h={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?h={name:"Android",version:f}:/phantom/i.test(t)?h={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?h={name:"BlackBerry",blackberry:e,version:f||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(h={name:"WebOS",webos:e,version:f||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(h.touchpad=e)):/bada/i.test(t)?h={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?h={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/safari/i.test(t)?h={name:"Safari",safari:e,version:f}:h={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!h.msedge&&/(apple)?webkit/i.test(t)?(h.name=h.name||"Webkit",h.webkit=e,!h.version&&f&&(h.version=f)):!h.opera&&/gecko\//i.test(t)&&(h.name=h.name||"Gecko",h.gecko=e,h.version=h.version||n(/gecko\/(\d+(\.\d+)?)/i)),!h.msedge&&(o||h.silk)?h.android=e:i&&(h[i]=e,h.ios=e);var p="";h.windowsphone?p=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(p=n(/os (\d+([_\s]\d+)*) like mac os x/i),p=p.replace(/[_\s]/g,".")):o?p=n(/android[ \/-](\d+(\.\d+)*)/i):h.webos?p=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):h.blackberry?p=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):h.bada?p=n(/bada\/(\d+(\.\d+)*)/i):h.tizen&&(p=n(/tizen[\/\s](\d+(\.\d+)*)/i)),p&&(h.osversion=p);var d=p.split(".")[0];if(l||i=="ipad"||o&&(d==3||d==4&&!c)||h.silk)h.tablet=e;else if(c||i=="iphone"||i=="ipod"||o||h.blackberry||h.webos||h.bada)h.mobile=e;return h.msedge||h.msie&&h.version>=10||h.yandexbrowser&&h.version>=15||h.chrome&&h.version>=20||h.firefox&&h.version>=20||h.safari&&h.version>=6||h.opera&&h.version>=10||h.ios&&h.osversion&&h.osversion.split(".")[0]>=6||h.blackberry&&h.version>=10.1?h.a=e:h.msie&&h.version<10||h.chrome&&h.version<20||h.firefox&&h.version<20||h.safari&&h.version<6||h.opera&&h.version<10||h.ios&&h.osversion&&h.osversion.split(".")[0]<6?h.c=e:h.x=e,h}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n}
   
var _browser_type=SJL.get_browser_type();
   
/**
* A cross-browser trim function. The trim() method removes whitespace and other predefined characters from both sides of a string.
* all of the following characters are removed:
* <ul>
*   <li>"\0" - NULL</li>
*   <li>"\t" - tab</li>
*   <li>"\n" - new line</li>
*   <li>"\x0B" - vertical tab</li>
*   <li>"\r" - carriage return</li>
*   <li>" " - ordinary white space</li>
*</ul>
*@param {String} - The input strimg we want to trim it.
*@return {String}  - Returns the modified string.
*@example
* var name = " sourena \t   \n"
* console.log(SJL.trim(name)) // 'sourena' 
*@memberof SJL
*@method trim
*/ 
SJL.trim=function(){
    var temp_func=function(str){
        if(typeof str==='undefined'){str=typeof this==="string"?this:"";}
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
    if (!String.prototype.trim){String.prototype.trim=temp_func;}
    return temp_func;
}();
/**
* This is exactly like trim method but only removes the predefined characters from the left side of the strings.
* The predefined characters are just like trim method above.
*@param {String} - The input strimg we want to trim it.
*@return {String}  - The modified string.
*@example
* var name = '   sourena   ';
* console.log(SJL.trim_left(name)); //The printed value is : 'sourena   ' 
*@memberof SJL
*@method trim_left
*/
SJL.trim_left=function(){
    var temp_func=function(str){
        if(typeof str==='undefined'){str=typeof this==="string"?this:"";}
        return str.replace(/^[\s\uFEFF\xA0]+/g, '');
    };
    if (!String.prototype.trim_left){String.prototype.trim_left=temp_func;}
    return temp_func;
}();
/**
* This is exactly like trim method but only removes the predefined characters from the right side of the strings.
* The predefined characters are just like trim method above.
*@param {String} - The input strimg we want to trim it.
*@return {String}  - The modified string.
*@example
* var name = '   sourena   ';
* console.log(SJL.trim_right(name)); //The printed value is : '   sourena' 
*@memberof SJL
*@method trim_right
*/
SJL.trim_right=function(){
    var temp_func=function(str){
        if(typeof str==='undefined'){str=typeof this==="string"?this:"";}
        return str.replace(/[\s\uFEFF\xA0]+$/g, '');
    };
    if (!String.prototype.trim_right){String.prototype.trim_right=temp_func;}
    return temp_func;
}();

/**
* This method check if the input email address is valid or not. If the address is valid it returns true else returns false.
* Based on the parameters you passed to the function you can prompt a custom message.
*@param {String} value  - This is the email address we want to check.
*@param {Boolean} prompt - Boolean value specifies the prompt action. If prompt is true then the method alert the 'msg' message
* to the user and if no msg specified, it alert 'Email Entered is not Valid' message. If the prompt is false the method only 
* returns true or false and no alert message to user.
*@param {String} msg - Custom message string you want to prompt to user.
*@return {Boolean}  - if the email address is valid, the return value is true else false.
*@example
* console.log(SJL.valid_field_email('john@smith.com',false,''); //true
*console.log(SJL.valid_field_email('invalidemail@invalid',false,''); //false
*console.log(SJL.valid_field_email('invalidemail@invalid',true,'Wrong email address'); //false and alert("Wrong email address")
*@memberof SJL
*@method valid_field_email
*/
SJL.valid_field_email=function(value,prompt,msg){
    prompt = prompt || false;
    msg= msg || "";
    if (value.search(/^[a-zA-Z]{1}[a-zA-Z0-9_]+@[a-zA-Z0-9+]+(\.([a-zA-Z0-9]+)){1,}$/)==-1){
        if (prompt==true){
            if (msg){
                alert(msg);
                return false;
            }else{
                alert("Email Entered is not Valid");
                return false;
            }					
        }else{
            return false;
        }					
    }else{
        return true;				
    }
    return false;
}

/**
* This is a simple log function for errors and warnings. it depends on SJL.debug_mode (which it's default value is false).
* If you want to use this function you have to set SJL.debug_mode to true in sjl.js file.
*
*@param {String} caller_name  - Function name or part of code name that call this method.
*@param {String} msg - The message you want to print it in console(like firebug or any debugger). This parameter is optional.
If you dont specify it, the method use a predefined message('Error occured (NO log message)').
*@return {Number}  - returns 0 on success and -1 on failure.
*@example
* SJL.logger('myfunction','Wrong input parameters'); //'myfucntion : wrong input parameters'
* SJL.logger('myfunction'); //'myfucntion : Error occured (NO log message)'
*@memberof SJL
*@method logger
*/   
SJL.logger=function (caller_name,msg){
    if(!console || !console.log){return;}
    if (arguments.length<1){
        console.log('Wrong number of Arguments');
        return -1;
    }
    if (caller_name && msg!==undefined){
        console.log(caller_name + ' : ' + msg);
        return 0;
    }else if (caller_name && msg===undefined){
        console.log(caller_name + ' : ' + 'Error occured (NO log message)');		
        return 0;
    }
    return -1;
}
/**
* Checks if the browser is safari. 
*@return {Boolean}  - true if the browser is safari and false otherwise.
*@memberof SJL
*@method is_safari
*/
SJL.is_safari=function (){
   return _browser_type.name=='Safari';
};
/**
* Checks if the browser is tizen. 
*@return {Boolean}  - true if the browser is tizen and false otherwise.
*@memberof SJL
*@method is_tizen
*/
SJL.is_tizen=function(){
    return _browser_type.name=='Tizen';
};
/**
* Checks if the browser is bada. 
*@return {Boolean}  - true if the browser is bada and false otherwise.
*@memberof SJL
*@method is_bada
*/
SJL.is_bada=function(){
    return _browser_type.name=='Bada';
};
/**
* Checks if the browser is seamonkey. 
*@return {Boolean}  - true if the browser is seamonkey and false otherwise.
*@memberof SJL
*@method is_seamonkey
*/
SJL.is_seamonkey=function(){
    return _browser_type.name=='SeaMonkey';
};
/**
* Checks if the browser is opera. 
*@return {Boolean}  - true if the browser is opera and false otherwise.
*@memberof SJL
*@method is_opera
*/
SJL.is_opera=function(){
    return _browser_type.name=='Opera';	
};
/**
* Checks if the browser is Chrome. 
*@return {Boolean}  - true if the browser is Chrome and false otherwise.
*@memberof SJL
*@method is_chrome
*/
SJL.is_chrome=function (){
    return _browser_type.name=='Chrome';
};
/**
* Checks if the browser is firefox. 
*@return {Boolean}  - true if the browser is firefox and false otherwise.
*@memberof SJL
*@method is_firefox
*/
SJL.is_firefox=function (){
    return _browser_type.name=='Firefox';
};

/**
* Checks if the browser is internet explorer version 8. 
*@return {Boolean}  - true if the browser is internet explorer version 8 and false otherwise.
*@memberof SJL
*@method is_ie8
*/
SJL.is_ie8=function (){
    return (_browser_type.name=='Internet Explorer' && _browser_type.version>=8 && _browser_type.version<9);
};
/**
* Checks if the browser is android. 
*@return {Boolean}  - true if the browser is android and false otherwise.
*@memberof SJL
*@method is_android
*/
SJL.is_android=function(){
    return _browser_type.name=='Android';
};
/**
* Checks if the browser is BlackBerry. 
*@return {Boolean}  - true if the browser is BlackBerry and false otherwise.
*@memberof SJL
*@method is_blackberry
*/
SJL.is_blackberry=function(){
    return _browser_type.name=='BlackBerry';
};
/**
* Checks if the browser is Internet Explorer version 9. 
*@return {Boolean}  - true if the browser is Internet Explorer version 9 and false otherwise.
*@memberof SJL
*@method is_ie9
*/
SJL.is_ie9=function(){
    return (_browser_type.name=='Internet Explorer' && _browser_type.version<10 && _browser_type.version>=9);
};
/**
* This method acts like document.createElement but when you create new element using this method, you can use most of 
* the SJL method with it (we wrap all sjl function on the element). Also you can add attributes to the element while
* creating it. 
*@param {String} elem_name  - This is the element name such as 'div','textarea', 'span', 'p' ... 
*@param {Object}  config - The config object you want to add to the element.See example for more information.
*@return {DOM}  - returns a DOM element. 
*@example 
* var my_div = SJL.create_element('div',{id:'main_div'}); //create new div tag
* div.set_style('background-color','red'); //set the background color of div to red
* div.set_style('border-size','1px'); //set the border size of div to 1px
* //using chaining to set the font-family and font-size and font-color of div
* div.set_style('font-family','tahoma').set_style('font-size','1.5em').set_style('font-color','red');
* SJL.dom('body').append(my_div); //append the created div to body of our page
*@memberof SJL
*@method create_element 
*/
SJL.create_element=function(elem_name,config){
    config = config || {};
    if(typeof elem_name !=='string'){
        throw new Error("create_element : Element name must be string...");
        return -1;
    }
    try{
        var temp=document.createElement(elem_name);
        SJL.add_config(temp,config);
    }catch(e){/*some shitty error in ie*/}  
        return SJL._wrap_element.apply(temp,null);
};
    
/**
* Add a CSS class css_name to an element or an array of elements selected by SJL.dom method.
*@param {DOM|Array-like_Object} element  - element(s) we want to add CSS class to.
*@param {String}  css_name - CSS class name.
*@return {DOM}  - returns an array-like object of element(s) created by SJL.dom for chaining.
*@example //example 1
* //get all the divs which have active class and add them another_class CSS.
* SJL.dom('div.active').add_css_class('another_class'); 
*@example //example 2
* var div = SJL.create_element('div'); //create new div element.
* div.add_css_class('active'); //add active CSS class to it.
*@example //example 3
* var mydiv = document.createElement('div'); //create new div element.
* SJL.add_css_class(mydiv,'active'); //add active class to it.
*@example //example 4
* var mydiv.document.getElementById('mydiv'); //get the div tag with id equals to mydiv.
* SJL.add_css_class(mydiv,'active'); //add active CSS class to it.
*@memberof SJL
*@method add_css_class 
*/
SJL.add_css_class=function(element,css_name){
    if(arguments.length==2){
        if(SJL.is_dom(element)){
            element = SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{
            throw new Error("add_css_class : wrong input arguments");return;
        }
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            css_name = arguments[0];
            if(SJL.is_dom(this)){
                element=SJL._create_array_like(this);
            }else if(SJL.is_array(this)){
                element= this;
            }else{
                throw new Error("add_css_class : wrong input arguments");return;
            }
        }else{
            throw new Error("add_css_class : wrong input arguments");return;
        }
    }else{
        throw new Error("add_css_class : wrong input arguments");return;
    }
    if (typeof css_name!=='string'){
        if(SJL.debug_mode){SJL.logger('add_css_class','should specify CSS class name');}
        return element;
    }
    for(var i=0;i<element.length;++i){
        element[i].className=SJL.trim(element[i].className) + ' ' + SJL.trim(css_name.toString());
    }
    return element;
};
/**
* Creates a new CSS class and add it to the page.
*@param {String} css_name  - Name of the CSS class.
*@param {String} config  - This is a semicolon seperated CSS properties.
*@return {String|Number}  - css_name on success and -1 on failure.
*@example 
* //create a new CSS class named 'active'.
* var css_name = SJL.create_css_class('active',"color:red;float:left;font-family:tahoma;");
*@memberof SJL
*@method create_css_class 
*/
SJL.create_css_class=function(css_name,config){
    if (typeof css_name==='undefined'){
        if(SJL.debug_mode){SJL.logger('create_css_class','no name for CSS class specified');}
        return -1;
    }
    config=config||"";
    var style=null;
    if(document.styleSheets.length==0){
        style=SJL.create_element('style',{});
        document.head.appendChild(style);
    }  
    if(_browser_type.name.toLowerCase()=='internet explorer'){
        document.styleSheets[0].addRule(css_name,config,0);
    }else{
        document.styleSheets[0].insertRule('.'+css_name+'{'+config+'}',0);
    }
    return css_name;
};
/**
* Remove a CSS class css_name from an element or an array of elements selected by SJL.dom method.
*@param {DOM|Array-like_Object} element  - element(s) we want to remove CSS class from.
*@param {String}  css_name - CSS class name.
*@return {DOM}  - returns an array-like object of element(s) created by SJL.dom for chaining.
*@example //example 1
* //get all the divs which have active class and remove active class from all of them.
* SJL.dom('div.active').remove_css_class('active'); 
*@example //example 2
* var mydiv.document.getElementById('mydiv'); //get the div tag with id equals to mydiv.
* SJL.remove_css_class(mydiv,'active'); //remove active CSS class from it.
*@memberof SJL
*@method remove_css_class 
*/
SJL.remove_css_class=function(element,css_name){
    if(arguments.length==2){
        if(SJL.is_dom(element)){
        element = SJL._create_array_like(element);
    }else if(SJL.is_array(element)){/*do nothing*/}else{
        throw new Error("add_css_class : wrong input arguments");return;
    }
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
        css_name = arguments[0];
        if(SJL.is_dom(this)){
            element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){
            element= this;
        }else{
            throw new Error("add_css_class : wrong input arguments");return;
        }
    }else{
        throw new Error("add_css_class : wrong input arguments");return;
    }
    }else{
        throw new Error("add_css_class : wrong input arguments");return;
    }
    for(var i=0;i<element.length;i++){
        var tempnam=element[i].className.split(' ');
        for(var j=0;j<tempnam.length;j++){
            if(SJL.trim(tempnam[j])==css_name){
                tempnam[j]='';
            }
        }
        element[i].className=tempnam.join(' ');
    }
    return element;
};
/**
* Add or remove one class from each element in the set of matched elements, depending on either the class's 
* presence or the value of the state argument.
*@param {DOM|Array-like_object} element  - element(s) we want to remove CSS class from.
*@param {String} css_name  - CSS class name.
*@return {}  - returns an array-like object of element(s) created by SJL.dom for chaining.
*@example //example 1
* //assume that we have <div class="tumble">Some text.</div>
* SJL.dom( "div.tumble" ).toggle_css_class("tumble") //the result is <div class="">Some text.</div>
*@example //example 2
* //assume that we have <div class="tumble">Some text.</div>
* SJL.dom( "div.tumble" ).toggle_css_class("active") //the result is <div class="tumble active">Some text.</div>
*@example //example 3
* var mydiv = document.getElementById('div_id'); //get div with id 'div_id'
* SJL.toggle_css_class(mydiv,'active'); //add active class if not exists and remove if it exists.
*@memberof SJL
*@method toggle_css_class 
*/
SJL.toggle_css_class=function(element,css_name){
    if(arguments.length==2){
        if(SJL.is_dom(element)){
            element = SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{
            throw new Error("add_css_class : wrong input arguments");return;
        }
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            css_name = arguments[0];
            if(SJL.is_dom(this)){
                element=SJL._create_array_like(this);
            }else if(SJL.is_array(this)){
                element= this;
            }else{
                throw new Error("add_css_class : wrong input arguments");return;
            }
        }else{
            throw new Error("add_css_class : wrong input arguments");return;
        }
    }else{
        throw new Error("add_css_class : wrong input arguments");return;
    }
    css_name=SJL.trim(css_name);
    for(var i=0;i<element.length;++i){
        if(element[i].className.search(css_name)!=-1){
            SJL._create_array_like(element[i]).remove_css_class(css_name);
        }else{
            SJL._create_array_like(element[i]).add_css_class(css_name);
        }
    }
    return element;
};
/**
* This method generate an integer value that is uniquely since the first load of the page.
* You can use it as a counter or generate HTML tag id with combination of this method and a prefix or postfix string.
*@return {Number}  - returns an Integer number.
*@example
* var tag_array = [];
* for (var i=0;i<10;++i){
*     // we want to create 10 span tag with different IDs.
*     var tag = SJL.create_element('span',{id:'span-' + SJL.uid().toString()});
*     tag_array.push(tag);
* }
* // As the result, we have an array of 10 span tags.
*@memberof SJL
*@method uid 
*/
SJL.uid = (function(){
    var id=0;
    return function(){
        return id++ ;
    };
})(); 
SJL._wrap_element=function(){
    this.add_css_class=SJL.add_css_class;
    this.remove_css_class=SJL.remove_css_class;
    this.toggle_css_class=SJL.toggle_css_class;
    this.get_children=SJL.get_children;
    this.append=SJL.append;
    this.parent=SJL.parent;
    this.parent_if=SJL.parent_if;
    this.hide=SJL.hide;
    this.serialize=SJL.serialize;
    this.show=SJL.show;
    this.siblings=SJL.siblings;
    this.find=SJL.find;
    this.set_attr=SJL.set_attr;
    this.get_attr=SJL.get_attr;
    this.has_attr=SJL.has_attr;
    this.toggle_attr=SJL.toggle_attr;
    this.set_style=SJL.set_style;
    this.get_style=SJL.get_style;
    this.remove_style=SJL.remove_style;
    this.toggle_style=SJL.toggle_style;
    this.has_style=SJL.has_style;
    this.remove_attr=SJL.remove_attr;
    this.get_val=SJL.get_val;
    this.set_val=SJL.set_val;
    this.get_html=SJL.get_html;
    this.get_text=SJL.get_text;
    this.set_html=SJL.set_html;
    this.set_text=SJL.set_text;
    this.remove=SJL.remove;
    this.set_interval = SJL.set_interval;
    Array.prototype.every=SJL.every;
    if(SJL.is_array(this)){
        this.each=SJL.each;
        this.draggable=SJL.draggable;
    }
    /* dom events add here */
    if(SJL.is_array(this)){
        this.click=SJL.click;
        this.keypress=SJL.keypress;
        this.keydown = SJL.keydown;
        this.contextmenu = SJL.contextmenu;
        this.dbclick=SJL.dbclick;
        this.change=SJL.change;
        this.dragstart = SJL.dragstart;
        this.drop = SJL.drop;
        this.dragover = SJL.dragover;
    }
    return this;
};

SJL.prefix_id='SJL-';
/**
* 
* 
* 
*@param {}   - 
*@param {}   - 
*@return {}  - 
* 
* 
* 
* 
* 
* 
*@memberof SJL
*@method generate_id 
*/
SJL.generate_id=function(id){
    if(typeof id!=='undefined'){
        if(SJL.is_str(id)){
            return id;
        }else{
            if(SJL.debug_mode){SJL.logger(me._component,'id of container must be a string');}
            throw new Error("Error in creating id occured");
            return;
        }
    }else{
        return SJL.prefix_id+SJL.uid();
    }
};
/**
* Get the integer value of a variable.
*@param {Number|String} num  - The scalar value being converted to an integer 
*@return {Integer|0}  - The integer value of num on success, or 0 on failure. 
*@example 
* SJL.intVal(23);        //23
* SJL.intVal(23.34);     //23
* SJL.intVal('23.34');   //23
* SJL.intVal('23.');     //23
* SJL.intVal('23');      //23
* SJL.intVal('23.er');   //23
* SJL.intVal('23er');    //23
* SJL.intVal('e23er');   //0
* SJL.intVal('0.000er'); //0
*@memberof SJL
*@method intVal 
*/
SJL.intVal=function(num){
    try{
        var a=parseInt(num);
        if(isNaN(a) || !isFinite(a)){
            return 0;
        }else{return a;}
    }catch(e){return 0;}
    return 0;
};
/**
* Get the float value of a variable.
*@param {Number|String} num  - The scalar value being converted to an float 
*@return {Float|0}  - The float value of num on success, or 0 on failure. 
*@example 
* SJL.floatVal(23);        //23
* SJL.floatVal(23.34);     //23.34
* SJL.floatVal('23.34');   //23.34
* SJL.floatVal('23.');     //23
* SJL.floatVal('23');      //23
* SJL.floatVal('23.er');   //23
* SJL.floatVal('23er');    //23
* SJL.floatVal('e23er');   //0
* SJL.floatVal('0.000er'); //0
* SJL.floatVal('0.0030er'); //0.003
*@memberof SJL
*@method floatVal 
*/
SJL.floatVal=function(num){
    try{
        var a=parseFloat(num);
        if(isNaN(a) || !isFinite(a)){
            return 0;
        }else{return a;}
    }catch(e){return 0;}
    return 0;
};
/**
* Finds whether the type given variable is DOM of nodeType 1. 
*@param {*} obj  - The variable being evaluated.  
*@return {Boolean}  - Returns TRUE if obj is of type Node, FALSE otherwise. 
*@example 
* var q = document.createElement('div');  //q is a div node
* SJL.is_dom(q);  //returns true
* var t=new Array();   //q is an Array
* SJL.is_dom(q);  //returns false
*@memberof SJL
*@method is_dom
*/
SJL.is_dom=function(obj){
    if(typeof obj==='object'){
        if(typeof obj.nodeType!=='undefined'){
            if(typeof obj.nodeType==='number' && obj.nodeType==1){
                return true;
            }else{return false;}
        }else{return false;}
    }else{return false;}
};
/**
* Returns the body tag of the page.
*@return {dom}  - Body DOM.
*@example
* SJL.get_body(); //returns <body class="" style="background-color: red;"> tag.
*@memberof SJL
*@method get_body 
*/
SJL.get_body=function(){
    return document.body;
};
/**
* Finds whether the type given variable is Number. 
*@param {*} num  - The variable being evaluated.  
*@return {Boolean}  - Returns TRUE if num is of type Number, FALSE otherwise. 
*@example 
* var q = 2.21;  //q is a number.
* SJL.is_number(q);  //returns true
* var t=new Array();   //q is an Array
* SJL.is_number(q);  //returns false
*@memberof SJL
*@method is_number
*/
SJL.is_number=function(num){
    if(typeof num==='number'){
        try{
            var a=parseFloat(num);
            if(isNaN(a) || !isFinite(a)){
                return false;
            }else{return true;}
        }catch(e){return false;}
    }else if(typeof num==='string'){
        if(num.length<1){
            return false;
        }
        var dot=0;
        var dash=0; /*number of dash should be exactly one*/
        var dash_index=null;/*check if dash_index is not 0 then return false*/
        for(var i=0;i<num.length;++i){
            if((num[i]<'0' && num[i]!='.' && num[i]!='-')||num[i]>'9'){
                return false;
            }
            if(num[i]=='.'){dot++;}
            if(num[i]=='-'){dash++;dash_index=i;}
        }
        if(dot>1 || dash>1 || (dash_index!=null && dash_index>0)){return false;}
        return true;
    }
};
/**
* Finds whether the type given variable is string. 
*@param {*} str  - The variable being evaluated. 
*@return {Boolean}  - Returns TRUE if str is of type string, FALSE otherwise. 
*@example 
* var str = 'Sourena';
* SJL.is_str(str);  //true
* var t = {};
* SJL.is_str(t);  //false
*@memberof SJL
*@method is_str 
*/
SJL.is_str=function(str){
    if(typeof str==='string'){
        return true;
    }else{return false;}
};
/**
* Finds whether the type given variable is Array. 
*@param {*} arr  - The variable being evaluated.  
*@return {Boolean}  - Returns TRUE if arr is of type Array, FALSE otherwise. 
*@example 
* var q = [];  //q is an Array
* SJL.is_array(q);  //returns true
* var t={};   //q is an object
* SJL.is_array(q);  //returns false
*@memberof SJL
*@method is_array 
*/
SJL.is_array=function(arr){
    if(typeof arr==='object'){
        if(typeof arr.length!=='undefined'){
            return true;
        }else{return false;}
    }else{return false;}
};
/**
* Finds whether the type given variable is Object. 
*@param {*} obj  - The variable being evaluated.  
*@return {Boolean}  - Returns TRUE if obj is of type Object, FALSE otherwise. 
*@example 
* var q = {};  //q is an Object
* SJL.is_object(q);  //returns true
* var t=new Array();   //q is an Array
* SJL.is_object(q);  //returns false
*@memberof SJL
*@method is_object
*/
SJL.is_object=function(obj){
    if(typeof obj==='object'){
        return true;
    }else{return false;}
};
/**
* Finds whether the type given variable is SJL component. SJL components are SJL.textbox, SJL.textarea, SJL.slider,
* SJL.image, SJL.label, SJL.form, SJL.hbox .....all SJL.component must have _component property which is a string value
* specifies the name of the component.
*@param {Component} obj  - The variable being evaluated.
*@return {Boolean}  - Returns True if obj is of type SJL component, False otherwise. 
*/
SJL.is_component=function(obj){
    if (typeof obj==='object'){
        if(typeof obj._component==='string'){
            if(typeof obj.dom==='object'){
                return true;
            }else{return false;}
        }else{return false;}
    }else{return false;}
};
/**
* Finds whether the type given variable is function. 
*@param {*} func  - The variable being evaluated.  
*@return {Boolean}  - Returns TRUE if func is of type function, FALSE otherwise. 
*@example 
* var q = {};  //q is an Object
* SJL.is_object(q);  //returns false
* var t=function(){}   //q is a function
* SJL.is_object(q);  //returns true
*@memberof SJL
*@method is_function
*/
SJL.is_function=function(func){
    /*if func is a function or not*/
    if(typeof func==='function'){return true;}else{return false;}
};
/**
* Checks if a value exists in an array
*@param {*} needle  - The searched value. 
*@param {array} store  - The array. 
*@return {Boolean}  - Returns TRUE if needle is found in the array, FALSE otherwise. 
*@example 
* var os = ["Mac", "NT", "Irix", "Linux"];
* SJL.is_in_array('Mac',os); //returns true
* SJL.is_in_array('Unix',os); //returns false 
*@memberof SJL
*@method is_in_array
*/
SJL.is_in_array=function(needle,store){
    if(SJL.is_array(store)){
        var result=false;
        for(var i=0;i<store.length;++i){
            if (needle===store[i]){return true;}
        }
    }else{
        return (needle===store);
    }
    return false;
};


/**
* Find the highest value in a given array.
*@param {array} arr  - given array to find the max value in it.
*@return {Number|String}  - returns the max value of input array.
*@example 
* var a = ['sourena','maroofi']; //array of strings
* SJL.find_max(a);  //returns 'sourena'
* var b = [34,45,56,23,12,56,7];  //array of numbers
* SJL.find_max(b);   //returns 56
*@memberof SJL
*@method find_max 
*/
SJL.find_max=function(arr){
    if(!SJL.is_array(arr)){
        return;
    }
    if(arr.length==0){return null;}
    if(arr.length==1){return arr[0];}
    var max=arr[0];
    for(var i=1;i<arr.length;++i){
        if(arr[i]>max)
            max=arr[i];
    }
    return max;
};
/**
* Find the lowest value in a given array.
*@param {array} arr  - given array to find the min value in it.
*@return {Number|String}  - returns the min value of input array.
*@example 
* var a = ['sourena','maroofi']; //array of strings
* SJL.find_min(a);  //returns 'maroofi'
* var b = [34,45,56,23,12,56,7];  //array of numbers
* SJL.find_min(b);   //returns 7
*@memberof SJL
*@method find_min
*/
SJL.find_min=function(arr){
    if(!SJL.is_array(arr)){
        return;
    }
    if(arr.length==0){return null;}
    if(arr.length==1){return arr[0];}
    var min=arr[0];
    for(var i=1;i<arr.length;++i){
        if(arr[i]<min)
            min=arr[i];
    }
    return min;
};

SJL._getOffsetSum=function(elem) {
    var top=0, left=0;
    while(elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent     ;   
    }
    return {offsetTop: top, offsetLeft: left};
};
SJL._getOffsetRect=function(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { offsetTop: Math.round(top), offsetLeft: Math.round(left) };
};
/**
* Find the position of the element on the page.
*@param {DOM} elem - HTML DOM
*@return {Object}  - The return value is an object which has two properties:
* <ul>
* <li>offsetTop : The distance of the element from top of the page in pixel.</li>
* <li>offsetLeft : The distance of the element from left side of the page in pixel.</li>
* </ul>
*@example
* //we have a div like <div id='sourena' style='position:absolute;left:260px;top:150px;'>hi</div>
* var div = document.getElementById('sourena');
* SJL.find_pos(div);  //the return value is { offsetTop=150,  offsetLeft=260}
*@memberof SJL
*@method find_pos
*/
SJL.find_pos=function(elem) {
    if (elem.getBoundingClientRect) {
        return SJL._getOffsetRect(elem)
    } else {
        return SJL._getOffsetSum(elem)
    }
};
/**
* 
*@param {}   - 
*@param {}  - 
*@return {}  - 
*/
SJL.remove_event=function(element,event_name,event_func){
    if(arguments.length==3){
        if(!SJL.is_dom(element) && !SJL.is_window(element) && !SJL.is_document(element) ){throw new Error("remove_event : Wrong input element");return;}
        element=SJL._create_array_like(element);
    }else if(arguments.length == 2){
        if(SJL.is_dom(this) || SJL.is_array(this)){
            if(SJL.is_dom(this)){
                element=SJL._create_array_like(element);
            }else{
                element = this;
            }
        }else{
            throw new Error("remove_event : wrong input arguments");return;
        }
    }else{
        throw new Error('Wrong input arguments');return;
    }
    if(!SJL.is_function(event_func) || !SJL.is_str(event_name)){
        throw new Error("remove_event : Wrong input arguments");return;
    }
    if(!SJL.is_ie8()){
        for(var i=0;i<element.length;++i){
            element[i].removeEventListener(
                event_name,
                event_func
            );
        }
    }else{
        console.log('add_event:','not supported yet');
        throw new Error("add_event : not supported for ie yet!!!");return;
    }
};
/**
* 
*@param {}   - 
*@param {}  - 
*@return {}  - 
*/
SJL.add_event=function(element,event_name,event_func,parameters){
    if(arguments.length==4){
        parameters = parameters || [];
        if(!SJL.is_dom(element) && !SJL.is_window(element) && !SJL.is_document(element) ){throw new Error("add_event : Wrong input element");return;}
        element=SJL._create_array_like(element);
    }else if(arguments.length == 3){
        if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
            element = element=SJL._create_array_like(element);
            parameters = [];
        }else{
            if(SJL.is_dom(this) || SJL.is_array(this)){
                if(SJL.is_dom(this) || this===window || this === document){
                    element = element=SJL._create_array_like(this);
                }else{element = this;}
                event_name = arguments[0];
                event_func = arguments[1];
                parameters = arguments[2];
                if(!SJL.is_array(parameters)){parameters=[parameters];}
            }else{throw new Error("add_event : wrong input arguments");return;}
        }
    }else if(arguments.length==2){
        if(!SJL.is_dom(this) && !SJL.is_array(this) && typeof this != document && typeof this !=window){
            throw new Error("add_event : wrong input parameters");return;
        }else{
            if(SJL.is_dom(this) || this ===document || this ===window){
                element = element=SJL._create_array_like(this);
            }else{element = this;}
        }
        event_name = arguments[0];
        event_func = arguments[1];
        parameters = [];
    }else{
        throw new Error("add_event : wrong input arguments");return;
    }
    if(!SJL.is_dom(element) && typeof element!=typeof window && typeof element!=typeof document){if(SJL.debug_mode){SJL.logger('add_event','Element is not a DOM type');}return;}
    if(!SJL.is_array(element)){element = element=SJL._create_array_like(element);}
    /*for non-ie browsers*/
    var func_reference=null;
    if(!SJL.is_ie8()){
        for(var i=0;i<element.length;++i){
            element[i].addEventListener(
                event_name,
                func_reference = function(e){
                    var param = parameters.slice(0);
                    param.unshift(e);
                    event_func.apply(this,param);		
                },
                false);
        }
    
    }else {	/*for ie browsers*/
        /*do exactly the same shit here....*/
        console.log('add_event:','not supported yet');
        throw new Error("add_event : not supported for ie yet!!!");return;
    }
    return func_reference;
};
SJL.generate_margin=function(value){
    if(typeof value !=='undefined' && value!=null){
            if(SJL.is_number(value)|| SJL.is_str(value)){
                if(SJL.is_str(value)){
                    if(value.search(/px/ig)!=-1){
                        return value;
                    }else{
                        return value + 'px';
                    }
                }else{
                    return value.toString() + 'px';
                }
            }else{
                if(SJL.debug_mode){SJL.logger('generate_padding','value must be a number or string like 20px or 20');}
                throw new Error('value must be a number or string like 20px or 20');
                return;
            }
    }else{
        return 0;
    } 
};
SJL.generate_px_percent=function(value){
    if(typeof value !=='undefined' && value!=null){
        if(SJL.is_number(value)){
            return SJL.intVal(value.toString()) + 'px';
        }else if(SJL.is_str(value)){
            if(value.search(/px/ig)!=-1){
                return SJL.intVal(value) + 'px';
            }else if(value.search(/%/ig)!=-1){
                return SJL.intVal(value) + '%';
            }else{
                return '';
            }
        }else{
            throw new Error('value must be a number or string like 20px or 20');
            return '';
        }
    }else{
        return '';
    }
};
/**
* This is element selector acts like $ in jQuery. it selects elements based on the element name, id, class
* or css properties. 
* <p>For more information on selectors see <a href="http://www.w3schools.com/cssref/css_selectors.asp">CSS Selector Reference</a></p>
*@param {String|DOM} arg - The only input augument can be a string representing the id of the HTML element or an element
* name or it could be a DOM or css properties of some HTML elements. See the examples for more detail. 
*@return {Array-like_object} - you can add events or remove events or perform some actions on these selected
* elements. 
*@example //example 1
*  SJL.dom("*");  //selects all the elements of the page.
*@example //example 2
*  SJL.dom(this); //selects the current HTML element.
*@example //example 3
* SJL.dom("p.intro"); //elects all <p> elements with class="intro"
*@example //example 4
*SJL.dom("div > input"); //Selects all <input> elements where the parent is a <div> element
*@example //example 5
* SJL.dom("input:enabled");  //Selects every enabled <input> element
*@example //example 6
SJL.dom("a:visited"); //Selects all visited links
*@memberof SJL
*@method dom
*/
SJL.dom=function(arg){
    var result;
    var array_like_object;
    if(SJL.get_browser_type().name.toLowerCase()=='internet explorer'){
        array_like_object = function(){};
        array_like_object.prototype = Array.prototype;
        result = new array_like_object();
    }else{
        result = Object.create(Array.prototype);
    }
    if(SJL.is_dom(arg) || SJL.is_document(arg) || SJL.is_window(arg)){	/*try to act like $(this) in jQuery*/
        result.push(arg);
    }else if(SJL.is_str(arg)){
        var temp = document.querySelectorAll(arg);		
        for(var i=0;i<temp.length;++i){
            result.push(temp[i]);
        }
    }
    return SJL._wrap_element.apply(result,new Array());
};
/**
* The each() method executes a provided function once per array-like object returned by SJL.dom method.
*@param {callback} func - Function to apply for each element of the array-like object.
* @param {array} arglist - Optional parameter list to pass to func.
*@return {array-like_object}  - return the input array-like object for chaining. 
*@example //example 1
*   //Assume that we have this HTML code structure.
*   <div>
*       <p>This is first p element</p>
*       <p>This is second p element</p>
*    </div>
*    <div>
*        <p>This is third p element</p>
*    </div>
*   //The below code get all the p elements and set text-color property of each of them to red.
*   //Notice that the element itself is passed as this parameter.
*   SJL.dom('p').each(function(a){SJL.dom(this).set_style('text-color',a)},['red']);
*@memberof SJL
*@method each
*/
SJL.each=function(func,arglist){
    var me = this;
    for(var i=0;i<me.length;++i){
        func.apply(me[i],arglist);
    };
    return me;
};
/**
* The every method executes the provided callback function once for each element present in the array until it finds one where callback returns a falsy value (a value that becomes false when converted to a Boolean). If such an element is found, the every method immediately returns false. Otherwise, if callback returned a true value for all elements, every will return true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.
*@param {callback} callback - Function to test for each element, taking three arguments: 
* currentValue (required)
*    The current element being processed in the array.
*index (optional)
*    The index of the current element being processed in the array.
*array (optional)
*    The array every was called upon. 
*@param {array} thisArg - Optional. Value to use as this when executing callback.
*@return {Boolean} - true if the callback function returns a truthy value for every array element; otherwise, false.  
*@example //example 1
* [12, 5, 8, 130, 44].every(elem => elem >= 10); // false
*@example //example 2
* function isBigEnough(element, index, array) {
*   return element >= 10;
* }
* [12, 5, 8, 130, 44].every(isBigEnough);   // false
* [12, 54, 18, 130, 44].every(isBigEnough); // true
*@memberof SJL
*@method every
*/	
SJL.every=function(callbackfn,thisArg){
    var T, k;
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callbackfn !== 'function') {
      throw new TypeError('No function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        var testResult = callbackfn.call(T, kValue, k, O);
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
};
/**
*Checks if the given input parameter is the document object.
*The document object is the root node of the HTML document and the "owner" of all other nodes:
*(element nodes, text nodes, attribute nodes, and comment nodes).
*The document object provides properties and methods to access all node objects, from within JavaScript. 
*@param {Document_object} el - input parameter.
*@return {Boolean} - true if the given input parameter is document object, false otherwise.
*@memberof SJL
*@method is_document
*/	
SJL.is_document=function(el){
    if(typeof el===typeof document && el.nodeType && el.nodeType == 9){return true;}else{return false;}
};

/**
*Checks if the given input parameter is the window object.
*The window object represents an open window in a browser.
*@param {window_object} el - input parameter.
*@return {Boolean} - true if the given input parameter is window object, false otherwise.
*@memberof SJL
*@method is_window
*/	
SJL.is_window=function(el){
    if(typeof el === typeof window && el.document ){return true;}else{return false;}
};

SJL.append=function(element,etoappend){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("append : Wrong input arguments");return;}
    }else if(arguments.length==1){
        etoappend=element;
        if(SJL.is_dom(this) || SJL.is_document(this) || SJL.is_window(this)){
            element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){
            element = this;
        }else{
            throw new Error("append : wrong input arguments");return;
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("append : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    //add form here
    if(!SJL.is_array(etoappend)){
        etoappend=SJL._create_array_like(etoappend);
    }
    for(var i=0;i<element.length;++i){
        for(var j=0;j<etoappend.length;++j){
            element[i].appendChild(etoappend[j]);
        }
    }
    return SJL._wrap_element.apply(element);

};

SJL.get_children=function(element,selector){	
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("get_children : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_dom(arguments[0]) || SJL.is_window(arguments[0]) || SJL.is_document(arguments[0])){
            element = SJL._create_array_like(arguments[0]);
            selector = null;
        }else if(typeof arguments[0]==='string'){
            selector = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("get_children : wrong input arguments");return;
            }
        }
        
    }else if(arguments.length==0){
        selector = null;
        if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
            element = SJL._create_array_like(this);
        }else if(SJL.is_array(this)){
            element = this;
        }else{throw new Error("get_children : wrong input parameters");return;}
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    var temp ; 
    var result = {};
    result.__proto__=Array.prototype;	
    for(var i=0;i<element.length;++i){
        var data;
        var direct_children=element[i].childNodes;
        if(selector){data=element[i].querySelectorAll(selector);}else{data=element[i].childNodes;}
        for(var j=0;j<data.length;j++){
            if(data[j].nodeType && data[j].nodeType==1){
                if(SJL.is_in_array(data[j],direct_children)){
                    result.push(data[j]);
                }
                
            }
        }
    }
    return SJL._wrap_element.apply(result);
};

SJL._create_array_like=function(element){
    var temp;
    if(SJL.get_browser_type().name.toLowerCase()=='internet explorer'){
        var array_like_object = function(){};
        array_like_object.prototype = Array.prototype;
        temp = new array_like_object();
    }else{
        temp = Object.create(Array.prototype);
    }
    temp.push(element);
    return SJL._wrap_element.apply(temp);
};
SJL.parent=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("parent : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element = this;}else{throw new Error("parent : Wrong input arguments");return;}
    }
    /*this is only return element[0] value*/
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    
    var temp;
    var result =  {};
    result.__proto__ = Array.prototype;
    for(var i=0;i<element.length;++i){
        var data = element[i].parentNode;
        if(data){
            var mark=false;
            for(var k=0;k<result.length;++k){
                if(result[k]===data){mark=true;}
            }
            if(mark==false){result.push(data);}
        }
    }
    return SJL._wrap_element.apply(result);
};
SJL.draggable=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element)){
            element=element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("draggable : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element=this;}else{throw new Error("draggable : Wrong input arguments");return;}
    }
    /*this is only return element[0] value*/
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i= 0;i<element.length;++i){
        
        element[i].onmousedown=function(e){
            var el = this;
            SJL.dom(el).add_css_class('sjl_user_select_text_none');
            el.style.zIndex = 100000; 
            el.style.width = el.clientWidth + 'px';
            //el.style.height = el.clientHeight + 'px';
            var mouse_pos_x = e.pageX;
            var mouse_pos_y = e.pageY;
            var left = (SJL.find_pos(SJL.dom(el)[0])).offsetLeft;
            var topp = (SJL.find_pos(SJL.dom(el)[0])).offsetTop;
            el.style.position = 'absolute';
            el.style.left = left  + 'px';
            el.style['top'] = el.offsetTop - SJL.intVal(el.style.marginTop)+ 'px';			
            
            function moveAt(e) {
                var left = (SJL.find_pos(SJL.dom(el)[0])).offsetLeft;
                var topp = (SJL.find_pos(SJL.dom(el)[0])).offsetTop;
                el.style.left = left  + (e.pageX - mouse_pos_x)          + 'px';
                el.style['top'] = SJL.intVal(el.style.top) + (e.pageY - mouse_pos_y) + 'px';
                mouse_pos_x = e.pageX;
                mouse_pos_y = e.pageY;
            }
            /*experimental code*/
            //sjl_temp_func_ref = SJL.add_event(document,'mousemove',function(e){moveAt(e);},[]);
            //console.log(sjl_temp_func_ref);
            /*practical code*/
            
            document.onmousemove = function(e) {moveAt(e);}
                
            
            
            el.onmouseup = function() {
                SJL.dom(el).remove_css_class('sjl_user_select_text_none');
                    document.onmousemove = null;
                    //SJL.remove_event(document,'mousemove',sjl_temp_func_ref);
                    //console.log('salam');
            }
            el.ondragstart=function(){return false;}
        }
    }
    return element;
};
	
SJL.parent_if=function(element,node_name){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_window(element) || SJL.is_document(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            node_name=arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("parent_if : wrong input arguments");return;
            }
        }else if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
            element = SJL._create_array_like(arguments[0]);
            node_name = null;
        }
    }else if(arguments.length==0){
        if(SJL.is_dom(this) || SJL.is_document(this) || SJL.is_window(this) ) {
            element = SJL._create_array_like(this);
            node_name=null;
        }else if(SJL.is_array(this)){
            element = this;
            node_name = null;
        }
    }else{throw new Error("parent_if : Wrong input arguments");return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    if(node_name){node_name  = SJL.trim(node_name.toUpperCase());}
    if(!element){return;}
    var temp ;
    var result = {};
    result.__proto__ = Array.prototype;
    if(!node_name){result = element.parent();return result;}
    for(var i=0;i<element.length;++i){
        var parent = element[i].parentNode;
        for(var j=0;j<100;++j){
            if(!parent){break;}
            if(SJL.trim(parent.nodeName.toUpperCase())==node_name){
                result.push(parent);
                break;
            }else{
                parent = parent.parentNode;
            }
        }
    }
    return SJL._wrap_element.apply(result);
};
	
SJL.siblings=function(element,selector){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("siblings : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_dom(arguments[0]) || SJL.is_window(arguments[0]) || SJL.is_document(arguments[0])){
            element = SJL._create_array_like(arguments[0]);
            selector = null;
        }else if(typeof arguments[0]==='string'){
            selector = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("siblings : wrong input arguments");return;
            }
        }
        
    }else if(arguments.length==0){
        selector = null;
        if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
            element = SJL._create_array_like(this);
        }else if(SJL.is_array(this)){
            element = this;
        }else{throw new Error("siblings : wrong input parameters");return;}
    }
    var temp;
    var result =  {};
    result.__proto__ = Array.prototype;
    for(var i=0;i<element.length;++i){
        var data=SJL.get_children(SJL.parent(element[i]),selector);
        for(var k=0;k<data.length;++k){
            if(data[k]===element[i]){
                data.splice(k,1);
                break;
            }
        }
        for(k=0;k<data.length;++k){
            if(!SJL.is_in_array(data[k],result)){
                result.push(data[k]);
            }
        }
    }
    return SJL._wrap_element.apply(result);
};
SJL.find=function(element,selector){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("find : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_dom(arguments[0]) || SJL.is_window(arguments[0]) || SJL.is_document(arguments[0])){
            element = SJL._create_array_like(arguments[0]);
            selector = null;
        }else if(typeof arguments[0]==='string'){
            selector = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("find : wrong input arguments");return;
            }
        }
        
    }else if(arguments.length==0){
        selector = null;
        if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
            element = SJL._create_array_like(this);
        }else if(SJL.is_array(this)){
            element = this;
        }else{throw new Error("find : wrong input parameters");return;}
    }
    var result = [];
    if(!selector){throw new Error("find : Wrong input arguments");return;}
    for(var i=0;i<element.length;++i){
        var n;
        if(selector){
             n = element[i].querySelectorAll(selector);
        }
        for(var j=0;j<n.length;++j){
            if(!SJL.is_in_array(n[j],result)){
                result.push(n[j]);
                continue;
            }else{continue;}
        }
    }
    return SJL._wrap_element.apply(result);
};
SJL.hide=function(element){/*guess it is fixed*/
    if(arguments.length==1){
        if(SJL.is_dom(element)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("hide : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element =this;}else{throw new Error("hide : Wrong input arguments");return;}
    }
    
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        element[i].style.display='none';
    }
    return SJL._wrap_element.apply(element);
};
SJL.show=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element)){
            element=element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("show : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element=this;}else{throw new Error("show : Wrong input arguments");return;}
    }
    
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        element[i].style.display='';
    }
    return SJL._wrap_element.apply(element);
};
SJL.ucfirst=function(str){
    if(SJL.is_str(str)){
        return str.replace(str.substr(0,1),str.substr(0,1).toUpperCase());
    }else{
        return str;
    }
};
SJL.is_alphanumeric=function(param){
    if (SJL.is_str(param)){
        if (param.search(/^[a-zA-Z][a-z0-9]+$/gi)==0){return true;}else{return false;}
    }else{return false;}
};
SJL.is_element_rendered=function(id){
    return (document.getElementById(id)?true:false);
};
SJL.serialize=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element)){
            element = SJL._create_array_like(element);
        }else if(SJL.is_array(element)){
            //do nothing
        }else{
            throw new Error('serialize : Wrong input parameters');return;
        }
    }else if(arguments.length==0){
        if(SJL.is_dom(this)){
            element = SJL._create_array_like(this);
        }else if(SJL.is_array(this)){
            element = this;
        }else{
            throw new Error("serialize : Wrong input parameters");return;
        }
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    var data={};
    var result=[];
    for(var i=0;i<element.length;++i){
        var myelement=element[i];
    
        if(typeof myelement.type!=='undefined' && myelement.type=='checkbox'){data[myelement.name]=myelement.checked;}
        else if(typeof myelement.type!=='undefined' && myelement.type=='radio'){
            if(typeof myelement.name !='undefined' ) {
                if(myelement.checked==true){
                    data[myelement.name]=(typeof myelement.value !='undefined'?myelement.value:true);
                    console.log(myelement.id);
                }
            }
        }
        else if(typeof myelement.name !='undefined'){
            data[myelement.name]=(typeof myelement.value!='undefined'?myelement.value:'undefined');
        }else{
            console.log('serialize : element not supported yet!!!');
        } 
             
    }
    return JSON.stringify(data);
};


SJL.set_attr=function(element,attr,val){
    if(arguments.length==3){
        if(SJL.is_dom(element) || SJL.is_window(element) || SJL.is_document(element)){
            element=SJL._create_array_like(element);
        }else{
            throw new Error("set_style : Wrong input paramenters");return;
        }
    }else if(arguments.length==2){
        val = attr;
        attr = element;
        if(SJL.is_array(this) || SJL.is_document(this) || SJL.is_window(this) || SJL.is_dom(this)){
            if(SJL.is_array(this)){
                element = this;
            }else{
                element=SJL._create_array_like(this);
            }
        }else{
            throw new Error("set_style : wrong input paramenters");return;
        }
    }else{
        throw new Error("set_style : wrong input arguments");return;
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        element[i].setAttribute(attr,val);
    }
    return element;
};
	
SJL.get_attr=function(element,attr){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("get_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            attr = arguments[0];
            if(SJL.is_dom(this)|| SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("get_attr : wrong input paramenters");return;
            }			
        }else{
            if(SJL.is_dom(arguments[0]) || SJL.is_window(arguments[0]) || SJL.is_document(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
                attr = null;
            }else if(SJL.is_array(arguments[0])){
                element = arguments[0];
                attr = null;
            }else{throw new Error("get_attr : wrong input arguments");return;}
        }
    }else if(arguments.length==0){
        attr = null;
        if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
            element = SJL._create_array_like(this);return;
        }else if(SJL.is_array(this)){element = this;}else{
            throw new Error("get_attr : wrong input arguments");return;
        }
    }else{throw new Error("get_attr : wrong input arguments");return;}
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}	
    var result=[];
    for(var i=0;i<element.length;++i){
        var temp=element[i].getAttribute(attr);
        if(temp==null || temp==''){
            temp='';
        }
        result.push(temp);
    }
    return result;
};
	
SJL.has_attr=function(element,attr){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("has_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            attr = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }else{
            attr= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("has_attr : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    element=element[0];
    /*has attr only works for the first element of the selector*/
    return element.hasAttribute(attr);
};
	
SJL.remove_attr=function(element,attr){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("has_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            attr = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }else{
            attr= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("has_attr : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        if(SJL.has_attr(element[i],attr)){
            element[i].removeAttribute(attr);
        }
    }
    return element;
};
	
SJL.toggle_attr=function(element,attr,val){/*need to be fixed for number of input parameters*/
    if(arguments.length==3){
        if(SJL.is_dom(element) || SJL.is_window(element) || SJL.is_document(element)){
            element=SJL._create_array_like(element);
        }else{
            throw new Error("set_style : Wrong input paramenters");return;
        }
    }else if(arguments.length==2){
        val = attr;
        attr = element;
        if(SJL.is_array(this) || SJL.is_document(this) || SJL.is_window(this) || SJL.is_dom(this)){
            if(SJL.is_array(this)){
                element = this;
            }else{
                element=SJL._create_array_like(this);
            }
        }else{
            throw new Error("set_style : wrong input paramenters");return;
        }
    }else{
        throw new Error("set_style : wrong input arguments");return;
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        if(SJL.has_attr(element[i],attr)){
            SJL.remove_attr(element[i],attr);
        }else{
            SJL.set_attr(element[i],attr,val);
        }
    }
    return element;
};
	
SJL.set_style=function(element,attr,val){/*need to be fixed for number of input parameters*/
    if(arguments.length==3){
        if(SJL.is_dom(element) || SJL.is_window(element) || SJL.is_document(element)){
            element=SJL._create_array_like(element);
        }else{
            throw new Error("set_style : Wrong input paramenters");return;
        }
    }else if(arguments.length==2){
        val = attr;
        attr = element;
        if(SJL.is_array(this) || SJL.is_document(this) || SJL.is_window(this) || SJL.is_dom(this)){
            if(SJL.is_array(this)){
                element = this;
            }else{
                element=SJL._create_array_like(this);
            }
        }else{
            throw new Error("set_style : wrong input paramenters");return;
        }
    }else{
        throw new Error("set_style : wrong input arguments");return;
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    /*fix some css style like float=>cssFloat and - based style*/
    attr=SJL._fix_style(attr);
    for(var i=0;i<element.length;++i){
        element[i].style[attr]=val.toString();
    }
    return element;
};
	
SJL._fix_style=function(attr){
    if(!attr || attr==''){return '';}
    if(attr.search('-')!=-1){
        attr=attr.split('-');
        if(SJL.is_array(attr) && attr.length>1){
            for(var i=1;i<attr.length;++i){
                attr[i]=SJL.ucfirst(attr[i]);
            }
            attr=attr.join('');
        }
        if(SJL.is_array(attr)){attr=attr.join('');}
    }
    if(SJL.trim(attr.toLowerCase())=='float'){attr='cssFloat';}
    if(SJL.trim(attr.toLowerCase())=='text'){attr='cssText';}
    return attr;
};
	
SJL.get_style=function(element,attr){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("has_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            attr = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }else{
            attr= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("has_attr : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    var result=[];
    attr=SJL._fix_style(attr);
    for(var i=0;i<element.length;++i){
        var temp=element[i].style[attr];
        if(!temp || temp==''){temp='';}
        result.push(temp);
    }
    return result;
};
	
SJL.remove_style=function(element,attr){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("has_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            attr = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }else{
            attr= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("has_attr : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    attr=SJL._fix_style(attr);
    for(var i=0;i<element.length;++i){
        element[i].style[attr]="";
    }
    return element;
};
	
SJL.has_style=function(element,attr){
    /*this function only works for one element*/
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("has_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(SJL.is_str(arguments[0])){
            attr = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }else{
            attr= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("has_attr : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("has_attr : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}	
    element=element[0];
    attr=SJL._fix_style(attr);
    return (element.style[attr]!=''?true:false);
};
SJL.toggle_style=function(element,attr,val){/*need to be fixed for number of input parameters*/
    if(arguments.length==3){
        if(SJL.is_dom(element) || SJL.is_window(element) || SJL.is_document(element)){
            element=SJL._create_array_like(element);
        }else{
            throw new Error("set_style : Wrong input paramenters");return;
        }
    }else if(arguments.length==2){
        val = attr;
        attr = element;
        if(SJL.is_array(this) || SJL.is_document(this) || SJL.is_window(this) || SJL.is_dom(this)){
            if(SJL.is_array(this)){
                element = this;
            }else{
                element=SJL._create_array_like(this);
            }
        }else{
            throw new Error("set_style : wrong input paramenters");return;
        }
    }else{
        throw new Error("set_style : wrong input arguments");return;
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    attr=SJL._fix_style(attr);
    for(var i=0;i<element.length;++i){
        if(SJL.has_style(element[i],attr)){
            SJL.remove_style(element[i],attr);
        }else{
            SJL.set_style(element[i],attr,val);
        }
    }
    return element;
};
SJL.get_val=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element)|| SJL.is_document(element) || SJL.is_window(element)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("get_val : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this) || SJL.is_document(this) || SJL.is_window(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element=this;}else{throw new Error("get_val : Wrong input arguments");return;}
    }
    /*this is only return element[0] value*/
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    /*fix for checkbox*/
    if(typeof element[0].type !=='undefined' && element.type &&  element[0].type=='checkbox'){return element[0].checked;}
    return (element[0].value!=='undefined'?element[0].value:'');
};
SJL.set_val=function(element,data){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("set_val : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(!SJL.is_dom(arguments[0]) && !SJL.is_document(arguments[0]) && !SJL.is_window(arguments[0])){
            data = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("set_val : Wrong input argument!!!");return;
            }
        }else{
            data= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("set_val : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("has_attr : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        /*fix for checkbox*/
        if(typeof element[i].type !=='undefined' && element[i].type=='checkbox'){
            element[i].checked=data;
        }
        element[i].value=data;
    }
    return element;
};
SJL.set_html=function(element,data){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("has_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(!SJL.is_dom(arguments[0]) && !SJL.is_document(arguments[0]) && !SJL.is_window(arguments[0])){
            data = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("set_html : Wrong input argument!!!");return;
            }
        }else{
            data= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("set_html : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("set_html : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        element[i].innerHTML=data;
    }
    return element;
};
SJL.get_html=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element)){
            element=element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("get_html : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element=this;}else{throw new Error("get_html : Wrong input arguments");return;}
    }
    /*this is only return element[0] value*/
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    return (element[0].innerHTML!=='undefined'?element[0].innerHTML:'');
};
SJL.set_text=function(element,data){
    if(arguments.length==2){
        if(SJL.is_dom(element) || SJL.is_document(element) || SJL.is_window(element)){
            element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("has_attr : Wrong input arguments");return;}
    }else if(arguments.length==1){
        if(!SJL.is_dom(arguments[0]) && !SJL.is_document(arguments[0]) && !SJL.is_window(arguments[0])){
            data = arguments[0];
            if(SJL.is_dom(this) || SJL.is_window(this) || SJL.is_document(this)){
                element = SJL._create_array_like(this);
            }else if(SJL.is_array(this)){element = this;}else{
                throw new Error("set_html : Wrong input argument!!!");return;
            }
        }else{
            data= null;
            if(SJL.is_dom(arguments[0]) || SJL.is_document(arguments[0]) || SJL.is_window(arguments[0])){
                element = SJL._create_array_like(arguments[0]);
            }else if(SJL.is_array(arguments[0])){element = arguments[0];}else{
                throw new Error("set_html : Wrong input argument!!!");return;
            }
        }
    }else if(arguments.length!=1 && arguments.length!=2){
        throw new Error("set_html : Wrong input argument!!!");
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        element[i].textContent=data;
    }
    return element;
};
SJL.get_text=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element) || SJL.is_document(element)){
            element=element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("get_text : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this) || SJL.is_document(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element=this;}else{throw new Error("get_text : Wrong input arguments");return;}
    }
    /*this is only return element[0] value*/
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    return (element[0].textContent!=='undefined'?element[0].textContent:'');
};
SJL.remove=function(element){
    if(arguments.length==1){
        if(SJL.is_dom(element)){
            element=element=SJL._create_array_like(element);
        }else if(SJL.is_array(element)){/*do nothing*/}else{throw new Error("remove : Wrong input arguments");return;}
    }else if(arguments.length==0){
        if(SJL.is_dom(this)){
            element=element=SJL._create_array_like(this);
        }else if(SJL.is_array(this)){element=this;}else{throw new Error("remove : Wrong input arguments");return;}
    }
    if(!element){return;}
    if(SJL.is_dom(element)){element=SJL._create_array_like(element);}
    for(var i=0;i<element.length;++i){
        if(element[i] && element[i].parentNode){
            element[i].parentNode.removeChild(element[i]);
        }
    }
    return element;
};



SJL.click=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'click',func,parameters);
    }
    return element;
};
SJL.dbclick=function(func,parameters){
    var element = (SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'dbclick',func,parameters);
    }
    return element;
};
SJL.change=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'change',func,parameters);
    }
    return element;
};
SJL.dragstart=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'dragstart',func,parameters);
    }
    return element;
};
SJL.drop=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'drop',func,parameters);
    }
    return element;
};
SJL.dragover=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'dragover',func,parameters);
    }
    return element;
};
SJL.keypress=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'keypress',func,parameters);
    }
    return element;	
};
SJL.keydown=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'keydown',func,parameters);
    }
    return element;	
};
SJL.contextmenu=function(func,parameters){
    var element=(SJL.is_array(this))?this:null;
    if(!element){return false;}
    if(!SJL.is_function(func)){return this;}
    for(var i=0;i<element.length;++i){
        SJL.add_event(element[i],'contextmenu',func,parameters);
    }
    return element;	
};
SJL.set_interval=function(func,time_loop){
    var element = (SJL.is_array(this))?this:null;
    if(!element){
        if(!SJL.is_function(func)){return false;}
        if(SJL.intVal(time_loop)!=0){
            time_loop = SJL.intVal(time_loop);
            return setInterval(func,time_loop);
        }else{return false;}
    }
    if(!SJL.is_function(func)){return this;}
    return_val = [];
    for(var i=0;i<element.length;++i){
        var param = element[i];
        return_val.push(setInterval(function(){func.apply(param,[param]);},time_loop));
    }
    return return_val;
};
SJL.clear_interval=function(clear_id){
    if(SJL.is_array(clear_id)){
        for(var i=0;i<clear_id.length;++i){
            clearInterval(clear_id[i]);
        }
        return true;
    }else{
        clearInterval(clear_id);
        return true;
    }
};

/*
 * Notify.js
 * (c) 2015 Gokulakrishnan Kalaikovan
 * Notify.js is freely distributable under the MIT license.
 **/
 

	/*This function need sjl.css for some css class*/
    
SJL.notify=function(msg,status,time){
    if(!SJL.is_dom(SJL.notification_container)){
        SJL.notification_container = document.createElement('div');
        SJL.notification_container.className = 'sjl_notify-container';
        document.body.appendChild(SJL.notification_container);
    }
    var timeOut = time;
    if (typeof timeOut === 'undefined') {
            timeOut = 4000;
        }
    var $ele = document.createElement('div');
    $ele.innerHTML = msg;
    SJL.notification_container.style.display = 'block';
    $ele.className = 'sjl_notify ' + 'sjl_' + status;
    SJL.notification_container.appendChild($ele);
    SJL._hide_notify(SJL.notification_container, $ele, timeOut);
};
SJL._hide_notify=function(notification_container, $ele, timeOut){
    setTimeout(function () {
            $ele.style.display = 'none';
            SJL.dom($ele).remove(); //remove appended div
        if(SJL.dom(SJL.notification_container).get_children().length==0){
            SJL.dom(SJL.notification_container).hide();
        }
        }, timeOut);
};


/*
SJL.ajax({
  url:"http://localhost/meedc_svn/gis/services/androidGis/dev_auth.php?username=androidCheck&password=sourena@android@check234&device_id=be22299707c2a0ad",
  method:"get",
  data:{data}
  success:function(e,f){
    console.log('success');
    console.log(e);
    console.log(f);
  },
  error:function(e,f){
    console.log(e);
    console.log(f);
  }
})
*/

/**
 *      majaX      
 *  Version 0.2.6  
 *  License:  MIT  
 * Simon  Waldherr 
 */
SJL.ajax = function (data, successcallback, errorcallback) {
  var majax = {
      setReqHeaders: function (ajax, headerObject) {
        "use strict";
        var key;
        if (headerObject !== false) {
          if (typeof headerObject === 'object') {
            for (key in headerObject) {
              if (typeof headerObject[key] === 'string') {
                ajax.setRequestHeader(key, headerObject[key]);
              }
            }
          }
        }
      },
      getRespHeaders: function (headerString) {
        "use strict";
        var i, string, header, headerObject = {};
        if (typeof headerString === 'string') {
          string = headerString.split(/\n/);
          for (i = 0; i < string.length; i += 1) {
            if (typeof string[i] === 'string') {
              header = string[i].split(': ');
              if ((header[0].length > 3) && (header[1].length > 3)) {
                headerObject[header[0].trim()] = header[1].trim();
              }
            }
          }
        }
        return headerObject;
      },
      overrideMime: function (ajax, mimetype) {
        "use strict";
        if (mimetype === 'application/xml') {
          ajax.overrideMimeType(mimetype);
          ajax.responseType = '';
        } else if ((mimetype.indexOf('image') !== -1) || (mimetype.indexOf('video') !== -1) || (mimetype.indexOf('audio') !== -1)) {
          ajax.overrideMimeType("text/plain; charset=x-user-defined");
          ajax.responseType = 'arraybuffer';
        }
      },
      countChars: function (string, split) {
        "use strict";
        string = string.split(split);
        if (typeof string === 'object') {
          return string.length - 1;
        }
        return 0;
      },
      getText: function (string) {
        "use strict";
        var re = /<([^<>]*)>([^\/]*)<(\/[^<>]*)>/gmi;
        if (typeof string === 'string') {
          return string.replace(re, '');
        }
      },
      getXMLasObject: function (xmlstring) {
        "use strict";
        var xmlroot, foo = {};
        if (typeof xmlstring === 'object') {
          return majax.returnChilds(foo, xmlstring, 1);
        }
        xmlroot = document.createElement('div');
        xmlroot.innerHTML = xmlstring;
        return majax.returnChilds(foo, xmlroot, 1);
      },
      returnChilds: function (element, node, deep) {
        "use strict";
        var i, ii, obj, key, plaintext, returnArray = [],
          childs = node.childNodes.length;
        ii = 0;
        for (i = 0; i < childs; i += 1) {
          if (node.childNodes[i].localName !== null) {
            element[ii] = {};
            for (key in node.childNodes[i]) {
              if (node.childNodes[i][key] !== undefined) {
                if ((typeof node.childNodes[i][key] === 'string') || (typeof node.childNodes[i][key] === 'number')) {
                  obj = node.childNodes[i][key];
                  if ((key !== 'accessKey') && (key !== 'baseURI') && (key !== 'className') && (key !== 'contentEditable') && (key !== 'dir') && (key !== 'namespaceURI') && (obj !== "") && (key !== key.toUpperCase()) && (obj !== 0) && (key !== 'childs') && (key !== 'textContent') && (key !== 'nodeType') && (key !== 'tabIndex') && (key !== 'innerHTML') && (key !== 'outerHTML')) {
                    element[ii][key] = obj;
                  } else if ((key === 'innerHTML') || (key === 'outerHTML')) {
                    element[ii][key] = majax.escapeHtmlEntities(obj);
                  }
                }
              }
            }
            if (node.childNodes[i].innerHTML !== undefined) {
              plaintext = majax.getText(node.childNodes[i].innerHTML).trim();
              if (plaintext !== "") {
                element[ii].textContent = plaintext;
              }
              if (node.childNodes[i].childNodes.length > 1) {
                element[ii].childs = majax.returnChilds(returnArray, node.childNodes[i], deep + 1);
              }
              ii += 1;
            }
          }
        }
        return element;
      },
      isEmpty: function (obj) {
        "use strict";
        var emptyObj = {}, emptyArr = [];
        if ((obj === emptyObj) || (obj === emptyArr) || (obj === null) || (obj === undefined)) {
          return true;
        }
        return false;
      },
      cleanArray: function (actual) {
        "use strict";
        var newArray = [],
          clean,
          i = 0;
        for (i = 0; i < actual.length; i += 1) {
          if ((typeof actual[i] === 'string') || (typeof actual[i] === 'number')) {
            newArray.push(actual[i]);
          } else if (typeof actual[i] === 'object') {
            clean = majax.cleanArray(actual[i]);
            if (clean[0] !== '') {
              newArray.push(majax.cleanArray(actual[i]));
            }
          }
        }
        return newArray;
      },
      cleanObject: function (actual) {
        "use strict";
        var newArray = {}, key;
        for (key in actual) {
          if (actual[key] !== undefined) {
            if ((typeof actual[key] !== 'object') && (typeof actual[key] !== 'function') && (typeof actual[key] !== '') && (!majax.isEmpty(actual[key]))) {
              newArray[key] = actual[key];
            } else if (typeof actual[key] === 'object') {
              if ((!majax.isEmpty(majax.cleanObject(actual[key]))) && (actual[key] !== null)) {
                newArray[key] = majax.cleanObject(actual[key]);
              }
            }
          }
        }
        return newArray;
      },
      getCSVasArray: function (csvstring) {
        "use strict";
        var regexCSV, arrayCSV, arrMatches, strMatchedDelimiter, strMatchedValue, strDelimiter = ';';
        regexCSV = new RegExp(("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" + "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
        arrayCSV = [
          []
        ];
        arrMatches = regexCSV.exec(csvstring);
        while (arrMatches) {
          strMatchedDelimiter = arrMatches[1];
          if (strMatchedDelimiter.length && (strMatchedDelimiter !== strDelimiter)) {
            arrayCSV.push([]);
          }
          if (arrMatches[2]) {
            strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
          } else {
            strMatchedValue = arrMatches[3];
          }
          arrayCSV[arrayCSV.length - 1].push(strMatchedValue);
          arrMatches = regexCSV.exec(csvstring);
        }
        return majax.cleanArray(arrayCSV);
      },
      base64_encode: function (s) {
        "use strict";
        if (typeof window.btoa !== 'function') {
          var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r = "",
            i = 0,
            a, b, c, d, x, y, z;
          while (i < s.length) {
            i += 1;
            x = s.charCodeAt(i);
            i += 1;
            y = s.charCodeAt(i);
            i += 1;
            z = s.charCodeAt(i);
            a = x >> 2;
            b = ((x & 3) << 4) | (y >> 4);
            c = ((y & 15) << 2) | (z >> 6);
            d = z & 63;
            if (isNaN(y)) {
              c = d = 64;
            } else if (isNaN(z)) {
              d = 64;
            }
            r += m.charAt(a) + m.charAt(b) + m.charAt(c) + m.charAt(d);
          }
          return r;
        }
        return window.btoa(s);
      },
      base64_decode: function (s) {
        "use strict";
        if (typeof window.btoa !== 'function') {
          var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r = "",
            i = 0,
            a, b, c, d, x, y, z;
          s = s.replace(/[^A-Za-z0-9\+\/\=]/g, "");
          while (i < s.length) {
            i += 1;
            a = m.indexOf(s.charAt(i));
            i += 1;
            b = m.indexOf(s.charAt(i));
            i += 1;
            c = m.indexOf(s.charAt(i));
            i += 1;
            d = m.indexOf(s.charAt(i));
            x = (a << 2) | (b >> 4);
            y = ((b & 15) << 4) | (c >> 2);
            z = ((c & 3) << 6) | d;
            r += String.fromCharCode(x) + (c !== 64 ? String.fromCharCode(y) : "") + (d !== 64 ? String.fromCharCode(z) : "");
          }
          return r;
        }
        return window.atob(s);
      },
      escapeHtmlEntities: function (text) {
        "use strict";
        return text.replace(/[\u00A0-\u2666<>\&]/g, function (c) {
          var entityTable={34:'quot',38:'amp',39:'apos',60:'lt',62:'gt',160:'nbsp',161:'iexcl',162:'cent',163:'pound',164:'curren',165:'yen',166:'brvbar',167:'sect',168:'uml',169:'copy',170:'ordf',171:'laquo',172:'not',173:'shy',174:'reg',175:'macr',176:'deg',177:'plusmn',178:'sup2',179:'sup3',180:'acute',181:'micro',182:'para',183:'middot',184:'cedil',185:'sup1',186:'ordm',187:'raquo',188:'frac14',189:'frac12',190:'frac34',191:'iquest',192:'Agrave',193:'Aacute',194:'Acirc',195:'Atilde',196:'Auml',197:'Aring',198:'AElig',199:'Ccedil',200:'Egrave',201:'Eacute',202:'Ecirc',203:'Euml',204:'Igrave',205:'Iacute',206:'Icirc',207:'Iuml',208:'ETH',209:'Ntilde',210:'Ograve',211:'Oacute',212:'Ocirc',213:'Otilde',214:'Ouml',215:'times',216:'Oslash',217:'Ugrave',218:'Uacute',219:'Ucirc',220:'Uuml',221:'Yacute',222:'THORN',223:'szlig',224:'agrave',225:'aacute',226:'acirc',227:'atilde',228:'auml',229:'aring',230:'aelig',231:'ccedil',232:'egrave',233:'eacute',234:'ecirc',235:'euml',236:'igrave',237:'iacute',238:'icirc',239:'iuml',240:'eth',241:'ntilde',242:'ograve',243:'oacute',244:'ocirc',245:'otilde',246:'ouml',247:'divide',248:'oslash',249:'ugrave',250:'uacute',251:'ucirc',252:'uuml',253:'yacute',254:'thorn',255:'yuml',402:'fnof',913:'Alpha',914:'Beta',915:'Gamma',916:'Delta',917:'Epsilon',918:'Zeta',919:'Eta',920:'Theta',921:'Iota',922:'Kappa',923:'Lambda',924:'Mu',925:'Nu',926:'Xi',927:'Omicron',928:'Pi',929:'Rho',931:'Sigma',932:'Tau',933:'Upsilon',934:'Phi',935:'Chi',936:'Psi',937:'Omega',945:'alpha',946:'beta',947:'gamma',948:'delta',949:'epsilon',950:'zeta',951:'eta',952:'theta',953:'iota',954:'kappa',955:'lambda',956:'mu',957:'nu',958:'xi',959:'omicron',960:'pi',961:'rho',962:'sigmaf',963:'sigma',964:'tau',965:'upsilon',966:'phi',967:'chi',968:'psi',969:'omega',977:'thetasym',978:'upsih',982:'piv',8226:'bull',8230:'hellip',8242:'prime',8243:'Prime',8254:'oline',8260:'frasl',8472:'weierp',8465:'image',8476:'real',8482:'trade',8501:'alefsym',8592:'larr',8593:'uarr',8594:'rarr',8595:'darr',8596:'harr',8629:'crarr',8656:'lArr',8657:'uArr',8658:'rArr',8659:'dArr',8660:'hArr',8704:'forall',8706:'part',8707:'exist',8709:'empty',8711:'nabla',8712:'isin',8713:'notin',8715:'ni',8719:'prod',8721:'sum',8722:'minus',8727:'lowast',8730:'radic',8733:'prop',8734:'infin',8736:'ang',8743:'and',8744:'or',8745:'cap',8746:'cup',8747:'int',8756:'there4',8764:'sim',8773:'cong',8776:'asymp',8800:'ne',8801:'equiv',8804:'le',8805:'ge',8834:'sub',8835:'sup',8836:'nsub',8838:'sube',8839:'supe',8853:'oplus',8855:'otimes',8869:'perp',8901:'sdot',8968:'lceil',8969:'rceil',8970:'lfloor',8971:'rfloor',9001:'lang',9002:'rang',9674:'loz',9824:'spades',9827:'clubs',9829:'hearts',9830:'diams',338:'OElig',339:'oelig',352:'Scaron',353:'scaron',376:'Yuml',710:'circ',732:'tilde',8194:'ensp',8195:'emsp',8201:'thinsp',8204:'zwnj',8205:'zwj',8206:'lrm',8207:'rlm',8211:'ndash',8212:'mdash',8216:'lsquo',8217:'rsquo',8218:'sbquo',8220:'ldquo',8221:'rdquo',8222:'bdquo',8224:'dagger',8225:'Dagger',8240:'permil',8249:'lsaquo',8250:'rsaquo',8364:'euro'};
          return '&' + (entityTable[c.charCodeAt(0)] || '#' + c.charCodeAt(0)) + ';';
        });
      }
    };
    /*create base64 encode/decode in SJL*/
    

  var url, method, port, type, typed, header, faildata, ajax, ajaxTimeout, mimes, mimetype, senddata, sendkeys, sendstring, regex,
    urlparts = {},
    i = 0;
  if (data.url === undefined) {
    return false;
  }

  regex = /((http[s]?:\/\/)?([\.:\/?&]+)?([^\.:\/?&]+)?)/gm;
  urlparts.regex = data.url.match(regex);
  urlparts.clean = {
    'protocol': '',
    'domain': '',
    'port': '',
    'path': '',
    'fileextension': '',
    'query': ''
  };

  for (i = 0; i < urlparts.regex.length; i += 1) {
    if (majax.countChars(urlparts.regex[i], '://') === 1) {
      urlparts.clean.protocol = urlparts.regex[i] === undefined ? false : urlparts.regex[i].split('://')[0];
      urlparts.clean.domain = urlparts.regex[i] === undefined ? false : urlparts.regex[i].split('://')[1];
    } else if ((majax.countChars(urlparts.regex[i], '/') === 0) && (majax.countChars(urlparts.regex[i], ':') === 0) && (urlparts.clean.path === '')) {
      urlparts.clean.domain += urlparts.regex[i] === undefined ? false : urlparts.regex[i];
    } else if ((majax.countChars(urlparts.regex[i], ':') === 1) && (urlparts.clean.path === '')) {
      urlparts.clean.port = urlparts.regex[i] === undefined ? false : urlparts.regex[i].split(':')[1];
    } else if ((majax.countChars(urlparts.regex[i], '?') === 0) && (majax.countChars(urlparts.regex[i], '&') === 0) && (urlparts.clean.query === '')) {
      urlparts.clean.path += urlparts.regex[i] === undefined ? false : urlparts.regex[i];
    } else {
      urlparts.clean.query += urlparts.regex[i] === undefined ? false : urlparts.regex[i];
    }
  }
  if (urlparts.clean.path.indexOf(".") !== -1) {
    urlparts.clean.fileextension = urlparts.clean.path.split('.')[urlparts.clean.path.split('.').length - 1];
  }
  mimes = {
    'txt'  : 'text/plain',
    'json' : 'application/json',
    'atom' : 'application/atom+xml',
    'rss'  : 'application/rss+xml',
    'soap' : 'application/soap+xml',
    'xml'  : 'application/xml',
    'svg'  : 'image/svg+xml',
    'css'  : 'text/css',
    'csv'  : 'text/csv',
    'html' : 'text/html',
    'vcf'  : 'text/vcard',
    'gif'  : 'image/gif',
    'jpeg' : 'image/jpeg',
    'jpg'  : 'image/jpeg',
    'png'  : 'image/png',
    'tiff' : 'image/tiff',
    'mp3'  : 'audio/mpeg',
    'mp4'  : 'video/mpeg',
    'mpeg' : 'video/mpeg',
    'mpg'  : 'video/mpeg',
    'm4a'  : 'audio/mp4',
    'ogg'  : 'audio/ogg',
    'oga'  : 'audio/ogg',
    'webma': 'audio/webm',
    'wav'  : 'audio/wav'
  };

  url      = data.url === undefined ? false : data.url;
  method   = data.method === undefined ? 'GET' : data.method.toUpperCase();
  port     = data.port === undefined ? urlparts.clean.port === undefined ? '80' : urlparts.clean.port : data.port;
  typed    = data.type === undefined ? urlparts.clean.fileextension === undefined ? 1 : 2 : 3;
  typed    = data.mimetype === undefined ? typed : 4;
  type     = data.type === undefined ? urlparts.clean.fileextension === undefined ? 'txt' : urlparts.clean.fileextension.toLowerCase() : data.type.toLowerCase();
  mimetype = data.mimetype === undefined ? mimes[urlparts.clean.fileextension] === undefined ? mimes[type] === undefined ? 'text/plain' : mimes[type] : mimes[urlparts.clean.fileextension] : data.mimetype;
  senddata = data.data === undefined ? false : data.data;
  faildata = data.faildata === undefined ? false : data.faildata;
  header   = data.header === undefined ? {} : data.header;
  successcallback = data.success !== undefined ? data.success : successcallback;
  errorcallback   = data.error !== undefined ? data.error : errorcallback;

  if (header['Content-type'] === undefined) {
    header['Content-type'] = 'application/x-www-form-urlencoded';
  }
  if (method === 'DEBUG') {
    return {
      "url"      : url,
      "urlparts" : urlparts.clean,
      "port"     : port,
      "type"     : type,
      "mime"     : mimetype,
      "data"     : data
    };
  }
  
  ajax = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : (XMLHttpRequest && new XMLHttpRequest()) || null;
  ajaxTimeout = window.setTimeout(function () {
    ajax.abort();
  }, 6000);
  ajax.onreadystatechange = function () {
    var jsoncontent, status;
    if (ajax.readyState === 4) {
      status = ajax.status.toString().charAt(0);
      clearTimeout(ajaxTimeout);
      ajax.headersObject = majax.getRespHeaders(ajax.getAllResponseHeaders());
      if ((status !== '2') && (status !== '3')) {
        errorcallback(faildata, ajax);
      } else {
        if (method === 'API') {
          if (urlparts.clean.domain === 'github.com') {
            jsoncontent = JSON.parse(ajax.responseText);
            if (jsoncontent.content !== undefined) {
              jsoncontent.content = majax.base64_decode(jsoncontent.content.replace(/\n/gmi, ''));
              successcallback(jsoncontent, ajax);
            } else {
              successcallback(JSON.parse(ajax.responseText), ajax);
            }
          }
        } else if (method === 'HEAD') {
          successcallback(ajax.responseText, ajax);
        } else {
          if (typed < 3) {
            mimetype = ajax.headersObject['Content-Type'];
          }
          if (mimetype.indexOf('json') !== -1) {
            successcallback(JSON.parse(ajax.responseText), ajax);
          } else if (mimetype.indexOf('xml') !== -1) {
            successcallback(majax.getXMLasObject(ajax.responseText), ajax);
          } else if (mimetype.indexOf('csv') !== -1) {
            successcallback(majax.getCSVasArray(ajax.responseText), ajax);
          } else if ((mimetype.indexOf('image') !== -1) || (mimetype.indexOf('video') !== -1) || (mimetype.indexOf('audio') !== -1) || (mimetype.indexOf('user-defined') !== -1)) {
            successcallback(ajax.response, ajax);
          } else {
            successcallback(ajax.responseText, ajax);
          }
        }
      }
    }
  };
  i = 0;
  sendstring = '';
  if (senddata !== false) {
    if ('string' === typeof senddata) {
      sendstring = senddata
    } else {
      for (sendkeys in senddata) {
        if (typeof senddata[sendkeys] === 'string') {
          if (i !== 0) {
            sendstring += '&';
          }
          sendstring += sendkeys + '=' + senddata[sendkeys];
          i += 1;
        }
      }
    }
  }
  if (method === 'API') {
    if (urlparts.clean.domain === 'github.com') {
      mimetype = 'json';
      if (urlparts.clean.path.split('/')[2] === undefined) {
        ajax.open('GET', 'https://api.github.com/users/' + urlparts.clean.path.split('/')[1] + '/repos', true);
        majax.setReqHeaders(ajax, header);
        ajax.send();
      } else if (urlparts.clean.path.split('/')[3] === undefined) {
        ajax.open('GET', 'https://api.github.com/repos/' + urlparts.clean.path.split('/')[1] + '/' + urlparts.clean.path.split('/')[2] + '/contents/', true);
        majax.setReqHeaders(ajax, header);
        ajax.send();
      } else {
        ajax.open('GET', 'https://api.github.com/repos/' + urlparts.clean.path.split('/')[1] + '/' + urlparts.clean.path.split('/')[2] + '/contents/' + urlparts.clean.path.split('/', 4)[3], true);
        majax.setReqHeaders(ajax, header);
        ajax.send();
      }
    }
  } else {
    if (method !== 'POST') {
      if (sendstring !== '') {
        if (urlparts.clean.query !== '') {
          url = url + '&' + sendstring;
        } else {
          url = url + '?' + sendstring;
        }
      }
    }

    if (method === 'GET') {
      ajax.open('GET', url, true);
      majax.overrideMime(ajax, mimetype);
      majax.setReqHeaders(ajax, header);
      ajax.send();
    } else if (method === 'POST') {
      ajax.open('POST', url, true);
      majax.overrideMime(ajax, mimetype);
      majax.setReqHeaders(ajax, header);
      ajax.send(sendstring);
    } else {
      if (method === 'HEAD') {
        mimetype = 'none';
      }
      ajax.open(method, url, true);
      majax.overrideMime(ajax, mimetype);
      majax.setReqHeaders(ajax, header);
      ajax.send();
    }
  }
};

/**
 * http://jsmodal.com/
 * Author: Henry Rune Tang Kai <henry@henrys.se>
 * (c) Copyright 2013 Henry Tang Kai.
 * License: http://www.opensource.org/licenses/mit-license.php
 * Date: 2013-7-11
 */
	/*add modal css in SJL.css file and two image (loading.gif and modal-close.png)*/
	
SJL.modal=function() {var c={},a={},d=document.createElement("div"),b=document.createElement("div"),f=document.createElement("div"),h=document.createElement("div"),k=document.createElement("div"),l,p;c.open=function(e){a.width=e.width||"auto";a.height=e.height||"auto";a.lock=e.lock||!1;a.hideClose=e.hideClose||!1;a.draggable=e.draggable||!1;a.closeAfter=e.closeAfter||0;a.closeCallback=e.closeCallback||!1;a.openCallback=e.openCallback||!1;a.hideOverlay=e.hideOverlay||!1;l=function(){c.center({})};e.content&& !e.ajaxContent?h.innerHTML=e.content:e.ajaxContent&&!e.content?(b.className="modal-loading",c.ajax(e.ajaxContent,function(a){h.innerHTML=a})):h.innerHTML="";b.style.width=a.width;b.style.height=a.height;c.center({});if(a.lock||a.hideClose)k.style.display="none";a.hideOverlay||(d.style.display="");b.style.display="";document.onkeypress=function(b){27===b.keyCode&&!0!==a.lock&&c.close()};k.onclick=function(){if(a.hideClose)return!1;c.close()};d.onclick=function(){if(a.lock)return!1; c.close()};window.addEventListener?window.addEventListener("resize",l,!1):window.attachEvent&&window.attachEvent("onresize",l);a.draggable?(f.style.cursor="move",f.onmousedown=function(a){c.drag(a);return!1}):f.onmousedown=function(){return!1};0<a.closeAfter&&(p=window.setTimeout(function(){c.close()},1E3*a.closeAfter));a.openCallback&&a.openCallback()};c.drag=function(a){var c=void 0!==window.event?window.event.clientX:a.clientX,m=void 0!==window.event?window.event.clientY:a.clientY,g=c-b.offsetLeft, d=m-b.offsetTop;document.onmousemove=function(a){c=void 0!==window.event?window.event.clientX:a.clientX;m=void 0!==window.event?window.event.clientY:a.clientY;b.style.left=0<c-g?c-g+"px":0;b.style.top=0<m-d?m-d+"px":0;document.onmouseup=function(){window.document.onmousemove=null}}};c.ajax=function(a,c){var d,g=!1,f=[function(){return new window.XMLHttpRequest},function(){return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")},function(){return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new window.ActiveXObject("Msxml2.XMLHTTP")}]; for(d=0;d<f.length;d+=1){try{g=f[d]()}catch(h){}if(!1!==g)break}g.open("GET",a,!0);g.onreadystatechange=function(){4===g.readyState&&(c(g.responseText),b.removeAttribute("class"))};g.send(null)};c.close=function(param){param=(typeof param!=='undefined')?param:null;h.innerHTML="";d.setAttribute("style","");d.style.cssText="";d.style.display="none";b.setAttribute("style","");b.style.cssText="";b.style.display="none";f.style.cursor="default";k.setAttribute("style","");k.style.cssText="";p&&window.clearTimeout(p);a.closeCallback&&a.closeCallback(param); window.removeEventListener?window.removeEventListener("resize",l,!1):window.detachEvent&&window.detachEvent("onresize",l)};c.center=function(a){var c=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),f=Math.max(b.clientWidth,b.offsetWidth),g=Math.max(b.clientHeight,b.offsetHeight),h=0,k=0,l=0,n=0;"number"===typeof window.innerWidth?(h=window.innerWidth,k=window.innerHeight):document.documentElement&&document.documentElement.clientWidth&&(h=document.documentElement.clientWidth, k=document.documentElement.clientHeight);"number"===typeof window.pageYOffset?(n=window.pageYOffset,l=window.pageXOffset):document.body&&document.body.scrollLeft?(n=document.body.scrollTop,l=document.body.scrollLeft):document.documentElement&&document.documentElement.scrollLeft&&(n=document.documentElement.scrollTop,l=document.documentElement.scrollLeft);a.horizontalOnly||(b.style.top=n+k/2-g/2+"px");b.style.left=l+h/2-f/2+"px";d.style.height=c+"px";d.style.width="100%"};d.setAttribute("id","modal-overlay"); b.setAttribute("id","modal-container");f.setAttribute("id","modal-header");h.setAttribute("id","modal-content");k.setAttribute("id","modal-close");f.appendChild(k);b.appendChild(f);b.appendChild(h);d.style.display="none";b.style.display="none";window.addEventListener?window.addEventListener("load",function(){document.body.appendChild(d);document.body.appendChild(b)},!1):window.attachEvent&&window.attachEvent("onload",function(){document.body.appendChild(d);document.body.appendChild(b)});c.about=function(){return "jsModal (http://jsmodal.com/) by Henry Rune Tang Kai <henry@henrys.se> under MIT license";}; return c}();
/**
* This method decodes a string of data which has been encoded using base-64 encoding.
*@param {String} - The input string we want to decode it.
*@return {String}  - decoded string
*@example
*SJL.base64_decode('TXkgbmFtZSBpcyBTb3VyZW5h'); //decode string
* //the output value is 'My name is Sourena'
*@memberof SJL
*@method base64_decode
*/
SJL.base64_decode=function(a){"use strict";if("function"!=typeof window.btoa){var e,f,g,h,i,j,k,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="",d=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<a.length;)d+=1,e=b.indexOf(a.charAt(d)),d+=1,f=b.indexOf(a.charAt(d)),d+=1,g=b.indexOf(a.charAt(d)),d+=1,h=b.indexOf(a.charAt(d)),i=e<<2|f>>4,j=(15&f)<<4|g>>2,k=(3&g)<<6|h,c+=String.fromCharCode(i)+(64!==g?String.fromCharCode(j):"")+(64!==h?String.fromCharCode(k):"");return c}return window.atob(a)};

/**
* This method encode the given string using base64 encoding algorithm.
*@param {String} - The input string we want to encode it.
*@return {String}  - Encoded string
*@example
*SJL.base64_encode('My name is Sourena'); //encode string
* //the output value is 'TXkgbmFtZSBpcyBTb3VyZW5h'
*@memberof SJL
*@method base64_encode
*/
SJL.base64_encode=function(a){"use strict";if("function"!=typeof window.btoa){for(var e,f,g,h,i,j,k,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="",d=0;d<a.length;)d+=1,i=a.charCodeAt(d),d+=1,j=a.charCodeAt(d),d+=1,k=a.charCodeAt(d),e=i>>2,f=(3&i)<<4|j>>4,g=(15&j)<<2|k>>6,h=63&k,isNaN(j)?g=h=64:isNaN(k)&&(h=64),c+=b.charAt(e)+b.charAt(f)+b.charAt(g)+b.charAt(h);return c}return window.btoa(a)};


/**
 * This is a blank component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.blank
 */
SJL.blank=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    this._component='blank';        /*very important for creating id*/
	this.text=conf.text||'BLANK';
	this.edit_mode=(conf.edit_mode!=true)?false:true;
    this.data_value=conf.data_value||'';
    this.margin = conf.margin || {};
	this.init=function(){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='blank';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		/**********************************************************************/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
        if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(me.edit_mode){
			SJL.set_style(me.dom,'color','lightgray');
			SJL.set_html(me.dom,me.text);
			SJL.set_style(me.dom,'text-align','center');
		}
	};
    /**
     * this is a get_text of blank component
     * @memberof SJL.blank
     * @method get_text
     */
    this.get_text=function(){
		var me=this;
		return me.text;
	};
	this.init();
	return this;
};
/**
 * This is a button component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.button
 */
SJL.button=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
 	this._component='button';        /*very important for creating id*/
	this.text=conf.text||'Click Me';
	this.name=conf.name||"";	/*specify name to ease form submition*/
	this.value = conf.value || '';
	this.btn_type = conf.btn_type || 'button';  /*submit,button*/
	this.btn_style=conf.btn_style||"";  /**could be default primary success info warning danger*/
	this.btn_size=conf.btn_size||'';  /*could be sm lg xs*/
	this.display=conf.display||'inline'; /*could be inline or block*/
	this.has_icon=(conf.has_icon!=true)?false:true;
	this.signals=conf.signals||{};
	this.margin=conf.margin||{};
	this.btn_align=conf.btn_align||'';
	this.icon=conf.icon||'fa-globe';
	this.btn_color = conf.btn_color || '';
	this.btn_border_color = conf.btn_border_color || '';
	this.init=function(){
       	var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='button';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		me.dom = SJL.create_element('div',{
            id:me.base_id + '-' + this._component + '-' +'dom'
        });
		me.button_button= SJL.create_element('button',{
            id:me.base_id + '-' + this._component + '-' +'button_button',
			type:'button'
        });
		if(SJL.trim(me.name)!=''){
			me.button_button.name = me.name;
		}
		if(SJL.trim(me.value)!=''){
			me.button_button.value = me.value;
		}
		if(me.btn_type !=''){
			me.button_button.type = me.btn_type;
		}
		me.span_button= SJL.create_element('span',{
            		id:me.base_id+ '-' + this._component + '-' +'span_button'
        	});
		me.i_button= SJL.create_element('i',{
            		id:me.base_id + '-' + this._component + '-' +'i_button'
        	});
		me.button_button.add_css_class('sjl_btn');
		if(me.text!=""){
			SJL.set_html(me.span_button,me.text);
		}
		if(me.has_icon){
			me.i_button.add_css_class('sjl_menu-icon');
			me.i_button.add_css_class('sjl_fa');
			me.i_button.add_css_class(me.icon);
		}
		if(me.btn_style!=""){
			me.button_button.add_css_class('sjl_btn-'+me.btn_style);
		}
		if(me.btn_size!=""){
			me.button_button.add_css_class('sjl_btn-'+me.btn_size);
		}
		if(me.display=='block'){
			me.button_button.add_css_class('sjl_btn-block');
		}
		if(me.btn_align!=''){
			me.dom.style.textAlign=me.btn_align;
		}
		me.button_button.appendChild(me.i_button);
		me.button_button.appendChild(me.span_button);
		me.dom.appendChild(me.button_button);
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.margin[val]));
				}
			}
		}
		if(me.btn_color!=''){
			SJL.set_style(me.button_button,'background-color',me.btn_color);
		}
		if(me.btn_border_color!=''){
			SJL.set_style(me.button_button,'border-color',me.btn_border_color);
		}
		if(SJL.is_object(me.signals)){
			for(var sig in me.signals){
				SJL.add_event(me.button_button,sig,me.signals[sig],[]);
			}
		}
	};
	this.set_btn_style=function(data){
		var me = this;
		var arr=['default','primary','danger','success','warning','info'];
		var temp=SJL.dom('#'+me.button_button.id);
		if(!SJL.is_in_array(data,arr)){
			temp.add_css_class(data);
			return me;
		}
		arr.every(function(a){
			temp.remove_css_class('sjl_btn-'+a);return true;
		});
		temp.add_css_class('sjl_btn-'+data);
		me.btn_style=data;
		return me;
	};
	this.get_btn_style=function(){
		var me=this;
		return me.btn_style;
	};
	this.set_btn_size=function(data){
		var me = this;
		var arr=['lg','sm','xs'];
		var temp=SJL.dom('#'+me.button_button.id);
		if(!SJL.is_in_array(data,arr)){
			temp.add_css_class(data);
			return me;
		}
		arr.every(function(a){
			temp.remove_css_class('sjl_btn-'+a);
		});
		temp.add_css_class('sjl_btn-'+data);
		me.btn_size=data;
		return me;
	};
	this.get_btn_size=function(){
		var me=this;
		return me.btn_size;
	};
	this.set_display=function(data){
		var me=this;
		if(me.display!='inline' || me.display!='block'){
			return me;
		}
		var arr=['inline','block'];
		var temp=SJL.dom('#'+me.button_button.id);
		arr.every(function(a){
			temp.remove_css_class('sjl_btn-'+a);
		});
		temp.add_css_class('sjl_btn-'+data);
		me.display=data;
		return me;
	};
	this.get_display=function(){
		var me=this;
		return me.display;
	};
	this.get_text=function(){
		var me = this;
		return me.text;
	};
	this.set_text=function(data){
		var me = this;
		var temp = document.getElementById(me.span_button.id);
		if(me.has_icon){
			me.text="&nbsp;" + me.text + "&nbsp;";
		}
		temp.innerHTML=me.text;
		return me;
	};
	this.get_has_icon=function(){
		var me=this;
		return me.has_icon;
	};
	this.get_icon=function(){
		var me=this;
		return me.icon;
	};
	this.set_icon=function(val){
		var me=this;
		me.icon=val;
		return me;
	};
	this.get_btn_align=function(){
		var me=this;
		return me.btn_align;
	};
	this.set_btn_align=function(data){
		var me=this;
		var temp = document.getElementById(me.dom.id);
		if(!temp){return;}
		temp.style.textAlign=data;
		me.btn_style=data;
		return me;
	};
	this.get_name= function(){
		var me = this;
		return me.name;
	};
	this.set_name = function(d){
		var me = this;
		me.name = d;
		return me;
	};
	this.get_value = function(){
		var me = this;
		return me.value;
	};
	this.get_btn_color=function(){
		var me = this;
		return me.btn_color;
	};
	this.get_btn_type = function(){
		var me = this;
		return me.btn_type;
	};
	this.get_btn_border_color=function(){
		var me=this;
		return me.btn_border_color;
	};
	this.init();
	return this;
};
/**
 * This is a checkbox component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.checkbox
 */
SJL.checkbox=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
   	this._component='checkbox';        /*very important for creating id*/

	this.label_margin=conf.label_margin||{};
	this.margin=conf.margin||{};
	this.input_margin = conf.input_margin || {};
	this.padding=conf.padding||{};
	this.items=conf.items || [{name:'no_name',text:'default',value:'true',checked:false}];  /*items must be only checkbox's attributes {name:'',value:'',disabled:'',checked:'',text:'',...}*/
	this.label_padding=conf.label_padding||{};
	this.margin_left=conf.margin_left||"0";	/*could have px postfix or not (doesn't matter since we fix it in generate_margin function*/
	this.margin_right=conf.margin_right||"0";	/*could have px postfix or not (doesn't matter since we fix it in generate_margin function*/
	this.init=function(){
        	var me=this;
		me.base_id=SJL.generate_id(conf.id);
 	        var class_name='checkbox';    /*very fuckin important too!!!!(make sure to use 'var' to make class_name variable local.)*/
		me.margin_left=SJL.generate_px_percent(SJL.intVal(me.margin_left));
		me.margin_right=SJL.generate_px_percent(SJL.intVal(me.margin_right));
		
		me.dom = SJL.create_element('div',{
 	 	       id:me.base_id + '-' + this._component + '-' +'dom'
        	});
		me.dom.style.marginLeft=me.margin_left;
		me.dom.style.marginRight=me.margin_right;
		for(var i=0;i<me.items.length;++i){
			me.label_checkbox = SJL.create_element('label',{
				id:me.base_id + '-' + this._component + '-' +'label_checkbox' + '-' + i.toString()
			});
			me.label_checkbox.add_css_class('sjl_checkbox-inline');
			SJL.set_style(me.label_checkbox,'position','relative');
			SJL.set_style(me.label_checkbox,'margin-left','3px');
			SJL.set_style(me.label_checkbox,'margin-right','3px');
			me.input_checkbox = SJL.create_element('input',{
				id:me.base_id + '-' + this._component + '-' +'input_checkbox' + '-' + i.toString(),
				type:'checkbox'
			});
			me.span_checkbox = SJL.create_element('span',{
				id:me.base_id + '-' + this._component + '-' +'span_checkbox' + '-' + i.toString()
			});

			if(me.items[i] && typeof me.items[i].checked !== 'undefined' && me.items[i].checked == true){
				SJL.set_attr(me.input_checkbox,'checked',true);
			}else{
				SJL.remove_attr(me.input_checkbox,'checked');
			}
			if(me.items[i] && typeof me.items[i].disabled !== 'undefined' && me.items[i].disabled ==true){
				me.input_checkbox.disabled = true;
			}
			if(me.items[i] && typeof me.items[i].name !== 'undefined' && typeof me.items[i].name ==='string'){
				me.input_checkbox.name=me.items[i].name;	
			}
			if(me.items[i] && typeof me.items[i].value !== 'undefined' ){
				me.input_checkbox.value=me.items[i].value;	
			}
			if(me.items[i] && typeof me.items[i].text !== 'undefined' && typeof me.items[i].text ==='string'){
				SJL.set_html(me.span_checkbox,me.items[i].text);
			}
			/*fix on/off value of checkbox to get serialize*/
			SJL.add_event(me.input_checkbox,'change',function(){this.value=this.checked?'on':'off';},[]);
			me.label_checkbox.appendChild(me.input_checkbox);
			me.label_checkbox.appendChild(me.span_checkbox);
			/*finally append label to dom*/
			me.dom.appendChild(me.label_checkbox);	
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=val.trim().toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=val.trim().toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}

		/*

		if(SJL.is_object(me.label_padding)){
			for(var val in me.label_padding){
				var val_temp=val.trim().toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.label_checkbox.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.label_padding[val]);
				}
			}
		}
		if(SJL.is_object(me.label_margin)){
			for(var val in me.label_margin){
				var val_temp=val.trim().toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.label_checkbox.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.label_margin[val]);
				}
			}
		}
		*/
		/*I guess it's over !!!*/
	};
	this.is_checked=function(){
		
	};
	this.is_disabled=function(){
	
	};
	/**
	*	val is a boolean value . if it's true the function set the checkbox and 
	*	checked property is set to true else vice versa.
	**/
	this.set_check=function(val){
	
	};
	/**
	*	val is a boolean value . if it's true the function disable the checkbox and 
	*	disabled property is set to true else vice versa.
	*/
	this.set_disabled=function(val){
	
	};
	this.get_label=function(){
	
	};
	this.set_label=function(val){
	
	};
	this.init();
	return this;
};
/**
 * This is a colorpicker component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.colorpicker
 */
SJL.colorpicker = function(callback){
	this.callback = callback || function(){};
	var col = 16;
	this.selected_color = false;
	var color_array = ['#000000','#000033','#000044','#000055','#000066','#000077','#000088','#000099','#0000CC','#0000FF','#003300','#003333','#003366','#003399','#0033CC','#0033FF','#006600','#006633','#006666','#006699','#0066CC','#0066FF','#009900','#009933','#009966','#009999','#0099CC','#0099FF','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#00FF00','#00FF33','#00FF66','#00FF99','#00FFCC','#00FFFF','#330000','#330033','#330066','#330099','#3300CC','#3300FF','#333300','#333333','#333366','#333399','#3333CC','#3333FF','#336600','#336633','#336666','#336699','#3366CC','#3366FF','#339900','#339933','#339966','#339999','#3399CC','#3399FF','#33CC00','#33CC33','#33CC66','#33CC99','#33CCCC','#33CCFF','#33FF00','#33FF33','#33FF66','#33FF99','#33FFCC','#33FFFF','#660000','#660033','#660066','#660099','#6600CC','#6600FF','#663300','#663333','#663366','#663399','#6633CC','#6633FF','#666600','#666633','#666666','#666699','#6666CC','#6666FF','#669900','#669933','#669966','#669999','#6699CC','#6699FF','#66CC00','#66CC33','#66CC66','#66CC99','#66CCCC','#66CCFF','#66FF00','#66FF33','#66FF66','#66FF99','#66FFCC','#66FFFF','#990000','#990033','#990066','#990099','#9900CC','#9900FF','#993300','#993333','#993366','#993399','#9933CC','#9933FF','#996600','#996633','#996666','#996699','#9966CC','#9966FF','#999900','#999933','#999966','#999999','#9999CC','#9999FF','#99CC00','#99CC33','#99CC66','#99CC99','#99CCCC','#99CCFF','#99FF00','#99FF33','#99FF66','#99FF99','#99FFCC','#99FFFF','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#CC6600','#CC6633','#CC6666','#CC6699','#CC66CC','#CC66FF','#CC9900','#CC9933','#CC9966','#CC9999','#CC99CC','#CC99FF','#CCCC00','#CCCC33','#CCCC55','#CCCC66','#CCCC99','#CCCCCC','#CCCCFF','#CCFF00','#CCFF33','#CCFF66','#CCFF99','#CCFFCC','#CCFFFF','#FF0000','#FF0033','#FF0066','#FF0099','#FF00CC','#FF00FF','#FF3300','#FF3333','#FF3366','#FF3399','#FF33CC','#FF33FF','#FF6600','#FF6633','#FF6666','#FF6699','#FF66CC','#FF66FF','#FF77FF','#FF9900','#FF9933','#FF9966','#FF9999','#FF99CC','#FF99FF','#FFCC00','#FFCC33','#FFCC44','#FFCC55','#FFCC66','#FFCC99','#FFCCCC','#FFCCFF','#FFFF00','#FFFF33','#FFFF66','#FFFF99','#FFFFCC','#FFFFFF'];
	var table = table=SJL.create_element('table',{id:'SJL-color_picker'});
	var tr=SJL.create_element('tr',{});
	var td;
	var count;
	for(var i=1;i<color_array.length+1;++i){
		var td=SJL.create_element('td',{});
		var div=SJL.create_element('div',{});
		SJL.dom(div).set_style('background-color',color_array[i-1].toString());
		SJL.dom(div).set_style('width','24px');
		SJL.dom(div).set_style('height','24px');
		SJL.dom(div).set_style('background-repeat','repeat');
		SJL.dom(div).add_css_class(color_array[i-1].toString());
		SJL.dom(div).set_style('cursor','pointer');
		SJL.dom(div).set_style('border','1px solid black');
		SJL.dom(td).append(div);
		SJL.dom(tr).append(td);
		if(i%col==0){
			SJL.dom(table).append(tr);
			tr=SJL.create_element('tr',{});
		}
	}
	SJL.dom(table).append(tr);
	var me = this;
	
	var content = "<div style='color:white;' class='sjl_message-info-header-div sjl_user_select_text_none'><span class='sjl_message-info-header-span'>";
	content = content + "&nbsp;&nbsp;<b>";
	content = content + '<span style="font-family:tahoma">select color</span>';
	content = content + "</b></span></div>";
	content = content + "<div style='margin-top:10px;' class='sjl_user_select_text_none'><span>";
	content = content + '<div class="SJL-COLORPICKER-CONTENT" style="">';
	content = content + table.outerHTML;
	content = content + '</div>';
	content = content + "</span></div>";
	content = content + "<div style=' text-align: center;margin-top:10px;'><span>";
	content = content + "<a class='sjl_btn sjl_btn-info sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close(" + this.selected_color + ");'>";
	content = content + 'Ok';	
	content = content + "</a>";
	content = content + "&nbsp;&nbsp;&nbsp;&nbsp;";
	content = content + "<a class='sjl_btn sjl_btn-info sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close(false);'>";
	content = content + 'Cancel';
	content = content + "</a>";
	content = content + "</div></span>";
	SJL.modal.open({
		content: content,
		draggable:true,
		hideClose:true,
		lock:true,
		openCallback:function(){
			SJL.dom('.SJL-COLORPICKER-CONTENT table tr').get_children('td').get_children('div').click(function(e){
				me.selected_color = SJL.trim(e.target.className);
				SJL.dom('.SJL-COLORPICKER-CONTENT table tr').get_children('td').get_children('div').set_style('border','1px solid black');
				SJL.dom(e.target).set_style('border',"5px solid red");
			});
			
		},
		closeCallback:function(){
			me.callback.apply(this,[me.selected_color]);
		}
	});
};
/**
 * This is a combobox component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.combobox
 */
SJL.combobox=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    	this._component='combobox';        /*very important for creating id*/
	this.text=conf.text||'My Combo';
	this.name=conf.name||"";	/*specify name to ease form submition*/
	this.text_align=conf.text_align||'';
	this.input_size=conf.input_size||'';  /*could be  mini,small,medium,large,xlarge,xxlarge,xxxlarge*/
	this.seperator=conf.seperator||':';
	this.display=conf.display||'inline';
	this.signals=conf.signals||{};
	this.input_margin=conf.input_margin||{};
	this.label_margin=conf.label_margin||{};
	this.margin=conf.margin||{};
	this.padding=conf.padding||{};
	this.label_width=conf.label_width||2;  /* a number between 1 and 12 */
	this.data_value=conf.data_value||'';
	this.store=conf.store||"[{key:'test1',value:'t1'},{key:'test2',value:'t2'},{key:'test3',value:'t3'}]";
	this.multiple=conf.multiple||false;
	this.init=function(){
        var me=this;
	me.base_id=SJL.generate_id(conf.id);
        var class_name='combobox';    /*very fuckin important too!!!!(be local for sure)*/
       
		me.label = new SJL.label({
			text:me.text,
			text_align:me.text_align,
			seperator:me.seperator,
			display:me.display,
			label_width:me.label_width,
			font_name:me.font_name||'',
			font_style:me.font_style||'normal',
			font_weight:me.font_weight||'normal',
			font_size:me.font_size||'',
			color:me.color||'black'
		});
		if(SJL.is_object(me.label_margin)){
			for(var val in me.label_margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.label.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.label.dom[val]));
				}
			}
		}
		if(SJL.is_object(me.label_padding)){
			for(var val in me.label_padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'padding'+SJL.ucfirst(val),SJL.generate_px_percent(me.label_padding[val]));
				}
			}
		}
		
		
		/*create dom here*/
		/**********************************************************************/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' +'dom'
		});
		me.dom.add_css_class('sjl_form-group');
		
		
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.margin[val]));
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'padding'+SJL.ucfirst(val),SJL.generate_px_percent(me.padding[val]));
				}
			}
		}
		
		
		
		
		
		
		me.div_combobox=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' +'div_combobox'
		});
		if(me.display=='inline'){
			me.div_combobox.add_css_class('sjl_col-sm-'+(12-me.label_width).toString());
		}else{
			me.div_combobox.add_css_class('sjl_col-sm-12');
		}
		
		
		me.select_combobox=SJL.create_element('select',{
			id:me.base_id + '-' + this._component + '-' + 'select_combobox'
		});
		if(me.multiple){SJL.set_attr(me.select_combobox,'multiple',true);}
		if(me.name!=""){SJL.set_attr(me.select_combobox,'name',me.name);}
		me.select_combobox.add_css_class('sjl_form-control');
		me.select_combobox.add_css_class('');
		if(me.input_size){
			me.select_combobox.add_css_class('sjl_input-'+me.input_size);
		}
		
		if(SJL.is_array(me.store)){
			for(var i=0;i<me.store.length;++i){
				var temp=SJL.create_element('option',{
					value:me.store[i].value
				});
				temp.innerHTML=me.store[i].key;
				if(me.data_value==me.store[i].value){
					temp.setAttribute('selected','selected');
				}
				me.select_combobox.appendChild(temp);
			}
		}
		if(SJL.is_object(me.input_margin)){
			for(var val in me.input_margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.div_combobox,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.input_margin[val]));
				}
			}
		}
		
		
		/*connect nodes together*/
		
		me.div_combobox.appendChild(me.select_combobox);
		me.dom.appendChild(me.label.dom);
		me.dom.appendChild(me.div_combobox);
		/****************************************************************************/
		/*some validity function registration for various type*/
		
		/*I guess it's over !!!*/
		
			//console.log('here only for this class');
			if(SJL.is_object(me.signals)){
				for(var sig in me.signals){
					SJL.add_event(me.select_combobox,sig,me.signals[sig],[]);
				}
			}
		
	};
	this.set_text=function(data){
		var me = this;
		var temp = document.getElementById(me.select_combobox.id);
		temp.value = data.toString();
	};
	this.get_text=function(){
		var me = this;
		var temp = document.getElementById(me.select_combobox.id);
		var op=temp.selectedOptions;
		var result = [];
		if(SJL.is_array(op) && op.length>=1){
			for(var i=0;i<op.length;++i){
				result.push(op[i].text);
			}
		}
		return result;
	};
	this.get_label=function(){
		var me = this;
		return me.label.get_text();
	};
	this.set_label=function(val){
		var me = this;
		me.label.set_text(val);
		return me;
	};
	this.get_store=function(){
		var me = this;
		return me.store;
	};
	this.set_store=function(val){
		var me = this;
		if(SJL.is_array(val)){
			var temp = document.getElementById(me.select_combobox.id);
			temp.innerHTML = "";
			for(var i=0;i<val.length;++i){
				if(SJL.is_array(val) && val[i].key && val[i].value){
					var t=SJL.create_element('option',{value:val[i].value});
					t.innerHTML = val[i].key;
					temp.appendChild(t);
				}
			}
			me.store = val;
		}
		return me;
	};
	this.get_value=function(){
		var me = this;
		var temp = document.getElementById(me.select_combobox.id);
		var op=temp.selectedOptions;
		var result = [];
		if(SJL.is_array(op) && op.length>=1){
			for(var i=0;i<op.length;++i){
				result.push(op[i].value);
			}
		}
		return result;
	};
	this.set_value=function(val){
		var me = this;
		var val_index=-1;
		var store=me.get_store();
		var temp = document.getElementById(me.select_combobox.id);
		var options=temp.options;
		for(var i=0;i<options.length;++i){
			if(options[i].value==val){
				options[i].selected=true;
				me.data_value=val;
			}
		}
	
		return me;
	};
	this.set_key=function(val){
		var me = this;
		var val_index=-1;
		var store=me.get_store();
		var temp = document.getElementById(me.select_combobox.id);
		var options=temp.options;
		for(var i=0;i<options.length;++i){
			if(options[i].innerHTML==val){
				options[i].selected=true;
			}
		}
		return me;
	};
	this.get_key=function(){
		var me = this;
		var temp = document.getElementById(me.select_combobox.id);
		var op=temp.selectedOptions;
		var result = [];
		if(SJL.is_array(op) && op.length>=1){
			for(var i=0;i<op.length;++i){
				result.push(op[i].text);
			}
		}
		return result;
	};
	this.get_index=function(){
		var me = this;
		var temp = document.getElementById(me.select_combobox.id);
		var op=temp.selectedOptions;
		if(SJL.is_array(op) && op.length>=1){
			var result  = [];
			for(var i=0;i<op.length;++i){
				result.push(op[i].index);
			}
			return result;
		}
	};
	this.set_input_size=function(data){
		var me = this;
		var arr=['mini','small','medium','large','xlarge','xxlarge','xxxlarge'];
		var temp=SJL.dom('#'+me.div_combobox.id);
		arr.every(function(a){
			temp.remove_css_class('sjl_input-'+a);
		});
		temp.add_css_class('sjl_input-'+data);
		me.input_size=data;
		return me;
	};
	this.get_input_size=function(){
		var me = this;
		return me.input_size;
	};
	this.set_label_weight=function(val){
		var me = this;
		/*set col-sm-X  0<=x<=12*/
		val=SJL.intVal(val);
		if(val>12 || val<0){return;}
		var label=document.getElementById(me.label.dom.id);
		var box=document.getElementById(me.div_combobox.id);
		if(!box || !label){return;}
		var css_class=label.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(label,css_class[i]);
		}
		SJL.add_css_class(label,'sjl_col-sm-'+val.toString());
		css_class=box.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(box,css_class[i]);
		}
		SJL.add_css_class(box,'sjl_col-sm-'+(12-val).toString());
		return me;
	};
	this.set_label_width=function(val){
		var me = this;
		/*set col-sm-X  0<=x<=12*/
		val=SJL.intVal(val);
		if(val>12 || val<0){return;}
		var label=document.getElementById(me.label.dom.id);
		var box=document.getElementById(me.div_combobox.id);
		if(!box || !label){return;}
		var css_class=label.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(label,css_class[i]);
		}
		SJL.add_css_class(label,'sjl_col-sm-'+val.toString());
		css_class=box.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(box,css_class[i]);
		}
		SJL.add_css_class(box,'sjl_col-sm-'+(12-val).toString());
		me.label_width=val;
		me.label.label_width=val;
		return;
	};
	this.get_label_width=function(){
		var me = this;
		return me.label_width;
	};
	this.get_name=function(){
		var me = this;
		return me.name;
	};	
	this.set_name = function(d){
		var me = this;
		me.name = d;
		return me;
	};
	this.init();
	return this;
};
/**
 * This is a container component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.container
 */
SJL.container=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
	this.signals=conf.signals||{};
    	this._component='container';        /*very important for creating id*/
	this.padding = conf.padding || {};
	this.margin = conf.margin || {};
	this.bg_color = conf.bg_color || '';
	this.bg_gradient = conf.bg_gradient || '';
	this.bg_image = conf.bg_image || '';
	this.bg_image_repeat = conf.bg_image_repeat || ''; /*repeat , repeat-x , repeat-y , no-repeat , unset , none*/
	this.items=conf.items||[];  /* components in columns (an array of objects) */
	this.init=function(){
        	var me=this;
		me.base_id=SJL.generate_id(conf.id);
        	var class_name='container';    /*very fuckin important too!!!!(be local for sure)*/
        
		/*set margins*/
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		

		/*create dom here*/
		/**********************************************************************/
		
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		
		me.dom.add_css_class('sjl_container');
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}
		if(me.bg_color!=''){
			SJL.set_style(me.dom,'background-color',me.bg_color);
		}
		if(me.bg_gradient!=''){
			SJL.set_style(me.dom,'background',me.bg_gradient);
		}
		if(me.bg_image!=''){
			SJL.set_style(me.dom,'background-image','url(' + "'" + me.bg_image + "'" + ')');
		}
		if(me.bg_image_repeat!='' && me.bg_image_repeat!='none'){
			SJL.set_style(me.dom,'background-repeat',me.bg_image_repeat);
		}
		if(SJL.is_array(me.items)){
			if(me.items.length>0){
				for(var i=0;i<me.items.length;++i){
					if(SJL.is_component(me.items[i])){
						me.dom.append(me.items[i].dom);
					}else if(!SJL.is_component(me.items[i]) && SJL.is_dom(me.items[i])){
						me.dom.append(me.items[i]);
					}else if(!SJL.is_component(me.items[i]) && !SJL.is_dom(me.items[i]) && SJL.is_object(me.items[i])){
						if(me.items[i]._component){
							var comp = new SJL[me.items[i]._component](me.items[i]);
							me.dom.append(comp.dom);
						}else if(me.items[i].type){
							var typ = me.items[i].type;
							if(typ=='text' || typ=='textbox' || typ=='email' || typ=='money' || typ=='mellicode' || typ=='password' || typ=='number'){
								if(typ=='text' || typ=='textbox' ){
									me.items[i].type = 'text';
									var comp = new SJL['textbox'](me.items[i]);
									me.dom.append(comp.dom);
								}else{
									var comp = new SJL['textbox'](me.items[i]);
									me.dom.append(comp.dom);
								}
							}else{
								var comp = new SJL[typ](me.items[i]);
								me.dom.append(comp.dom);
							}
						}else{
							throw new Error("container.js : items must be DOM or Component");
							return;
						}
					}else{
						throw new Error("container.js : items must be DOM or Component");
						return;
					}
				}
			}
		}
		if(SJL.is_object(me.signals)){
			for(var sig in me.signals){
				SJL.add_event(me.input_textbox,sig,me.signals[sig],[]);
			}
		}
		/****************************************************************************/
		
		/*I guess it's over !!!*/
		
	};
	this.get_bg_color=function(){
		var me = this;
		return me.bg_color;
	};
	this.get_bg_gradient=function(){
		var me = this;
		return me.bg_gradient;
	};
	this.get_bg_image_repeat=function(){
		var me = this;
		return me.bg_image_repeat;
	};
	this.get_bg_image=function(){
		var me = this;
		return me.bg_image;
	};
	this.init();
	return this;
};


/**
 * This is a fieldset component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.fieldset
 */
SJL.fieldset=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    this._component='fieldset';        /*very important for creating id*/
	this.text=conf.text||'my field';
	this.text_align=conf.text_align||'left';
	this.input_size=conf.input_size||'';		/*value could be mini , small, medium , large , xlarge , xxlarge , xxxlarge*/
	this.font_name=conf.font_name||'';
	this.font_size=conf.font_size||'';
	this.font_style=conf.font_style||'';
	this.font_weight=conf.font_weight||'';
	this.data_value=conf.data_value||'';
	this.color=conf.color||'black';
	this.margin=conf.margin||{};
	this.padding=conf.padding||{};
	this.init=function(){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='fieldset';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		/*create dom here*/
		/**********************************************************************/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		//fix dom height
		SJL.set_style(me.dom,'display','inline-block');
		me.fieldset_fieldset=SJL.create_element('fieldset',{
			id:me.base_id + '-' + this._component + '-' + 'fieldset_fieldset'
		});
		me.legend_fieldset=SJL.create_element('legend',{
			id:me.base_id + '-' + this._component + '-' + 'legend_fieldset'
		});
		me.legend_fieldset.innerHTML=me.text;
		if(me.data_value!=''){
			me.legend_fieldset.innerHTML=me.data_value;
		}
		me.dom.style.textAlign=((me.text_align=='left' || me.text_align=='center' || me.text_align=='right')?me.text_align:'left');
		if(me.input_size && me.input_size!=''){
			me.dom.add_css_class('sjl_input-'+me.input_size);
		}
		
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}



		if(me.font_name!=''){
			me.legend_fieldset.style.fontFamily=me.font_name;
		}
		
		if(SJL.is_in_array(me.font_style,['normal','italic'])){
			me.legend_fieldset.style.fontStyle=me.font_style;
		}
		if(SJL.is_in_array(me.font_weight,['normal','bold'])){
			me.legend_fieldset.style.fontWeight=me.font_weight;
		}
		if(me.font_size){
			me.legend_fieldset.style.fontSize=SJL.generate_px_percent(me.font_size);
		}
		if(me.color!=''){
			me.legend_fieldset.style.color=me.color;
		}
		

		/*connect nodes together*/
		
		me.fieldset_fieldset.appendChild(me.legend_fieldset);
		me.dom.appendChild(me.fieldset_fieldset);
		
		
		/****************************************************************************/
		
		/*I guess it's over !!!*/
		
	};
	this.get_text=function(){
		var me = this;
		return me.text;
	};
	this.set_text=function(val){
		var me = this;
		var temp = document.getElementById(me.legend_fieldset.id);
		if(!temp){return;}
		temp.innerHTML = val.toString();
		me.text = val.toString();
		return;
	};
	this.set_text_align=function(val){
		var me = this;
		if (val =='left' || val=='right' || val == 'center' ){
			var temp = document.getElementById(me.dom.id);
			if(!temp){return;}
			temp.style.textAlign=val;
			me.text_align=val;
			return;
		}
		return false;
	};
	this.get_text_align=function(){
		var me = this ;
		return me.text_align;
	};
	this.set_input_size=function(data){
		var me = this;
		var arr=['mini','small','medium','large','xlarge','xxlarge','xxxlarge'];
		var temp=SJL.dom('#'+me.dom.id);
		arr.every(function(a){
			temp.remove_css_class('sjl_input-'+a);
		});
		temp.add_css_class('sjl_input-'+data);
	};
	this.get_font_name=function(){
		var me = this;
		return me.font_name;
	};
	this.get_font_style=function(){
		var me = this;
		return me.font_style;
	};
	this.get_font_weight=function(){
		var me = this;
		return me.font_weight;
	};
	this.get_font_size=function(){
		var me = this;
		return me.font_size;
	};
	this.get_input_size=function(){
		var me = this;
		return me.input_size;
	};
	this.get_color=function(){
		var me= this;
		return me.color;
	};
	this.init();
	return this;
};
/**
 * This is a form component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.form
 */
SJL.form=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    	this._component='form';        /*very important for creating id*/
	this.form_name=conf.form_name||"";
	this.disabled=(conf.disabled==true)?true:false;
	this.margin=conf.margin||{};
	this.padding=conf.padding||{};
	this.has_header=(conf.has_header==false)?false:true;
	this.has_footer=(conf.has_footer==false)?false:true;
	this.header_text=conf.header_text||'';
	this.footer_text=conf.footer_text||'';
	this.form_width = conf.form_width||'';
	this.form_bg_color=conf.form_bg_color||'';
	this.form_bg_gradient=conf.form_bg_gradient||'';
	this.form_align = conf.form_align || '';
	this.items = conf.items || [];
	this.header_bg_color = conf.header_bg_color || '';
	this.footer_bg_color = conf.footer_bg_color || '';
	this.form_max_width = conf.form_max_width || '';
	this.form_min_width = conf.form_min_width || '';
	this.form_border_size = conf.form_border_size || '';
	this.form_border_color = conf.form_border_color || '';
	this.form_action = conf.form_action || '';
	this.form_method = conf.form_method || '';
    this.form_enctype = conf.form_enctype || 'application/x-www-form-urlencoded';
	/*add more property to form class here*/
	this.init=function(){
        	var me=this;
		me.base_id=SJL.generate_id(conf.id);
        	var class_name='form';    /*very fuckin important too!!!!(make sure to use 'var' to make class_name variable local.)*/
		/*set margins*/
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}

		me.dom = SJL.create_element('div',{
        	    id:me.base_id + '-' + this._component + '-' +'dom'
        	});
		me.dom.add_css_class('sjl_panel');
		me.dom.add_css_class('sjl_panel-primary');
		/*panel header elements*/
		me.form_header_div = SJL.create_element('div',{
        	    id:me.base_id + '-' + this._component + '-' +'header-div'
        	});
		me.form_header_div.add_css_class('sjl_panel-heading');
		
		me.form_header_div_h3 = SJL.create_element('h3',{
        	    id:me.base_id + '-' + this._component + '-' +'header-div-h3'
        	});
		me.form_header_div_h3.add_css_class('sjl_panel-title');
		me.form_header_div_h3.add_css_class('sjl_form-title');
		me.form_header_div_h3_span = SJL.create_element('span',{
        	    id:me.base_id + '-' + this._component + '-' +'header-div-h3-span'
        	});
		me.form_header_div_h3_span.add_css_class('sjl_user_select_text_none');
		/*panel footer elements*/
		me.form_footer_div = SJL.create_element('div',{
        	    id:me.base_id + '-' + this._component + '-' +'footer-div'
        	});
		me.form_footer_div.add_css_class('sjl_panel-footer');
		me.form_footer_div_span = SJL.create_element('span',{
        	    id:me.base_id + '-' + this._component + '-' +'footer-div-span'
        	});
		me.form_footer_div_span.add_css_class('sjl_user_select_text_none');
		/*form body*/
		me.form_body_div = SJL.create_element('div',{
        	    id:me.base_id + '-' + this._component + '-' +'body-div'
        	});
		me.form_body_div.add_css_class('sjl_panel-body');
		if(me.form_bg_color!=''){
			SJL.set_style(me.form_body_div,'background-color',me.form_bg_color);
		}
		if(me.form_bg_gradient!=''){
			SJL.set_style(me.form_body_div,'background',me.form_bg_gradient);
		}
		me.form_body_div_form = SJL.create_element('form',{
        	    id:me.base_id + '-' + this._component + '-' +'body-div-form'
        	});
		me.form_body_div_form.add_css_class('sjl_form-horizontal');
		/*now add config of the form*/
		if(SJL.trim(me.form_name)!=''){
			me.form_body_div_form.name = me.form_name;
		}
		if(SJL.trim(me.form_action)!=''){
			me.form_body_div_form.action = me.form_action;
		}
		if(SJL.trim(me.form_method)!=''){
			me.form_body_div_form.method = me.form_method;
		}
        if(SJL.trim(me.form_enctype)!=''){
            me.form_body_div_form.enctype = me.form_enctype;
        }
		if(SJL.is_array(me.items)){
			if(me.items.length>0){
				for(var i=0;i<me.items.length;++i){
					if(SJL.is_component(me.items[i])){
						me.form_body_div_form.append(me.items[i].dom);
					}else if(!SJL.is_component(me.items[i]) && SJL.is_dom(me.items[i])){
						me.form_body_div_form.append(me.items[i]);
					}else if(!SJL.is_component(me.items[i]) && !SJL.is_dom(me.items[i]) && SJL.is_object(me.items[i])){
						if(me.items[i]._component){
							var comp = new SJL[me.items[i]._component](me.items[i]);
							me.form_body_div_form.append(comp.dom);
						}else if(me.items[i].type){
							var typ = me.items[i].type;
							if(typ=='text' || typ=='textbox' || typ=='email' || typ=='money' || typ=='mellicode' || typ=='password' || typ=='number'){
								if(typ=='text' || typ=='textbox' ){
									me.items[i].type = 'text';
									var comp = new SJL['textbox'](me.items[i]);
									me.form_body_div_form.append(comp.dom);
								}else{
									var comp = new SJL['textbox'](me.items[i]);
									me.form_body_div_form.append(comp.dom);
								}
							}else{
								var comp = new SJL[typ](me.items[i]);
								me.form_body_div_form.append(comp.dom);
							}
						}else{
							throw new Error("form.js : items must be DOM or Component");
							return;
						}
					}else{
						throw new Error("form.js : items must be DOM or Component");
						return;
					}
				}
			}
		}
		if(me.header_text!='' ){
			SJL.set_html(me.form_header_div_h3_span,me.header_text);
		}
		if(me.footer_text!='' ){
			SJL.set_html(me.form_footer_div_span,me.footer_text);
		}
		if(SJL.intVal(me.form_width)>0){
			SJL.set_style(me.dom,'width',SJL.generate_px_percent(me.form_width));
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=val.trim().toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=val.trim().toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}
		if(me.has_header==false){
			SJL.set_style(me.form_header_div,'display','none');
		}
		if(me.has_footer==false){
			SJL.set_style(me.form_footer_div,'display','none');
		}
		if(me.form_align !=''){
			if(me.form_align == 'right'){SJL.set_style(me.dom,'margin-left','auto');}
			if(me.form_align == 'center'){
				SJL.set_style(me.dom,'margin-left','auto');
				SJL.set_style(me.dom,'margin-right','auto');
			}
			if(me.form_align == 'left'){/*DO NOTHING*/}
		}
		if(me.header_bg_color !=''){
			SJL.set_style(me.form_header_div,'background-color',me.header_bg_color);
		}
		if(me.footer_bg_color !=''){
			SJL.set_style(me.form_footer_div,'background-color',me.footer_bg_color);
		}
		if(me.form_max_width !=''){
			SJL.set_style(me.dom,'max-width',SJL.generate_px_percent(me.form_max_width));
		}
		if(me.form_min_width !=''){
			SJL.set_style(me.dom,'min-width',SJL.generate_px_percent(me.form_min_width));
		}
		if(me.form_border_color !=''){
			SJL.set_style(me.dom,'border-color',me.form_border_color);
		}
		if(me.form_border_size !=''){
			SJL.set_style(me.dom,'border-width',SJL.generate_px_percent(me.form_border_size));
		}
		/*now append child together*/
		me.form_header_div_h3.appendChild(me.form_header_div_h3_span);
		me.form_header_div.appendChild(me.form_header_div_h3);
		me.form_footer_div.appendChild(me.form_footer_div_span);
		me.form_body_div.appendChild(me.form_body_div_form);
		me.dom.appendChild(me.form_header_div);
		me.dom.appendChild(me.form_body_div);
		me.dom.appendChild(me.form_footer_div);

		/*I guess it's over !!!*/
	};
	this.get_form_footer=function(){
		var me = this;
		return me.footer_text;
	};
	this.get_form_header=function(){
		var me = this;
		return me.header_text;
	};
	this.get_form_name=function(){
		var me = this;
		return me.form_name;
	};
	this.get_form_width=function(){
		var me=this;
		return me.form_width;
	};
	this.get_has_footer=function(){
		var me = this;
		return me.has_footer;
	};
	this.get_has_header=function(){
		var me = this;
		return me.has_header;
	};
	this.get_form_bg_color=function(){
		var me = this;
		return me.form_bg_color;
	};
	this.get_form_bg_gradient=function(){
		var me = this;
		return me.form_bg_gradient;
	};
	this.get_form_align = function(){
		var me = this;
		return me.form_align;
	};
	this.get_header_bg_color = function(){
		var me = this;
		return me.header_bg_color;
	};
	this.get_footer_bg_color = function(){
		var me = this;
		return me.footer_bg_color;
	};
	this.get_form_max_width=function(){
		var me = this;
		return me.form_max_width;
	};
	this.get_form_min_width=function(){
		var me = this;
		return me.form_min_width;
	};
	this.get_form_border_size = function(){
		var me = this;
		return me.form_border_size;
	};
	this.get_form_border_color = function(){
		var me = this;
		return me.form_border_color;
	};
	this.get_form_action = function(){
		var me = this;
		return me.form_action;
	};
	this.get_form_method = function(){
		var me = this;
		return me.form_method;
	};
    this.get_form_enctype = function(){
        var me= this;
        return me.form_enctype;
    };
	this.init();
	return this;
};
/**
 * This is a hbox component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.hbox
 */
SJL.hbox=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    	this._component='hbox';        /*very important for creating id*/
	this.text=conf.text||'';
	/*number of columns in one row between with sum equal to 12
	* it could be '12' , '6 6' , '3 3 3 3' , '4 4 4' , '2 2 2 2 2 2 ' , '3 6 3' , '6 3 3' , '5 2 5' and .... 
	*/
	this._stack=[];
    this.bg_color = conf.bg_color || '';
	this.edit_mode=(conf.edit_mode!=true)?false:true;
	this.columns_weight=conf.columns_weight||'12'; 
	this.border=conf.border||'1px dashed lightgray';
	this.items=conf.items||[];  /* components in columns (an array of objects) */
	this.margin = conf.margin || {};
	this.padding = conf.padding || {};
	this._item_len = this.items.length;
	this.edit_mode_func = conf.edit_mode_func || function(){};
	this.col_class = conf.col_class || 'sm';
	this.init=function(){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='hbox';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		/*field is required or not*/
	
		/*create dom here*/
		/**********************************************************************/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
        if(SJL.trim(me.bg_color)!=''){
            SJL.dom(me.dom).set_style('background-color',me.bg_color);
        }
		me.dom.add_css_class('sjl_row');
		if(!me.validate_columns_weight()){throw new Error("Wrong columns weight");return;}
		var temp_col= SJL.trim(me.columns_weight).split(/\s+/);
		
		for(var i=1;i<temp_col.length+1;++i){
			var temp_id=me.base_id + '_' + this._component  + '_' + 'div_' + i.toString() + '_' + temp_col[i-1].toString();
			me[temp_id] = SJL.create_element('div',{
				id:temp_id
			});
			me[temp_id].add_css_class('sjl_col-' + me.col_class + '-'+ temp_col[i-1]);
			if(me.items[i-1]){
				if( !me.items[i-1]._component && SJL.is_object(me.items[i-1]) && !SJL.is_dom(me.items[i-1]) ){
					var typ = me.items[i-1].type;
					if(typ == 'number' || typ == 'email' || typ == 'money' || typ == 'password' || typ == 'text' || typ == 'textbox' || typ == 'mellicode'){
						if(typ == 'text' || typ == 'textbox'){
							me.items[i-1].type = 'text';
							var comp = new SJL['textbox'](me.items[i-1]);
							me[temp_id].appendChild(comp.dom);
						}else{
							var comp = new SJL['textbox'](me.items[i-1]);
							me[temp_id].appendChild(comp.dom);
						}
					}else{
						var comp = new SJL[typ](me.items[i-1]);
						me[temp_id].appendChild(comp.dom);
					}
					
				}else if(!me.items[i-1]._component && SJL.is_object(me.items[i-1]) && SJL.is_dom(me.items[i-1])){
					//if it's a dom element
					me[temp_id].appendChild(me.items[i-1]);
				}else if(me.items[i-1]._component && SJL.is_object(me.items[i-1]) && !SJL.is_dom(me.items[i-1])){
					//if it's a component
					if(me.items[i-1].dom){
						me[temp_id].appendChild(me.items[i-1].dom);
					}else{
						var comp = new SJL[me.items[i-1]._component](me.items[i-1]);
						me[temp_id].appendChild(comp.dom);
					}
					
				}else{
					throw new Error("hbox : fuck!!! item is not dom nither component");
					return;
				}
			}else{
				if(me.edit_mode){
					
					var comp = new SJL.blank({edit_mode:true});
					me.items[i-1] = comp;
					me[temp_id].appendChild(comp.dom);		
				}
			}
			if(me.edit_mode){
				SJL.set_style(me[temp_id],'border',me.border);
				SJL.set_style(me[temp_id],'min-height','25px');
			}
			if(me.edit_mode){
				me.edit_mode_func(me[temp_id]);
				//me[temp_id].appendChild(temp);
			}
			
			me.dom.appendChild(me[temp_id]);
		}
		
		
		
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}
		/* fix : check if num of items and num of columns are equal*/
		
		
		/****************************************************************************/
		/*I guess it's over !!!*/
		
	};
	this.edit_mode_icon=function(comp){
		var me = this;
		/*
		var div = SJL.create_element('div',{});
		var i_close = SJL.create_element('i',{});
		i_close.add_css_class('fa');
		i_close.add_css_class('fa-times');
		i_close.style.cursor='pointer';
		SJL.add_event(i_close,'click',function(e){e.stopPropagation();console.log(me[comp.id]);},[]);
		var span=SJL.create_element('span',{innerHTML:'&nbsp;&nbsp;'}); 
		var i_edit = SJL.create_element('i',{});
		i_edit.add_css_class('fa');
		i_edit.add_css_class('fa-pencil');
		i_edit.style.cursor='pointer';
		SJL.add_event(i_edit,'click',function(e){e.stopPropagation();console.log(comp.id);},[]);
		div.add_css_class('sjl-hbox-edit-mode');
		div.add_css_class('user_select_text_none');
		div.appendChild(i_close);
		div.appendChild(span);
		div.appendChild(i_edit);
		*/
		/*
		SJL.dom(comp).dragover(function(ev){ev.preventDefault();});
		comp.ondrop = function(ev){
			console.log('droped');
			SJL.dom(comp).get_children().remove();
			var cmp = ev.dataTransfer.getData("component");
			var ctype = ev.dataTransfer.getData("type");
			var a = new SJL[cmp]({type:ctype,edit_mode:true});
			comp.appendChild(a.dom);
			//comp.appendChild(div);
			var a_arr = comp.id.split('_');
			var b_int = SJL.intVal(a_arr[a_arr.length-2]);
		        me.items[b_int-1] = a;
			obj.hbox = obj.hbox || {};
			obj.hbox[comp.id] = a;	
		}
		*/
		/*end test*/
	};
	
	
	this.validate_columns_weight=function(temp){
		var me = this;
		temp = temp || me.columns_weight; 
		temp=temp.split(" ");
		if(!SJL.is_array(temp) || temp.length==0){return false;}
		temp.every(function(a){if(!SJL.is_number(a) || a<0){return false;}else{return true;}});
		var sum=0;
		temp.every(function(a){sum=SJL.intVal(sum)+SJL.intVal(a);return true;});
		if(sum!=12){return false;}
		return true;
	};
	this.set_columns_weight=function(temp){
		var me= this;
		temp = temp || me.columns_weight;
		if(!me.validate_columns_weight(temp)){throw new Error("Wrong columns weight");return;}
		var dom=SJL.dom('#'+ me.dom.id);
		if(dom.length==0){dom=SJL.dom(me.dom);}
		if(!dom || dom.length==0){return;}
		dom.get_children().remove();
		var temp_col= SJL.trim(temp).split(/\s+/);
		for(var i=1;i<temp_col.length+1;++i){
			var temp_id=SJL.generate_id(conf.id) + '-' + this._component  + '-' + 'div' + i.toString() + '-' + temp_col[i-1].toString();
			me[temp_id] = SJL.create_element('div',{
				id:temp_id
			});
			me[temp_id].add_css_class('sjl_col-sm-'+ temp_col[i-1]);
			if(me.edit_mode){
				SJL.set_style(me[temp_id],'border',me.border);
				SJL.set_style(me[temp_id],'min-height','25px');
			}
			/*fix here add appendchild method to sjl*/
			dom[0].appendChild(me[temp_id]);
			
		}
		me.columns_weight=temp;
		return me;
		/*todo*/
	};
    this.get_bg_color=function(){
        var me = this;
        return me.bg_color;
    };
	this.get_columns_weight=function(){
		var me = this;
		return me.columns_weight;
	};
	this.get_items=function(){
		var me=this;
		return me.items;
	};
	this.init();
	return this;
};
/**
 * This is a header component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.header
 */
SJL.header=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    	this._component='header';        /*very important for creating id*/
	this.text=conf.text||'My header';
	this.text_align=conf.text_align||'left';
	this.header_size=conf.header_size||2; /* could be 1,2,3,4,5,6 (h1,h2,h3,h4,h5,h6) */
	this.font_weight=conf.font_weight||'normal';
	this.font_style=conf.font_style||'normal';
	this.font_name=conf.font_name||'';
    this.margin = conf.margin || {};
	this.color=conf.color||'black';
	this.data_value=conf.data_value||'';
	this.init=function(){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='header';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		/*create dom here*/
		/**********************************************************************/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		me.header_size=SJL.intVal(me.header_size);
		if(me.header_size<1 || me.header_size>6){
			me.header_size=2;
		}
		me.h_header=SJL.create_element('h'+me.header_size.toString(),{
			id:me.base_id + '-' + this._component + '-' +'h_header'
		});
		me.h_header.innerHTML = me.text;
		if(me.data_value){
			me.h_header.innerHTML = me.data_value;
		}
		
		SJL.set_style(me.dom,'text-align',((me.text_align=='left' || me.text_align=='center' || me.text_align=='right')?me.text_align:'left'));
		/*
		*	set font name ,style and weight here  
 		*/
		if(me.font_name){
			SJL.set_style(me.h_header,'font-family',me.font_name);
		}
		
		if(SJL.is_in_array(me.font_style,['normal','italic'])){
			SJL.set_style(me.h_header,'font-style',me.font_style);
		}
		if(SJL.is_in_array(me.font_weight,['normal','bold'])){
			SJL.set_style(me.h_header,'font-weight',me.font_weight);
		}
		if(me.color!=''){
			SJL.set_style(me.h_header,'color',me.color);
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		

		/*connect nodes together*/
		
		me.dom.appendChild(me.h_header);
		
		/****************************************************************************/
		
		/*I guess it's over !!!*/
		
	};
	this.get_text=function(){
		var me = this;
		if(me.data_value!=''){return me.data_value;}
		return me.text;
	};
	this.set_text=function(val){
		var me = this;
		var temp = document.getElementById(me.h_header.id);
		if(!temp){return;}
		temp.innerHTML = val.toString();
		me.text = val.toString();
		return;
	};
	this.set_text_align=function(val){
		var me = this;
		if (val =='left' || val=='right' || val == 'center' ){
			var temp = document.getElementById(me.dom.id);
			if(!temp){return;}
			SJL.set_style(temp,'text-align',val);
			me.text_align=val;
			return;
		}
		return false;
	};
	this.get_text_align=function(){
		var me = this ;
		return me.text_align;
	};
	this.get_header_size=function(){
		var me = this;
		return me.header_size;
	};
	this.set_header_size=function(val){
		var me = this;
		val = SJL.intVal(val);
		if(val<1 || val>6 ){return;}
		var temp = document.getElementById(me.h_header.id);
		if(!temp){return;}
		var data = temp.innerHTML;
		temp = document.getElementById(me.dom.id);
		if(!temp){return;}
		var h=SJL.create_element('h'+val.toString(),{
			id:me.id + '-' + 'h_header'
		});
		h.innerHTML = data;
		temp.innerHTML='';
		temp.appendChild(h);
		return temp;
	};
	this.get_font_name=function(){
		var me = this;
		return me.font_name;
	};
	this.get_font_style=function(){
		var me = this;
		return me.font_style;
	};
	this.get_font_weight=function(){
		var me = this;
		return me.font_weight;
	};	
	this.set_font_name=function(val){
		var me = this;
		var temp = document.getElementById(me.h_header.id);
		if(!temp){return;}
		SJL.set_style(temp,'font-family',val);
		me.font_name=val;
		return me;
	};
	this.set_font_style=function(val){
		var me = this;
		if(!SJL.is_in_array(val,['normal','italic'])){return false;}
		var temp = document.getElementById(me.h_header.id);
		if(!temp){return;}
		SJL.set_style(temp,'font-style',val);
		me.font_style=val;
		return me;
	};
	this.set_font_weight=function(val){
		var me = this;
		if(!SJL.is_in_array(val,['normal','bold'])){return false;}
		var temp = document.getElementById(me.h_header.id);
		if(!temp){return;}
		SJL.set_style(temp,'font-weight',val);
		me.font_weight=val;
		return me;
	};
	this.get_color=function(){
		var me=this;
		return me.color;
	};
	this.init();
	return this;
};
/**
 * This is a hyperlink component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.hyperlink
 */
SJL.hyperlink=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    	this._component='hyperlink';        /*very important for creating id*/
	this.text=conf.text||'link text';
	this.decoration=conf.decoration||'underline'; /* none , overline , underline */
	this.text_align=conf.text_align||'';
	this.href=conf.href||'#';
	this.edit_mode=conf.edit_mode||true;
	this.font_size=conf.font_size||'';
    this.margin = conf.margin || {};
	this.init=function(config){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='hyperlink';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}

		/**********************************************************************/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		
		me.a_hyperlink=SJL.create_element('a',{
			href:me.href,
			id:me.base_id + '-' + this._component + '-' +'a_hyperlink'
		});
		SJL.set_style(me.a_hyperlink,'text-decoration',me.decoration);
		SJL.set_html(me.a_hyperlink,me.text);
		if(me.edit_mode){
			
		}
		if (me.text_align=='center' || me.text_align=='right' || me.text_align=='left' ){
			SJL.set_style(me.dom,'text-align',me.text_align);
		}else{SJL.set_style(me.dom,'text-align','');}
		
		if(SJL.is_number(me.font_size)){
			SJL.set_style(me.a_hyperlink,'font-size',SJL.generate_px_percent(me.font_size));
		}else{
			SJL.set_style(me.a_hyperlink,'font-size','');
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		me.dom.appendChild(me.a_hyperlink);
		/*I guess it's over !!!*/
		
		if(SJL.is_object(me.signals)){
			for(var sig in me.signals){
				SJL.add_event(me.input_textbox,sig,me.signals[sig],[]);
			}
		}
		
	};
	this.get_text=function(){
		var me = this;
		return me.text;
	};
	this.get_href=function(){
		var me = this;
		return me.href;
	};
	this.get_decoration=function(){
		var me = this;
		return me.decoration;
	};
	this.get_text_align=function(){
		var me=this;
		return me.text_align;
	};
	this.get_font_size=function(){
		var me=this;
		return me.font_size;
	};
	this.init();
	return this;
};
/**
 * This is a iconpicker component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.iconpicker
 */
SJL.iconpicker = function(callback){
	this.callback = callback || function(){};
	var col = 16;
	this.selected_icon = false;
	var icon_array =[
		"fa-glass","fa-music","fa-search","fa-envelope-o","fa-heart","fa-star","fa-star-o","fa-user","fa-film","fa-th-large",
		"fa-th","fa-th-list","fa-check","fa-times","fa-search-plus","fa-search-minus","fa-power-off","fa-signal","fa-cog",
		"fa-trash-o","fa-home","fa-file-o","fa-clock-o","fa-road","fa-download","fa-arrow-circle-o-down","fa-arrow-circle-o-up",
		"fa-inbox","fa-play-circle-o","fa-repeat","fa-refresh","fa-list-alt","fa-lock","fa-flag","fa-headphones",
		"fa-volume-off","fa-volume-down","fa-volume-up","fa-qrcode","fa-barcode","fa-tag","fa-tags","fa-book","fa-bookmark",
		"fa-print","fa-camera","fa-font","fa-bold","fa-italic","fa-text-height","fa-text-width","fa-align-left",
		"fa-align-center","fa-align-right","fa-align-justify","fa-list","fa-outdent","fa-indent","fa-video-camera",
		"fa-picture-o","fa-pencil","fa-map-marker","fa-adjust","fa-tint","fa-pencil-square-o","fa-share-square-o",
		"fa-check-square-o","fa-arrows","fa-step-backward","fa-fast-backward","fa-backward","fa-play","fa-pause","fa-stop",
		"fa-forward","fa-fast-forward","fa-step-forward","fa-eject","fa-chevron-left","fa-chevron-right","fa-plus-circle",
		"fa-minus-circle","fa-times-circle","fa-check-circle","fa-question-circle","fa-info-circle","fa-crosshairs",
		"fa-times-circle-o","fa-check-circle-o","fa-ban","fa-arrow-left","fa-arrow-right","fa-arrow-up","fa-arrow-down",
		"fa-share","fa-expand","fa-compress","fa-plus","fa-minus","fa-asterisk","fa-exclamation-circle","fa-gift","fa-leaf",
		"fa-fire","fa-eye","fa-eye-slash","fa-exclamation-triangle","fa-plane","fa-calendar","fa-random","fa-comment",
		"fa-magnet","fa-chevron-up","fa-chevron-down","fa-retweet","fa-shopping-cart","fa-folder","fa-folder-open",
		"fa-arrows-v","fa-arrows-h","fa-bar-chart","fa-twitter-square","fa-facebook-square","fa-camera-retro","fa-key",
		"fa-cogs","fa-comments","fa-thumbs-o-up","fa-thumbs-o-down","fa-star-half","fa-heart-o","fa-sign-out",
		"fa-linkedin-square","fa-thumb-tack","fa-external-link","fa-sign-in","fa-trophy","fa-github-square","fa-upload",
		"fa-lemon-o","fa-phone","fa-square-o","fa-bookmark-o","fa-phone-square","fa-twitter","fa-facebook","fa-github",
		"fa-unlock","fa-credit-card","fa-rss","fa-hdd-o","fa-bullhorn","fa-bell","fa-certificate","fa-hand-o-right",
		"fa-hand-o-left","fa-hand-o-up","fa-hand-o-down","fa-arrow-circle-left","fa-arrow-circle-right","fa-arrow-circle-up",
		"fa-arrow-circle-down","fa-globe","fa-wrench","fa-tasks","fa-filter","fa-briefcase","fa-arrows-alt","fa-users",
		"fa-link","fa-cloud","fa-flask","fa-scissors","fa-files-o","fa-paperclip","fa-floppy-o","fa-square","fa-bars",
		"fa-list-ul","fa-list-ol","fa-strikethrough","fa-underline","fa-table","fa-magic","fa-truck","fa-pinterest",
		"fa-pinterest-square","fa-google-plus-square","fa-google-plus","fa-money","fa-caret-down","fa-caret-up",
		"fa-caret-left","fa-caret-right","fa-columns","fa-sort","fa-sort-desc","fa-sort-asc","fa-envelope","fa-linkedin",
		"fa-undo","fa-gavel","fa-tachometer","fa-comment-o","fa-comments-o","fa-bolt","fa-sitemap","fa-umbrella",
		"fa-clipboard","fa-lightbulb-o","fa-exchange","fa-cloud-download","fa-cloud-upload","fa-user-md","fa-stethoscope",
		"fa-suitcase","fa-bell-o","fa-coffee","fa-cutlery","fa-file-text-o","fa-building-o","fa-hospital-o","fa-ambulance",
		"fa-medkit","fa-fighter-jet","fa-beer","fa-h-square","fa-plus-square","fa-angle-double-left","fa-angle-double-right",
		"fa-angle-double-up","fa-angle-double-down","fa-angle-left","fa-angle-right","fa-angle-up","fa-angle-down",
		"fa-desktop","fa-laptop","fa-tablet","fa-mobile","fa-circle-o","fa-quote-left","fa-quote-right","fa-spinner",
		"fa-circle","fa-reply","fa-github-alt","fa-folder-o","fa-folder-open-o","fa-smile-o","fa-frown-o","fa-meh-o",
		"fa-gamepad","fa-keyboard-o","fa-flag-o","fa-flag-checkered","fa-terminal","fa-code","fa-reply-all","fa-star-half-o",
		"fa-location-arrow","fa-crop","fa-code-fork","fa-chain-broken","fa-question","fa-info","fa-exclamation",
		"fa-superscript","fa-subscript","fa-eraser","fa-puzzle-piece","fa-microphone","fa-microphone-slash","fa-shield",
		"fa-calendar-o","fa-fire-extinguisher","fa-rocket","fa-maxcdn","fa-chevron-circle-left","fa-chevron-circle-right",
		"fa-chevron-circle-up","fa-chevron-circle-down","fa-html5","fa-css3","fa-anchor","fa-unlock-alt","fa-bullseye",
		"fa-ellipsis-h","fa-ellipsis-v","fa-rss-square","fa-play-circle","fa-ticket","fa-minus-square","fa-minus-square-o",
		"fa-level-up","fa-level-down","fa-check-square","fa-pencil-square","fa-external-link-square","fa-share-square",
		"fa-compass","fa-caret-square-o-down","fa-caret-square-o-up","fa-caret-square-o-right","fa-eur","fa-gbp","fa-usd",
		"fa-inr","fa-jpy","fa-rub","fa-krw","fa-btc","fa-file","fa-file-text","fa-sort-alpha-asc","fa-sort-alpha-desc",
		"fa-sort-amount-asc","fa-sort-amount-desc","fa-sort-numeric-asc","fa-sort-numeric-desc","fa-thumbs-up","fa-thumbs-down",
		"fa-youtube-square","fa-youtube","fa-xing","fa-xing-square","fa-youtube-play","fa-dropbox","fa-stack-overflow",
		"fa-instagram","fa-flickr","fa-adn","fa-bitbucket","fa-bitbucket-square","fa-tumblr","fa-tumblr-square",
		"fa-long-arrow-down","fa-long-arrow-up","fa-long-arrow-left","fa-long-arrow-right","fa-apple","fa-windows",
		"fa-android","fa-linux","fa-dribbble","fa-skype","fa-foursquare","fa-trello","fa-female","fa-male","fa-gittip",
		"fa-sun-o","fa-moon-o","fa-archive","fa-bug","fa-vk","fa-weibo","fa-renren","fa-pagelines","fa-stack-exchange",
		"fa-arrow-circle-o-right","fa-arrow-circle-o-left","fa-caret-square-o-left","fa-dot-circle-o","fa-wheelchair",
		"fa-vimeo-square","fa-try","fa-plus-square-o","fa-space-shuttle","fa-slack","fa-envelope-square","fa-wordpress",
		"fa-openid","fa-university","fa-graduation-cap","fa-yahoo","fa-google","fa-reddit","fa-reddit-square",
		"fa-stumbleupon-circle","fa-stumbleupon","fa-delicious","fa-digg","fa-pied-piper","fa-pied-piper-alt","fa-drupal",
		"fa-joomla","fa-language","fa-fax","fa-building","fa-child","fa-paw","fa-spoon","fa-cube","fa-cubes","fa-behance",
		"fa-behance-square","fa-steam","fa-steam-square","fa-recycle","fa-car","fa-taxi","fa-tree","fa-spotify",
		"fa-deviantart","fa-soundcloud","fa-database","fa-file-pdf-o","fa-file-word-o","fa-file-excel-o",
		"fa-file-powerpoint-o","fa-file-image-o","fa-file-archive-o","fa-file-audio-o","fa-file-video-o","fa-file-code-o",
		"fa-vine","fa-codepen","fa-jsfiddle","fa-life-ring","fa-circle-o-notch","fa-rebel","fa-empire","fa-git-square",
		"fa-git","fa-hacker-news","fa-tencent-weibo","fa-qq","fa-weixin","fa-paper-plane","fa-paper-plane-o","fa-history",
		"fa-circle-thin","fa-header","fa-paragraph","fa-sliders","fa-share-alt","fa-share-alt-square","fa-bomb","fa-futbol-o",
		"fa-tty","fa-binoculars","fa-plug","fa-slideshare","fa-twitch","fa-yelp","fa-newspaper-o","fa-wifi","fa-calculator",
		"fa-paypal","fa-google-wallet","fa-cc-visa","fa-cc-mastercard","fa-cc-discover","fa-cc-amex","fa-cc-paypal",
		"fa-cc-stripe","fa-bell-slash","fa-bell-slash-o","fa-trash","fa-copyright","fa-at","fa-eyedropper","fa-paint-brush",
		"fa-birthday-cake","fa-area-chart","fa-pie-chart","fa-line-chart","fa-lastfm","fa-lastfm-square","fa-toggle-off",
		"fa-toggle-on","fa-bicycle","fa-bus","fa-ioxhost","fa-angellist","fa-cc","fa-ils","fa-meanpath"
	];
	var table = table=SJL.create_element('table',{id:'SJL-icon_picker'});
	var tr=SJL.create_element('tr',{});
	var td;
	var count=0;
	for(var i=1;i<icon_array.length+1;++i){
		var td=SJL.create_element('td',{});
		//var div=SJL.create_element('div',{});
		var itag = SJL.create_element('i',{});
		itag.add_css_class('sjl_fa');
		itag.add_css_class('sjl_fa-menu');
		itag.add_css_class(icon_array[i-1].toString());
		//SJL.dom(itag).append(itag);
		SJL.dom(itag).set_style('width','24px');
		SJL.dom(itag).set_style('text-align','center');
		SJL.dom(itag).set_style('height','24px');
		SJL.dom(itag).set_style('cursor','pointer');
		SJL.dom(itag).set_style('line-height','17px');
		SJL.dom(itag).set_style('border','1px solid black');
		SJL.dom(td).append(itag);
		SJL.dom(tr).append(td);
		if(i%col==0){
			SJL.dom(table).append(tr);
			tr=SJL.create_element('tr',{});
		}
	}
	SJL.dom(table).append(tr);
	var me = this;
	
	var content = "<div style='color:white;' class='sjl_message-info-header-div sjl_user_select_text_none'><span class='sjl_message-info-header-span'>";
	content = content + "&nbsp;&nbsp;<b>";
	content = content + '<span style="font-family:tahoma">select icon</span>';
	content = content + "</b></span></div>";
	content = content + "<div style='margin-top:10px;' class='sjl_user_select_text_none'><span>";
	content = content + '<div class="SJL-ICONPICKER-CONTENT" style="width:405px;overflow-x:hidden;max-height:300px;overflow-y:auto;">';
	content = content + table.outerHTML;
	content = content + '</div>';
	content = content + "</span></div>";
	content = content + "<div style=' text-align: center;margin-top:10px;'><span>";
	content = content + "<a class='sjl_btn sjl_btn-info sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close(" + this.selected_icon + ");'>";
	content = content + 'Ok';	
	content = content + "</a>";
	content = content + "&nbsp;&nbsp;&nbsp;&nbsp;";
	content = content + "<a class='sjl_btn sjl_btn-info sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close(false);'>";
	content = content + 'Cancel';
	content = content + "</a>";
	content = content + "</div></span>";
	SJL.modal.open({
		content: content,
		draggable:true,
		hideClose:true,
		lock:true,
		openCallback:function(){
			SJL.dom('.SJL-ICONPICKER-CONTENT table tr').get_children('td').get_children('i').click(function(e){
				me.selected_icon = SJL.trim(e.target.className);
				me.selected_icon = me.selected_icon.split(' ')[2];
				SJL.dom('.SJL-ICONPICKER-CONTENT table tr').get_children('td').get_children('i').set_style('border','1px solid black');
				SJL.dom(e.target).set_style('border',"5px solid red");
			});
			
		},
		closeCallback:function(){
			me.callback.apply(this,[me.selected_icon]);
		}
	});
};
/**
 * This is a image component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.image
 */
SJL.image=function(conf){
	conf = conf ||{};
	SJL.add_config(this,conf);
    	this._component='image';        /*very important for creating id*/
	this.source = conf.source || '';
	this.image_align = conf.image_align || ''; /*left right center default*/
	this.title = conf.title || '';
	this.width = conf.width || '';
	this.height = conf.height || '';
	this.alt = conf.alt || 'Image here';
	this.shape = conf.shape || 'none'; /*none,rounded,circle,thumbnail*/
	this.margin = conf.margin || {};
	this.padding = conf.padding || {};
	this.init=function(){
		var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='image';    /*very fuckin important too!!!!(be local for sure)*/
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		me.dom = SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		me.img_image = SJL.create_element('img',{
			id:me.base_id + '-' + this._component + '-' + 'img_image'
		});
		me.img_image.add_css_class('sjl_img-responsive');
		if(me.alt!=''){
			me.img_image.alt = me.alt;
		}
		if(me.title !=''){
			me.img_image.title = me.title;
		}
		if(me.shape !='' && this.shape != 'none'){
			me.img_image.add_css_class('sjl_img-' + me.shape);
			
		}
		if(me.source != ''){
			me.img_image.src = me.source;
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}
		if(me.image_align != ''){
			if(me.image_align == 'center'){
				SJL.set_style(me.img_image,'margin-left','auto');
				SJL.set_style(me.img_image,'margin-right','auto');
			}else if(me.image_align == 'right'){
				SJL.set_style(me.img_image,'margin-left','auto');
			}else if(me.image_align == 'left'){
				SJL.set_style(me.img_image,'margin-right','auto');
			}
		}
		if(me.height !=''){
			SJL.set_style(me.img_image,'height',SJL.generate_px_percent(me.height));
		}
		if(me.width !=''){
			SJL.set_style(me.img_image,'width',SJL.generate_px_percent(me.width));
		}
		me.dom.appendChild(me.img_image);

	};
	this.get_width=function(){
		var me = this;
		return me.width;
	};
	this.get_height=function(){
		var me = this;
		return me.height;
	};
	this.get_title=function(){
		var me = this;
		return me.title;
	};
	this.get_source=function(){
		var me = this;
		return me.source;
	};
	this.get_alt= function(){
		var  me = this;
		return me.alt;
	};
	this.get_image_align= function(){
		var  me = this;
		return me.image_align;
	};
	this.get_shape=function(){
		var me = this;
		return me.shape;
	};
	this.init();
	return this;
};
/**
 * This is a label component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.label
 */
SJL.label=function(conf){
	conf = conf ||{};
	SJL.add_config(this,conf);
   	this._component='label';       /*very important for creating id*/
	this.text=conf.text||'My Label';
	this.text_align=conf.text_align||'';
	this.font_weight=conf.font_weight||'normal'; /*normal or bold*/
	this.font_style=conf.font_style||'normal'; /*normal of italic*/
	this.required=(conf.required!=true)?false:true;
	this.seperator=conf.seperator||"";	/*could be only one character*/
	this.label_width=conf.label_width||12;	/*a number between 1 and 12 */
	this.font_name=conf.font_name||'';
    this.margin = conf.margin || {};
	this.color=conf.color||'black';
	this.font_size=conf.font_size||'';
	this.required_symbol=conf.required_symbol||'*'; /*could be any character*/
	this.display=conf.display||'block';	/*could be inline (add col-sm-2 class to dom) or block*/
	this.init=function(){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='label';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		me.dom = SJL.create_element('div',{
			id:me.base_id + '-' + this._component +'-' + 'dom'
		});
		me.label_label = SJL.create_element('label',{
            		id:me.base_id+ '-' + this._component +'-' +'label_label'
        	});
		me.div_label=SJL.create_element('div',{
            		id:me.base_id + '-' + this._component +'-' +'div_label'
        	});
		if(me.display=='inline'){
			me.dom.add_css_class('sjl_col-sm-'+me.label_width.toString());
		}else if(me.display=='block'){
			me.dom.add_css_class('sjl_col-sm-'+'12');
		}
		me.label_label.add_css_class('sjl_control-label');
		
		/*set font weight and font style here */
		if(me.font_weight=='normal' || me.font_weight=='bold'){
			SJL.set_style(me.label_label,'font-weight',me.font_weight);
		}
		if(me.font_sytle=='normal' || me.font_style=='italic'){
			SJL.set_style(me.label_label,'font-style',me.font_style);
		}
		/*set font name and font size here*/
		if(me.font_name!=''){
			SJL.set_style(me.label_label,'font-family',me.font_name);
		}
		if(me.font_size!=''){
			SJL.set_style(me.label_label,'font-size',SJL.generate_px_percent(me.font_size));
		}
		if(me.color!=''){  
			SJL.set_style(me.label_label,'color',me.color);
		}
		if (me.text_align=='center' || me.text_align=='right' || me.text_align=='left' ){
			SJL.set_style(me.div_label,'text-align',me.text_align);
		}else{SJL.set_style(me.div_label,'text-align','');}
			
		me.label_span_label = SJL.create_element('span',{
            		id:me.base_id+ '-' + this._component +'-' +'label_span_label'
        	});
		//todo
		//add required_symbol and is_required field check
		me.required_span_label = SJL.create_element('span',{
			id:me.base_id + '-' + this._component +'-' +'required_span_label'		
		});
		me.required_span_label.add_css_class('sjl-textbox-required');
		SJL.set_html(me.required_span_label,me.required_symbol);
		if(!me.required){
			SJL.set_style(me.required_span_label,'display','none');
		}
		//end of require shit
		//start of seperator

		me.seperator_span_label = SJL.create_element('span',{
			id:me.base_id + '-' + this._component +'-' +'seperator_span_label'		
		});
		me.seperator_span_label.add_css_class('sjl-textbox-seperator');
		SJL.set_html(me.seperator_span_label,me.seperator);

		

		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		SJL.set_html(me.label_span_label,me.text);
		
		me.label_label.appendChild(me.label_span_label);

		me.label_label.appendChild(me.seperator_span_label);
		me.label_label.appendChild(me.required_span_label);
		
		me.dom.appendChild(me.div_label);
		me.div_label.appendChild(me.label_label);
		
		
	};
	this.set_label=function(val){
		throw new Error ("not implemented yet");
	};
	this.get_label=function(){
		var me = this;
		return me.text;
	};
	this.set_padding=function(side,val){
		var me=this;
		val = val || 0;
		if(!side){return;}
		side=side.toLowerCase();
		if(side!='left' && side!='right' && side!='bottom' && side!='top'){return;}
		side=SJL.ucfirst(side);
		val = SJL.generate_px_percent(val);
		var temp = SJL.dom("#"+me.div_label.id);
		if(!temp){if(SJL.debug_mode){SJL.logger("SJL.label:set_padding","can not get DOM by Id");}return -1;}
		temp.each(function(){this.style["margin"+side]=val;});
		return temp;
	};
	this.set_margin=function(side,val){
		var me=this;
		val = val || 0;
		if(!side){return;}
		side=side.toLowerCase();
		if(side!='left' && side!='right' && side!='bottom' && side!='top'){return;}
		side=SJL.ucfirst(side);
		val = SJL.generate_px_percent(val);
		var temp = SJL.dom("#"+me.div_label.id);
		if(!temp){if(SJL.debug_mode){SJL.logger("SJL.label:set_margin","can not get DOM by Id");}return -1;}
		temp.each(function(){this.style["margin"+side]=val;});
		return temp;
	};
	this.set_text=function(val){
		var me = this;
		return me.set_label(val);
	};
	this.get_text=function(){
		var me = this;
		return me.get_label();
	};
	this.get_required_symbol=function(){
		var me=this;
		return me.required_symbol;
	};
	this.get_seperator=function(){
		var me=this;
		return me.seperator;
	};
	this.set_seperator=function(val){
		throw new Error('not implemented yet');
	};
	this.set_required_symbol=function(val){
		throw new Error('not implemented yet');
	};
	this.get_font_weight=function(){
		var me = this;
		return me.font_weight;
	};
	this.get_font_style=function(){
		var me = this;
		return me.font_style;
	};
	this.set_font_style=function(val){ /*normal or italic*/
		var me = this;
		if(SJL.is_in_array(val,['normal','italic'])){
			var temp = document.getElementById(me.label_label.id);
			if(!temp){return;}
			SJL.set_style(temp,'font-style',val);
			me.font_style=val;
			return me;
		}
		return false;
	};
	this.set_font_weight=function(val){
		var me = this;
		if(SJL.is_in_array(val,['normal','bold'])){
			var temp = document.getElementById(me.label_label.id);
			if(!temp){return;}
			SJL.set_style(temp,'font-weight',val);
			me.font_weight=val;
			return me;
		}
		return false;
	};
	this.set_font_size=function(val){
		var me = this;
		val=SJL.intVal(val);
		var temp = document.getElementById(me.label_label.id);
		if(!temp){return;}
		val=SJL.generate_px_percent(val);
		SJL.set_style(temp,'font-size',val);
		me.font_size=SJL.intVal(val);
		return me;
	};
	this.set_font_name=function(val){
		var me = this;		
		var temp = document.getElementById(me.label_label.id);
		if(!temp){return;}
		SJL.set_style(temp,'font-family',val);
		me.font_name=val;
		return me;
	};
	this.get_font_size=function(val){
		var me = this;
		return me.font_size;
	};
	this.get_font_name=function(val){
		var me = this;
		return me.font_name;
	};
	this.get_color=function(){
		var me= this;
		return me.color;
	};
	this.init();
	return this;
};
/**
 * This is a message component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.message
 */
SJL.message={
	alert:function(title,body,btn,callback){
		title = title || "Warning";
		body = body || "";
		btn = btn || "OK";
		callback = callback || function(){};
		SJL.modal.open({
			content:"<div class='sjl_message-alert-header-div sjl_user_select_text_none'><span class='sjl_message-alert-header-span'>" + title + "</span></div>"+"<div style='margin-top:10px;' class='sjl_user_select_text_none'><span>" + body + "</span></div>" + "<div style=' text-align: center;margin-top:10px;'><span><a class='sjl_btn sjl_btn-warning sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close();'>" + btn + "</a></div></span>",
			hideClose:true,
			closeCallback:callback,
			lock:true
		});
	},
	info:function(title,body,btn,callback){
		title = title || "Info";
		body = body || "";
		btn = btn || "OK";
		callback = callback || function(){};
		SJL.modal.open({
			content:"<div class='sjl_message-info-header-div sjl_user_select_text_none'><span class='sjl_message-alert-header-span'>" + title + "</span></div>"+"<div style='margin-top:10px;' class='sjl_user_select_text_none'><span>" + body + "</span></div>" + "<div style=' text-align: center;margin-top:10px;'><span><a class='sjl_btn sjl_btn-info sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close();'>" + btn + "</a></div></span>",
			hideClose:true,
			closeCallback:callback,
			lock:true
		});
		
	},
	error:function(title,body,btn,callback){
		title = title || "Error";
		body = body || "";
		btn = btn || "OK";
		callback = callback || function(){};
		SJL.modal.open({
			content:"<div class='sjl_message-error-header-div sjl_user_select_text_none'><span class='sjl_message-alert-header-span'>" + title + "</span></div>"+"<div style='margin-top:10px;' class='sjl_user_select_text_none'><span>" + body + "</span></div>" + "<div style=' text-align: center;margin-top:10px;'><span><a class='sjl_btn sjl_btn-danger sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close();'>" + btn + "</a></div></span>",
			hideClose:true,
			closeCallback:callback,
			lock:true
		});
	
	},
	success:function(title,body,btn,callback){
		title = title || "Success";
		body = body || "";
		btn = btn || "OK";
		callback = callback || function(){};
		SJL.modal.open({
			content:"<div class='sjl_message-success-header-div sjl_user_select_text_none'><span class='sjl_message-alert-header-span'>" + title + "</span></div>"+"<div style='margin-top:10px;' class='sjl_user_select_text_none'><span>" + body + "</span></div>" + "<div style=' text-align: center;margin-top:10px;'><span><a class='sjl_btn sjl_btn-success sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close();'>" + btn + "</a></div></span>",
			hideClose:true,
			closeCallback:callback,
			lock:true
		});
	},
	confirm:function(title,body,btn,callback){
		title = title || "Confirmation";
		body = body || "";
		btn = btn || "yesno";
		callback = callback || function(){};
		var btn_confirm;
		var btn_cancel;
		if(btn =='yesno'){
			btn_confirm = 'Yes';
			btn_cancel = 'No';
		}else if(btn == "okcancel"){
			btn_confirm = "Ok";
			btn_cancel = "Cancel";
		}else{
			btn_confirm = 'Yes';
			btn_cancel = 'No';
		}
		var content = "<div style='color:white;' class='sjl_message-info-header-div sjl_user_select_text_none'><span class='sjl_message-info-header-span'>";
		content = content + "&nbsp;&nbsp;<b>";
		content = content + title;
		content = content + "</b></span></div>";
		content = content + "<div style='margin-top:10px;' class='sjl_user_select_text_none'><span>";
		content = content + '<div style="">';
		content = content + body;
		content = content + '</div>';
		content = content + "</span></div>";
		content = content + "<div style=' text-align: center;margin-top:10px;'><span>";
		content = content + "<a class='sjl_btn sjl_btn-info sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close(true);'>";
		content = content + btn_confirm;	
		content = content + "</a>";
		content = content + "&nbsp;&nbsp;&nbsp;&nbsp;";
		content = content + "<a class='sjl_btn sjl_btn-info sjl_btn-sm' style='padding-bottom: 0;padding-top: 0;' onclick='SJL.modal.close(false);'>";
		content = content + btn_cancel;
		content = content + "</a>";
		content = content + "</div></span>";
		SJL.modal.open({
			content:content,
			hideClose:true,
			lock:true,
			closeCallback:function(result){
				callback.apply(this,[result]);
			}
		});
	}
};
/**
 * This is a paragraph component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.paragraph
 */
SJL.paragraph=function(conf){
	conf = conf ||{};
	SJL.add_config(this,conf);
	this._component='paragraph'; 
	this.text=conf.text||'Your Paragraph here...';
	this.text_color=conf.text_color||'';
	this.text_class=conf.text_class||'';
	this.bg_color_class=conf.bg_color_class||'';
	this.text_align=conf.text_align ||'left';
	this.font_name=conf.font_name||'';
	this.font_size=conf.font_size||'';
	this.margin=conf.margin||{};
	this.padding = conf.padding||{};
	this.init=function(){
        var me=this;
        me.base_id=SJL.generate_id(conf.id);
        var class_name='paragraph';   
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		if(me.padding_top){me.padding.top=me.padding_top;}
		if(me.padding_bottom){me.padding.bottom=me.padding_bottom;}
		if(me.padding_left){me.padding.left=me.padding_left;}
		if(me.padding_right){me.padding.right=me.padding_right;}


		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		
		if (me.text_align=='center' || me.text_align=='right' || me.text_align=='left' ){
			SJL.set_style(me.dom,'text-align',me.text_align);
		}else{SJL.set_style(me.dom,'text-align','');}
		
		me.p_paragraph=SJL.create_element('p',{
			id:me.base_id + '-' + this._component + '-' + 'p_paragraph'
		});
		SJL.set_html(me.p_paragraph,me.text);
		if(me.text_class){
			me.p_paragraph.add_css_class(me.text_class);
		}
		if(me.bg_color_class){
			me.p_paragraph.add_css_class(me.bg_color_class);
		}
		if(me.text_color){
			SJL.set_style(me.p_paragraph,'color',me.text_color);
		}else{
			SJL.remove_style(me.p_paragraph,'text-color');
		}
		if(me.font_name){
			SJL.set_style(me.p_paragraph,'font-family',me.font_name);
		}else{
			SJL.remove_style(me.p_paragraph,'font-family');
		}
		if(SJL.is_number(me.font_size)){
			SJL.set_style(me.p_paragraph,'font-size',SJL.generate_px_percent(me.font_size));
		}else{
			SJL.remove_style(me.p_paragraph,'font-size');
		}

		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.margin[val]));
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'padding'+SJL.ucfirst(val),SJL.generate_px_percent(me.padding[val]));
				}
			}
		}
		me.dom.appendChild(me.p_paragraph);
	};

	this.get_text=function(){
		var me=this;
		return me.text;
	};
	this.set_html=function(data){
		var me=this;
		var temp=SJL.dom('#'+me.p_paragraph.id);
		if(!temp){return;}
		temp.set_html(data);
		me.text=data;
		return me;
	};
	this.set_text=function(data){
		var me=this;
		var temp=SJL.dom('#'+me.p_paragraph.id);
		if(!temp){return;}
		temp.set_text(data);
		me.text=data;
		return me;
	};
	this.set_text_align=function(al){
		var me=this;
		var temp=SJL.dom('#'+me.dom.id);
		if(!temp){return;}
		temp.set_style('text-align',al);
		me.text_align=al;
		return me;
	};
	this.get_text_align=function(){
		var me=this;
		return me.text_align;
	};
	this.get_text_color=function(){
		var me=this;
		return me.text_color;
	};
	this.set_text_color=function(c){
		var me=this;
		var temp=SJL.dom('#'+me.p_paragraph.id);
		if(!temp){return;}
		temp.set_style('text-color',c);
		me.text_color=c;
		return me;
	};
	this.get_text_class=function(){
		var me=this;
		return me.text_class;
	};
	this.get_bg_color_class=function(){
		var me=this;
		return me.bg_color_class;
	};
	this.get_font_name=function(){
		var me=this;
		return me.font_name;
	};
	this.get_font_size=function(){
		var me=this;
		return me.font_size;
	};
	this.init();	
	return this;
};
/**
 * This is a radiobox component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.radiobox
 */
SJL.radiobox=function(conf){
    
	conf=conf||{};
	SJL.add_config(this,conf);
	this._component='radiobox';       /*very important for creating id*/
	this.items = conf.items || [{name:"no-name",value:'no_value',disabled:false,checked:false,text:'default'}];
	this.margin=conf.margin||{};	/*could have px postfix or not (doesn't matter since we fix it in generate_margin function*/
	this.padding=conf.padding||{};	/*could have px postfix or not (doesn't matter since we fix it in generate_margin function*/
	this.init=function(){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='radiobox';    /*very fuckin important too!!!!(make sure to use 'var' to make class_name variable local.)*/
		me.dom = SJL.create_element('div',{
            id:me.base_id + '-' + this._component + '-' +'dom'
       	});
		for(var i=0;i<me.items.length;++i){
			me.label_radiobox = SJL.create_element('label',{
                id:me.base_id+ '-' + this._component + '-' +'label_radiobox-'+i.toString()
        	});
			me.label_radiobox.add_css_class('sjl_radio-inline');
			me.input_radiobox = SJL.create_element('input',{
            	id:me.base_id + '-' + this._component + '-' +'input_radiobox-'+i.toString(),
				type:'radio'
        	});
			if(me.items[i].checked){
				SJL.set_attr(me.input_radiobox,'checked',true);
			}
			me.input_radiobox.disabled = me.items[i].disabled?true :false;
			if(me.items[i].name!=""){me.input_radiobox.name=me.items[i].name;}
			if(me.items[i].value!=""){me.input_radiobox.value=me.items[i].value;}
			me.span_radiobox = SJL.create_element('span',{
				id:me.base_id+ '-' + this._component + '-' +'span_radiobox-' + i.toString() 
			});
			SJL.set_html(me.span_radiobox,me.items[i].text || '');
			me.label_radiobox.appendChild(me.input_radiobox);
			me.label_radiobox.appendChild(me.span_radiobox);
			me.dom.appendChild(me.label_radiobox);
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}
	};
    
	this.is_checked=function(){
	};
	this.is_disabled=function(){
	};
	this.set_check=function(val){
	};
	this.set_disabled=function(val){
	};
	this.get_label=function(){
	};
	this.set_label=function(val){
	};
	this.get_name=function(){
	};
	this.get_text=function(){
	};
	this.get_value=function(){
	};
	this.init();
	return this;
};
/**
 * This is a rating component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.rating
 */
SJL.rating=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
	this._component='rating';
	this.name=conf.name||"sjl_rating";
	this.font_size = conf.font_size || '';
	this.text = conf.text || 'Rating : ';
	this.has_text = (conf.has_text == false)?false:true;
    this.margin=conf.margin||{};
	this.text_color = conf.text_color||'';
	this.init=function(){
		var me=this;
		me.base_id=SJL.generate_id(conf.id);
		var class_name='rating';
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		me.dom = SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' +'dom'
		});
		/*label for rating*/
		
		me.span_rating = SJL.create_element('span',{
			id:me.base_id + '-' + this._component + '-' +'span_rating'	
		});
		SJL.set_html(me.span_rating,me.text);
		if(me.text_color && me.text_color!= ''){
			SJL.set_style(me.span_rating,'color',me.text_color);
		}
		if(!me.has_text){
			SJL.set_style(me.span_rating,'display','none');
		}
		me.span_rating.add_css_class('sjl-rating-text');
		if(me.font_size==''){me.font_size='1em';}
		var cls_suffix = '1em';
		if(me.font_size=='1.25em'){cls_suffix = '125em';}
		if(me.font_size=='1.5em'){cls_suffix = '15em';}
		if(me.font_size=='2em'){cls_suffix = '2em';}
		if(me.font_size=='2.5em'){cls_suffix = '25em';}
		me.span_rating.add_css_class('sjl-rating-text-'+cls_suffix.toString());

		/*add for wrap dom*/
		SJL.set_style(me.dom,'display','inline-block');
		me.fieldset_rating = SJL.create_element('fieldset',{
			id:me.base_id + '-' + this._component + '-' +'fieldset_rating'
		});
		me.fieldset_rating.add_css_class('sjl-rating');
		/*now create 1 to 5 rating in loop*/
		for (var i=5;i>0;i=i-0.5){
			var rating_input = SJL.create_element('input',{
				name:me.name,
				type:'radio',
				id:me.base_id + '-' + this._component + '-' +'input_rating-' +(5.5-i).toString(),
				value:(i).toString()
			});
			var rating_label = SJL.create_element('label',{
				title:i.toString() + ' stars'
			});
			if(me.font_size && me.font_size!=''){
				SJL.set_style(rating_label,'font-size',me.font_size);
			}
			SJL.set_attr(rating_label,'for',me.base_id + '-' + this._component + '-' +'input_rating-' + (5.5-i).toString());
			if(SJL.intVal(i)==SJL.floatVal(i)){
				rating_label.add_css_class('sjl-full');
			}else{
				rating_label.add_css_class('sjl-half');
			}
			me.fieldset_rating.appendChild(rating_input);
			me.fieldset_rating.appendChild(rating_label);
		}
        if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.margin[val]));
				}
			}
		}
		me.dom.appendChild(me.span_rating);
		me.dom.appendChild(me.fieldset_rating);
		
	};
	this.get_name = function(){
		var me = this;
		return me.name;
	};
	this.get_font_size = function(){
		var me = this;
		return me.font_size;
	};
	this.get_text=function(){
		var me = this;
		return me.text;
	};
	this.get_has_text=function(){
		var me = this;
		return me.has_text;
	};
	this.get_text_color=function(){
		var me = this;
		return me.text_color;
	};
	this.get_rate=function(){
		var me = this;
		var temp = SJL.dom("#" + me.dom.id + " input[name]").serialize();
		temp=JSON.parse(temp);
		if(temp[me.get_name()]){return temp[me.get_name()];}else{return undefined;}
	};
	this.init();
	return this;
};
/**
 * This is a rightclickmenu component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.rightclickmenu
 */
SJL.rightclickmenu=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    this._component='rightclickmenu';	/*very important for creating id*/
	this.menu_parent = conf.menu_parent || document.body;
	
	this.items = conf.items || [];
	this.init=function(){
		var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='rightclickmenu';    /*very fuckin important too!!!!(make sure to use 'var' to make class_name variable local.)*/
		me.dom = SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		me.dom.add_css_class('sjl-context-menu');
		me.dom.add_css_class('sjl-context-menu-dom');
		if(!SJL.is_window(me.menu_parent) && !SJL.is_document(me.menu_parent) && !SJL.is_dom(me.menu_parent)){
			throw new Error('rightclickmenu : wrong parent element');return;
		}
		for(var i=0;i<me.items.length;++i){
			if(!SJL.is_object(me.items[i])){continue;}
			var item_div = SJL.create_element('div',{
				id:me.base_id + '-' + this._component + '-' + 'item-div-' + i.toString()
			});
			item_div.add_css_class('sjl-context-menu-items');
			var item_i = SJL.create_element('i',{
				id:me.base_id + '-' + this._component + '-' + 'item-i-' + i.toString()
			});
			item_i.add_css_class('sjl_fa');
			if(me.items[i].icon){
				item_i.add_css_class(me.items[i].icon); /*only font-awsome code*/
				item_i.add_css_class('sjl-context-menu-items-i');
			}
			var item_a = SJL.create_element('a',{
				id:me.base_id + '-' + this._component + '-' + 'item-a-' + i.toString()	
			});
			item_a.add_css_class('sjl-context-menu-items-a');
			if(!SJL.is_function(me.items[i].callback)){me.items[i].callback = function(){};console.log('fuckkkk');}
			SJL.dom(item_div).click(me.items[i].callback,[me]);
			SJL.dom(item_a).set_html(me.items[i].text || '');
			item_div.appendChild(item_i);
			item_div.appendChild(item_a);
			me.dom.appendChild(item_div);
		}
		document.body.appendChild(me.dom);
		
		SJL.dom(me.menu_parent).contextmenu(function(e){
			e.preventDefault();
			SJL.dom('.sjl-context-menu').set_style('left',e.clientX + 'px');
			SJL.dom('.sjl-context-menu').set_style('top',e.clientY + 'px');
			SJL.dom('.sjl-context-menu').set_style('display','block');	
			var func_ref = SJL.add_event(document,'keydown',function(e){
				if(e.key=="Escape" || e.key =='Esc' || e.keyCode == 27){
					SJL.dom(".sjl-context-menu").hide();
				}
				SJL.remove_event(document,'keydown',func_ref);	
			},[]);	
			var doc_click_ref = SJL.add_event(document,'click',function(){
				SJL.dom(".sjl-context-menu").hide();
				SJL.remove_event(document,'click',doc_click_ref);
			},[]);
		});
	};
	this.add_item=function(item){
		var me = this;
		if(!SJL.is_object(item)){
			throw new Error('rightclickmenu : add_item : wrong input argument');return;
		}
		item.callback = item.callback || function(){};
		item.text = item.text || '';
		item.icon = item.icon || '';
		var temp = SJL.dom('div.sjl-context-menu.sjl-context-menu-dom');
		var i = temp.get_children().length;
		if(temp.length==0){return;}
		var item_div = SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'item-div-' + i.toString()
		});
		item_div.add_css_class('sjl-context-menu-items');
		var item_i = SJL.create_element('i',{
			id:me.base_id + '-' + this._component + '-' + 'item-i-' + i.toString()
		});
		item_i.add_css_class('sjl_fa');
		if(item.icon){
			item_i.add_css_class(item.icon); /*only font-awsome code*/
			item_i.add_css_class('sjl-context-menu-items-i');
		}
		var item_a = SJL.create_element('a',{
			id:me.base_id + '-' + this._component + '-' + 'item-a-' + i.toString()	
		});
		item_a.add_css_class('sjl-context-menu-items-a');
		SJL.dom(item_div).click(item.callback,[me]);
		SJL.dom(item_a).set_html(item.text);
		item_div.appendChild(item_i);
		item_div.appendChild(item_a);
		temp.append(item_div);
		return me;
	};
	this.init();
	return this;
};
/**
 * This is a sectionbreaker component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.sectionbreaker
 */
SJL.sectionbreaker=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    this._component='sectionbreaker';        /*very important for creating id*/
	this.input_size=conf.input_size||'large';  /*could be  mini,small,medium,large,xlarge,xxlarge,xxxlarge*/
	this.edit_mode=conf.edit_mode||false;
	this.text_align=conf.text_align||'left';  /*could be center left or right*/
	this.width=conf.width||12;/*could be 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32*/
	this.double_line=conf.double_line||false; /*could be true or false*/
	this.margin=conf.margin||{};
    this.init=function(){
        var me=this;
		me.base_id=SJL.generate_id(conf.id);
        var class_name='sectionbreaker';    /*very fuckin important too!!!!(be local for sure)*/
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		/*create dom here*/
		/**********************************************************************/
		me.div_sectionbreaker=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'div_sectionbreaker'
		});
		
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		me.div_sectionbreaker.add_css_class('sjl_hr');
		if(me.double_line){me.div_sectionbreaker.add_css_class('sjl_hr-double');}
		me.width=SJL.intVal(me.width);
		if(me.width!=0 && me.width%2==0 && me.width>=2 && me.width<=32){me.div_sectionbreaker.add_css_class('sjl_hr-'+me.width.toString());}
		if(me.input_size){
			me.div_sectionbreaker.add_css_class('sjl_input-'+me.input_size);
		}
		
		/*if edit mode is enabled*/
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.margin[val]));
				}
			}
		}
		 /*end of edit mode */
		if(SJL.is_in_array(me.text_align,['left','right','center'])){
			if(SJL.is_in_array(me.text_align,['left','right'])){
				//me.div_sectionbreaker.style.cssFloat=me.text_align;
				/*not working*/
			}else{
				SJL.set_style(me.div_sectionbreaker,'margin',SJL.generate_margin(me.width) + ' auto');
			}
		}else{
			SJL.set_style(me.div_sectionbreaker,'float','');
			SJL.set_style(me.div_sectionbreaker,'margin','');
		}
		/*connect nodes together*/
		
		me.dom.appendChild(me.div_sectionbreaker);
		/****************************************************************************/
		
		/*I guess it's over !!!*/
		
	};
	this.get_input_size=function(){
		var me = this;
		return me.input_size;
	};
	this.set_input_size=function(data){
		var me = this;
		var arr=['mini','small','medium','large','xlarge','xxlarge','xxxlarge'];
		if(!SJL.is_in_array(data,arr)){
			return false;
		}
		var temp=SJL.dom('#'+me.div_sectionbreaker.id);
		arr.every(function(a){
			temp.remove_css_class('sjl_input-'+a);
		});
		temp.add_css_class('sjl_input-'+data);
		me.input_size=data;
		return me;
	};
	this.get_width=function(){
		var me = this;
		return me.width;
	};
	this.get_text_align=function(){
		var me = this;
		return me.text_align;
	};
	this.get_double_line=function(){
		var me =this;
		return me.double_line;
	};
	this.init();
	return this;
};
/**
 * This is a slider component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.slider
 */
SJL.slider=function(conf){
	conf = conf ||{};
	SJL.add_config(this,conf);
    	this._component='slider';        /*very important for creating id*/
	this.name = conf.name || '';
	this.step = SJL.intVal(conf.step) || '1';
	this.max = SJL.intVal(conf.max) || '100';
	this.min = SJL.intVal(conf.min) || '0';
	this.data_value = SJL.intVal(conf.data_value) || '';
	this.margin = conf.margin || {};
	this.width = conf.width || '';
	this.padding = conf.padding || {};
	this.init=function(){
		var me=this;
		me.base_id=SJL.generate_id(conf.id);
        	var class_name='slider';    /*very fuckin important too!!!!(be local for sure)*/
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		me.dom = SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		/*SJL.set_style(me.dom,'display','inline-block');*/
		me.input_slider = SJL.create_element('input',{
			id:me.base_id + '-' + this._component + '-' + 'input_slider',
			max:me.max,
			min:me.min,
			value:me.data_value,
			step:me.step,
			name:me.name,
			type:'range'
		});
		if(me.width != ''){
			SJL.set_style(me.input_slider,'width',SJL.generate_px_percent(me.width));
		}
		if(SJL.is_object(me.signals)){
			for(var sig in me.signals){
				SJL.add_event(me.input_slider,sig,me.signals[sig],[me.input_slider]);
			}
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}
		me.dom.appendChild(me.input_slider);
	};
	this.get_value=function(){
		var me = this;
		return me.data_value;
	};
	this.init();
	return this;
};
/**
 * This is a textarea component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.textarea
 */
SJL.textarea=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
    	this._component='textarea';        /*very important for creating id*/
	this.text=conf.text||'My Label(textarea)';
	this.text_align=conf.text_align||'';
	this.num_of_rows=conf.num_of_rows||3;
	this.name=conf.name||"";
	this.input_size=conf.input_size||'';  /*could be  mini,small,medium,large,xlarge,xxlarge,xxxlarge*/
	this.place_holder=conf.place_holder||'Enter your text here...';
	this.required=(conf.required==true)?true:false;
	this.data_value=conf.data_value||'';
	this.seperator=conf.seperator||':';
	this.display=conf.display||'block';
	this.normal_color=conf.normal_color||'white';
	this.required_symbol=conf.required_symbol||'*';
	this.label_width=conf.label_width||2;  /* a number between 1 and 12 */
	this.label_margin=conf.label_margin||{};
	this.input_margin=conf.input_margin||{};
	this.signals=conf.signals||{};
	this.margin=conf.margin||{};
	this.padding=conf.padding||{};
	this.validity_func=conf.validity_func||null;
	this.validity_color=conf.validity_color||'#FF7700';
	this.validity_message=conf.validity_message||'Wrong data entry...';
	this.input_bg_color=conf.input_bg_color||'';
	this.input_color = conf.input_color || '';
	this.input_bg_gradient=conf.input_bg_gradient||'';
	this.has_label = (conf.has_label!=false)?true:false;
	this.init=function(){
        	var me=this;
		me.base_id=SJL.generate_id(conf.id);
        	var class_name='textarea';    /*very fuckin important too!!!!(be local for sure)*/
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		if(me.has_label == false){me.label_width = 0;}

		me.label =new SJL.label({
			text:me.text,
			required:me.required,
			required_symbol:me.required_symbol,
			text_align:me.text_align,
			seperator:me.seperator,
			display:me.display||'inline',
			label_width:me.label_width,
			font_name:me.font_name||'',
			font_style:me.font_style||'normal',
			font_weight:me.font_weight||'normal',
			font_size:me.font_size||'',
			color:me.color||'black'
		});
		
		//if has_label is true or false
		if(!me.has_label){
			SJL.dom(me.label.dom).hide();	
		}

		if(SJL.is_object(me.label_margin)){
			for(var val in me.label_margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.label.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.label_margin[val]);
				}
			}
		}
		if(SJL.is_object(me.label_padding)){
			for(var val in me.label_padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.label.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.label_padding[val]);
				}
			}
		}
		
		/*create dom here*/
		/**********************************************************************/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		me.dom.add_css_class('sjl_form-group');
		
		
		me.textarea_textarea = SJL.create_element('textarea',{
           		id:me.base_id + '-' + this._component + '-' +'textarea_textarea',
			placeholder:me.place_holder,
			rows:me.num_of_rows.toString()
        	});
		if(me.input_color!=''){
			SJL.set_style(me.textarea_textarea,'color',me.input_color);
		}
		if(me.input_bg_color!=''){
			SJL.set_style(me.textarea_textarea,'background-color',me.input_bg_color);
		}
		if(me.input_bg_gradient!=''){
			SJL.set_style(me.textarea_textarea,'background',me.input_bg_gradient);
		}
		/*else first replace _ with " " in label text and use it as name*/
		if(SJL.trim(me.name)!=""){me.textarea_textarea.name=SJL.trim(me.name);}
		me.textarea_textarea.add_css_class('sjl_form-control');	
		if(me.input_size && me.input_size!=''){
			me.textarea_textarea.add_css_class('sjl_input-'+me.input_size);
		}
		
		
		me.textarea_textarea.innerHTML=me.data_value;

		me.div_textarea = SJL.create_element('div',{
            		id:me.base_id+ '-' + this._component + '-' +'div_textarea'
        	});
	if(me.display=='inline'){
			me.div_textarea.add_css_class('sjl_col-sm-'+(12-me.label_width).toString());
		}else{
			me.div_textarea.add_css_class('sjl_col-sm-12');
		}
		if(SJL.is_object(me.input_margin)){
			for(var val in me.input_margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.div_textarea.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.input_margin[val]);
				}
			}
		}
		if(SJL.is_object(me.input_padding)){
			for(var val in me.input_padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.div_textarea.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.input_padding[val]);
				}
			}
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['margin'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.margin[val]);
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					me.dom.style['padding'+SJL.ucfirst(val)]=SJL.generate_px_percent(me.padding[val]);
				}
			}
		}
		
		/*connect nodes together*/
		
		me.dom.appendChild(me.label.dom);
		me.div_textarea.appendChild(me.textarea_textarea);
		me.dom.appendChild(me.div_textarea);
		/****************************************************************************/
		/*some validity function registration for various type*/
		if(me.required){
            SJL.dom(me.textarea_textarea).set_attr('required','true');
			if(!me.validity_func){
				SJL.add_event(me.textarea_textarea,'change',me.data_validity,[me,me.textarea_textarea]);
				SJL.add_event(me.textarea_textarea,'focus',function(e,me,inp,nc){inp.style.backgroundColor=nc;},[me,me.textarea_textarea,me.normal_color]);
			}else{
				/*custom validity function is set*/
				SJL.add_event(me.textarea_textarea,'change',me.validity_func,[me,me.textarea_textarea]);
				SJL.add_event(me.textarea_textarea,'focus',function(e,me,inp,nc){inp.style.backgroundColor=nc;},[me,me.textarea_textarea,me.normal_color]);
			}
		}
		/*I guess it's over !!!*/
	
			//console.log('here only for this class');
			if(SJL.is_object(me.signals)){
				for(var sig in me.signals){
					SJL.add_event(me.textarea_textarea,sig,me.signals[sig],[me.textarea_textarea]);
				}
			}
		
	};
	this.data_validity=function(e,me,inp){
		var data = inp.value;
		if(!data || data=="" || SJL.trim(data)==""){
			me.textarea_textarea.style.backgroundColor=me.validity_color;
			if(me.validity_message){
				alert(me.validity_message.toString());
			}
			return false;
		}
	};
	this.get_place_holder=function(){
		var me = this;
		return me.place_holder;
	};
	this.set_text=function(data){
		var me = this;
		var temp = document.getElementById(me.textarea_textarea.id);
		temp.value = data.toString();
	};
	this.set_value=function(val){
		var me=this;
		return me.set_text(val);
	};
	this.get_name=function(){
		var me = this;
		return me.name;
	};
	this.set_name=function(d){
		var me = this;
		me.name = d;
		return me;
	};
	this.get_text=function(){
		var me = this;
		var temp = document.getElementById(me.textarea_textarea.id);
		return temp.value;
	};
	this.get_text_length=function(){
		var me = this;
		var temp = document.getElementById(me.textarea_textarea.id);
		return temp.value.length;
	};
	this.get_label=function(){
		var me = this;
		var temp = document.getElementById(me.label_textarea.id);
		return temp.textContent;
	};
	this.set_required=function(val){
		/*val can be true or false*/
		me.required=(val?true:false);
		me.label.required=(val?true:false);
	};
	this.get_input_size=function(){
		var me = this;
		return me.input_size;
	};
	this.set_input_size=function(data){
		var me = this;
		var arr=['mini','small','medium','large','xlarge','xxlarge','xxxlarge'];
		if(!SJL.is_in_array(data,arr)){
			return false;
		}
		var temp=SJL.dom('#'+me.input_textbox.id);
		arr.every(function(a){
			temp.remove_css_class('sjl_input-'+a);
		});
		temp.add_css_class('sjl_input-'+data);
		me.input_size=data;
		return me;
	};
	this.set_label_width=function(val){
		var me = this;
		/*set col-sm-X  0<=x<=12*/
		val=SJL.intVal(val);
		if(val>12 || val<0){return;}
		var label=document.getElementById(me.label.dom.id);
		var box=document.getElementById(me.div_textarea.id);
		if(!box || !label){return;}
		var css_class=label.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(label,css_class[i]);
		}
		SJL.add_css_class(label,'sjl_col-sm-'+val.toString());
		css_class=box.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(box,css_class[i]);
		}
		SJL.add_css_class(box,'sjl_col-sm-'+(12-val).toString());
		me.label_width=val;
		me.label.label_width=val;
		return;
	};
	this.get_label_width=function(){
		var me = this;
		return me.label_width;
	};
	this.get_input_bg_color=function(){
		var me = this;
		return me.input_bg_color;
	};
	this.get_input_bg_gradient=function(){
		var me = this;
		return me.input_bg_gradient;
	};
	this.get_num_of_rows=function(){
		var me = this;
		return me.num_of_rows;
	};
	this.get_has_label=function(){
		var me = this;
		return me.has_label;
	};
	this.get_input_color = function(){
		var me = this;
		return me.input_color;
	};
	this.init();
	return this;
};
/**
 * This is a textbox component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.textbox
 */
SJL.textbox=function(conf){
	conf = conf ||{};
	SJL.add_config(this,conf);
    this._component='textbox';        /*very important for creating id*/
	this.text=conf.text || 'My Label';
	this.name=conf.name || "";	/*specify name to ease form submition*/
	this.text_align=conf.text_align ||'';
	this.input_size=conf.input_size ||'';  /*could be  mini,small,medium,large,xlarge,xxlarge,xxxlarge*/
	this.place_holder=conf.place_holder ||'Enter your text here';
	this.seperator=conf.seperator||':';
	this.money_symbol=conf.money_symbol ||'$';
	this.display=conf.display ||'block';
	this.input_margin=conf.input_margin||{};
	this.label_margin=conf.label_margin||{};
	this.margin=conf.margin||{};
	this.has_icon=(conf.has_icon!=true)?false:true;
	this.icon=conf.icon||'fa-pencil';
	this.padding=conf.padding||{};
	this.signals=conf.signals||{};  /*register event here*/
	this.required=(conf.required==true)?true:false;
	this.data_value=conf.data_value||'';
	this.input_color=conf.input_color||'black';
	this.normal_color=conf.normal_color||'white';
	this.required_symbol=conf.required_symbol||'*';
	this.type=conf.type||'text';  /*text,email,money,number,password,mellicode*/
	this.validity_func=conf.validity_func||null;
	this.validity_color=conf.validity_color||'#FF7700';
	this.label_width=conf.label_width||2;  /* a number between 1 and 12 */
	this.validity_message=conf.validity_message||'Wrong data entry...';
	this.icon_click=conf.icon_click || null;
	this.input_bg_color=conf.input_bg_color||'';
	this.input_bg_gradient=conf.input_bg_gradient||'';
	this.has_label = (conf.has_label!=false)?true:false;
	
	this.init=function(){
		var me=this;
		me.base_id=SJL.generate_id(conf.id);
        	var class_name='textbox';    /*very fuckin important too!!!!(be local for sure)*/
		/*set margins*/
		if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		if(me.has_label == false){me.label_width = 0;}

		me.label = new SJL.label({
			text:me.text,
			required:me.required,
			required_symbol:me.required_symbol,
			text_align:me.text_align,
			seperator:me.seperator,
			display:me.display,
			label_width:me.label_width,
			font_name:me.font_name||'',
			font_style:me.font_style||'normal',
			font_weight:me.font_weight||'normal',
			font_size:me.font_size||'',
			color:me.color||'black'
		});
		//if has_label is true or false
		if(!me.has_label){
			SJL.dom(me.label.dom).hide();	
		}
		
		if(SJL.is_object(me.label_margin)){
			var a=me.label_margin;
			
			if(a.left){
				SJL.set_style(me.label.dom,'margin-left',SJL.generate_px_percent(a.left));
			}
			if(a.right){
				SJL.set_style(me.label.dom,'margin-right',SJL.generate_px_percent(a.right));
			}
			if(a.top){
				SJL.set_style(me.label.dom,'margin-top',SJL.generate_px_percent(a.top));
			}
			if(a.bottom){
				SJL.set_style(me.label.dom,'margin-bottom',SJL.generate_px_percent(a.bottom));
			}
		}
		if(SJL.is_object(me.label_padding)){
			var a=me.label_padding;
			if(a.left){
				SJL.set_style(me.label.dom,'padding-left',SJL.generate_px_percent(a.left));
			}
			if(a.right){
				SJL.set_style(me.label.dom,'padding-right',SJL.generate_px_percent(a.right));
			}
			if(a.top){
				SJL.set_style(me.label.dom,'padding-top',SJL.generate_px_percent(a.top));
			}
			if(a.bottom){
				SJL.set_style(me.label.dom,'padding-bottom',SJL.generate_px_percent(a.bottom));
			}
		}
		
		/*field is required or not*/
		
		/*create dom here*/
		me.dom=SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' + 'dom'
		});
		me.dom.add_css_class('sjl_form-group');

		me.input_textbox = SJL.create_element('input',{
		        id:me.base_id + '-' + this._component +'-' +'input_textbox',
			type:me.type,
			placeholder:me.place_holder
        	});
		if(me.input_bg_color!=''){
			SJL.set_style(me.input_textbox,'background-color',me.input_bg_color);
		}
		if(me.input_bg_gradient!=''){
			SJL.set_style(me.input_textbox,'background',me.input_bg_gradient);
		}
		SJL.set_attr(me.input_textbox,'value',me.data_value);
		/*else first replace _ with " " in label text and use it as name*/
		if(me.name!=""){SJL.set_attr(me.input_textbox,'name',me.name);}
		me.input_textbox.add_css_class('sjl_form-control');	
		
		if(me.input_color!=''){
			SJL.set_style(me.input_textbox,'color',me.input_color);
		}
		
		/*must fix here since innerHTML and textContents act weired in ie*/
		me.div_textbox_inner=SJL.create_element('div',{
            		id:me.base_id + '-' + this._component +'-' +'div_textbox_inner'
        	});
		me.i_textbox=SJL.create_element('i',{
            		id:me.base_id + '-' + this._component +'-' +'i_textbox'
        	});
		
		
		if(me.type=='password'){me.icon=me.icon || 'fa-lock';}
		if(me.type=='number'){me.icon=me.icon || 'fa-slack';}
		if(me.type=='email'){me.icon=me.icon || 'fa-envelope';}
		if(me.type=='money'){me.icon=me.icon || 'fa-money';}
		if(me.type=='mellicode'){me.icon=me.icon || 'fa-picture-o';}
		if(me.has_icon){
			me.i_textbox.add_css_class('sjl_fa');
			me.i_textbox.add_css_class(me.icon);
			me.div_textbox_inner.add_css_class('sjl_inner-addon');
			me.div_textbox_inner.add_css_class('sjl_left-addon');
			
			if(me.icon_click && SJL.is_function(me.icon_click)){
				SJL.dom(me.i_textbox).set_style('cursor','pointer');
				SJL.add_event(me.i_textbox,'click',me.icon_click,[me.input_textbox]);
			}
		}
		
		
		
		me.div_input_textbox = SJL.create_element('div',{
            id:me.base_id + '-' + this._component +'-' +'div_input_textbox'
        });
		
		if(SJL.is_object(me.input_margin)){
			for(var val in me.input_margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.div_input_textbox,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.input_margin[val]));
				}
			}
		}
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.margin[val]));
				}
			}
		}
		if(SJL.is_object(me.padding)){
			for(var val in me.padding){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'padding'+SJL.ucfirst(val),SJL.generate_px_percent(me.padding[val]));
				}
			}
		}
		if(me.display=='inline'){
			me.div_input_textbox.add_css_class('sjl_col-sm-'+(12-me.label_width).toString());
		}else{
			me.div_input_textbox.add_css_class('sjl_col-sm-12');
		}
		//
		/*connect nodes together*/
		
		if(me.input_size && me.input_size!=''){
			me.input_textbox.add_css_class('sjl_input-'+me.input_size);
		}
		me.dom.appendChild(me.label.dom);
		me.div_input_textbox.appendChild(me.div_textbox_inner);
		me.div_textbox_inner.appendChild(me.i_textbox);
		me.div_textbox_inner.appendChild(me.input_textbox);
		me.dom.appendChild(me.div_input_textbox);
		
		
		/*some validity function registration for various type*/
		if(!me.validity_func){
			if(me.type=='email'){
				/*work for firefox , chrome , ie9 and later */
				SJL.add_event(me.input_textbox,'change',me.email_validity,[me,me.input_textbox]);
				SJL.add_event(me.input_textbox,'focus',function(e,me,inp){SJL.set_style(me.input_textbox,'background-color',me.normal_color);},[me,me.input_textbox]);
			}else if(me.type=='number'){
				SJL.add_event(me.input_textbox,'change',me.number_validity,[me,me.input_textbox]);
				SJL.add_event(me.input_textbox,'focus',function(me,inp){SJL.set_style(me.input_textbox,'background-color',me.normal_color);},[me,me.input_textbox]);
			}
			else if (me.type=='money'){
				SJL.add_event(me.input_textbox,'change',me.money_validity,[me,me.input_textbox]);
				SJL.add_event(me.input_textbox,'focus',function(me,inp){SJL.set_style(me.input_textbox,'background-color',me.normal_color);},[me,me.input_textbox]);
			}else if(me.type=='mellicode'){
				SJL.add_event(me.input_textbox,'change',me.mellicode_validity,[me,me.input_textbox]);
				SJL.add_event(me.input_textbox,'focus',function(me,inp){SJL.set_style(me.input_textbox,'background-color',me.normal_color);},[me,me.input_textbox]);
			}
		}else{
			/*custom validity function is set*/
			SJL.add_event(me.input_textbox,'change',me.validity_func,[me,me.input_textbox]);
			SJL.add_event(me.input_textbox,'focus',function(me,inp){SJL.set_style(me.input_textbox,'background-color',me.normal_color);},[me,me.input_textbox]);
		}
		if(me.required){
            SJL.dom(me.input_textbox).set_attr('required','true');
			SJL.add_event(me.input_textbox,'change',me.required_validity,[me,me.input_textbox]);
		}
		/*I guess it's over !!!*/
		
			/*handle signals only for this class (it's a test for now)*/
			if(SJL.is_object(me.signals)){
				for(var sig in me.signals){
					SJL.add_event(me.input_textbox,sig,me.signals[sig],[me.input_textbox]);
				}
			}
		
	};
	this.required_validity=function(me,inp){
		var val=inp.value;
		if(me.required && val==""){
			SJL.message.alert('Warning',me.validity_message.toString());
			return false;
		}
		return true;
	};
	this.email_validity=function(e,me,inp){
		var value=inp.value;
		if(!SJL.valid_field_email(value,false,'')){
			SJL.set_style(me.input_textbox,'background-color',me.validity_color);
			if(me.validity_message){
				SJL.message.alert('Warning',me.validity_message.toString());
			}
		}
	};
	this.money_validity=function(me,inp){
		var value=inp.value;
		var temp_val="";
		try{
            value=value.replace(/,/g,'');
			for(var i=0;i<value.length;++i){
				temp_val+=(value[i]==me.money_symbol?'':value[i]);
			}
			temp_val=SJL.trim(temp_val);
			value=temp_val;
			//console.log(value);
			if(!SJL.is_number(value)){
				SJL.set_style(me.input_textbox,'background-color',me.validity_color);
				if(me.validity_message){
					SJL.message.alert('Warning',me.validity_message.toString());
				}
				return;
			}
            var val='';
            var count=0;
            for (var i=value.length;i>0;i--){
                if(count<3){
                    val+=value[i-1];
                    count++;
                }else{
                    val+=',';
                    val+=value[i-1];
                    count=1;
                }
            }
            val=val.split('').reverse().join('');
           // console.log(val);
            inp.value=val + ' ' + me.money_symbol;
        }catch(e){
            return -1;
        }
	};
	this.number_validity=function(me,inp){
		console.log("number of arguments is : " + arguments.length);
		console.log(me);
		var temp=SJL.dom("#" + inp.id);
		var val = temp.get_val();
		if(!SJL.is_number(val) ){
			SJL.set_style(me.input_textbox,'background-color',me.validity_color);
			if(me.validity_message){
				SJL.message.alert('Warning',me.validity_message.toString());
			}
		}
	};
	this.get_name=function(){
		var me = this;
		return me.name;
	};
	this.set_name=function(d){
		var me = this;
		me.name = d;
		return me;
	};
	this.mellicode_validity=function(me,inp){
		var code=inp.value;
		if(code==''){return;}
		if(!SJL.valid_field_mellicode(code,false,'')){
			SJL.set_style(me.input_textbox,'background-color',me.validity_color);
			if(me.validity_message){
				SJL.message.alert('Warning',me.validity_message.toString());
			}
			return false;
		}
		return true;
	};
	this.set_text=function(data){
		var me = this;
		var temp = document.getElementById(me.input_textbox.id);
		temp['value'] = data;
	};
	this.get_place_holder=function(){
		var me = this;
		return me.place_holder;
	};
	this.get_text=function(){
		var me = this;
		var temp = document.getElementById(me.input_textbox.id);
		return temp.value;
	};
	this.get_text_length=function(){
		var me = this;
		var temp = document.getElementById(me.input_textbox.id);
		return temp.value.length;
	};
	this.set_label_width=function(val){
		var me = this;
		/*set col-sm-X  0<=x<=12*/
		val=SJL.intVal(val);
		if(val>12 || val<0){return;}
		var label=document.getElementById(me.label.dom.id);
		var box=document.getElementById(me.div_input_textbox.id);
		if(!box || !label){return;}
		var css_class=label.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(label,css_class[i]);
		}
		SJL.add_css_class(label,'sjl_col-sm-'+val.toString());
		css_class=box.className;
		css_class=css_class.match(/sjl_col-sm-\d+/gi);
		for (var i=0;i<css_class.length;++i){
			SJL.remove_css_class(box,css_class[i]);
		}
		SJL.add_css_class(box,'sjl_col-sm-'+(12-val).toString());
		me.label.label_widht=val;
		me.label_width=val;
		return;
	};
	this.get_label_width=function(){
		var me = this;
		return me.label_width;
	};
	this.set_input_size=function(data){
		var me = this;
		var arr=['mini','small','medium','large','xlarge','xxlarge','xxxlarge'];
		if(!SJL.is_in_array(data,arr)){
			return false;
		}
		var temp=SJL.dom('#'+me.input_textbox.id);
		arr.every(function(a){
			temp.remove_css_class('sjl_input-'+a);
		});
		temp.add_css_class('sjl_input-'+data);
		me.input_size=data;
		return me;
	};
	this.get_input_size=function(){
		var me = this;
		return me.input_size;
	};
	this.set_value=function(val){
		var me=this;
		return me.set_text(val);
	};
	this.set_required=function(val){
		/*val can be true or false*/
		me.required=(val?true:false);
		me.label.required=(val?true:false);
	};
	this.get_required=function(){
		var me = this;
		return me.required;
	};
	this.get_input_color=function(){
		var me = this;
		return me.input_color;
	};
	this.get_has_icon=function(){
		var me=this;
		return me.has_icon;
	};
	this.set_has_icon=function(val){
		var me=this;
		me.has_icon=val?true:false;
		return me;
	};
	this.set_icon=function(val){
		var me=this;
		me.icon=val;
		return me;
	};
	this.get_icon=function(){
		var me=this;
		return me.icon;
	};
	this.get_input_bg_color=function(){
		var me = this;
		return me.input_bg_color;
	};
	this.get_input_bg_gradient=function(){
		var me = this;
		return me.input_bg_gradient;
	};
	this.get_has_label=function(){
		var me = this;
		return me.has_label;
	};
	/*a=/col-(m|s|x|l)(d|m|s|g)-\d+/gi*/
	this.init();
	return this;
};
/**
 * This is a uploadfile component.
 * @memberof SJL
 * @type {function}
 * @namespace SJL.uploadfile
 */
SJL.uploadfile=function(conf){
	conf=conf||{};
	SJL.add_config(this,conf);
	this._component='uploadfile';
	this.name=conf.name||"sjl_upload";
	this.font_size = conf.font_size || '';
    this.margin=conf.margin||{};
	this.init=function(){
		var me=this;
		me.base_id=SJL.generate_id(conf.id);
		var class_name='uploadfile';
        if(me.margin_top){me.margin.top=me.margin_top;}
		if(me.margin_bottom){me.margin.bottom=me.margin_bottom;}
		if(me.margin_left){me.margin.left=me.margin_left;}
		if(me.margin_right){me.margin.right=me.margin_right;}
		//todo
		me.dom = SJL.create_element('div',{
			id:me.base_id + '-' + this._component + '-' +'dom'
		});
		me.dom.add_css_class('sjl_form-group');
		
		
		me.input_uploadfile = SJL.create_element('input',{
			id:me.base_id + '-' + this._component + '-' +'input_uploadfile',
			type:'file',
			name:me.name
		});
		SJL.set_style(me.input_uploadfile,'margin-left','5px');
		if(SJL.is_object(me.margin)){
			for(var val in me.margin){
				var val_temp=SJL.trim(val).toLowerCase();
				if(val_temp=='left' || val_temp=='right' || val_temp == 'top' || val_temp == 'bottom'){
					SJL.set_style(me.dom,'margin'+SJL.ucfirst(val),SJL.generate_px_percent(me.margin[val]));
				}
			}
		}
		me.dom.appendChild(me.input_uploadfile);


	};
	this.get_name=function(){
		var me = this;
		return me.name;
	};
	this.init();
	return this;
};
    
