function toggleLight(element){
    var status = element.dataset.status;
    var lightID = element.dataset.id;
    console.log(status);
    $.ajax({
        type: "POST",
        url: "ajax/lightbulb.ajax.php",
        data: { 
                AJAX : (true),
                status : (status),
                ID : (lightID)
                } ,
        success: function (data) {
            console.log("Success! " + data);
            //update button div
            $('#lightbulb_on_'+lightID).toggle();
            $('#lightbulb_off_'+lightID).toggle();
            if(status === "on"){
                element.dataset.status = "off";
            }else{
                element.dataset.status = "on";
            }
        },
        error: function(data){
            console.log("Error" + data);
        }
    });
}

//left this method for now, may prove to be a good generic device method
function toggleLock(element){
    var lockId = element.dataset.id;
    var ajax_handler = element.dataset.handler;
    $.ajax({
        type: "POST",
        url: "ajax/" + ajax_handler,
        data: {
            AJAX : (true),
            ID : (lockId)
        },
        success: function(data){
            console.log("Success! " + data);
            //update button div
            $('#locked_'+lockId).toggle();
            $('#unlocked_'+lockId).toggle();
        },
        error: function(data){
            console.log("Error: " + data);
        }
    });
    
}

function menuButtonHandler(classname,method){
    ajax_handler = "menuHandler.ajax.php";
    $('.content').html('<h3>Loading...</h3>');
    $.ajax({
        type: "POST",
        url: "ajax/" + ajax_handler,
        data: {
            AJAX : (true),
            className : (classname),
            methodName : (method),
        },
        success: function(data){
            console.log("Success! " + data);
            $('.content').html(data);
        },
        error: function(data){
            console.log("Error: " + data);
            $('.content').html("Could not access menu");
        }
    });
}

function addNewUser(form){
    var inputs = $(form).find('[type="text"]');
    for(var i =0; i<3; i++){
        console.log($(inputs[i]));
        if($(inputs[i]).val() === ""){
            $(inputs[i]).css("background-color","salmon");
            alert("Please fill in the indicated field");
            return;
        }
    }
    var name = $('[name="username"').val();
    var password = $('[name="password"').val();
    var check = $('[name="passwordCheck"').val();
    console.log(password + " == " + check);
    if(password !== check){
        $('[name="passwordCheck"]').css("background-color","salmon");
        alert('The second password must match the first');
        return;
    }
    $.ajax({
        type: "POST",
        url: "ajax/addUser.ajax.php",
        data: {
            AJAX : (true),
            username : (name),
            password : (password),
        },
        success: function(data){
            console.log("Success! " + data);
            $('.content').html(data);
        },
        error: function(data){
            console.log("Error: " + data);
            $('.content').html("Could not add user");
        }
    });    
    
}
