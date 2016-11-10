// JavaScript Document
$(function(){
	// INITIALIZES SLICKQUIZ PLUGIN
	"use strict";
    $('#slickQuiz').slickQuiz();

	// INITIALIZES BOOTSTRAP POPOVERS
	$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
	});

	// UPDATES ACTIVE TAB BASED ON NEXT/PREVIOUS BUTTON CLICK:
	// 1. Ensure the final lecture tab's "next" button has the id "toreview" in your HTML file. You do not need to edit anything here.
	
	
	// 2. Set the previous button on the quiz to have the right id to link back to your last lecture page. Refer to the button ids below for information on which id to use. By default, the HTML id for the review's back button is set to id "lecture7prev", which will link it to Lecture 6. Again, you will need to make the edits in your HTML file, not here.
	
	//JS for buttons:

	$('#toreview').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#review"]').tab('show');
    });	
	
    $('#overviewnext').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#activities"]').tab('show');
    });
	
	$('#activitiesprev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#overview"]').tab('show');
    });
	
	$('#activitiesnext').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture1"]').tab('show');
    });

    $('#lecture1next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture2"]').tab('show');
    });

    $('#lecture1prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#activities"]').tab('show');
    });

    $('#lecture2next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture3"]').tab('show');
    });

    $('#lecture2prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture1"]').tab('show');
    });

    $('#lecture3next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture4"]').tab('show');
    });

    $('#lecture3prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture2"]').tab('show');
    });

    $('#lecture4next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture5"]').tab('show');
    });

    $('#lecture4prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture3"]').tab('show');
    });

    $('#lecture5next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture6"]').tab('show');
    });

    $('#lecture5prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture4"]').tab('show');
    });

    $('#lecture6next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture7"]').tab('show');
    });

    $('#lecture6prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture5"]').tab('show');
    });
	
    $('#lecture7next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture8"]').tab('show');
    });

    $('#lecture7prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture6"]').tab('show');
    });
		
    $('#lecture8next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture9"]').tab('show');
    });

    $('#lecture8prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture7"]').tab('show');
    });
		
    $('#lecture9next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture10"]').tab('show');
    });

    $('#lecture9prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture8"]').tab('show');
    });
		
    $('#lecture10next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture11"]').tab('show');
    });

    $('#lecture10prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture9"]').tab('show');
    });
		
    $('#lecture11next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture12"]').tab('show');
    });

    $('#lecture11prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture10"]').tab('show');
    });
		
    $('#lecture12next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture13"]').tab('show');
    });

    $('#lecture12prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture11"]').tab('show');
    });
		
    $('#lecture13next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture14"]').tab('show');
    });

    $('#lecture13prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture12"]').tab('show');
    });
		
    $('#lecture14next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture15"]').tab('show');
    });

    $('#lecture14prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture13"]').tab('show');
    });
		
    $('#lecture15next').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture16"]').tab('show');
    });

    $('#lecture15prev').click(function(e){
    	e.preventDefault();
        $('#mytabs a[href="#lecture14"]').tab('show');
    });

});