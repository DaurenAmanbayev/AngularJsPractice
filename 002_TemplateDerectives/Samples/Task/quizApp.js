var model=[{
            value: '1',                
            question: "Question 1",
            answers: [
                { content: "HTML, CSS", check: true, pass:false },
                { content: "JavaScript Essential", check: false, pass:false },
                { content: "JavaScript Advanced", check: false, pass: false },
                { content: "HTML5 &amp; CSS3", check: false pass: false },
                { content: "AngularJS", check: false, pass: false }]
            },
            {
            value: '2',
            question: "Question 2",
            answers: [
                { content: "Marvel", check: true },
                { content: "DC", check: false },
                { content: "Shonen Jump", check: false }]                
            }
        ];

var app = angular.module("testApp", []);

app.controller("TestAppCtrl", function ($scope) {

    $scope.quiz = model;    
  
    $scope.mode = $scope.quiz[0];

});